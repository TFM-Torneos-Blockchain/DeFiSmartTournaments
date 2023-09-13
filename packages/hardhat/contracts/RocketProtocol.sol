// SPDX-License-Identifier: GPL-3.0-only
pragma solidity >0.5.0 <0.9.0;

import "./interfaces/IRocketStorage.sol";
import "./interfaces/IRocketDepositPool.sol";
import "./interfaces/IRocketTokenRETH.sol";

contract RocketProtocol {
    // Storage
    address private constant ROCKET_DEPOSIT_POOL =
        0xa9A6A14A3643690D0286574976F45abBDAD8f505; // Goerli Testnet
    address private constant ROCKET_STORAGE =
        0xd8Cd47263414aFEca62d6e2a3917d6600abDceB3; // Goerli Testnet
    address private constant ROCKET_TOKEN_RETH =
        0x178E141a0E3b34152f73Ff610437A7bf9B83267A; // Goerli Testnet

    mapping(address => uint256) balances;

    IRocketDepositPool public rocketDepositPool;
    IRocketStorage public rocketStorage;
    IRocketTokenRETH public rocketTokenRETH;

    // Constructor
    constructor() {
        rocketDepositPool = IRocketDepositPool(ROCKET_DEPOSIT_POOL);
        rocketStorage = IRocketStorage(ROCKET_STORAGE);
        rocketTokenRETH = IRocketTokenRETH(ROCKET_TOKEN_RETH);
    }

    // Read-Only functions
    function balanceOfRethofSender() public view  returns (uint256) {
        return rocketTokenRETH.balanceOf(msg.sender);
    } 

    function balanceOfRethofContract() public view  returns (uint256) {
        return rocketTokenRETH.balanceOf(address(this));
    } 

    function startETH(uint _amount_of_tokens) external payable {
        require(msg.value == _amount_of_tokens);
        startDeFiBridge(_amount_of_tokens);
    }
    // Change-State functions
    function deposit(uint _amount_of_tokens) internal payable {
        // Check deposit amount
        require(msg.value > 0.01 ether, "Invalid deposit amount, minimum deposit it's 0.01 ETH");
        // Forward deposit to RP & get amount of rETH minted
        uint256 rethBalance1 = rocketTokenRETH.balanceOf(address(this));
        rocketDepositPool.deposit{value: _amount_of_tokens}();
        uint256 rethBalance2 = rocketTokenRETH.balanceOf(address(this));
        require(rethBalance2 > rethBalance1, "No rETH was minted");
        uint256 rethMinted = rethBalance2 - rethBalance1;
        // Update user's balance
        balances[msg.sender] += rethMinted;
    }

    // After 24 hours it's possible to transfer the tokens
    function withdraw() external {
        // Transfer rETH to caller
        uint256 balance = balances[msg.sender];
        balances[msg.sender] = 0;
        require(
            rocketTokenRETH.transfer(msg.sender, balance),
            "rETH was not transferred to caller"
        );
    }

    function transferRethToContract() public {
        uint256 rethBalance = rocketTokenRETH.balanceOf(msg.sender);
        //require(rethBalance > 0, "Amount of rETH must be greaten than 0");
        // Transfer rETH to the contract after approve
        rocketTokenRETH.transferFrom(msg.sender,address(this), rethBalance);
    }

    function claimReward() public {
        // Burn rETH for ETH
        rocketTokenRETH.burn(balanceOfRethofContract());
        // Transfer ETH to the sender 
        payable(msg.sender).transfer(address(this).balance);
    }
}
