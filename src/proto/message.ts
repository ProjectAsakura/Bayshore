/* eslint-disable */
import { Car, GameFeatureVersion } from "./wm";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "wm.protobuf";

export interface Course {
  episodeId: number;
  timeAttackId: number;
  extremeId: number;
  runAreaId: number;
  startRampId: number;
  timezoneId: number;
  bgmId: number;
  autoSelect: boolean;
  assistOff: boolean;
  playerMax: number;
  vsRankList: string;
  distBase: number;
  distAdd: number;
  distBonus: number;
  randomSeed: number;
}

export interface HeartBeat {
  frameNumber: number;
  pcbSerial: string;
  serverComm: number;
}

export interface DriveCabinetState {
  iccardRwState: number;
  venderState: number;
  ffbState: number;
  allnetAttestation: number;
  updateAttestation: number;
  softwareRevision: number;
  downloadState: number;
  downloadRevision: number;
  downloadProgress: number;
  updateRevision: number;
  eventMode: number;
  eventModeDist: number;
  eventMode2on2: number;
}

export interface BatchSetting {
  coinChute: number;
  buycardCost: number;
  gameCost: number;
  continueCost: number;
  fullcourseCost: number;
  freeplay: number;
  winsAndRemains: number;
  eventMode: number;
  eventModeDist: number;
  closeType: number;
  closeSun: number;
  closeMon: number;
  closeTue: number;
  closeWed: number;
  closeThu: number;
  closeFri: number;
  closeSat: number;
  closeDay: number;
  softwareRevision: number;
  syncTime: number;
  eventModeCount: number;
  timeZoneType: number;
  timeDayLight: number;
  clockOffset: number;
  eventModeSerial: string;
  eventModeSerialEndAt: number;
  eventModeSerialErrorcode: number;
  eventMode2on2: number;
  wasTournamentScheduleSet: number;
}

export interface Information {
  systemMode: number;
  syncId: number;
  attractMovieId: number;
  attractRankingId: number;
  attractRandomSeed: number;
}

export interface RaceCar {
  car: Car | undefined;
  rank: number;
  vsStarCount: number;
  vsConsecutiveWins: number;
  vsMedalsRankLevel: number;
  wasClearedStoryWhithoutLosing: boolean;
  rgRegionMapScore: number[];
}

export interface TournamentCar {
  name: string;
  carId: number;
  entryNumber: number;
}

export interface TournamentCarList {
  car00: TournamentCar | undefined;
  car01: TournamentCar | undefined;
  car02: TournamentCar | undefined;
  car03: TournamentCar | undefined;
  car04: TournamentCar | undefined;
  car05: TournamentCar | undefined;
  car06: TournamentCar | undefined;
  car07: TournamentCar | undefined;
  car08: TournamentCar | undefined;
  car09: TournamentCar | undefined;
  car10: TournamentCar | undefined;
  car11: TournamentCar | undefined;
  car12: TournamentCar | undefined;
  car13: TournamentCar | undefined;
  car14: TournamentCar | undefined;
  car15: TournamentCar | undefined;
  car16: TournamentCar | undefined;
  car17: TournamentCar | undefined;
  car18: TournamentCar | undefined;
  car19: TournamentCar | undefined;
  car20: TournamentCar | undefined;
  car21: TournamentCar | undefined;
  car22: TournamentCar | undefined;
  car23: TournamentCar | undefined;
  car24: TournamentCar | undefined;
  car25: TournamentCar | undefined;
  car26: TournamentCar | undefined;
  car27: TournamentCar | undefined;
  car28: TournamentCar | undefined;
  car29: TournamentCar | undefined;
  car30: TournamentCar | undefined;
  car31: TournamentCar | undefined;
}

export interface TournamentRaceData {
  raceNumber: number;
  roundNumber: number;
  gameNumber: number;
  player00: number;
  player01: number;
  player02: number;
  player03: number;
  result00: number;
  result01: number;
  result02: number;
  result03: number;
}

export interface TournamentRaceDataList {
  raceData00: TournamentRaceData | undefined;
  raceData01: TournamentRaceData | undefined;
  raceData02: TournamentRaceData | undefined;
  raceData03: TournamentRaceData | undefined;
  raceData04: TournamentRaceData | undefined;
  raceData05: TournamentRaceData | undefined;
  raceData06: TournamentRaceData | undefined;
  raceData07: TournamentRaceData | undefined;
  raceData08: TournamentRaceData | undefined;
  raceData09: TournamentRaceData | undefined;
  raceData10: TournamentRaceData | undefined;
  raceData11: TournamentRaceData | undefined;
  raceData12: TournamentRaceData | undefined;
  raceData13: TournamentRaceData | undefined;
  raceData14: TournamentRaceData | undefined;
  raceData15: TournamentRaceData | undefined;
  raceData16: TournamentRaceData | undefined;
  raceData17: TournamentRaceData | undefined;
  raceData18: TournamentRaceData | undefined;
  raceData19: TournamentRaceData | undefined;
  raceData20: TournamentRaceData | undefined;
  raceData21: TournamentRaceData | undefined;
  raceData22: TournamentRaceData | undefined;
  raceData23: TournamentRaceData | undefined;
  raceData24: TournamentRaceData | undefined;
  raceData25: TournamentRaceData | undefined;
  raceData26: TournamentRaceData | undefined;
  raceData27: TournamentRaceData | undefined;
  raceData28: TournamentRaceData | undefined;
  raceData29: TournamentRaceData | undefined;
  raceData30: TournamentRaceData | undefined;
  raceData31: TournamentRaceData | undefined;
  raceData32: TournamentRaceData | undefined;
  raceData33: TournamentRaceData | undefined;
  raceData34: TournamentRaceData | undefined;
}

export interface TournamentResult {
  car: Car | undefined;
  rank: number;
  entryNumber: number;
}

export interface TournamentResultList {
  result00: TournamentResult | undefined;
  result01: TournamentResult | undefined;
  result02: TournamentResult | undefined;
  result03: TournamentResult | undefined;
}

export interface Tournament {
  isEnableTournament: boolean;
  isClearTournament: boolean;
  isEntryPlayerOnly: boolean;
  carList: TournamentCarList | undefined;
  raceDataList: TournamentRaceDataList | undefined;
  isTournamentOn: boolean;
  holdYear: number;
  holdMonth: number;
  holdDay: number;
  entryHour: number;
  entryMinute: number;
  tournamentStartHour: number;
  tournamentStartMinute: number;
  competitionNum: number;
  participantNum: number;
  surviverNumOfFirstRace: number;
  nowRound: number;
  playingGameNumber: number;
  isConfirmTournamentResult: boolean;
  isTournamentEntry: boolean;
  resultList: TournamentResultList | undefined;
  hasCommendationStarted: boolean;
  isCommendationRankAppeared: boolean;
  isCommendationEnded: boolean;
  isNextRank: boolean;
  commendationPage: number;
  showCommendationAgain: boolean;
}

export interface Message {
  racePacket: Uint8Array;
  raceCar: Uint8Array;
  course: Course | undefined;
  vsOk: number;
  heartBeat: HeartBeat | undefined;
  batchSettingState: number;
  driveCabinetState: DriveCabinetState | undefined;
  batchSetting: BatchSetting | undefined;
  information: Information | undefined;
  featureVersion: GameFeatureVersion | undefined;
  tournament: Tournament | undefined;
}

function createBaseCourse(): Course {
  return {
    episodeId: 0,
    timeAttackId: 0,
    extremeId: 0,
    runAreaId: 0,
    startRampId: 0,
    timezoneId: 0,
    bgmId: 0,
    autoSelect: false,
    assistOff: false,
    playerMax: 0,
    vsRankList: "",
    distBase: 0,
    distAdd: 0,
    distBonus: 0,
    randomSeed: 0,
  };
}

