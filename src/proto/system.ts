/* eslint-disable */
import { GameFeatureVersion } from "./wm";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "sys.protobuf";

export enum State {
  State_None = 0,
  State_Checking = 1,
  State_NG = 2,
  State_OK = 3,
  UNRECOGNIZED = -1,
}

export function stateFromJSON(object: any): State {
  switch (object) {
    case 0:
    case "State_None":
      return State.State_None;
    case 1:
    case "State_Checking":
      return State.State_Checking;
    case 2:
    case "State_NG":
      return State.State_NG;
    case 3:
    case "State_OK":
      return State.State_OK;
    case -1:
    case "UNRECOGNIZED":
    default:
      return State.UNRECOGNIZED;
  }
}

export function stateToJSON(object: State): string {
  switch (object) {
    case State.State_None:
      return "State_None";
    case State.State_Checking:
      return "State_Checking";
    case State.State_NG:
      return "State_NG";
    case State.State_OK:
      return "State_OK";
    case State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum BanaCoinPaymentState {
  BC_SUCCESS = 0,
  BC_SHORTAGE = 1,
  BC_BNID_MEMBER_ERROR = 2,
  BC_UNKNOWN_ERROR = 3,
  BC_BNID_SYSTEM_ERROR = 4,
  BC_BNID_VERIFY_ERROR = 5,
  BC_BNID_EXECUTE_ERROR = 6,
  BC_BNID_SERVER_UNAVAILABLE = 99,
  UNRECOGNIZED = -1,
}

export function banaCoinPaymentStateFromJSON(
  object: any
): BanaCoinPaymentState {
  switch (object) {
    case 0:
    case "BC_SUCCESS":
      return BanaCoinPaymentState.BC_SUCCESS;
    case 1:
    case "BC_SHORTAGE":
      return BanaCoinPaymentState.BC_SHORTAGE;
    case 2:
    case "BC_BNID_MEMBER_ERROR":
      return BanaCoinPaymentState.BC_BNID_MEMBER_ERROR;
    case 3:
    case "BC_UNKNOWN_ERROR":
      return BanaCoinPaymentState.BC_UNKNOWN_ERROR;
    case 4:
    case "BC_BNID_SYSTEM_ERROR":
      return BanaCoinPaymentState.BC_BNID_SYSTEM_ERROR;
    case 5:
    case "BC_BNID_VERIFY_ERROR":
      return BanaCoinPaymentState.BC_BNID_VERIFY_ERROR;
    case 6:
    case "BC_BNID_EXECUTE_ERROR":
      return BanaCoinPaymentState.BC_BNID_EXECUTE_ERROR;
    case 99:
    case "BC_BNID_SERVER_UNAVAILABLE":
      return BanaCoinPaymentState.BC_BNID_SERVER_UNAVAILABLE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return BanaCoinPaymentState.UNRECOGNIZED;
  }
}

export function banaCoinPaymentStateToJSON(
  object: BanaCoinPaymentState
): string {
  switch (object) {
    case BanaCoinPaymentState.BC_SUCCESS:
      return "BC_SUCCESS";
    case BanaCoinPaymentState.BC_SHORTAGE:
      return "BC_SHORTAGE";
    case BanaCoinPaymentState.BC_BNID_MEMBER_ERROR:
      return "BC_BNID_MEMBER_ERROR";
    case BanaCoinPaymentState.BC_UNKNOWN_ERROR:
      return "BC_UNKNOWN_ERROR";
    case BanaCoinPaymentState.BC_BNID_SYSTEM_ERROR:
      return "BC_BNID_SYSTEM_ERROR";
    case BanaCoinPaymentState.BC_BNID_VERIFY_ERROR:
      return "BC_BNID_VERIFY_ERROR";
    case BanaCoinPaymentState.BC_BNID_EXECUTE_ERROR:
      return "BC_BNID_EXECUTE_ERROR";
    case BanaCoinPaymentState.BC_BNID_SERVER_UNAVAILABLE:
      return "BC_BNID_SERVER_UNAVAILABLE";
    case BanaCoinPaymentState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Log {
  errors: Log_Error[];
}

export interface Log_Error {
  timestamp: number;
  code: number;
}

export interface BanaCoinPaymentLog {
  payments: BanaCoinPaymentLog_Payment[];
}

export interface BanaCoinPaymentLog_Payment {
  date: number;
  contactNumber: string;
  state: BanaCoinPaymentState;
  cost: number;
  accessCode: string;
  personId: string;
}

export interface Operation {
  authorizationAt: number;
  featureVersion: GameFeatureVersion | undefined;
}

export interface Status {
  state: State;
  name: string;
  address: number;
  value: number;
  value2: number;
}

export interface Command {
  sequence: number;
  ntp: string;
  checkCable: string;
  renewDhcp: string;
  setDate: number;
  syncDate: string;
  ping: number[];
  traceRoute: number;
  checkPacket: string;
  reboot: string;
  checkPkg: string;
}

export interface Reply {
  sequence: number;
  ntp: Status | undefined;
  checkCable: Status | undefined;
  renewDhcp: Status | undefined;
  setDate: Status | undefined;
  syncDate: Status | undefined;
  ping: Status[];
  traceRoute: Status | undefined;
  checkPacket: Status | undefined;
  reboot: Status | undefined;
  checkPkg: Status | undefined;
}

function createBaseLog(): Log {
  return { errors: [] };
}

export const Log = {
  encode(message: Log, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.errors) {
      Log_Error.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Log {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLog();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.errors.push(Log_Error.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Log {
    return {
      errors: Array.isArray(object?.errors)
        ? object.errors.map((e: any) => Log_Error.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Log): unknown {
    const obj: any = {};
    if (message.errors) {
      obj.errors = message.errors.map((e) =>
        e ? Log_Error.toJSON(e) : undefined
      );
    } else {
      obj.errors = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Log>, I>>(object: I): Log {
    const message = createBaseLog();
    message.errors = object.errors?.map((e) => Log_Error.fromPartial(e)) || [];
    return message;
  },
};

function createBaseLog_Error(): Log_Error {
  return { timestamp: 0, code: 0 };
}

export const Log_Error = {
  encode(
    message: Log_Error,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.timestamp !== 0) {
      writer.uint32(8).uint32(message.timestamp);
    }
    if (message.code !== 0) {
      writer.uint32(16).uint32(message.code);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Log_Error {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLog_Error();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timestamp = reader.uint32();
          break;
        case 2:
          message.code = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Log_Error {
    return {
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
      code: isSet(object.code) ? Number(object.code) : 0,
    };
  },

  toJSON(message: Log_Error): unknown {
    const obj: any = {};
    message.timestamp !== undefined &&
      (obj.timestamp = Math.round(message.timestamp));
    message.code !== undefined && (obj.code = Math.round(message.code));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Log_Error>, I>>(
    object: I
  ): Log_Error {
    const message = createBaseLog_Error();
    message.timestamp = object.timestamp ?? 0;
    message.code = object.code ?? 0;
    return message;
  },
};

function createBaseBanaCoinPaymentLog(): BanaCoinPaymentLog {
  return { payments: [] };
}

export const BanaCoinPaymentLog = {
  encode(
    message: BanaCoinPaymentLog,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.payments) {
      BanaCoinPaymentLog_Payment.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BanaCoinPaymentLog {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBanaCoinPaymentLog();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payments.push(
            BanaCoinPaymentLog_Payment.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BanaCoinPaymentLog {
    return {
      payments: Array.isArray(object?.payments)
        ? object.payments.map((e: any) =>
            BanaCoinPaymentLog_Payment.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: BanaCoinPaymentLog): unknown {
    const obj: any = {};
    if (message.payments) {
      obj.payments = message.payments.map((e) =>
        e ? BanaCoinPaymentLog_Payment.toJSON(e) : undefined
      );
    } else {
      obj.payments = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BanaCoinPaymentLog>, I>>(
    object: I
  ): BanaCoinPaymentLog {
    const message = createBaseBanaCoinPaymentLog();
    message.payments =
      object.payments?.map((e) => BanaCoinPaymentLog_Payment.fromPartial(e)) ||
      [];
    return message;
  },
};

function createBaseBanaCoinPaymentLog_Payment(): BanaCoinPaymentLog_Payment {
  return {
    date: 0,
    contactNumber: "",
    state: 0,
    cost: 0,
    accessCode: "",
    personId: "",
  };
}

export const BanaCoinPaymentLog_Payment = {
  encode(
    message: BanaCoinPaymentLog_Payment,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.date !== 0) {
      writer.uint32(8).uint32(message.date);
    }
    if (message.contactNumber !== "") {
      writer.uint32(18).string(message.contactNumber);
    }
    if (message.state !== 0) {
      writer.uint32(24).int32(message.state);
    }
    if (message.cost !== 0) {
      writer.uint32(32).uint32(message.cost);
    }
    if (message.accessCode !== "") {
      writer.uint32(50).string(message.accessCode);
    }
    if (message.personId !== "") {
      writer.uint32(58).string(message.personId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): BanaCoinPaymentLog_Payment {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBanaCoinPaymentLog_Payment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.date = reader.uint32();
          break;
        case 2:
          message.contactNumber = reader.string();
          break;
        case 3:
          message.state = reader.int32() as any;
          break;
        case 4:
          message.cost = reader.uint32();
          break;
        case 6:
          message.accessCode = reader.string();
          break;
        case 7:
          message.personId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BanaCoinPaymentLog_Payment {
    return {
      date: isSet(object.date) ? Number(object.date) : 0,
      contactNumber: isSet(object.contactNumber)
        ? String(object.contactNumber)
        : "",
      state: isSet(object.state)
        ? banaCoinPaymentStateFromJSON(object.state)
        : 0,
      cost: isSet(object.cost) ? Number(object.cost) : 0,
      accessCode: isSet(object.accessCode) ? String(object.accessCode) : "",
      personId: isSet(object.personId) ? String(object.personId) : "",
    };
  },

  toJSON(message: BanaCoinPaymentLog_Payment): unknown {
    const obj: any = {};
    message.date !== undefined && (obj.date = Math.round(message.date));
    message.contactNumber !== undefined &&
      (obj.contactNumber = message.contactNumber);
    message.state !== undefined &&
      (obj.state = banaCoinPaymentStateToJSON(message.state));
    message.cost !== undefined && (obj.cost = Math.round(message.cost));
    message.accessCode !== undefined && (obj.accessCode = message.accessCode);
    message.personId !== undefined && (obj.personId = message.personId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BanaCoinPaymentLog_Payment>, I>>(
    object: I
  ): BanaCoinPaymentLog_Payment {
    const message = createBaseBanaCoinPaymentLog_Payment();
    message.date = object.date ?? 0;
    message.contactNumber = object.contactNumber ?? "";
    message.state = object.state ?? 0;
    message.cost = object.cost ?? 0;
    message.accessCode = object.accessCode ?? "";
    message.personId = object.personId ?? "";
    return message;
  },
};

function createBaseOperation(): Operation {
  return { authorizationAt: 0, featureVersion: undefined };
}

export const Operation = {
  encode(
    message: Operation,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.authorizationAt !== 0) {
      writer.uint32(8).uint32(message.authorizationAt);
    }
    if (message.featureVersion !== undefined) {
      GameFeatureVersion.encode(
        message.featureVersion,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Operation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOperation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authorizationAt = reader.uint32();
          break;
        case 2:
          message.featureVersion = GameFeatureVersion.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Operation {
    return {
      authorizationAt: isSet(object.authorizationAt)
        ? Number(object.authorizationAt)
        : 0,
      featureVersion: isSet(object.featureVersion)
        ? GameFeatureVersion.fromJSON(object.featureVersion)
        : undefined,
    };
  },

  toJSON(message: Operation): unknown {
    const obj: any = {};
    message.authorizationAt !== undefined &&
      (obj.authorizationAt = Math.round(message.authorizationAt));
    message.featureVersion !== undefined &&
      (obj.featureVersion = message.featureVersion
        ? GameFeatureVersion.toJSON(message.featureVersion)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Operation>, I>>(
    object: I
  ): Operation {
    const message = createBaseOperation();
    message.authorizationAt = object.authorizationAt ?? 0;
    message.featureVersion =
      object.featureVersion !== undefined && object.featureVersion !== null
        ? GameFeatureVersion.fromPartial(object.featureVersion)
        : undefined;
    return message;
  },
};

function createBaseStatus(): Status {
  return { state: 0, name: "", address: 0, value: 0, value2: 0 };
}

export const Status = {
  encode(
    message: Status,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.state !== 0) {
      writer.uint32(8).int32(message.state);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.address !== 0) {
      writer.uint32(24).uint32(message.address);
    }
    if (message.value !== 0) {
      writer.uint32(32).int32(message.value);
    }
    if (message.value2 !== 0) {
      writer.uint32(40).int32(message.value2);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Status {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = reader.int32() as any;
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.address = reader.uint32();
          break;
        case 4:
          message.value = reader.int32();
          break;
        case 5:
          message.value2 = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Status {
    return {
      state: isSet(object.state) ? stateFromJSON(object.state) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      address: isSet(object.address) ? Number(object.address) : 0,
      value: isSet(object.value) ? Number(object.value) : 0,
      value2: isSet(object.value2) ? Number(object.value2) : 0,
    };
  },

  toJSON(message: Status): unknown {
    const obj: any = {};
    message.state !== undefined && (obj.state = stateToJSON(message.state));
    message.name !== undefined && (obj.name = message.name);
    message.address !== undefined &&
      (obj.address = Math.round(message.address));
    message.value !== undefined && (obj.value = Math.round(message.value));
    message.value2 !== undefined && (obj.value2 = Math.round(message.value2));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Status>, I>>(object: I): Status {
    const message = createBaseStatus();
    message.state = object.state ?? 0;
    message.name = object.name ?? "";
    message.address = object.address ?? 0;
    message.value = object.value ?? 0;
    message.value2 = object.value2 ?? 0;
    return message;
  },
};

function createBaseCommand(): Command {
  return {
    sequence: 0,
    ntp: "",
    checkCable: "",
    renewDhcp: "",
    setDate: 0,
    syncDate: "",
    ping: [],
    traceRoute: 0,
    checkPacket: "",
    reboot: "",
    checkPkg: "",
  };
}

export const Command = {
  encode(
    message: Command,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sequence !== 0) {
      writer.uint32(8).uint32(message.sequence);
    }
    if (message.ntp !== "") {
      writer.uint32(18).string(message.ntp);
    }
    if (message.checkCable !== "") {
      writer.uint32(26).string(message.checkCable);
    }
    if (message.renewDhcp !== "") {
      writer.uint32(34).string(message.renewDhcp);
    }
    if (message.setDate !== 0) {
      writer.uint32(40).uint32(message.setDate);
    }
    if (message.syncDate !== "") {
      writer.uint32(50).string(message.syncDate);
    }
    writer.uint32(58).fork();
    for (const v of message.ping) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.traceRoute !== 0) {
      writer.uint32(64).uint32(message.traceRoute);
    }
    if (message.checkPacket !== "") {
      writer.uint32(74).string(message.checkPacket);
    }
    if (message.reboot !== "") {
      writer.uint32(82).string(message.reboot);
    }
    if (message.checkPkg !== "") {
      writer.uint32(90).string(message.checkPkg);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Command {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommand();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sequence = reader.uint32();
          break;
        case 2:
          message.ntp = reader.string();
          break;
        case 3:
          message.checkCable = reader.string();
          break;
        case 4:
          message.renewDhcp = reader.string();
          break;
        case 5:
          message.setDate = reader.uint32();
          break;
        case 6:
          message.syncDate = reader.string();
          break;
        case 7:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.ping.push(reader.uint32());
            }
          } else {
            message.ping.push(reader.uint32());
          }
          break;
        case 8:
          message.traceRoute = reader.uint32();
          break;
        case 9:
          message.checkPacket = reader.string();
          break;
        case 10:
          message.reboot = reader.string();
          break;
        case 11:
          message.checkPkg = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Command {
    return {
      sequence: isSet(object.sequence) ? Number(object.sequence) : 0,
      ntp: isSet(object.ntp) ? String(object.ntp) : "",
      checkCable: isSet(object.checkCable) ? String(object.checkCable) : "",
      renewDhcp: isSet(object.renewDhcp) ? String(object.renewDhcp) : "",
      setDate: isSet(object.setDate) ? Number(object.setDate) : 0,
      syncDate: isSet(object.syncDate) ? String(object.syncDate) : "",
      ping: Array.isArray(object?.ping)
        ? object.ping.map((e: any) => Number(e))
        : [],
      traceRoute: isSet(object.traceRoute) ? Number(object.traceRoute) : 0,
      checkPacket: isSet(object.checkPacket) ? String(object.checkPacket) : "",
      reboot: isSet(object.reboot) ? String(object.reboot) : "",
      checkPkg: isSet(object.checkPkg) ? String(object.checkPkg) : "",
    };
  },

  toJSON(message: Command): unknown {
    const obj: any = {};
    message.sequence !== undefined &&
      (obj.sequence = Math.round(message.sequence));
    message.ntp !== undefined && (obj.ntp = message.ntp);
    message.checkCable !== undefined && (obj.checkCable = message.checkCable);
    message.renewDhcp !== undefined && (obj.renewDhcp = message.renewDhcp);
    message.setDate !== undefined &&
      (obj.setDate = Math.round(message.setDate));
    message.syncDate !== undefined && (obj.syncDate = message.syncDate);
    if (message.ping) {
      obj.ping = message.ping.map((e) => Math.round(e));
    } else {
      obj.ping = [];
    }
    message.traceRoute !== undefined &&
      (obj.traceRoute = Math.round(message.traceRoute));
    message.checkPacket !== undefined &&
      (obj.checkPacket = message.checkPacket);
    message.reboot !== undefined && (obj.reboot = message.reboot);
    message.checkPkg !== undefined && (obj.checkPkg = message.checkPkg);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Command>, I>>(object: I): Command {
    const message = createBaseCommand();
    message.sequence = object.sequence ?? 0;
    message.ntp = object.ntp ?? "";
    message.checkCable = object.checkCable ?? "";
    message.renewDhcp = object.renewDhcp ?? "";
    message.setDate = object.setDate ?? 0;
    message.syncDate = object.syncDate ?? "";
    message.ping = object.ping?.map((e) => e) || [];
    message.traceRoute = object.traceRoute ?? 0;
    message.checkPacket = object.checkPacket ?? "";
    message.reboot = object.reboot ?? "";
    message.checkPkg = object.checkPkg ?? "";
    return message;
  },
};

function createBaseReply(): Reply {
  return {
    sequence: 0,
    ntp: undefined,
    checkCable: undefined,
    renewDhcp: undefined,
    setDate: undefined,
    syncDate: undefined,
    ping: [],
    traceRoute: undefined,
    checkPacket: undefined,
    reboot: undefined,
    checkPkg: undefined,
  };
}

export const Reply = {
  encode(message: Reply, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sequence !== 0) {
      writer.uint32(8).uint32(message.sequence);
    }
    if (message.ntp !== undefined) {
      Status.encode(message.ntp, writer.uint32(18).fork()).ldelim();
    }
    if (message.checkCable !== undefined) {
      Status.encode(message.checkCable, writer.uint32(26).fork()).ldelim();
    }
    if (message.renewDhcp !== undefined) {
      Status.encode(message.renewDhcp, writer.uint32(34).fork()).ldelim();
    }
    if (message.setDate !== undefined) {
      Status.encode(message.setDate, writer.uint32(42).fork()).ldelim();
    }
    if (message.syncDate !== undefined) {
      Status.encode(message.syncDate, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.ping) {
      Status.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.traceRoute !== undefined) {
      Status.encode(message.traceRoute, writer.uint32(66).fork()).ldelim();
    }
    if (message.checkPacket !== undefined) {
      Status.encode(message.checkPacket, writer.uint32(74).fork()).ldelim();
    }
    if (message.reboot !== undefined) {
      Status.encode(message.reboot, writer.uint32(82).fork()).ldelim();
    }
    if (message.checkPkg !== undefined) {
      Status.encode(message.checkPkg, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Reply {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReply();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sequence = reader.uint32();
          break;
        case 2:
          message.ntp = Status.decode(reader, reader.uint32());
          break;
        case 3:
          message.checkCable = Status.decode(reader, reader.uint32());
          break;
        case 4:
          message.renewDhcp = Status.decode(reader, reader.uint32());
          break;
        case 5:
          message.setDate = Status.decode(reader, reader.uint32());
          break;
        case 6:
          message.syncDate = Status.decode(reader, reader.uint32());
          break;
        case 7:
          message.ping.push(Status.decode(reader, reader.uint32()));
          break;
        case 8:
          message.traceRoute = Status.decode(reader, reader.uint32());
          break;
        case 9:
          message.checkPacket = Status.decode(reader, reader.uint32());
          break;
        case 10:
          message.reboot = Status.decode(reader, reader.uint32());
          break;
        case 11:
          message.checkPkg = Status.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Reply {
    return {
      sequence: isSet(object.sequence) ? Number(object.sequence) : 0,
      ntp: isSet(object.ntp) ? Status.fromJSON(object.ntp) : undefined,
      checkCable: isSet(object.checkCable)
        ? Status.fromJSON(object.checkCable)
        : undefined,
      renewDhcp: isSet(object.renewDhcp)
        ? Status.fromJSON(object.renewDhcp)
        : undefined,
      setDate: isSet(object.setDate)
        ? Status.fromJSON(object.setDate)
        : undefined,
      syncDate: isSet(object.syncDate)
        ? Status.fromJSON(object.syncDate)
        : undefined,
      ping: Array.isArray(object?.ping)
        ? object.ping.map((e: any) => Status.fromJSON(e))
        : [],
      traceRoute: isSet(object.traceRoute)
        ? Status.fromJSON(object.traceRoute)
        : undefined,
      checkPacket: isSet(object.checkPacket)
        ? Status.fromJSON(object.checkPacket)
        : undefined,
      reboot: isSet(object.reboot) ? Status.fromJSON(object.reboot) : undefined,
      checkPkg: isSet(object.checkPkg)
        ? Status.fromJSON(object.checkPkg)
        : undefined,
    };
  },

  toJSON(message: Reply): unknown {
    const obj: any = {};
    message.sequence !== undefined &&
      (obj.sequence = Math.round(message.sequence));
    message.ntp !== undefined &&
      (obj.ntp = message.ntp ? Status.toJSON(message.ntp) : undefined);
    message.checkCable !== undefined &&
      (obj.checkCable = message.checkCable
        ? Status.toJSON(message.checkCable)
        : undefined);
    message.renewDhcp !== undefined &&
      (obj.renewDhcp = message.renewDhcp
        ? Status.toJSON(message.renewDhcp)
        : undefined);
    message.setDate !== undefined &&
      (obj.setDate = message.setDate
        ? Status.toJSON(message.setDate)
        : undefined);
    message.syncDate !== undefined &&
      (obj.syncDate = message.syncDate
        ? Status.toJSON(message.syncDate)
        : undefined);
    if (message.ping) {
      obj.ping = message.ping.map((e) => (e ? Status.toJSON(e) : undefined));
    } else {
      obj.ping = [];
    }
    message.traceRoute !== undefined &&
      (obj.traceRoute = message.traceRoute
        ? Status.toJSON(message.traceRoute)
        : undefined);
    message.checkPacket !== undefined &&
      (obj.checkPacket = message.checkPacket
        ? Status.toJSON(message.checkPacket)
        : undefined);
    message.reboot !== undefined &&
      (obj.reboot = message.reboot ? Status.toJSON(message.reboot) : undefined);
    message.checkPkg !== undefined &&
      (obj.checkPkg = message.checkPkg
        ? Status.toJSON(message.checkPkg)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Reply>, I>>(object: I): Reply {
    const message = createBaseReply();
    message.sequence = object.sequence ?? 0;
    message.ntp =
      object.ntp !== undefined && object.ntp !== null
        ? Status.fromPartial(object.ntp)
        : undefined;
    message.checkCable =
      object.checkCable !== undefined && object.checkCable !== null
        ? Status.fromPartial(object.checkCable)
        : undefined;
    message.renewDhcp =
      object.renewDhcp !== undefined && object.renewDhcp !== null
        ? Status.fromPartial(object.renewDhcp)
        : undefined;
    message.setDate =
      object.setDate !== undefined && object.setDate !== null
        ? Status.fromPartial(object.setDate)
        : undefined;
    message.syncDate =
      object.syncDate !== undefined && object.syncDate !== null
        ? Status.fromPartial(object.syncDate)
        : undefined;
    message.ping = object.ping?.map((e) => Status.fromPartial(e)) || [];
    message.traceRoute =
      object.traceRoute !== undefined && object.traceRoute !== null
        ? Status.fromPartial(object.traceRoute)
        : undefined;
    message.checkPacket =
      object.checkPacket !== undefined && object.checkPacket !== null
        ? Status.fromPartial(object.checkPacket)
        : undefined;
    message.reboot =
      object.reboot !== undefined && object.reboot !== null
        ? Status.fromPartial(object.reboot)
        : undefined;
    message.checkPkg =
      object.checkPkg !== undefined && object.checkPkg !== null
        ? Status.fromPartial(object.checkPkg)
        : undefined;
    return message;
  },
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
