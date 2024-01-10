// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt,
} from "@graphprotocol/graph-ts";

export class Enroll extends ethereum.Event {
  get params(): Enroll__Params {
    return new Enroll__Params(this);
  }
}

export class Enroll__Params {
  _event: Enroll;

  constructor(event: Enroll) {
    this._event = event;
  }

  get tournamentID(): i32 {
    return this._event.parameters[0].value.toI32();
  }

  get user(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get numParticipants(): i32 {
    return this._event.parameters[2].value.toI32();
  }

  get totalCollectedAmount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class ResultCreated extends ethereum.Event {
  get params(): ResultCreated__Params {
    return new ResultCreated__Params(this);
  }
}

export class ResultCreated__Params {
  _event: ResultCreated;

  constructor(event: ResultCreated) {
    this._event = event;
  }

  get tournamentID(): i32 {
    return this._event.parameters[0].value.toI32();
  }

  get player(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get scoreNumber(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class TournamentCreated extends ethereum.Event {
  get params(): TournamentCreated__Params {
    return new TournamentCreated__Params(this);
  }
}

export class TournamentCreated__Params {
  _event: TournamentCreated;

  constructor(event: TournamentCreated) {
    this._event = event;
  }

  get tournamentID(): i32 {
    return this._event.parameters[0].value.toI32();
  }

  get initData(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get endDate(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get deFiBridgeAddress(): Address {
    return this._event.parameters[3].value.toAddress();
  }
}

export class TournamentManager__getTournamentIdsResult {
  value0: Array<BigInt>;
  value1: Array<BigInt>;

  constructor(value0: Array<BigInt>, value1: Array<BigInt>) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigIntArray(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigIntArray(this.value1));
    return map;
  }

  getEthereumTournamentIDs(): Array<BigInt> {
    return this.value0;
  }

  getErc20TournamentIDs(): Array<BigInt> {
    return this.value1;
  }
}

export class TournamentManager__tournamentsResult {
  value0: i32;
  value1: i32;
  value2: i32;
  value3: i32;
  value4: BigInt;
  value5: BigInt;
  value6: BigInt;
  value7: Address;
  value8: Bytes;
  value9: Bytes;
  value10: boolean;

  constructor(
    value0: i32,
    value1: i32,
    value2: i32,
    value3: i32,
    value4: BigInt,
    value5: BigInt,
    value6: BigInt,
    value7: Address,
    value8: Bytes,
    value9: Bytes,
    value10: boolean,
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
    this.value8 = value8;
    this.value9 = value9;
    this.value10 = value10;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set(
      "value0",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value0)),
    );
    map.set(
      "value1",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value1)),
    );
    map.set(
      "value2",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value2)),
    );
    map.set(
      "value3",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value3)),
    );
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    map.set("value6", ethereum.Value.fromUnsignedBigInt(this.value6));
    map.set("value7", ethereum.Value.fromAddress(this.value7));
    map.set("value8", ethereum.Value.fromFixedBytes(this.value8));
    map.set("value9", ethereum.Value.fromFixedBytes(this.value9));
    map.set("value10", ethereum.Value.fromBoolean(this.value10));
    return map;
  }

  getID(): i32 {
    return this.value0;
  }

  getMinParticipants(): i32 {
    return this.value1;
  }

  getMaxParticipants(): i32 {
    return this.value2;
  }

  getNumParticipants(): i32 {
    return this.value3;
  }

  getEnrollmentAmount(): BigInt {
    return this.value4;
  }

  getInitDate(): BigInt {
    return this.value5;
  }

  getEndDate(): BigInt {
    return this.value6;
  }

  getDeFiBridgeAddress(): Address {
    return this.value7;
  }

  getResultsSpongeHash(): Bytes {
    return this.value8;
  }

  getMerkleRoot(): Bytes {
    return this.value9;
  }

  getAborted(): boolean {
    return this.value10;
  }
}

export class TournamentManager extends ethereum.SmartContract {
  static bind(address: Address): TournamentManager {
    return new TournamentManager("TournamentManager", address);
  }

  getAcceptedTokens(idTournament: i32): Array<Address> {
    let result = super.call(
      "getAcceptedTokens",
      "getAcceptedTokens(uint16):(address[])",
      [ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(idTournament))],
    );

