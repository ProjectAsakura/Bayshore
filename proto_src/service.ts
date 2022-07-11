/* eslint-disable */
import {
  ErrorCode,
  Car,
  RegisterSystemInfoResponse,
  RegisterSystemStatsResponse,
  RegisterGhostTrailResponse,
  LoadUserResponse,
  UpdateUserSessionResponse,
  LoadDriveInformationResponse,
  LoadCarResponse,
  CreateCarResponse,
  LoadGameHistoryResponse,
  UpdateCarResponse,
  SaveGameResultResponse,
  SaveChargeResponse,
  LoadGhostBattleInfoResponse,
  LoadStampTargetResponse,
  LockStampTargetResponse,
  LoadGhostCompetitionInfoResponse,
  LoadTimeAttackRecordResponse,
  SaveTerminalResultResponse,
  PingResponse,
  LoadTerminalInformationResponse,
  CreateUserResponse,
  AskAccessCodeResponse,
  RegisterOpponentGhostResponse,
  LoadBookmarksResponse,
  SaveBookmarksResponse,
  GrantCarRightResponse,
  LoadGhostCompetitionRankingResponse,
  LoadUnreceivedUserItemsResponse,
  StartTransferResponse,
  SaveScreenshotResponse,
  LoadScratchInformationResponse,
  SaveScratchSheetResponse,
  TurnScratchSheetResponse,
  CheckItemReceivableCarsResponse,
  ReceiveUserItemsResponse,
  UpdateEventModeSerialResponse,
  ConsumeUserItemResponse,
  SearchCarsByLevelResponse,
  LoadPathsAndTuningsResponse,
  LoadGhostDriveDataResponse,
  ParticipateInInviteFriendCampaignResponse,
  SubmitClientLogResponse,
  GhostTrail,
  PlaceList,
  GhostList,
  CarSummary,
  FileList,
  GhostCompetitionTarget,
  errorCodeFromJSON,
  errorCodeToJSON,
  RegisterSystemInfoRequest,
  RegisterSystemStatsRequest,
  RegisterGhostTrailRequest,
  LoadUserRequest,
  UpdateUserSessionRequest,
  LoadDriveInformationRequest,
  LoadCarRequest,
  CreateCarRequest,
  LoadGameHistoryRequest,
  UpdateCarRequest,
  SaveGameResultRequest,
  SaveChargeRequest,
  LoadGhostBattleInfoRequest,
  LoadStampTargetRequest,
  LockStampTargetRequest,
  LoadGhostCompetitionInfoRequest,
  LoadTimeAttackRecordRequest,
  SaveTerminalResultRequest,
  PingRequest,
  LoadTerminalInformationRequest,
  CreateUserRequest,
  AskAccessCodeRequest,
  RegisterOpponentGhostRequest,
  LoadBookmarksRequest,
  SaveBookmarksRequest,
  GrantCarRightRequest,
  LoadGhostCompetitionRankingRequest,
  LoadUnreceivedUserItemsRequest,
  StartTransferRequest,
  SaveScreenshotRequest,
  LoadScratchInformationRequest,
  SaveScratchSheetRequest,
  TurnScratchSheetRequest,
  CheckItemReceivableCarsRequest,
  ReceiveUserItemsRequest,
  UpdateEventModeSerialRequest,
  ConsumeUserItemRequest,
  SearchCarsByLevelRequest,
  LoadPathsAndTuningsRequest,
  LoadGhostDriveDataRequest,
  ParticipateInInviteFriendCampaignRequest,
  SubmitClientLogRequest,
} from "./wm";
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "wm.protobuf";

export enum RankingType {
  RANKING_TA_C1IN = 0,
  RANKING_TA_C1OUT = 1,
  RANKING_TA_RINGLEFT = 2,
  RANKING_TA_RINGRIGHT = 3,
  RANKING_TA_SUBTOKYO_3_4 = 4,
  RANKING_TA_SUBTOKYO_5 = 5,
  RANKING_TA_WANGANEAST = 6,
  RANKING_TA_WANGANWEST = 7,
  RANKING_TA_K1_DOWN = 8,
  RANKING_TA_K1_UP = 9,
  RANKING_TA_YAESUIN = 10,
  RANKING_TA_YAESUOUT = 11,
  RANKING_TA_YOKOHAMAIN = 12,
  RANKING_TA_YOKOHAMAOUT = 13,
  RANKING_TA_NAGOYA = 14,
  RANKING_TA_OSAKA = 15,
  RANKING_TA_KOBE = 16,
  RANKING_TA_FUKUOKA = 17,
  RANKING_TA_HAKONEFOR = 18,
  RANKING_TA_HAKONEBACK = 19,
  RANKING_TA_TURNPIKE_UP = 20,
  RANKING_TA_TURNPIKE_DOWN = 21,
  RANKING_TA_TOKYOALL = 22,
  RANKING_TA_KANAGAWAALL = 23,
  RANKING_TA_HIROSHIMA = 24,
  RANKING_VS_STAR = 100,
  RANKING_GHOST_DEFEATED_COUNT = 101,
  UNRECOGNIZED = -1,
}

export function rankingTypeFromJSON(object: any): RankingType {
  switch (object) {
    case 0:
    case "RANKING_TA_C1IN":
      return RankingType.RANKING_TA_C1IN;
    case 1:
    case "RANKING_TA_C1OUT":
      return RankingType.RANKING_TA_C1OUT;
    case 2:
    case "RANKING_TA_RINGLEFT":
      return RankingType.RANKING_TA_RINGLEFT;
    case 3:
    case "RANKING_TA_RINGRIGHT":
      return RankingType.RANKING_TA_RINGRIGHT;
    case 4:
    case "RANKING_TA_SUBTOKYO_3_4":
      return RankingType.RANKING_TA_SUBTOKYO_3_4;
    case 5:
    case "RANKING_TA_SUBTOKYO_5":
      return RankingType.RANKING_TA_SUBTOKYO_5;
    case 6:
    case "RANKING_TA_WANGANEAST":
      return RankingType.RANKING_TA_WANGANEAST;
    case 7:
    case "RANKING_TA_WANGANWEST":
      return RankingType.RANKING_TA_WANGANWEST;
    case 8:
    case "RANKING_TA_K1_DOWN":
      return RankingType.RANKING_TA_K1_DOWN;
    case 9:
    case "RANKING_TA_K1_UP":
      return RankingType.RANKING_TA_K1_UP;
    case 10:
    case "RANKING_TA_YAESUIN":
      return RankingType.RANKING_TA_YAESUIN;
    case 11:
    case "RANKING_TA_YAESUOUT":
      return RankingType.RANKING_TA_YAESUOUT;
    case 12:
    case "RANKING_TA_YOKOHAMAIN":
      return RankingType.RANKING_TA_YOKOHAMAIN;
    case 13:
    case "RANKING_TA_YOKOHAMAOUT":
      return RankingType.RANKING_TA_YOKOHAMAOUT;
    case 14:
    case "RANKING_TA_NAGOYA":
      return RankingType.RANKING_TA_NAGOYA;
    case 15:
    case "RANKING_TA_OSAKA":
      return RankingType.RANKING_TA_OSAKA;
    case 16:
    case "RANKING_TA_KOBE":
      return RankingType.RANKING_TA_KOBE;
    case 17:
    case "RANKING_TA_FUKUOKA":
      return RankingType.RANKING_TA_FUKUOKA;
    case 18:
    case "RANKING_TA_HAKONEFOR":
      return RankingType.RANKING_TA_HAKONEFOR;
    case 19:
    case "RANKING_TA_HAKONEBACK":
      return RankingType.RANKING_TA_HAKONEBACK;
    case 20:
    case "RANKING_TA_TURNPIKE_UP":
      return RankingType.RANKING_TA_TURNPIKE_UP;
    case 21:
    case "RANKING_TA_TURNPIKE_DOWN":
      return RankingType.RANKING_TA_TURNPIKE_DOWN;
    case 22:
    case "RANKING_TA_TOKYOALL":
      return RankingType.RANKING_TA_TOKYOALL;
    case 23:
    case "RANKING_TA_KANAGAWAALL":
      return RankingType.RANKING_TA_KANAGAWAALL;
    case 24:
    case "RANKING_TA_HIROSHIMA":
      return RankingType.RANKING_TA_HIROSHIMA;
    case 100:
    case "RANKING_VS_STAR":
      return RankingType.RANKING_VS_STAR;
    case 101:
    case "RANKING_GHOST_DEFEATED_COUNT":
      return RankingType.RANKING_GHOST_DEFEATED_COUNT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return RankingType.UNRECOGNIZED;
  }
}