export const Course = {
  encode(
    message: Course,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.episodeId !== 0) {
      writer.uint32(8).sint32(message.episodeId);
    }
    if (message.timeAttackId !== 0) {
      writer.uint32(16).sint32(message.timeAttackId);
    }
    if (message.extremeId !== 0) {
      writer.uint32(24).sint32(message.extremeId);
    }
    if (message.runAreaId !== 0) {
      writer.uint32(32).sint32(message.runAreaId);
    }
    if (message.startRampId !== 0) {
      writer.uint32(40).sint32(message.startRampId);
    }
    if (message.timezoneId !== 0) {
      writer.uint32(48).sint32(message.timezoneId);
    }
    if (message.bgmId !== 0) {
      writer.uint32(56).sint32(message.bgmId);
    }
    if (message.autoSelect === true) {
      writer.uint32(64).bool(message.autoSelect);
    }
    if (message.assistOff === true) {
      writer.uint32(72).bool(message.assistOff);
    }
    if (message.playerMax !== 0) {
      writer.uint32(80).int32(message.playerMax);
    }
    if (message.vsRankList !== "") {
      writer.uint32(90).string(message.vsRankList);
    }
    if (message.distBase !== 0) {
      writer.uint32(101).float(message.distBase);
    }
    if (message.distAdd !== 0) {
      writer.uint32(109).float(message.distAdd);
    }
    if (message.distBonus !== 0) {
      writer.uint32(117).float(message.distBonus);
    }
    if (message.randomSeed !== 0) {
      writer.uint32(120).int32(message.randomSeed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Course {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCourse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.episodeId = reader.sint32();
          break;
        case 2:
          message.timeAttackId = reader.sint32();
          break;
        case 3:
          message.extremeId = reader.sint32();
          break;
        case 4:
          message.runAreaId = reader.sint32();
          break;
        case 5:
          message.startRampId = reader.sint32();
          break;
        case 6:
          message.timezoneId = reader.sint32();
          break;
        case 7:
          message.bgmId = reader.sint32();
          break;
        case 8:
          message.autoSelect = reader.bool();
          break;
        case 9:
          message.assistOff = reader.bool();
          break;
        case 10:
          message.playerMax = reader.int32();
          break;
        case 11:
          message.vsRankList = reader.string();
          break;
        case 12:
          message.distBase = reader.float();
          break;
        case 13:
          message.distAdd = reader.float();
          break;
        case 14:
          message.distBonus = reader.float();
          break;
        case 15:
          message.randomSeed = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Course {
    return {
      episodeId: isSet(object.episodeId) ? Number(object.episodeId) : 0,
      timeAttackId: isSet(object.timeAttackId)
        ? Number(object.timeAttackId)
        : 0,
      extremeId: isSet(object.extremeId) ? Number(object.extremeId) : 0,
      runAreaId: isSet(object.runAreaId) ? Number(object.runAreaId) : 0,
      startRampId: isSet(object.startRampId) ? Number(object.startRampId) : 0,
      timezoneId: isSet(object.timezoneId) ? Number(object.timezoneId) : 0,
      bgmId: isSet(object.bgmId) ? Number(object.bgmId) : 0,
      autoSelect: isSet(object.autoSelect) ? Boolean(object.autoSelect) : false,
      assistOff: isSet(object.assistOff) ? Boolean(object.assistOff) : false,
      playerMax: isSet(object.playerMax) ? Number(object.playerMax) : 0,
      vsRankList: isSet(object.vsRankList) ? String(object.vsRankList) : "",
      distBase: isSet(object.distBase) ? Number(object.distBase) : 0,
      distAdd: isSet(object.distAdd) ? Number(object.distAdd) : 0,
      distBonus: isSet(object.distBonus) ? Number(object.distBonus) : 0,
      randomSeed: isSet(object.randomSeed) ? Number(object.randomSeed) : 0,
    };
  },

  toJSON(message: Course): unknown {
    const obj: any = {};
    message.episodeId !== undefined &&
      (obj.episodeId = Math.round(message.episodeId));
    message.timeAttackId !== undefined &&
      (obj.timeAttackId = Math.round(message.timeAttackId));
    message.extremeId !== undefined &&
      (obj.extremeId = Math.round(message.extremeId));
    message.runAreaId !== undefined &&
      (obj.runAreaId = Math.round(message.runAreaId));
    message.startRampId !== undefined &&
      (obj.startRampId = Math.round(message.startRampId));
    message.timezoneId !== undefined &&
      (obj.timezoneId = Math.round(message.timezoneId));
    message.bgmId !== undefined && (obj.bgmId = Math.round(message.bgmId));
    message.autoSelect !== undefined && (obj.autoSelect = message.autoSelect);
    message.assistOff !== undefined && (obj.assistOff = message.assistOff);
    message.playerMax !== undefined &&
      (obj.playerMax = Math.round(message.playerMax));
    message.vsRankList !== undefined && (obj.vsRankList = message.vsRankList);
    message.distBase !== undefined && (obj.distBase = message.distBase);
    message.distAdd !== undefined && (obj.distAdd = message.distAdd);
    message.distBonus !== undefined && (obj.distBonus = message.distBonus);
    message.randomSeed !== undefined &&
      (obj.randomSeed = Math.round(message.randomSeed));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Course>, I>>(object: I): Course {
    const message = createBaseCourse();
    message.episodeId = object.episodeId ?? 0;
    message.timeAttackId = object.timeAttackId ?? 0;
    message.extremeId = object.extremeId ?? 0;
    message.runAreaId = object.runAreaId ?? 0;
    message.startRampId = object.startRampId ?? 0;
    message.timezoneId = object.timezoneId ?? 0;
    message.bgmId = object.bgmId ?? 0;
    message.autoSelect = object.autoSelect ?? false;
    message.assistOff = object.assistOff ?? false;
    message.playerMax = object.playerMax ?? 0;
    message.vsRankList = object.vsRankList ?? "";
    message.distBase = object.distBase ?? 0;
    message.distAdd = object.distAdd ?? 0;
    message.distBonus = object.distBonus ?? 0;
    message.randomSeed = object.randomSeed ?? 0;
    return message;
  },
};

function createBaseHeartBeat(): HeartBeat {
  return { frameNumber: 0, pcbSerial: "", serverComm: 0 };
}

export const HeartBeat = {
  encode(
    message: HeartBeat,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.frameNumber !== 0) {
      writer.uint32(8).uint32(message.frameNumber);
    }
    if (message.pcbSerial !== "") {
      writer.uint32(18).string(message.pcbSerial);
    }
    if (message.serverComm !== 0) {
      writer.uint32(24).int32(message.serverComm);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HeartBeat {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHeartBeat();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.frameNumber = reader.uint32();
          break;
        case 2:
          message.pcbSerial = reader.string();
          break;
        case 3:
          message.serverComm = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): HeartBeat {
    return {
      frameNumber: isSet(object.frameNumber) ? Number(object.frameNumber) : 0,
      pcbSerial: isSet(object.pcbSerial) ? String(object.pcbSerial) : "",
      serverComm: isSet(object.serverComm) ? Number(object.serverComm) : 0,
    };
  },

  toJSON(message: HeartBeat): unknown {
    const obj: any = {};
    message.frameNumber !== undefined &&
      (obj.frameNumber = Math.round(message.frameNumber));
    message.pcbSerial !== undefined && (obj.pcbSerial = message.pcbSerial);
    message.serverComm !== undefined &&
      (obj.serverComm = Math.round(message.serverComm));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<HeartBeat>, I>>(
    object: I
  ): HeartBeat {
    const message = createBaseHeartBeat();
    message.frameNumber = object.frameNumber ?? 0;
    message.pcbSerial = object.pcbSerial ?? "";
    message.serverComm = object.serverComm ?? 0;
    return message;
  },
};

function createBaseDriveCabinetState(): DriveCabinetState {
  return {
    iccardRwState: 0,
    venderState: 0,
    ffbState: 0,
    allnetAttestation: 0,
    updateAttestation: 0,
    softwareRevision: 0,
    downloadState: 0,
    downloadRevision: 0,
    downloadProgress: 0,
    updateRevision: 0,
    eventMode: 0,
    eventModeDist: 0,
    eventMode2on2: 0,
  };
}

export const DriveCabinetState = {
  encode(
    message: DriveCabinetState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.iccardRwState !== 0) {
      writer.uint32(8).int32(message.iccardRwState);
    }
    if (message.venderState !== 0) {
      writer.uint32(16).int32(message.venderState);
    }
    if (message.ffbState !== 0) {
      writer.uint32(24).int32(message.ffbState);
    }
    if (message.allnetAttestation !== 0) {
      writer.uint32(32).int32(message.allnetAttestation);
    }
    if (message.updateAttestation !== 0) {
      writer.uint32(40).int32(message.updateAttestation);
    }
    if (message.softwareRevision !== 0) {
      writer.uint32(48).int32(message.softwareRevision);
    }
    if (message.downloadState !== 0) {
      writer.uint32(56).int32(message.downloadState);
    }
    if (message.downloadRevision !== 0) {
      writer.uint32(64).int32(message.downloadRevision);
    }
    if (message.downloadProgress !== 0) {
      writer.uint32(72).int32(message.downloadProgress);
    }
    if (message.updateRevision !== 0) {
      writer.uint32(80).int32(message.updateRevision);
    }
    if (message.eventMode !== 0) {
      writer.uint32(88).int32(message.eventMode);
    }
    if (message.eventModeDist !== 0) {
      writer.uint32(96).int32(message.eventModeDist);
    }
    if (message.eventMode2on2 !== 0) {
      writer.uint32(104).int32(message.eventMode2on2);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DriveCabinetState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDriveCabinetState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.iccardRwState = reader.int32();
          break;
        case 2:
          message.venderState = reader.int32();
          break;
        case 3:
          message.ffbState = reader.int32();
          break;
        case 4:
          message.allnetAttestation = reader.int32();
          break;
        case 5:
          message.updateAttestation = reader.int32();
          break;
        case 6:
          message.softwareRevision = reader.int32();
          break;
        case 7:
          message.downloadState = reader.int32();
          break;
        case 8:
          message.downloadRevision = reader.int32();
          break;
        case 9:
          message.downloadProgress = reader.int32();
          break;
        case 10:
          message.updateRevision = reader.int32();
          break;
        case 11:
          message.eventMode = reader.int32();
          break;
        case 12:
          message.eventModeDist = reader.int32();
          break;
        case 13:
          message.eventMode2on2 = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DriveCabinetState {
    return {
      iccardRwState: isSet(object.iccardRwState)
        ? Number(object.iccardRwState)
        : 0,
      venderState: isSet(object.venderState) ? Number(object.venderState) : 0,
      ffbState: isSet(object.ffbState) ? Number(object.ffbState) : 0,
      allnetAttestation: isSet(object.allnetAttestation)
        ? Number(object.allnetAttestation)
        : 0,
      updateAttestation: isSet(object.updateAttestation)
        ? Number(object.updateAttestation)
        : 0,
      softwareRevision: isSet(object.softwareRevision)
        ? Number(object.softwareRevision)
        : 0,
      downloadState: isSet(object.downloadState)
        ? Number(object.downloadState)
        : 0,
      downloadRevision: isSet(object.downloadRevision)
        ? Number(object.downloadRevision)
        : 0,
      downloadProgress: isSet(object.downloadProgress)
        ? Number(object.downloadProgress)
        : 0,
      updateRevision: isSet(object.updateRevision)
        ? Number(object.updateRevision)
        : 0,
      eventMode: isSet(object.eventMode) ? Number(object.eventMode) : 0,
      eventModeDist: isSet(object.eventModeDist)
        ? Number(object.eventModeDist)
        : 0,
      eventMode2on2: isSet(object.eventMode2on2)
        ? Number(object.eventMode2on2)
        : 0,
    };
  },

  toJSON(message: DriveCabinetState): unknown {
    const obj: any = {};
    message.iccardRwState !== undefined &&
      (obj.iccardRwState = Math.round(message.iccardRwState));
    message.venderState !== undefined &&
      (obj.venderState = Math.round(message.venderState));
    message.ffbState !== undefined &&
      (obj.ffbState = Math.round(message.ffbState));
    message.allnetAttestation !== undefined &&
      (obj.allnetAttestation = Math.round(message.allnetAttestation));
    message.updateAttestation !== undefined &&
      (obj.updateAttestation = Math.round(message.updateAttestation));
    message.softwareRevision !== undefined &&
      (obj.softwareRevision = Math.round(message.softwareRevision));
    message.downloadState !== undefined &&
      (obj.downloadState = Math.round(message.downloadState));
    message.downloadRevision !== undefined &&
      (obj.downloadRevision = Math.round(message.downloadRevision));
    message.downloadProgress !== undefined &&
      (obj.downloadProgress = Math.round(message.downloadProgress));
    message.updateRevision !== undefined &&
      (obj.updateRevision = Math.round(message.updateRevision));
    message.eventMode !== undefined &&
      (obj.eventMode = Math.round(message.eventMode));
    message.eventModeDist !== undefined &&
      (obj.eventModeDist = Math.round(message.eventModeDist));
    message.eventMode2on2 !== undefined &&
      (obj.eventMode2on2 = Math.round(message.eventMode2on2));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DriveCabinetState>, I>>(
    object: I
  ): DriveCabinetState {
    const message = createBaseDriveCabinetState();
    message.iccardRwState = object.iccardRwState ?? 0;
    message.venderState = object.venderState ?? 0;
    message.ffbState = object.ffbState ?? 0;
    message.allnetAttestation = object.allnetAttestation ?? 0;
    message.updateAttestation = object.updateAttestation ?? 0;
    message.softwareRevision = object.softwareRevision ?? 0;
    message.downloadState = object.downloadState ?? 0;
    message.downloadRevision = object.downloadRevision ?? 0;
    message.downloadProgress = object.downloadProgress ?? 0;
    message.updateRevision = object.updateRevision ?? 0;
    message.eventMode = object.eventMode ?? 0;
    message.eventModeDist = object.eventModeDist ?? 0;
    message.eventMode2on2 = object.eventMode2on2 ?? 0;
    return message;
  },
};

function createBaseBatchSetting(): BatchSetting {
  return {
    coinChute: 0,
    buycardCost: 0,
    gameCost: 0,
    continueCost: 0,
    fullcourseCost: 0,
    freeplay: 0,
    winsAndRemains: 0,
    eventMode: 0,
    eventModeDist: 0,
    closeType: 0,
    closeSun: 0,
    closeMon: 0,
    closeTue: 0,
    closeWed: 0,
    closeThu: 0,
    closeFri: 0,
    closeSat: 0,
    closeDay: 0,
    softwareRevision: 0,
    syncTime: 0,
    eventModeCount: 0,
    timeZoneType: 0,
    timeDayLight: 0,
    clockOffset: 0,
    eventModeSerial: "",
    eventModeSerialEndAt: 0,
    eventModeSerialErrorcode: 0,
    eventMode2on2: 0,
    wasTournamentScheduleSet: 0,
  };
}

export const BatchSetting = {
  encode(
    message: BatchSetting,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.coinChute !== 0) {
      writer.uint32(8).int32(message.coinChute);
    }
    if (message.buycardCost !== 0) {
      writer.uint32(16).int32(message.buycardCost);
    }
    if (message.gameCost !== 0) {
      writer.uint32(24).int32(message.gameCost);
    }
    if (message.continueCost !== 0) {
      writer.uint32(32).int32(message.continueCost);
    }
    if (message.fullcourseCost !== 0) {
      writer.uint32(40).int32(message.fullcourseCost);
    }
    if (message.freeplay !== 0) {
      writer.uint32(48).int32(message.freeplay);
    }
    if (message.winsAndRemains !== 0) {
      writer.uint32(56).int32(message.winsAndRemains);
    }
    if (message.eventMode !== 0) {
      writer.uint32(64).int32(message.eventMode);
    }
    if (message.eventModeDist !== 0) {
      writer.uint32(72).int32(message.eventModeDist);
    }
    if (message.closeType !== 0) {
      writer.uint32(80).int32(message.closeType);
    }
    if (message.closeSun !== 0) {
      writer.uint32(88).int32(message.closeSun);
    }
    if (message.closeMon !== 0) {
      writer.uint32(96).int32(message.closeMon);
    }
    if (message.closeTue !== 0) {
      writer.uint32(104).int32(message.closeTue);
    }
    if (message.closeWed !== 0) {
      writer.uint32(112).int32(message.closeWed);
    }
    if (message.closeThu !== 0) {
      writer.uint32(120).int32(message.closeThu);
    }
    if (message.closeFri !== 0) {
      writer.uint32(128).int32(message.closeFri);
    }
    if (message.closeSat !== 0) {
      writer.uint32(136).int32(message.closeSat);
    }
    if (message.closeDay !== 0) {
      writer.uint32(144).int32(message.closeDay);
    }
    if (message.softwareRevision !== 0) {
      writer.uint32(152).int32(message.softwareRevision);
    }
    if (message.syncTime !== 0) {
      writer.uint32(160).int32(message.syncTime);
    }
    if (message.eventModeCount !== 0) {
      writer.uint32(168).int32(message.eventModeCount);
    }
    if (message.timeZoneType !== 0) {
      writer.uint32(176).uint32(message.timeZoneType);
    }
    if (message.timeDayLight !== 0) {
      writer.uint32(184).uint32(message.timeDayLight);
    }
    if (message.clockOffset !== 0) {
      writer.uint32(192).int32(message.clockOffset);
    }
    if (message.eventModeSerial !== "") {
      writer.uint32(202).string(message.eventModeSerial);
    }
    if (message.eventModeSerialEndAt !== 0) {
      writer.uint32(208).uint32(message.eventModeSerialEndAt);
    }
    if (message.eventModeSerialErrorcode !== 0) {
      writer.uint32(216).int32(message.eventModeSerialErrorcode);
    }
    if (message.eventMode2on2 !== 0) {
      writer.uint32(224).int32(message.eventMode2on2);
    }
    if (message.wasTournamentScheduleSet !== 0) {
      writer.uint32(232).int32(message.wasTournamentScheduleSet);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BatchSetting {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBatchSetting();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.coinChute = reader.int32();
          break;
        case 2:
          message.buycardCost = reader.int32();
          break;
        case 3:
          message.gameCost = reader.int32();
          break;
        case 4:
          message.continueCost = reader.int32();
          break;
        case 5:
          message.fullcourseCost = reader.int32();
          break;
        case 6:
          message.freeplay = reader.int32();
          break;
        case 7:
          message.winsAndRemains = reader.int32();
          break;
        case 8:
          message.eventMode = reader.int32();
          break;
        case 9:
          message.eventModeDist = reader.int32();
          break;
        case 10:
          message.closeType = reader.int32();
          break;
        case 11:
          message.closeSun = reader.int32();
          break;
        case 12:
          message.closeMon = reader.int32();
          break;
        case 13:
          message.closeTue = reader.int32();
          break;
        case 14:
          message.closeWed = reader.int32();
          break;
        case 15:
          message.closeThu = reader.int32();
          break;
        case 16:
          message.closeFri = reader.int32();
          break;
        case 17:
          message.closeSat = reader.int32();
          break;
        case 18:
          message.closeDay = reader.int32();
          break;
        case 19:
          message.softwareRevision = reader.int32();
          break;
        case 20:
          message.syncTime = reader.int32();
          break;
        case 21:
          message.eventModeCount = reader.int32();
          break;
        case 22:
          message.timeZoneType = reader.uint32();
          break;
        case 23:
          message.timeDayLight = reader.uint32();
          break;
        case 24:
          message.clockOffset = reader.int32();
          break;
        case 25:
          message.eventModeSerial = reader.string();
          break;
        case 26:
          message.eventModeSerialEndAt = reader.uint32();
          break;
        case 27:
          message.eventModeSerialErrorcode = reader.int32();
          break;
        case 28:
          message.eventMode2on2 = reader.int32();
          break;
        case 29:
          message.wasTournamentScheduleSet = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BatchSetting {
    return {
      coinChute: isSet(object.coinChute) ? Number(object.coinChute) : 0,
      buycardCost: isSet(object.buycardCost) ? Number(object.buycardCost) : 0,
      gameCost: isSet(object.gameCost) ? Number(object.gameCost) : 0,
      continueCost: isSet(object.continueCost)
        ? Number(object.continueCost)
        : 0,
      fullcourseCost: isSet(object.fullcourseCost)
        ? Number(object.fullcourseCost)
        : 0,
      freeplay: isSet(object.freeplay) ? Number(object.freeplay) : 0,
      winsAndRemains: isSet(object.winsAndRemains)
        ? Number(object.winsAndRemains)
        : 0,
      eventMode: isSet(object.eventMode) ? Number(object.eventMode) : 0,
      eventModeDist: isSet(object.eventModeDist)
        ? Number(object.eventModeDist)
        : 0,
      closeType: isSet(object.closeType) ? Number(object.closeType) : 0,
      closeSun: isSet(object.closeSun) ? Number(object.closeSun) : 0,
      closeMon: isSet(object.closeMon) ? Number(object.closeMon) : 0,
      closeTue: isSet(object.closeTue) ? Number(object.closeTue) : 0,
      closeWed: isSet(object.closeWed) ? Number(object.closeWed) : 0,
      closeThu: isSet(object.closeThu) ? Number(object.closeThu) : 0,
      closeFri: isSet(object.closeFri) ? Number(object.closeFri) : 0,
      closeSat: isSet(object.closeSat) ? Number(object.closeSat) : 0,
      closeDay: isSet(object.closeDay) ? Number(object.closeDay) : 0,
      softwareRevision: isSet(object.softwareRevision)
        ? Number(object.softwareRevision)
        : 0,
      syncTime: isSet(object.syncTime) ? Number(object.syncTime) : 0,
      eventModeCount: isSet(object.eventModeCount)
        ? Number(object.eventModeCount)
        : 0,
      timeZoneType: isSet(object.timeZoneType)
        ? Number(object.timeZoneType)
        : 0,
      timeDayLight: isSet(object.timeDayLight)
        ? Number(object.timeDayLight)
        : 0,
      clockOffset: isSet(object.clockOffset) ? Number(object.clockOffset) : 0,
      eventModeSerial: isSet(object.eventModeSerial)
        ? String(object.eventModeSerial)
        : "",
      eventModeSerialEndAt: isSet(object.eventModeSerialEndAt)
        ? Number(object.eventModeSerialEndAt)
        : 0,
      eventModeSerialErrorcode: isSet(object.eventModeSerialErrorcode)
        ? Number(object.eventModeSerialErrorcode)
        : 0,
      eventMode2on2: isSet(object.eventMode2on2)
        ? Number(object.eventMode2on2)
        : 0,
      wasTournamentScheduleSet: isSet(object.wasTournamentScheduleSet)
        ? Number(object.wasTournamentScheduleSet)
        : 0,
    };
  },

  toJSON(message: BatchSetting): unknown {
    const obj: any = {};
    message.coinChute !== undefined &&
      (obj.coinChute = Math.round(message.coinChute));
    message.buycardCost !== undefined &&
      (obj.buycardCost = Math.round(message.buycardCost));
    message.gameCost !== undefined &&
      (obj.gameCost = Math.round(message.gameCost));
    message.continueCost !== undefined &&
      (obj.continueCost = Math.round(message.continueCost));
    message.fullcourseCost !== undefined &&
      (obj.fullcourseCost = Math.round(message.fullcourseCost));
    message.freeplay !== undefined &&
      (obj.freeplay = Math.round(message.freeplay));
    message.winsAndRemains !== undefined &&
      (obj.winsAndRemains = Math.round(message.winsAndRemains));
    message.eventMode !== undefined &&
      (obj.eventMode = Math.round(message.eventMode));
    message.eventModeDist !== undefined &&
      (obj.eventModeDist = Math.round(message.eventModeDist));
    message.closeType !== undefined &&
      (obj.closeType = Math.round(message.closeType));
    message.closeSun !== undefined &&
      (obj.closeSun = Math.round(message.closeSun));
    message.closeMon !== undefined &&
      (obj.closeMon = Math.round(message.closeMon));
    message.closeTue !== undefined &&
      (obj.closeTue = Math.round(message.closeTue));
    message.closeWed !== undefined &&
      (obj.closeWed = Math.round(message.closeWed));
    message.closeThu !== undefined &&
      (obj.closeThu = Math.round(message.closeThu));
    message.closeFri !== undefined &&
      (obj.closeFri = Math.round(message.closeFri));
    message.closeSat !== undefined &&
      (obj.closeSat = Math.round(message.closeSat));
    message.closeDay !== undefined &&
      (obj.closeDay = Math.round(message.closeDay));
    message.softwareRevision !== undefined &&
      (obj.softwareRevision = Math.round(message.softwareRevision));
    message.syncTime !== undefined &&
      (obj.syncTime = Math.round(message.syncTime));
    message.eventModeCount !== undefined &&
      (obj.eventModeCount = Math.round(message.eventModeCount));
    message.timeZoneType !== undefined &&
      (obj.timeZoneType = Math.round(message.timeZoneType));
    message.timeDayLight !== undefined &&
      (obj.timeDayLight = Math.round(message.timeDayLight));
    message.clockOffset !== undefined &&
      (obj.clockOffset = Math.round(message.clockOffset));
    message.eventModeSerial !== undefined &&
      (obj.eventModeSerial = message.eventModeSerial);
    message.eventModeSerialEndAt !== undefined &&
      (obj.eventModeSerialEndAt = Math.round(message.eventModeSerialEndAt));
    message.eventModeSerialErrorcode !== undefined &&
      (obj.eventModeSerialErrorcode = Math.round(
        message.eventModeSerialErrorcode
      ));
    message.eventMode2on2 !== undefined &&
      (obj.eventMode2on2 = Math.round(message.eventMode2on2));
    message.wasTournamentScheduleSet !== undefined &&
      (obj.wasTournamentScheduleSet = Math.round(
        message.wasTournamentScheduleSet
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BatchSetting>, I>>(
    object: I
  ): BatchSetting {
    const message = createBaseBatchSetting();
    message.coinChute = object.coinChute ?? 0;
    message.buycardCost = object.buycardCost ?? 0;
    message.gameCost = object.gameCost ?? 0;
    message.continueCost = object.continueCost ?? 0;
    message.fullcourseCost = object.fullcourseCost ?? 0;
    message.freeplay = object.freeplay ?? 0;
    message.winsAndRemains = object.winsAndRemains ?? 0;
    message.eventMode = object.eventMode ?? 0;
    message.eventModeDist = object.eventModeDist ?? 0;
    message.closeType = object.closeType ?? 0;
    message.closeSun = object.closeSun ?? 0;
    message.closeMon = object.closeMon ?? 0;
    message.closeTue = object.closeTue ?? 0;
    message.closeWed = object.closeWed ?? 0;
    message.closeThu = object.closeThu ?? 0;
    message.closeFri = object.closeFri ?? 0;
    message.closeSat = object.closeSat ?? 0;
    message.closeDay = object.closeDay ?? 0;
    message.softwareRevision = object.softwareRevision ?? 0;
    message.syncTime = object.syncTime ?? 0;
    message.eventModeCount = object.eventModeCount ?? 0;
    message.timeZoneType = object.timeZoneType ?? 0;
    message.timeDayLight = object.timeDayLight ?? 0;
    message.clockOffset = object.clockOffset ?? 0;
    message.eventModeSerial = object.eventModeSerial ?? "";
    message.eventModeSerialEndAt = object.eventModeSerialEndAt ?? 0;
    message.eventModeSerialErrorcode = object.eventModeSerialErrorcode ?? 0;
    message.eventMode2on2 = object.eventMode2on2 ?? 0;
    message.wasTournamentScheduleSet = object.wasTournamentScheduleSet ?? 0;
    return message;
  },
};

function createBaseInformation(): Information {
  return {
    systemMode: 0,
    syncId: 0,
    attractMovieId: 0,
    attractRankingId: 0,
    attractRandomSeed: 0,
  };
}

export const Information = {
  encode(
    message: Information,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.systemMode !== 0) {
      writer.uint32(8).uint32(message.systemMode);
    }
    if (message.syncId !== 0) {
      writer.uint32(16).sint32(message.syncId);
    }
    if (message.attractMovieId !== 0) {
      writer.uint32(24).sint32(message.attractMovieId);
    }
    if (message.attractRankingId !== 0) {
      writer.uint32(32).sint32(message.attractRankingId);
    }
    if (message.attractRandomSeed !== 0) {
      writer.uint32(40).int32(message.attractRandomSeed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Information {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInformation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.systemMode = reader.uint32();
          break;
        case 2:
          message.syncId = reader.sint32();
          break;
        case 3:
          message.attractMovieId = reader.sint32();
          break;
        case 4:
          message.attractRankingId = reader.sint32();
          break;
        case 5:
          message.attractRandomSeed = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Information {
    return {
      systemMode: isSet(object.systemMode) ? Number(object.systemMode) : 0,
      syncId: isSet(object.syncId) ? Number(object.syncId) : 0,
      attractMovieId: isSet(object.attractMovieId)
        ? Number(object.attractMovieId)
        : 0,
      attractRankingId: isSet(object.attractRankingId)
        ? Number(object.attractRankingId)
        : 0,
      attractRandomSeed: isSet(object.attractRandomSeed)
        ? Number(object.attractRandomSeed)
        : 0,
    };
  },

  toJSON(message: Information): unknown {
    const obj: any = {};
    message.systemMode !== undefined &&
      (obj.systemMode = Math.round(message.systemMode));
    message.syncId !== undefined && (obj.syncId = Math.round(message.syncId));
    message.attractMovieId !== undefined &&
      (obj.attractMovieId = Math.round(message.attractMovieId));
    message.attractRankingId !== undefined &&
      (obj.attractRankingId = Math.round(message.attractRankingId));
    message.attractRandomSeed !== undefined &&
      (obj.attractRandomSeed = Math.round(message.attractRandomSeed));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Information>, I>>(
    object: I
  ): Information {
    const message = createBaseInformation();
    message.systemMode = object.systemMode ?? 0;
    message.syncId = object.syncId ?? 0;
    message.attractMovieId = object.attractMovieId ?? 0;
    message.attractRankingId = object.attractRankingId ?? 0;
    message.attractRandomSeed = object.attractRandomSeed ?? 0;
    return message;
  },
};

function createBaseRaceCar(): RaceCar {
  return {
    car: undefined,
    rank: 0,
    vsStarCount: 0,
    vsConsecutiveWins: 0,
    vsMedalsRankLevel: 0,
    wasClearedStoryWhithoutLosing: false,
    rgRegionMapScore: [],
  };
}

export const RaceCar = {
  encode(
    message: RaceCar,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.car !== undefined) {
      Car.encode(message.car, writer.uint32(10).fork()).ldelim();
    }
    if (message.rank !== 0) {
      writer.uint32(16).uint32(message.rank);
    }
    if (message.vsStarCount !== 0) {
      writer.uint32(24).uint32(message.vsStarCount);
    }
    if (message.vsConsecutiveWins !== 0) {
      writer.uint32(32).uint32(message.vsConsecutiveWins);
    }
    if (message.vsMedalsRankLevel !== 0) {
      writer.uint32(40).uint32(message.vsMedalsRankLevel);
    }
    if (message.wasClearedStoryWhithoutLosing === true) {
      writer.uint32(48).bool(message.wasClearedStoryWhithoutLosing);
    }
    writer.uint32(58).fork();
    for (const v of message.rgRegionMapScore) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RaceCar {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRaceCar();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.car = Car.decode(reader, reader.uint32());
          break;
        case 2:
          message.rank = reader.uint32();
          break;
        case 3:
          message.vsStarCount = reader.uint32();
          break;
        case 4:
          message.vsConsecutiveWins = reader.uint32();
          break;
        case 5:
          message.vsMedalsRankLevel = reader.uint32();
          break;
        case 6:
          message.wasClearedStoryWhithoutLosing = reader.bool();
          break;
        case 7:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.rgRegionMapScore.push(reader.uint32());
            }
          } else {
            message.rgRegionMapScore.push(reader.uint32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RaceCar {
    return {
      car: isSet(object.car) ? Car.fromJSON(object.car) : undefined,
      rank: isSet(object.rank) ? Number(object.rank) : 0,
      vsStarCount: isSet(object.vsStarCount) ? Number(object.vsStarCount) : 0,
      vsConsecutiveWins: isSet(object.vsConsecutiveWins)
        ? Number(object.vsConsecutiveWins)
        : 0,
      vsMedalsRankLevel: isSet(object.vsMedalsRankLevel)
        ? Number(object.vsMedalsRankLevel)
        : 0,
      wasClearedStoryWhithoutLosing: isSet(object.wasClearedStoryWhithoutLosing)
        ? Boolean(object.wasClearedStoryWhithoutLosing)
        : false,
      rgRegionMapScore: Array.isArray(object?.rgRegionMapScore)
        ? object.rgRegionMapScore.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: RaceCar): unknown {
    const obj: any = {};
    message.car !== undefined &&
      (obj.car = message.car ? Car.toJSON(message.car) : undefined);
    message.rank !== undefined && (obj.rank = Math.round(message.rank));
    message.vsStarCount !== undefined &&
      (obj.vsStarCount = Math.round(message.vsStarCount));
    message.vsConsecutiveWins !== undefined &&
      (obj.vsConsecutiveWins = Math.round(message.vsConsecutiveWins));
    message.vsMedalsRankLevel !== undefined &&
      (obj.vsMedalsRankLevel = Math.round(message.vsMedalsRankLevel));
    message.wasClearedStoryWhithoutLosing !== undefined &&
      (obj.wasClearedStoryWhithoutLosing =
        message.wasClearedStoryWhithoutLosing);
    if (message.rgRegionMapScore) {
      obj.rgRegionMapScore = message.rgRegionMapScore.map((e) => Math.round(e));
    } else {
      obj.rgRegionMapScore = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RaceCar>, I>>(object: I): RaceCar {
    const message = createBaseRaceCar();
    message.car =
      object.car !== undefined && object.car !== null
        ? Car.fromPartial(object.car)
        : undefined;
    message.rank = object.rank ?? 0;
    message.vsStarCount = object.vsStarCount ?? 0;
    message.vsConsecutiveWins = object.vsConsecutiveWins ?? 0;
    message.vsMedalsRankLevel = object.vsMedalsRankLevel ?? 0;
    message.wasClearedStoryWhithoutLosing =
      object.wasClearedStoryWhithoutLosing ?? false;
    message.rgRegionMapScore = object.rgRegionMapScore?.map((e) => e) || [];
    return message;
  },
};

function createBaseTournamentCar(): TournamentCar {
  return { name: "", carId: 0, entryNumber: 0 };
}

export const TournamentCar = {
  encode(
    message: TournamentCar,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.carId !== 0) {
      writer.uint32(16).sint32(message.carId);
    }
    if (message.entryNumber !== 0) {
      writer.uint32(24).sint32(message.entryNumber);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TournamentCar {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTournamentCar();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.carId = reader.sint32();
          break;
        case 3:
          message.entryNumber = reader.sint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TournamentCar {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      carId: isSet(object.carId) ? Number(object.carId) : 0,
      entryNumber: isSet(object.entryNumber) ? Number(object.entryNumber) : 0,
    };
  },

  toJSON(message: TournamentCar): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.carId !== undefined && (obj.carId = Math.round(message.carId));
    message.entryNumber !== undefined &&
      (obj.entryNumber = Math.round(message.entryNumber));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TournamentCar>, I>>(
    object: I
  ): TournamentCar {
    const message = createBaseTournamentCar();
    message.name = object.name ?? "";
    message.carId = object.carId ?? 0;
    message.entryNumber = object.entryNumber ?? 0;
    return message;
  },
};

function createBaseTournamentCarList(): TournamentCarList {
  return {
    car00: undefined,
    car01: undefined,
    car02: undefined,
    car03: undefined,
    car04: undefined,
    car05: undefined,
    car06: undefined,
    car07: undefined,
    car08: undefined,
    car09: undefined,
    car10: undefined,
    car11: undefined,
    car12: undefined,
    car13: undefined,
    car14: undefined,
    car15: undefined,
    car16: undefined,
    car17: undefined,
    car18: undefined,
    car19: undefined,
    car20: undefined,
    car21: undefined,
    car22: undefined,
    car23: undefined,
    car24: undefined,
    car25: undefined,
    car26: undefined,
    car27: undefined,
    car28: undefined,
    car29: undefined,
    car30: undefined,
    car31: undefined,
  };
}

export const TournamentCarList = {
  encode(
    message: TournamentCarList,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.car00 !== undefined) {
      TournamentCar.encode(message.car00, writer.uint32(10).fork()).ldelim();
    }
    if (message.car01 !== undefined) {
      TournamentCar.encode(message.car01, writer.uint32(18).fork()).ldelim();
    }
    if (message.car02 !== undefined) {
      TournamentCar.encode(message.car02, writer.uint32(26).fork()).ldelim();
    }
    if (message.car03 !== undefined) {
      TournamentCar.encode(message.car03, writer.uint32(34).fork()).ldelim();
    }
    if (message.car04 !== undefined) {
      TournamentCar.encode(message.car04, writer.uint32(42).fork()).ldelim();
    }
    if (message.car05 !== undefined) {
      TournamentCar.encode(message.car05, writer.uint32(50).fork()).ldelim();
    }
    if (message.car06 !== undefined) {
      TournamentCar.encode(message.car06, writer.uint32(58).fork()).ldelim();
    }
    if (message.car07 !== undefined) {
      TournamentCar.encode(message.car07, writer.uint32(66).fork()).ldelim();
    }
    if (message.car08 !== undefined) {
      TournamentCar.encode(message.car08, writer.uint32(74).fork()).ldelim();
    }
    if (message.car09 !== undefined) {
      TournamentCar.encode(message.car09, writer.uint32(82).fork()).ldelim();
    }
    if (message.car10 !== undefined) {
      TournamentCar.encode(message.car10, writer.uint32(90).fork()).ldelim();
    }
    if (message.car11 !== undefined) {
      TournamentCar.encode(message.car11, writer.uint32(98).fork()).ldelim();
    }
    if (message.car12 !== undefined) {
      TournamentCar.encode(message.car12, writer.uint32(106).fork()).ldelim();
    }
    if (message.car13 !== undefined) {
      TournamentCar.encode(message.car13, writer.uint32(114).fork()).ldelim();
    }
    if (message.car14 !== undefined) {
      TournamentCar.encode(message.car14, writer.uint32(122).fork()).ldelim();
    }
    if (message.car15 !== undefined) {
      TournamentCar.encode(message.car15, writer.uint32(130).fork()).ldelim();
    }
    if (message.car16 !== undefined) {
      TournamentCar.encode(message.car16, writer.uint32(138).fork()).ldelim();
    }
    if (message.car17 !== undefined) {
      TournamentCar.encode(message.car17, writer.uint32(146).fork()).ldelim();
    }
    if (message.car18 !== undefined) {
      TournamentCar.encode(message.car18, writer.uint32(154).fork()).ldelim();
    }
    if (message.car19 !== undefined) {
      TournamentCar.encode(message.car19, writer.uint32(162).fork()).ldelim();
    }
    if (message.car20 !== undefined) {
      TournamentCar.encode(message.car20, writer.uint32(170).fork()).ldelim();
    }
    if (message.car21 !== undefined) {
      TournamentCar.encode(message.car21, writer.uint32(178).fork()).ldelim();
    }
    if (message.car22 !== undefined) {
      TournamentCar.encode(message.car22, writer.uint32(186).fork()).ldelim();
    }
    if (message.car23 !== undefined) {
      TournamentCar.encode(message.car23, writer.uint32(194).fork()).ldelim();
    }
    if (message.car24 !== undefined) {
      TournamentCar.encode(message.car24, writer.uint32(202).fork()).ldelim();
    }
    if (message.car25 !== undefined) {
      TournamentCar.encode(message.car25, writer.uint32(210).fork()).ldelim();
    }
    if (message.car26 !== undefined) {
      TournamentCar.encode(message.car26, writer.uint32(218).fork()).ldelim();
    }
    if (message.car27 !== undefined) {
      TournamentCar.encode(message.car27, writer.uint32(226).fork()).ldelim();
    }
    if (message.car28 !== undefined) {
      TournamentCar.encode(message.car28, writer.uint32(234).fork()).ldelim();
    }
    if (message.car29 !== undefined) {
      TournamentCar.encode(message.car29, writer.uint32(242).fork()).ldelim();
    }
    if (message.car30 !== undefined) {
      TournamentCar.encode(message.car30, writer.uint32(250).fork()).ldelim();
    }
    if (message.car31 !== undefined) {
      TournamentCar.encode(message.car31, writer.uint32(258).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TournamentCarList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTournamentCarList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.car00 = TournamentCar.decode(reader, reader.uint32());
          break;
        case 2:
          message.car01 = TournamentCar.decode(reader, reader.uint32());
          break;
        case 3:
          message.car02 = TournamentCar.decode(reader, reader.uint32());
          break;
        case 4:
          message.car03 = TournamentCar.decode(reader, reader.uint32());
          break;
        case 5:
          message.car04 = TournamentCar.decode(reader, reader.uint32());
          break;
        case 6:
          message.car05 = TournamentCar.decode(reader, reader.uint32());
          break;
        case 7:
          message.car06 = TournamentCar.decode(reader, reader.uint32());
          break;
        case 8:
          message.car07 = TournamentCar.decode(reader, reader.uint32());
          break;
        case 9:
          message.car08 = TournamentCar.decode(reader, reader.uint32());
          break;
        case 10:
          message.car09 = TournamentCar.decode(reader, reader.uint32());
          break;
        case 11:
          message.car10 = TournamentCar.decode(reader, reader.uint32());
          break;
        case 12:
          message.car11 = TournamentCar.decode(reader, reader.uint32());
          break;
        case 13:
          message.car12 = TournamentCar.decode(reader, reader.uint32());
          break;
        case 14:
          message.car13 = TournamentCar.decode(reader, reader.uint32());
          break;
        case 15:
          message.car14 = TournamentCar.decode(reader, reader.uint32());
          break;
        case 16:
          message.car15 = TournamentCar.decode(reader, reader.uint32());
          break;
        case 17:
          message.car16 = TournamentCar.decode(reader, reader.uint32());
          break;
        case 18:
          message.car17 = TournamentCar.decode(reader, reader.uint32());
          break;
        case 19:
          message.car18 = TournamentCar.decode(reader, reader.uint32());
          break;
        case 20:
          message.car19 = TournamentCar.decode(reader, reader.uint32());
          break;
        case 21:
          message.car20 = TournamentCar.decode(reader, reader.uint32());
          break;
        case 22:
          message.car21 = TournamentCar.decode(reader, reader.uint32());
          break;
        case 23:
          message.car22 = TournamentCar.decode(reader, reader.uint32());
          break;
        case 24:
          message.car23 = TournamentCar.decode(reader, reader.uint32());
          break;
        case 25:
          message.car24 = TournamentCar.decode(reader, reader.uint32());
          break;
        case 26:
          message.car25 = TournamentCar.decode(reader, reader.uint32());
          break;
        case 27:
          message.car26 = TournamentCar.decode(reader, reader.uint32());
          break;
        case 28:
          message.car27 = TournamentCar.decode(reader, reader.uint32());
          break;
        case 29:
          message.car28 = TournamentCar.decode(reader, reader.uint32());
          break;
        case 30:
          message.car29 = TournamentCar.decode(reader, reader.uint32());
          break;
        case 31:
          message.car30 = TournamentCar.decode(reader, reader.uint32());
          break;
        case 32:
          message.car31 = TournamentCar.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TournamentCarList {
    return {
      car00: isSet(object.car00)
        ? TournamentCar.fromJSON(object.car00)
        : undefined,
      car01: isSet(object.car01)
        ? TournamentCar.fromJSON(object.car01)
        : undefined,
      car02: isSet(object.car02)
        ? TournamentCar.fromJSON(object.car02)
        : undefined,
      car03: isSet(object.car03)
        ? TournamentCar.fromJSON(object.car03)
        : undefined,
      car04: isSet(object.car04)
        ? TournamentCar.fromJSON(object.car04)
        : undefined,
      car05: isSet(object.car05)
        ? TournamentCar.fromJSON(object.car05)
        : undefined,
      car06: isSet(object.car06)
        ? TournamentCar.fromJSON(object.car06)
        : undefined,
      car07: isSet(object.car07)
        ? TournamentCar.fromJSON(object.car07)
        : undefined,
      car08: isSet(object.car08)
        ? TournamentCar.fromJSON(object.car08)
        : undefined,
      car09: isSet(object.car09)
        ? TournamentCar.fromJSON(object.car09)
        : undefined,
      car10: isSet(object.car10)
        ? TournamentCar.fromJSON(object.car10)
        : undefined,
      car11: isSet(object.car11)
        ? TournamentCar.fromJSON(object.car11)
        : undefined,
      car12: isSet(object.car12)
        ? TournamentCar.fromJSON(object.car12)
        : undefined,
      car13: isSet(object.car13)
        ? TournamentCar.fromJSON(object.car13)
        : undefined,
      car14: isSet(object.car14)
        ? TournamentCar.fromJSON(object.car14)
        : undefined,
      car15: isSet(object.car15)
        ? TournamentCar.fromJSON(object.car15)
        : undefined,
      car16: isSet(object.car16)
        ? TournamentCar.fromJSON(object.car16)
        : undefined,
      car17: isSet(object.car17)
        ? TournamentCar.fromJSON(object.car17)
        : undefined,
      car18: isSet(object.car18)
        ? TournamentCar.fromJSON(object.car18)
        : undefined,
      car19: isSet(object.car19)
        ? TournamentCar.fromJSON(object.car19)
        : undefined,
      car20: isSet(object.car20)
        ? TournamentCar.fromJSON(object.car20)
        : undefined,
      car21: isSet(object.car21)
        ? TournamentCar.fromJSON(object.car21)
        : undefined,
      car22: isSet(object.car22)
        ? TournamentCar.fromJSON(object.car22)
        : undefined,
      car23: isSet(object.car23)
        ? TournamentCar.fromJSON(object.car23)
        : undefined,
      car24: isSet(object.car24)
        ? TournamentCar.fromJSON(object.car24)
        : undefined,
      car25: isSet(object.car25)
        ? TournamentCar.fromJSON(object.car25)
        : undefined,
      car26: isSet(object.car26)
        ? TournamentCar.fromJSON(object.car26)
        : undefined,
      car27: isSet(object.car27)
        ? TournamentCar.fromJSON(object.car27)
        : undefined,
      car28: isSet(object.car28)
        ? TournamentCar.fromJSON(object.car28)
        : undefined,
      car29: isSet(object.car29)
        ? TournamentCar.fromJSON(object.car29)
        : undefined,
      car30: isSet(object.car30)
        ? TournamentCar.fromJSON(object.car30)
        : undefined,
      car31: isSet(object.car31)
        ? TournamentCar.fromJSON(object.car31)
        : undefined,
    };
  },

  toJSON(message: TournamentCarList): unknown {
    const obj: any = {};
    message.car00 !== undefined &&
      (obj.car00 = message.car00
        ? TournamentCar.toJSON(message.car00)
        : undefined);
    message.car01 !== undefined &&
      (obj.car01 = message.car01
        ? TournamentCar.toJSON(message.car01)
        : undefined);
    message.car02 !== undefined &&
      (obj.car02 = message.car02
        ? TournamentCar.toJSON(message.car02)
        : undefined);
    message.car03 !== undefined &&
      (obj.car03 = message.car03
        ? TournamentCar.toJSON(message.car03)
        : undefined);
    message.car04 !== undefined &&
      (obj.car04 = message.car04
        ? TournamentCar.toJSON(message.car04)
        : undefined);
    message.car05 !== undefined &&
      (obj.car05 = message.car05
        ? TournamentCar.toJSON(message.car05)
        : undefined);
    message.car06 !== undefined &&
      (obj.car06 = message.car06
        ? TournamentCar.toJSON(message.car06)
        : undefined);
    message.car07 !== undefined &&
      (obj.car07 = message.car07
        ? TournamentCar.toJSON(message.car07)
        : undefined);
    message.car08 !== undefined &&
      (obj.car08 = message.car08
        ? TournamentCar.toJSON(message.car08)
        : undefined);
    message.car09 !== undefined &&
      (obj.car09 = message.car09
        ? TournamentCar.toJSON(message.car09)
        : undefined);
    message.car10 !== undefined &&
      (obj.car10 = message.car10
        ? TournamentCar.toJSON(message.car10)
        : undefined);
    message.car11 !== undefined &&
      (obj.car11 = message.car11
        ? TournamentCar.toJSON(message.car11)
        : undefined);
    message.car12 !== undefined &&
      (obj.car12 = message.car12
        ? TournamentCar.toJSON(message.car12)
        : undefined);
    message.car13 !== undefined &&
      (obj.car13 = message.car13
        ? TournamentCar.toJSON(message.car13)
        : undefined);
    message.car14 !== undefined &&
      (obj.car14 = message.car14
        ? TournamentCar.toJSON(message.car14)
        : undefined);
    message.car15 !== undefined &&
      (obj.car15 = message.car15
        ? TournamentCar.toJSON(message.car15)
        : undefined);
    message.car16 !== undefined &&
      (obj.car16 = message.car16
        ? TournamentCar.toJSON(message.car16)
        : undefined);
    message.car17 !== undefined &&
      (obj.car17 = message.car17
        ? TournamentCar.toJSON(message.car17)
        : undefined);
    message.car18 !== undefined &&
      (obj.car18 = message.car18
        ? TournamentCar.toJSON(message.car18)
        : undefined);
    message.car19 !== undefined &&
      (obj.car19 = message.car19
        ? TournamentCar.toJSON(message.car19)
        : undefined);
    message.car20 !== undefined &&
      (obj.car20 = message.car20
        ? TournamentCar.toJSON(message.car20)
        : undefined);
    message.car21 !== undefined &&
      (obj.car21 = message.car21
        ? TournamentCar.toJSON(message.car21)
        : undefined);
    message.car22 !== undefined &&
      (obj.car22 = message.car22
        ? TournamentCar.toJSON(message.car22)
        : undefined);
    message.car23 !== undefined &&
      (obj.car23 = message.car23
        ? TournamentCar.toJSON(message.car23)
        : undefined);
    message.car24 !== undefined &&
      (obj.car24 = message.car24
        ? TournamentCar.toJSON(message.car24)
        : undefined);
    message.car25 !== undefined &&
      (obj.car25 = message.car25
        ? TournamentCar.toJSON(message.car25)
        : undefined);
    message.car26 !== undefined &&
      (obj.car26 = message.car26
        ? TournamentCar.toJSON(message.car26)
        : undefined);
    message.car27 !== undefined &&
      (obj.car27 = message.car27
        ? TournamentCar.toJSON(message.car27)
        : undefined);
    message.car28 !== undefined &&
      (obj.car28 = message.car28
        ? TournamentCar.toJSON(message.car28)
        : undefined);
    message.car29 !== undefined &&
      (obj.car29 = message.car29
        ? TournamentCar.toJSON(message.car29)
        : undefined);
    message.car30 !== undefined &&
      (obj.car30 = message.car30
        ? TournamentCar.toJSON(message.car30)
        : undefined);
    message.car31 !== undefined &&
      (obj.car31 = message.car31
        ? TournamentCar.toJSON(message.car31)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TournamentCarList>, I>>(
    object: I
  ): TournamentCarList {
    const message = createBaseTournamentCarList();
    message.car00 =
      object.car00 !== undefined && object.car00 !== null
        ? TournamentCar.fromPartial(object.car00)
        : undefined;
    message.car01 =
      object.car01 !== undefined && object.car01 !== null
        ? TournamentCar.fromPartial(object.car01)
        : undefined;
    message.car02 =
      object.car02 !== undefined && object.car02 !== null
        ? TournamentCar.fromPartial(object.car02)
        : undefined;
    message.car03 =
      object.car03 !== undefined && object.car03 !== null
        ? TournamentCar.fromPartial(object.car03)
        : undefined;
    message.car04 =
      object.car04 !== undefined && object.car04 !== null
        ? TournamentCar.fromPartial(object.car04)
        : undefined;
    message.car05 =
      object.car05 !== undefined && object.car05 !== null
        ? TournamentCar.fromPartial(object.car05)
        : undefined;
    message.car06 =
      object.car06 !== undefined && object.car06 !== null
        ? TournamentCar.fromPartial(object.car06)
        : undefined;
    message.car07 =
      object.car07 !== undefined && object.car07 !== null
        ? TournamentCar.fromPartial(object.car07)
        : undefined;
    message.car08 =
      object.car08 !== undefined && object.car08 !== null
        ? TournamentCar.fromPartial(object.car08)
        : undefined;
    message.car09 =
      object.car09 !== undefined && object.car09 !== null
        ? TournamentCar.fromPartial(object.car09)
        : undefined;
    message.car10 =
      object.car10 !== undefined && object.car10 !== null
        ? TournamentCar.fromPartial(object.car10)
        : undefined;
    message.car11 =
      object.car11 !== undefined && object.car11 !== null
        ? TournamentCar.fromPartial(object.car11)
        : undefined;
    message.car12 =
      object.car12 !== undefined && object.car12 !== null
        ? TournamentCar.fromPartial(object.car12)
        : undefined;
    message.car13 =
      object.car13 !== undefined && object.car13 !== null
        ? TournamentCar.fromPartial(object.car13)
        : undefined;
    message.car14 =
      object.car14 !== undefined && object.car14 !== null
        ? TournamentCar.fromPartial(object.car14)
        : undefined;
    message.car15 =
      object.car15 !== undefined && object.car15 !== null
        ? TournamentCar.fromPartial(object.car15)
        : undefined;
    message.car16 =
      object.car16 !== undefined && object.car16 !== null
        ? TournamentCar.fromPartial(object.car16)
        : undefined;
    message.car17 =
      object.car17 !== undefined && object.car17 !== null
        ? TournamentCar.fromPartial(object.car17)
        : undefined;
    message.car18 =
      object.car18 !== undefined && object.car18 !== null
        ? TournamentCar.fromPartial(object.car18)
        : undefined;
    message.car19 =
      object.car19 !== undefined && object.car19 !== null
        ? TournamentCar.fromPartial(object.car19)
        : undefined;
    message.car20 =
      object.car20 !== undefined && object.car20 !== null
        ? TournamentCar.fromPartial(object.car20)
        : undefined;
    message.car21 =
      object.car21 !== undefined && object.car21 !== null
        ? TournamentCar.fromPartial(object.car21)
        : undefined;
    message.car22 =
      object.car22 !== undefined && object.car22 !== null
        ? TournamentCar.fromPartial(object.car22)
        : undefined;
    message.car23 =
      object.car23 !== undefined && object.car23 !== null
        ? TournamentCar.fromPartial(object.car23)
        : undefined;
    message.car24 =
      object.car24 !== undefined && object.car24 !== null
        ? TournamentCar.fromPartial(object.car24)
        : undefined;
    message.car25 =
      object.car25 !== undefined && object.car25 !== null
        ? TournamentCar.fromPartial(object.car25)
        : undefined;
    message.car26 =
      object.car26 !== undefined && object.car26 !== null
        ? TournamentCar.fromPartial(object.car26)
        : undefined;
    message.car27 =
      object.car27 !== undefined && object.car27 !== null
        ? TournamentCar.fromPartial(object.car27)
        : undefined;
    message.car28 =
      object.car28 !== undefined && object.car28 !== null
        ? TournamentCar.fromPartial(object.car28)
        : undefined;
    message.car29 =
      object.car29 !== undefined && object.car29 !== null
        ? TournamentCar.fromPartial(object.car29)
        : undefined;
    message.car30 =
      object.car30 !== undefined && object.car30 !== null
        ? TournamentCar.fromPartial(object.car30)
        : undefined;
    message.car31 =
      object.car31 !== undefined && object.car31 !== null
        ? TournamentCar.fromPartial(object.car31)
        : undefined;
    return message;
  },
};

function createBaseTournamentRaceData(): TournamentRaceData {
  return {
    raceNumber: 0,
    roundNumber: 0,
    gameNumber: 0,
    player00: 0,
    player01: 0,
    player02: 0,
    player03: 0,
    result00: 0,
    result01: 0,
    result02: 0,
    result03: 0,
  };
}

export const TournamentRaceData = {
  encode(
    message: TournamentRaceData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.raceNumber !== 0) {
      writer.uint32(8).uint32(message.raceNumber);
    }
    if (message.roundNumber !== 0) {
      writer.uint32(16).uint32(message.roundNumber);
    }
    if (message.gameNumber !== 0) {
      writer.uint32(24).uint32(message.gameNumber);
    }
    if (message.player00 !== 0) {
      writer.uint32(32).sint32(message.player00);
    }
    if (message.player01 !== 0) {
      writer.uint32(40).sint32(message.player01);
    }
    if (message.player02 !== 0) {
      writer.uint32(48).sint32(message.player02);
    }
    if (message.player03 !== 0) {
      writer.uint32(56).sint32(message.player03);
    }
    if (message.result00 !== 0) {
      writer.uint32(64).sint32(message.result00);
    }
    if (message.result01 !== 0) {
      writer.uint32(72).sint32(message.result01);
    }
    if (message.result02 !== 0) {
      writer.uint32(80).sint32(message.result02);
    }
    if (message.result03 !== 0) {
      writer.uint32(88).sint32(message.result03);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TournamentRaceData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTournamentRaceData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.raceNumber = reader.uint32();
          break;
        case 2:
          message.roundNumber = reader.uint32();
          break;
        case 3:
          message.gameNumber = reader.uint32();
          break;
        case 4:
          message.player00 = reader.sint32();
          break;
        case 5:
          message.player01 = reader.sint32();
          break;
        case 6:
          message.player02 = reader.sint32();
          break;
        case 7:
          message.player03 = reader.sint32();
          break;
        case 8:
          message.result00 = reader.sint32();
          break;
        case 9:
          message.result01 = reader.sint32();
          break;
        case 10:
          message.result02 = reader.sint32();
          break;
        case 11:
          message.result03 = reader.sint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TournamentRaceData {
    return {
      raceNumber: isSet(object.raceNumber) ? Number(object.raceNumber) : 0,
      roundNumber: isSet(object.roundNumber) ? Number(object.roundNumber) : 0,
      gameNumber: isSet(object.gameNumber) ? Number(object.gameNumber) : 0,
      player00: isSet(object.player00) ? Number(object.player00) : 0,
      player01: isSet(object.player01) ? Number(object.player01) : 0,
      player02: isSet(object.player02) ? Number(object.player02) : 0,
      player03: isSet(object.player03) ? Number(object.player03) : 0,
      result00: isSet(object.result00) ? Number(object.result00) : 0,
      result01: isSet(object.result01) ? Number(object.result01) : 0,
      result02: isSet(object.result02) ? Number(object.result02) : 0,
      result03: isSet(object.result03) ? Number(object.result03) : 0,
    };
  },

  toJSON(message: TournamentRaceData): unknown {
    const obj: any = {};
    message.raceNumber !== undefined &&
      (obj.raceNumber = Math.round(message.raceNumber));
    message.roundNumber !== undefined &&
      (obj.roundNumber = Math.round(message.roundNumber));
    message.gameNumber !== undefined &&
      (obj.gameNumber = Math.round(message.gameNumber));
    message.player00 !== undefined &&
      (obj.player00 = Math.round(message.player00));
    message.player01 !== undefined &&
      (obj.player01 = Math.round(message.player01));
    message.player02 !== undefined &&
      (obj.player02 = Math.round(message.player02));
    message.player03 !== undefined &&
      (obj.player03 = Math.round(message.player03));
    message.result00 !== undefined &&
      (obj.result00 = Math.round(message.result00));
    message.result01 !== undefined &&
      (obj.result01 = Math.round(message.result01));
    message.result02 !== undefined &&
      (obj.result02 = Math.round(message.result02));
    message.result03 !== undefined &&
      (obj.result03 = Math.round(message.result03));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TournamentRaceData>, I>>(
    object: I
  ): TournamentRaceData {
    const message = createBaseTournamentRaceData();
    message.raceNumber = object.raceNumber ?? 0;
    message.roundNumber = object.roundNumber ?? 0;
    message.gameNumber = object.gameNumber ?? 0;
    message.player00 = object.player00 ?? 0;
    message.player01 = object.player01 ?? 0;
    message.player02 = object.player02 ?? 0;
    message.player03 = object.player03 ?? 0;
    message.result00 = object.result00 ?? 0;
    message.result01 = object.result01 ?? 0;
    message.result02 = object.result02 ?? 0;
    message.result03 = object.result03 ?? 0;
    return message;
  },
};

function createBaseTournamentRaceDataList(): TournamentRaceDataList {
  return {
    raceData00: undefined,
    raceData01: undefined,
    raceData02: undefined,
    raceData03: undefined,
    raceData04: undefined,
    raceData05: undefined,
    raceData06: undefined,
    raceData07: undefined,
    raceData08: undefined,
    raceData09: undefined,
    raceData10: undefined,
    raceData11: undefined,
    raceData12: undefined,
    raceData13: undefined,
    raceData14: undefined,
    raceData15: undefined,
    raceData16: undefined,
    raceData17: undefined,
    raceData18: undefined,
    raceData19: undefined,
    raceData20: undefined,
    raceData21: undefined,
    raceData22: undefined,
    raceData23: undefined,
    raceData24: undefined,
    raceData25: undefined,
    raceData26: undefined,
    raceData27: undefined,
    raceData28: undefined,
    raceData29: undefined,
    raceData30: undefined,
    raceData31: undefined,
    raceData32: undefined,
    raceData33: undefined,
    raceData34: undefined,
  };
}

export const TournamentRaceDataList = {
  encode(
    message: TournamentRaceDataList,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.raceData00 !== undefined) {
      TournamentRaceData.encode(
        message.raceData00,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.raceData01 !== undefined) {
      TournamentRaceData.encode(
        message.raceData01,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.raceData02 !== undefined) {
      TournamentRaceData.encode(
        message.raceData02,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.raceData03 !== undefined) {
      TournamentRaceData.encode(
        message.raceData03,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.raceData04 !== undefined) {
      TournamentRaceData.encode(
        message.raceData04,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.raceData05 !== undefined) {
      TournamentRaceData.encode(
        message.raceData05,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.raceData06 !== undefined) {
      TournamentRaceData.encode(
        message.raceData06,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.raceData07 !== undefined) {
      TournamentRaceData.encode(
        message.raceData07,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.raceData08 !== undefined) {
      TournamentRaceData.encode(
        message.raceData08,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.raceData09 !== undefined) {
      TournamentRaceData.encode(
        message.raceData09,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.raceData10 !== undefined) {
      TournamentRaceData.encode(
        message.raceData10,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.raceData11 !== undefined) {
      TournamentRaceData.encode(
        message.raceData11,
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.raceData12 !== undefined) {
      TournamentRaceData.encode(
        message.raceData12,
        writer.uint32(106).fork()
      ).ldelim();
    }
    if (message.raceData13 !== undefined) {
      TournamentRaceData.encode(
        message.raceData13,
        writer.uint32(114).fork()
      ).ldelim();
    }
    if (message.raceData14 !== undefined) {
      TournamentRaceData.encode(
        message.raceData14,
        writer.uint32(122).fork()
      ).ldelim();
    }
    if (message.raceData15 !== undefined) {
      TournamentRaceData.encode(
        message.raceData15,
        writer.uint32(130).fork()
      ).ldelim();
    }
    if (message.raceData16 !== undefined) {
      TournamentRaceData.encode(
        message.raceData16,
        writer.uint32(138).fork()
      ).ldelim();
    }
    if (message.raceData17 !== undefined) {
      TournamentRaceData.encode(
        message.raceData17,
        writer.uint32(146).fork()
      ).ldelim();
    }
    if (message.raceData18 !== undefined) {
      TournamentRaceData.encode(
        message.raceData18,
        writer.uint32(154).fork()
      ).ldelim();
    }
    if (message.raceData19 !== undefined) {
      TournamentRaceData.encode(
        message.raceData19,
        writer.uint32(162).fork()
      ).ldelim();
    }
    if (message.raceData20 !== undefined) {
      TournamentRaceData.encode(
        message.raceData20,
        writer.uint32(170).fork()
      ).ldelim();
    }
    if (message.raceData21 !== undefined) {
      TournamentRaceData.encode(
        message.raceData21,
        writer.uint32(178).fork()
      ).ldelim();
    }
    if (message.raceData22 !== undefined) {
      TournamentRaceData.encode(
        message.raceData22,
        writer.uint32(186).fork()
      ).ldelim();
    }
    if (message.raceData23 !== undefined) {
      TournamentRaceData.encode(
        message.raceData23,
        writer.uint32(194).fork()
      ).ldelim();
    }
    if (message.raceData24 !== undefined) {
      TournamentRaceData.encode(
        message.raceData24,
        writer.uint32(202).fork()
      ).ldelim();
    }
    if (message.raceData25 !== undefined) {
      TournamentRaceData.encode(
        message.raceData25,
        writer.uint32(210).fork()
      ).ldelim();
    }
    if (message.raceData26 !== undefined) {
      TournamentRaceData.encode(
        message.raceData26,
        writer.uint32(218).fork()
      ).ldelim();
    }
    if (message.raceData27 !== undefined) {
      TournamentRaceData.encode(
        message.raceData27,
        writer.uint32(226).fork()
      ).ldelim();
    }
    if (message.raceData28 !== undefined) {
      TournamentRaceData.encode(
        message.raceData28,
        writer.uint32(234).fork()
      ).ldelim();
    }
    if (message.raceData29 !== undefined) {
      TournamentRaceData.encode(
        message.raceData29,
        writer.uint32(242).fork()
      ).ldelim();
    }
    if (message.raceData30 !== undefined) {
      TournamentRaceData.encode(
        message.raceData30,
        writer.uint32(250).fork()
      ).ldelim();
    }
    if (message.raceData31 !== undefined) {
      TournamentRaceData.encode(
        message.raceData31,
        writer.uint32(258).fork()
      ).ldelim();
    }
    if (message.raceData32 !== undefined) {
      TournamentRaceData.encode(
        message.raceData32,
        writer.uint32(266).fork()
      ).ldelim();
    }
    if (message.raceData33 !== undefined) {
      TournamentRaceData.encode(
        message.raceData33,
        writer.uint32(274).fork()
      ).ldelim();
    }
    if (message.raceData34 !== undefined) {
      TournamentRaceData.encode(
        message.raceData34,
        writer.uint32(282).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TournamentRaceDataList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTournamentRaceDataList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.raceData00 = TournamentRaceData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 2:
          message.raceData01 = TournamentRaceData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.raceData02 = TournamentRaceData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.raceData03 = TournamentRaceData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.raceData04 = TournamentRaceData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.raceData05 = TournamentRaceData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 7:
          message.raceData06 = TournamentRaceData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 8:
          message.raceData07 = TournamentRaceData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 9:
          message.raceData08 = TournamentRaceData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 10:
          message.raceData09 = TournamentRaceData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 11:
          message.raceData10 = TournamentRaceData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 12:
          message.raceData11 = TournamentRaceData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 13:
          message.raceData12 = TournamentRaceData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 14:
          message.raceData13 = TournamentRaceData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 15:
          message.raceData14 = TournamentRaceData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 16:
          message.raceData15 = TournamentRaceData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 17:
          message.raceData16 = TournamentRaceData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 18:
          message.raceData17 = TournamentRaceData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 19:
          message.raceData18 = TournamentRaceData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 20:
          message.raceData19 = TournamentRaceData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 21:
          message.raceData20 = TournamentRaceData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 22:
          message.raceData21 = TournamentRaceData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 23:
          message.raceData22 = TournamentRaceData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 24:
          message.raceData23 = TournamentRaceData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 25:
          message.raceData24 = TournamentRaceData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 26:
          message.raceData25 = TournamentRaceData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 27:
          message.raceData26 = TournamentRaceData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 28:
          message.raceData27 = TournamentRaceData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 29:
          message.raceData28 = TournamentRaceData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 30:
          message.raceData29 = TournamentRaceData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 31:
          message.raceData30 = TournamentRaceData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 32:
          message.raceData31 = TournamentRaceData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 33:
          message.raceData32 = TournamentRaceData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 34:
          message.raceData33 = TournamentRaceData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 35:
          message.raceData34 = TournamentRaceData.decode(
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

  fromJSON(object: any): TournamentRaceDataList {
    return {
      raceData00: isSet(object.raceData00)
        ? TournamentRaceData.fromJSON(object.raceData00)
        : undefined,
      raceData01: isSet(object.raceData01)
        ? TournamentRaceData.fromJSON(object.raceData01)
        : undefined,
      raceData02: isSet(object.raceData02)
        ? TournamentRaceData.fromJSON(object.raceData02)
        : undefined,
      raceData03: isSet(object.raceData03)
        ? TournamentRaceData.fromJSON(object.raceData03)
        : undefined,
      raceData04: isSet(object.raceData04)
        ? TournamentRaceData.fromJSON(object.raceData04)
        : undefined,
      raceData05: isSet(object.raceData05)
        ? TournamentRaceData.fromJSON(object.raceData05)
        : undefined,
      raceData06: isSet(object.raceData06)
        ? TournamentRaceData.fromJSON(object.raceData06)
        : undefined,
      raceData07: isSet(object.raceData07)
        ? TournamentRaceData.fromJSON(object.raceData07)
        : undefined,
      raceData08: isSet(object.raceData08)
        ? TournamentRaceData.fromJSON(object.raceData08)
        : undefined,
      raceData09: isSet(object.raceData09)
        ? TournamentRaceData.fromJSON(object.raceData09)
        : undefined,
      raceData10: isSet(object.raceData10)
        ? TournamentRaceData.fromJSON(object.raceData10)
        : undefined,
      raceData11: isSet(object.raceData11)
        ? TournamentRaceData.fromJSON(object.raceData11)
        : undefined,
      raceData12: isSet(object.raceData12)
        ? TournamentRaceData.fromJSON(object.raceData12)
        : undefined,
      raceData13: isSet(object.raceData13)
        ? TournamentRaceData.fromJSON(object.raceData13)
        : undefined,
      raceData14: isSet(object.raceData14)
        ? TournamentRaceData.fromJSON(object.raceData14)
        : undefined,
      raceData15: isSet(object.raceData15)
        ? TournamentRaceData.fromJSON(object.raceData15)
        : undefined,
      raceData16: isSet(object.raceData16)
        ? TournamentRaceData.fromJSON(object.raceData16)
        : undefined,
      raceData17: isSet(object.raceData17)
        ? TournamentRaceData.fromJSON(object.raceData17)
        : undefined,
      raceData18: isSet(object.raceData18)
        ? TournamentRaceData.fromJSON(object.raceData18)
        : undefined,
      raceData19: isSet(object.raceData19)
        ? TournamentRaceData.fromJSON(object.raceData19)
        : undefined,
      raceData20: isSet(object.raceData20)
        ? TournamentRaceData.fromJSON(object.raceData20)
        : undefined,
      raceData21: isSet(object.raceData21)
        ? TournamentRaceData.fromJSON(object.raceData21)
        : undefined,
      raceData22: isSet(object.raceData22)
        ? TournamentRaceData.fromJSON(object.raceData22)
        : undefined,
      raceData23: isSet(object.raceData23)
        ? TournamentRaceData.fromJSON(object.raceData23)
        : undefined,
      raceData24: isSet(object.raceData24)
        ? TournamentRaceData.fromJSON(object.raceData24)
        : undefined,
      raceData25: isSet(object.raceData25)
        ? TournamentRaceData.fromJSON(object.raceData25)
        : undefined,
      raceData26: isSet(object.raceData26)
        ? TournamentRaceData.fromJSON(object.raceData26)
        : undefined,
      raceData27: isSet(object.raceData27)
        ? TournamentRaceData.fromJSON(object.raceData27)
        : undefined,
      raceData28: isSet(object.raceData28)
        ? TournamentRaceData.fromJSON(object.raceData28)
        : undefined,
      raceData29: isSet(object.raceData29)
        ? TournamentRaceData.fromJSON(object.raceData29)
        : undefined,
      raceData30: isSet(object.raceData30)
        ? TournamentRaceData.fromJSON(object.raceData30)
        : undefined,
      raceData31: isSet(object.raceData31)
        ? TournamentRaceData.fromJSON(object.raceData31)
        : undefined,
      raceData32: isSet(object.raceData32)
        ? TournamentRaceData.fromJSON(object.raceData32)
        : undefined,
      raceData33: isSet(object.raceData33)
        ? TournamentRaceData.fromJSON(object.raceData33)
        : undefined,
      raceData34: isSet(object.raceData34)
        ? TournamentRaceData.fromJSON(object.raceData34)
        : undefined,
    };
  },

  toJSON(message: TournamentRaceDataList): unknown {
    const obj: any = {};
    message.raceData00 !== undefined &&
      (obj.raceData00 = message.raceData00
        ? TournamentRaceData.toJSON(message.raceData00)
        : undefined);
    message.raceData01 !== undefined &&
      (obj.raceData01 = message.raceData01
        ? TournamentRaceData.toJSON(message.raceData01)
        : undefined);
    message.raceData02 !== undefined &&
      (obj.raceData02 = message.raceData02
        ? TournamentRaceData.toJSON(message.raceData02)
        : undefined);
    message.raceData03 !== undefined &&
      (obj.raceData03 = message.raceData03
        ? TournamentRaceData.toJSON(message.raceData03)
        : undefined);
    message.raceData04 !== undefined &&
      (obj.raceData04 = message.raceData04
        ? TournamentRaceData.toJSON(message.raceData04)
        : undefined);
    message.raceData05 !== undefined &&
      (obj.raceData05 = message.raceData05
        ? TournamentRaceData.toJSON(message.raceData05)
        : undefined);
    message.raceData06 !== undefined &&
      (obj.raceData06 = message.raceData06
        ? TournamentRaceData.toJSON(message.raceData06)
        : undefined);
    message.raceData07 !== undefined &&
      (obj.raceData07 = message.raceData07
        ? TournamentRaceData.toJSON(message.raceData07)
        : undefined);
    message.raceData08 !== undefined &&
      (obj.raceData08 = message.raceData08
        ? TournamentRaceData.toJSON(message.raceData08)
        : undefined);
    message.raceData09 !== undefined &&
      (obj.raceData09 = message.raceData09
        ? TournamentRaceData.toJSON(message.raceData09)
        : undefined);
    message.raceData10 !== undefined &&
      (obj.raceData10 = message.raceData10
        ? TournamentRaceData.toJSON(message.raceData10)
        : undefined);
    message.raceData11 !== undefined &&
      (obj.raceData11 = message.raceData11
        ? TournamentRaceData.toJSON(message.raceData11)
        : undefined);
    message.raceData12 !== undefined &&
      (obj.raceData12 = message.raceData12
        ? TournamentRaceData.toJSON(message.raceData12)
        : undefined);
    message.raceData13 !== undefined &&
      (obj.raceData13 = message.raceData13
        ? TournamentRaceData.toJSON(message.raceData13)
        : undefined);
    message.raceData14 !== undefined &&
      (obj.raceData14 = message.raceData14
        ? TournamentRaceData.toJSON(message.raceData14)
        : undefined);
    message.raceData15 !== undefined &&
      (obj.raceData15 = message.raceData15
        ? TournamentRaceData.toJSON(message.raceData15)
        : undefined);
    message.raceData16 !== undefined &&
      (obj.raceData16 = message.raceData16
        ? TournamentRaceData.toJSON(message.raceData16)
        : undefined);
    message.raceData17 !== undefined &&
      (obj.raceData17 = message.raceData17
        ? TournamentRaceData.toJSON(message.raceData17)
        : undefined);
    message.raceData18 !== undefined &&
      (obj.raceData18 = message.raceData18
        ? TournamentRaceData.toJSON(message.raceData18)
        : undefined);
    message.raceData19 !== undefined &&
      (obj.raceData19 = message.raceData19
        ? TournamentRaceData.toJSON(message.raceData19)
        : undefined);
    message.raceData20 !== undefined &&
      (obj.raceData20 = message.raceData20
        ? TournamentRaceData.toJSON(message.raceData20)
        : undefined);
    message.raceData21 !== undefined &&
      (obj.raceData21 = message.raceData21
        ? TournamentRaceData.toJSON(message.raceData21)
        : undefined);
    message.raceData22 !== undefined &&
      (obj.raceData22 = message.raceData22
        ? TournamentRaceData.toJSON(message.raceData22)
        : undefined);
    message.raceData23 !== undefined &&
      (obj.raceData23 = message.raceData23
        ? TournamentRaceData.toJSON(message.raceData23)
        : undefined);
    message.raceData24 !== undefined &&
      (obj.raceData24 = message.raceData24
        ? TournamentRaceData.toJSON(message.raceData24)
        : undefined);
    message.raceData25 !== undefined &&
      (obj.raceData25 = message.raceData25
        ? TournamentRaceData.toJSON(message.raceData25)
        : undefined);
    message.raceData26 !== undefined &&
      (obj.raceData26 = message.raceData26
        ? TournamentRaceData.toJSON(message.raceData26)
        : undefined);
    message.raceData27 !== undefined &&
      (obj.raceData27 = message.raceData27
        ? TournamentRaceData.toJSON(message.raceData27)
        : undefined);
    message.raceData28 !== undefined &&
      (obj.raceData28 = message.raceData28
        ? TournamentRaceData.toJSON(message.raceData28)
        : undefined);
    message.raceData29 !== undefined &&
      (obj.raceData29 = message.raceData29
        ? TournamentRaceData.toJSON(message.raceData29)
        : undefined);
    message.raceData30 !== undefined &&
      (obj.raceData30 = message.raceData30
        ? TournamentRaceData.toJSON(message.raceData30)
        : undefined);
    message.raceData31 !== undefined &&
      (obj.raceData31 = message.raceData31
        ? TournamentRaceData.toJSON(message.raceData31)
        : undefined);
    message.raceData32 !== undefined &&
      (obj.raceData32 = message.raceData32
        ? TournamentRaceData.toJSON(message.raceData32)
        : undefined);
    message.raceData33 !== undefined &&
      (obj.raceData33 = message.raceData33
        ? TournamentRaceData.toJSON(message.raceData33)
        : undefined);
    message.raceData34 !== undefined &&
      (obj.raceData34 = message.raceData34
        ? TournamentRaceData.toJSON(message.raceData34)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TournamentRaceDataList>, I>>(
    object: I
  ): TournamentRaceDataList {
    const message = createBaseTournamentRaceDataList();
    message.raceData00 =
      object.raceData00 !== undefined && object.raceData00 !== null
        ? TournamentRaceData.fromPartial(object.raceData00)
        : undefined;
    message.raceData01 =
      object.raceData01 !== undefined && object.raceData01 !== null
        ? TournamentRaceData.fromPartial(object.raceData01)
        : undefined;
    message.raceData02 =
      object.raceData02 !== undefined && object.raceData02 !== null
        ? TournamentRaceData.fromPartial(object.raceData02)
        : undefined;
    message.raceData03 =
      object.raceData03 !== undefined && object.raceData03 !== null
        ? TournamentRaceData.fromPartial(object.raceData03)
        : undefined;
    message.raceData04 =
      object.raceData04 !== undefined && object.raceData04 !== null
        ? TournamentRaceData.fromPartial(object.raceData04)
        : undefined;
    message.raceData05 =
      object.raceData05 !== undefined && object.raceData05 !== null
        ? TournamentRaceData.fromPartial(object.raceData05)
        : undefined;
    message.raceData06 =
      object.raceData06 !== undefined && object.raceData06 !== null
        ? TournamentRaceData.fromPartial(object.raceData06)
        : undefined;
    message.raceData07 =
      object.raceData07 !== undefined && object.raceData07 !== null
        ? TournamentRaceData.fromPartial(object.raceData07)
        : undefined;
    message.raceData08 =
      object.raceData08 !== undefined && object.raceData08 !== null
        ? TournamentRaceData.fromPartial(object.raceData08)
        : undefined;
    message.raceData09 =
      object.raceData09 !== undefined && object.raceData09 !== null
        ? TournamentRaceData.fromPartial(object.raceData09)
        : undefined;
    message.raceData10 =
      object.raceData10 !== undefined && object.raceData10 !== null
        ? TournamentRaceData.fromPartial(object.raceData10)
        : undefined;
    message.raceData11 =
      object.raceData11 !== undefined && object.raceData11 !== null
        ? TournamentRaceData.fromPartial(object.raceData11)
        : undefined;
    message.raceData12 =
      object.raceData12 !== undefined && object.raceData12 !== null
        ? TournamentRaceData.fromPartial(object.raceData12)
        : undefined;
    message.raceData13 =
      object.raceData13 !== undefined && object.raceData13 !== null
        ? TournamentRaceData.fromPartial(object.raceData13)
        : undefined;
    message.raceData14 =
      object.raceData14 !== undefined && object.raceData14 !== null
        ? TournamentRaceData.fromPartial(object.raceData14)
        : undefined;
    message.raceData15 =
      object.raceData15 !== undefined && object.raceData15 !== null
        ? TournamentRaceData.fromPartial(object.raceData15)
        : undefined;
    message.raceData16 =
      object.raceData16 !== undefined && object.raceData16 !== null
        ? TournamentRaceData.fromPartial(object.raceData16)
        : undefined;
    message.raceData17 =
      object.raceData17 !== undefined && object.raceData17 !== null
        ? TournamentRaceData.fromPartial(object.raceData17)
        : undefined;
    message.raceData18 =
      object.raceData18 !== undefined && object.raceData18 !== null
        ? TournamentRaceData.fromPartial(object.raceData18)
        : undefined;
    message.raceData19 =
      object.raceData19 !== undefined && object.raceData19 !== null
        ? TournamentRaceData.fromPartial(object.raceData19)
        : undefined;
    message.raceData20 =
      object.raceData20 !== undefined && object.raceData20 !== null
        ? TournamentRaceData.fromPartial(object.raceData20)
        : undefined;
    message.raceData21 =
      object.raceData21 !== undefined && object.raceData21 !== null
        ? TournamentRaceData.fromPartial(object.raceData21)
        : undefined;
    message.raceData22 =
      object.raceData22 !== undefined && object.raceData22 !== null
        ? TournamentRaceData.fromPartial(object.raceData22)
        : undefined;
    message.raceData23 =
      object.raceData23 !== undefined && object.raceData23 !== null
        ? TournamentRaceData.fromPartial(object.raceData23)
        : undefined;
    message.raceData24 =
      object.raceData24 !== undefined && object.raceData24 !== null
        ? TournamentRaceData.fromPartial(object.raceData24)
        : undefined;
    message.raceData25 =
      object.raceData25 !== undefined && object.raceData25 !== null
        ? TournamentRaceData.fromPartial(object.raceData25)
        : undefined;
    message.raceData26 =
      object.raceData26 !== undefined && object.raceData26 !== null
        ? TournamentRaceData.fromPartial(object.raceData26)
        : undefined;
    message.raceData27 =
      object.raceData27 !== undefined && object.raceData27 !== null
        ? TournamentRaceData.fromPartial(object.raceData27)
        : undefined;
    message.raceData28 =
      object.raceData28 !== undefined && object.raceData28 !== null
        ? TournamentRaceData.fromPartial(object.raceData28)
        : undefined;
    message.raceData29 =
      object.raceData29 !== undefined && object.raceData29 !== null
        ? TournamentRaceData.fromPartial(object.raceData29)
        : undefined;
    message.raceData30 =
      object.raceData30 !== undefined && object.raceData30 !== null
        ? TournamentRaceData.fromPartial(object.raceData30)
        : undefined;
    message.raceData31 =
      object.raceData31 !== undefined && object.raceData31 !== null
        ? TournamentRaceData.fromPartial(object.raceData31)
        : undefined;
    message.raceData32 =
      object.raceData32 !== undefined && object.raceData32 !== null
        ? TournamentRaceData.fromPartial(object.raceData32)
        : undefined;
    message.raceData33 =
      object.raceData33 !== undefined && object.raceData33 !== null
        ? TournamentRaceData.fromPartial(object.raceData33)
        : undefined;
    message.raceData34 =
      object.raceData34 !== undefined && object.raceData34 !== null
        ? TournamentRaceData.fromPartial(object.raceData34)
        : undefined;
    return message;
  },
};

function createBaseTournamentResult(): TournamentResult {
  return { car: undefined, rank: 0, entryNumber: 0 };
}

export const TournamentResult = {
  encode(
    message: TournamentResult,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.car !== undefined) {
      Car.encode(message.car, writer.uint32(10).fork()).ldelim();
    }
    if (message.rank !== 0) {
      writer.uint32(16).sint32(message.rank);
    }
    if (message.entryNumber !== 0) {
      writer.uint32(24).sint32(message.entryNumber);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TournamentResult {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTournamentResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.car = Car.decode(reader, reader.uint32());
          break;
        case 2:
          message.rank = reader.sint32();
          break;
        case 3:
          message.entryNumber = reader.sint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TournamentResult {
    return {
      car: isSet(object.car) ? Car.fromJSON(object.car) : undefined,
      rank: isSet(object.rank) ? Number(object.rank) : 0,
      entryNumber: isSet(object.entryNumber) ? Number(object.entryNumber) : 0,
    };
  },

  toJSON(message: TournamentResult): unknown {
    const obj: any = {};
    message.car !== undefined &&
      (obj.car = message.car ? Car.toJSON(message.car) : undefined);
    message.rank !== undefined && (obj.rank = Math.round(message.rank));
    message.entryNumber !== undefined &&
      (obj.entryNumber = Math.round(message.entryNumber));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TournamentResult>, I>>(
    object: I
  ): TournamentResult {
    const message = createBaseTournamentResult();
    message.car =
      object.car !== undefined && object.car !== null
        ? Car.fromPartial(object.car)
        : undefined;
    message.rank = object.rank ?? 0;
    message.entryNumber = object.entryNumber ?? 0;
    return message;
  },
};

function createBaseTournamentResultList(): TournamentResultList {
  return {
    result00: undefined,
    result01: undefined,
    result02: undefined,
    result03: undefined,
  };
}

export const TournamentResultList = {
  encode(
    message: TournamentResultList,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.result00 !== undefined) {
      TournamentResult.encode(
        message.result00,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.result01 !== undefined) {
      TournamentResult.encode(
        message.result01,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.result02 !== undefined) {
      TournamentResult.encode(
        message.result02,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.result03 !== undefined) {
      TournamentResult.encode(
        message.result03,
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TournamentResultList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTournamentResultList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result00 = TournamentResult.decode(reader, reader.uint32());
          break;
        case 2:
          message.result01 = TournamentResult.decode(reader, reader.uint32());
          break;
        case 3:
          message.result02 = TournamentResult.decode(reader, reader.uint32());
          break;
        case 4:
          message.result03 = TournamentResult.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TournamentResultList {
    return {
      result00: isSet(object.result00)
        ? TournamentResult.fromJSON(object.result00)
        : undefined,
      result01: isSet(object.result01)
        ? TournamentResult.fromJSON(object.result01)
        : undefined,
      result02: isSet(object.result02)
        ? TournamentResult.fromJSON(object.result02)
        : undefined,
      result03: isSet(object.result03)
        ? TournamentResult.fromJSON(object.result03)
        : undefined,
    };
  },

  toJSON(message: TournamentResultList): unknown {
    const obj: any = {};
    message.result00 !== undefined &&
      (obj.result00 = message.result00
        ? TournamentResult.toJSON(message.result00)
        : undefined);
    message.result01 !== undefined &&
      (obj.result01 = message.result01
        ? TournamentResult.toJSON(message.result01)
        : undefined);
    message.result02 !== undefined &&
      (obj.result02 = message.result02
        ? TournamentResult.toJSON(message.result02)
        : undefined);
    message.result03 !== undefined &&
      (obj.result03 = message.result03
        ? TournamentResult.toJSON(message.result03)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TournamentResultList>, I>>(
    object: I
  ): TournamentResultList {
    const message = createBaseTournamentResultList();
    message.result00 =
      object.result00 !== undefined && object.result00 !== null
        ? TournamentResult.fromPartial(object.result00)
        : undefined;
    message.result01 =
      object.result01 !== undefined && object.result01 !== null
        ? TournamentResult.fromPartial(object.result01)
        : undefined;
    message.result02 =
      object.result02 !== undefined && object.result02 !== null
        ? TournamentResult.fromPartial(object.result02)
        : undefined;
    message.result03 =
      object.result03 !== undefined && object.result03 !== null
        ? TournamentResult.fromPartial(object.result03)
        : undefined;
    return message;
  },
};

function createBaseTournament(): Tournament {
  return {
    isEnableTournament: false,
    isClearTournament: false,
    isEntryPlayerOnly: false,
    carList: undefined,
    raceDataList: undefined,
    isTournamentOn: false,
    holdYear: 0,
    holdMonth: 0,
    holdDay: 0,
    entryHour: 0,
    entryMinute: 0,
    tournamentStartHour: 0,
    tournamentStartMinute: 0,
    competitionNum: 0,
    participantNum: 0,
    surviverNumOfFirstRace: 0,
    nowRound: 0,
    playingGameNumber: 0,
    isConfirmTournamentResult: false,
    isTournamentEntry: false,
    resultList: undefined,
    hasCommendationStarted: false,
    isCommendationRankAppeared: false,
    isCommendationEnded: false,
    isNextRank: false,
    commendationPage: 0,
    showCommendationAgain: false,
  };
}

export const Tournament = {
  encode(
    message: Tournament,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.isEnableTournament === true) {
      writer.uint32(8).bool(message.isEnableTournament);
    }
    if (message.isClearTournament === true) {
      writer.uint32(16).bool(message.isClearTournament);
    }
    if (message.isEntryPlayerOnly === true) {
      writer.uint32(24).bool(message.isEntryPlayerOnly);
    }
    if (message.carList !== undefined) {
      TournamentCarList.encode(
        message.carList,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.raceDataList !== undefined) {
      TournamentRaceDataList.encode(
        message.raceDataList,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.isTournamentOn === true) {
      writer.uint32(48).bool(message.isTournamentOn);
    }
    if (message.holdYear !== 0) {
      writer.uint32(56).uint32(message.holdYear);
    }
    if (message.holdMonth !== 0) {
      writer.uint32(64).uint32(message.holdMonth);
    }
    if (message.holdDay !== 0) {
      writer.uint32(72).uint32(message.holdDay);
    }
    if (message.entryHour !== 0) {
      writer.uint32(80).uint32(message.entryHour);
    }
    if (message.entryMinute !== 0) {
      writer.uint32(88).uint32(message.entryMinute);
    }
    if (message.tournamentStartHour !== 0) {
      writer.uint32(96).uint32(message.tournamentStartHour);
    }
    if (message.tournamentStartMinute !== 0) {
      writer.uint32(104).uint32(message.tournamentStartMinute);
    }
    if (message.competitionNum !== 0) {
      writer.uint32(112).uint32(message.competitionNum);
    }
    if (message.participantNum !== 0) {
      writer.uint32(120).uint32(message.participantNum);
    }
    if (message.surviverNumOfFirstRace !== 0) {
      writer.uint32(128).uint32(message.surviverNumOfFirstRace);
    }
    if (message.nowRound !== 0) {
      writer.uint32(136).uint32(message.nowRound);
    }
    if (message.playingGameNumber !== 0) {
      writer.uint32(144).sint32(message.playingGameNumber);
    }
    if (message.isConfirmTournamentResult === true) {
      writer.uint32(152).bool(message.isConfirmTournamentResult);
    }
    if (message.isTournamentEntry === true) {
      writer.uint32(160).bool(message.isTournamentEntry);
    }
    if (message.resultList !== undefined) {
      TournamentResultList.encode(
        message.resultList,
        writer.uint32(170).fork()
      ).ldelim();
    }
    if (message.hasCommendationStarted === true) {
      writer.uint32(176).bool(message.hasCommendationStarted);
    }
    if (message.isCommendationRankAppeared === true) {
      writer.uint32(184).bool(message.isCommendationRankAppeared);
    }
    if (message.isCommendationEnded === true) {
      writer.uint32(192).bool(message.isCommendationEnded);
    }
    if (message.isNextRank === true) {
      writer.uint32(200).bool(message.isNextRank);
    }
    if (message.commendationPage !== 0) {
      writer.uint32(208).uint32(message.commendationPage);
    }
    if (message.showCommendationAgain === true) {
      writer.uint32(216).bool(message.showCommendationAgain);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Tournament {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTournament();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.isEnableTournament = reader.bool();
          break;
        case 2:
          message.isClearTournament = reader.bool();
          break;
        case 3:
          message.isEntryPlayerOnly = reader.bool();
          break;
        case 4:
          message.carList = TournamentCarList.decode(reader, reader.uint32());
          break;
        case 5:
          message.raceDataList = TournamentRaceDataList.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.isTournamentOn = reader.bool();
          break;
        case 7:
          message.holdYear = reader.uint32();
          break;
        case 8:
          message.holdMonth = reader.uint32();
          break;
        case 9:
          message.holdDay = reader.uint32();
          break;
        case 10:
          message.entryHour = reader.uint32();
          break;
        case 11:
          message.entryMinute = reader.uint32();
          break;
        case 12:
          message.tournamentStartHour = reader.uint32();
          break;
        case 13:
          message.tournamentStartMinute = reader.uint32();
          break;
        case 14:
          message.competitionNum = reader.uint32();
          break;
        case 15:
          message.participantNum = reader.uint32();
          break;
        case 16:
          message.surviverNumOfFirstRace = reader.uint32();
          break;
        case 17:
          message.nowRound = reader.uint32();
          break;
        case 18:
          message.playingGameNumber = reader.sint32();
          break;
        case 19:
          message.isConfirmTournamentResult = reader.bool();
          break;
        case 20:
          message.isTournamentEntry = reader.bool();
          break;
        case 21:
          message.resultList = TournamentResultList.decode(
            reader,
            reader.uint32()
          );
          break;
        case 22:
          message.hasCommendationStarted = reader.bool();
          break;
        case 23:
          message.isCommendationRankAppeared = reader.bool();
          break;
        case 24:
          message.isCommendationEnded = reader.bool();
          break;
        case 25:
          message.isNextRank = reader.bool();
          break;
        case 26:
          message.commendationPage = reader.uint32();
          break;
        case 27:
          message.showCommendationAgain = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Tournament {
    return {
      isEnableTournament: isSet(object.isEnableTournament)
        ? Boolean(object.isEnableTournament)
        : false,
      isClearTournament: isSet(object.isClearTournament)
        ? Boolean(object.isClearTournament)
        : false,
      isEntryPlayerOnly: isSet(object.isEntryPlayerOnly)
        ? Boolean(object.isEntryPlayerOnly)
        : false,
      carList: isSet(object.carList)
        ? TournamentCarList.fromJSON(object.carList)
        : undefined,
      raceDataList: isSet(object.raceDataList)
        ? TournamentRaceDataList.fromJSON(object.raceDataList)
        : undefined,
      isTournamentOn: isSet(object.isTournamentOn)
        ? Boolean(object.isTournamentOn)
        : false,
      holdYear: isSet(object.holdYear) ? Number(object.holdYear) : 0,
      holdMonth: isSet(object.holdMonth) ? Number(object.holdMonth) : 0,
      holdDay: isSet(object.holdDay) ? Number(object.holdDay) : 0,
      entryHour: isSet(object.entryHour) ? Number(object.entryHour) : 0,
      entryMinute: isSet(object.entryMinute) ? Number(object.entryMinute) : 0,
      tournamentStartHour: isSet(object.tournamentStartHour)
        ? Number(object.tournamentStartHour)
        : 0,
      tournamentStartMinute: isSet(object.tournamentStartMinute)
        ? Number(object.tournamentStartMinute)
        : 0,
      competitionNum: isSet(object.competitionNum)
        ? Number(object.competitionNum)
        : 0,
      participantNum: isSet(object.participantNum)
        ? Number(object.participantNum)
        : 0,
      surviverNumOfFirstRace: isSet(object.surviverNumOfFirstRace)
        ? Number(object.surviverNumOfFirstRace)
        : 0,
      nowRound: isSet(object.nowRound) ? Number(object.nowRound) : 0,
      playingGameNumber: isSet(object.playingGameNumber)
        ? Number(object.playingGameNumber)
        : 0,
      isConfirmTournamentResult: isSet(object.isConfirmTournamentResult)
        ? Boolean(object.isConfirmTournamentResult)
        : false,
      isTournamentEntry: isSet(object.isTournamentEntry)
        ? Boolean(object.isTournamentEntry)
        : false,
      resultList: isSet(object.resultList)
        ? TournamentResultList.fromJSON(object.resultList)
        : undefined,
      hasCommendationStarted: isSet(object.hasCommendationStarted)
        ? Boolean(object.hasCommendationStarted)
        : false,
      isCommendationRankAppeared: isSet(object.isCommendationRankAppeared)
        ? Boolean(object.isCommendationRankAppeared)
        : false,
      isCommendationEnded: isSet(object.isCommendationEnded)
        ? Boolean(object.isCommendationEnded)
        : false,
      isNextRank: isSet(object.isNextRank) ? Boolean(object.isNextRank) : false,
      commendationPage: isSet(object.commendationPage)
        ? Number(object.commendationPage)
        : 0,
      showCommendationAgain: isSet(object.showCommendationAgain)
        ? Boolean(object.showCommendationAgain)
        : false,
    };
  },

  toJSON(message: Tournament): unknown {
    const obj: any = {};
    message.isEnableTournament !== undefined &&
      (obj.isEnableTournament = message.isEnableTournament);
    message.isClearTournament !== undefined &&
      (obj.isClearTournament = message.isClearTournament);
    message.isEntryPlayerOnly !== undefined &&
      (obj.isEntryPlayerOnly = message.isEntryPlayerOnly);
    message.carList !== undefined &&
      (obj.carList = message.carList
        ? TournamentCarList.toJSON(message.carList)
        : undefined);
    message.raceDataList !== undefined &&
      (obj.raceDataList = message.raceDataList
        ? TournamentRaceDataList.toJSON(message.raceDataList)
        : undefined);
    message.isTournamentOn !== undefined &&
      (obj.isTournamentOn = message.isTournamentOn);
    message.holdYear !== undefined &&
      (obj.holdYear = Math.round(message.holdYear));
    message.holdMonth !== undefined &&
      (obj.holdMonth = Math.round(message.holdMonth));
    message.holdDay !== undefined &&
      (obj.holdDay = Math.round(message.holdDay));
    message.entryHour !== undefined &&
      (obj.entryHour = Math.round(message.entryHour));
    message.entryMinute !== undefined &&
      (obj.entryMinute = Math.round(message.entryMinute));
    message.tournamentStartHour !== undefined &&
      (obj.tournamentStartHour = Math.round(message.tournamentStartHour));
    message.tournamentStartMinute !== undefined &&
      (obj.tournamentStartMinute = Math.round(message.tournamentStartMinute));
    message.competitionNum !== undefined &&
      (obj.competitionNum = Math.round(message.competitionNum));
    message.participantNum !== undefined &&
      (obj.participantNum = Math.round(message.participantNum));
    message.surviverNumOfFirstRace !== undefined &&
      (obj.surviverNumOfFirstRace = Math.round(message.surviverNumOfFirstRace));
    message.nowRound !== undefined &&
      (obj.nowRound = Math.round(message.nowRound));
    message.playingGameNumber !== undefined &&
      (obj.playingGameNumber = Math.round(message.playingGameNumber));
    message.isConfirmTournamentResult !== undefined &&
      (obj.isConfirmTournamentResult = message.isConfirmTournamentResult);
    message.isTournamentEntry !== undefined &&
      (obj.isTournamentEntry = message.isTournamentEntry);
    message.resultList !== undefined &&
      (obj.resultList = message.resultList
        ? TournamentResultList.toJSON(message.resultList)
        : undefined);
    message.hasCommendationStarted !== undefined &&
      (obj.hasCommendationStarted = message.hasCommendationStarted);
    message.isCommendationRankAppeared !== undefined &&
      (obj.isCommendationRankAppeared = message.isCommendationRankAppeared);
    message.isCommendationEnded !== undefined &&
      (obj.isCommendationEnded = message.isCommendationEnded);
    message.isNextRank !== undefined && (obj.isNextRank = message.isNextRank);
    message.commendationPage !== undefined &&
      (obj.commendationPage = Math.round(message.commendationPage));
    message.showCommendationAgain !== undefined &&
      (obj.showCommendationAgain = message.showCommendationAgain);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Tournament>, I>>(
    object: I
  ): Tournament {
    const message = createBaseTournament();
    message.isEnableTournament = object.isEnableTournament ?? false;
    message.isClearTournament = object.isClearTournament ?? false;
    message.isEntryPlayerOnly = object.isEntryPlayerOnly ?? false;
    message.carList =
      object.carList !== undefined && object.carList !== null
        ? TournamentCarList.fromPartial(object.carList)
        : undefined;
    message.raceDataList =
      object.raceDataList !== undefined && object.raceDataList !== null
        ? TournamentRaceDataList.fromPartial(object.raceDataList)
        : undefined;
    message.isTournamentOn = object.isTournamentOn ?? false;
    message.holdYear = object.holdYear ?? 0;
    message.holdMonth = object.holdMonth ?? 0;
    message.holdDay = object.holdDay ?? 0;
    message.entryHour = object.entryHour ?? 0;
    message.entryMinute = object.entryMinute ?? 0;
    message.tournamentStartHour = object.tournamentStartHour ?? 0;
    message.tournamentStartMinute = object.tournamentStartMinute ?? 0;
    message.competitionNum = object.competitionNum ?? 0;
    message.participantNum = object.participantNum ?? 0;
    message.surviverNumOfFirstRace = object.surviverNumOfFirstRace ?? 0;
    message.nowRound = object.nowRound ?? 0;
    message.playingGameNumber = object.playingGameNumber ?? 0;
    message.isConfirmTournamentResult =
      object.isConfirmTournamentResult ?? false;
    message.isTournamentEntry = object.isTournamentEntry ?? false;
    message.resultList =
      object.resultList !== undefined && object.resultList !== null
        ? TournamentResultList.fromPartial(object.resultList)
        : undefined;
    message.hasCommendationStarted = object.hasCommendationStarted ?? false;
    message.isCommendationRankAppeared =
      object.isCommendationRankAppeared ?? false;
    message.isCommendationEnded = object.isCommendationEnded ?? false;
    message.isNextRank = object.isNextRank ?? false;
    message.commendationPage = object.commendationPage ?? 0;
    message.showCommendationAgain = object.showCommendationAgain ?? false;
    return message;
  },
};

function createBaseMessage(): Message {
  return {
    racePacket: new Uint8Array(),
    raceCar: new Uint8Array(),
    course: undefined,
    vsOk: 0,
    heartBeat: undefined,
    batchSettingState: 0,
    driveCabinetState: undefined,
    batchSetting: undefined,
    information: undefined,
    featureVersion: undefined,
    tournament: undefined,
  };
}

export const Message = {
  encode(
    message: Message,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.racePacket.length !== 0) {
      writer.uint32(10).bytes(message.racePacket);
    }
    if (message.raceCar.length !== 0) {
      writer.uint32(18).bytes(message.raceCar);
    }
    if (message.course !== undefined) {
      Course.encode(message.course, writer.uint32(26).fork()).ldelim();
    }
    if (message.vsOk !== 0) {
      writer.uint32(32).int32(message.vsOk);
    }
    if (message.heartBeat !== undefined) {
      HeartBeat.encode(message.heartBeat, writer.uint32(42).fork()).ldelim();
    }
    if (message.batchSettingState !== 0) {
      writer.uint32(48).int32(message.batchSettingState);
    }
    if (message.driveCabinetState !== undefined) {
      DriveCabinetState.encode(
        message.driveCabinetState,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.batchSetting !== undefined) {
      BatchSetting.encode(
        message.batchSetting,
        writer.uint32(66).fork()
      ).ldelim();
    }
    if (message.information !== undefined) {
      Information.encode(
        message.information,
        writer.uint32(74).fork()
      ).ldelim();
    }
    if (message.featureVersion !== undefined) {
      GameFeatureVersion.encode(
        message.featureVersion,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.tournament !== undefined) {
      Tournament.encode(message.tournament, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Message {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.racePacket = reader.bytes();
          break;
        case 2:
          message.raceCar = reader.bytes();
          break;
        case 3:
          message.course = Course.decode(reader, reader.uint32());
          break;
        case 4:
          message.vsOk = reader.int32();
          break;
        case 5:
          message.heartBeat = HeartBeat.decode(reader, reader.uint32());
          break;
        case 6:
          message.batchSettingState = reader.int32();
          break;
        case 7:
          message.driveCabinetState = DriveCabinetState.decode(
            reader,
            reader.uint32()
          );
          break;
        case 8:
          message.batchSetting = BatchSetting.decode(reader, reader.uint32());
          break;
        case 9:
          message.information = Information.decode(reader, reader.uint32());
          break;
        case 10:
          message.featureVersion = GameFeatureVersion.decode(
            reader,
            reader.uint32()
          );
          break;
        case 11:
          message.tournament = Tournament.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Message {
    return {
      racePacket: isSet(object.racePacket)
        ? bytesFromBase64(object.racePacket)
        : new Uint8Array(),
      raceCar: isSet(object.raceCar)
        ? bytesFromBase64(object.raceCar)
        : new Uint8Array(),
      course: isSet(object.course) ? Course.fromJSON(object.course) : undefined,
      vsOk: isSet(object.vsOk) ? Number(object.vsOk) : 0,
      heartBeat: isSet(object.heartBeat)
        ? HeartBeat.fromJSON(object.heartBeat)
        : undefined,
      batchSettingState: isSet(object.batchSettingState)
        ? Number(object.batchSettingState)
        : 0,
      driveCabinetState: isSet(object.driveCabinetState)
        ? DriveCabinetState.fromJSON(object.driveCabinetState)
        : undefined,
      batchSetting: isSet(object.batchSetting)
        ? BatchSetting.fromJSON(object.batchSetting)
        : undefined,
      information: isSet(object.information)
        ? Information.fromJSON(object.information)
        : undefined,
      featureVersion: isSet(object.featureVersion)
        ? GameFeatureVersion.fromJSON(object.featureVersion)
        : undefined,
      tournament: isSet(object.tournament)
        ? Tournament.fromJSON(object.tournament)
        : undefined,
    };
  },

  toJSON(message: Message): unknown {
    const obj: any = {};
    message.racePacket !== undefined &&
      (obj.racePacket = base64FromBytes(
        message.racePacket !== undefined ? message.racePacket : new Uint8Array()
      ));
    message.raceCar !== undefined &&
      (obj.raceCar = base64FromBytes(
        message.raceCar !== undefined ? message.raceCar : new Uint8Array()
      ));
    message.course !== undefined &&
      (obj.course = message.course ? Course.toJSON(message.course) : undefined);
    message.vsOk !== undefined && (obj.vsOk = Math.round(message.vsOk));
    message.heartBeat !== undefined &&
      (obj.heartBeat = message.heartBeat
        ? HeartBeat.toJSON(message.heartBeat)
        : undefined);
    message.batchSettingState !== undefined &&
      (obj.batchSettingState = Math.round(message.batchSettingState));
    message.driveCabinetState !== undefined &&
      (obj.driveCabinetState = message.driveCabinetState
        ? DriveCabinetState.toJSON(message.driveCabinetState)
        : undefined);
    message.batchSetting !== undefined &&
      (obj.batchSetting = message.batchSetting
        ? BatchSetting.toJSON(message.batchSetting)
        : undefined);
    message.information !== undefined &&
      (obj.information = message.information
        ? Information.toJSON(message.information)
        : undefined);
    message.featureVersion !== undefined &&
      (obj.featureVersion = message.featureVersion
        ? GameFeatureVersion.toJSON(message.featureVersion)
        : undefined);
    message.tournament !== undefined &&
      (obj.tournament = message.tournament
        ? Tournament.toJSON(message.tournament)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Message>, I>>(object: I): Message {
    const message = createBaseMessage();
    message.racePacket = object.racePacket ?? new Uint8Array();
    message.raceCar = object.raceCar ?? new Uint8Array();
    message.course =
      object.course !== undefined && object.course !== null
        ? Course.fromPartial(object.course)
        : undefined;
    message.vsOk = object.vsOk ?? 0;
    message.heartBeat =
      object.heartBeat !== undefined && object.heartBeat !== null
        ? HeartBeat.fromPartial(object.heartBeat)
        : undefined;
    message.batchSettingState = object.batchSettingState ?? 0;
    message.driveCabinetState =
      object.driveCabinetState !== undefined &&
      object.driveCabinetState !== null
        ? DriveCabinetState.fromPartial(object.driveCabinetState)
        : undefined;
    message.batchSetting =
      object.batchSetting !== undefined && object.batchSetting !== null
        ? BatchSetting.fromPartial(object.batchSetting)
        : undefined;
    message.information =
      object.information !== undefined && object.information !== null
        ? Information.fromPartial(object.information)
        : undefined;
    message.featureVersion =
      object.featureVersion !== undefined && object.featureVersion !== null
        ? GameFeatureVersion.fromPartial(object.featureVersion)
        : undefined;
    message.tournament =
      object.tournament !== undefined && object.tournament !== null
        ? Tournament.fromPartial(object.tournament)
        : undefined;
    return message;
  },
};

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

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  arr.forEach((byte) => {
    bin.push(String.fromCharCode(byte));
  });
  return btoa(bin.join(""));
}

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