    return result[0].toAddressArray();
  }

  try_getAcceptedTokens(
    idTournament: i32,
  ): ethereum.CallResult<Array<Address>> {
    let result = super.tryCall(
      "getAcceptedTokens",
      "getAcceptedTokens(uint16):(address[])",
      [ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(idTournament))],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddressArray());
  }

  getMerkleRoot(idTournament: i32): Bytes {
    let result = super.call(
      "getMerkleRoot",
      "getMerkleRoot(uint16):(bytes32)",
      [ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(idTournament))],
    );

    return result[0].toBytes();
  }

  try_getMerkleRoot(idTournament: i32): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "getMerkleRoot",
      "getMerkleRoot(uint16):(bytes32)",
      [ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(idTournament))],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  getParticipants(idTournament: i32, participantAddress: Address): boolean {
    let result = super.call(
      "getParticipants",
      "getParticipants(uint16,address):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(idTournament)),
        ethereum.Value.fromAddress(participantAddress),
      ],
    );

    return result[0].toBoolean();
  }

  try_getParticipants(
    idTournament: i32,
    participantAddress: Address,
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "getParticipants",
      "getParticipants(uint16,address):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(idTournament)),
        ethereum.Value.fromAddress(participantAddress),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  getSpongeHash(idTournament: i32): Bytes {
    let result = super.call(
      "getSpongeHash",
      "getSpongeHash(uint16):(bytes32)",
      [ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(idTournament))],
    );

    return result[0].toBytes();
  }

  try_getSpongeHash(idTournament: i32): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "getSpongeHash",
      "getSpongeHash(uint16):(bytes32)",
      [ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(idTournament))],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  getTournamentIds(): TournamentManager__getTournamentIdsResult {
    let result = super.call(
      "getTournamentIds",
      "getTournamentIds():(uint256[],uint256[])",
      [],
    );

    return new TournamentManager__getTournamentIdsResult(
      result[0].toBigIntArray(),
      result[1].toBigIntArray(),
    );
  }

  try_getTournamentIds(): ethereum.CallResult<TournamentManager__getTournamentIdsResult> {
    let result = super.tryCall(
      "getTournamentIds",
      "getTournamentIds():(uint256[],uint256[])",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new TournamentManager__getTournamentIdsResult(
        value[0].toBigIntArray(),
        value[1].toBigIntArray(),
      ),
    );
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  tournaments(param0: BigInt): TournamentManager__tournamentsResult {
    let result = super.call(
      "tournaments",
      "tournaments(uint256):(uint16,uint8,uint16,uint16,uint256,uint64,uint64,address,bytes32,bytes32,bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)],
    );

    return new TournamentManager__tournamentsResult(
      result[0].toI32(),
      result[1].toI32(),
      result[2].toI32(),
      result[3].toI32(),
      result[4].toBigInt(),
      result[5].toBigInt(),
      result[6].toBigInt(),
      result[7].toAddress(),
      result[8].toBytes(),
      result[9].toBytes(),
      result[10].toBoolean(),
    );
  }

  try_tournaments(
    param0: BigInt,
  ): ethereum.CallResult<TournamentManager__tournamentsResult> {
    let result = super.tryCall(
      "tournaments",
      "tournaments(uint256):(uint16,uint8,uint16,uint16,uint256,uint64,uint64,address,bytes32,bytes32,bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new TournamentManager__tournamentsResult(
        value[0].toI32(),
        value[1].toI32(),
        value[2].toI32(),
        value[3].toI32(),
        value[4].toBigInt(),
        value[5].toBigInt(),
        value[6].toBigInt(),
        value[7].toAddress(),
        value[8].toBytes(),
        value[9].toBytes(),
        value[10].toBoolean(),
      ),
    );
  }
}

export class AbortERC20Call extends ethereum.Call {
  get inputs(): AbortERC20Call__Inputs {
    return new AbortERC20Call__Inputs(this);
  }

  get outputs(): AbortERC20Call__Outputs {
    return new AbortERC20Call__Outputs(this);
  }
}

export class AbortERC20Call__Inputs {
  _call: AbortERC20Call;

  constructor(call: AbortERC20Call) {
    this._call = call;
  }

  get idTournament(): i32 {
    return this._call.inputValues[0].value.toI32();
  }
}

export class AbortERC20Call__Outputs {
  _call: AbortERC20Call;

  constructor(call: AbortERC20Call) {
    this._call = call;
  }
}

export class AbortETHCall extends ethereum.Call {
  get inputs(): AbortETHCall__Inputs {
    return new AbortETHCall__Inputs(this);
  }

  get outputs(): AbortETHCall__Outputs {
    return new AbortETHCall__Outputs(this);
  }
}