export function rankingTypeToJSON(object: RankingType): string {
  switch (object) {
    case RankingType.RANKING_TA_C1IN:
      return "RANKING_TA_C1IN";
    case RankingType.RANKING_TA_C1OUT:
      return "RANKING_TA_C1OUT";
    case RankingType.RANKING_TA_RINGLEFT:
      return "RANKING_TA_RINGLEFT";
    case RankingType.RANKING_TA_RINGRIGHT:
      return "RANKING_TA_RINGRIGHT";
    case RankingType.RANKING_TA_SUBTOKYO_3_4:
      return "RANKING_TA_SUBTOKYO_3_4";
    case RankingType.RANKING_TA_SUBTOKYO_5:
      return "RANKING_TA_SUBTOKYO_5";
    case RankingType.RANKING_TA_WANGANEAST:
      return "RANKING_TA_WANGANEAST";
    case RankingType.RANKING_TA_WANGANWEST:
      return "RANKING_TA_WANGANWEST";
    case RankingType.RANKING_TA_K1_DOWN:
      return "RANKING_TA_K1_DOWN";
    case RankingType.RANKING_TA_K1_UP:
      return "RANKING_TA_K1_UP";
    case RankingType.RANKING_TA_YAESUIN:
      return "RANKING_TA_YAESUIN";
    case RankingType.RANKING_TA_YAESUOUT:
      return "RANKING_TA_YAESUOUT";
    case RankingType.RANKING_TA_YOKOHAMAIN:
      return "RANKING_TA_YOKOHAMAIN";
    case RankingType.RANKING_TA_YOKOHAMAOUT:
      return "RANKING_TA_YOKOHAMAOUT";
    case RankingType.RANKING_TA_NAGOYA:
      return "RANKING_TA_NAGOYA";
    case RankingType.RANKING_TA_OSAKA:
      return "RANKING_TA_OSAKA";
    case RankingType.RANKING_TA_KOBE:
      return "RANKING_TA_KOBE";
    case RankingType.RANKING_TA_FUKUOKA:
      return "RANKING_TA_FUKUOKA";
    case RankingType.RANKING_TA_HAKONEFOR:
      return "RANKING_TA_HAKONEFOR";
    case RankingType.RANKING_TA_HAKONEBACK:
      return "RANKING_TA_HAKONEBACK";
    case RankingType.RANKING_TA_TURNPIKE_UP:
      return "RANKING_TA_TURNPIKE_UP";
    case RankingType.RANKING_TA_TURNPIKE_DOWN:
      return "RANKING_TA_TURNPIKE_DOWN";
    case RankingType.RANKING_TA_TOKYOALL:
      return "RANKING_TA_TOKYOALL";
    case RankingType.RANKING_TA_KANAGAWAALL:
      return "RANKING_TA_KANAGAWAALL";
    case RankingType.RANKING_TA_HIROSHIMA:
      return "RANKING_TA_HIROSHIMA";
    case RankingType.RANKING_VS_STAR:
      return "RANKING_VS_STAR";
    case RankingType.RANKING_GHOST_DEFEATED_COUNT:
      return "RANKING_GHOST_DEFEATED_COUNT";
    case RankingType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface PlaceListQuery {
  regionId: number;
}

export interface GhostListQuery {
  carId: number;
  area: number;
}

export interface GhostTrailQuery {
  carId: number;
  area: number;
  trailId: number;
}

export interface CarSummaryQuery {
  regionId: number;
  ghostLevel: number;
  manufacturer: number;
  model: number;
  name: string;
  searchCode: string;
  lastPlayedPlaceId: string;
  limit: number;
}

export interface FileListQuery {}

export interface GhostCompetitionTargetQuery {
  competitionId: number;
  periodId: number;
}

export interface LockCrownRequest {
  carId: number;
  area: number;
  lockTime: number;
}

export interface LockCrownResponse {
  error: ErrorCode;
}

export interface Crown {
  carId: number;
  area: number;
  unlockAt: number;
  car: Car | undefined;
}

export interface CrownListQuery {
  carId: number;
  area: number;
}

export interface CrownList {
  crowns: Crown[];
}

export interface RankingQuery {
  rankingType: RankingType;
}

export interface Ranking {
  lists: Ranking_List[];
}

export interface Ranking_List {
  rankingType: RankingType;
  topRecords: Ranking_Entry[];
}

export interface Ranking_Entry {
  rank: number;
  result: number;
  carId: number;
  name: string;
  regionId: number;
  model: number;
  visualModel: number;
  defaultColor: number;
  tunePower: number;
  tuneHandling: number;
  title: string;
  level: number;
}

function createBasePlaceListQuery(): PlaceListQuery {
  return { regionId: 0 };
}

export const PlaceListQuery = {
  encode(
    message: PlaceListQuery,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.regionId !== 0) {
      writer.uint32(8).uint32(message.regionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlaceListQuery {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlaceListQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.regionId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PlaceListQuery {
    return {
      regionId: isSet(object.regionId) ? Number(object.regionId) : 0,
    };
  },

  toJSON(message: PlaceListQuery): unknown {
    const obj: any = {};
    message.regionId !== undefined &&
      (obj.regionId = Math.round(message.regionId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PlaceListQuery>, I>>(
    object: I
  ): PlaceListQuery {
    const message = createBasePlaceListQuery();
    message.regionId = object.regionId ?? 0;
    return message;
  },
};

function createBaseGhostListQuery(): GhostListQuery {
  return { carId: 0, area: 0 };
}

export const GhostListQuery = {
  encode(
    message: GhostListQuery,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.carId !== 0) {
      writer.uint32(8).uint32(message.carId);
    }
    if (message.area !== 0) {
      writer.uint32(16).uint32(message.area);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GhostListQuery {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGhostListQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.carId = reader.uint32();
          break;
        case 2:
          message.area = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GhostListQuery {
    return {
      carId: isSet(object.carId) ? Number(object.carId) : 0,
      area: isSet(object.area) ? Number(object.area) : 0,
    };
  },

  toJSON(message: GhostListQuery): unknown {
    const obj: any = {};
    message.carId !== undefined && (obj.carId = Math.round(message.carId));
    message.area !== undefined && (obj.area = Math.round(message.area));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GhostListQuery>, I>>(
    object: I
  ): GhostListQuery {
    const message = createBaseGhostListQuery();
    message.carId = object.carId ?? 0;
    message.area = object.area ?? 0;
    return message;
  },
};

function createBaseGhostTrailQuery(): GhostTrailQuery {
  return { carId: 0, area: 0, trailId: 0 };
}

export const GhostTrailQuery = {
  encode(
    message: GhostTrailQuery,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.carId !== 0) {
      writer.uint32(8).uint32(message.carId);
    }
    if (message.area !== 0) {
      writer.uint32(16).uint32(message.area);
    }
    if (message.trailId !== 0) {
      writer.uint32(24).uint64(message.trailId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GhostTrailQuery {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGhostTrailQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.carId = reader.uint32();
          break;
        case 2:
          message.area = reader.uint32();
          break;
        case 3:
          message.trailId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GhostTrailQuery {
    return {
      carId: isSet(object.carId) ? Number(object.carId) : 0,
      area: isSet(object.area) ? Number(object.area) : 0,
      trailId: isSet(object.trailId) ? Number(object.trailId) : 0,
    };
  },

  toJSON(message: GhostTrailQuery): unknown {
    const obj: any = {};
    message.carId !== undefined && (obj.carId = Math.round(message.carId));
    message.area !== undefined && (obj.area = Math.round(message.area));
    message.trailId !== undefined &&
      (obj.trailId = Math.round(message.trailId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GhostTrailQuery>, I>>(
    object: I
  ): GhostTrailQuery {
    const message = createBaseGhostTrailQuery();
    message.carId = object.carId ?? 0;
    message.area = object.area ?? 0;
    message.trailId = object.trailId ?? 0;
    return message;
  },
};

function createBaseCarSummaryQuery(): CarSummaryQuery {
  return {
    regionId: 0,
    ghostLevel: 0,
    manufacturer: 0,
    model: 0,
    name: "",
    searchCode: "",
    lastPlayedPlaceId: "",
    limit: 0,
  };
}

export const CarSummaryQuery = {
  encode(
    message: CarSummaryQuery,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.regionId !== 0) {
      writer.uint32(8).uint32(message.regionId);
    }
    if (message.ghostLevel !== 0) {
      writer.uint32(16).uint32(message.ghostLevel);
    }
    if (message.manufacturer !== 0) {
      writer.uint32(24).uint32(message.manufacturer);
    }
    if (message.model !== 0) {
      writer.uint32(32).uint32(message.model);
    }
    if (message.name !== "") {
      writer.uint32(42).string(message.name);
    }
    if (message.searchCode !== "") {
      writer.uint32(50).string(message.searchCode);
    }
    if (message.lastPlayedPlaceId !== "") {
      writer.uint32(58).string(message.lastPlayedPlaceId);
    }
    if (message.limit !== 0) {
      writer.uint32(64).uint32(message.limit);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CarSummaryQuery {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCarSummaryQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.regionId = reader.uint32();
          break;
        case 2:
          message.ghostLevel = reader.uint32();
          break;
        case 3:
          message.manufacturer = reader.uint32();
          break;
        case 4:
          message.model = reader.uint32();
          break;
        case 5:
          message.name = reader.string();
          break;
        case 6:
          message.searchCode = reader.string();
          break;
        case 7:
          message.lastPlayedPlaceId = reader.string();
          break;
        case 8:
          message.limit = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CarSummaryQuery {
    return {
      regionId: isSet(object.regionId) ? Number(object.regionId) : 0,
      ghostLevel: isSet(object.ghostLevel) ? Number(object.ghostLevel) : 0,
      manufacturer: isSet(object.manufacturer)
        ? Number(object.manufacturer)
        : 0,
      model: isSet(object.model) ? Number(object.model) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      searchCode: isSet(object.searchCode) ? String(object.searchCode) : "",
      lastPlayedPlaceId: isSet(object.lastPlayedPlaceId)
        ? String(object.lastPlayedPlaceId)
        : "",
      limit: isSet(object.limit) ? Number(object.limit) : 0,
    };
  },

  toJSON(message: CarSummaryQuery): unknown {
    const obj: any = {};
    message.regionId !== undefined &&
      (obj.regionId = Math.round(message.regionId));
    message.ghostLevel !== undefined &&
      (obj.ghostLevel = Math.round(message.ghostLevel));
    message.manufacturer !== undefined &&
      (obj.manufacturer = Math.round(message.manufacturer));
    message.model !== undefined && (obj.model = Math.round(message.model));
    message.name !== undefined && (obj.name = message.name);
    message.searchCode !== undefined && (obj.searchCode = message.searchCode);
    message.lastPlayedPlaceId !== undefined &&
      (obj.lastPlayedPlaceId = message.lastPlayedPlaceId);
    message.limit !== undefined && (obj.limit = Math.round(message.limit));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CarSummaryQuery>, I>>(
    object: I
  ): CarSummaryQuery {
    const message = createBaseCarSummaryQuery();
    message.regionId = object.regionId ?? 0;
    message.ghostLevel = object.ghostLevel ?? 0;
    message.manufacturer = object.manufacturer ?? 0;
    message.model = object.model ?? 0;
    message.name = object.name ?? "";
    message.searchCode = object.searchCode ?? "";
    message.lastPlayedPlaceId = object.lastPlayedPlaceId ?? "";
    message.limit = object.limit ?? 0;
    return message;
  },
};

function createBaseFileListQuery(): FileListQuery {
  return {};
}

export const FileListQuery = {
  encode(
    _: FileListQuery,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FileListQuery {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFileListQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): FileListQuery {
    return {};
  },

  toJSON(_: FileListQuery): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FileListQuery>, I>>(
    _: I
  ): FileListQuery {
    const message = createBaseFileListQuery();
    return message;
  },
};

function createBaseGhostCompetitionTargetQuery(): GhostCompetitionTargetQuery {
  return { competitionId: 0, periodId: 0 };
}

export const GhostCompetitionTargetQuery = {
  encode(
    message: GhostCompetitionTargetQuery,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.competitionId !== 0) {
      writer.uint32(8).uint32(message.competitionId);
    }
    if (message.periodId !== 0) {
      writer.uint32(16).uint32(message.periodId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GhostCompetitionTargetQuery {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGhostCompetitionTargetQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.competitionId = reader.uint32();
          break;
        case 2:
          message.periodId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GhostCompetitionTargetQuery {
    return {
      competitionId: isSet(object.competitionId)
        ? Number(object.competitionId)
        : 0,
      periodId: isSet(object.periodId) ? Number(object.periodId) : 0,
    };
  },

  toJSON(message: GhostCompetitionTargetQuery): unknown {
    const obj: any = {};
    message.competitionId !== undefined &&
      (obj.competitionId = Math.round(message.competitionId));
    message.periodId !== undefined &&
      (obj.periodId = Math.round(message.periodId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GhostCompetitionTargetQuery>, I>>(
    object: I
  ): GhostCompetitionTargetQuery {
    const message = createBaseGhostCompetitionTargetQuery();
    message.competitionId = object.competitionId ?? 0;
    message.periodId = object.periodId ?? 0;
    return message;
  },
};

function createBaseLockCrownRequest(): LockCrownRequest {
  return { carId: 0, area: 0, lockTime: 0 };
}

export const LockCrownRequest = {
  encode(
    message: LockCrownRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.carId !== 0) {
      writer.uint32(8).uint32(message.carId);
    }
    if (message.area !== 0) {
      writer.uint32(16).uint32(message.area);
    }
    if (message.lockTime !== 0) {
      writer.uint32(24).uint32(message.lockTime);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LockCrownRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLockCrownRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.carId = reader.uint32();
          break;
        case 2:
          message.area = reader.uint32();
          break;
        case 3:
          message.lockTime = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LockCrownRequest {
    return {
      carId: isSet(object.carId) ? Number(object.carId) : 0,
      area: isSet(object.area) ? Number(object.area) : 0,
      lockTime: isSet(object.lockTime) ? Number(object.lockTime) : 0,
    };
  },

  toJSON(message: LockCrownRequest): unknown {
    const obj: any = {};
    message.carId !== undefined && (obj.carId = Math.round(message.carId));
    message.area !== undefined && (obj.area = Math.round(message.area));
    message.lockTime !== undefined &&
      (obj.lockTime = Math.round(message.lockTime));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LockCrownRequest>, I>>(
    object: I
  ): LockCrownRequest {
    const message = createBaseLockCrownRequest();
    message.carId = object.carId ?? 0;
    message.area = object.area ?? 0;
    message.lockTime = object.lockTime ?? 0;
    return message;
  },
};

function createBaseLockCrownResponse(): LockCrownResponse {
  return { error: 0 };
}

export const LockCrownResponse = {
  encode(
    message: LockCrownResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.error !== 0) {
      writer.uint32(8).int32(message.error);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LockCrownResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLockCrownResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.error = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LockCrownResponse {
    return {
      error: isSet(object.error) ? errorCodeFromJSON(object.error) : 0,
    };
  },

  toJSON(message: LockCrownResponse): unknown {
    const obj: any = {};
    message.error !== undefined && (obj.error = errorCodeToJSON(message.error));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LockCrownResponse>, I>>(
    object: I
  ): LockCrownResponse {
    const message = createBaseLockCrownResponse();
    message.error = object.error ?? 0;
    return message;
  },
};

function createBaseCrown(): Crown {
  return { carId: 0, area: 0, unlockAt: 0, car: undefined };
}

export const Crown = {
  encode(message: Crown, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.carId !== 0) {
      writer.uint32(8).uint32(message.carId);
    }
    if (message.area !== 0) {
      writer.uint32(16).uint32(message.area);
    }
    if (message.unlockAt !== 0) {
      writer.uint32(24).uint32(message.unlockAt);
    }
    if (message.car !== undefined) {
      Car.encode(message.car, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Crown {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCrown();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.carId = reader.uint32();
          break;
        case 2:
          message.area = reader.uint32();
          break;
        case 3:
          message.unlockAt = reader.uint32();
          break;
        case 4:
          message.car = Car.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Crown {
    return {
      carId: isSet(object.carId) ? Number(object.carId) : 0,
      area: isSet(object.area) ? Number(object.area) : 0,
      unlockAt: isSet(object.unlockAt) ? Number(object.unlockAt) : 0,
      car: isSet(object.car) ? Car.fromJSON(object.car) : undefined,
    };
  },

  toJSON(message: Crown): unknown {
    const obj: any = {};
    message.carId !== undefined && (obj.carId = Math.round(message.carId));
    message.area !== undefined && (obj.area = Math.round(message.area));
    message.unlockAt !== undefined &&
      (obj.unlockAt = Math.round(message.unlockAt));
    message.car !== undefined &&
      (obj.car = message.car ? Car.toJSON(message.car) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Crown>, I>>(object: I): Crown {
    const message = createBaseCrown();
    message.carId = object.carId ?? 0;
    message.area = object.area ?? 0;
    message.unlockAt = object.unlockAt ?? 0;
    message.car =
      object.car !== undefined && object.car !== null
        ? Car.fromPartial(object.car)
        : undefined;
    return message;
  },
};

function createBaseCrownListQuery(): CrownListQuery {
  return { carId: 0, area: 0 };
}

export const CrownListQuery = {
  encode(
    message: CrownListQuery,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.carId !== 0) {
      writer.uint32(8).uint32(message.carId);
    }
    if (message.area !== 0) {
      writer.uint32(16).uint32(message.area);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CrownListQuery {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCrownListQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.carId = reader.uint32();
          break;
        case 2:
          message.area = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CrownListQuery {
    return {
      carId: isSet(object.carId) ? Number(object.carId) : 0,
      area: isSet(object.area) ? Number(object.area) : 0,
    };
  },

  toJSON(message: CrownListQuery): unknown {
    const obj: any = {};
    message.carId !== undefined && (obj.carId = Math.round(message.carId));
    message.area !== undefined && (obj.area = Math.round(message.area));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CrownListQuery>, I>>(
    object: I
  ): CrownListQuery {
    const message = createBaseCrownListQuery();
    message.carId = object.carId ?? 0;
    message.area = object.area ?? 0;
    return message;
  },
};

function createBaseCrownList(): CrownList {
  return { crowns: [] };
}

export const CrownList = {
  encode(
    message: CrownList,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.crowns) {
      Crown.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CrownList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCrownList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.crowns.push(Crown.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CrownList {
    return {
      crowns: Array.isArray(object?.crowns)
        ? object.crowns.map((e: any) => Crown.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CrownList): unknown {
    const obj: any = {};
    if (message.crowns) {
      obj.crowns = message.crowns.map((e) => (e ? Crown.toJSON(e) : undefined));
    } else {
      obj.crowns = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CrownList>, I>>(
    object: I
  ): CrownList {
    const message = createBaseCrownList();
    message.crowns = object.crowns?.map((e) => Crown.fromPartial(e)) || [];
    return message;
  },
};

function createBaseRankingQuery(): RankingQuery {
  return { rankingType: 0 };
}

export const RankingQuery = {
  encode(
    message: RankingQuery,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.rankingType !== 0) {
      writer.uint32(8).int32(message.rankingType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RankingQuery {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRankingQuery();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rankingType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RankingQuery {
    return {
      rankingType: isSet(object.rankingType)
        ? rankingTypeFromJSON(object.rankingType)
        : 0,
    };
  },

  toJSON(message: RankingQuery): unknown {
    const obj: any = {};
    message.rankingType !== undefined &&
      (obj.rankingType = rankingTypeToJSON(message.rankingType));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RankingQuery>, I>>(
    object: I
  ): RankingQuery {
    const message = createBaseRankingQuery();
    message.rankingType = object.rankingType ?? 0;
    return message;
  },
};

function createBaseRanking(): Ranking {
  return { lists: [] };
}

export const Ranking = {
  encode(
    message: Ranking,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.lists) {
      Ranking_List.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Ranking {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRanking();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lists.push(Ranking_List.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Ranking {
    return {
      lists: Array.isArray(object?.lists)
        ? object.lists.map((e: any) => Ranking_List.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Ranking): unknown {
    const obj: any = {};
    if (message.lists) {
      obj.lists = message.lists.map((e) =>
        e ? Ranking_List.toJSON(e) : undefined
      );
    } else {
      obj.lists = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Ranking>, I>>(object: I): Ranking {
    const message = createBaseRanking();
    message.lists = object.lists?.map((e) => Ranking_List.fromPartial(e)) || [];
    return message;
  },
};

function createBaseRanking_List(): Ranking_List {
  return { rankingType: 0, topRecords: [] };
}

export const Ranking_List = {
  encode(
    message: Ranking_List,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.rankingType !== 0) {
      writer.uint32(8).int32(message.rankingType);
    }
    for (const v of message.topRecords) {
      Ranking_Entry.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Ranking_List {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRanking_List();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rankingType = reader.int32() as any;
          break;
        case 2:
          message.topRecords.push(
            Ranking_Entry.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Ranking_List {
    return {
      rankingType: isSet(object.rankingType)
        ? rankingTypeFromJSON(object.rankingType)
        : 0,
      topRecords: Array.isArray(object?.topRecords)
        ? object.topRecords.map((e: any) => Ranking_Entry.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Ranking_List): unknown {
    const obj: any = {};
    message.rankingType !== undefined &&
      (obj.rankingType = rankingTypeToJSON(message.rankingType));
    if (message.topRecords) {
      obj.topRecords = message.topRecords.map((e) =>
        e ? Ranking_Entry.toJSON(e) : undefined
      );
    } else {
      obj.topRecords = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Ranking_List>, I>>(
    object: I
  ): Ranking_List {
    const message = createBaseRanking_List();
    message.rankingType = object.rankingType ?? 0;
    message.topRecords =
      object.topRecords?.map((e) => Ranking_Entry.fromPartial(e)) || [];
    return message;
  },
};

function createBaseRanking_Entry(): Ranking_Entry {
  return {
    rank: 0,
    result: 0,
    carId: 0,
    name: "",
    regionId: 0,
    model: 0,
    visualModel: 0,
    defaultColor: 0,
    tunePower: 0,
    tuneHandling: 0,
    title: "",
    level: 0,
  };
}

export const Ranking_Entry = {
  encode(
    message: Ranking_Entry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.rank !== 0) {
      writer.uint32(8).uint32(message.rank);
    }
    if (message.result !== 0) {
      writer.uint32(16).uint32(message.result);
    }
    if (message.carId !== 0) {
      writer.uint32(24).uint32(message.carId);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.regionId !== 0) {
      writer.uint32(40).uint32(message.regionId);
    }
    if (message.model !== 0) {
      writer.uint32(48).uint32(message.model);
    }
    if (message.visualModel !== 0) {
      writer.uint32(56).uint32(message.visualModel);
    }
    if (message.defaultColor !== 0) {
      writer.uint32(64).uint32(message.defaultColor);
    }
    if (message.tunePower !== 0) {
      writer.uint32(72).uint32(message.tunePower);
    }
    if (message.tuneHandling !== 0) {
      writer.uint32(80).uint32(message.tuneHandling);
    }
    if (message.title !== "") {
      writer.uint32(90).string(message.title);
    }
    if (message.level !== 0) {
      writer.uint32(96).uint32(message.level);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Ranking_Entry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRanking_Entry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rank = reader.uint32();
          break;
        case 2:
          message.result = reader.uint32();
          break;
        case 3:
          message.carId = reader.uint32();
          break;
        case 4:
          message.name = reader.string();
          break;
        case 5:
          message.regionId = reader.uint32();
          break;
        case 6:
          message.model = reader.uint32();
          break;
        case 7:
          message.visualModel = reader.uint32();
          break;
        case 8:
          message.defaultColor = reader.uint32();
          break;
        case 9:
          message.tunePower = reader.uint32();
          break;
        case 10:
          message.tuneHandling = reader.uint32();
          break;
        case 11:
          message.title = reader.string();
          break;
        case 12:
          message.level = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Ranking_Entry {
    return {
      rank: isSet(object.rank) ? Number(object.rank) : 0,
      result: isSet(object.result) ? Number(object.result) : 0,
      carId: isSet(object.carId) ? Number(object.carId) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      regionId: isSet(object.regionId) ? Number(object.regionId) : 0,
      model: isSet(object.model) ? Number(object.model) : 0,
      visualModel: isSet(object.visualModel) ? Number(object.visualModel) : 0,
      defaultColor: isSet(object.defaultColor)
        ? Number(object.defaultColor)
        : 0,
      tunePower: isSet(object.tunePower) ? Number(object.tunePower) : 0,
      tuneHandling: isSet(object.tuneHandling)
        ? Number(object.tuneHandling)
        : 0,
      title: isSet(object.title) ? String(object.title) : "",
      level: isSet(object.level) ? Number(object.level) : 0,
    };
  },

  toJSON(message: Ranking_Entry): unknown {
    const obj: any = {};
    message.rank !== undefined && (obj.rank = Math.round(message.rank));
    message.result !== undefined && (obj.result = Math.round(message.result));
    message.carId !== undefined && (obj.carId = Math.round(message.carId));
    message.name !== undefined && (obj.name = message.name);
    message.regionId !== undefined &&
      (obj.regionId = Math.round(message.regionId));
    message.model !== undefined && (obj.model = Math.round(message.model));
    message.visualModel !== undefined &&
      (obj.visualModel = Math.round(message.visualModel));
    message.defaultColor !== undefined &&
      (obj.defaultColor = Math.round(message.defaultColor));
    message.tunePower !== undefined &&
      (obj.tunePower = Math.round(message.tunePower));
    message.tuneHandling !== undefined &&
      (obj.tuneHandling = Math.round(message.tuneHandling));
    message.title !== undefined && (obj.title = message.title);
    message.level !== undefined && (obj.level = Math.round(message.level));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Ranking_Entry>, I>>(
    object: I
  ): Ranking_Entry {
    const message = createBaseRanking_Entry();
    message.rank = object.rank ?? 0;
    message.result = object.result ?? 0;
    message.carId = object.carId ?? 0;
    message.name = object.name ?? "";
    message.regionId = object.regionId ?? 0;
    message.model = object.model ?? 0;
    message.visualModel = object.visualModel ?? 0;
    message.defaultColor = object.defaultColor ?? 0;
    message.tunePower = object.tunePower ?? 0;
    message.tuneHandling = object.tuneHandling ?? 0;
    message.title = object.title ?? "";
    message.level = object.level ?? 0;
    return message;
  },
};

export interface Rpc {
  register_system_info(
    request: RegisterSystemInfoRequest
  ): Promise<RegisterSystemInfoResponse>;
  register_system_stats(
    request: RegisterSystemStatsRequest
  ): Promise<RegisterSystemStatsResponse>;
  register_ghost_trail(
    request: RegisterGhostTrailRequest
  ): Promise<RegisterGhostTrailResponse>;
  load_user(request: LoadUserRequest): Promise<LoadUserResponse>;
  update_user_session(
    request: UpdateUserSessionRequest
  ): Promise<UpdateUserSessionResponse>;
  load_drive_information(
    request: LoadDriveInformationRequest
  ): Promise<LoadDriveInformationResponse>;
  load_car(request: LoadCarRequest): Promise<LoadCarResponse>;
  create_car(request: CreateCarRequest): Promise<CreateCarResponse>;
  load_game_history(
    request: LoadGameHistoryRequest
  ): Promise<LoadGameHistoryResponse>;
  update_car(request: UpdateCarRequest): Promise<UpdateCarResponse>;
  save_game_result(
    request: SaveGameResultRequest
  ): Promise<SaveGameResultResponse>;
  save_charge(request: SaveChargeRequest): Promise<SaveChargeResponse>;
  load_ghost_battle_info(
    request: LoadGhostBattleInfoRequest
  ): Promise<LoadGhostBattleInfoResponse>;
  load_stamp_target(
    request: LoadStampTargetRequest
  ): Promise<LoadStampTargetResponse>;
  lock_stamp_target(
    request: LockStampTargetRequest
  ): Promise<LockStampTargetResponse>;
  load_ghost_competition_info(
    request: LoadGhostCompetitionInfoRequest
  ): Promise<LoadGhostCompetitionInfoResponse>;
  load_time_attack_record(
    request: LoadTimeAttackRecordRequest
  ): Promise<LoadTimeAttackRecordResponse>;
  save_terminal_result(
    request: SaveTerminalResultRequest
  ): Promise<SaveTerminalResultResponse>;
  ping(request: PingRequest): Promise<PingResponse>;
  load_terminal_information(
    request: LoadTerminalInformationRequest
  ): Promise<LoadTerminalInformationResponse>;
  create_user(request: CreateUserRequest): Promise<CreateUserResponse>;
  ask_access_code(
    request: AskAccessCodeRequest
  ): Promise<AskAccessCodeResponse>;
  register_opponent_ghost(
    request: RegisterOpponentGhostRequest
  ): Promise<RegisterOpponentGhostResponse>;
  load_bookmarks(request: LoadBookmarksRequest): Promise<LoadBookmarksResponse>;
  save_bookmarks(request: SaveBookmarksRequest): Promise<SaveBookmarksResponse>;
  grant_car_right(
    request: GrantCarRightRequest
  ): Promise<GrantCarRightResponse>;
  load_ghost_competition_ranking(
    request: LoadGhostCompetitionRankingRequest
  ): Promise<LoadGhostCompetitionRankingResponse>;
  load_unreceived_user_items(
    request: LoadUnreceivedUserItemsRequest
  ): Promise<LoadUnreceivedUserItemsResponse>;
  start_transfer(request: StartTransferRequest): Promise<StartTransferResponse>;
  save_screenshot(
    request: SaveScreenshotRequest
  ): Promise<SaveScreenshotResponse>;
  load_scratch_information(
    request: LoadScratchInformationRequest
  ): Promise<LoadScratchInformationResponse>;
  save_scratch_sheet(
    request: SaveScratchSheetRequest
  ): Promise<SaveScratchSheetResponse>;
  turn_scratch_sheet(
    request: TurnScratchSheetRequest
  ): Promise<TurnScratchSheetResponse>;
  check_item_receivable_cars(
    request: CheckItemReceivableCarsRequest
  ): Promise<CheckItemReceivableCarsResponse>;
  receive_user_items(
    request: ReceiveUserItemsRequest
  ): Promise<ReceiveUserItemsResponse>;
  update_event_mode_serial(
    request: UpdateEventModeSerialRequest
  ): Promise<UpdateEventModeSerialResponse>;
  consume_user_item(
    request: ConsumeUserItemRequest
  ): Promise<ConsumeUserItemResponse>;
  search_cars_by_level(
    request: SearchCarsByLevelRequest
  ): Promise<SearchCarsByLevelResponse>;
  load_paths_and_tunings(
    request: LoadPathsAndTuningsRequest
  ): Promise<LoadPathsAndTuningsResponse>;
  load_ghost_drive_data(
    request: LoadGhostDriveDataRequest
  ): Promise<LoadGhostDriveDataResponse>;
  participate_in_invite_friend_campaign(
    request: ParticipateInInviteFriendCampaignRequest
  ): Promise<ParticipateInInviteFriendCampaignResponse>;
  lock_crown(request: LockCrownRequest): Promise<LockCrownResponse>;
  submit_client_log(
    request: SubmitClientLogRequest
  ): Promise<SubmitClientLogResponse>;
}

export class RpcClientImpl implements Rpc {
  private readonly rpc: _Rpc;
  constructor(rpc: _Rpc) {
    this.rpc = rpc;
    this.register_system_info = this.register_system_info.bind(this);
    this.register_system_stats = this.register_system_stats.bind(this);
    this.register_ghost_trail = this.register_ghost_trail.bind(this);
    this.load_user = this.load_user.bind(this);
    this.update_user_session = this.update_user_session.bind(this);
    this.load_drive_information = this.load_drive_information.bind(this);
    this.load_car = this.load_car.bind(this);
    this.create_car = this.create_car.bind(this);
    this.load_game_history = this.load_game_history.bind(this);
    this.update_car = this.update_car.bind(this);
    this.save_game_result = this.save_game_result.bind(this);
    this.save_charge = this.save_charge.bind(this);
    this.load_ghost_battle_info = this.load_ghost_battle_info.bind(this);
    this.load_stamp_target = this.load_stamp_target.bind(this);
    this.lock_stamp_target = this.lock_stamp_target.bind(this);
    this.load_ghost_competition_info =
      this.load_ghost_competition_info.bind(this);
    this.load_time_attack_record = this.load_time_attack_record.bind(this);
    this.save_terminal_result = this.save_terminal_result.bind(this);
    this.ping = this.ping.bind(this);
    this.load_terminal_information = this.load_terminal_information.bind(this);
    this.create_user = this.create_user.bind(this);
    this.ask_access_code = this.ask_access_code.bind(this);
    this.register_opponent_ghost = this.register_opponent_ghost.bind(this);
    this.load_bookmarks = this.load_bookmarks.bind(this);
    this.save_bookmarks = this.save_bookmarks.bind(this);
    this.grant_car_right = this.grant_car_right.bind(this);
    this.load_ghost_competition_ranking =
      this.load_ghost_competition_ranking.bind(this);
    this.load_unreceived_user_items =
      this.load_unreceived_user_items.bind(this);
    this.start_transfer = this.start_transfer.bind(this);
    this.save_screenshot = this.save_screenshot.bind(this);
    this.load_scratch_information = this.load_scratch_information.bind(this);
    this.save_scratch_sheet = this.save_scratch_sheet.bind(this);
    this.turn_scratch_sheet = this.turn_scratch_sheet.bind(this);
    this.check_item_receivable_cars =
      this.check_item_receivable_cars.bind(this);
    this.receive_user_items = this.receive_user_items.bind(this);
    this.update_event_mode_serial = this.update_event_mode_serial.bind(this);
    this.consume_user_item = this.consume_user_item.bind(this);
    this.search_cars_by_level = this.search_cars_by_level.bind(this);
    this.load_paths_and_tunings = this.load_paths_and_tunings.bind(this);
    this.load_ghost_drive_data = this.load_ghost_drive_data.bind(this);
    this.participate_in_invite_friend_campaign =
      this.participate_in_invite_friend_campaign.bind(this);
    this.lock_crown = this.lock_crown.bind(this);
    this.submit_client_log = this.submit_client_log.bind(this);
  }
  register_system_info(
    request: RegisterSystemInfoRequest
  ): Promise<RegisterSystemInfoResponse> {
    const data = RegisterSystemInfoRequest.encode(request).finish();
    const promise = this.rpc.request(
      "wm.protobuf.Rpc",
      "register_system_info",
      data
    );
    return promise.then((data) =>
      RegisterSystemInfoResponse.decode(new _m0.Reader(data))
    );
  }

  register_system_stats(
    request: RegisterSystemStatsRequest
  ): Promise<RegisterSystemStatsResponse> {
    const data = RegisterSystemStatsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "wm.protobuf.Rpc",
      "register_system_stats",
      data
    );
    return promise.then((data) =>
      RegisterSystemStatsResponse.decode(new _m0.Reader(data))
    );
  }

  register_ghost_trail(
    request: RegisterGhostTrailRequest
  ): Promise<RegisterGhostTrailResponse> {
    const data = RegisterGhostTrailRequest.encode(request).finish();
    const promise = this.rpc.request(
      "wm.protobuf.Rpc",
      "register_ghost_trail",
      data
    );
    return promise.then((data) =>
      RegisterGhostTrailResponse.decode(new _m0.Reader(data))
    );
  }

  load_user(request: LoadUserRequest): Promise<LoadUserResponse> {
    const data = LoadUserRequest.encode(request).finish();
    const promise = this.rpc.request("wm.protobuf.Rpc", "load_user", data);
    return promise.then((data) =>
      LoadUserResponse.decode(new _m0.Reader(data))
    );
  }

  update_user_session(
    request: UpdateUserSessionRequest
  ): Promise<UpdateUserSessionResponse> {
    const data = UpdateUserSessionRequest.encode(request).finish();
    const promise = this.rpc.request(
      "wm.protobuf.Rpc",
      "update_user_session",
      data
    );
    return promise.then((data) =>
      UpdateUserSessionResponse.decode(new _m0.Reader(data))
    );
  }

  load_drive_information(
    request: LoadDriveInformationRequest
  ): Promise<LoadDriveInformationResponse> {
    const data = LoadDriveInformationRequest.encode(request).finish();
    const promise = this.rpc.request(
      "wm.protobuf.Rpc",
      "load_drive_information",
      data
    );
    return promise.then((data) =>
      LoadDriveInformationResponse.decode(new _m0.Reader(data))
    );
  }

  load_car(request: LoadCarRequest): Promise<LoadCarResponse> {
    const data = LoadCarRequest.encode(request).finish();
    const promise = this.rpc.request("wm.protobuf.Rpc", "load_car", data);
    return promise.then((data) => LoadCarResponse.decode(new _m0.Reader(data)));
  }

  create_car(request: CreateCarRequest): Promise<CreateCarResponse> {
    const data = CreateCarRequest.encode(request).finish();
    const promise = this.rpc.request("wm.protobuf.Rpc", "create_car", data);
    return promise.then((data) =>
      CreateCarResponse.decode(new _m0.Reader(data))
    );
  }

  load_game_history(
    request: LoadGameHistoryRequest
  ): Promise<LoadGameHistoryResponse> {
    const data = LoadGameHistoryRequest.encode(request).finish();
    const promise = this.rpc.request(
      "wm.protobuf.Rpc",
      "load_game_history",
      data
    );
    return promise.then((data) =>
      LoadGameHistoryResponse.decode(new _m0.Reader(data))
    );
  }

  update_car(request: UpdateCarRequest): Promise<UpdateCarResponse> {
    const data = UpdateCarRequest.encode(request).finish();
    const promise = this.rpc.request("wm.protobuf.Rpc", "update_car", data);
    return promise.then((data) =>
      UpdateCarResponse.decode(new _m0.Reader(data))
    );
  }

  save_game_result(
    request: SaveGameResultRequest
  ): Promise<SaveGameResultResponse> {
    const data = SaveGameResultRequest.encode(request).finish();
    const promise = this.rpc.request(
      "wm.protobuf.Rpc",
      "save_game_result",
      data
    );
    return promise.then((data) =>
      SaveGameResultResponse.decode(new _m0.Reader(data))
    );
  }

  save_charge(request: SaveChargeRequest): Promise<SaveChargeResponse> {
    const data = SaveChargeRequest.encode(request).finish();
    const promise = this.rpc.request("wm.protobuf.Rpc", "save_charge", data);
    return promise.then((data) =>
      SaveChargeResponse.decode(new _m0.Reader(data))
    );
  }

  load_ghost_battle_info(
    request: LoadGhostBattleInfoRequest
  ): Promise<LoadGhostBattleInfoResponse> {
    const data = LoadGhostBattleInfoRequest.encode(request).finish();
    const promise = this.rpc.request(
      "wm.protobuf.Rpc",
      "load_ghost_battle_info",
      data
    );
    return promise.then((data) =>
      LoadGhostBattleInfoResponse.decode(new _m0.Reader(data))
    );
  }

  load_stamp_target(
    request: LoadStampTargetRequest
  ): Promise<LoadStampTargetResponse> {
    const data = LoadStampTargetRequest.encode(request).finish();
    const promise = this.rpc.request(
      "wm.protobuf.Rpc",
      "load_stamp_target",
      data
    );
    return promise.then((data) =>
      LoadStampTargetResponse.decode(new _m0.Reader(data))
    );
  }

  lock_stamp_target(
    request: LockStampTargetRequest
  ): Promise<LockStampTargetResponse> {
    const data = LockStampTargetRequest.encode(request).finish();
    const promise = this.rpc.request(
      "wm.protobuf.Rpc",
      "lock_stamp_target",
      data
    );
    return promise.then((data) =>
      LockStampTargetResponse.decode(new _m0.Reader(data))
    );
  }

  load_ghost_competition_info(
    request: LoadGhostCompetitionInfoRequest
  ): Promise<LoadGhostCompetitionInfoResponse> {
    const data = LoadGhostCompetitionInfoRequest.encode(request).finish();
    const promise = this.rpc.request(
      "wm.protobuf.Rpc",
      "load_ghost_competition_info",
      data
    );
    return promise.then((data) =>
      LoadGhostCompetitionInfoResponse.decode(new _m0.Reader(data))
    );
  }

  load_time_attack_record(
    request: LoadTimeAttackRecordRequest
  ): Promise<LoadTimeAttackRecordResponse> {
    const data = LoadTimeAttackRecordRequest.encode(request).finish();
    const promise = this.rpc.request(
      "wm.protobuf.Rpc",
      "load_time_attack_record",
      data
    );
    return promise.then((data) =>
      LoadTimeAttackRecordResponse.decode(new _m0.Reader(data))
    );
  }

  save_terminal_result(
    request: SaveTerminalResultRequest
  ): Promise<SaveTerminalResultResponse> {
    const data = SaveTerminalResultRequest.encode(request).finish();
    const promise = this.rpc.request(
      "wm.protobuf.Rpc",
      "save_terminal_result",
      data
    );
    return promise.then((data) =>
      SaveTerminalResultResponse.decode(new _m0.Reader(data))
    );
  }

  ping(request: PingRequest): Promise<PingResponse> {
    const data = PingRequest.encode(request).finish();
    const promise = this.rpc.request("wm.protobuf.Rpc", "ping", data);
    return promise.then((data) => PingResponse.decode(new _m0.Reader(data)));
  }

  load_terminal_information(
    request: LoadTerminalInformationRequest
  ): Promise<LoadTerminalInformationResponse> {
    const data = LoadTerminalInformationRequest.encode(request).finish();
    const promise = this.rpc.request(
      "wm.protobuf.Rpc",
      "load_terminal_information",
      data
    );
    return promise.then((data) =>
      LoadTerminalInformationResponse.decode(new _m0.Reader(data))
    );
  }

  create_user(request: CreateUserRequest): Promise<CreateUserResponse> {
    const data = CreateUserRequest.encode(request).finish();
    const promise = this.rpc.request("wm.protobuf.Rpc", "create_user", data);
    return promise.then((data) =>
      CreateUserResponse.decode(new _m0.Reader(data))
    );
  }

  ask_access_code(
    request: AskAccessCodeRequest
  ): Promise<AskAccessCodeResponse> {
    const data = AskAccessCodeRequest.encode(request).finish();
    const promise = this.rpc.request(
      "wm.protobuf.Rpc",
      "ask_access_code",
      data
    );
    return promise.then((data) =>
      AskAccessCodeResponse.decode(new _m0.Reader(data))
    );
  }

  register_opponent_ghost(
    request: RegisterOpponentGhostRequest
  ): Promise<RegisterOpponentGhostResponse> {
    const data = RegisterOpponentGhostRequest.encode(request).finish();
    const promise = this.rpc.request(
      "wm.protobuf.Rpc",
      "register_opponent_ghost",
      data
    );
    return promise.then((data) =>
      RegisterOpponentGhostResponse.decode(new _m0.Reader(data))
    );
  }

  load_bookmarks(
    request: LoadBookmarksRequest
  ): Promise<LoadBookmarksResponse> {
    const data = LoadBookmarksRequest.encode(request).finish();
    const promise = this.rpc.request("wm.protobuf.Rpc", "load_bookmarks", data);
    return promise.then((data) =>
      LoadBookmarksResponse.decode(new _m0.Reader(data))
    );
  }

  save_bookmarks(
    request: SaveBookmarksRequest
  ): Promise<SaveBookmarksResponse> {
    const data = SaveBookmarksRequest.encode(request).finish();
    const promise = this.rpc.request("wm.protobuf.Rpc", "save_bookmarks", data);
    return promise.then((data) =>
      SaveBookmarksResponse.decode(new _m0.Reader(data))
    );
  }

  grant_car_right(
    request: GrantCarRightRequest
  ): Promise<GrantCarRightResponse> {
    const data = GrantCarRightRequest.encode(request).finish();
    const promise = this.rpc.request(
      "wm.protobuf.Rpc",
      "grant_car_right",
      data
    );
    return promise.then((data) =>
      GrantCarRightResponse.decode(new _m0.Reader(data))
    );
  }

  load_ghost_competition_ranking(
    request: LoadGhostCompetitionRankingRequest
  ): Promise<LoadGhostCompetitionRankingResponse> {
    const data = LoadGhostCompetitionRankingRequest.encode(request).finish();
    const promise = this.rpc.request(
      "wm.protobuf.Rpc",
      "load_ghost_competition_ranking",
      data
    );
    return promise.then((data) =>
      LoadGhostCompetitionRankingResponse.decode(new _m0.Reader(data))
    );
  }

  load_unreceived_user_items(
    request: LoadUnreceivedUserItemsRequest
  ): Promise<LoadUnreceivedUserItemsResponse> {
    const data = LoadUnreceivedUserItemsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "wm.protobuf.Rpc",
      "load_unreceived_user_items",
      data
    );
    return promise.then((data) =>
      LoadUnreceivedUserItemsResponse.decode(new _m0.Reader(data))
    );
  }

  start_transfer(
    request: StartTransferRequest
  ): Promise<StartTransferResponse> {
    const data = StartTransferRequest.encode(request).finish();
    const promise = this.rpc.request("wm.protobuf.Rpc", "start_transfer", data);
    return promise.then((data) =>
      StartTransferResponse.decode(new _m0.Reader(data))
    );
  }

  save_screenshot(
    request: SaveScreenshotRequest
  ): Promise<SaveScreenshotResponse> {
    const data = SaveScreenshotRequest.encode(request).finish();
    const promise = this.rpc.request(
      "wm.protobuf.Rpc",
      "save_screenshot",
      data
    );
    return promise.then((data) =>
      SaveScreenshotResponse.decode(new _m0.Reader(data))
    );
  }

  load_scratch_information(
    request: LoadScratchInformationRequest
  ): Promise<LoadScratchInformationResponse> {
    const data = LoadScratchInformationRequest.encode(request).finish();
    const promise = this.rpc.request(
      "wm.protobuf.Rpc",
      "load_scratch_information",
      data
    );
    return promise.then((data) =>
      LoadScratchInformationResponse.decode(new _m0.Reader(data))
    );
  }

  save_scratch_sheet(
    request: SaveScratchSheetRequest
  ): Promise<SaveScratchSheetResponse> {
    const data = SaveScratchSheetRequest.encode(request).finish();
    const promise = this.rpc.request(
      "wm.protobuf.Rpc",
      "save_scratch_sheet",
      data
    );
    return promise.then((data) =>
      SaveScratchSheetResponse.decode(new _m0.Reader(data))
    );
  }

  turn_scratch_sheet(
    request: TurnScratchSheetRequest
  ): Promise<TurnScratchSheetResponse> {
    const data = TurnScratchSheetRequest.encode(request).finish();
    const promise = this.rpc.request(
      "wm.protobuf.Rpc",
      "turn_scratch_sheet",
      data
    );
    return promise.then((data) =>
      TurnScratchSheetResponse.decode(new _m0.Reader(data))
    );
  }

  check_item_receivable_cars(
    request: CheckItemReceivableCarsRequest
  ): Promise<CheckItemReceivableCarsResponse> {
    const data = CheckItemReceivableCarsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "wm.protobuf.Rpc",
      "check_item_receivable_cars",
      data
    );
    return promise.then((data) =>
      CheckItemReceivableCarsResponse.decode(new _m0.Reader(data))
    );
  }

  receive_user_items(
    request: ReceiveUserItemsRequest
  ): Promise<ReceiveUserItemsResponse> {
    const data = ReceiveUserItemsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "wm.protobuf.Rpc",
      "receive_user_items",
      data
    );
    return promise.then((data) =>
      ReceiveUserItemsResponse.decode(new _m0.Reader(data))
    );
  }

  update_event_mode_serial(
    request: UpdateEventModeSerialRequest
  ): Promise<UpdateEventModeSerialResponse> {
    const data = UpdateEventModeSerialRequest.encode(request).finish();
    const promise = this.rpc.request(
      "wm.protobuf.Rpc",
      "update_event_mode_serial",
      data
    );
    return promise.then((data) =>
      UpdateEventModeSerialResponse.decode(new _m0.Reader(data))
    );
  }

  consume_user_item(
    request: ConsumeUserItemRequest
  ): Promise<ConsumeUserItemResponse> {
    const data = ConsumeUserItemRequest.encode(request).finish();
    const promise = this.rpc.request(
      "wm.protobuf.Rpc",
      "consume_user_item",
      data
    );
    return promise.then((data) =>
      ConsumeUserItemResponse.decode(new _m0.Reader(data))
    );
  }

  search_cars_by_level(
    request: SearchCarsByLevelRequest
  ): Promise<SearchCarsByLevelResponse> {
    const data = SearchCarsByLevelRequest.encode(request).finish();
    const promise = this.rpc.request(
      "wm.protobuf.Rpc",
      "search_cars_by_level",
      data
    );
    return promise.then((data) =>
      SearchCarsByLevelResponse.decode(new _m0.Reader(data))
    );
  }

  load_paths_and_tunings(
    request: LoadPathsAndTuningsRequest
  ): Promise<LoadPathsAndTuningsResponse> {
    const data = LoadPathsAndTuningsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "wm.protobuf.Rpc",
      "load_paths_and_tunings",
      data
    );
    return promise.then((data) =>
      LoadPathsAndTuningsResponse.decode(new _m0.Reader(data))
    );
  }

  load_ghost_drive_data(
    request: LoadGhostDriveDataRequest
  ): Promise<LoadGhostDriveDataResponse> {
    const data = LoadGhostDriveDataRequest.encode(request).finish();
    const promise = this.rpc.request(
      "wm.protobuf.Rpc",
      "load_ghost_drive_data",
      data
    );
    return promise.then((data) =>
      LoadGhostDriveDataResponse.decode(new _m0.Reader(data))
    );
  }

  participate_in_invite_friend_campaign(
    request: ParticipateInInviteFriendCampaignRequest
  ): Promise<ParticipateInInviteFriendCampaignResponse> {
    const data =
      ParticipateInInviteFriendCampaignRequest.encode(request).finish();
    const promise = this.rpc.request(
      "wm.protobuf.Rpc",
      "participate_in_invite_friend_campaign",
      data
    );
    return promise.then((data) =>
      ParticipateInInviteFriendCampaignResponse.decode(new _m0.Reader(data))
    );
  }

  lock_crown(request: LockCrownRequest): Promise<LockCrownResponse> {
    const data = LockCrownRequest.encode(request).finish();
    const promise = this.rpc.request("wm.protobuf.Rpc", "lock_crown", data);
    return promise.then((data) =>
      LockCrownResponse.decode(new _m0.Reader(data))
    );
  }

  submit_client_log(
    request: SubmitClientLogRequest
  ): Promise<SubmitClientLogResponse> {
    const data = SubmitClientLogRequest.encode(request).finish();
    const promise = this.rpc.request(
      "wm.protobuf.Rpc",
      "submit_client_log",
      data
    );
    return promise.then((data) =>
      SubmitClientLogResponse.decode(new _m0.Reader(data))
    );
  }
}

export interface Resource {
  ghost_trail(request: GhostTrailQuery): Promise<GhostTrail>;
  place_list(request: PlaceListQuery): Promise<PlaceList>;
  ghost_list(request: GhostListQuery): Promise<GhostList>;
  car_summary(request: CarSummaryQuery): Promise<CarSummary>;
  file_list(request: FileListQuery): Promise<FileList>;
  ghost_competition_target(
    request: GhostCompetitionTargetQuery
  ): Promise<GhostCompetitionTarget>;
  crown_list(request: CrownListQuery): Promise<CrownList>;
  ranking(request: RankingQuery): Promise<Ranking>;
}

export class ResourceClientImpl implements Resource {
  private readonly rpc: _Rpc;
  constructor(rpc: _Rpc) {
    this.rpc = rpc;
    this.ghost_trail = this.ghost_trail.bind(this);
    this.place_list = this.place_list.bind(this);
    this.ghost_list = this.ghost_list.bind(this);
    this.car_summary = this.car_summary.bind(this);
    this.file_list = this.file_list.bind(this);
    this.ghost_competition_target = this.ghost_competition_target.bind(this);
    this.crown_list = this.crown_list.bind(this);
    this.ranking = this.ranking.bind(this);
  }
  ghost_trail(request: GhostTrailQuery): Promise<GhostTrail> {
    const data = GhostTrailQuery.encode(request).finish();
    const promise = this.rpc.request(
      "wm.protobuf.Resource",
      "ghost_trail",
      data
    );
    return promise.then((data) => GhostTrail.decode(new _m0.Reader(data)));
  }

  place_list(request: PlaceListQuery): Promise<PlaceList> {
    const data = PlaceListQuery.encode(request).finish();
    const promise = this.rpc.request(
      "wm.protobuf.Resource",
      "place_list",
      data
    );
    return promise.then((data) => PlaceList.decode(new _m0.Reader(data)));
  }

  ghost_list(request: GhostListQuery): Promise<GhostList> {
    const data = GhostListQuery.encode(request).finish();
    const promise = this.rpc.request(
      "wm.protobuf.Resource",
      "ghost_list",
      data
    );
    return promise.then((data) => GhostList.decode(new _m0.Reader(data)));
  }

  car_summary(request: CarSummaryQuery): Promise<CarSummary> {
    const data = CarSummaryQuery.encode(request).finish();
    const promise = this.rpc.request(
      "wm.protobuf.Resource",
      "car_summary",
      data
    );
    return promise.then((data) => CarSummary.decode(new _m0.Reader(data)));
  }

  file_list(request: FileListQuery): Promise<FileList> {
    const data = FileListQuery.encode(request).finish();
    const promise = this.rpc.request("wm.protobuf.Resource", "file_list", data);
    return promise.then((data) => FileList.decode(new _m0.Reader(data)));
  }

  ghost_competition_target(
    request: GhostCompetitionTargetQuery
  ): Promise<GhostCompetitionTarget> {
    const data = GhostCompetitionTargetQuery.encode(request).finish();
    const promise = this.rpc.request(
      "wm.protobuf.Resource",
      "ghost_competition_target",
      data
    );
    return promise.then((data) =>
      GhostCompetitionTarget.decode(new _m0.Reader(data))
    );
  }

  crown_list(request: CrownListQuery): Promise<CrownList> {
    const data = CrownListQuery.encode(request).finish();
    const promise = this.rpc.request(
      "wm.protobuf.Resource",
      "crown_list",
      data
    );
    return promise.then((data) => CrownList.decode(new _m0.Reader(data)));
  }

  ranking(request: RankingQuery): Promise<Ranking> {
    const data = RankingQuery.encode(request).finish();
    const promise = this.rpc.request("wm.protobuf.Resource", "ranking", data);
    return promise.then((data) => Ranking.decode(new _m0.Reader(data)));
  }
}

interface _Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