export class AbortETHCall__Inputs {
  _call: AbortETHCall;

  constructor(call: AbortETHCall) {
    this._call = call;
  }

  get idTournament(): i32 {
    return this._call.inputValues[0].value.toI32();
  }
}

export class AbortETHCall__Outputs {
  _call: AbortETHCall;

  constructor(call: AbortETHCall) {
    this._call = call;
  }
}

export class CreateLeaderBoardMerkleTreeCall extends ethereum.Call {
  get inputs(): CreateLeaderBoardMerkleTreeCall__Inputs {
    return new CreateLeaderBoardMerkleTreeCall__Inputs(this);
  }

  get outputs(): CreateLeaderBoardMerkleTreeCall__Outputs {
    return new CreateLeaderBoardMerkleTreeCall__Outputs(this);
  }
}

export class CreateLeaderBoardMerkleTreeCall__Inputs {
  _call: CreateLeaderBoardMerkleTreeCall;

  constructor(call: CreateLeaderBoardMerkleTreeCall) {
    this._call = call;
  }

  get idTournament(): i32 {
    return this._call.inputValues[0].value.toI32();
  }

  get bytesResultsData(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get positions(): Array<i32> {
    return this._call.inputValues[2].value.toI32Array();
  }
}

export class CreateLeaderBoardMerkleTreeCall__Outputs {
  _call: CreateLeaderBoardMerkleTreeCall;

  constructor(call: CreateLeaderBoardMerkleTreeCall) {
    this._call = call;
  }
}

export class CreateTournamentCall extends ethereum.Call {
  get inputs(): CreateTournamentCall__Inputs {
    return new CreateTournamentCall__Inputs(this);
  }

  get outputs(): CreateTournamentCall__Outputs {
    return new CreateTournamentCall__Outputs(this);
  }
}

export class CreateTournamentCall__Inputs {
  _call: CreateTournamentCall;

  constructor(call: CreateTournamentCall) {
    this._call = call;
  }

  get _maxParticipants(): i32 {
    return this._call.inputValues[0].value.toI32();
  }

  get _minParticipants(): i32 {
    return this._call.inputValues[1].value.toI32();
  }

  get _enrollmentAmount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _acceptedTokens(): Array<Address> {
    return this._call.inputValues[3].value.toAddressArray();
  }

  get _initDate(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get _endDate(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get _deFiBridgeToClone(): Address {
    return this._call.inputValues[6].value.toAddress();
  }

  get _deFiProtocolAddresses(): Array<Address> {
    return this._call.inputValues[7].value.toAddressArray();
  }
}

export class CreateTournamentCall__Outputs {
  _call: CreateTournamentCall;

  constructor(call: CreateTournamentCall) {
    this._call = call;
  }
}

export class EndERC20TournamentCall extends ethereum.Call {
  get inputs(): EndERC20TournamentCall__Inputs {
    return new EndERC20TournamentCall__Inputs(this);
  }

  get outputs(): EndERC20TournamentCall__Outputs {
    return new EndERC20TournamentCall__Outputs(this);
  }
}

export class EndERC20TournamentCall__Inputs {
  _call: EndERC20TournamentCall;

  constructor(call: EndERC20TournamentCall) {
    this._call = call;
  }

  get idTournament(): i32 {
    return this._call.inputValues[0].value.toI32();
  }
}

export class EndERC20TournamentCall__Outputs {
  _call: EndERC20TournamentCall;

  constructor(call: EndERC20TournamentCall) {
    this._call = call;
  }
}

export class EndETHTournamentCall extends ethereum.Call {
  get inputs(): EndETHTournamentCall__Inputs {
    return new EndETHTournamentCall__Inputs(this);
  }

  get outputs(): EndETHTournamentCall__Outputs {
    return new EndETHTournamentCall__Outputs(this);
  }
}

export class EndETHTournamentCall__Inputs {
  _call: EndETHTournamentCall;

  constructor(call: EndETHTournamentCall) {
    this._call = call;
  }

  get idTournament(): i32 {
    return this._call.inputValues[0].value.toI32();
  }
}

export class EndETHTournamentCall__Outputs {
  _call: EndETHTournamentCall;

  constructor(call: EndETHTournamentCall) {
    this._call = call;
  }
}

export class EnrollWithERC20Call extends ethereum.Call {
  get inputs(): EnrollWithERC20Call__Inputs {
    return new EnrollWithERC20Call__Inputs(this);
  }

  get outputs(): EnrollWithERC20Call__Outputs {
    return new EnrollWithERC20Call__Outputs(this);
  }
}

export class EnrollWithERC20Call__Inputs {
  _call: EnrollWithERC20Call;

  constructor(call: EnrollWithERC20Call) {
    this._call = call;
  }

  get idTournament(): i32 {
    return this._call.inputValues[0].value.toI32();
  }
}

export class EnrollWithERC20Call__Outputs {
  _call: EnrollWithERC20Call;

  constructor(call: EnrollWithERC20Call) {
    this._call = call;
  }
}

export class EnrollWithETHCall extends ethereum.Call {
  get inputs(): EnrollWithETHCall__Inputs {
    return new EnrollWithETHCall__Inputs(this);
  }

  get outputs(): EnrollWithETHCall__Outputs {
    return new EnrollWithETHCall__Outputs(this);
  }
}

export class EnrollWithETHCall__Inputs {
  _call: EnrollWithETHCall;

  constructor(call: EnrollWithETHCall) {
    this._call = call;
  }

  get idTournament(): i32 {
    return this._call.inputValues[0].value.toI32();
  }
}

export class EnrollWithETHCall__Outputs {
  _call: EnrollWithETHCall;

  constructor(call: EnrollWithETHCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetResultCall extends ethereum.Call {
  get inputs(): SetResultCall__Inputs {
    return new SetResultCall__Inputs(this);
  }

  get outputs(): SetResultCall__Outputs {
    return new SetResultCall__Outputs(this);
  }
}

export class SetResultCall__Inputs {
  _call: SetResultCall;

  constructor(call: SetResultCall) {
    this._call = call;
  }

  get idTournament(): i32 {
    return this._call.inputValues[0].value.toI32();
  }

  get player(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get newScore(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SetResultCall__Outputs {
  _call: SetResultCall;

  constructor(call: SetResultCall) {
    this._call = call;
  }
}

export class StartERC20TournamentCall extends ethereum.Call {
  get inputs(): StartERC20TournamentCall__Inputs {
    return new StartERC20TournamentCall__Inputs(this);
  }

  get outputs(): StartERC20TournamentCall__Outputs {
    return new StartERC20TournamentCall__Outputs(this);
  }
}

export class StartERC20TournamentCall__Inputs {
  _call: StartERC20TournamentCall;

  constructor(call: StartERC20TournamentCall) {
    this._call = call;
  }

  get idTournament(): i32 {
    return this._call.inputValues[0].value.toI32();
  }
}

export class StartERC20TournamentCall__Outputs {
  _call: StartERC20TournamentCall;

  constructor(call: StartERC20TournamentCall) {
    this._call = call;
  }
}

export class StartETHTournamentCall extends ethereum.Call {
  get inputs(): StartETHTournamentCall__Inputs {
    return new StartETHTournamentCall__Inputs(this);
  }

  get outputs(): StartETHTournamentCall__Outputs {
    return new StartETHTournamentCall__Outputs(this);
  }
}

export class StartETHTournamentCall__Inputs {
  _call: StartETHTournamentCall;

  constructor(call: StartETHTournamentCall) {
    this._call = call;
  }

  get idTournament(): i32 {
    return this._call.inputValues[0].value.toI32();
  }
}

export class StartETHTournamentCall__Outputs {
  _call: StartETHTournamentCall;

  constructor(call: StartETHTournamentCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class VerifyAndClaimCall extends ethereum.Call {
  get inputs(): VerifyAndClaimCall__Inputs {
    return new VerifyAndClaimCall__Inputs(this);
  }

  get outputs(): VerifyAndClaimCall__Outputs {
    return new VerifyAndClaimCall__Outputs(this);
  }
}

export class VerifyAndClaimCall__Inputs {
  _call: VerifyAndClaimCall;

  constructor(call: VerifyAndClaimCall) {
    this._call = call;
  }

  get idTournament(): i32 {
    return this._call.inputValues[0].value.toI32();
  }

  get isLeft(): Array<boolean> {
    return this._call.inputValues[1].value.toBooleanArray();
  }

  get position(): i32 {
    return this._call.inputValues[2].value.toI32();
  }

  get merkleProof(): Array<Bytes> {
    return this._call.inputValues[3].value.toBytesArray();
  }
}

export class VerifyAndClaimCall__Outputs {
  _call: VerifyAndClaimCall;

  constructor(call: VerifyAndClaimCall) {
    this._call = call;
  }
}
