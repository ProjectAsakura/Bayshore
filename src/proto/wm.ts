/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "wm.protobuf";

export enum SystemConstant {
  PROTOBUF_MESSAGE_REVISION = 8053,
  UNRECOGNIZED = -1,
}

export function systemConstantFromJSON(object: any): SystemConstant {
  switch (object) {
    case 8053:
    case "PROTOBUF_MESSAGE_REVISION":
      return SystemConstant.PROTOBUF_MESSAGE_REVISION;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SystemConstant.UNRECOGNIZED;
  }
}

export function systemConstantToJSON(object: SystemConstant): string {
  switch (object) {
    case SystemConstant.PROTOBUF_MESSAGE_REVISION:
      return "PROTOBUF_MESSAGE_REVISION";
    case SystemConstant.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ErrorCode {
  ERR_SUCCESS = 0,
  ERR_REQUEST = 1,
  ERR_NOT_FOUND = 2,
  ERR_ID_SERVER = 3,
  ERR_ID_BANNED = 4,
  ERR_USER_LOCKED = 5,
  ERR_USER_VERSION = 6,
  ERR_NAME_CONFLICTED = 7,
  ERR_FORBIDDEN = 9,
  ERR_USER_SUCCEEDED = 11,
  ERR_BEING_TRANSFERRED = 12,
  ERR_SCRATCH_LOCKED = 13,
  UNRECOGNIZED = -1,
}

export function errorCodeFromJSON(object: any): ErrorCode {
  switch (object) {
    case 0:
    case "ERR_SUCCESS":
      return ErrorCode.ERR_SUCCESS;
    case 1:
    case "ERR_REQUEST":
      return ErrorCode.ERR_REQUEST;
    case 2:
    case "ERR_NOT_FOUND":
      return ErrorCode.ERR_NOT_FOUND;
    case 3:
    case "ERR_ID_SERVER":
      return ErrorCode.ERR_ID_SERVER;
    case 4:
    case "ERR_ID_BANNED":
      return ErrorCode.ERR_ID_BANNED;
    case 5:
    case "ERR_USER_LOCKED":
      return ErrorCode.ERR_USER_LOCKED;
    case 6:
    case "ERR_USER_VERSION":
      return ErrorCode.ERR_USER_VERSION;
    case 7:
    case "ERR_NAME_CONFLICTED":
      return ErrorCode.ERR_NAME_CONFLICTED;
    case 9:
    case "ERR_FORBIDDEN":
      return ErrorCode.ERR_FORBIDDEN;
    case 11:
    case "ERR_USER_SUCCEEDED":
      return ErrorCode.ERR_USER_SUCCEEDED;
    case 12:
    case "ERR_BEING_TRANSFERRED":
      return ErrorCode.ERR_BEING_TRANSFERRED;
    case 13:
    case "ERR_SCRATCH_LOCKED":
      return ErrorCode.ERR_SCRATCH_LOCKED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ErrorCode.UNRECOGNIZED;
  }
}

export function errorCodeToJSON(object: ErrorCode): string {
  switch (object) {
    case ErrorCode.ERR_SUCCESS:
      return "ERR_SUCCESS";
    case ErrorCode.ERR_REQUEST:
      return "ERR_REQUEST";
    case ErrorCode.ERR_NOT_FOUND:
      return "ERR_NOT_FOUND";
    case ErrorCode.ERR_ID_SERVER:
      return "ERR_ID_SERVER";
    case ErrorCode.ERR_ID_BANNED:
      return "ERR_ID_BANNED";
    case ErrorCode.ERR_USER_LOCKED:
      return "ERR_USER_LOCKED";
    case ErrorCode.ERR_USER_VERSION:
      return "ERR_USER_VERSION";
    case ErrorCode.ERR_NAME_CONFLICTED:
      return "ERR_NAME_CONFLICTED";
    case ErrorCode.ERR_FORBIDDEN:
      return "ERR_FORBIDDEN";
    case ErrorCode.ERR_USER_SUCCEEDED:
      return "ERR_USER_SUCCEEDED";
    case ErrorCode.ERR_BEING_TRANSFERRED:
      return "ERR_BEING_TRANSFERRED";
    case ErrorCode.ERR_SCRATCH_LOCKED:
      return "ERR_SCRATCH_LOCKED";
    case ErrorCode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum LineType {
  L_UNKNOWN = 0,
  L_MOBILE = 1,
  L_ISDN = 2,
  L_BFLETS = 3,
  L_ADSL = 4,
  L_WIRED = 5,
  UNRECOGNIZED = -1,
}

export function lineTypeFromJSON(object: any): LineType {
  switch (object) {
    case 0:
    case "L_UNKNOWN":
      return LineType.L_UNKNOWN;
    case 1:
    case "L_MOBILE":
      return LineType.L_MOBILE;
    case 2:
    case "L_ISDN":
      return LineType.L_ISDN;
    case 3:
    case "L_BFLETS":
      return LineType.L_BFLETS;
    case 4:
    case "L_ADSL":
      return LineType.L_ADSL;
    case 5:
    case "L_WIRED":
      return LineType.L_WIRED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return LineType.UNRECOGNIZED;
  }
}

export function lineTypeToJSON(object: LineType): string {
  switch (object) {
    case LineType.L_UNKNOWN:
      return "L_UNKNOWN";
    case LineType.L_MOBILE:
      return "L_MOBILE";
    case LineType.L_ISDN:
      return "L_ISDN";
    case LineType.L_BFLETS:
      return "L_BFLETS";
    case LineType.L_ADSL:
      return "L_ADSL";
    case LineType.L_WIRED:
      return "L_WIRED";
    case LineType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum TerminalType {
  T_DRIVE = 0,
  T_TERMINAL = 1,
  UNRECOGNIZED = -1,
}

export function terminalTypeFromJSON(object: any): TerminalType {
  switch (object) {
    case 0:
    case "T_DRIVE":
      return TerminalType.T_DRIVE;
    case 1:
    case "T_TERMINAL":
      return TerminalType.T_TERMINAL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TerminalType.UNRECOGNIZED;
  }
}

export function terminalTypeToJSON(object: TerminalType): string {
  switch (object) {
    case TerminalType.T_DRIVE:
      return "T_DRIVE";
    case TerminalType.T_TERMINAL:
      return "T_TERMINAL";
    case TerminalType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum DeviceType {
  DEVICE_CARD = 0,
  DEVICE_PHONE = 1,
  UNRECOGNIZED = -1,
}

export function deviceTypeFromJSON(object: any): DeviceType {
  switch (object) {
    case 0:
    case "DEVICE_CARD":
      return DeviceType.DEVICE_CARD;
    case 1:
    case "DEVICE_PHONE":
      return DeviceType.DEVICE_PHONE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DeviceType.UNRECOGNIZED;
  }
}

export function deviceTypeToJSON(object: DeviceType): string {
  switch (object) {
    case DeviceType.DEVICE_CARD:
      return "DEVICE_CARD";
    case DeviceType.DEVICE_PHONE:
      return "DEVICE_PHONE";
    case DeviceType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ItemCategory {
  CAT_CUSTOM_COLOR = 1,
  CAT_WHEEL = 2,
  CAT_AERO = 3,
  CAT_BONNET = 4,
  CAT_WING = 5,
  CAT_MIRROR = 6,
  CAT_NEON = 8,
  CAT_TRUNK = 9,
  CAT_NUMBER_PLATE = 10,
  CAT_GT_WING = 12,
  CAT_AURA_MOTIF = 14,
  CAT_METER = 15,
  CAT_BGM = 16,
  CAT_NAME_PLATE = 17,
  CAT_NUMBER = 19,
  CAT_BGM_TRACK = 22,
  CAT_WINDOW_STICKER_FONT = 24,
  CAT_WINDOW_DECORATION = 25,
  CAT_RIVAL_MARKER = 26,
  CAT_STAMP = 27,
  CAT_TERMINAL_BACKGROUND = 28,
  CAT_CAR_TICKET = 201,
  CAT_CONSUMPTION_ITEM = 202,
  CAT_CAR_TICKET_FREE = 203,
  CAT_AERO_FULLSET = 300,
  CAT_AERO_LIMITED = 301,
  UNRECOGNIZED = -1,
}

export function itemCategoryFromJSON(object: any): ItemCategory {
  switch (object) {
    case 1:
    case "CAT_CUSTOM_COLOR":
      return ItemCategory.CAT_CUSTOM_COLOR;
    case 2:
    case "CAT_WHEEL":
      return ItemCategory.CAT_WHEEL;
    case 3:
    case "CAT_AERO":
      return ItemCategory.CAT_AERO;
    case 4:
    case "CAT_BONNET":
      return ItemCategory.CAT_BONNET;
    case 5:
    case "CAT_WING":
      return ItemCategory.CAT_WING;
    case 6:
    case "CAT_MIRROR":
      return ItemCategory.CAT_MIRROR;
    case 8:
    case "CAT_NEON":
      return ItemCategory.CAT_NEON;
    case 9:
    case "CAT_TRUNK":
      return ItemCategory.CAT_TRUNK;
    case 10:
    case "CAT_NUMBER_PLATE":
      return ItemCategory.CAT_NUMBER_PLATE;
    case 12:
    case "CAT_GT_WING":
      return ItemCategory.CAT_GT_WING;
    case 14:
    case "CAT_AURA_MOTIF":
      return ItemCategory.CAT_AURA_MOTIF;
    case 15:
    case "CAT_METER":
      return ItemCategory.CAT_METER;
    case 16:
    case "CAT_BGM":
      return ItemCategory.CAT_BGM;
    case 17:
    case "CAT_NAME_PLATE":
      return ItemCategory.CAT_NAME_PLATE;
    case 19:
    case "CAT_NUMBER":
      return ItemCategory.CAT_NUMBER;
    case 22:
    case "CAT_BGM_TRACK":
      return ItemCategory.CAT_BGM_TRACK;
    case 24:
    case "CAT_WINDOW_STICKER_FONT":
      return ItemCategory.CAT_WINDOW_STICKER_FONT;
    case 25:
    case "CAT_WINDOW_DECORATION":
      return ItemCategory.CAT_WINDOW_DECORATION;
    case 26:
    case "CAT_RIVAL_MARKER":
      return ItemCategory.CAT_RIVAL_MARKER;
    case 27:
    case "CAT_STAMP":
      return ItemCategory.CAT_STAMP;
    case 28:
    case "CAT_TERMINAL_BACKGROUND":
      return ItemCategory.CAT_TERMINAL_BACKGROUND;
    case 201:
    case "CAT_CAR_TICKET":
      return ItemCategory.CAT_CAR_TICKET;
    case 202:
    case "CAT_CONSUMPTION_ITEM":
      return ItemCategory.CAT_CONSUMPTION_ITEM;
    case 203:
    case "CAT_CAR_TICKET_FREE":
      return ItemCategory.CAT_CAR_TICKET_FREE;
    case 300:
    case "CAT_AERO_FULLSET":
      return ItemCategory.CAT_AERO_FULLSET;
    case 301:
    case "CAT_AERO_LIMITED":
      return ItemCategory.CAT_AERO_LIMITED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ItemCategory.UNRECOGNIZED;
  }
}

export function itemCategoryToJSON(object: ItemCategory): string {
  switch (object) {
    case ItemCategory.CAT_CUSTOM_COLOR:
      return "CAT_CUSTOM_COLOR";
    case ItemCategory.CAT_WHEEL:
      return "CAT_WHEEL";
    case ItemCategory.CAT_AERO:
      return "CAT_AERO";
    case ItemCategory.CAT_BONNET:
      return "CAT_BONNET";
    case ItemCategory.CAT_WING:
      return "CAT_WING";
    case ItemCategory.CAT_MIRROR:
      return "CAT_MIRROR";
    case ItemCategory.CAT_NEON:
      return "CAT_NEON";
    case ItemCategory.CAT_TRUNK:
      return "CAT_TRUNK";
    case ItemCategory.CAT_NUMBER_PLATE:
      return "CAT_NUMBER_PLATE";
    case ItemCategory.CAT_GT_WING:
      return "CAT_GT_WING";
    case ItemCategory.CAT_AURA_MOTIF:
      return "CAT_AURA_MOTIF";
    case ItemCategory.CAT_METER:
      return "CAT_METER";
    case ItemCategory.CAT_BGM:
      return "CAT_BGM";
    case ItemCategory.CAT_NAME_PLATE:
      return "CAT_NAME_PLATE";
    case ItemCategory.CAT_NUMBER:
      return "CAT_NUMBER";
    case ItemCategory.CAT_BGM_TRACK:
      return "CAT_BGM_TRACK";
    case ItemCategory.CAT_WINDOW_STICKER_FONT:
      return "CAT_WINDOW_STICKER_FONT";
    case ItemCategory.CAT_WINDOW_DECORATION:
      return "CAT_WINDOW_DECORATION";
    case ItemCategory.CAT_RIVAL_MARKER:
      return "CAT_RIVAL_MARKER";
    case ItemCategory.CAT_STAMP:
      return "CAT_STAMP";
    case ItemCategory.CAT_TERMINAL_BACKGROUND:
      return "CAT_TERMINAL_BACKGROUND";
    case ItemCategory.CAT_CAR_TICKET:
      return "CAT_CAR_TICKET";
    case ItemCategory.CAT_CONSUMPTION_ITEM:
      return "CAT_CONSUMPTION_ITEM";
    case ItemCategory.CAT_CAR_TICKET_FREE:
      return "CAT_CAR_TICKET_FREE";
    case ItemCategory.CAT_AERO_FULLSET:
      return "CAT_AERO_FULLSET";
    case ItemCategory.CAT_AERO_LIMITED:
      return "CAT_AERO_LIMITED";
    case ItemCategory.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum TutorialType {
  TUTORIAL_ID_STORY = 0,
  TUTORIAL_ID_TIME_ATTACK = 1,
  TUTORIAL_ID_GHOST = 2,
  TUTORIAL_ID_GHOST_CHALLENGE = 3,
  TUTORIAL_ID_GHOST_LEVEL = 4,
  TUTORIAL_ID_UNUSED_5 = 5,
  TUTORIAL_ID_GHOST_SEARCH = 6,
  TUTORIAL_ID_GHOST_COMPETITION = 7,
  TUTORIAL_ID_HP600_CARD = 8,
  TUTORIAL_ID_UNUSED_9 = 9,
  TUTORIAL_ID_COMPETITION_QUALIFIED = 10,
  TUTORIAL_ID_COMPETITION_TERMINAL = 11,
  TUTORIAL_ID_COMPETITION_NOTICE = 12,
  TUTORIAL_ID_COMPETITION_FINISHED = 13,
  TUTORIAL_ID_UNUSED_14 = 14,
  TUTORIAL_ID_UNUSED_15 = 15,
  TUTORIAL_ID_UNUSED_16 = 16,
  TUTORIAL_ID_UNUSED_17 = 17,
  TUTORIAL_ID_UNUSED_18 = 18,
  TUTORIAL_ID_UNUSED_19 = 19,
  TUTORIAL_ID_GHOST_STAMP = 20,
  TUTORIAL_ID_GHOST_STAMP_DECLINED = 21,
  TUTORIAL_ID_GHOST_STAMP_FRIENDS = 22,
  TUTORIAL_ID_TERMINAL_SCRATCH = 23,
  TUTORIAL_ID_TURN_SCRATCH_SHEET = 24,
  TUTORIAL_ID_INVITE_FRIEND_CAMPAIGN = 25,
  TUTORIAL_ID_CAR_COUPON_FULL_TUNED_RECEIVABLE = 26,
  TUTORIAL_ID_VS_CONTINUE_TICKET = 27,
  TUTORIAL_ID_UNUSED_28 = 28,
  TUTORIAL_ID_UNUSED_29 = 29,
  TUTORIAL_ID_UNUSED_30 = 30,
  TUTORIAL_ID_DRESS_UP = 31,
  TUTORIAL_ID_MULTI_GHOST = 32,
  TUTORIAL_ID_STORY_NEW_FEATURE = 33,
  TUTORIAL_ID_GHOST_NEW_FEATURE = 34,
  TUTORIAL_ID_GHOST_REGION_MAP = 35,
  UNRECOGNIZED = -1,
}

export function tutorialTypeFromJSON(object: any): TutorialType {
  switch (object) {
    case 0:
    case "TUTORIAL_ID_STORY":
      return TutorialType.TUTORIAL_ID_STORY;
    case 1:
    case "TUTORIAL_ID_TIME_ATTACK":
      return TutorialType.TUTORIAL_ID_TIME_ATTACK;
    case 2:
    case "TUTORIAL_ID_GHOST":
      return TutorialType.TUTORIAL_ID_GHOST;
    case 3:
    case "TUTORIAL_ID_GHOST_CHALLENGE":
      return TutorialType.TUTORIAL_ID_GHOST_CHALLENGE;
    case 4:
    case "TUTORIAL_ID_GHOST_LEVEL":
      return TutorialType.TUTORIAL_ID_GHOST_LEVEL;
    case 5:
    case "TUTORIAL_ID_UNUSED_5":
      return TutorialType.TUTORIAL_ID_UNUSED_5;
    case 6:
    case "TUTORIAL_ID_GHOST_SEARCH":
      return TutorialType.TUTORIAL_ID_GHOST_SEARCH;
    case 7:
    case "TUTORIAL_ID_GHOST_COMPETITION":
      return TutorialType.TUTORIAL_ID_GHOST_COMPETITION;
    case 8:
    case "TUTORIAL_ID_HP600_CARD":
      return TutorialType.TUTORIAL_ID_HP600_CARD;
    case 9:
    case "TUTORIAL_ID_UNUSED_9":
      return TutorialType.TUTORIAL_ID_UNUSED_9;
    case 10:
    case "TUTORIAL_ID_COMPETITION_QUALIFIED":
      return TutorialType.TUTORIAL_ID_COMPETITION_QUALIFIED;
    case 11:
    case "TUTORIAL_ID_COMPETITION_TERMINAL":
      return TutorialType.TUTORIAL_ID_COMPETITION_TERMINAL;
    case 12:
    case "TUTORIAL_ID_COMPETITION_NOTICE":
      return TutorialType.TUTORIAL_ID_COMPETITION_NOTICE;
    case 13:
    case "TUTORIAL_ID_COMPETITION_FINISHED":
      return TutorialType.TUTORIAL_ID_COMPETITION_FINISHED;
    case 14:
    case "TUTORIAL_ID_UNUSED_14":
      return TutorialType.TUTORIAL_ID_UNUSED_14;
    case 15:
    case "TUTORIAL_ID_UNUSED_15":
      return TutorialType.TUTORIAL_ID_UNUSED_15;
    case 16:
    case "TUTORIAL_ID_UNUSED_16":
      return TutorialType.TUTORIAL_ID_UNUSED_16;
    case 17:
    case "TUTORIAL_ID_UNUSED_17":
      return TutorialType.TUTORIAL_ID_UNUSED_17;
    case 18:
    case "TUTORIAL_ID_UNUSED_18":
      return TutorialType.TUTORIAL_ID_UNUSED_18;
    case 19:
    case "TUTORIAL_ID_UNUSED_19":
      return TutorialType.TUTORIAL_ID_UNUSED_19;
    case 20:
    case "TUTORIAL_ID_GHOST_STAMP":
      return TutorialType.TUTORIAL_ID_GHOST_STAMP;
    case 21:
    case "TUTORIAL_ID_GHOST_STAMP_DECLINED":
      return TutorialType.TUTORIAL_ID_GHOST_STAMP_DECLINED;
    case 22:
    case "TUTORIAL_ID_GHOST_STAMP_FRIENDS":
      return TutorialType.TUTORIAL_ID_GHOST_STAMP_FRIENDS;
    case 23:
    case "TUTORIAL_ID_TERMINAL_SCRATCH":
      return TutorialType.TUTORIAL_ID_TERMINAL_SCRATCH;
    case 24:
    case "TUTORIAL_ID_TURN_SCRATCH_SHEET":
      return TutorialType.TUTORIAL_ID_TURN_SCRATCH_SHEET;
    case 25:
    case "TUTORIAL_ID_INVITE_FRIEND_CAMPAIGN":
      return TutorialType.TUTORIAL_ID_INVITE_FRIEND_CAMPAIGN;
    case 26:
    case "TUTORIAL_ID_CAR_COUPON_FULL_TUNED_RECEIVABLE":
      return TutorialType.TUTORIAL_ID_CAR_COUPON_FULL_TUNED_RECEIVABLE;
    case 27:
    case "TUTORIAL_ID_VS_CONTINUE_TICKET":
      return TutorialType.TUTORIAL_ID_VS_CONTINUE_TICKET;
    case 28:
    case "TUTORIAL_ID_UNUSED_28":
      return TutorialType.TUTORIAL_ID_UNUSED_28;
    case 29:
    case "TUTORIAL_ID_UNUSED_29":
      return TutorialType.TUTORIAL_ID_UNUSED_29;
    case 30:
    case "TUTORIAL_ID_UNUSED_30":
      return TutorialType.TUTORIAL_ID_UNUSED_30;
    case 31:
    case "TUTORIAL_ID_DRESS_UP":
      return TutorialType.TUTORIAL_ID_DRESS_UP;
    case 32:
    case "TUTORIAL_ID_MULTI_GHOST":
      return TutorialType.TUTORIAL_ID_MULTI_GHOST;
    case 33:
    case "TUTORIAL_ID_STORY_NEW_FEATURE":
      return TutorialType.TUTORIAL_ID_STORY_NEW_FEATURE;
    case 34:
    case "TUTORIAL_ID_GHOST_NEW_FEATURE":
      return TutorialType.TUTORIAL_ID_GHOST_NEW_FEATURE;
    case 35:
    case "TUTORIAL_ID_GHOST_REGION_MAP":
      return TutorialType.TUTORIAL_ID_GHOST_REGION_MAP;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TutorialType.UNRECOGNIZED;
  }
}

export function tutorialTypeToJSON(object: TutorialType): string {
  switch (object) {
    case TutorialType.TUTORIAL_ID_STORY:
      return "TUTORIAL_ID_STORY";
    case TutorialType.TUTORIAL_ID_TIME_ATTACK:
      return "TUTORIAL_ID_TIME_ATTACK";
    case TutorialType.TUTORIAL_ID_GHOST:
      return "TUTORIAL_ID_GHOST";
    case TutorialType.TUTORIAL_ID_GHOST_CHALLENGE:
      return "TUTORIAL_ID_GHOST_CHALLENGE";
    case TutorialType.TUTORIAL_ID_GHOST_LEVEL:
      return "TUTORIAL_ID_GHOST_LEVEL";
    case TutorialType.TUTORIAL_ID_UNUSED_5:
      return "TUTORIAL_ID_UNUSED_5";
    case TutorialType.TUTORIAL_ID_GHOST_SEARCH:
      return "TUTORIAL_ID_GHOST_SEARCH";
    case TutorialType.TUTORIAL_ID_GHOST_COMPETITION:
      return "TUTORIAL_ID_GHOST_COMPETITION";
    case TutorialType.TUTORIAL_ID_HP600_CARD:
      return "TUTORIAL_ID_HP600_CARD";
    case TutorialType.TUTORIAL_ID_UNUSED_9:
      return "TUTORIAL_ID_UNUSED_9";
    case TutorialType.TUTORIAL_ID_COMPETITION_QUALIFIED:
      return "TUTORIAL_ID_COMPETITION_QUALIFIED";
    case TutorialType.TUTORIAL_ID_COMPETITION_TERMINAL:
      return "TUTORIAL_ID_COMPETITION_TERMINAL";
    case TutorialType.TUTORIAL_ID_COMPETITION_NOTICE:
      return "TUTORIAL_ID_COMPETITION_NOTICE";
    case TutorialType.TUTORIAL_ID_COMPETITION_FINISHED:
      return "TUTORIAL_ID_COMPETITION_FINISHED";
    case TutorialType.TUTORIAL_ID_UNUSED_14:
      return "TUTORIAL_ID_UNUSED_14";
    case TutorialType.TUTORIAL_ID_UNUSED_15:
      return "TUTORIAL_ID_UNUSED_15";
    case TutorialType.TUTORIAL_ID_UNUSED_16:
      return "TUTORIAL_ID_UNUSED_16";
    case TutorialType.TUTORIAL_ID_UNUSED_17:
      return "TUTORIAL_ID_UNUSED_17";
    case TutorialType.TUTORIAL_ID_UNUSED_18:
      return "TUTORIAL_ID_UNUSED_18";
    case TutorialType.TUTORIAL_ID_UNUSED_19:
      return "TUTORIAL_ID_UNUSED_19";
    case TutorialType.TUTORIAL_ID_GHOST_STAMP:
      return "TUTORIAL_ID_GHOST_STAMP";
    case TutorialType.TUTORIAL_ID_GHOST_STAMP_DECLINED:
      return "TUTORIAL_ID_GHOST_STAMP_DECLINED";
    case TutorialType.TUTORIAL_ID_GHOST_STAMP_FRIENDS:
      return "TUTORIAL_ID_GHOST_STAMP_FRIENDS";
    case TutorialType.TUTORIAL_ID_TERMINAL_SCRATCH:
      return "TUTORIAL_ID_TERMINAL_SCRATCH";
    case TutorialType.TUTORIAL_ID_TURN_SCRATCH_SHEET:
      return "TUTORIAL_ID_TURN_SCRATCH_SHEET";
    case TutorialType.TUTORIAL_ID_INVITE_FRIEND_CAMPAIGN:
      return "TUTORIAL_ID_INVITE_FRIEND_CAMPAIGN";
    case TutorialType.TUTORIAL_ID_CAR_COUPON_FULL_TUNED_RECEIVABLE:
      return "TUTORIAL_ID_CAR_COUPON_FULL_TUNED_RECEIVABLE";
    case TutorialType.TUTORIAL_ID_VS_CONTINUE_TICKET:
      return "TUTORIAL_ID_VS_CONTINUE_TICKET";
    case TutorialType.TUTORIAL_ID_UNUSED_28:
      return "TUTORIAL_ID_UNUSED_28";
    case TutorialType.TUTORIAL_ID_UNUSED_29:
      return "TUTORIAL_ID_UNUSED_29";
    case TutorialType.TUTORIAL_ID_UNUSED_30:
      return "TUTORIAL_ID_UNUSED_30";
    case TutorialType.TUTORIAL_ID_DRESS_UP:
      return "TUTORIAL_ID_DRESS_UP";
    case TutorialType.TUTORIAL_ID_MULTI_GHOST:
      return "TUTORIAL_ID_MULTI_GHOST";
    case TutorialType.TUTORIAL_ID_STORY_NEW_FEATURE:
      return "TUTORIAL_ID_STORY_NEW_FEATURE";
    case TutorialType.TUTORIAL_ID_GHOST_NEW_FEATURE:
      return "TUTORIAL_ID_GHOST_NEW_FEATURE";
    case TutorialType.TUTORIAL_ID_GHOST_REGION_MAP:
      return "TUTORIAL_ID_GHOST_REGION_MAP";
    case TutorialType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum GameMode {
  MODE_STORY = 1,
  MODE_TIME_ATTACK = 2,
  MODE_VS_BATTLE = 3,
  MODE_GHOST_BATTLE = 4,
  MODE_EVENT = 5,
  UNRECOGNIZED = -1,
}

export function gameModeFromJSON(object: any): GameMode {
  switch (object) {
    case 1:
    case "MODE_STORY":
      return GameMode.MODE_STORY;
    case 2:
    case "MODE_TIME_ATTACK":
      return GameMode.MODE_TIME_ATTACK;
    case 3:
    case "MODE_VS_BATTLE":
      return GameMode.MODE_VS_BATTLE;
    case 4:
    case "MODE_GHOST_BATTLE":
      return GameMode.MODE_GHOST_BATTLE;
    case 5:
    case "MODE_EVENT":
      return GameMode.MODE_EVENT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GameMode.UNRECOGNIZED;
  }
}

export function gameModeToJSON(object: GameMode): string {
  switch (object) {
    case GameMode.MODE_STORY:
      return "MODE_STORY";
    case GameMode.MODE_TIME_ATTACK:
      return "MODE_TIME_ATTACK";
    case GameMode.MODE_VS_BATTLE:
      return "MODE_VS_BATTLE";
    case GameMode.MODE_GHOST_BATTLE:
      return "MODE_GHOST_BATTLE";
    case GameMode.MODE_EVENT:
      return "MODE_EVENT";
    case GameMode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum GhostType {
  GHOST_NORMAL = 1,
  GHOST_PINCH_RUNNER = 2,
  GHOST_DEFAULT = 3,
  UNRECOGNIZED = -1,
}

export function ghostTypeFromJSON(object: any): GhostType {
  switch (object) {
    case 1:
    case "GHOST_NORMAL":
      return GhostType.GHOST_NORMAL;
    case 2:
    case "GHOST_PINCH_RUNNER":
      return GhostType.GHOST_PINCH_RUNNER;
    case 3:
    case "GHOST_DEFAULT":
      return GhostType.GHOST_DEFAULT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GhostType.UNRECOGNIZED;
  }
}

export function ghostTypeToJSON(object: GhostType): string {
  switch (object) {
    case GhostType.GHOST_NORMAL:
      return "GHOST_NORMAL";
    case GhostType.GHOST_PINCH_RUNNER:
      return "GHOST_PINCH_RUNNER";
    case GhostType.GHOST_DEFAULT:
      return "GHOST_DEFAULT";
    case GhostType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum GhostSelectionMethod {
  GHOST_SEARCH_BY_REGION = 1,
  GHOST_SELECT_BY_LEVEL = 2,
  GHOST_SELECT_CROWN_MATCH = 3,
  GHOST_SELECT_STAMP_MATCH = 4,
  GHOST_SELECT_FROM_HISTORY = 5,
  GHOST_SEARCH_BY_SHOP = 6,
  GHOST_SEARCH_BY_NAME = 7,
  GHOST_ACCEPT_CHALLENGER = 8,
  GHOST_APPOINTMENT = 9,
  GHOST_DEFAULT_OPPONENT = 10,
  GHOST_COMPETITION = 11,
  GHOST_SELECT_FROM_BOOKMARKS = 12,
  UNRECOGNIZED = -1,
}

export function ghostSelectionMethodFromJSON(
  object: any
): GhostSelectionMethod {
  switch (object) {
    case 1:
    case "GHOST_SEARCH_BY_REGION":
      return GhostSelectionMethod.GHOST_SEARCH_BY_REGION;
    case 2:
    case "GHOST_SELECT_BY_LEVEL":
      return GhostSelectionMethod.GHOST_SELECT_BY_LEVEL;
    case 3:
    case "GHOST_SELECT_CROWN_MATCH":
      return GhostSelectionMethod.GHOST_SELECT_CROWN_MATCH;
    case 4:
    case "GHOST_SELECT_STAMP_MATCH":
      return GhostSelectionMethod.GHOST_SELECT_STAMP_MATCH;
    case 5:
    case "GHOST_SELECT_FROM_HISTORY":
      return GhostSelectionMethod.GHOST_SELECT_FROM_HISTORY;
    case 6:
    case "GHOST_SEARCH_BY_SHOP":
      return GhostSelectionMethod.GHOST_SEARCH_BY_SHOP;
    case 7:
    case "GHOST_SEARCH_BY_NAME":
      return GhostSelectionMethod.GHOST_SEARCH_BY_NAME;
    case 8:
    case "GHOST_ACCEPT_CHALLENGER":
      return GhostSelectionMethod.GHOST_ACCEPT_CHALLENGER;
    case 9:
    case "GHOST_APPOINTMENT":
      return GhostSelectionMethod.GHOST_APPOINTMENT;
    case 10:
    case "GHOST_DEFAULT_OPPONENT":
      return GhostSelectionMethod.GHOST_DEFAULT_OPPONENT;
    case 11:
    case "GHOST_COMPETITION":
      return GhostSelectionMethod.GHOST_COMPETITION;
    case 12:
    case "GHOST_SELECT_FROM_BOOKMARKS":
      return GhostSelectionMethod.GHOST_SELECT_FROM_BOOKMARKS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GhostSelectionMethod.UNRECOGNIZED;
  }
}

export function ghostSelectionMethodToJSON(
  object: GhostSelectionMethod
): string {
  switch (object) {
    case GhostSelectionMethod.GHOST_SEARCH_BY_REGION:
      return "GHOST_SEARCH_BY_REGION";
    case GhostSelectionMethod.GHOST_SELECT_BY_LEVEL:
      return "GHOST_SELECT_BY_LEVEL";
    case GhostSelectionMethod.GHOST_SELECT_CROWN_MATCH:
      return "GHOST_SELECT_CROWN_MATCH";
    case GhostSelectionMethod.GHOST_SELECT_STAMP_MATCH:
      return "GHOST_SELECT_STAMP_MATCH";
    case GhostSelectionMethod.GHOST_SELECT_FROM_HISTORY:
      return "GHOST_SELECT_FROM_HISTORY";
    case GhostSelectionMethod.GHOST_SEARCH_BY_SHOP:
      return "GHOST_SEARCH_BY_SHOP";
    case GhostSelectionMethod.GHOST_SEARCH_BY_NAME:
      return "GHOST_SEARCH_BY_NAME";
    case GhostSelectionMethod.GHOST_ACCEPT_CHALLENGER:
      return "GHOST_ACCEPT_CHALLENGER";
    case GhostSelectionMethod.GHOST_APPOINTMENT:
      return "GHOST_APPOINTMENT";
    case GhostSelectionMethod.GHOST_DEFAULT_OPPONENT:
      return "GHOST_DEFAULT_OPPONENT";
    case GhostSelectionMethod.GHOST_COMPETITION:
      return "GHOST_COMPETITION";
    case GhostSelectionMethod.GHOST_SELECT_FROM_BOOKMARKS:
      return "GHOST_SELECT_FROM_BOOKMARKS";
    case GhostSelectionMethod.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum GhostRateType {
  GHOST_RATE_UNKNOWN = 1,
  GHOST_RATE_INVALID = 2,
  GHOST_RATE_VALID = 3,
  UNRECOGNIZED = -1,
}

export function ghostRateTypeFromJSON(object: any): GhostRateType {
  switch (object) {
    case 1:
    case "GHOST_RATE_UNKNOWN":
      return GhostRateType.GHOST_RATE_UNKNOWN;
    case 2:
    case "GHOST_RATE_INVALID":
      return GhostRateType.GHOST_RATE_INVALID;
    case 3:
    case "GHOST_RATE_VALID":
      return GhostRateType.GHOST_RATE_VALID;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GhostRateType.UNRECOGNIZED;
  }
}

export function ghostRateTypeToJSON(object: GhostRateType): string {
  switch (object) {
    case GhostRateType.GHOST_RATE_UNKNOWN:
      return "GHOST_RATE_UNKNOWN";
    case GhostRateType.GHOST_RATE_INVALID:
      return "GHOST_RATE_INVALID";
    case GhostRateType.GHOST_RATE_VALID:
      return "GHOST_RATE_VALID";
    case GhostRateType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum PathSelectionMethod {
  PATH_NEW = 1,
  PATH_PLAIN = 2,
  PATH_FRIEND = 3,
  PATH_NORMAL = 4,
  PATH_CHALLENGER = 5,
  UNRECOGNIZED = -1,
}

export function pathSelectionMethodFromJSON(object: any): PathSelectionMethod {
  switch (object) {
    case 1:
    case "PATH_NEW":
      return PathSelectionMethod.PATH_NEW;
    case 2:
    case "PATH_PLAIN":
      return PathSelectionMethod.PATH_PLAIN;
    case 3:
    case "PATH_FRIEND":
      return PathSelectionMethod.PATH_FRIEND;
    case 4:
    case "PATH_NORMAL":
      return PathSelectionMethod.PATH_NORMAL;
    case 5:
    case "PATH_CHALLENGER":
      return PathSelectionMethod.PATH_CHALLENGER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PathSelectionMethod.UNRECOGNIZED;
  }
}

export function pathSelectionMethodToJSON(object: PathSelectionMethod): string {
  switch (object) {
    case PathSelectionMethod.PATH_NEW:
      return "PATH_NEW";
    case PathSelectionMethod.PATH_PLAIN:
      return "PATH_PLAIN";
    case PathSelectionMethod.PATH_FRIEND:
      return "PATH_FRIEND";
    case PathSelectionMethod.PATH_NORMAL:
      return "PATH_NORMAL";
    case PathSelectionMethod.PATH_CHALLENGER:
      return "PATH_CHALLENGER";
    case PathSelectionMethod.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum NoticeEntry {
  NOTICE_UNUSED_1 = 1,
  NOTICE_UNUSED_2 = 2,
  NOTICE_UNUSED_3 = 3,
  NOTICE_UNUSED_4 = 4,
  NOTICE_UNUSED_5 = 5,
  NOTICE_UNUSED_6 = 6,
  NOTICE_UNUSED_7 = 7,
  NOTICE_UNUSED_8 = 8,
  NOTICE_UNUSED_9 = 9,
  NOTICE_UNUSED_10 = 10,
  NOTICE_UNUSED_11 = 11,
  NOTICE_UNUSED_12 = 12,
  UNRECOGNIZED = -1,
}

export function noticeEntryFromJSON(object: any): NoticeEntry {
  switch (object) {
    case 1:
    case "NOTICE_UNUSED_1":
      return NoticeEntry.NOTICE_UNUSED_1;
    case 2:
    case "NOTICE_UNUSED_2":
      return NoticeEntry.NOTICE_UNUSED_2;
    case 3:
    case "NOTICE_UNUSED_3":
      return NoticeEntry.NOTICE_UNUSED_3;
    case 4:
    case "NOTICE_UNUSED_4":
      return NoticeEntry.NOTICE_UNUSED_4;
    case 5:
    case "NOTICE_UNUSED_5":
      return NoticeEntry.NOTICE_UNUSED_5;
    case 6:
    case "NOTICE_UNUSED_6":
      return NoticeEntry.NOTICE_UNUSED_6;
    case 7:
    case "NOTICE_UNUSED_7":
      return NoticeEntry.NOTICE_UNUSED_7;
    case 8:
    case "NOTICE_UNUSED_8":
      return NoticeEntry.NOTICE_UNUSED_8;
    case 9:
    case "NOTICE_UNUSED_9":
      return NoticeEntry.NOTICE_UNUSED_9;
    case 10:
    case "NOTICE_UNUSED_10":
      return NoticeEntry.NOTICE_UNUSED_10;
    case 11:
    case "NOTICE_UNUSED_11":
      return NoticeEntry.NOTICE_UNUSED_11;
    case 12:
    case "NOTICE_UNUSED_12":
      return NoticeEntry.NOTICE_UNUSED_12;
    case -1:
    case "UNRECOGNIZED":
    default:
      return NoticeEntry.UNRECOGNIZED;
  }
}

export function noticeEntryToJSON(object: NoticeEntry): string {
  switch (object) {
    case NoticeEntry.NOTICE_UNUSED_1:
      return "NOTICE_UNUSED_1";
    case NoticeEntry.NOTICE_UNUSED_2:
      return "NOTICE_UNUSED_2";
    case NoticeEntry.NOTICE_UNUSED_3:
      return "NOTICE_UNUSED_3";
    case NoticeEntry.NOTICE_UNUSED_4:
      return "NOTICE_UNUSED_4";
    case NoticeEntry.NOTICE_UNUSED_5:
      return "NOTICE_UNUSED_5";
    case NoticeEntry.NOTICE_UNUSED_6:
      return "NOTICE_UNUSED_6";
    case NoticeEntry.NOTICE_UNUSED_7:
      return "NOTICE_UNUSED_7";
    case NoticeEntry.NOTICE_UNUSED_8:
      return "NOTICE_UNUSED_8";
    case NoticeEntry.NOTICE_UNUSED_9:
      return "NOTICE_UNUSED_9";
    case NoticeEntry.NOTICE_UNUSED_10:
      return "NOTICE_UNUSED_10";
    case NoticeEntry.NOTICE_UNUSED_11:
      return "NOTICE_UNUSED_11";
    case NoticeEntry.NOTICE_UNUSED_12:
      return "NOTICE_UNUSED_12";
    case NoticeEntry.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum FileType {
  FILE_PROMOTION_ANNOUNCEMENT = 1,
  FILE_FEATURE_ANNOUNCEMENT = 4,
  FILE_SPAPP_ANNOUNCEMENT = 6,
  UNRECOGNIZED = -1,
}

export function fileTypeFromJSON(object: any): FileType {
  switch (object) {
    case 1:
    case "FILE_PROMOTION_ANNOUNCEMENT":
      return FileType.FILE_PROMOTION_ANNOUNCEMENT;
    case 4:
    case "FILE_FEATURE_ANNOUNCEMENT":
      return FileType.FILE_FEATURE_ANNOUNCEMENT;
    case 6:
    case "FILE_SPAPP_ANNOUNCEMENT":
      return FileType.FILE_SPAPP_ANNOUNCEMENT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return FileType.UNRECOGNIZED;
  }
}

export function fileTypeToJSON(object: FileType): string {
  switch (object) {
    case FileType.FILE_PROMOTION_ANNOUNCEMENT:
      return "FILE_PROMOTION_ANNOUNCEMENT";
    case FileType.FILE_FEATURE_ANNOUNCEMENT:
      return "FILE_FEATURE_ANNOUNCEMENT";
    case FileType.FILE_SPAPP_ANNOUNCEMENT:
      return "FILE_SPAPP_ANNOUNCEMENT";
    case FileType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum GhostCompetitionParticipantState {
  COMPETITION_NOT_PARTICIPATED = 1,
  COMPETITION_QUALIFIED = 2,
  COMPETITION_PARTICIPATED = 3,
  COMPETITION_WON = 4,
  UNRECOGNIZED = -1,
}

export function ghostCompetitionParticipantStateFromJSON(
  object: any
): GhostCompetitionParticipantState {
  switch (object) {
    case 1:
    case "COMPETITION_NOT_PARTICIPATED":
      return GhostCompetitionParticipantState.COMPETITION_NOT_PARTICIPATED;
    case 2:
    case "COMPETITION_QUALIFIED":
      return GhostCompetitionParticipantState.COMPETITION_QUALIFIED;
    case 3:
    case "COMPETITION_PARTICIPATED":
      return GhostCompetitionParticipantState.COMPETITION_PARTICIPATED;
    case 4:
    case "COMPETITION_WON":
      return GhostCompetitionParticipantState.COMPETITION_WON;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GhostCompetitionParticipantState.UNRECOGNIZED;
  }
}

export function ghostCompetitionParticipantStateToJSON(
  object: GhostCompetitionParticipantState
): string {
  switch (object) {
    case GhostCompetitionParticipantState.COMPETITION_NOT_PARTICIPATED:
      return "COMPETITION_NOT_PARTICIPATED";
    case GhostCompetitionParticipantState.COMPETITION_QUALIFIED:
      return "COMPETITION_QUALIFIED";
    case GhostCompetitionParticipantState.COMPETITION_PARTICIPATED:
      return "COMPETITION_PARTICIPATED";
    case GhostCompetitionParticipantState.COMPETITION_WON:
      return "COMPETITION_WON";
    case GhostCompetitionParticipantState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ScreenshotType {
  SS_GHOST_BATTLE = 1,
  SS_VERSUS_BATTLE = 2,
  SS_TERMINAL = 3,
  SS_ACQUIRING_VERSUS_STAR = 4,
  SS_ACQUIRING_AURA_MOTIF = 5,
  SS_GHOST_REGION_MAP = 6,
  SS_ACQUIRING_CROWN = 7,
  SS_GHOST_COMPETITION_RESULT = 8,
  SS_TIME_ATTACK_RESULT = 9,
  SS_LEVEL_UP = 10,
  UNRECOGNIZED = -1,
}

export function screenshotTypeFromJSON(object: any): ScreenshotType {
  switch (object) {
    case 1:
    case "SS_GHOST_BATTLE":
      return ScreenshotType.SS_GHOST_BATTLE;
    case 2:
    case "SS_VERSUS_BATTLE":
      return ScreenshotType.SS_VERSUS_BATTLE;
    case 3:
    case "SS_TERMINAL":
      return ScreenshotType.SS_TERMINAL;
    case 4:
    case "SS_ACQUIRING_VERSUS_STAR":
      return ScreenshotType.SS_ACQUIRING_VERSUS_STAR;
    case 5:
    case "SS_ACQUIRING_AURA_MOTIF":
      return ScreenshotType.SS_ACQUIRING_AURA_MOTIF;
    case 6:
    case "SS_GHOST_REGION_MAP":
      return ScreenshotType.SS_GHOST_REGION_MAP;
    case 7:
    case "SS_ACQUIRING_CROWN":
      return ScreenshotType.SS_ACQUIRING_CROWN;
    case 8:
    case "SS_GHOST_COMPETITION_RESULT":
      return ScreenshotType.SS_GHOST_COMPETITION_RESULT;
    case 9:
    case "SS_TIME_ATTACK_RESULT":
      return ScreenshotType.SS_TIME_ATTACK_RESULT;
    case 10:
    case "SS_LEVEL_UP":
      return ScreenshotType.SS_LEVEL_UP;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ScreenshotType.UNRECOGNIZED;
  }
}

export function screenshotTypeToJSON(object: ScreenshotType): string {
  switch (object) {
    case ScreenshotType.SS_GHOST_BATTLE:
      return "SS_GHOST_BATTLE";
    case ScreenshotType.SS_VERSUS_BATTLE:
      return "SS_VERSUS_BATTLE";
    case ScreenshotType.SS_TERMINAL:
      return "SS_TERMINAL";
    case ScreenshotType.SS_ACQUIRING_VERSUS_STAR:
      return "SS_ACQUIRING_VERSUS_STAR";
    case ScreenshotType.SS_ACQUIRING_AURA_MOTIF:
      return "SS_ACQUIRING_AURA_MOTIF";
    case ScreenshotType.SS_GHOST_REGION_MAP:
      return "SS_GHOST_REGION_MAP";
    case ScreenshotType.SS_ACQUIRING_CROWN:
      return "SS_ACQUIRING_CROWN";
    case ScreenshotType.SS_GHOST_COMPETITION_RESULT:
      return "SS_GHOST_COMPETITION_RESULT";
    case ScreenshotType.SS_TIME_ATTACK_RESULT:
      return "SS_TIME_ATTACK_RESULT";
    case ScreenshotType.SS_LEVEL_UP:
      return "SS_LEVEL_UP";
    case ScreenshotType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum TransferState {
  NOT_REGISTERED = 0,
  NEW_REGISTRATION = 1,
  TRANSFER_REQUIRED = 2,
  TRANSFERRING = 3,
  TRANSFERRED = 4,
  UNRECOGNIZED = -1,
}

export function transferStateFromJSON(object: any): TransferState {
  switch (object) {
    case 0:
    case "NOT_REGISTERED":
      return TransferState.NOT_REGISTERED;
    case 1:
    case "NEW_REGISTRATION":
      return TransferState.NEW_REGISTRATION;
    case 2:
    case "TRANSFER_REQUIRED":
      return TransferState.TRANSFER_REQUIRED;
    case 3:
    case "TRANSFERRING":
      return TransferState.TRANSFERRING;
    case 4:
    case "TRANSFERRED":
      return TransferState.TRANSFERRED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TransferState.UNRECOGNIZED;
  }
}

export function transferStateToJSON(object: TransferState): string {
  switch (object) {
    case TransferState.NOT_REGISTERED:
      return "NOT_REGISTERED";
    case TransferState.NEW_REGISTRATION:
      return "NEW_REGISTRATION";
    case TransferState.TRANSFER_REQUIRED:
      return "TRANSFER_REQUIRED";
    case TransferState.TRANSFERRING:
      return "TRANSFERRING";
    case TransferState.TRANSFERRED:
      return "TRANSFERRED";
    case TransferState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum EventModeSerialErrorCode {
  SERIAL_SUCCESS = 0,
  SERIAL_ATTEMPT_TO_CHANGE = 1,
  SERIAL_NO_INPUT = 2,
  SERIAL_INVALID = 3,
  SERIAL_EXPIRED = 4,
  SERIAL_OTHER_PLACE = 5,
  UNRECOGNIZED = -1,
}

export function eventModeSerialErrorCodeFromJSON(
  object: any
): EventModeSerialErrorCode {
  switch (object) {
    case 0:
    case "SERIAL_SUCCESS":
      return EventModeSerialErrorCode.SERIAL_SUCCESS;
    case 1:
    case "SERIAL_ATTEMPT_TO_CHANGE":
      return EventModeSerialErrorCode.SERIAL_ATTEMPT_TO_CHANGE;
    case 2:
    case "SERIAL_NO_INPUT":
      return EventModeSerialErrorCode.SERIAL_NO_INPUT;
    case 3:
    case "SERIAL_INVALID":
      return EventModeSerialErrorCode.SERIAL_INVALID;
    case 4:
    case "SERIAL_EXPIRED":
      return EventModeSerialErrorCode.SERIAL_EXPIRED;
    case 5:
    case "SERIAL_OTHER_PLACE":
      return EventModeSerialErrorCode.SERIAL_OTHER_PLACE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EventModeSerialErrorCode.UNRECOGNIZED;
  }
}

export function eventModeSerialErrorCodeToJSON(
  object: EventModeSerialErrorCode
): string {
  switch (object) {
    case EventModeSerialErrorCode.SERIAL_SUCCESS:
      return "SERIAL_SUCCESS";
    case EventModeSerialErrorCode.SERIAL_ATTEMPT_TO_CHANGE:
      return "SERIAL_ATTEMPT_TO_CHANGE";
    case EventModeSerialErrorCode.SERIAL_NO_INPUT:
      return "SERIAL_NO_INPUT";
    case EventModeSerialErrorCode.SERIAL_INVALID:
      return "SERIAL_INVALID";
    case EventModeSerialErrorCode.SERIAL_EXPIRED:
      return "SERIAL_EXPIRED";
    case EventModeSerialErrorCode.SERIAL_OTHER_PLACE:
      return "SERIAL_OTHER_PLACE";
    case EventModeSerialErrorCode.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum ClientLogType {
  LOG_LOAD_REPORT = 0,
  LOG_ERROR = 1,
  UNRECOGNIZED = -1,
}

export function clientLogTypeFromJSON(object: any): ClientLogType {
  switch (object) {
    case 0:
    case "LOG_LOAD_REPORT":
      return ClientLogType.LOG_LOAD_REPORT;
    case 1:
    case "LOG_ERROR":
      return ClientLogType.LOG_ERROR;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ClientLogType.UNRECOGNIZED;
  }
}

export function clientLogTypeToJSON(object: ClientLogType): string {
  switch (object) {
    case ClientLogType.LOG_LOAD_REPORT:
      return "LOG_LOAD_REPORT";
    case ClientLogType.LOG_ERROR:
      return "LOG_ERROR";
    case ClientLogType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum SmartphoneAppState {
  SPAPP_UNREGISTERED = 0,
  SPAPP_KTID = 1,
  SPAPP_BNID = 2,
  UNRECOGNIZED = -1,
}

export function smartphoneAppStateFromJSON(object: any): SmartphoneAppState {
  switch (object) {
    case 0:
    case "SPAPP_UNREGISTERED":
      return SmartphoneAppState.SPAPP_UNREGISTERED;
    case 1:
    case "SPAPP_KTID":
      return SmartphoneAppState.SPAPP_KTID;
    case 2:
    case "SPAPP_BNID":
      return SmartphoneAppState.SPAPP_BNID;
    case -1:
    case "UNRECOGNIZED":
    default:
      return SmartphoneAppState.UNRECOGNIZED;
  }
}

export function smartphoneAppStateToJSON(object: SmartphoneAppState): string {
  switch (object) {
    case SmartphoneAppState.SPAPP_UNREGISTERED:
      return "SPAPP_UNREGISTERED";
    case SmartphoneAppState.SPAPP_KTID:
      return "SPAPP_KTID";
    case SmartphoneAppState.SPAPP_BNID:
      return "SPAPP_BNID";
    case SmartphoneAppState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface RegisterSystemInfoRequest {
  pcbSerial: string;
  terminalType: TerminalType;
  romVersion: number;
  country: string;
  lineType: LineType;
  shopName: string;
  shopNickname: string;
  allnetPlaceId: number;
  allnetRegion0: number;
  muchaPlaceId: string;
  muchaPrefectureId: number;
  regionName0: string;
  regionName1: string;
  regionName2: string;
  regionName3: string;
  timezoneOffset: number;
  systemSetting: SystemSetting | undefined;
  errorLogs: RegisterSystemInfoRequest_ErrorLogEntry[];
}

export interface RegisterSystemInfoRequest_ErrorLogEntry {
  datetime: number;
  message: string;
}

export interface RegisterSystemInfoResponse {
  error: ErrorCode;
  regionId: number;
  placeId: string;
  allowedClientLogTypes: ClientLogType[];
  featureVersion: GameFeatureVersion | undefined;
  latestCompetitionId: number;
  competitionSchedule: GhostCompetitionSchedule | undefined;
  scratchNotes: string | undefined;
  inviteFriendCampaignSchedule: InviteFriendCampaignSchedule | undefined;
  ghostSelectionMinRedoWait: number;
  ghostSelectionMaxRedoWait: number;
}

export interface RegisterSystemStatsRequest {
  pcbSerial: string;
  driveStats: RegisterSystemStatsRequest_DriveStats | undefined;
  terminalStats: RegisterSystemStatsRequest_TerminalStats | undefined;
}

export interface RegisterSystemStatsRequest_DriveStats {
  operation: number[];
  story: number[];
  versus: number[];
  ghost: number[];
  timeAttack: number[];
  event: number[];
}

export interface RegisterSystemStatsRequest_TerminalStats {
  operation: number[];
}

export interface RegisterSystemStatsResponse {
  error: ErrorCode;
}

export interface RegisterGhostTrailRequest {
  ghostSessionId: number;
  ghost: GhostCar | undefined;
  trail: Buffer;
  time: number;
  driveData: BinaryData | undefined;
  trendBinaryByArea: BinaryData | undefined;
  trendBinaryByCar: BinaryData | undefined;
  trendBinaryByUser: BinaryData | undefined;
}

export interface RegisterGhostTrailResponse {
  error: ErrorCode;
}

export interface LoadUserRequest {
  cardChipId: string;
  accessCode: string;
  cardTypeCode: number;
  cardRegionCode: number;
  device: DeviceType;
  userId: number;
  romVersion: number;
  maxCars: number;
  createUser: boolean;
}

export interface LoadUserResponse {
  error: ErrorCode;
  unlockAt: number;
  accessCode: string;
  banapassportAmId: number;
  mbid: number;
  userId: number;
  numOfOwnedCars: number;
  cars: Car[];
  carStates: LoadUserResponse_CarState[];
  unusedCarTickets: UserItem[];
  tutorials: boolean[];
  competitionUserState: GhostCompetitionParticipantState;
  windowStickerString: string;
  windowStickerFont: number;
  spappState: SmartphoneAppState;
  transferState: TransferState;
  totalVsStarCount: number;
  totalVsMedalPoint: number;
  copiedCar: CopiedCar | undefined;
  wasCreatedToday: boolean;
  participatedInInviteFriendCampaign: boolean;
}

export interface LoadUserResponse_CarState {
  hasOpponentGhost: boolean;
  competitionState: GhostCompetitionParticipantState;
  toBeDeleted: boolean;
  eventJoined: boolean;
  transferred: boolean;
  driveLastPlayedAt: number;
}

export interface UpdateUserSessionRequest {
  userId: number;
  cardChipId: string;
  accessCode: string;
  cardTypeCode: number;
  cardRegionCode: number;
  device: DeviceType;
  unlockAt: number;
  acceptVs: boolean;
}

export interface UpdateUserSessionResponse {
  error: ErrorCode;
}

export interface LoadDriveInformationRequest {
  userId: number;
}

export interface LoadDriveInformationResponse {
  error: ErrorCode;
  noticeWindow: NoticeEntry[];
  noticeWindowMessage: string[];
  transferNotice: TransferNotice | undefined;
  restrictedModels: number[];
  announceFeature: boolean;
  announceMobile: boolean;
  availableTickets: UserItem[];
}

export interface LoadCarRequest {
  carId: number;
  eventMode: boolean;
  eventModeSerial: string;
}

export interface LoadCarResponse {
  error: ErrorCode;
  car: Car | undefined;
  tuningPoint: number;
  odometer: number;
  playCount: number;
  earnedCustomColor: boolean;
  setting: CarSetting | undefined;
  vsPlayCount: number;
  vsBurstCount: number;
  vsStarCount: number;
  vsStarCountMax: number;
  vsCoolOrWild: number;
  vsSmoothOrRough: number;
  vsTripleStarMedals: number;
  vsDoubleStarMedals: number;
  vsSingleStarMedals: number;
  vsPlainMedals: number;
  rgPlayCount: number;
  rgWinCount: number;
  rgTrophy: number;
  rgPreviousVersionPlayCount: number;
  rgScore: number;
  rgRegionMapScore: number[];
  rgRegions: number[];
  rgStamp: number;
  rgAcquireAllCrowns: boolean;
  dressupLevel: number;
  dressupPoint: number;
  stPlayCount: number;
  stClearBits: number;
  stClearDivCount: number;
  stClearCount: number;
  stLoseBits: number;
  stConsecutiveWins: number;
  stConsecutiveWinsMax: number;
  stCompleted100Episodes: boolean;
  challenger: ChallengerCar | undefined;
  challengerReturnCount: number;
  numOfChallengers: number;
  opponentGhost: GhostCar | undefined;
  opponentTrailId: number;
  opponentCompetitionId: number;
  competitionParameter: GhostCompetitionParameter | undefined;
  specialTitles: string[];
  earnedTitles: string[];
  ownedItems: CarItem[];
  auraMotifAutoChange: boolean;
  screenshotCount: number;
  announceEventModePrize: boolean;
  transferred: boolean;
  driveLastPlayedAt: number;
  insurance: LoadCarResponse_StoryInsurance | undefined;
}

export interface LoadCarResponse_StoryInsurance {
  numOfRemains: number;
}

export interface CreateCarRequest {
  userId: number;
  banapassportAmId: number;
  cardChipId: string;
  accessCode: string;
  cardTypeCode: number;
  cardRegionCode: number;
  device: DeviceType;
  car: Car | undefined;
  transmission: boolean;
  timestamp: number;
  userItemId: number;
  deletedCarId: number;
}

export interface CreateCarResponse {
  error: ErrorCode;
  accessCode: string;
  banapassportAmId: number;
  mbid: number;
  userId: number;
  carId: number;
  stClearBits: number;
  stClearDivCount: number;
  stClearCount: number;
  stLoseBits: number;
  stConsecutiveWins: number;
  stConsecutiveWinsMax: number;
  fullTunedCarCouponUnreceivableAt: number;
}

export interface LoadGameHistoryRequest {
  carId: number;
}

export interface LoadGameHistoryResponse {
  error: ErrorCode;
  taRecords: LoadGameHistoryResponse_TimeAttackRecord[];
  taRankingUpdatedAt: number;
  ghostHistory: LoadGameHistoryResponse_GhostBattleRecord[];
  ghostBattleCount: number;
  ghostBattleWinCount: number;
  stampSheetCount: number;
  stampSheet: number[];
}

export interface LoadGameHistoryResponse_TimeAttackRecord {
  course: number;
  time: number;
  tunePower: number;
  tuneHandling: number;
  wholeRank: number;
  wholeParticipants: number;
  modelRank: number;
  modelParticipants: number;
}

export interface LoadGameHistoryResponse_GhostBattleRecord {
  carSetting:
    | LoadGameHistoryResponse_GhostBattleRecord_GhostCarSetting
    | undefined;
  opponent:
    | LoadGameHistoryResponse_GhostBattleRecord_GhostBattleRecordCar
    | undefined;
  mobs: LoadGameHistoryResponse_GhostBattleRecord_GhostBattleRecordCar[];
  area: number;
  playedAt: number;
  playedShopName: string;
}

export interface LoadGameHistoryResponse_GhostBattleRecord_GhostCarSetting {
  tunePower: number;
  tuneHandling: number;
}

export interface LoadGameHistoryResponse_GhostBattleRecord_GhostBattleRecordCar {
  car: Car | undefined;
  result: number;
}

export interface UpdateCarRequest {
  carId: number;
  car: Car | undefined;
  earnedItems: CarItem[];
  setting: CarSetting | undefined;
  toBeDeleted: boolean;
  auraMotifAutoChange: boolean;
  rgStamp: number;
  timestamp: number;
}

export interface UpdateCarResponse {
  error: ErrorCode;
}

export interface SaveGameResultRequest {
  carId: number;
  gameMode: GameMode;
  playedAt: number;
  playCount: number;
  retired: boolean;
  timeup: boolean;
  car: Car | undefined;
  setting: CarSetting | undefined;
  odometer: number;
  earnedCustomColor: boolean;
  confirmedTutorials: TutorialType[];
  earnedItems: CarItem[];
  earnedUserItems: UserItem[];
  preservedTitles: string[];
  neighborCars: number[];
  stResult: SaveGameResultRequest_StoryResult | undefined;
  taResult: SaveGameResultRequest_TimeAttackResult | undefined;
  vsResult: SaveGameResultRequest_VersusBattleResult | undefined;
  rgResult: SaveGameResultRequest_GhostBattleResult | undefined;
}

export interface SaveGameResultRequest_StoryResult {
  stPlayCount: number;
  stPlayedStory: number;
  tuningPoint: number;
  stClearBits: number;
  stClearDivCount: number;
  stClearCount: number;
  stLoseBits: number;
  stConsecutiveWins: number;
  stCompleted100Episodes: boolean;
  isInsuranceUsed: boolean;
}

export interface SaveGameResultRequest_TimeAttackResult {
  time: number;
  course: number;
  isMorning: boolean;
  section1Time: number;
  section2Time: number;
  section3Time: number;
  section4Time: number;
  section5Time: number;
  section6Time: number;
  section7Time: number;
  wholeRank: number;
  modelRank: number;
}

export interface SaveGameResultRequest_VersusBattleResult {
  result: number;
  survived: boolean;
  opponentCarId: number[];
  numOfPlayers: number;
  area: number;
  isMorning: boolean;
  vsPlayCount: number;
  vsBurstCount: number;
  vsStarCount: number;
  vsCoolOrWild: number;
  vsSmoothOrRough: number;
  vsTripleStarMedals: number;
  vsDoubleStarMedals: number;
  vsSingleStarMedals: number;
  vsPlainMedals: number;
}

export interface SaveGameResultRequest_GhostBattleResult {
  opponents: SaveGameResultRequest_GhostBattleResult_GhostBattleOpponent[];
  path: number;
  isMorning: boolean;
  selectionMethod: GhostSelectionMethod;
  stampSheetCount: number;
  stampSheet: number[];
  rgStamp: number;
  confirmedTransferredStampTargetCarIds: number[];
  rgPlayCount: number;
  dressupLevel: number;
  dressupPoint: number;
  rgRegionMapScore: number[];
  competitionId: number;
  periodId: number;
  brakingPoint: number;
  acquireCrown: boolean;
  acquireAllCrowns: boolean;
}

export interface SaveGameResultRequest_GhostBattleResult_GhostBattleOpponent {
  result: number;
  carId: number;
  tunePower: number;
  tuneHandling: number;
  receiveStamp: boolean;
}

export interface SaveGameResultResponse {
  error: ErrorCode;
  ghostSessionId: number;
  availableTickets: UserItem[];
}

export interface SaveChargeRequest {
  chargeLogs: SaveChargeRequest_ChargeLog[];
}

export interface SaveChargeRequest_ChargeLog {
  datetime: number;
  pcbSerial: string;
  placeId: string;
  userId: number;
}

export interface SaveChargeResponse {
  error: ErrorCode;
}

export interface LoadGhostBattleInfoRequest {
  carId: number;
}

export interface LoadGhostBattleInfoResponse {
  error: ErrorCode;
  friendCars: FriendCar[];
  challengers: ChallengerCar[];
  stampTargetCars: StampTargetCar[];
  previousVersionStampTargetCars: PreviousVersionStampTargetCar[];
  bookmarkedCars: BookmarkedCar[];
  history: Car[];
  weakenedCars: LoadGhostBattleInfoResponse_WeakenedCar[];
  stampSheetCount: number;
  stampSheet: number[];
  stampReturnStats: number[];
}

export interface LoadGhostBattleInfoResponse_WeakenedCar {
  carId: number;
  consecutiveLosses: number;
}

export interface LoadStampTargetRequest {
  carId: number;
  needToPromote: boolean;
}

export interface LoadStampTargetResponse {
  error: ErrorCode;
  cars: StampTargetCar[];
  challengers: ChallengerCar[];
}

export interface LockStampTargetRequest {
  carId: number;
  targetCars: number[];
}

export interface LockStampTargetResponse {
  error: ErrorCode;
}

export interface LoadGhostCompetitionInfoRequest {
  carId: number;
  competitionId: number;
}

export interface LoadGhostCompetitionInfoResponse {
  error: ErrorCode;
  periodId: number;
  closed: boolean;
  brakingPoint: number;
  qualified: boolean;
  topResults: number[];
  result: number;
  rank: number;
  parameters1: number[];
  parameters2: boolean;
}

export interface LoadTimeAttackRecordRequest {
  carId: number;
  model: number;
  course: number;
}

export interface LoadTimeAttackRecordResponse {
  error: ErrorCode;
  wholeRanking: number[];
  modelRanking: number[];
  personalBestTime: number;
  pbSection1Time: number;
  pbSection2Time: number;
  pbSection3Time: number;
  pbSection4Time: number;
  pbSection5Time: number;
  pbSection6Time: number;
  pbSection7Time: number;
}

export interface SaveTerminalResultRequest {
  userId: number;
  timestamp: number;
  carOrder: number[];
  confirmedTutorials: TutorialType[];
  garageMenuEntered: boolean;
}

export interface SaveTerminalResultResponse {
  error: ErrorCode;
}

export interface PingRequest {
  ping: number;
}

export interface PingResponse {
  error: ErrorCode;
  pong: number;
}

export interface LoadTerminalInformationRequest {
  userId: number;
}

export interface LoadTerminalInformationResponse {
  error: ErrorCode;
  prizeReceivable: boolean;
  noticeEntries: LoadTerminalInformationResponse_TerminalNotice[];
  noticeMessage: string[];
  noticeWindow: NoticeEntry[];
  noticeWindowMessage: string[];
  transferNotice: TransferNotice | undefined;
  announceFeature: boolean;
  freeScratched: boolean;
  restrictedModels: number[];
}

export interface LoadTerminalInformationResponse_TerminalNotice {
  noticeType: NoticeEntry;
  field1: string;
  field2: number;
  field3: number;
}

export interface CreateUserRequest {
  banapassportAmId: number;
  cardChipId: string;
  accessCode: string;
  cardTypeCode: number;
  cardRegionCode: number;
  device: DeviceType;
  timestamp: number;
}

export interface CreateUserResponse {
  error: ErrorCode;
  accessCode: string;
  banapassportAmId: number;
  mbid: number;
  userId: number;
}

export interface AskAccessCodeRequest {
  cardChipId: string;
}

export interface AskAccessCodeResponse {
  error: ErrorCode;
  accessCode: string;
}

export interface RegisterOpponentGhostRequest {
  carId: number;
  specialGhostId: number;
}

export interface RegisterOpponentGhostResponse {
  error: ErrorCode;
}

export interface GrantCarRightRequest {
  userId: number;
  targetUserId: number;
  timestamp: number;
}

export interface GrantCarRightResponse {
  error: ErrorCode;
}

export interface LoadGhostCompetitionRankingRequest {
  carId: number;
  competitionId: number;
}

export interface LoadGhostCompetitionRankingResponse {
  error: ErrorCode;
  periodId: number;
  numOfParticipants: number;
  competitionSchedule: GhostCompetitionSchedule | undefined;
  ownRecord: LoadGhostCompetitionRankingResponse_Entry | undefined;
  topRecords: LoadGhostCompetitionRankingResponse_Entry[];
}

export interface LoadGhostCompetitionRankingResponse_Entry {
  rank: number;
  result: number;
  carId: number;
  name: string;
  regionId: number;
  model: number;
  visualModel: number;
  defaultColor: number;
  title: string;
  level: number;
  windowStickerString: string;
  playedShopName: string;
  playedAt: number;
}

export interface LoadUnreceivedUserItemsRequest {
  userId: number;
}

export interface LoadUnreceivedUserItemsResponse {
  error: ErrorCode;
  ownedUserItems: UserItem[];
}

export interface LoadBookmarksRequest {
  userId: number;
}

export interface LoadBookmarksResponse {
  error: ErrorCode;
  cars: Car[];
}

export interface SaveBookmarksRequest {
  userId: number;
  cars: number[];
}

export interface SaveBookmarksResponse {
  error: ErrorCode;
}

export interface StartTransferRequest {
  banapassportAmId: number;
}

export interface StartTransferResponse {
  error: ErrorCode;
  userId: number;
  pollingInterval: number;
}

export interface SaveScreenshotRequest {
  carId: number;
  timestamp: number;
  playedAt: number;
  transparent: boolean;
  imageType: ScreenshotType;
  image: Buffer;
  ghostMetadata: SaveScreenshotRequest_GhostBattleMetadata | undefined;
  versusMetadata: SaveScreenshotRequest_VersusBattleMetadata | undefined;
  terminalMetadata: SaveScreenshotRequest_TerminalMetadata | undefined;
  acquiringVsStarMetadata:
    | SaveScreenshotRequest_AcquiringVersusStarMetadata
    | undefined;
  acquiringAuraMotifMetadata:
    | SaveScreenshotRequest_AcquiringAuraMotifMetadata
    | undefined;
  ghostRegionMapMetadata:
    | SaveScreenshotRequest_GhostRegionMapMetadata
    | undefined;
  acquiringCrownMetadata:
    | SaveScreenshotRequest_AcquiringCrownMetadata
    | undefined;
  competitionResultMetadata:
    | SaveScreenshotRequest_GhostCompetitionResultMetadata
    | undefined;
  timeAttackResultMetadata:
    | SaveScreenshotRequest_TimeAttackResultMetadata
    | undefined;
  levelUpMetadata: SaveScreenshotRequest_LevelUpMetadata | undefined;
}

export interface SaveScreenshotRequest_GhostBattleMetadata {
  tunePower: number;
  tuneHandling: number;
  area: number;
  stampReturnCount: number;
  opponents: SaveScreenshotRequest_OpponentCar[];
}

export interface SaveScreenshotRequest_VersusBattleMetadata {
  tunePower: number;
  tuneHandling: number;
  area: number;
  opponents: SaveScreenshotRequest_OpponentCar[];
}

export interface SaveScreenshotRequest_TerminalMetadata {
  tunePower: number;
  tuneHandling: number;
  name: string;
  title: string;
  level: number;
}

export interface SaveScreenshotRequest_AcquiringVersusStarMetadata {
  tunePower: number;
  tuneHandling: number;
  vsStarCount: number;
}

export interface SaveScreenshotRequest_AcquiringAuraMotifMetadata {
  tunePower: number;
  tuneHandling: number;
  auraMotif: number;
}

export interface SaveScreenshotRequest_GhostRegionMapMetadata {
  tunePower: number;
  tuneHandling: number;
  rgScore: number;
  rgRegionMapScore: number[];
}

export interface SaveScreenshotRequest_AcquiringCrownMetadata {
  tunePower: number;
  tuneHandling: number;
  area: number;
}

export interface SaveScreenshotRequest_GhostCompetitionResultMetadata {
  tunePower: number;
  tuneHandling: number;
  rank: number;
  result: number;
}

export interface SaveScreenshotRequest_TimeAttackResultMetadata {
  tunePower: number;
  tuneHandling: number;
  course: number;
  wholeRank: number;
  modelRank: number;
}

export interface SaveScreenshotRequest_LevelUpMetadata {
  tunePower: number;
  tuneHandling: number;
  level: number;
}

export interface SaveScreenshotRequest_OpponentCar {
  carId: number;
  tunePower: number;
  tuneHandling: number;
}

export interface SaveScreenshotResponse {
  error: ErrorCode;
}

export interface SubmitClientLogRequest {
  data: Buffer;
  modifiedAt: number;
  logType: ClientLogType;
}

export interface SubmitClientLogResponse {
  error: ErrorCode;
}

export interface LoadScratchInformationRequest {
  userId: number;
}

export interface LoadScratchInformationResponse {
  error: ErrorCode;
  scratchSheets: ScratchSheet[];
  currentSheet: number;
  numOfScratched: number;
  ownedUserItems: UserItem[];
}

export interface SaveScratchSheetRequest {
  timestamp: number;
  targetSheet: number;
  targetSquare: number;
  userId: number;
}

export interface SaveScratchSheetResponse {
  error: ErrorCode;
  scratchSheets: ScratchSheet[];
  currentSheet: number;
  numOfScratched: number;
  earnedItem: UserItem | undefined;
}

export interface TurnScratchSheetRequest {
  userId: number;
  targetSheet: number;
}

export interface TurnScratchSheetResponse {
  error: ErrorCode;
}

export interface CheckItemReceivableCarsRequest {
  userId: number;
  itemsToBeEarned: UserItem[];
}

export interface CheckItemReceivableCarsResponse {
  error: ErrorCode;
  carIds: number[];
}

export interface ReceiveUserItemsRequest {
  carId: number;
  targetItemIds: number[];
}

export interface ReceiveUserItemsResponse {
  error: ErrorCode;
}

export interface UpdateEventModeSerialRequest {
  eventModeSerial: string;
}

export interface UpdateEventModeSerialResponse {
  error: ErrorCode;
  serialError: EventModeSerialErrorCode;
  eventModeSerial: string;
  startAt: number;
  endAt: number;
}

export interface ParticipateInInviteFriendCampaignRequest {
  invitingUserId: number;
  invitedUserId: number;
  sourceCarId: number;
  transmission: boolean;
}

export interface ParticipateInInviteFriendCampaignResponse {
  error: ErrorCode;
}

export interface ConsumeUserItemRequest {
  userId: number;
  carId: number;
  userItemId: number;
}

export interface ConsumeUserItemResponse {
  error: ErrorCode;
}

export interface SearchCarsByLevelRequest {
  carId: number;
  ghostLevel: number;
  area: number;
  regionId: number;
}

export interface SearchCarsByLevelResponse {
  error: ErrorCode;
  ramp: number;
  path: number;
  ghosts: GhostCar[];
  selectionMethod: PathSelectionMethod;
  rates: SearchCarsByLevelResponse_Rate[];
}

export interface SearchCarsByLevelResponse_Rate {
  carId: number;
  type: GhostRateType;
  rate: number;
}

export interface LoadPathsAndTuningsRequest {
  carId: number;
  selectedCars: number[];
  returnImmediately: boolean;
  stampTargetArea: number;
}

export interface LoadPathsAndTuningsResponse {
  error: ErrorCode;
  data: LoadPathsAndTuningsResponse_CarTuningsByPath[];
}

export interface LoadPathsAndTuningsResponse_CarTuningsByPath {
  area: number;
  ramp: number;
  path: number;
  carTunings: CarTuning[];
  selectionMethod: PathSelectionMethod;
}

export interface LoadGhostDriveDataRequest {
  path: number;
  carTunings: CarTuning[];
}

export interface LoadGhostDriveDataResponse {
  error: ErrorCode;
  data: LoadGhostDriveDataResponse_GhostDriveData[];
}

export interface LoadGhostDriveDataResponse_GhostDriveData {
  carId: number;
  type: GhostType;
  driveData: BinaryData | undefined;
  trendBinaryByUser: BinaryData | undefined;
  trendBinaryByCar: BinaryData | undefined;
  trendBinaryByArea: BinaryData | undefined;
}

export interface Car {
  carId: number;
  userId: number;
  regionId: number;
  name: string;
  manufacturer: number;
  model: number;
  visualModel: number;
  defaultColor: number;
  customColor: number;
  wheel: number;
  wheelColor: number;
  aero: number;
  bonnet: number;
  wing: number;
  gtWing: GTWing | undefined;
  mirror: number;
  neon: number;
  trunk: number;
  plate: number;
  plateColor: number;
  plateNumber: number;
  tunePower: number;
  tuneHandling: number;
  title: string;
  level: number;
  windowSticker: boolean;
  windowStickerString: string;
  windowStickerFont: number;
  windowDecoration: number;
  rivalMarker: number;
  lastPlayedAt: number;
  lastPlayedPlace: Place | undefined;
  aura: number;
  auraMotif: number;
  ghostLevel: number;
  country: string;
  searchCode: string;
}

export interface CarSetting {
  carId: number;
  view: boolean;
  transmission: boolean;
  retire: boolean;
  meter: number;
  navigationMap: boolean;
  volume: number;
  bgm: number;
  nameplate: number;
  nameplateColor: number;
  terminalBackground: number;
}

export interface GTWing {
  pillar: number;
  pillarMaterial: number;
  mainWing: number;
  mainWingColor: number;
  wingTip: number;
  material: number;
}

export interface CarItem {
  category: ItemCategory;
  itemId: number;
  amount: number;
}

export interface CopiedCar {
  car: Car | undefined;
  remainingPlayCounts: number;
}

export interface FriendCar {
  car: Car | undefined;
  friendshipLevel: number;
  nonhuman: boolean;
}

export interface ChallengerCar {
  car: Car | undefined;
  stamp: number;
  result: number;
  area: number;
}

export interface StampTargetCar {
  car: Car | undefined;
  returnCount: number;
  locked: boolean;
  recommended: boolean;
}

export interface BookmarkedCar {
  car: Car | undefined;
  returnCount: number;
}

export interface PreviousVersionStampTargetCar {
  car: Car | undefined;
  returnCount: number;
  currentCarId: number;
}

export interface GhostCar {
  car: Car | undefined;
  area: number;
  ramp: number;
  path: number;
  nonhuman: boolean;
  type: GhostType;
  trailId: number;
}

export interface Place {
  placeId: string;
  shopName: string;
  regionId: number;
  country: string;
}

export interface SystemSetting {
  mCoinChute: number;
  mBuyCardCost: number;
  mGameCost: number;
  mContinueCost: number;
  mFullCourseCost: number;
  mFreePlay: boolean;
  mPcbId: number;
  mIcCardRw: boolean;
  mIcCardVender: boolean;
  mMgCardRw: boolean;
  mForceFeedback: boolean;
  mWinsAndRemains: boolean;
  mEventMode: number;
  mEventModeDist: boolean;
  mCloseType: number;
  mCloseSun: number;
  mCloseMon: number;
  mCloseTue: number;
  mCloseWed: number;
  mCloseThu: number;
  mCloseFri: number;
  mCloseSat: number;
  mCloseDay: number;
  mTouchPanel: boolean;
  mGameVol: number;
  mAttractVol: number;
  mCalibHandleCenter: number;
  mCalibAccelCenter: number;
  mCalibBrakeCenter: number;
  mCalibTouchLeft: number;
  mCalibTouchRight: number;
  mCalibTouchTop: number;
  mCalibTouchBottom: number;
}

export interface GhostCompetitionSchedule {
  competitionId: number;
  qualifyingPeriodStartAt: number;
  qualifyingPeriodCloseAt: number;
  competitionStartAt: number;
  competitionCloseAt: number;
  competitionEndAt: number;
  lengthOfPeriod: number;
  lengthOfInterval: number;
  area: number;
  minigamePatternId: number;
}

export interface GhostCompetitionParameter {
  parameters1: number[];
  parameters2: boolean;
}

export interface TransferNotice {
  needToSeeTransferred: boolean;
  totalMaxiGold: number;
  numOfPorscheCars: number;
  porscheModels: number[];
  hasR35: boolean;
}

export interface GameFeatureVersion {
  version: number;
  year: number;
  month: number;
  pluses: number;
  releaseAt: number;
}

export interface ScratchSheet {
  squares: ScratchSheet_ScratchSquare[];
}

export interface ScratchSheet_ScratchSquare {
  category: ItemCategory;
  itemId: number;
  earned: boolean;
}

export interface UserItem {
  category: ItemCategory;
  itemId: number;
  userItemId: number;
  earnedAt: number;
  expireAt: number;
}

export interface InviteFriendCampaignSchedule {
  campaignId: number;
  startAt: number;
  endAt: number;
  couponUnreceivableAt: number;
}

export interface CarTuning {
  carId: number;
  tunePower: number;
  tuneHandling: number;
  lastPlayedAt: number;
}

export interface BinaryData {
  data: Buffer;
  mergeSerial: number;
}

export interface GhostTrail {
  carId: number;
  area: number;
  ramp: number;
  path: number;
  playedAt: number;
  playedPlace: Place | undefined;
  trail: Buffer;
}

export interface PlaceList {
  places: Place[];
}

export interface GhostList {
  ghosts: GhostCar[];
}

export interface CarSummary {
  hitCount: number;
  cars: Car[];
}

export interface FileList {
  files: FileList_FileInfo[];
  interval: number;
}

export interface FileList_FileInfo {
  fileId: number;
  fileType: FileType;
  fileSize: number;
  url: string;
  sha1sum: Buffer;
  notBefore: number;
  notAfter: number;
}

export interface GhostCompetitionTarget {
  competitionId: number;
  specialGhostId: number;
  ghostCar: GhostCar | undefined;
  trailId: number;
  updatedAt: number;
  competitionSchedule: GhostCompetitionSchedule | undefined;
}

function createBaseRegisterSystemInfoRequest(): RegisterSystemInfoRequest {
  return {
    pcbSerial: "",
    terminalType: 0,
    romVersion: 0,
    country: "",
    lineType: 0,
    shopName: "",
    shopNickname: "",
    allnetPlaceId: 0,
    allnetRegion0: 0,
    muchaPlaceId: "",
    muchaPrefectureId: 0,
    regionName0: "",
    regionName1: "",
    regionName2: "",
    regionName3: "",
    timezoneOffset: 0,
    systemSetting: undefined,
    errorLogs: [],
  };
}

export const RegisterSystemInfoRequest = {
  encode(
    message: RegisterSystemInfoRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pcbSerial !== "") {
      writer.uint32(10).string(message.pcbSerial);
    }
    if (message.terminalType !== 0) {
      writer.uint32(16).int32(message.terminalType);
    }
    if (message.romVersion !== 0) {
      writer.uint32(24).uint32(message.romVersion);
    }
    if (message.country !== "") {
      writer.uint32(34).string(message.country);
    }
    if (message.lineType !== 0) {
      writer.uint32(40).int32(message.lineType);
    }
    if (message.shopName !== "") {
      writer.uint32(50).string(message.shopName);
    }
    if (message.shopNickname !== "") {
      writer.uint32(58).string(message.shopNickname);
    }
    if (message.allnetPlaceId !== 0) {
      writer.uint32(64).uint32(message.allnetPlaceId);
    }
    if (message.allnetRegion0 !== 0) {
      writer.uint32(72).uint32(message.allnetRegion0);
    }
    if (message.muchaPlaceId !== "") {
      writer.uint32(82).string(message.muchaPlaceId);
    }
    if (message.muchaPrefectureId !== 0) {
      writer.uint32(88).uint32(message.muchaPrefectureId);
    }
    if (message.regionName0 !== "") {
      writer.uint32(98).string(message.regionName0);
    }
    if (message.regionName1 !== "") {
      writer.uint32(106).string(message.regionName1);
    }
    if (message.regionName2 !== "") {
      writer.uint32(114).string(message.regionName2);
    }
    if (message.regionName3 !== "") {
      writer.uint32(122).string(message.regionName3);
    }
    if (message.timezoneOffset !== 0) {
      writer.uint32(128).sint32(message.timezoneOffset);
    }
    if (message.systemSetting !== undefined) {
      SystemSetting.encode(
        message.systemSetting,
        writer.uint32(138).fork()
      ).ldelim();
    }
    for (const v of message.errorLogs) {
      RegisterSystemInfoRequest_ErrorLogEntry.encode(
        v!,
        writer.uint32(146).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RegisterSystemInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterSystemInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pcbSerial = reader.string();
          break;
        case 2:
          message.terminalType = reader.int32() as any;
          break;
        case 3:
          message.romVersion = reader.uint32();
          break;
        case 4:
          message.country = reader.string();
          break;
        case 5:
          message.lineType = reader.int32() as any;
          break;
        case 6:
          message.shopName = reader.string();
          break;
        case 7:
          message.shopNickname = reader.string();
          break;
        case 8:
          message.allnetPlaceId = reader.uint32();
          break;
        case 9:
          message.allnetRegion0 = reader.uint32();
          break;
        case 10:
          message.muchaPlaceId = reader.string();
          break;
        case 11:
          message.muchaPrefectureId = reader.uint32();
          break;
        case 12:
          message.regionName0 = reader.string();
          break;
        case 13:
          message.regionName1 = reader.string();
          break;
        case 14:
          message.regionName2 = reader.string();
          break;
        case 15:
          message.regionName3 = reader.string();
          break;
        case 16:
          message.timezoneOffset = reader.sint32();
          break;
        case 17:
          message.systemSetting = SystemSetting.decode(reader, reader.uint32());
          break;
        case 18:
          message.errorLogs.push(
            RegisterSystemInfoRequest_ErrorLogEntry.decode(
              reader,
              reader.uint32()
            )
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RegisterSystemInfoRequest {
    return {
      pcbSerial: isSet(object.pcbSerial) ? String(object.pcbSerial) : "",
      terminalType: isSet(object.terminalType)
        ? terminalTypeFromJSON(object.terminalType)
        : 0,
      romVersion: isSet(object.romVersion) ? Number(object.romVersion) : 0,
      country: isSet(object.country) ? String(object.country) : "",
      lineType: isSet(object.lineType) ? lineTypeFromJSON(object.lineType) : 0,
      shopName: isSet(object.shopName) ? String(object.shopName) : "",
      shopNickname: isSet(object.shopNickname)
        ? String(object.shopNickname)
        : "",
      allnetPlaceId: isSet(object.allnetPlaceId)
        ? Number(object.allnetPlaceId)
        : 0,
      allnetRegion0: isSet(object.allnetRegion0)
        ? Number(object.allnetRegion0)
        : 0,
      muchaPlaceId: isSet(object.muchaPlaceId)
        ? String(object.muchaPlaceId)
        : "",
      muchaPrefectureId: isSet(object.muchaPrefectureId)
        ? Number(object.muchaPrefectureId)
        : 0,
      regionName0: isSet(object.regionName0) ? String(object.regionName0) : "",
      regionName1: isSet(object.regionName1) ? String(object.regionName1) : "",
      regionName2: isSet(object.regionName2) ? String(object.regionName2) : "",
      regionName3: isSet(object.regionName3) ? String(object.regionName3) : "",
      timezoneOffset: isSet(object.timezoneOffset)
        ? Number(object.timezoneOffset)
        : 0,
      systemSetting: isSet(object.systemSetting)
        ? SystemSetting.fromJSON(object.systemSetting)
        : undefined,
      errorLogs: Array.isArray(object?.errorLogs)
        ? object.errorLogs.map((e: any) =>
            RegisterSystemInfoRequest_ErrorLogEntry.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: RegisterSystemInfoRequest): unknown {
    const obj: any = {};
    message.pcbSerial !== undefined && (obj.pcbSerial = message.pcbSerial);
    message.terminalType !== undefined &&
      (obj.terminalType = terminalTypeToJSON(message.terminalType));
    message.romVersion !== undefined &&
      (obj.romVersion = Math.round(message.romVersion));
    message.country !== undefined && (obj.country = message.country);
    message.lineType !== undefined &&
      (obj.lineType = lineTypeToJSON(message.lineType));
    message.shopName !== undefined && (obj.shopName = message.shopName);
    message.shopNickname !== undefined &&
      (obj.shopNickname = message.shopNickname);
    message.allnetPlaceId !== undefined &&
      (obj.allnetPlaceId = Math.round(message.allnetPlaceId));
    message.allnetRegion0 !== undefined &&
      (obj.allnetRegion0 = Math.round(message.allnetRegion0));
    message.muchaPlaceId !== undefined &&
      (obj.muchaPlaceId = message.muchaPlaceId);
    message.muchaPrefectureId !== undefined &&
      (obj.muchaPrefectureId = Math.round(message.muchaPrefectureId));
    message.regionName0 !== undefined &&
      (obj.regionName0 = message.regionName0);
    message.regionName1 !== undefined &&
      (obj.regionName1 = message.regionName1);
    message.regionName2 !== undefined &&
      (obj.regionName2 = message.regionName2);
    message.regionName3 !== undefined &&
      (obj.regionName3 = message.regionName3);
    message.timezoneOffset !== undefined &&
      (obj.timezoneOffset = Math.round(message.timezoneOffset));
    message.systemSetting !== undefined &&
      (obj.systemSetting = message.systemSetting
        ? SystemSetting.toJSON(message.systemSetting)
        : undefined);
    if (message.errorLogs) {
      obj.errorLogs = message.errorLogs.map((e) =>
        e ? RegisterSystemInfoRequest_ErrorLogEntry.toJSON(e) : undefined
      );
    } else {
      obj.errorLogs = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RegisterSystemInfoRequest>, I>>(
    object: I
  ): RegisterSystemInfoRequest {
    const message = createBaseRegisterSystemInfoRequest();
    message.pcbSerial = object.pcbSerial ?? "";
    message.terminalType = object.terminalType ?? 0;
    message.romVersion = object.romVersion ?? 0;
    message.country = object.country ?? "";
    message.lineType = object.lineType ?? 0;
    message.shopName = object.shopName ?? "";
    message.shopNickname = object.shopNickname ?? "";
    message.allnetPlaceId = object.allnetPlaceId ?? 0;
    message.allnetRegion0 = object.allnetRegion0 ?? 0;
    message.muchaPlaceId = object.muchaPlaceId ?? "";
    message.muchaPrefectureId = object.muchaPrefectureId ?? 0;
    message.regionName0 = object.regionName0 ?? "";
    message.regionName1 = object.regionName1 ?? "";
    message.regionName2 = object.regionName2 ?? "";
    message.regionName3 = object.regionName3 ?? "";
    message.timezoneOffset = object.timezoneOffset ?? 0;
    message.systemSetting =
      object.systemSetting !== undefined && object.systemSetting !== null
        ? SystemSetting.fromPartial(object.systemSetting)
        : undefined;
    message.errorLogs =
      object.errorLogs?.map((e) =>
        RegisterSystemInfoRequest_ErrorLogEntry.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseRegisterSystemInfoRequest_ErrorLogEntry(): RegisterSystemInfoRequest_ErrorLogEntry {
  return { datetime: 0, message: "" };
}

export const RegisterSystemInfoRequest_ErrorLogEntry = {
  encode(
    message: RegisterSystemInfoRequest_ErrorLogEntry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.datetime !== 0) {
      writer.uint32(8).uint32(message.datetime);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RegisterSystemInfoRequest_ErrorLogEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterSystemInfoRequest_ErrorLogEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.datetime = reader.uint32();
          break;
        case 2:
          message.message = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RegisterSystemInfoRequest_ErrorLogEntry {
    return {
      datetime: isSet(object.datetime) ? Number(object.datetime) : 0,
      message: isSet(object.message) ? String(object.message) : "",
    };
  },

  toJSON(message: RegisterSystemInfoRequest_ErrorLogEntry): unknown {
    const obj: any = {};
    message.datetime !== undefined &&
      (obj.datetime = Math.round(message.datetime));
    message.message !== undefined && (obj.message = message.message);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<RegisterSystemInfoRequest_ErrorLogEntry>, I>
  >(object: I): RegisterSystemInfoRequest_ErrorLogEntry {
    const message = createBaseRegisterSystemInfoRequest_ErrorLogEntry();
    message.datetime = object.datetime ?? 0;
    message.message = object.message ?? "";
    return message;
  },
};

function createBaseRegisterSystemInfoResponse(): RegisterSystemInfoResponse {
  return {
    error: 0,
    regionId: 0,
    placeId: "",
    allowedClientLogTypes: [],
    featureVersion: undefined,
    latestCompetitionId: 0,
    competitionSchedule: undefined,
    scratchNotes: "",
    inviteFriendCampaignSchedule: undefined,
    ghostSelectionMinRedoWait: 0,
    ghostSelectionMaxRedoWait: 0,
  };
}

export const RegisterSystemInfoResponse = {
  encode(
    message: RegisterSystemInfoResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.error !== 0) {
      writer.uint32(8).int32(message.error);
    }
    if (message.regionId !== 0) {
      writer.uint32(16).uint32(message.regionId);
    }
    if (message.placeId !== "") {
      writer.uint32(26).string(message.placeId);
    }
    writer.uint32(34).fork();
    for (const v of message.allowedClientLogTypes) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.featureVersion !== undefined) {
      GameFeatureVersion.encode(
        message.featureVersion,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.latestCompetitionId !== 0) {
      writer.uint32(88).uint32(message.latestCompetitionId);
    }
    if (message.competitionSchedule !== undefined) {
      GhostCompetitionSchedule.encode(
        message.competitionSchedule,
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.scratchNotes !== undefined && message.scratchNotes !== "") {
      writer.uint32(154).string(message.scratchNotes as any as string);
    }
    if (message.inviteFriendCampaignSchedule !== undefined) {
      InviteFriendCampaignSchedule.encode(
        message.inviteFriendCampaignSchedule,
        writer.uint32(218).fork()
      ).ldelim();
    }
    if (message.ghostSelectionMinRedoWait !== 0) {
      writer.uint32(224).uint32(message.ghostSelectionMinRedoWait);
    }
    if (message.ghostSelectionMaxRedoWait !== 0) {
      writer.uint32(232).uint32(message.ghostSelectionMaxRedoWait);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RegisterSystemInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterSystemInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.error = reader.int32() as any;
          break;
        case 2:
          message.regionId = reader.uint32();
          break;
        case 3:
          message.placeId = reader.string();
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.allowedClientLogTypes.push(reader.int32() as any);
            }
          } else {
            message.allowedClientLogTypes.push(reader.int32() as any);
          }
          break;
        case 10:
          message.featureVersion = GameFeatureVersion.decode(
            reader,
            reader.uint32()
          );
          break;
        case 11:
          message.latestCompetitionId = reader.uint32();
          break;
        case 12:
          message.competitionSchedule = GhostCompetitionSchedule.decode(
            reader,
            reader.uint32()
          );
          break;
        case 19:
          message.scratchNotes = reader.string();
          break;
        case 27:
          message.inviteFriendCampaignSchedule =
            InviteFriendCampaignSchedule.decode(reader, reader.uint32());
          break;
        case 28:
          message.ghostSelectionMinRedoWait = reader.uint32();
          break;
        case 29:
          message.ghostSelectionMaxRedoWait = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RegisterSystemInfoResponse {
    return {
      error: isSet(object.error) ? errorCodeFromJSON(object.error) : 0,
      regionId: isSet(object.regionId) ? Number(object.regionId) : 0,
      placeId: isSet(object.placeId) ? String(object.placeId) : "",
      allowedClientLogTypes: Array.isArray(object?.allowedClientLogTypes)
        ? object.allowedClientLogTypes.map((e: any) => clientLogTypeFromJSON(e))
        : [],
      featureVersion: isSet(object.featureVersion)
        ? GameFeatureVersion.fromJSON(object.featureVersion)
        : undefined,
      latestCompetitionId: isSet(object.latestCompetitionId)
        ? Number(object.latestCompetitionId)
        : 0,
      competitionSchedule: isSet(object.competitionSchedule)
        ? GhostCompetitionSchedule.fromJSON(object.competitionSchedule)
        : undefined,
      scratchNotes: isSet(object.scratchNotes)
        ? String(object.scratchNotes)
        : "",
      inviteFriendCampaignSchedule: isSet(object.inviteFriendCampaignSchedule)
        ? InviteFriendCampaignSchedule.fromJSON(
            object.inviteFriendCampaignSchedule
          )
        : undefined,
      ghostSelectionMinRedoWait: isSet(object.ghostSelectionMinRedoWait)
        ? Number(object.ghostSelectionMinRedoWait)
        : 0,
      ghostSelectionMaxRedoWait: isSet(object.ghostSelectionMaxRedoWait)
        ? Number(object.ghostSelectionMaxRedoWait)
        : 0,
    };
  },

  toJSON(message: RegisterSystemInfoResponse): unknown {
    const obj: any = {};
    message.error !== undefined && (obj.error = errorCodeToJSON(message.error));
    message.regionId !== undefined &&
      (obj.regionId = Math.round(message.regionId));
    message.placeId !== undefined && (obj.placeId = message.placeId);
    if (message.allowedClientLogTypes) {
      obj.allowedClientLogTypes = message.allowedClientLogTypes.map((e) =>
        clientLogTypeToJSON(e)
      );
    } else {
      obj.allowedClientLogTypes = [];
    }
    message.featureVersion !== undefined &&
      (obj.featureVersion = message.featureVersion
        ? GameFeatureVersion.toJSON(message.featureVersion)
        : undefined);
    message.latestCompetitionId !== undefined &&
      (obj.latestCompetitionId = Math.round(message.latestCompetitionId));
    message.competitionSchedule !== undefined &&
      (obj.competitionSchedule = message.competitionSchedule
        ? GhostCompetitionSchedule.toJSON(message.competitionSchedule)
        : undefined);
    message.scratchNotes !== undefined &&
      (obj.scratchNotes = message.scratchNotes);
    message.inviteFriendCampaignSchedule !== undefined &&
      (obj.inviteFriendCampaignSchedule = message.inviteFriendCampaignSchedule
        ? InviteFriendCampaignSchedule.toJSON(
            message.inviteFriendCampaignSchedule
          )
        : undefined);
    message.ghostSelectionMinRedoWait !== undefined &&
      (obj.ghostSelectionMinRedoWait = Math.round(
        message.ghostSelectionMinRedoWait
      ));
    message.ghostSelectionMaxRedoWait !== undefined &&
      (obj.ghostSelectionMaxRedoWait = Math.round(
        message.ghostSelectionMaxRedoWait
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RegisterSystemInfoResponse>, I>>(
    object: I
  ): RegisterSystemInfoResponse {
    const message = createBaseRegisterSystemInfoResponse();
    message.error = object.error ?? 0;
    message.regionId = object.regionId ?? 0;
    message.placeId = object.placeId ?? "";
    message.allowedClientLogTypes =
      object.allowedClientLogTypes?.map((e) => e) || [];
    message.featureVersion =
      object.featureVersion !== undefined && object.featureVersion !== null
        ? GameFeatureVersion.fromPartial(object.featureVersion)
        : undefined;
    message.latestCompetitionId = object.latestCompetitionId ?? 0;
    message.competitionSchedule =
      object.competitionSchedule !== undefined &&
      object.competitionSchedule !== null
        ? GhostCompetitionSchedule.fromPartial(object.competitionSchedule)
        : undefined;
    message.scratchNotes = object.scratchNotes ?? "";
    message.inviteFriendCampaignSchedule =
      object.inviteFriendCampaignSchedule !== undefined &&
      object.inviteFriendCampaignSchedule !== null
        ? InviteFriendCampaignSchedule.fromPartial(
            object.inviteFriendCampaignSchedule
          )
        : undefined;
    message.ghostSelectionMinRedoWait = object.ghostSelectionMinRedoWait ?? 0;
    message.ghostSelectionMaxRedoWait = object.ghostSelectionMaxRedoWait ?? 0;
    return message;
  },
};

function createBaseRegisterSystemStatsRequest(): RegisterSystemStatsRequest {
  return { pcbSerial: "", driveStats: undefined, terminalStats: undefined };
}

export const RegisterSystemStatsRequest = {
  encode(
    message: RegisterSystemStatsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pcbSerial !== "") {
      writer.uint32(10).string(message.pcbSerial);
    }
    if (message.driveStats !== undefined) {
      RegisterSystemStatsRequest_DriveStats.encode(
        message.driveStats,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.terminalStats !== undefined) {
      RegisterSystemStatsRequest_TerminalStats.encode(
        message.terminalStats,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RegisterSystemStatsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterSystemStatsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pcbSerial = reader.string();
          break;
        case 2:
          message.driveStats = RegisterSystemStatsRequest_DriveStats.decode(
            reader,
            reader.uint32()
          );
          break;
        case 3:
          message.terminalStats =
            RegisterSystemStatsRequest_TerminalStats.decode(
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

  fromJSON(object: any): RegisterSystemStatsRequest {
    return {
      pcbSerial: isSet(object.pcbSerial) ? String(object.pcbSerial) : "",
      driveStats: isSet(object.driveStats)
        ? RegisterSystemStatsRequest_DriveStats.fromJSON(object.driveStats)
        : undefined,
      terminalStats: isSet(object.terminalStats)
        ? RegisterSystemStatsRequest_TerminalStats.fromJSON(
            object.terminalStats
          )
        : undefined,
    };
  },

  toJSON(message: RegisterSystemStatsRequest): unknown {
    const obj: any = {};
    message.pcbSerial !== undefined && (obj.pcbSerial = message.pcbSerial);
    message.driveStats !== undefined &&
      (obj.driveStats = message.driveStats
        ? RegisterSystemStatsRequest_DriveStats.toJSON(message.driveStats)
        : undefined);
    message.terminalStats !== undefined &&
      (obj.terminalStats = message.terminalStats
        ? RegisterSystemStatsRequest_TerminalStats.toJSON(message.terminalStats)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RegisterSystemStatsRequest>, I>>(
    object: I
  ): RegisterSystemStatsRequest {
    const message = createBaseRegisterSystemStatsRequest();
    message.pcbSerial = object.pcbSerial ?? "";
    message.driveStats =
      object.driveStats !== undefined && object.driveStats !== null
        ? RegisterSystemStatsRequest_DriveStats.fromPartial(object.driveStats)
        : undefined;
    message.terminalStats =
      object.terminalStats !== undefined && object.terminalStats !== null
        ? RegisterSystemStatsRequest_TerminalStats.fromPartial(
            object.terminalStats
          )
        : undefined;
    return message;
  },
};

function createBaseRegisterSystemStatsRequest_DriveStats(): RegisterSystemStatsRequest_DriveStats {
  return {
    operation: [],
    story: [],
    versus: [],
    ghost: [],
    timeAttack: [],
    event: [],
  };
}

export const RegisterSystemStatsRequest_DriveStats = {
  encode(
    message: RegisterSystemStatsRequest_DriveStats,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.operation) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(18).fork();
    for (const v of message.story) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(26).fork();
    for (const v of message.versus) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(34).fork();
    for (const v of message.ghost) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(42).fork();
    for (const v of message.timeAttack) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(50).fork();
    for (const v of message.event) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RegisterSystemStatsRequest_DriveStats {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterSystemStatsRequest_DriveStats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.operation.push(reader.uint32());
            }
          } else {
            message.operation.push(reader.uint32());
          }
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.story.push(reader.uint32());
            }
          } else {
            message.story.push(reader.uint32());
          }
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.versus.push(reader.uint32());
            }
          } else {
            message.versus.push(reader.uint32());
          }
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.ghost.push(reader.uint32());
            }
          } else {
            message.ghost.push(reader.uint32());
          }
          break;
        case 5:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.timeAttack.push(reader.uint32());
            }
          } else {
            message.timeAttack.push(reader.uint32());
          }
          break;
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.event.push(reader.uint32());
            }
          } else {
            message.event.push(reader.uint32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RegisterSystemStatsRequest_DriveStats {
    return {
      operation: Array.isArray(object?.operation)
        ? object.operation.map((e: any) => Number(e))
        : [],
      story: Array.isArray(object?.story)
        ? object.story.map((e: any) => Number(e))
        : [],
      versus: Array.isArray(object?.versus)
        ? object.versus.map((e: any) => Number(e))
        : [],
      ghost: Array.isArray(object?.ghost)
        ? object.ghost.map((e: any) => Number(e))
        : [],
      timeAttack: Array.isArray(object?.timeAttack)
        ? object.timeAttack.map((e: any) => Number(e))
        : [],
      event: Array.isArray(object?.event)
        ? object.event.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: RegisterSystemStatsRequest_DriveStats): unknown {
    const obj: any = {};
    if (message.operation) {
      obj.operation = message.operation.map((e) => Math.round(e));
    } else {
      obj.operation = [];
    }
    if (message.story) {
      obj.story = message.story.map((e) => Math.round(e));
    } else {
      obj.story = [];
    }
    if (message.versus) {
      obj.versus = message.versus.map((e) => Math.round(e));
    } else {
      obj.versus = [];
    }
    if (message.ghost) {
      obj.ghost = message.ghost.map((e) => Math.round(e));
    } else {
      obj.ghost = [];
    }
    if (message.timeAttack) {
      obj.timeAttack = message.timeAttack.map((e) => Math.round(e));
    } else {
      obj.timeAttack = [];
    }
    if (message.event) {
      obj.event = message.event.map((e) => Math.round(e));
    } else {
      obj.event = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<RegisterSystemStatsRequest_DriveStats>, I>
  >(object: I): RegisterSystemStatsRequest_DriveStats {
    const message = createBaseRegisterSystemStatsRequest_DriveStats();
    message.operation = object.operation?.map((e) => e) || [];
    message.story = object.story?.map((e) => e) || [];
    message.versus = object.versus?.map((e) => e) || [];
    message.ghost = object.ghost?.map((e) => e) || [];
    message.timeAttack = object.timeAttack?.map((e) => e) || [];
    message.event = object.event?.map((e) => e) || [];
    return message;
  },
};

function createBaseRegisterSystemStatsRequest_TerminalStats(): RegisterSystemStatsRequest_TerminalStats {
  return { operation: [] };
}

export const RegisterSystemStatsRequest_TerminalStats = {
  encode(
    message: RegisterSystemStatsRequest_TerminalStats,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.operation) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RegisterSystemStatsRequest_TerminalStats {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterSystemStatsRequest_TerminalStats();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.operation.push(reader.uint32());
            }
          } else {
            message.operation.push(reader.uint32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RegisterSystemStatsRequest_TerminalStats {
    return {
      operation: Array.isArray(object?.operation)
        ? object.operation.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: RegisterSystemStatsRequest_TerminalStats): unknown {
    const obj: any = {};
    if (message.operation) {
      obj.operation = message.operation.map((e) => Math.round(e));
    } else {
      obj.operation = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<RegisterSystemStatsRequest_TerminalStats>, I>
  >(object: I): RegisterSystemStatsRequest_TerminalStats {
    const message = createBaseRegisterSystemStatsRequest_TerminalStats();
    message.operation = object.operation?.map((e) => e) || [];
    return message;
  },
};

function createBaseRegisterSystemStatsResponse(): RegisterSystemStatsResponse {
  return { error: 0 };
}

export const RegisterSystemStatsResponse = {
  encode(
    message: RegisterSystemStatsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.error !== 0) {
      writer.uint32(8).int32(message.error);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RegisterSystemStatsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterSystemStatsResponse();
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

  fromJSON(object: any): RegisterSystemStatsResponse {
    return {
      error: isSet(object.error) ? errorCodeFromJSON(object.error) : 0,
    };
  },

  toJSON(message: RegisterSystemStatsResponse): unknown {
    const obj: any = {};
    message.error !== undefined && (obj.error = errorCodeToJSON(message.error));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RegisterSystemStatsResponse>, I>>(
    object: I
  ): RegisterSystemStatsResponse {
    const message = createBaseRegisterSystemStatsResponse();
    message.error = object.error ?? 0;
    return message;
  },
};

function createBaseRegisterGhostTrailRequest(): RegisterGhostTrailRequest {
  return {
    ghostSessionId: 0,
    ghost: undefined,
    trail: Buffer.alloc(0),
    time: 0,
    driveData: undefined,
    trendBinaryByArea: undefined,
    trendBinaryByCar: undefined,
    trendBinaryByUser: undefined,
  };
}

export const RegisterGhostTrailRequest = {
  encode(
    message: RegisterGhostTrailRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.ghostSessionId !== 0) {
      writer.uint32(8).uint64(message.ghostSessionId);
    }
    if (message.ghost !== undefined) {
      GhostCar.encode(message.ghost, writer.uint32(18).fork()).ldelim();
    }
    if (message.trail.length !== 0) {
      writer.uint32(26).bytes(message.trail);
    }
    if (message.time !== 0) {
      writer.uint32(32).uint32(message.time);
    }
    if (message.driveData !== undefined) {
      BinaryData.encode(message.driveData, writer.uint32(42).fork()).ldelim();
    }
    if (message.trendBinaryByArea !== undefined) {
      BinaryData.encode(
        message.trendBinaryByArea,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.trendBinaryByCar !== undefined) {
      BinaryData.encode(
        message.trendBinaryByCar,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.trendBinaryByUser !== undefined) {
      BinaryData.encode(
        message.trendBinaryByUser,
        writer.uint32(66).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RegisterGhostTrailRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterGhostTrailRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ghostSessionId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.ghost = GhostCar.decode(reader, reader.uint32());
          break;
        case 3:
          message.trail = reader.bytes() as Buffer;
          break;
        case 4:
          message.time = reader.uint32();
          break;
        case 5:
          message.driveData = BinaryData.decode(reader, reader.uint32());
          break;
        case 6:
          message.trendBinaryByArea = BinaryData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 7:
          message.trendBinaryByCar = BinaryData.decode(reader, reader.uint32());
          break;
        case 8:
          message.trendBinaryByUser = BinaryData.decode(
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

  fromJSON(object: any): RegisterGhostTrailRequest {
    return {
      ghostSessionId: isSet(object.ghostSessionId)
        ? Number(object.ghostSessionId)
        : 0,
      ghost: isSet(object.ghost) ? GhostCar.fromJSON(object.ghost) : undefined,
      trail: isSet(object.trail)
        ? Buffer.from(bytesFromBase64(object.trail))
        : Buffer.alloc(0),
      time: isSet(object.time) ? Number(object.time) : 0,
      driveData: isSet(object.driveData)
        ? BinaryData.fromJSON(object.driveData)
        : undefined,
      trendBinaryByArea: isSet(object.trendBinaryByArea)
        ? BinaryData.fromJSON(object.trendBinaryByArea)
        : undefined,
      trendBinaryByCar: isSet(object.trendBinaryByCar)
        ? BinaryData.fromJSON(object.trendBinaryByCar)
        : undefined,
      trendBinaryByUser: isSet(object.trendBinaryByUser)
        ? BinaryData.fromJSON(object.trendBinaryByUser)
        : undefined,
    };
  },

  toJSON(message: RegisterGhostTrailRequest): unknown {
    const obj: any = {};
    message.ghostSessionId !== undefined &&
      (obj.ghostSessionId = Math.round(message.ghostSessionId));
    message.ghost !== undefined &&
      (obj.ghost = message.ghost ? GhostCar.toJSON(message.ghost) : undefined);
    message.trail !== undefined &&
      (obj.trail = base64FromBytes(
        message.trail !== undefined ? message.trail : Buffer.alloc(0)
      ));
    message.time !== undefined && (obj.time = Math.round(message.time));
    message.driveData !== undefined &&
      (obj.driveData = message.driveData
        ? BinaryData.toJSON(message.driveData)
        : undefined);
    message.trendBinaryByArea !== undefined &&
      (obj.trendBinaryByArea = message.trendBinaryByArea
        ? BinaryData.toJSON(message.trendBinaryByArea)
        : undefined);
    message.trendBinaryByCar !== undefined &&
      (obj.trendBinaryByCar = message.trendBinaryByCar
        ? BinaryData.toJSON(message.trendBinaryByCar)
        : undefined);
    message.trendBinaryByUser !== undefined &&
      (obj.trendBinaryByUser = message.trendBinaryByUser
        ? BinaryData.toJSON(message.trendBinaryByUser)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RegisterGhostTrailRequest>, I>>(
    object: I
  ): RegisterGhostTrailRequest {
    const message = createBaseRegisterGhostTrailRequest();
    message.ghostSessionId = object.ghostSessionId ?? 0;
    message.ghost =
      object.ghost !== undefined && object.ghost !== null
        ? GhostCar.fromPartial(object.ghost)
        : undefined;
    message.trail = object.trail ?? Buffer.alloc(0);
    message.time = object.time ?? 0;
    message.driveData =
      object.driveData !== undefined && object.driveData !== null
        ? BinaryData.fromPartial(object.driveData)
        : undefined;
    message.trendBinaryByArea =
      object.trendBinaryByArea !== undefined &&
      object.trendBinaryByArea !== null
        ? BinaryData.fromPartial(object.trendBinaryByArea)
        : undefined;
    message.trendBinaryByCar =
      object.trendBinaryByCar !== undefined && object.trendBinaryByCar !== null
        ? BinaryData.fromPartial(object.trendBinaryByCar)
        : undefined;
    message.trendBinaryByUser =
      object.trendBinaryByUser !== undefined &&
      object.trendBinaryByUser !== null
        ? BinaryData.fromPartial(object.trendBinaryByUser)
        : undefined;
    return message;
  },
};

function createBaseRegisterGhostTrailResponse(): RegisterGhostTrailResponse {
  return { error: 0 };
}

export const RegisterGhostTrailResponse = {
  encode(
    message: RegisterGhostTrailResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.error !== 0) {
      writer.uint32(8).int32(message.error);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RegisterGhostTrailResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterGhostTrailResponse();
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

  fromJSON(object: any): RegisterGhostTrailResponse {
    return {
      error: isSet(object.error) ? errorCodeFromJSON(object.error) : 0,
    };
  },

  toJSON(message: RegisterGhostTrailResponse): unknown {
    const obj: any = {};
    message.error !== undefined && (obj.error = errorCodeToJSON(message.error));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RegisterGhostTrailResponse>, I>>(
    object: I
  ): RegisterGhostTrailResponse {
    const message = createBaseRegisterGhostTrailResponse();
    message.error = object.error ?? 0;
    return message;
  },
};

function createBaseLoadUserRequest(): LoadUserRequest {
  return {
    cardChipId: "",
    accessCode: "",
    cardTypeCode: 0,
    cardRegionCode: 0,
    device: 0,
    userId: 0,
    romVersion: 0,
    maxCars: 0,
    createUser: false,
  };
}

export const LoadUserRequest = {
  encode(
    message: LoadUserRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.cardChipId !== "") {
      writer.uint32(10).string(message.cardChipId);
    }
    if (message.accessCode !== "") {
      writer.uint32(18).string(message.accessCode);
    }
    if (message.cardTypeCode !== 0) {
      writer.uint32(24).uint32(message.cardTypeCode);
    }
    if (message.cardRegionCode !== 0) {
      writer.uint32(32).uint32(message.cardRegionCode);
    }
    if (message.device !== 0) {
      writer.uint32(40).int32(message.device);
    }
    if (message.userId !== 0) {
      writer.uint32(48).uint32(message.userId);
    }
    if (message.romVersion !== 0) {
      writer.uint32(56).uint32(message.romVersion);
    }
    if (message.maxCars !== 0) {
      writer.uint32(64).uint32(message.maxCars);
    }
    if (message.createUser === true) {
      writer.uint32(72).bool(message.createUser);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoadUserRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoadUserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cardChipId = reader.string();
          break;
        case 2:
          message.accessCode = reader.string();
          break;
        case 3:
          message.cardTypeCode = reader.uint32();
          break;
        case 4:
          message.cardRegionCode = reader.uint32();
          break;
        case 5:
          message.device = reader.int32() as any;
          break;
        case 6:
          message.userId = reader.uint32();
          break;
        case 7:
          message.romVersion = reader.uint32();
          break;
        case 8:
          message.maxCars = reader.uint32();
          break;
        case 9:
          message.createUser = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LoadUserRequest {
    return {
      cardChipId: isSet(object.cardChipId) ? String(object.cardChipId) : "",
      accessCode: isSet(object.accessCode) ? String(object.accessCode) : "",
      cardTypeCode: isSet(object.cardTypeCode)
        ? Number(object.cardTypeCode)
        : 0,
      cardRegionCode: isSet(object.cardRegionCode)
        ? Number(object.cardRegionCode)
        : 0,
      device: isSet(object.device) ? deviceTypeFromJSON(object.device) : 0,
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      romVersion: isSet(object.romVersion) ? Number(object.romVersion) : 0,
      maxCars: isSet(object.maxCars) ? Number(object.maxCars) : 0,
      createUser: isSet(object.createUser) ? Boolean(object.createUser) : false,
    };
  },

  toJSON(message: LoadUserRequest): unknown {
    const obj: any = {};
    message.cardChipId !== undefined && (obj.cardChipId = message.cardChipId);
    message.accessCode !== undefined && (obj.accessCode = message.accessCode);
    message.cardTypeCode !== undefined &&
      (obj.cardTypeCode = Math.round(message.cardTypeCode));
    message.cardRegionCode !== undefined &&
      (obj.cardRegionCode = Math.round(message.cardRegionCode));
    message.device !== undefined &&
      (obj.device = deviceTypeToJSON(message.device));
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.romVersion !== undefined &&
      (obj.romVersion = Math.round(message.romVersion));
    message.maxCars !== undefined &&
      (obj.maxCars = Math.round(message.maxCars));
    message.createUser !== undefined && (obj.createUser = message.createUser);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LoadUserRequest>, I>>(
    object: I
  ): LoadUserRequest {
    const message = createBaseLoadUserRequest();
    message.cardChipId = object.cardChipId ?? "";
    message.accessCode = object.accessCode ?? "";
    message.cardTypeCode = object.cardTypeCode ?? 0;
    message.cardRegionCode = object.cardRegionCode ?? 0;
    message.device = object.device ?? 0;
    message.userId = object.userId ?? 0;
    message.romVersion = object.romVersion ?? 0;
    message.maxCars = object.maxCars ?? 0;
    message.createUser = object.createUser ?? false;
    return message;
  },
};

function createBaseLoadUserResponse(): LoadUserResponse {
  return {
    error: 0,
    unlockAt: 0,
    accessCode: "",
    banapassportAmId: 0,
    mbid: 0,
    userId: 0,
    numOfOwnedCars: 0,
    cars: [],
    carStates: [],
    unusedCarTickets: [],
    tutorials: [],
    competitionUserState: 1,
    windowStickerString: "",
    windowStickerFont: 0,
    spappState: 0,
    transferState: 0,
    totalVsStarCount: 0,
    totalVsMedalPoint: 0,
    copiedCar: undefined,
    wasCreatedToday: false,
    participatedInInviteFriendCampaign: false,
  };
}

export const LoadUserResponse = {
  encode(
    message: LoadUserResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.error !== 0) {
      writer.uint32(8).int32(message.error);
    }
    if (message.unlockAt !== 0) {
      writer.uint32(16).uint32(message.unlockAt);
    }
    if (message.accessCode !== "") {
      writer.uint32(26).string(message.accessCode);
    }
    if (message.banapassportAmId !== 0) {
      writer.uint32(32).uint32(message.banapassportAmId);
    }
    if (message.mbid !== 0) {
      writer.uint32(40).uint32(message.mbid);
    }
    if (message.userId !== 0) {
      writer.uint32(48).uint32(message.userId);
    }
    if (message.numOfOwnedCars !== 0) {
      writer.uint32(80).uint32(message.numOfOwnedCars);
    }
    for (const v of message.cars) {
      Car.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    for (const v of message.carStates) {
      LoadUserResponse_CarState.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    for (const v of message.unusedCarTickets) {
      UserItem.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    writer.uint32(122).fork();
    for (const v of message.tutorials) {
      writer.bool(v);
    }
    writer.ldelim();
    if (message.competitionUserState !== 1) {
      writer.uint32(136).int32(message.competitionUserState);
    }
    if (message.windowStickerString !== "") {
      writer.uint32(154).string(message.windowStickerString);
    }
    if (message.windowStickerFont !== 0) {
      writer.uint32(160).uint32(message.windowStickerFont);
    }
    if (message.spappState !== 0) {
      writer.uint32(168).int32(message.spappState);
    }
    if (message.transferState !== 0) {
      writer.uint32(176).int32(message.transferState);
    }
    if (message.totalVsStarCount !== 0) {
      writer.uint32(200).uint32(message.totalVsStarCount);
    }
    if (message.totalVsMedalPoint !== 0) {
      writer.uint32(208).uint32(message.totalVsMedalPoint);
    }
    if (message.copiedCar !== undefined) {
      CopiedCar.encode(message.copiedCar, writer.uint32(218).fork()).ldelim();
    }
    if (message.wasCreatedToday === true) {
      writer.uint32(224).bool(message.wasCreatedToday);
    }
    if (message.participatedInInviteFriendCampaign === true) {
      writer.uint32(232).bool(message.participatedInInviteFriendCampaign);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoadUserResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoadUserResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.error = reader.int32() as any;
          break;
        case 2:
          message.unlockAt = reader.uint32();
          break;
        case 3:
          message.accessCode = reader.string();
          break;
        case 4:
          message.banapassportAmId = reader.uint32();
          break;
        case 5:
          message.mbid = reader.uint32();
          break;
        case 6:
          message.userId = reader.uint32();
          break;
        case 10:
          message.numOfOwnedCars = reader.uint32();
          break;
        case 11:
          message.cars.push(Car.decode(reader, reader.uint32()));
          break;
        case 12:
          message.carStates.push(
            LoadUserResponse_CarState.decode(reader, reader.uint32())
          );
          break;
        case 13:
          message.unusedCarTickets.push(
            UserItem.decode(reader, reader.uint32())
          );
          break;
        case 15:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.tutorials.push(reader.bool());
            }
          } else {
            message.tutorials.push(reader.bool());
          }
          break;
        case 17:
          message.competitionUserState = reader.int32() as any;
          break;
        case 19:
          message.windowStickerString = reader.string();
          break;
        case 20:
          message.windowStickerFont = reader.uint32();
          break;
        case 21:
          message.spappState = reader.int32() as any;
          break;
        case 22:
          message.transferState = reader.int32() as any;
          break;
        case 25:
          message.totalVsStarCount = reader.uint32();
          break;
        case 26:
          message.totalVsMedalPoint = reader.uint32();
          break;
        case 27:
          message.copiedCar = CopiedCar.decode(reader, reader.uint32());
          break;
        case 28:
          message.wasCreatedToday = reader.bool();
          break;
        case 29:
          message.participatedInInviteFriendCampaign = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LoadUserResponse {
    return {
      error: isSet(object.error) ? errorCodeFromJSON(object.error) : 0,
      unlockAt: isSet(object.unlockAt) ? Number(object.unlockAt) : 0,
      accessCode: isSet(object.accessCode) ? String(object.accessCode) : "",
      banapassportAmId: isSet(object.banapassportAmId)
        ? Number(object.banapassportAmId)
        : 0,
      mbid: isSet(object.mbid) ? Number(object.mbid) : 0,
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      numOfOwnedCars: isSet(object.numOfOwnedCars)
        ? Number(object.numOfOwnedCars)
        : 0,
      cars: Array.isArray(object?.cars)
        ? object.cars.map((e: any) => Car.fromJSON(e))
        : [],
      carStates: Array.isArray(object?.carStates)
        ? object.carStates.map((e: any) =>
            LoadUserResponse_CarState.fromJSON(e)
          )
        : [],
      unusedCarTickets: Array.isArray(object?.unusedCarTickets)
        ? object.unusedCarTickets.map((e: any) => UserItem.fromJSON(e))
        : [],
      tutorials: Array.isArray(object?.tutorials)
        ? object.tutorials.map((e: any) => Boolean(e))
        : [],
      competitionUserState: isSet(object.competitionUserState)
        ? ghostCompetitionParticipantStateFromJSON(object.competitionUserState)
        : 1,
      windowStickerString: isSet(object.windowStickerString)
        ? String(object.windowStickerString)
        : "",
      windowStickerFont: isSet(object.windowStickerFont)
        ? Number(object.windowStickerFont)
        : 0,
      spappState: isSet(object.spappState)
        ? smartphoneAppStateFromJSON(object.spappState)
        : 0,
      transferState: isSet(object.transferState)
        ? transferStateFromJSON(object.transferState)
        : 0,
      totalVsStarCount: isSet(object.totalVsStarCount)
        ? Number(object.totalVsStarCount)
        : 0,
      totalVsMedalPoint: isSet(object.totalVsMedalPoint)
        ? Number(object.totalVsMedalPoint)
        : 0,
      copiedCar: isSet(object.copiedCar)
        ? CopiedCar.fromJSON(object.copiedCar)
        : undefined,
      wasCreatedToday: isSet(object.wasCreatedToday)
        ? Boolean(object.wasCreatedToday)
        : false,
      participatedInInviteFriendCampaign: isSet(
        object.participatedInInviteFriendCampaign
      )
        ? Boolean(object.participatedInInviteFriendCampaign)
        : false,
    };
  },

  toJSON(message: LoadUserResponse): unknown {
    const obj: any = {};
    message.error !== undefined && (obj.error = errorCodeToJSON(message.error));
    message.unlockAt !== undefined &&
      (obj.unlockAt = Math.round(message.unlockAt));
    message.accessCode !== undefined && (obj.accessCode = message.accessCode);
    message.banapassportAmId !== undefined &&
      (obj.banapassportAmId = Math.round(message.banapassportAmId));
    message.mbid !== undefined && (obj.mbid = Math.round(message.mbid));
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.numOfOwnedCars !== undefined &&
      (obj.numOfOwnedCars = Math.round(message.numOfOwnedCars));
    if (message.cars) {
      obj.cars = message.cars.map((e) => (e ? Car.toJSON(e) : undefined));
    } else {
      obj.cars = [];
    }
    if (message.carStates) {
      obj.carStates = message.carStates.map((e) =>
        e ? LoadUserResponse_CarState.toJSON(e) : undefined
      );
    } else {
      obj.carStates = [];
    }
    if (message.unusedCarTickets) {
      obj.unusedCarTickets = message.unusedCarTickets.map((e) =>
        e ? UserItem.toJSON(e) : undefined
      );
    } else {
      obj.unusedCarTickets = [];
    }
    if (message.tutorials) {
      obj.tutorials = message.tutorials.map((e) => e);
    } else {
      obj.tutorials = [];
    }
    message.competitionUserState !== undefined &&
      (obj.competitionUserState = ghostCompetitionParticipantStateToJSON(
        message.competitionUserState
      ));
    message.windowStickerString !== undefined &&
      (obj.windowStickerString = message.windowStickerString);
    message.windowStickerFont !== undefined &&
      (obj.windowStickerFont = Math.round(message.windowStickerFont));
    message.spappState !== undefined &&
      (obj.spappState = smartphoneAppStateToJSON(message.spappState));
    message.transferState !== undefined &&
      (obj.transferState = transferStateToJSON(message.transferState));
    message.totalVsStarCount !== undefined &&
      (obj.totalVsStarCount = Math.round(message.totalVsStarCount));
    message.totalVsMedalPoint !== undefined &&
      (obj.totalVsMedalPoint = Math.round(message.totalVsMedalPoint));
    message.copiedCar !== undefined &&
      (obj.copiedCar = message.copiedCar
        ? CopiedCar.toJSON(message.copiedCar)
        : undefined);
    message.wasCreatedToday !== undefined &&
      (obj.wasCreatedToday = message.wasCreatedToday);
    message.participatedInInviteFriendCampaign !== undefined &&
      (obj.participatedInInviteFriendCampaign =
        message.participatedInInviteFriendCampaign);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LoadUserResponse>, I>>(
    object: I
  ): LoadUserResponse {
    const message = createBaseLoadUserResponse();
    message.error = object.error ?? 0;
    message.unlockAt = object.unlockAt ?? 0;
    message.accessCode = object.accessCode ?? "";
    message.banapassportAmId = object.banapassportAmId ?? 0;
    message.mbid = object.mbid ?? 0;
    message.userId = object.userId ?? 0;
    message.numOfOwnedCars = object.numOfOwnedCars ?? 0;
    message.cars = object.cars?.map((e) => Car.fromPartial(e)) || [];
    message.carStates =
      object.carStates?.map((e) => LoadUserResponse_CarState.fromPartial(e)) ||
      [];
    message.unusedCarTickets =
      object.unusedCarTickets?.map((e) => UserItem.fromPartial(e)) || [];
    message.tutorials = object.tutorials?.map((e) => e) || [];
    message.competitionUserState = object.competitionUserState ?? 1;
    message.windowStickerString = object.windowStickerString ?? "";
    message.windowStickerFont = object.windowStickerFont ?? 0;
    message.spappState = object.spappState ?? 0;
    message.transferState = object.transferState ?? 0;
    message.totalVsStarCount = object.totalVsStarCount ?? 0;
    message.totalVsMedalPoint = object.totalVsMedalPoint ?? 0;
    message.copiedCar =
      object.copiedCar !== undefined && object.copiedCar !== null
        ? CopiedCar.fromPartial(object.copiedCar)
        : undefined;
    message.wasCreatedToday = object.wasCreatedToday ?? false;
    message.participatedInInviteFriendCampaign =
      object.participatedInInviteFriendCampaign ?? false;
    return message;
  },
};

function createBaseLoadUserResponse_CarState(): LoadUserResponse_CarState {
  return {
    hasOpponentGhost: false,
    competitionState: 1,
    toBeDeleted: false,
    eventJoined: false,
    transferred: false,
    driveLastPlayedAt: 0,
  };
}

export const LoadUserResponse_CarState = {
  encode(
    message: LoadUserResponse_CarState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.hasOpponentGhost === true) {
      writer.uint32(8).bool(message.hasOpponentGhost);
    }
    if (message.competitionState !== 1) {
      writer.uint32(16).int32(message.competitionState);
    }
    if (message.toBeDeleted === true) {
      writer.uint32(32).bool(message.toBeDeleted);
    }
    if (message.eventJoined === true) {
      writer.uint32(40).bool(message.eventJoined);
    }
    if (message.transferred === true) {
      writer.uint32(48).bool(message.transferred);
    }
    if (message.driveLastPlayedAt !== 0) {
      writer.uint32(56).uint32(message.driveLastPlayedAt);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LoadUserResponse_CarState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoadUserResponse_CarState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hasOpponentGhost = reader.bool();
          break;
        case 2:
          message.competitionState = reader.int32() as any;
          break;
        case 4:
          message.toBeDeleted = reader.bool();
          break;
        case 5:
          message.eventJoined = reader.bool();
          break;
        case 6:
          message.transferred = reader.bool();
          break;
        case 7:
          message.driveLastPlayedAt = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LoadUserResponse_CarState {
    return {
      hasOpponentGhost: isSet(object.hasOpponentGhost)
        ? Boolean(object.hasOpponentGhost)
        : false,
      competitionState: isSet(object.competitionState)
        ? ghostCompetitionParticipantStateFromJSON(object.competitionState)
        : 1,
      toBeDeleted: isSet(object.toBeDeleted)
        ? Boolean(object.toBeDeleted)
        : false,
      eventJoined: isSet(object.eventJoined)
        ? Boolean(object.eventJoined)
        : false,
      transferred: isSet(object.transferred)
        ? Boolean(object.transferred)
        : false,
      driveLastPlayedAt: isSet(object.driveLastPlayedAt)
        ? Number(object.driveLastPlayedAt)
        : 0,
    };
  },

  toJSON(message: LoadUserResponse_CarState): unknown {
    const obj: any = {};
    message.hasOpponentGhost !== undefined &&
      (obj.hasOpponentGhost = message.hasOpponentGhost);
    message.competitionState !== undefined &&
      (obj.competitionState = ghostCompetitionParticipantStateToJSON(
        message.competitionState
      ));
    message.toBeDeleted !== undefined &&
      (obj.toBeDeleted = message.toBeDeleted);
    message.eventJoined !== undefined &&
      (obj.eventJoined = message.eventJoined);
    message.transferred !== undefined &&
      (obj.transferred = message.transferred);
    message.driveLastPlayedAt !== undefined &&
      (obj.driveLastPlayedAt = Math.round(message.driveLastPlayedAt));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LoadUserResponse_CarState>, I>>(
    object: I
  ): LoadUserResponse_CarState {
    const message = createBaseLoadUserResponse_CarState();
    message.hasOpponentGhost = object.hasOpponentGhost ?? false;
    message.competitionState = object.competitionState ?? 1;
    message.toBeDeleted = object.toBeDeleted ?? false;
    message.eventJoined = object.eventJoined ?? false;
    message.transferred = object.transferred ?? false;
    message.driveLastPlayedAt = object.driveLastPlayedAt ?? 0;
    return message;
  },
};

function createBaseUpdateUserSessionRequest(): UpdateUserSessionRequest {
  return {
    userId: 0,
    cardChipId: "",
    accessCode: "",
    cardTypeCode: 0,
    cardRegionCode: 0,
    device: 0,
    unlockAt: 0,
    acceptVs: false,
  };
}

export const UpdateUserSessionRequest = {
  encode(
    message: UpdateUserSessionRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.userId !== 0) {
      writer.uint32(8).uint32(message.userId);
    }
    if (message.cardChipId !== "") {
      writer.uint32(18).string(message.cardChipId);
    }
    if (message.accessCode !== "") {
      writer.uint32(26).string(message.accessCode);
    }
    if (message.cardTypeCode !== 0) {
      writer.uint32(32).uint32(message.cardTypeCode);
    }
    if (message.cardRegionCode !== 0) {
      writer.uint32(40).uint32(message.cardRegionCode);
    }
    if (message.device !== 0) {
      writer.uint32(48).int32(message.device);
    }
    if (message.unlockAt !== 0) {
      writer.uint32(56).uint32(message.unlockAt);
    }
    if (message.acceptVs === true) {
      writer.uint32(64).bool(message.acceptVs);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateUserSessionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateUserSessionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userId = reader.uint32();
          break;
        case 2:
          message.cardChipId = reader.string();
          break;
        case 3:
          message.accessCode = reader.string();
          break;
        case 4:
          message.cardTypeCode = reader.uint32();
          break;
        case 5:
          message.cardRegionCode = reader.uint32();
          break;
        case 6:
          message.device = reader.int32() as any;
          break;
        case 7:
          message.unlockAt = reader.uint32();
          break;
        case 8:
          message.acceptVs = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateUserSessionRequest {
    return {
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      cardChipId: isSet(object.cardChipId) ? String(object.cardChipId) : "",
      accessCode: isSet(object.accessCode) ? String(object.accessCode) : "",
      cardTypeCode: isSet(object.cardTypeCode)
        ? Number(object.cardTypeCode)
        : 0,
      cardRegionCode: isSet(object.cardRegionCode)
        ? Number(object.cardRegionCode)
        : 0,
      device: isSet(object.device) ? deviceTypeFromJSON(object.device) : 0,
      unlockAt: isSet(object.unlockAt) ? Number(object.unlockAt) : 0,
      acceptVs: isSet(object.acceptVs) ? Boolean(object.acceptVs) : false,
    };
  },

  toJSON(message: UpdateUserSessionRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.cardChipId !== undefined && (obj.cardChipId = message.cardChipId);
    message.accessCode !== undefined && (obj.accessCode = message.accessCode);
    message.cardTypeCode !== undefined &&
      (obj.cardTypeCode = Math.round(message.cardTypeCode));
    message.cardRegionCode !== undefined &&
      (obj.cardRegionCode = Math.round(message.cardRegionCode));
    message.device !== undefined &&
      (obj.device = deviceTypeToJSON(message.device));
    message.unlockAt !== undefined &&
      (obj.unlockAt = Math.round(message.unlockAt));
    message.acceptVs !== undefined && (obj.acceptVs = message.acceptVs);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateUserSessionRequest>, I>>(
    object: I
  ): UpdateUserSessionRequest {
    const message = createBaseUpdateUserSessionRequest();
    message.userId = object.userId ?? 0;
    message.cardChipId = object.cardChipId ?? "";
    message.accessCode = object.accessCode ?? "";
    message.cardTypeCode = object.cardTypeCode ?? 0;
    message.cardRegionCode = object.cardRegionCode ?? 0;
    message.device = object.device ?? 0;
    message.unlockAt = object.unlockAt ?? 0;
    message.acceptVs = object.acceptVs ?? false;
    return message;
  },
};

function createBaseUpdateUserSessionResponse(): UpdateUserSessionResponse {
  return { error: 0 };
}

export const UpdateUserSessionResponse = {
  encode(
    message: UpdateUserSessionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.error !== 0) {
      writer.uint32(8).int32(message.error);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateUserSessionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateUserSessionResponse();
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

  fromJSON(object: any): UpdateUserSessionResponse {
    return {
      error: isSet(object.error) ? errorCodeFromJSON(object.error) : 0,
    };
  },

  toJSON(message: UpdateUserSessionResponse): unknown {
    const obj: any = {};
    message.error !== undefined && (obj.error = errorCodeToJSON(message.error));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateUserSessionResponse>, I>>(
    object: I
  ): UpdateUserSessionResponse {
    const message = createBaseUpdateUserSessionResponse();
    message.error = object.error ?? 0;
    return message;
  },
};

function createBaseLoadDriveInformationRequest(): LoadDriveInformationRequest {
  return { userId: 0 };
}

export const LoadDriveInformationRequest = {
  encode(
    message: LoadDriveInformationRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.userId !== 0) {
      writer.uint32(8).uint32(message.userId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LoadDriveInformationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoadDriveInformationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LoadDriveInformationRequest {
    return {
      userId: isSet(object.userId) ? Number(object.userId) : 0,
    };
  },

  toJSON(message: LoadDriveInformationRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LoadDriveInformationRequest>, I>>(
    object: I
  ): LoadDriveInformationRequest {
    const message = createBaseLoadDriveInformationRequest();
    message.userId = object.userId ?? 0;
    return message;
  },
};

function createBaseLoadDriveInformationResponse(): LoadDriveInformationResponse {
  return {
    error: 0,
    noticeWindow: [],
    noticeWindowMessage: [],
    transferNotice: undefined,
    restrictedModels: [],
    announceFeature: false,
    announceMobile: false,
    availableTickets: [],
  };
}

export const LoadDriveInformationResponse = {
  encode(
    message: LoadDriveInformationResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.error !== 0) {
      writer.uint32(8).int32(message.error);
    }
    writer.uint32(18).fork();
    for (const v of message.noticeWindow) {
      writer.int32(v);
    }
    writer.ldelim();
    for (const v of message.noticeWindowMessage) {
      writer.uint32(26).string(v!);
    }
    if (message.transferNotice !== undefined) {
      TransferNotice.encode(
        message.transferNotice,
        writer.uint32(34).fork()
      ).ldelim();
    }
    writer.uint32(50).fork();
    for (const v of message.restrictedModels) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.announceFeature === true) {
      writer.uint32(56).bool(message.announceFeature);
    }
    if (message.announceMobile === true) {
      writer.uint32(64).bool(message.announceMobile);
    }
    for (const v of message.availableTickets) {
      UserItem.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LoadDriveInformationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoadDriveInformationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.error = reader.int32() as any;
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.noticeWindow.push(reader.int32() as any);
            }
          } else {
            message.noticeWindow.push(reader.int32() as any);
          }
          break;
        case 3:
          message.noticeWindowMessage.push(reader.string());
          break;
        case 4:
          message.transferNotice = TransferNotice.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.restrictedModels.push(reader.uint32());
            }
          } else {
            message.restrictedModels.push(reader.uint32());
          }
          break;
        case 7:
          message.announceFeature = reader.bool();
          break;
        case 8:
          message.announceMobile = reader.bool();
          break;
        case 9:
          message.availableTickets.push(
            UserItem.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LoadDriveInformationResponse {
    return {
      error: isSet(object.error) ? errorCodeFromJSON(object.error) : 0,
      noticeWindow: Array.isArray(object?.noticeWindow)
        ? object.noticeWindow.map((e: any) => noticeEntryFromJSON(e))
        : [],
      noticeWindowMessage: Array.isArray(object?.noticeWindowMessage)
        ? object.noticeWindowMessage.map((e: any) => String(e))
        : [],
      transferNotice: isSet(object.transferNotice)
        ? TransferNotice.fromJSON(object.transferNotice)
        : undefined,
      restrictedModels: Array.isArray(object?.restrictedModels)
        ? object.restrictedModels.map((e: any) => Number(e))
        : [],
      announceFeature: isSet(object.announceFeature)
        ? Boolean(object.announceFeature)
        : false,
      announceMobile: isSet(object.announceMobile)
        ? Boolean(object.announceMobile)
        : false,
      availableTickets: Array.isArray(object?.availableTickets)
        ? object.availableTickets.map((e: any) => UserItem.fromJSON(e))
        : [],
    };
  },

  toJSON(message: LoadDriveInformationResponse): unknown {
    const obj: any = {};
    message.error !== undefined && (obj.error = errorCodeToJSON(message.error));
    if (message.noticeWindow) {
      obj.noticeWindow = message.noticeWindow.map((e) => noticeEntryToJSON(e));
    } else {
      obj.noticeWindow = [];
    }
    if (message.noticeWindowMessage) {
      obj.noticeWindowMessage = message.noticeWindowMessage.map((e) => e);
    } else {
      obj.noticeWindowMessage = [];
    }
    message.transferNotice !== undefined &&
      (obj.transferNotice = message.transferNotice
        ? TransferNotice.toJSON(message.transferNotice)
        : undefined);
    if (message.restrictedModels) {
      obj.restrictedModels = message.restrictedModels.map((e) => Math.round(e));
    } else {
      obj.restrictedModels = [];
    }
    message.announceFeature !== undefined &&
      (obj.announceFeature = message.announceFeature);
    message.announceMobile !== undefined &&
      (obj.announceMobile = message.announceMobile);
    if (message.availableTickets) {
      obj.availableTickets = message.availableTickets.map((e) =>
        e ? UserItem.toJSON(e) : undefined
      );
    } else {
      obj.availableTickets = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LoadDriveInformationResponse>, I>>(
    object: I
  ): LoadDriveInformationResponse {
    const message = createBaseLoadDriveInformationResponse();
    message.error = object.error ?? 0;
    message.noticeWindow = object.noticeWindow?.map((e) => e) || [];
    message.noticeWindowMessage =
      object.noticeWindowMessage?.map((e) => e) || [];
    message.transferNotice =
      object.transferNotice !== undefined && object.transferNotice !== null
        ? TransferNotice.fromPartial(object.transferNotice)
        : undefined;
    message.restrictedModels = object.restrictedModels?.map((e) => e) || [];
    message.announceFeature = object.announceFeature ?? false;
    message.announceMobile = object.announceMobile ?? false;
    message.availableTickets =
      object.availableTickets?.map((e) => UserItem.fromPartial(e)) || [];
    return message;
  },
};

function createBaseLoadCarRequest(): LoadCarRequest {
  return { carId: 0, eventMode: false, eventModeSerial: "" };
}

export const LoadCarRequest = {
  encode(
    message: LoadCarRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.carId !== 0) {
      writer.uint32(8).uint32(message.carId);
    }
    if (message.eventMode === true) {
      writer.uint32(16).bool(message.eventMode);
    }
    if (message.eventModeSerial !== "") {
      writer.uint32(26).string(message.eventModeSerial);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoadCarRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoadCarRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.carId = reader.uint32();
          break;
        case 2:
          message.eventMode = reader.bool();
          break;
        case 3:
          message.eventModeSerial = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LoadCarRequest {
    return {
      carId: isSet(object.carId) ? Number(object.carId) : 0,
      eventMode: isSet(object.eventMode) ? Boolean(object.eventMode) : false,
      eventModeSerial: isSet(object.eventModeSerial)
        ? String(object.eventModeSerial)
        : "",
    };
  },

  toJSON(message: LoadCarRequest): unknown {
    const obj: any = {};
    message.carId !== undefined && (obj.carId = Math.round(message.carId));
    message.eventMode !== undefined && (obj.eventMode = message.eventMode);
    message.eventModeSerial !== undefined &&
      (obj.eventModeSerial = message.eventModeSerial);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LoadCarRequest>, I>>(
    object: I
  ): LoadCarRequest {
    const message = createBaseLoadCarRequest();
    message.carId = object.carId ?? 0;
    message.eventMode = object.eventMode ?? false;
    message.eventModeSerial = object.eventModeSerial ?? "";
    return message;
  },
};

function createBaseLoadCarResponse(): LoadCarResponse {
  return {
    error: 0,
    car: undefined,
    tuningPoint: 0,
    odometer: 0,
    playCount: 0,
    earnedCustomColor: false,
    setting: undefined,
    vsPlayCount: 0,
    vsBurstCount: 0,
    vsStarCount: 0,
    vsStarCountMax: 0,
    vsCoolOrWild: 0,
    vsSmoothOrRough: 0,
    vsTripleStarMedals: 0,
    vsDoubleStarMedals: 0,
    vsSingleStarMedals: 0,
    vsPlainMedals: 0,
    rgPlayCount: 0,
    rgWinCount: 0,
    rgTrophy: 0,
    rgPreviousVersionPlayCount: 0,
    rgScore: 0,
    rgRegionMapScore: [],
    rgRegions: [],
    rgStamp: 0,
    rgAcquireAllCrowns: false,
    dressupLevel: 0,
    dressupPoint: 0,
    stPlayCount: 0,
    stClearBits: 0,
    stClearDivCount: 0,
    stClearCount: 0,
    stLoseBits: 0,
    stConsecutiveWins: 0,
    stConsecutiveWinsMax: 0,
    stCompleted100Episodes: false,
    challenger: undefined,
    challengerReturnCount: 0,
    numOfChallengers: 0,
    opponentGhost: undefined,
    opponentTrailId: 0,
    opponentCompetitionId: 0,
    competitionParameter: undefined,
    specialTitles: [],
    earnedTitles: [],
    ownedItems: [],
    auraMotifAutoChange: false,
    screenshotCount: 0,
    announceEventModePrize: false,
    transferred: false,
    driveLastPlayedAt: 0,
    insurance: undefined,
  };
}

export const LoadCarResponse = {
  encode(
    message: LoadCarResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.error !== 0) {
      writer.uint32(8).int32(message.error);
    }
    if (message.car !== undefined) {
      Car.encode(message.car, writer.uint32(18).fork()).ldelim();
    }
    if (message.tuningPoint !== 0) {
      writer.uint32(24).uint32(message.tuningPoint);
    }
    if (message.odometer !== 0) {
      writer.uint32(48).uint32(message.odometer);
    }
    if (message.playCount !== 0) {
      writer.uint32(56).uint32(message.playCount);
    }
    if (message.earnedCustomColor === true) {
      writer.uint32(64).bool(message.earnedCustomColor);
    }
    if (message.setting !== undefined) {
      CarSetting.encode(message.setting, writer.uint32(82).fork()).ldelim();
    }
    if (message.vsPlayCount !== 0) {
      writer.uint32(96).uint32(message.vsPlayCount);
    }
    if (message.vsBurstCount !== 0) {
      writer.uint32(104).uint32(message.vsBurstCount);
    }
    if (message.vsStarCount !== 0) {
      writer.uint32(112).uint32(message.vsStarCount);
    }
    if (message.vsStarCountMax !== 0) {
      writer.uint32(120).uint32(message.vsStarCountMax);
    }
    if (message.vsCoolOrWild !== 0) {
      writer.uint32(128).sint32(message.vsCoolOrWild);
    }
    if (message.vsSmoothOrRough !== 0) {
      writer.uint32(136).sint32(message.vsSmoothOrRough);
    }
    if (message.vsTripleStarMedals !== 0) {
      writer.uint32(144).uint32(message.vsTripleStarMedals);
    }
    if (message.vsDoubleStarMedals !== 0) {
      writer.uint32(152).uint32(message.vsDoubleStarMedals);
    }
    if (message.vsSingleStarMedals !== 0) {
      writer.uint32(160).uint32(message.vsSingleStarMedals);
    }
    if (message.vsPlainMedals !== 0) {
      writer.uint32(168).uint32(message.vsPlainMedals);
    }
    if (message.rgPlayCount !== 0) {
      writer.uint32(176).uint32(message.rgPlayCount);
    }
    if (message.rgWinCount !== 0) {
      writer.uint32(184).uint32(message.rgWinCount);
    }
    if (message.rgTrophy !== 0) {
      writer.uint32(192).uint32(message.rgTrophy);
    }
    if (message.rgPreviousVersionPlayCount !== 0) {
      writer.uint32(512).uint32(message.rgPreviousVersionPlayCount);
    }
    if (message.rgScore !== 0) {
      writer.uint32(200).uint32(message.rgScore);
    }
    writer.uint32(210).fork();
    for (const v of message.rgRegionMapScore) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(242).fork();
    for (const v of message.rgRegions) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.rgStamp !== 0) {
      writer.uint32(216).uint32(message.rgStamp);
    }
    if (message.rgAcquireAllCrowns === true) {
      writer.uint32(472).bool(message.rgAcquireAllCrowns);
    }
    if (message.dressupLevel !== 0) {
      writer.uint32(224).uint32(message.dressupLevel);
    }
    if (message.dressupPoint !== 0) {
      writer.uint32(232).uint32(message.dressupPoint);
    }
    if (message.stPlayCount !== 0) {
      writer.uint32(272).uint32(message.stPlayCount);
    }
    if (message.stClearBits !== 0) {
      writer.uint32(280).uint32(message.stClearBits);
    }
    if (message.stClearDivCount !== 0) {
      writer.uint32(288).uint32(message.stClearDivCount);
    }
    if (message.stClearCount !== 0) {
      writer.uint32(296).uint32(message.stClearCount);
    }
    if (message.stLoseBits !== 0) {
      writer.uint32(304).uint64(message.stLoseBits);
    }
    if (message.stConsecutiveWins !== 0) {
      writer.uint32(320).uint32(message.stConsecutiveWins);
    }
    if (message.stConsecutiveWinsMax !== 0) {
      writer.uint32(328).uint32(message.stConsecutiveWinsMax);
    }
    if (message.stCompleted100Episodes === true) {
      writer.uint32(504).bool(message.stCompleted100Episodes);
    }
    if (message.challenger !== undefined) {
      ChallengerCar.encode(
        message.challenger,
        writer.uint32(338).fork()
      ).ldelim();
    }
    if (message.challengerReturnCount !== 0) {
      writer.uint32(344).uint32(message.challengerReturnCount);
    }
    if (message.numOfChallengers !== 0) {
      writer.uint32(440).uint32(message.numOfChallengers);
    }
    if (message.opponentGhost !== undefined) {
      GhostCar.encode(
        message.opponentGhost,
        writer.uint32(354).fork()
      ).ldelim();
    }
    if (message.opponentTrailId !== 0) {
      writer.uint32(360).uint64(message.opponentTrailId);
    }
    if (message.opponentCompetitionId !== 0) {
      writer.uint32(368).uint32(message.opponentCompetitionId);
    }
    if (message.competitionParameter !== undefined) {
      GhostCompetitionParameter.encode(
        message.competitionParameter,
        writer.uint32(378).fork()
      ).ldelim();
    }
    for (const v of message.specialTitles) {
      writer.uint32(386).string(v!);
    }
    for (const v of message.earnedTitles) {
      writer.uint32(394).string(v!);
    }
    for (const v of message.ownedItems) {
      CarItem.encode(v!, writer.uint32(402).fork()).ldelim();
    }
    if (message.auraMotifAutoChange === true) {
      writer.uint32(408).bool(message.auraMotifAutoChange);
    }
    if (message.screenshotCount !== 0) {
      writer.uint32(424).uint32(message.screenshotCount);
    }
    if (message.announceEventModePrize === true) {
      writer.uint32(464).bool(message.announceEventModePrize);
    }
    if (message.transferred === true) {
      writer.uint32(480).bool(message.transferred);
    }
    if (message.driveLastPlayedAt !== 0) {
      writer.uint32(488).uint32(message.driveLastPlayedAt);
    }
    if (message.insurance !== undefined) {
      LoadCarResponse_StoryInsurance.encode(
        message.insurance,
        writer.uint32(498).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoadCarResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoadCarResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.error = reader.int32() as any;
          break;
        case 2:
          message.car = Car.decode(reader, reader.uint32());
          break;
        case 3:
          message.tuningPoint = reader.uint32();
          break;
        case 6:
          message.odometer = reader.uint32();
          break;
        case 7:
          message.playCount = reader.uint32();
          break;
        case 8:
          message.earnedCustomColor = reader.bool();
          break;
        case 10:
          message.setting = CarSetting.decode(reader, reader.uint32());
          break;
        case 12:
          message.vsPlayCount = reader.uint32();
          break;
        case 13:
          message.vsBurstCount = reader.uint32();
          break;
        case 14:
          message.vsStarCount = reader.uint32();
          break;
        case 15:
          message.vsStarCountMax = reader.uint32();
          break;
        case 16:
          message.vsCoolOrWild = reader.sint32();
          break;
        case 17:
          message.vsSmoothOrRough = reader.sint32();
          break;
        case 18:
          message.vsTripleStarMedals = reader.uint32();
          break;
        case 19:
          message.vsDoubleStarMedals = reader.uint32();
          break;
        case 20:
          message.vsSingleStarMedals = reader.uint32();
          break;
        case 21:
          message.vsPlainMedals = reader.uint32();
          break;
        case 22:
          message.rgPlayCount = reader.uint32();
          break;
        case 23:
          message.rgWinCount = reader.uint32();
          break;
        case 24:
          message.rgTrophy = reader.uint32();
          break;
        case 64:
          message.rgPreviousVersionPlayCount = reader.uint32();
          break;
        case 25:
          message.rgScore = reader.uint32();
          break;
        case 26:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.rgRegionMapScore.push(reader.uint32());
            }
          } else {
            message.rgRegionMapScore.push(reader.uint32());
          }
          break;
        case 30:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.rgRegions.push(reader.uint32());
            }
          } else {
            message.rgRegions.push(reader.uint32());
          }
          break;
        case 27:
          message.rgStamp = reader.uint32();
          break;
        case 59:
          message.rgAcquireAllCrowns = reader.bool();
          break;
        case 28:
          message.dressupLevel = reader.uint32();
          break;
        case 29:
          message.dressupPoint = reader.uint32();
          break;
        case 34:
          message.stPlayCount = reader.uint32();
          break;
        case 35:
          message.stClearBits = reader.uint32();
          break;
        case 36:
          message.stClearDivCount = reader.uint32();
          break;
        case 37:
          message.stClearCount = reader.uint32();
          break;
        case 38:
          message.stLoseBits = longToNumber(reader.uint64() as Long);
          break;
        case 40:
          message.stConsecutiveWins = reader.uint32();
          break;
        case 41:
          message.stConsecutiveWinsMax = reader.uint32();
          break;
        case 63:
          message.stCompleted100Episodes = reader.bool();
          break;
        case 42:
          message.challenger = ChallengerCar.decode(reader, reader.uint32());
          break;
        case 43:
          message.challengerReturnCount = reader.uint32();
          break;
        case 55:
          message.numOfChallengers = reader.uint32();
          break;
        case 44:
          message.opponentGhost = GhostCar.decode(reader, reader.uint32());
          break;
        case 45:
          message.opponentTrailId = longToNumber(reader.uint64() as Long);
          break;
        case 46:
          message.opponentCompetitionId = reader.uint32();
          break;
        case 47:
          message.competitionParameter = GhostCompetitionParameter.decode(
            reader,
            reader.uint32()
          );
          break;
        case 48:
          message.specialTitles.push(reader.string());
          break;
        case 49:
          message.earnedTitles.push(reader.string());
          break;
        case 50:
          message.ownedItems.push(CarItem.decode(reader, reader.uint32()));
          break;
        case 51:
          message.auraMotifAutoChange = reader.bool();
          break;
        case 53:
          message.screenshotCount = reader.uint32();
          break;
        case 58:
          message.announceEventModePrize = reader.bool();
          break;
        case 60:
          message.transferred = reader.bool();
          break;
        case 61:
          message.driveLastPlayedAt = reader.uint32();
          break;
        case 62:
          message.insurance = LoadCarResponse_StoryInsurance.decode(
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

  fromJSON(object: any): LoadCarResponse {
    return {
      error: isSet(object.error) ? errorCodeFromJSON(object.error) : 0,
      car: isSet(object.car) ? Car.fromJSON(object.car) : undefined,
      tuningPoint: isSet(object.tuningPoint) ? Number(object.tuningPoint) : 0,
      odometer: isSet(object.odometer) ? Number(object.odometer) : 0,
      playCount: isSet(object.playCount) ? Number(object.playCount) : 0,
      earnedCustomColor: isSet(object.earnedCustomColor)
        ? Boolean(object.earnedCustomColor)
        : false,
      setting: isSet(object.setting)
        ? CarSetting.fromJSON(object.setting)
        : undefined,
      vsPlayCount: isSet(object.vsPlayCount) ? Number(object.vsPlayCount) : 0,
      vsBurstCount: isSet(object.vsBurstCount)
        ? Number(object.vsBurstCount)
        : 0,
      vsStarCount: isSet(object.vsStarCount) ? Number(object.vsStarCount) : 0,
      vsStarCountMax: isSet(object.vsStarCountMax)
        ? Number(object.vsStarCountMax)
        : 0,
      vsCoolOrWild: isSet(object.vsCoolOrWild)
        ? Number(object.vsCoolOrWild)
        : 0,
      vsSmoothOrRough: isSet(object.vsSmoothOrRough)
        ? Number(object.vsSmoothOrRough)
        : 0,
      vsTripleStarMedals: isSet(object.vsTripleStarMedals)
        ? Number(object.vsTripleStarMedals)
        : 0,
      vsDoubleStarMedals: isSet(object.vsDoubleStarMedals)
        ? Number(object.vsDoubleStarMedals)
        : 0,
      vsSingleStarMedals: isSet(object.vsSingleStarMedals)
        ? Number(object.vsSingleStarMedals)
        : 0,
      vsPlainMedals: isSet(object.vsPlainMedals)
        ? Number(object.vsPlainMedals)
        : 0,
      rgPlayCount: isSet(object.rgPlayCount) ? Number(object.rgPlayCount) : 0,
      rgWinCount: isSet(object.rgWinCount) ? Number(object.rgWinCount) : 0,
      rgTrophy: isSet(object.rgTrophy) ? Number(object.rgTrophy) : 0,
      rgPreviousVersionPlayCount: isSet(object.rgPreviousVersionPlayCount)
        ? Number(object.rgPreviousVersionPlayCount)
        : 0,
      rgScore: isSet(object.rgScore) ? Number(object.rgScore) : 0,
      rgRegionMapScore: Array.isArray(object?.rgRegionMapScore)
        ? object.rgRegionMapScore.map((e: any) => Number(e))
        : [],
      rgRegions: Array.isArray(object?.rgRegions)
        ? object.rgRegions.map((e: any) => Number(e))
        : [],
      rgStamp: isSet(object.rgStamp) ? Number(object.rgStamp) : 0,
      rgAcquireAllCrowns: isSet(object.rgAcquireAllCrowns)
        ? Boolean(object.rgAcquireAllCrowns)
        : false,
      dressupLevel: isSet(object.dressupLevel)
        ? Number(object.dressupLevel)
        : 0,
      dressupPoint: isSet(object.dressupPoint)
        ? Number(object.dressupPoint)
        : 0,
      stPlayCount: isSet(object.stPlayCount) ? Number(object.stPlayCount) : 0,
      stClearBits: isSet(object.stClearBits) ? Number(object.stClearBits) : 0,
      stClearDivCount: isSet(object.stClearDivCount)
        ? Number(object.stClearDivCount)
        : 0,
      stClearCount: isSet(object.stClearCount)
        ? Number(object.stClearCount)
        : 0,
      stLoseBits: isSet(object.stLoseBits) ? Number(object.stLoseBits) : 0,
      stConsecutiveWins: isSet(object.stConsecutiveWins)
        ? Number(object.stConsecutiveWins)
        : 0,
      stConsecutiveWinsMax: isSet(object.stConsecutiveWinsMax)
        ? Number(object.stConsecutiveWinsMax)
        : 0,
      stCompleted100Episodes: isSet(object.stCompleted100Episodes)
        ? Boolean(object.stCompleted100Episodes)
        : false,
      challenger: isSet(object.challenger)
        ? ChallengerCar.fromJSON(object.challenger)
        : undefined,
      challengerReturnCount: isSet(object.challengerReturnCount)
        ? Number(object.challengerReturnCount)
        : 0,
      numOfChallengers: isSet(object.numOfChallengers)
        ? Number(object.numOfChallengers)
        : 0,
      opponentGhost: isSet(object.opponentGhost)
        ? GhostCar.fromJSON(object.opponentGhost)
        : undefined,
      opponentTrailId: isSet(object.opponentTrailId)
        ? Number(object.opponentTrailId)
        : 0,
      opponentCompetitionId: isSet(object.opponentCompetitionId)
        ? Number(object.opponentCompetitionId)
        : 0,
      competitionParameter: isSet(object.competitionParameter)
        ? GhostCompetitionParameter.fromJSON(object.competitionParameter)
        : undefined,
      specialTitles: Array.isArray(object?.specialTitles)
        ? object.specialTitles.map((e: any) => String(e))
        : [],
      earnedTitles: Array.isArray(object?.earnedTitles)
        ? object.earnedTitles.map((e: any) => String(e))
        : [],
      ownedItems: Array.isArray(object?.ownedItems)
        ? object.ownedItems.map((e: any) => CarItem.fromJSON(e))
        : [],
      auraMotifAutoChange: isSet(object.auraMotifAutoChange)
        ? Boolean(object.auraMotifAutoChange)
        : false,
      screenshotCount: isSet(object.screenshotCount)
        ? Number(object.screenshotCount)
        : 0,
      announceEventModePrize: isSet(object.announceEventModePrize)
        ? Boolean(object.announceEventModePrize)
        : false,
      transferred: isSet(object.transferred)
        ? Boolean(object.transferred)
        : false,
      driveLastPlayedAt: isSet(object.driveLastPlayedAt)
        ? Number(object.driveLastPlayedAt)
        : 0,
      insurance: isSet(object.insurance)
        ? LoadCarResponse_StoryInsurance.fromJSON(object.insurance)
        : undefined,
    };
  },

  toJSON(message: LoadCarResponse): unknown {
    const obj: any = {};
    message.error !== undefined && (obj.error = errorCodeToJSON(message.error));
    message.car !== undefined &&
      (obj.car = message.car ? Car.toJSON(message.car) : undefined);
    message.tuningPoint !== undefined &&
      (obj.tuningPoint = Math.round(message.tuningPoint));
    message.odometer !== undefined &&
      (obj.odometer = Math.round(message.odometer));
    message.playCount !== undefined &&
      (obj.playCount = Math.round(message.playCount));
    message.earnedCustomColor !== undefined &&
      (obj.earnedCustomColor = message.earnedCustomColor);
    message.setting !== undefined &&
      (obj.setting = message.setting
        ? CarSetting.toJSON(message.setting)
        : undefined);
    message.vsPlayCount !== undefined &&
      (obj.vsPlayCount = Math.round(message.vsPlayCount));
    message.vsBurstCount !== undefined &&
      (obj.vsBurstCount = Math.round(message.vsBurstCount));
    message.vsStarCount !== undefined &&
      (obj.vsStarCount = Math.round(message.vsStarCount));
    message.vsStarCountMax !== undefined &&
      (obj.vsStarCountMax = Math.round(message.vsStarCountMax));
    message.vsCoolOrWild !== undefined &&
      (obj.vsCoolOrWild = Math.round(message.vsCoolOrWild));
    message.vsSmoothOrRough !== undefined &&
      (obj.vsSmoothOrRough = Math.round(message.vsSmoothOrRough));
    message.vsTripleStarMedals !== undefined &&
      (obj.vsTripleStarMedals = Math.round(message.vsTripleStarMedals));
    message.vsDoubleStarMedals !== undefined &&
      (obj.vsDoubleStarMedals = Math.round(message.vsDoubleStarMedals));
    message.vsSingleStarMedals !== undefined &&
      (obj.vsSingleStarMedals = Math.round(message.vsSingleStarMedals));
    message.vsPlainMedals !== undefined &&
      (obj.vsPlainMedals = Math.round(message.vsPlainMedals));
    message.rgPlayCount !== undefined &&
      (obj.rgPlayCount = Math.round(message.rgPlayCount));
    message.rgWinCount !== undefined &&
      (obj.rgWinCount = Math.round(message.rgWinCount));
    message.rgTrophy !== undefined &&
      (obj.rgTrophy = Math.round(message.rgTrophy));
    message.rgPreviousVersionPlayCount !== undefined &&
      (obj.rgPreviousVersionPlayCount = Math.round(
        message.rgPreviousVersionPlayCount
      ));
    message.rgScore !== undefined &&
      (obj.rgScore = Math.round(message.rgScore));
    if (message.rgRegionMapScore) {
      obj.rgRegionMapScore = message.rgRegionMapScore.map((e) => Math.round(e));
    } else {
      obj.rgRegionMapScore = [];
    }
    if (message.rgRegions) {
      obj.rgRegions = message.rgRegions.map((e) => Math.round(e));
    } else {
      obj.rgRegions = [];
    }
    message.rgStamp !== undefined &&
      (obj.rgStamp = Math.round(message.rgStamp));
    message.rgAcquireAllCrowns !== undefined &&
      (obj.rgAcquireAllCrowns = message.rgAcquireAllCrowns);
    message.dressupLevel !== undefined &&
      (obj.dressupLevel = Math.round(message.dressupLevel));
    message.dressupPoint !== undefined &&
      (obj.dressupPoint = Math.round(message.dressupPoint));
    message.stPlayCount !== undefined &&
      (obj.stPlayCount = Math.round(message.stPlayCount));
    message.stClearBits !== undefined &&
      (obj.stClearBits = Math.round(message.stClearBits));
    message.stClearDivCount !== undefined &&
      (obj.stClearDivCount = Math.round(message.stClearDivCount));
    message.stClearCount !== undefined &&
      (obj.stClearCount = Math.round(message.stClearCount));
    message.stLoseBits !== undefined &&
      (obj.stLoseBits = Math.round(message.stLoseBits));
    message.stConsecutiveWins !== undefined &&
      (obj.stConsecutiveWins = Math.round(message.stConsecutiveWins));
    message.stConsecutiveWinsMax !== undefined &&
      (obj.stConsecutiveWinsMax = Math.round(message.stConsecutiveWinsMax));
    message.stCompleted100Episodes !== undefined &&
      (obj.stCompleted100Episodes = message.stCompleted100Episodes);
    message.challenger !== undefined &&
      (obj.challenger = message.challenger
        ? ChallengerCar.toJSON(message.challenger)
        : undefined);
    message.challengerReturnCount !== undefined &&
      (obj.challengerReturnCount = Math.round(message.challengerReturnCount));
    message.numOfChallengers !== undefined &&
      (obj.numOfChallengers = Math.round(message.numOfChallengers));
    message.opponentGhost !== undefined &&
      (obj.opponentGhost = message.opponentGhost
        ? GhostCar.toJSON(message.opponentGhost)
        : undefined);
    message.opponentTrailId !== undefined &&
      (obj.opponentTrailId = Math.round(message.opponentTrailId));
    message.opponentCompetitionId !== undefined &&
      (obj.opponentCompetitionId = Math.round(message.opponentCompetitionId));
    message.competitionParameter !== undefined &&
      (obj.competitionParameter = message.competitionParameter
        ? GhostCompetitionParameter.toJSON(message.competitionParameter)
        : undefined);
    if (message.specialTitles) {
      obj.specialTitles = message.specialTitles.map((e) => e);
    } else {
      obj.specialTitles = [];
    }
    if (message.earnedTitles) {
      obj.earnedTitles = message.earnedTitles.map((e) => e);
    } else {
      obj.earnedTitles = [];
    }
    if (message.ownedItems) {
      obj.ownedItems = message.ownedItems.map((e) =>
        e ? CarItem.toJSON(e) : undefined
      );
    } else {
      obj.ownedItems = [];
    }
    message.auraMotifAutoChange !== undefined &&
      (obj.auraMotifAutoChange = message.auraMotifAutoChange);
    message.screenshotCount !== undefined &&
      (obj.screenshotCount = Math.round(message.screenshotCount));
    message.announceEventModePrize !== undefined &&
      (obj.announceEventModePrize = message.announceEventModePrize);
    message.transferred !== undefined &&
      (obj.transferred = message.transferred);
    message.driveLastPlayedAt !== undefined &&
      (obj.driveLastPlayedAt = Math.round(message.driveLastPlayedAt));
    message.insurance !== undefined &&
      (obj.insurance = message.insurance
        ? LoadCarResponse_StoryInsurance.toJSON(message.insurance)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LoadCarResponse>, I>>(
    object: I
  ): LoadCarResponse {
    const message = createBaseLoadCarResponse();
    message.error = object.error ?? 0;
    message.car =
      object.car !== undefined && object.car !== null
        ? Car.fromPartial(object.car)
        : undefined;
    message.tuningPoint = object.tuningPoint ?? 0;
    message.odometer = object.odometer ?? 0;
    message.playCount = object.playCount ?? 0;
    message.earnedCustomColor = object.earnedCustomColor ?? false;
    message.setting =
      object.setting !== undefined && object.setting !== null
        ? CarSetting.fromPartial(object.setting)
        : undefined;
    message.vsPlayCount = object.vsPlayCount ?? 0;
    message.vsBurstCount = object.vsBurstCount ?? 0;
    message.vsStarCount = object.vsStarCount ?? 0;
    message.vsStarCountMax = object.vsStarCountMax ?? 0;
    message.vsCoolOrWild = object.vsCoolOrWild ?? 0;
    message.vsSmoothOrRough = object.vsSmoothOrRough ?? 0;
    message.vsTripleStarMedals = object.vsTripleStarMedals ?? 0;
    message.vsDoubleStarMedals = object.vsDoubleStarMedals ?? 0;
    message.vsSingleStarMedals = object.vsSingleStarMedals ?? 0;
    message.vsPlainMedals = object.vsPlainMedals ?? 0;
    message.rgPlayCount = object.rgPlayCount ?? 0;
    message.rgWinCount = object.rgWinCount ?? 0;
    message.rgTrophy = object.rgTrophy ?? 0;
    message.rgPreviousVersionPlayCount = object.rgPreviousVersionPlayCount ?? 0;
    message.rgScore = object.rgScore ?? 0;
    message.rgRegionMapScore = object.rgRegionMapScore?.map((e) => e) || [];
    message.rgRegions = object.rgRegions?.map((e) => e) || [];
    message.rgStamp = object.rgStamp ?? 0;
    message.rgAcquireAllCrowns = object.rgAcquireAllCrowns ?? false;
    message.dressupLevel = object.dressupLevel ?? 0;
    message.dressupPoint = object.dressupPoint ?? 0;
    message.stPlayCount = object.stPlayCount ?? 0;
    message.stClearBits = object.stClearBits ?? 0;
    message.stClearDivCount = object.stClearDivCount ?? 0;
    message.stClearCount = object.stClearCount ?? 0;
    message.stLoseBits = object.stLoseBits ?? 0;
    message.stConsecutiveWins = object.stConsecutiveWins ?? 0;
    message.stConsecutiveWinsMax = object.stConsecutiveWinsMax ?? 0;
    message.stCompleted100Episodes = object.stCompleted100Episodes ?? false;
    message.challenger =
      object.challenger !== undefined && object.challenger !== null
        ? ChallengerCar.fromPartial(object.challenger)
        : undefined;
    message.challengerReturnCount = object.challengerReturnCount ?? 0;
    message.numOfChallengers = object.numOfChallengers ?? 0;
    message.opponentGhost =
      object.opponentGhost !== undefined && object.opponentGhost !== null
        ? GhostCar.fromPartial(object.opponentGhost)
        : undefined;
    message.opponentTrailId = object.opponentTrailId ?? 0;
    message.opponentCompetitionId = object.opponentCompetitionId ?? 0;
    message.competitionParameter =
      object.competitionParameter !== undefined &&
      object.competitionParameter !== null
        ? GhostCompetitionParameter.fromPartial(object.competitionParameter)
        : undefined;
    message.specialTitles = object.specialTitles?.map((e) => e) || [];
    message.earnedTitles = object.earnedTitles?.map((e) => e) || [];
    message.ownedItems =
      object.ownedItems?.map((e) => CarItem.fromPartial(e)) || [];
    message.auraMotifAutoChange = object.auraMotifAutoChange ?? false;
    message.screenshotCount = object.screenshotCount ?? 0;
    message.announceEventModePrize = object.announceEventModePrize ?? false;
    message.transferred = object.transferred ?? false;
    message.driveLastPlayedAt = object.driveLastPlayedAt ?? 0;
    message.insurance =
      object.insurance !== undefined && object.insurance !== null
        ? LoadCarResponse_StoryInsurance.fromPartial(object.insurance)
        : undefined;
    return message;
  },
};

function createBaseLoadCarResponse_StoryInsurance(): LoadCarResponse_StoryInsurance {
  return { numOfRemains: 0 };
}

export const LoadCarResponse_StoryInsurance = {
  encode(
    message: LoadCarResponse_StoryInsurance,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.numOfRemains !== 0) {
      writer.uint32(8).uint32(message.numOfRemains);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LoadCarResponse_StoryInsurance {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoadCarResponse_StoryInsurance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.numOfRemains = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LoadCarResponse_StoryInsurance {
    return {
      numOfRemains: isSet(object.numOfRemains)
        ? Number(object.numOfRemains)
        : 0,
    };
  },

  toJSON(message: LoadCarResponse_StoryInsurance): unknown {
    const obj: any = {};
    message.numOfRemains !== undefined &&
      (obj.numOfRemains = Math.round(message.numOfRemains));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LoadCarResponse_StoryInsurance>, I>>(
    object: I
  ): LoadCarResponse_StoryInsurance {
    const message = createBaseLoadCarResponse_StoryInsurance();
    message.numOfRemains = object.numOfRemains ?? 0;
    return message;
  },
};

function createBaseCreateCarRequest(): CreateCarRequest {
  return {
    userId: 0,
    banapassportAmId: 0,
    cardChipId: "",
    accessCode: "",
    cardTypeCode: 0,
    cardRegionCode: 0,
    device: 0,
    car: undefined,
    transmission: false,
    timestamp: 0,
    userItemId: 0,
    deletedCarId: 0,
  };
}

export const CreateCarRequest = {
  encode(
    message: CreateCarRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.userId !== 0) {
      writer.uint32(8).uint32(message.userId);
    }
    if (message.banapassportAmId !== 0) {
      writer.uint32(16).uint32(message.banapassportAmId);
    }
    if (message.cardChipId !== "") {
      writer.uint32(26).string(message.cardChipId);
    }
    if (message.accessCode !== "") {
      writer.uint32(34).string(message.accessCode);
    }
    if (message.cardTypeCode !== 0) {
      writer.uint32(40).uint32(message.cardTypeCode);
    }
    if (message.cardRegionCode !== 0) {
      writer.uint32(48).uint32(message.cardRegionCode);
    }
    if (message.device !== 0) {
      writer.uint32(56).int32(message.device);
    }
    if (message.car !== undefined) {
      Car.encode(message.car, writer.uint32(66).fork()).ldelim();
    }
    if (message.transmission === true) {
      writer.uint32(72).bool(message.transmission);
    }
    if (message.timestamp !== 0) {
      writer.uint32(88).uint32(message.timestamp);
    }
    if (message.userItemId !== 0) {
      writer.uint32(96).uint32(message.userItemId);
    }
    if (message.deletedCarId !== 0) {
      writer.uint32(104).uint32(message.deletedCarId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateCarRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateCarRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userId = reader.uint32();
          break;
        case 2:
          message.banapassportAmId = reader.uint32();
          break;
        case 3:
          message.cardChipId = reader.string();
          break;
        case 4:
          message.accessCode = reader.string();
          break;
        case 5:
          message.cardTypeCode = reader.uint32();
          break;
        case 6:
          message.cardRegionCode = reader.uint32();
          break;
        case 7:
          message.device = reader.int32() as any;
          break;
        case 8:
          message.car = Car.decode(reader, reader.uint32());
          break;
        case 9:
          message.transmission = reader.bool();
          break;
        case 11:
          message.timestamp = reader.uint32();
          break;
        case 12:
          message.userItemId = reader.uint32();
          break;
        case 13:
          message.deletedCarId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateCarRequest {
    return {
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      banapassportAmId: isSet(object.banapassportAmId)
        ? Number(object.banapassportAmId)
        : 0,
      cardChipId: isSet(object.cardChipId) ? String(object.cardChipId) : "",
      accessCode: isSet(object.accessCode) ? String(object.accessCode) : "",
      cardTypeCode: isSet(object.cardTypeCode)
        ? Number(object.cardTypeCode)
        : 0,
      cardRegionCode: isSet(object.cardRegionCode)
        ? Number(object.cardRegionCode)
        : 0,
      device: isSet(object.device) ? deviceTypeFromJSON(object.device) : 0,
      car: isSet(object.car) ? Car.fromJSON(object.car) : undefined,
      transmission: isSet(object.transmission)
        ? Boolean(object.transmission)
        : false,
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
      userItemId: isSet(object.userItemId) ? Number(object.userItemId) : 0,
      deletedCarId: isSet(object.deletedCarId)
        ? Number(object.deletedCarId)
        : 0,
    };
  },

  toJSON(message: CreateCarRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.banapassportAmId !== undefined &&
      (obj.banapassportAmId = Math.round(message.banapassportAmId));
    message.cardChipId !== undefined && (obj.cardChipId = message.cardChipId);
    message.accessCode !== undefined && (obj.accessCode = message.accessCode);
    message.cardTypeCode !== undefined &&
      (obj.cardTypeCode = Math.round(message.cardTypeCode));
    message.cardRegionCode !== undefined &&
      (obj.cardRegionCode = Math.round(message.cardRegionCode));
    message.device !== undefined &&
      (obj.device = deviceTypeToJSON(message.device));
    message.car !== undefined &&
      (obj.car = message.car ? Car.toJSON(message.car) : undefined);
    message.transmission !== undefined &&
      (obj.transmission = message.transmission);
    message.timestamp !== undefined &&
      (obj.timestamp = Math.round(message.timestamp));
    message.userItemId !== undefined &&
      (obj.userItemId = Math.round(message.userItemId));
    message.deletedCarId !== undefined &&
      (obj.deletedCarId = Math.round(message.deletedCarId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateCarRequest>, I>>(
    object: I
  ): CreateCarRequest {
    const message = createBaseCreateCarRequest();
    message.userId = object.userId ?? 0;
    message.banapassportAmId = object.banapassportAmId ?? 0;
    message.cardChipId = object.cardChipId ?? "";
    message.accessCode = object.accessCode ?? "";
    message.cardTypeCode = object.cardTypeCode ?? 0;
    message.cardRegionCode = object.cardRegionCode ?? 0;
    message.device = object.device ?? 0;
    message.car =
      object.car !== undefined && object.car !== null
        ? Car.fromPartial(object.car)
        : undefined;
    message.transmission = object.transmission ?? false;
    message.timestamp = object.timestamp ?? 0;
    message.userItemId = object.userItemId ?? 0;
    message.deletedCarId = object.deletedCarId ?? 0;
    return message;
  },
};

function createBaseCreateCarResponse(): CreateCarResponse {
  return {
    error: 0,
    accessCode: "",
    banapassportAmId: 0,
    mbid: 0,
    userId: 0,
    carId: 0,
    stClearBits: 0,
    stClearDivCount: 0,
    stClearCount: 0,
    stLoseBits: 0,
    stConsecutiveWins: 0,
    stConsecutiveWinsMax: 0,
    fullTunedCarCouponUnreceivableAt: 0,
  };
}

export const CreateCarResponse = {
  encode(
    message: CreateCarResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.error !== 0) {
      writer.uint32(8).int32(message.error);
    }
    if (message.accessCode !== "") {
      writer.uint32(18).string(message.accessCode);
    }
    if (message.banapassportAmId !== 0) {
      writer.uint32(24).uint32(message.banapassportAmId);
    }
    if (message.mbid !== 0) {
      writer.uint32(32).uint32(message.mbid);
    }
    if (message.userId !== 0) {
      writer.uint32(40).uint32(message.userId);
    }
    if (message.carId !== 0) {
      writer.uint32(48).uint32(message.carId);
    }
    if (message.stClearBits !== 0) {
      writer.uint32(64).uint32(message.stClearBits);
    }
    if (message.stClearDivCount !== 0) {
      writer.uint32(72).uint32(message.stClearDivCount);
    }
    if (message.stClearCount !== 0) {
      writer.uint32(80).uint32(message.stClearCount);
    }
    if (message.stLoseBits !== 0) {
      writer.uint32(88).uint64(message.stLoseBits);
    }
    if (message.stConsecutiveWins !== 0) {
      writer.uint32(104).uint32(message.stConsecutiveWins);
    }
    if (message.stConsecutiveWinsMax !== 0) {
      writer.uint32(112).uint32(message.stConsecutiveWinsMax);
    }
    if (message.fullTunedCarCouponUnreceivableAt !== 0) {
      writer.uint32(136).uint32(message.fullTunedCarCouponUnreceivableAt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateCarResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateCarResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.error = reader.int32() as any;
          break;
        case 2:
          message.accessCode = reader.string();
          break;
        case 3:
          message.banapassportAmId = reader.uint32();
          break;
        case 4:
          message.mbid = reader.uint32();
          break;
        case 5:
          message.userId = reader.uint32();
          break;
        case 6:
          message.carId = reader.uint32();
          break;
        case 8:
          message.stClearBits = reader.uint32();
          break;
        case 9:
          message.stClearDivCount = reader.uint32();
          break;
        case 10:
          message.stClearCount = reader.uint32();
          break;
        case 11:
          message.stLoseBits = longToNumber(reader.uint64() as Long);
          break;
        case 13:
          message.stConsecutiveWins = reader.uint32();
          break;
        case 14:
          message.stConsecutiveWinsMax = reader.uint32();
          break;
        case 17:
          message.fullTunedCarCouponUnreceivableAt = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateCarResponse {
    return {
      error: isSet(object.error) ? errorCodeFromJSON(object.error) : 0,
      accessCode: isSet(object.accessCode) ? String(object.accessCode) : "",
      banapassportAmId: isSet(object.banapassportAmId)
        ? Number(object.banapassportAmId)
        : 0,
      mbid: isSet(object.mbid) ? Number(object.mbid) : 0,
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      carId: isSet(object.carId) ? Number(object.carId) : 0,
      stClearBits: isSet(object.stClearBits) ? Number(object.stClearBits) : 0,
      stClearDivCount: isSet(object.stClearDivCount)
        ? Number(object.stClearDivCount)
        : 0,
      stClearCount: isSet(object.stClearCount)
        ? Number(object.stClearCount)
        : 0,
      stLoseBits: isSet(object.stLoseBits) ? Number(object.stLoseBits) : 0,
      stConsecutiveWins: isSet(object.stConsecutiveWins)
        ? Number(object.stConsecutiveWins)
        : 0,
      stConsecutiveWinsMax: isSet(object.stConsecutiveWinsMax)
        ? Number(object.stConsecutiveWinsMax)
        : 0,
      fullTunedCarCouponUnreceivableAt: isSet(
        object.fullTunedCarCouponUnreceivableAt
      )
        ? Number(object.fullTunedCarCouponUnreceivableAt)
        : 0,
    };
  },

  toJSON(message: CreateCarResponse): unknown {
    const obj: any = {};
    message.error !== undefined && (obj.error = errorCodeToJSON(message.error));
    message.accessCode !== undefined && (obj.accessCode = message.accessCode);
    message.banapassportAmId !== undefined &&
      (obj.banapassportAmId = Math.round(message.banapassportAmId));
    message.mbid !== undefined && (obj.mbid = Math.round(message.mbid));
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.carId !== undefined && (obj.carId = Math.round(message.carId));
    message.stClearBits !== undefined &&
      (obj.stClearBits = Math.round(message.stClearBits));
    message.stClearDivCount !== undefined &&
      (obj.stClearDivCount = Math.round(message.stClearDivCount));
    message.stClearCount !== undefined &&
      (obj.stClearCount = Math.round(message.stClearCount));
    message.stLoseBits !== undefined &&
      (obj.stLoseBits = Math.round(message.stLoseBits));
    message.stConsecutiveWins !== undefined &&
      (obj.stConsecutiveWins = Math.round(message.stConsecutiveWins));
    message.stConsecutiveWinsMax !== undefined &&
      (obj.stConsecutiveWinsMax = Math.round(message.stConsecutiveWinsMax));
    message.fullTunedCarCouponUnreceivableAt !== undefined &&
      (obj.fullTunedCarCouponUnreceivableAt = Math.round(
        message.fullTunedCarCouponUnreceivableAt
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateCarResponse>, I>>(
    object: I
  ): CreateCarResponse {
    const message = createBaseCreateCarResponse();
    message.error = object.error ?? 0;
    message.accessCode = object.accessCode ?? "";
    message.banapassportAmId = object.banapassportAmId ?? 0;
    message.mbid = object.mbid ?? 0;
    message.userId = object.userId ?? 0;
    message.carId = object.carId ?? 0;
    message.stClearBits = object.stClearBits ?? 0;
    message.stClearDivCount = object.stClearDivCount ?? 0;
    message.stClearCount = object.stClearCount ?? 0;
    message.stLoseBits = object.stLoseBits ?? 0;
    message.stConsecutiveWins = object.stConsecutiveWins ?? 0;
    message.stConsecutiveWinsMax = object.stConsecutiveWinsMax ?? 0;
    message.fullTunedCarCouponUnreceivableAt =
      object.fullTunedCarCouponUnreceivableAt ?? 0;
    return message;
  },
};

function createBaseLoadGameHistoryRequest(): LoadGameHistoryRequest {
  return { carId: 0 };
}

export const LoadGameHistoryRequest = {
  encode(
    message: LoadGameHistoryRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.carId !== 0) {
      writer.uint32(8).uint32(message.carId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LoadGameHistoryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoadGameHistoryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.carId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LoadGameHistoryRequest {
    return {
      carId: isSet(object.carId) ? Number(object.carId) : 0,
    };
  },

  toJSON(message: LoadGameHistoryRequest): unknown {
    const obj: any = {};
    message.carId !== undefined && (obj.carId = Math.round(message.carId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LoadGameHistoryRequest>, I>>(
    object: I
  ): LoadGameHistoryRequest {
    const message = createBaseLoadGameHistoryRequest();
    message.carId = object.carId ?? 0;
    return message;
  },
};

function createBaseLoadGameHistoryResponse(): LoadGameHistoryResponse {
  return {
    error: 0,
    taRecords: [],
    taRankingUpdatedAt: 0,
    ghostHistory: [],
    ghostBattleCount: 0,
    ghostBattleWinCount: 0,
    stampSheetCount: 0,
    stampSheet: [],
  };
}

export const LoadGameHistoryResponse = {
  encode(
    message: LoadGameHistoryResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.error !== 0) {
      writer.uint32(8).int32(message.error);
    }
    for (const v of message.taRecords) {
      LoadGameHistoryResponse_TimeAttackRecord.encode(
        v!,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.taRankingUpdatedAt !== 0) {
      writer.uint32(24).uint32(message.taRankingUpdatedAt);
    }
    for (const v of message.ghostHistory) {
      LoadGameHistoryResponse_GhostBattleRecord.encode(
        v!,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.ghostBattleCount !== 0) {
      writer.uint32(40).uint32(message.ghostBattleCount);
    }
    if (message.ghostBattleWinCount !== 0) {
      writer.uint32(48).uint32(message.ghostBattleWinCount);
    }
    if (message.stampSheetCount !== 0) {
      writer.uint32(56).uint32(message.stampSheetCount);
    }
    writer.uint32(66).fork();
    for (const v of message.stampSheet) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LoadGameHistoryResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoadGameHistoryResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.error = reader.int32() as any;
          break;
        case 2:
          message.taRecords.push(
            LoadGameHistoryResponse_TimeAttackRecord.decode(
              reader,
              reader.uint32()
            )
          );
          break;
        case 3:
          message.taRankingUpdatedAt = reader.uint32();
          break;
        case 4:
          message.ghostHistory.push(
            LoadGameHistoryResponse_GhostBattleRecord.decode(
              reader,
              reader.uint32()
            )
          );
          break;
        case 5:
          message.ghostBattleCount = reader.uint32();
          break;
        case 6:
          message.ghostBattleWinCount = reader.uint32();
          break;
        case 7:
          message.stampSheetCount = reader.uint32();
          break;
        case 8:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.stampSheet.push(reader.uint32());
            }
          } else {
            message.stampSheet.push(reader.uint32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LoadGameHistoryResponse {
    return {
      error: isSet(object.error) ? errorCodeFromJSON(object.error) : 0,
      taRecords: Array.isArray(object?.taRecords)
        ? object.taRecords.map((e: any) =>
            LoadGameHistoryResponse_TimeAttackRecord.fromJSON(e)
          )
        : [],
      taRankingUpdatedAt: isSet(object.taRankingUpdatedAt)
        ? Number(object.taRankingUpdatedAt)
        : 0,
      ghostHistory: Array.isArray(object?.ghostHistory)
        ? object.ghostHistory.map((e: any) =>
            LoadGameHistoryResponse_GhostBattleRecord.fromJSON(e)
          )
        : [],
      ghostBattleCount: isSet(object.ghostBattleCount)
        ? Number(object.ghostBattleCount)
        : 0,
      ghostBattleWinCount: isSet(object.ghostBattleWinCount)
        ? Number(object.ghostBattleWinCount)
        : 0,
      stampSheetCount: isSet(object.stampSheetCount)
        ? Number(object.stampSheetCount)
        : 0,
      stampSheet: Array.isArray(object?.stampSheet)
        ? object.stampSheet.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: LoadGameHistoryResponse): unknown {
    const obj: any = {};
    message.error !== undefined && (obj.error = errorCodeToJSON(message.error));
    if (message.taRecords) {
      obj.taRecords = message.taRecords.map((e) =>
        e ? LoadGameHistoryResponse_TimeAttackRecord.toJSON(e) : undefined
      );
    } else {
      obj.taRecords = [];
    }
    message.taRankingUpdatedAt !== undefined &&
      (obj.taRankingUpdatedAt = Math.round(message.taRankingUpdatedAt));
    if (message.ghostHistory) {
      obj.ghostHistory = message.ghostHistory.map((e) =>
        e ? LoadGameHistoryResponse_GhostBattleRecord.toJSON(e) : undefined
      );
    } else {
      obj.ghostHistory = [];
    }
    message.ghostBattleCount !== undefined &&
      (obj.ghostBattleCount = Math.round(message.ghostBattleCount));
    message.ghostBattleWinCount !== undefined &&
      (obj.ghostBattleWinCount = Math.round(message.ghostBattleWinCount));
    message.stampSheetCount !== undefined &&
      (obj.stampSheetCount = Math.round(message.stampSheetCount));
    if (message.stampSheet) {
      obj.stampSheet = message.stampSheet.map((e) => Math.round(e));
    } else {
      obj.stampSheet = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LoadGameHistoryResponse>, I>>(
    object: I
  ): LoadGameHistoryResponse {
    const message = createBaseLoadGameHistoryResponse();
    message.error = object.error ?? 0;
    message.taRecords =
      object.taRecords?.map((e) =>
        LoadGameHistoryResponse_TimeAttackRecord.fromPartial(e)
      ) || [];
    message.taRankingUpdatedAt = object.taRankingUpdatedAt ?? 0;
    message.ghostHistory =
      object.ghostHistory?.map((e) =>
        LoadGameHistoryResponse_GhostBattleRecord.fromPartial(e)
      ) || [];
    message.ghostBattleCount = object.ghostBattleCount ?? 0;
    message.ghostBattleWinCount = object.ghostBattleWinCount ?? 0;
    message.stampSheetCount = object.stampSheetCount ?? 0;
    message.stampSheet = object.stampSheet?.map((e) => e) || [];
    return message;
  },
};

function createBaseLoadGameHistoryResponse_TimeAttackRecord(): LoadGameHistoryResponse_TimeAttackRecord {
  return {
    course: 0,
    time: 0,
    tunePower: 0,
    tuneHandling: 0,
    wholeRank: 0,
    wholeParticipants: 0,
    modelRank: 0,
    modelParticipants: 0,
  };
}

export const LoadGameHistoryResponse_TimeAttackRecord = {
  encode(
    message: LoadGameHistoryResponse_TimeAttackRecord,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.course !== 0) {
      writer.uint32(8).uint32(message.course);
    }
    if (message.time !== 0) {
      writer.uint32(16).uint32(message.time);
    }
    if (message.tunePower !== 0) {
      writer.uint32(24).uint32(message.tunePower);
    }
    if (message.tuneHandling !== 0) {
      writer.uint32(32).uint32(message.tuneHandling);
    }
    if (message.wholeRank !== 0) {
      writer.uint32(40).uint32(message.wholeRank);
    }
    if (message.wholeParticipants !== 0) {
      writer.uint32(48).uint32(message.wholeParticipants);
    }
    if (message.modelRank !== 0) {
      writer.uint32(56).uint32(message.modelRank);
    }
    if (message.modelParticipants !== 0) {
      writer.uint32(64).uint32(message.modelParticipants);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LoadGameHistoryResponse_TimeAttackRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoadGameHistoryResponse_TimeAttackRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.course = reader.uint32();
          break;
        case 2:
          message.time = reader.uint32();
          break;
        case 3:
          message.tunePower = reader.uint32();
          break;
        case 4:
          message.tuneHandling = reader.uint32();
          break;
        case 5:
          message.wholeRank = reader.uint32();
          break;
        case 6:
          message.wholeParticipants = reader.uint32();
          break;
        case 7:
          message.modelRank = reader.uint32();
          break;
        case 8:
          message.modelParticipants = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LoadGameHistoryResponse_TimeAttackRecord {
    return {
      course: isSet(object.course) ? Number(object.course) : 0,
      time: isSet(object.time) ? Number(object.time) : 0,
      tunePower: isSet(object.tunePower) ? Number(object.tunePower) : 0,
      tuneHandling: isSet(object.tuneHandling)
        ? Number(object.tuneHandling)
        : 0,
      wholeRank: isSet(object.wholeRank) ? Number(object.wholeRank) : 0,
      wholeParticipants: isSet(object.wholeParticipants)
        ? Number(object.wholeParticipants)
        : 0,
      modelRank: isSet(object.modelRank) ? Number(object.modelRank) : 0,
      modelParticipants: isSet(object.modelParticipants)
        ? Number(object.modelParticipants)
        : 0,
    };
  },

  toJSON(message: LoadGameHistoryResponse_TimeAttackRecord): unknown {
    const obj: any = {};
    message.course !== undefined && (obj.course = Math.round(message.course));
    message.time !== undefined && (obj.time = Math.round(message.time));
    message.tunePower !== undefined &&
      (obj.tunePower = Math.round(message.tunePower));
    message.tuneHandling !== undefined &&
      (obj.tuneHandling = Math.round(message.tuneHandling));
    message.wholeRank !== undefined &&
      (obj.wholeRank = Math.round(message.wholeRank));
    message.wholeParticipants !== undefined &&
      (obj.wholeParticipants = Math.round(message.wholeParticipants));
    message.modelRank !== undefined &&
      (obj.modelRank = Math.round(message.modelRank));
    message.modelParticipants !== undefined &&
      (obj.modelParticipants = Math.round(message.modelParticipants));
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<LoadGameHistoryResponse_TimeAttackRecord>, I>
  >(object: I): LoadGameHistoryResponse_TimeAttackRecord {
    const message = createBaseLoadGameHistoryResponse_TimeAttackRecord();
    message.course = object.course ?? 0;
    message.time = object.time ?? 0;
    message.tunePower = object.tunePower ?? 0;
    message.tuneHandling = object.tuneHandling ?? 0;
    message.wholeRank = object.wholeRank ?? 0;
    message.wholeParticipants = object.wholeParticipants ?? 0;
    message.modelRank = object.modelRank ?? 0;
    message.modelParticipants = object.modelParticipants ?? 0;
    return message;
  },
};

function createBaseLoadGameHistoryResponse_GhostBattleRecord(): LoadGameHistoryResponse_GhostBattleRecord {
  return {
    carSetting: undefined,
    opponent: undefined,
    mobs: [],
    area: 0,
    playedAt: 0,
    playedShopName: "",
  };
}

export const LoadGameHistoryResponse_GhostBattleRecord = {
  encode(
    message: LoadGameHistoryResponse_GhostBattleRecord,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.carSetting !== undefined) {
      LoadGameHistoryResponse_GhostBattleRecord_GhostCarSetting.encode(
        message.carSetting,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.opponent !== undefined) {
      LoadGameHistoryResponse_GhostBattleRecord_GhostBattleRecordCar.encode(
        message.opponent,
        writer.uint32(18).fork()
      ).ldelim();
    }
    for (const v of message.mobs) {
      LoadGameHistoryResponse_GhostBattleRecord_GhostBattleRecordCar.encode(
        v!,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.area !== 0) {
      writer.uint32(32).uint32(message.area);
    }
    if (message.playedAt !== 0) {
      writer.uint32(40).uint32(message.playedAt);
    }
    if (message.playedShopName !== "") {
      writer.uint32(50).string(message.playedShopName);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LoadGameHistoryResponse_GhostBattleRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoadGameHistoryResponse_GhostBattleRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.carSetting =
            LoadGameHistoryResponse_GhostBattleRecord_GhostCarSetting.decode(
              reader,
              reader.uint32()
            );
          break;
        case 2:
          message.opponent =
            LoadGameHistoryResponse_GhostBattleRecord_GhostBattleRecordCar.decode(
              reader,
              reader.uint32()
            );
          break;
        case 3:
          message.mobs.push(
            LoadGameHistoryResponse_GhostBattleRecord_GhostBattleRecordCar.decode(
              reader,
              reader.uint32()
            )
          );
          break;
        case 4:
          message.area = reader.uint32();
          break;
        case 5:
          message.playedAt = reader.uint32();
          break;
        case 6:
          message.playedShopName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LoadGameHistoryResponse_GhostBattleRecord {
    return {
      carSetting: isSet(object.carSetting)
        ? LoadGameHistoryResponse_GhostBattleRecord_GhostCarSetting.fromJSON(
            object.carSetting
          )
        : undefined,
      opponent: isSet(object.opponent)
        ? LoadGameHistoryResponse_GhostBattleRecord_GhostBattleRecordCar.fromJSON(
            object.opponent
          )
        : undefined,
      mobs: Array.isArray(object?.mobs)
        ? object.mobs.map((e: any) =>
            LoadGameHistoryResponse_GhostBattleRecord_GhostBattleRecordCar.fromJSON(
              e
            )
          )
        : [],
      area: isSet(object.area) ? Number(object.area) : 0,
      playedAt: isSet(object.playedAt) ? Number(object.playedAt) : 0,
      playedShopName: isSet(object.playedShopName)
        ? String(object.playedShopName)
        : "",
    };
  },

  toJSON(message: LoadGameHistoryResponse_GhostBattleRecord): unknown {
    const obj: any = {};
    message.carSetting !== undefined &&
      (obj.carSetting = message.carSetting
        ? LoadGameHistoryResponse_GhostBattleRecord_GhostCarSetting.toJSON(
            message.carSetting
          )
        : undefined);
    message.opponent !== undefined &&
      (obj.opponent = message.opponent
        ? LoadGameHistoryResponse_GhostBattleRecord_GhostBattleRecordCar.toJSON(
            message.opponent
          )
        : undefined);
    if (message.mobs) {
      obj.mobs = message.mobs.map((e) =>
        e
          ? LoadGameHistoryResponse_GhostBattleRecord_GhostBattleRecordCar.toJSON(
              e
            )
          : undefined
      );
    } else {
      obj.mobs = [];
    }
    message.area !== undefined && (obj.area = Math.round(message.area));
    message.playedAt !== undefined &&
      (obj.playedAt = Math.round(message.playedAt));
    message.playedShopName !== undefined &&
      (obj.playedShopName = message.playedShopName);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<LoadGameHistoryResponse_GhostBattleRecord>, I>
  >(object: I): LoadGameHistoryResponse_GhostBattleRecord {
    const message = createBaseLoadGameHistoryResponse_GhostBattleRecord();
    message.carSetting =
      object.carSetting !== undefined && object.carSetting !== null
        ? LoadGameHistoryResponse_GhostBattleRecord_GhostCarSetting.fromPartial(
            object.carSetting
          )
        : undefined;
    message.opponent =
      object.opponent !== undefined && object.opponent !== null
        ? LoadGameHistoryResponse_GhostBattleRecord_GhostBattleRecordCar.fromPartial(
            object.opponent
          )
        : undefined;
    message.mobs =
      object.mobs?.map((e) =>
        LoadGameHistoryResponse_GhostBattleRecord_GhostBattleRecordCar.fromPartial(
          e
        )
      ) || [];
    message.area = object.area ?? 0;
    message.playedAt = object.playedAt ?? 0;
    message.playedShopName = object.playedShopName ?? "";
    return message;
  },
};

function createBaseLoadGameHistoryResponse_GhostBattleRecord_GhostCarSetting(): LoadGameHistoryResponse_GhostBattleRecord_GhostCarSetting {
  return { tunePower: 0, tuneHandling: 0 };
}

export const LoadGameHistoryResponse_GhostBattleRecord_GhostCarSetting = {
  encode(
    message: LoadGameHistoryResponse_GhostBattleRecord_GhostCarSetting,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.tunePower !== 0) {
      writer.uint32(8).uint32(message.tunePower);
    }
    if (message.tuneHandling !== 0) {
      writer.uint32(16).uint32(message.tuneHandling);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LoadGameHistoryResponse_GhostBattleRecord_GhostCarSetting {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseLoadGameHistoryResponse_GhostBattleRecord_GhostCarSetting();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tunePower = reader.uint32();
          break;
        case 2:
          message.tuneHandling = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(
    object: any
  ): LoadGameHistoryResponse_GhostBattleRecord_GhostCarSetting {
    return {
      tunePower: isSet(object.tunePower) ? Number(object.tunePower) : 0,
      tuneHandling: isSet(object.tuneHandling)
        ? Number(object.tuneHandling)
        : 0,
    };
  },

  toJSON(
    message: LoadGameHistoryResponse_GhostBattleRecord_GhostCarSetting
  ): unknown {
    const obj: any = {};
    message.tunePower !== undefined &&
      (obj.tunePower = Math.round(message.tunePower));
    message.tuneHandling !== undefined &&
      (obj.tuneHandling = Math.round(message.tuneHandling));
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<LoadGameHistoryResponse_GhostBattleRecord_GhostCarSetting>,
      I
    >
  >(object: I): LoadGameHistoryResponse_GhostBattleRecord_GhostCarSetting {
    const message =
      createBaseLoadGameHistoryResponse_GhostBattleRecord_GhostCarSetting();
    message.tunePower = object.tunePower ?? 0;
    message.tuneHandling = object.tuneHandling ?? 0;
    return message;
  },
};

function createBaseLoadGameHistoryResponse_GhostBattleRecord_GhostBattleRecordCar(): LoadGameHistoryResponse_GhostBattleRecord_GhostBattleRecordCar {
  return { car: undefined, result: 0 };
}

export const LoadGameHistoryResponse_GhostBattleRecord_GhostBattleRecordCar = {
  encode(
    message: LoadGameHistoryResponse_GhostBattleRecord_GhostBattleRecordCar,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.car !== undefined) {
      Car.encode(message.car, writer.uint32(10).fork()).ldelim();
    }
    if (message.result !== 0) {
      writer.uint32(16).int32(message.result);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LoadGameHistoryResponse_GhostBattleRecord_GhostBattleRecordCar {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseLoadGameHistoryResponse_GhostBattleRecord_GhostBattleRecordCar();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.car = Car.decode(reader, reader.uint32());
          break;
        case 2:
          message.result = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(
    object: any
  ): LoadGameHistoryResponse_GhostBattleRecord_GhostBattleRecordCar {
    return {
      car: isSet(object.car) ? Car.fromJSON(object.car) : undefined,
      result: isSet(object.result) ? Number(object.result) : 0,
    };
  },

  toJSON(
    message: LoadGameHistoryResponse_GhostBattleRecord_GhostBattleRecordCar
  ): unknown {
    const obj: any = {};
    message.car !== undefined &&
      (obj.car = message.car ? Car.toJSON(message.car) : undefined);
    message.result !== undefined && (obj.result = Math.round(message.result));
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<LoadGameHistoryResponse_GhostBattleRecord_GhostBattleRecordCar>,
      I
    >
  >(object: I): LoadGameHistoryResponse_GhostBattleRecord_GhostBattleRecordCar {
    const message =
      createBaseLoadGameHistoryResponse_GhostBattleRecord_GhostBattleRecordCar();
    message.car =
      object.car !== undefined && object.car !== null
        ? Car.fromPartial(object.car)
        : undefined;
    message.result = object.result ?? 0;
    return message;
  },
};

function createBaseUpdateCarRequest(): UpdateCarRequest {
  return {
    carId: 0,
    car: undefined,
    earnedItems: [],
    setting: undefined,
    toBeDeleted: false,
    auraMotifAutoChange: false,
    rgStamp: 0,
    timestamp: 0,
  };
}

export const UpdateCarRequest = {
  encode(
    message: UpdateCarRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.carId !== 0) {
      writer.uint32(8).uint32(message.carId);
    }
    if (message.car !== undefined) {
      Car.encode(message.car, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.earnedItems) {
      CarItem.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.setting !== undefined) {
      CarSetting.encode(message.setting, writer.uint32(42).fork()).ldelim();
    }
    if (message.toBeDeleted === true) {
      writer.uint32(72).bool(message.toBeDeleted);
    }
    if (message.auraMotifAutoChange === true) {
      writer.uint32(80).bool(message.auraMotifAutoChange);
    }
    if (message.rgStamp !== 0) {
      writer.uint32(96).uint32(message.rgStamp);
    }
    if (message.timestamp !== 0) {
      writer.uint32(104).uint32(message.timestamp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateCarRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateCarRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.carId = reader.uint32();
          break;
        case 2:
          message.car = Car.decode(reader, reader.uint32());
          break;
        case 4:
          message.earnedItems.push(CarItem.decode(reader, reader.uint32()));
          break;
        case 5:
          message.setting = CarSetting.decode(reader, reader.uint32());
          break;
        case 9:
          message.toBeDeleted = reader.bool();
          break;
        case 10:
          message.auraMotifAutoChange = reader.bool();
          break;
        case 12:
          message.rgStamp = reader.uint32();
          break;
        case 13:
          message.timestamp = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateCarRequest {
    return {
      carId: isSet(object.carId) ? Number(object.carId) : 0,
      car: isSet(object.car) ? Car.fromJSON(object.car) : undefined,
      earnedItems: Array.isArray(object?.earnedItems)
        ? object.earnedItems.map((e: any) => CarItem.fromJSON(e))
        : [],
      setting: isSet(object.setting)
        ? CarSetting.fromJSON(object.setting)
        : undefined,
      toBeDeleted: isSet(object.toBeDeleted)
        ? Boolean(object.toBeDeleted)
        : false,
      auraMotifAutoChange: isSet(object.auraMotifAutoChange)
        ? Boolean(object.auraMotifAutoChange)
        : false,
      rgStamp: isSet(object.rgStamp) ? Number(object.rgStamp) : 0,
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
    };
  },

  toJSON(message: UpdateCarRequest): unknown {
    const obj: any = {};
    message.carId !== undefined && (obj.carId = Math.round(message.carId));
    message.car !== undefined &&
      (obj.car = message.car ? Car.toJSON(message.car) : undefined);
    if (message.earnedItems) {
      obj.earnedItems = message.earnedItems.map((e) =>
        e ? CarItem.toJSON(e) : undefined
      );
    } else {
      obj.earnedItems = [];
    }
    message.setting !== undefined &&
      (obj.setting = message.setting
        ? CarSetting.toJSON(message.setting)
        : undefined);
    message.toBeDeleted !== undefined &&
      (obj.toBeDeleted = message.toBeDeleted);
    message.auraMotifAutoChange !== undefined &&
      (obj.auraMotifAutoChange = message.auraMotifAutoChange);
    message.rgStamp !== undefined &&
      (obj.rgStamp = Math.round(message.rgStamp));
    message.timestamp !== undefined &&
      (obj.timestamp = Math.round(message.timestamp));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateCarRequest>, I>>(
    object: I
  ): UpdateCarRequest {
    const message = createBaseUpdateCarRequest();
    message.carId = object.carId ?? 0;
    message.car =
      object.car !== undefined && object.car !== null
        ? Car.fromPartial(object.car)
        : undefined;
    message.earnedItems =
      object.earnedItems?.map((e) => CarItem.fromPartial(e)) || [];
    message.setting =
      object.setting !== undefined && object.setting !== null
        ? CarSetting.fromPartial(object.setting)
        : undefined;
    message.toBeDeleted = object.toBeDeleted ?? false;
    message.auraMotifAutoChange = object.auraMotifAutoChange ?? false;
    message.rgStamp = object.rgStamp ?? 0;
    message.timestamp = object.timestamp ?? 0;
    return message;
  },
};

function createBaseUpdateCarResponse(): UpdateCarResponse {
  return { error: 0 };
}

export const UpdateCarResponse = {
  encode(
    message: UpdateCarResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.error !== 0) {
      writer.uint32(8).int32(message.error);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateCarResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateCarResponse();
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

  fromJSON(object: any): UpdateCarResponse {
    return {
      error: isSet(object.error) ? errorCodeFromJSON(object.error) : 0,
    };
  },

  toJSON(message: UpdateCarResponse): unknown {
    const obj: any = {};
    message.error !== undefined && (obj.error = errorCodeToJSON(message.error));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateCarResponse>, I>>(
    object: I
  ): UpdateCarResponse {
    const message = createBaseUpdateCarResponse();
    message.error = object.error ?? 0;
    return message;
  },
};

function createBaseSaveGameResultRequest(): SaveGameResultRequest {
  return {
    carId: 0,
    gameMode: 1,
    playedAt: 0,
    playCount: 0,
    retired: false,
    timeup: false,
    car: undefined,
    setting: undefined,
    odometer: 0,
    earnedCustomColor: false,
    confirmedTutorials: [],
    earnedItems: [],
    earnedUserItems: [],
    preservedTitles: [],
    neighborCars: [],
    stResult: undefined,
    taResult: undefined,
    vsResult: undefined,
    rgResult: undefined,
  };
}

export const SaveGameResultRequest = {
  encode(
    message: SaveGameResultRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.carId !== 0) {
      writer.uint32(8).uint32(message.carId);
    }
    if (message.gameMode !== 1) {
      writer.uint32(16).int32(message.gameMode);
    }
    if (message.playedAt !== 0) {
      writer.uint32(24).uint32(message.playedAt);
    }
    if (message.playCount !== 0) {
      writer.uint32(32).uint32(message.playCount);
    }
    if (message.retired === true) {
      writer.uint32(40).bool(message.retired);
    }
    if (message.timeup === true) {
      writer.uint32(48).bool(message.timeup);
    }
    if (message.car !== undefined) {
      Car.encode(message.car, writer.uint32(58).fork()).ldelim();
    }
    if (message.setting !== undefined) {
      CarSetting.encode(message.setting, writer.uint32(66).fork()).ldelim();
    }
    if (message.odometer !== 0) {
      writer.uint32(72).uint32(message.odometer);
    }
    if (message.earnedCustomColor === true) {
      writer.uint32(88).bool(message.earnedCustomColor);
    }
    writer.uint32(98).fork();
    for (const v of message.confirmedTutorials) {
      writer.int32(v);
    }
    writer.ldelim();
    for (const v of message.earnedItems) {
      CarItem.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    for (const v of message.earnedUserItems) {
      UserItem.encode(v!, writer.uint32(114).fork()).ldelim();
    }
    for (const v of message.preservedTitles) {
      writer.uint32(122).string(v!);
    }
    writer.uint32(170).fork();
    for (const v of message.neighborCars) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.stResult !== undefined) {
      SaveGameResultRequest_StoryResult.encode(
        message.stResult,
        writer.uint32(178).fork()
      ).ldelim();
    }
    if (message.taResult !== undefined) {
      SaveGameResultRequest_TimeAttackResult.encode(
        message.taResult,
        writer.uint32(186).fork()
      ).ldelim();
    }
    if (message.vsResult !== undefined) {
      SaveGameResultRequest_VersusBattleResult.encode(
        message.vsResult,
        writer.uint32(194).fork()
      ).ldelim();
    }
    if (message.rgResult !== undefined) {
      SaveGameResultRequest_GhostBattleResult.encode(
        message.rgResult,
        writer.uint32(202).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SaveGameResultRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSaveGameResultRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.carId = reader.uint32();
          break;
        case 2:
          message.gameMode = reader.int32() as any;
          break;
        case 3:
          message.playedAt = reader.uint32();
          break;
        case 4:
          message.playCount = reader.uint32();
          break;
        case 5:
          message.retired = reader.bool();
          break;
        case 6:
          message.timeup = reader.bool();
          break;
        case 7:
          message.car = Car.decode(reader, reader.uint32());
          break;
        case 8:
          message.setting = CarSetting.decode(reader, reader.uint32());
          break;
        case 9:
          message.odometer = reader.uint32();
          break;
        case 11:
          message.earnedCustomColor = reader.bool();
          break;
        case 12:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.confirmedTutorials.push(reader.int32() as any);
            }
          } else {
            message.confirmedTutorials.push(reader.int32() as any);
          }
          break;
        case 13:
          message.earnedItems.push(CarItem.decode(reader, reader.uint32()));
          break;
        case 14:
          message.earnedUserItems.push(
            UserItem.decode(reader, reader.uint32())
          );
          break;
        case 15:
          message.preservedTitles.push(reader.string());
          break;
        case 21:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.neighborCars.push(reader.uint32());
            }
          } else {
            message.neighborCars.push(reader.uint32());
          }
          break;
        case 22:
          message.stResult = SaveGameResultRequest_StoryResult.decode(
            reader,
            reader.uint32()
          );
          break;
        case 23:
          message.taResult = SaveGameResultRequest_TimeAttackResult.decode(
            reader,
            reader.uint32()
          );
          break;
        case 24:
          message.vsResult = SaveGameResultRequest_VersusBattleResult.decode(
            reader,
            reader.uint32()
          );
          break;
        case 25:
          message.rgResult = SaveGameResultRequest_GhostBattleResult.decode(
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

  fromJSON(object: any): SaveGameResultRequest {
    return {
      carId: isSet(object.carId) ? Number(object.carId) : 0,
      gameMode: isSet(object.gameMode) ? gameModeFromJSON(object.gameMode) : 1,
      playedAt: isSet(object.playedAt) ? Number(object.playedAt) : 0,
      playCount: isSet(object.playCount) ? Number(object.playCount) : 0,
      retired: isSet(object.retired) ? Boolean(object.retired) : false,
      timeup: isSet(object.timeup) ? Boolean(object.timeup) : false,
      car: isSet(object.car) ? Car.fromJSON(object.car) : undefined,
      setting: isSet(object.setting)
        ? CarSetting.fromJSON(object.setting)
        : undefined,
      odometer: isSet(object.odometer) ? Number(object.odometer) : 0,
      earnedCustomColor: isSet(object.earnedCustomColor)
        ? Boolean(object.earnedCustomColor)
        : false,
      confirmedTutorials: Array.isArray(object?.confirmedTutorials)
        ? object.confirmedTutorials.map((e: any) => tutorialTypeFromJSON(e))
        : [],
      earnedItems: Array.isArray(object?.earnedItems)
        ? object.earnedItems.map((e: any) => CarItem.fromJSON(e))
        : [],
      earnedUserItems: Array.isArray(object?.earnedUserItems)
        ? object.earnedUserItems.map((e: any) => UserItem.fromJSON(e))
        : [],
      preservedTitles: Array.isArray(object?.preservedTitles)
        ? object.preservedTitles.map((e: any) => String(e))
        : [],
      neighborCars: Array.isArray(object?.neighborCars)
        ? object.neighborCars.map((e: any) => Number(e))
        : [],
      stResult: isSet(object.stResult)
        ? SaveGameResultRequest_StoryResult.fromJSON(object.stResult)
        : undefined,
      taResult: isSet(object.taResult)
        ? SaveGameResultRequest_TimeAttackResult.fromJSON(object.taResult)
        : undefined,
      vsResult: isSet(object.vsResult)
        ? SaveGameResultRequest_VersusBattleResult.fromJSON(object.vsResult)
        : undefined,
      rgResult: isSet(object.rgResult)
        ? SaveGameResultRequest_GhostBattleResult.fromJSON(object.rgResult)
        : undefined,
    };
  },

  toJSON(message: SaveGameResultRequest): unknown {
    const obj: any = {};
    message.carId !== undefined && (obj.carId = Math.round(message.carId));
    message.gameMode !== undefined &&
      (obj.gameMode = gameModeToJSON(message.gameMode));
    message.playedAt !== undefined &&
      (obj.playedAt = Math.round(message.playedAt));
    message.playCount !== undefined &&
      (obj.playCount = Math.round(message.playCount));
    message.retired !== undefined && (obj.retired = message.retired);
    message.timeup !== undefined && (obj.timeup = message.timeup);
    message.car !== undefined &&
      (obj.car = message.car ? Car.toJSON(message.car) : undefined);
    message.setting !== undefined &&
      (obj.setting = message.setting
        ? CarSetting.toJSON(message.setting)
        : undefined);
    message.odometer !== undefined &&
      (obj.odometer = Math.round(message.odometer));
    message.earnedCustomColor !== undefined &&
      (obj.earnedCustomColor = message.earnedCustomColor);
    if (message.confirmedTutorials) {
      obj.confirmedTutorials = message.confirmedTutorials.map((e) =>
        tutorialTypeToJSON(e)
      );
    } else {
      obj.confirmedTutorials = [];
    }
    if (message.earnedItems) {
      obj.earnedItems = message.earnedItems.map((e) =>
        e ? CarItem.toJSON(e) : undefined
      );
    } else {
      obj.earnedItems = [];
    }
    if (message.earnedUserItems) {
      obj.earnedUserItems = message.earnedUserItems.map((e) =>
        e ? UserItem.toJSON(e) : undefined
      );
    } else {
      obj.earnedUserItems = [];
    }
    if (message.preservedTitles) {
      obj.preservedTitles = message.preservedTitles.map((e) => e);
    } else {
      obj.preservedTitles = [];
    }
    if (message.neighborCars) {
      obj.neighborCars = message.neighborCars.map((e) => Math.round(e));
    } else {
      obj.neighborCars = [];
    }
    message.stResult !== undefined &&
      (obj.stResult = message.stResult
        ? SaveGameResultRequest_StoryResult.toJSON(message.stResult)
        : undefined);
    message.taResult !== undefined &&
      (obj.taResult = message.taResult
        ? SaveGameResultRequest_TimeAttackResult.toJSON(message.taResult)
        : undefined);
    message.vsResult !== undefined &&
      (obj.vsResult = message.vsResult
        ? SaveGameResultRequest_VersusBattleResult.toJSON(message.vsResult)
        : undefined);
    message.rgResult !== undefined &&
      (obj.rgResult = message.rgResult
        ? SaveGameResultRequest_GhostBattleResult.toJSON(message.rgResult)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SaveGameResultRequest>, I>>(
    object: I
  ): SaveGameResultRequest {
    const message = createBaseSaveGameResultRequest();
    message.carId = object.carId ?? 0;
    message.gameMode = object.gameMode ?? 1;
    message.playedAt = object.playedAt ?? 0;
    message.playCount = object.playCount ?? 0;
    message.retired = object.retired ?? false;
    message.timeup = object.timeup ?? false;
    message.car =
      object.car !== undefined && object.car !== null
        ? Car.fromPartial(object.car)
        : undefined;
    message.setting =
      object.setting !== undefined && object.setting !== null
        ? CarSetting.fromPartial(object.setting)
        : undefined;
    message.odometer = object.odometer ?? 0;
    message.earnedCustomColor = object.earnedCustomColor ?? false;
    message.confirmedTutorials = object.confirmedTutorials?.map((e) => e) || [];
    message.earnedItems =
      object.earnedItems?.map((e) => CarItem.fromPartial(e)) || [];
    message.earnedUserItems =
      object.earnedUserItems?.map((e) => UserItem.fromPartial(e)) || [];
    message.preservedTitles = object.preservedTitles?.map((e) => e) || [];
    message.neighborCars = object.neighborCars?.map((e) => e) || [];
    message.stResult =
      object.stResult !== undefined && object.stResult !== null
        ? SaveGameResultRequest_StoryResult.fromPartial(object.stResult)
        : undefined;
    message.taResult =
      object.taResult !== undefined && object.taResult !== null
        ? SaveGameResultRequest_TimeAttackResult.fromPartial(object.taResult)
        : undefined;
    message.vsResult =
      object.vsResult !== undefined && object.vsResult !== null
        ? SaveGameResultRequest_VersusBattleResult.fromPartial(object.vsResult)
        : undefined;
    message.rgResult =
      object.rgResult !== undefined && object.rgResult !== null
        ? SaveGameResultRequest_GhostBattleResult.fromPartial(object.rgResult)
        : undefined;
    return message;
  },
};

function createBaseSaveGameResultRequest_StoryResult(): SaveGameResultRequest_StoryResult {
  return {
    stPlayCount: 0,
    stPlayedStory: 0,
    tuningPoint: 0,
    stClearBits: 0,
    stClearDivCount: 0,
    stClearCount: 0,
    stLoseBits: 0,
    stConsecutiveWins: 0,
    stCompleted100Episodes: false,
    isInsuranceUsed: false,
  };
}

export const SaveGameResultRequest_StoryResult = {
  encode(
    message: SaveGameResultRequest_StoryResult,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.stPlayCount !== 0) {
      writer.uint32(8).uint32(message.stPlayCount);
    }
    if (message.stPlayedStory !== 0) {
      writer.uint32(72).uint32(message.stPlayedStory);
    }
    if (message.tuningPoint !== 0) {
      writer.uint32(16).uint32(message.tuningPoint);
    }
    if (message.stClearBits !== 0) {
      writer.uint32(24).uint32(message.stClearBits);
    }
    if (message.stClearDivCount !== 0) {
      writer.uint32(32).uint32(message.stClearDivCount);
    }
    if (message.stClearCount !== 0) {
      writer.uint32(40).uint32(message.stClearCount);
    }
    if (message.stLoseBits !== 0) {
      writer.uint32(48).uint64(message.stLoseBits);
    }
    if (message.stConsecutiveWins !== 0) {
      writer.uint32(64).uint32(message.stConsecutiveWins);
    }
    if (message.stCompleted100Episodes === true) {
      writer.uint32(80).bool(message.stCompleted100Episodes);
    }
    if (message.isInsuranceUsed === true) {
      writer.uint32(88).bool(message.isInsuranceUsed);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SaveGameResultRequest_StoryResult {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSaveGameResultRequest_StoryResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stPlayCount = reader.uint32();
          break;
        case 9:
          message.stPlayedStory = reader.uint32();
          break;
        case 2:
          message.tuningPoint = reader.uint32();
          break;
        case 3:
          message.stClearBits = reader.uint32();
          break;
        case 4:
          message.stClearDivCount = reader.uint32();
          break;
        case 5:
          message.stClearCount = reader.uint32();
          break;
        case 6:
          message.stLoseBits = longToNumber(reader.uint64() as Long);
          break;
        case 8:
          message.stConsecutiveWins = reader.uint32();
          break;
        case 10:
          message.stCompleted100Episodes = reader.bool();
          break;
        case 11:
          message.isInsuranceUsed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SaveGameResultRequest_StoryResult {
    return {
      stPlayCount: isSet(object.stPlayCount) ? Number(object.stPlayCount) : 0,
      stPlayedStory: isSet(object.stPlayedStory)
        ? Number(object.stPlayedStory)
        : 0,
      tuningPoint: isSet(object.tuningPoint) ? Number(object.tuningPoint) : 0,
      stClearBits: isSet(object.stClearBits) ? Number(object.stClearBits) : 0,
      stClearDivCount: isSet(object.stClearDivCount)
        ? Number(object.stClearDivCount)
        : 0,
      stClearCount: isSet(object.stClearCount)
        ? Number(object.stClearCount)
        : 0,
      stLoseBits: isSet(object.stLoseBits) ? Number(object.stLoseBits) : 0,
      stConsecutiveWins: isSet(object.stConsecutiveWins)
        ? Number(object.stConsecutiveWins)
        : 0,
      stCompleted100Episodes: isSet(object.stCompleted100Episodes)
        ? Boolean(object.stCompleted100Episodes)
        : false,
      isInsuranceUsed: isSet(object.isInsuranceUsed)
        ? Boolean(object.isInsuranceUsed)
        : false,
    };
  },

  toJSON(message: SaveGameResultRequest_StoryResult): unknown {
    const obj: any = {};
    message.stPlayCount !== undefined &&
      (obj.stPlayCount = Math.round(message.stPlayCount));
    message.stPlayedStory !== undefined &&
      (obj.stPlayedStory = Math.round(message.stPlayedStory));
    message.tuningPoint !== undefined &&
      (obj.tuningPoint = Math.round(message.tuningPoint));
    message.stClearBits !== undefined &&
      (obj.stClearBits = Math.round(message.stClearBits));
    message.stClearDivCount !== undefined &&
      (obj.stClearDivCount = Math.round(message.stClearDivCount));
    message.stClearCount !== undefined &&
      (obj.stClearCount = Math.round(message.stClearCount));
    message.stLoseBits !== undefined &&
      (obj.stLoseBits = Math.round(message.stLoseBits));
    message.stConsecutiveWins !== undefined &&
      (obj.stConsecutiveWins = Math.round(message.stConsecutiveWins));
    message.stCompleted100Episodes !== undefined &&
      (obj.stCompleted100Episodes = message.stCompleted100Episodes);
    message.isInsuranceUsed !== undefined &&
      (obj.isInsuranceUsed = message.isInsuranceUsed);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<SaveGameResultRequest_StoryResult>, I>
  >(object: I): SaveGameResultRequest_StoryResult {
    const message = createBaseSaveGameResultRequest_StoryResult();
    message.stPlayCount = object.stPlayCount ?? 0;
    message.stPlayedStory = object.stPlayedStory ?? 0;
    message.tuningPoint = object.tuningPoint ?? 0;
    message.stClearBits = object.stClearBits ?? 0;
    message.stClearDivCount = object.stClearDivCount ?? 0;
    message.stClearCount = object.stClearCount ?? 0;
    message.stLoseBits = object.stLoseBits ?? 0;
    message.stConsecutiveWins = object.stConsecutiveWins ?? 0;
    message.stCompleted100Episodes = object.stCompleted100Episodes ?? false;
    message.isInsuranceUsed = object.isInsuranceUsed ?? false;
    return message;
  },
};

function createBaseSaveGameResultRequest_TimeAttackResult(): SaveGameResultRequest_TimeAttackResult {
  return {
    time: 0,
    course: 0,
    isMorning: false,
    section1Time: 0,
    section2Time: 0,
    section3Time: 0,
    section4Time: 0,
    section5Time: 0,
    section6Time: 0,
    section7Time: 0,
    wholeRank: 0,
    modelRank: 0,
  };
}

export const SaveGameResultRequest_TimeAttackResult = {
  encode(
    message: SaveGameResultRequest_TimeAttackResult,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.time !== 0) {
      writer.uint32(8).uint32(message.time);
    }
    if (message.course !== 0) {
      writer.uint32(16).uint32(message.course);
    }
    if (message.isMorning === true) {
      writer.uint32(96).bool(message.isMorning);
    }
    if (message.section1Time !== 0) {
      writer.uint32(24).uint32(message.section1Time);
    }
    if (message.section2Time !== 0) {
      writer.uint32(32).uint32(message.section2Time);
    }
    if (message.section3Time !== 0) {
      writer.uint32(40).uint32(message.section3Time);
    }
    if (message.section4Time !== 0) {
      writer.uint32(48).uint32(message.section4Time);
    }
    if (message.section5Time !== 0) {
      writer.uint32(56).uint32(message.section5Time);
    }
    if (message.section6Time !== 0) {
      writer.uint32(64).uint32(message.section6Time);
    }
    if (message.section7Time !== 0) {
      writer.uint32(72).uint32(message.section7Time);
    }
    if (message.wholeRank !== 0) {
      writer.uint32(80).uint32(message.wholeRank);
    }
    if (message.modelRank !== 0) {
      writer.uint32(88).uint32(message.modelRank);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SaveGameResultRequest_TimeAttackResult {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSaveGameResultRequest_TimeAttackResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.time = reader.uint32();
          break;
        case 2:
          message.course = reader.uint32();
          break;
        case 12:
          message.isMorning = reader.bool();
          break;
        case 3:
          message.section1Time = reader.uint32();
          break;
        case 4:
          message.section2Time = reader.uint32();
          break;
        case 5:
          message.section3Time = reader.uint32();
          break;
        case 6:
          message.section4Time = reader.uint32();
          break;
        case 7:
          message.section5Time = reader.uint32();
          break;
        case 8:
          message.section6Time = reader.uint32();
          break;
        case 9:
          message.section7Time = reader.uint32();
          break;
        case 10:
          message.wholeRank = reader.uint32();
          break;
        case 11:
          message.modelRank = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SaveGameResultRequest_TimeAttackResult {
    return {
      time: isSet(object.time) ? Number(object.time) : 0,
      course: isSet(object.course) ? Number(object.course) : 0,
      isMorning: isSet(object.isMorning) ? Boolean(object.isMorning) : false,
      section1Time: isSet(object.section1Time)
        ? Number(object.section1Time)
        : 0,
      section2Time: isSet(object.section2Time)
        ? Number(object.section2Time)
        : 0,
      section3Time: isSet(object.section3Time)
        ? Number(object.section3Time)
        : 0,
      section4Time: isSet(object.section4Time)
        ? Number(object.section4Time)
        : 0,
      section5Time: isSet(object.section5Time)
        ? Number(object.section5Time)
        : 0,
      section6Time: isSet(object.section6Time)
        ? Number(object.section6Time)
        : 0,
      section7Time: isSet(object.section7Time)
        ? Number(object.section7Time)
        : 0,
      wholeRank: isSet(object.wholeRank) ? Number(object.wholeRank) : 0,
      modelRank: isSet(object.modelRank) ? Number(object.modelRank) : 0,
    };
  },

  toJSON(message: SaveGameResultRequest_TimeAttackResult): unknown {
    const obj: any = {};
    message.time !== undefined && (obj.time = Math.round(message.time));
    message.course !== undefined && (obj.course = Math.round(message.course));
    message.isMorning !== undefined && (obj.isMorning = message.isMorning);
    message.section1Time !== undefined &&
      (obj.section1Time = Math.round(message.section1Time));
    message.section2Time !== undefined &&
      (obj.section2Time = Math.round(message.section2Time));
    message.section3Time !== undefined &&
      (obj.section3Time = Math.round(message.section3Time));
    message.section4Time !== undefined &&
      (obj.section4Time = Math.round(message.section4Time));
    message.section5Time !== undefined &&
      (obj.section5Time = Math.round(message.section5Time));
    message.section6Time !== undefined &&
      (obj.section6Time = Math.round(message.section6Time));
    message.section7Time !== undefined &&
      (obj.section7Time = Math.round(message.section7Time));
    message.wholeRank !== undefined &&
      (obj.wholeRank = Math.round(message.wholeRank));
    message.modelRank !== undefined &&
      (obj.modelRank = Math.round(message.modelRank));
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<SaveGameResultRequest_TimeAttackResult>, I>
  >(object: I): SaveGameResultRequest_TimeAttackResult {
    const message = createBaseSaveGameResultRequest_TimeAttackResult();
    message.time = object.time ?? 0;
    message.course = object.course ?? 0;
    message.isMorning = object.isMorning ?? false;
    message.section1Time = object.section1Time ?? 0;
    message.section2Time = object.section2Time ?? 0;
    message.section3Time = object.section3Time ?? 0;
    message.section4Time = object.section4Time ?? 0;
    message.section5Time = object.section5Time ?? 0;
    message.section6Time = object.section6Time ?? 0;
    message.section7Time = object.section7Time ?? 0;
    message.wholeRank = object.wholeRank ?? 0;
    message.modelRank = object.modelRank ?? 0;
    return message;
  },
};

function createBaseSaveGameResultRequest_VersusBattleResult(): SaveGameResultRequest_VersusBattleResult {
  return {
    result: 0,
    survived: false,
    opponentCarId: [],
    numOfPlayers: 0,
    area: 0,
    isMorning: false,
    vsPlayCount: 0,
    vsBurstCount: 0,
    vsStarCount: 0,
    vsCoolOrWild: 0,
    vsSmoothOrRough: 0,
    vsTripleStarMedals: 0,
    vsDoubleStarMedals: 0,
    vsSingleStarMedals: 0,
    vsPlainMedals: 0,
  };
}

export const SaveGameResultRequest_VersusBattleResult = {
  encode(
    message: SaveGameResultRequest_VersusBattleResult,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).uint32(message.result);
    }
    if (message.survived === true) {
      writer.uint32(16).bool(message.survived);
    }
    writer.uint32(26).fork();
    for (const v of message.opponentCarId) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.numOfPlayers !== 0) {
      writer.uint32(40).uint32(message.numOfPlayers);
    }
    if (message.area !== 0) {
      writer.uint32(136).uint32(message.area);
    }
    if (message.isMorning === true) {
      writer.uint32(144).bool(message.isMorning);
    }
    if (message.vsPlayCount !== 0) {
      writer.uint32(48).uint32(message.vsPlayCount);
    }
    if (message.vsBurstCount !== 0) {
      writer.uint32(56).uint32(message.vsBurstCount);
    }
    if (message.vsStarCount !== 0) {
      writer.uint32(64).uint32(message.vsStarCount);
    }
    if (message.vsCoolOrWild !== 0) {
      writer.uint32(72).sint32(message.vsCoolOrWild);
    }
    if (message.vsSmoothOrRough !== 0) {
      writer.uint32(80).sint32(message.vsSmoothOrRough);
    }
    if (message.vsTripleStarMedals !== 0) {
      writer.uint32(88).uint32(message.vsTripleStarMedals);
    }
    if (message.vsDoubleStarMedals !== 0) {
      writer.uint32(96).uint32(message.vsDoubleStarMedals);
    }
    if (message.vsSingleStarMedals !== 0) {
      writer.uint32(104).uint32(message.vsSingleStarMedals);
    }
    if (message.vsPlainMedals !== 0) {
      writer.uint32(112).uint32(message.vsPlainMedals);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SaveGameResultRequest_VersusBattleResult {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSaveGameResultRequest_VersusBattleResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.uint32();
          break;
        case 2:
          message.survived = reader.bool();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.opponentCarId.push(reader.uint32());
            }
          } else {
            message.opponentCarId.push(reader.uint32());
          }
          break;
        case 5:
          message.numOfPlayers = reader.uint32();
          break;
        case 17:
          message.area = reader.uint32();
          break;
        case 18:
          message.isMorning = reader.bool();
          break;
        case 6:
          message.vsPlayCount = reader.uint32();
          break;
        case 7:
          message.vsBurstCount = reader.uint32();
          break;
        case 8:
          message.vsStarCount = reader.uint32();
          break;
        case 9:
          message.vsCoolOrWild = reader.sint32();
          break;
        case 10:
          message.vsSmoothOrRough = reader.sint32();
          break;
        case 11:
          message.vsTripleStarMedals = reader.uint32();
          break;
        case 12:
          message.vsDoubleStarMedals = reader.uint32();
          break;
        case 13:
          message.vsSingleStarMedals = reader.uint32();
          break;
        case 14:
          message.vsPlainMedals = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SaveGameResultRequest_VersusBattleResult {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      survived: isSet(object.survived) ? Boolean(object.survived) : false,
      opponentCarId: Array.isArray(object?.opponentCarId)
        ? object.opponentCarId.map((e: any) => Number(e))
        : [],
      numOfPlayers: isSet(object.numOfPlayers)
        ? Number(object.numOfPlayers)
        : 0,
      area: isSet(object.area) ? Number(object.area) : 0,
      isMorning: isSet(object.isMorning) ? Boolean(object.isMorning) : false,
      vsPlayCount: isSet(object.vsPlayCount) ? Number(object.vsPlayCount) : 0,
      vsBurstCount: isSet(object.vsBurstCount)
        ? Number(object.vsBurstCount)
        : 0,
      vsStarCount: isSet(object.vsStarCount) ? Number(object.vsStarCount) : 0,
      vsCoolOrWild: isSet(object.vsCoolOrWild)
        ? Number(object.vsCoolOrWild)
        : 0,
      vsSmoothOrRough: isSet(object.vsSmoothOrRough)
        ? Number(object.vsSmoothOrRough)
        : 0,
      vsTripleStarMedals: isSet(object.vsTripleStarMedals)
        ? Number(object.vsTripleStarMedals)
        : 0,
      vsDoubleStarMedals: isSet(object.vsDoubleStarMedals)
        ? Number(object.vsDoubleStarMedals)
        : 0,
      vsSingleStarMedals: isSet(object.vsSingleStarMedals)
        ? Number(object.vsSingleStarMedals)
        : 0,
      vsPlainMedals: isSet(object.vsPlainMedals)
        ? Number(object.vsPlainMedals)
        : 0,
    };
  },

  toJSON(message: SaveGameResultRequest_VersusBattleResult): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = Math.round(message.result));
    message.survived !== undefined && (obj.survived = message.survived);
    if (message.opponentCarId) {
      obj.opponentCarId = message.opponentCarId.map((e) => Math.round(e));
    } else {
      obj.opponentCarId = [];
    }
    message.numOfPlayers !== undefined &&
      (obj.numOfPlayers = Math.round(message.numOfPlayers));
    message.area !== undefined && (obj.area = Math.round(message.area));
    message.isMorning !== undefined && (obj.isMorning = message.isMorning);
    message.vsPlayCount !== undefined &&
      (obj.vsPlayCount = Math.round(message.vsPlayCount));
    message.vsBurstCount !== undefined &&
      (obj.vsBurstCount = Math.round(message.vsBurstCount));
    message.vsStarCount !== undefined &&
      (obj.vsStarCount = Math.round(message.vsStarCount));
    message.vsCoolOrWild !== undefined &&
      (obj.vsCoolOrWild = Math.round(message.vsCoolOrWild));
    message.vsSmoothOrRough !== undefined &&
      (obj.vsSmoothOrRough = Math.round(message.vsSmoothOrRough));
    message.vsTripleStarMedals !== undefined &&
      (obj.vsTripleStarMedals = Math.round(message.vsTripleStarMedals));
    message.vsDoubleStarMedals !== undefined &&
      (obj.vsDoubleStarMedals = Math.round(message.vsDoubleStarMedals));
    message.vsSingleStarMedals !== undefined &&
      (obj.vsSingleStarMedals = Math.round(message.vsSingleStarMedals));
    message.vsPlainMedals !== undefined &&
      (obj.vsPlainMedals = Math.round(message.vsPlainMedals));
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<SaveGameResultRequest_VersusBattleResult>, I>
  >(object: I): SaveGameResultRequest_VersusBattleResult {
    const message = createBaseSaveGameResultRequest_VersusBattleResult();
    message.result = object.result ?? 0;
    message.survived = object.survived ?? false;
    message.opponentCarId = object.opponentCarId?.map((e) => e) || [];
    message.numOfPlayers = object.numOfPlayers ?? 0;
    message.area = object.area ?? 0;
    message.isMorning = object.isMorning ?? false;
    message.vsPlayCount = object.vsPlayCount ?? 0;
    message.vsBurstCount = object.vsBurstCount ?? 0;
    message.vsStarCount = object.vsStarCount ?? 0;
    message.vsCoolOrWild = object.vsCoolOrWild ?? 0;
    message.vsSmoothOrRough = object.vsSmoothOrRough ?? 0;
    message.vsTripleStarMedals = object.vsTripleStarMedals ?? 0;
    message.vsDoubleStarMedals = object.vsDoubleStarMedals ?? 0;
    message.vsSingleStarMedals = object.vsSingleStarMedals ?? 0;
    message.vsPlainMedals = object.vsPlainMedals ?? 0;
    return message;
  },
};

function createBaseSaveGameResultRequest_GhostBattleResult(): SaveGameResultRequest_GhostBattleResult {
  return {
    opponents: [],
    path: 0,
    isMorning: false,
    selectionMethod: 1,
    stampSheetCount: 0,
    stampSheet: [],
    rgStamp: 0,
    confirmedTransferredStampTargetCarIds: [],
    rgPlayCount: 0,
    dressupLevel: 0,
    dressupPoint: 0,
    rgRegionMapScore: [],
    competitionId: 0,
    periodId: 0,
    brakingPoint: 0,
    acquireCrown: false,
    acquireAllCrowns: false,
  };
}

export const SaveGameResultRequest_GhostBattleResult = {
  encode(
    message: SaveGameResultRequest_GhostBattleResult,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.opponents) {
      SaveGameResultRequest_GhostBattleResult_GhostBattleOpponent.encode(
        v!,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.path !== 0) {
      writer.uint32(24).uint32(message.path);
    }
    if (message.isMorning === true) {
      writer.uint32(200).bool(message.isMorning);
    }
    if (message.selectionMethod !== 1) {
      writer.uint32(32).int32(message.selectionMethod);
    }
    if (message.stampSheetCount !== 0) {
      writer.uint32(40).uint32(message.stampSheetCount);
    }
    writer.uint32(50).fork();
    for (const v of message.stampSheet) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.rgStamp !== 0) {
      writer.uint32(184).uint32(message.rgStamp);
    }
    writer.uint32(194).fork();
    for (const v of message.confirmedTransferredStampTargetCarIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.rgPlayCount !== 0) {
      writer.uint32(64).uint32(message.rgPlayCount);
    }
    if (message.dressupLevel !== 0) {
      writer.uint32(80).uint32(message.dressupLevel);
    }
    if (message.dressupPoint !== 0) {
      writer.uint32(88).uint32(message.dressupPoint);
    }
    writer.uint32(114).fork();
    for (const v of message.rgRegionMapScore) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.competitionId !== 0) {
      writer.uint32(128).uint32(message.competitionId);
    }
    if (message.periodId !== 0) {
      writer.uint32(136).uint32(message.periodId);
    }
    if (message.brakingPoint !== 0) {
      writer.uint32(144).uint32(message.brakingPoint);
    }
    if (message.acquireCrown === true) {
      writer.uint32(160).bool(message.acquireCrown);
    }
    if (message.acquireAllCrowns === true) {
      writer.uint32(168).bool(message.acquireAllCrowns);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SaveGameResultRequest_GhostBattleResult {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSaveGameResultRequest_GhostBattleResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.opponents.push(
            SaveGameResultRequest_GhostBattleResult_GhostBattleOpponent.decode(
              reader,
              reader.uint32()
            )
          );
          break;
        case 3:
          message.path = reader.uint32();
          break;
        case 25:
          message.isMorning = reader.bool();
          break;
        case 4:
          message.selectionMethod = reader.int32() as any;
          break;
        case 5:
          message.stampSheetCount = reader.uint32();
          break;
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.stampSheet.push(reader.uint32());
            }
          } else {
            message.stampSheet.push(reader.uint32());
          }
          break;
        case 23:
          message.rgStamp = reader.uint32();
          break;
        case 24:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.confirmedTransferredStampTargetCarIds.push(
                reader.uint32()
              );
            }
          } else {
            message.confirmedTransferredStampTargetCarIds.push(reader.uint32());
          }
          break;
        case 8:
          message.rgPlayCount = reader.uint32();
          break;
        case 10:
          message.dressupLevel = reader.uint32();
          break;
        case 11:
          message.dressupPoint = reader.uint32();
          break;
        case 14:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.rgRegionMapScore.push(reader.uint32());
            }
          } else {
            message.rgRegionMapScore.push(reader.uint32());
          }
          break;
        case 16:
          message.competitionId = reader.uint32();
          break;
        case 17:
          message.periodId = reader.uint32();
          break;
        case 18:
          message.brakingPoint = reader.uint32();
          break;
        case 20:
          message.acquireCrown = reader.bool();
          break;
        case 21:
          message.acquireAllCrowns = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SaveGameResultRequest_GhostBattleResult {
    return {
      opponents: Array.isArray(object?.opponents)
        ? object.opponents.map((e: any) =>
            SaveGameResultRequest_GhostBattleResult_GhostBattleOpponent.fromJSON(
              e
            )
          )
        : [],
      path: isSet(object.path) ? Number(object.path) : 0,
      isMorning: isSet(object.isMorning) ? Boolean(object.isMorning) : false,
      selectionMethod: isSet(object.selectionMethod)
        ? ghostSelectionMethodFromJSON(object.selectionMethod)
        : 1,
      stampSheetCount: isSet(object.stampSheetCount)
        ? Number(object.stampSheetCount)
        : 0,
      stampSheet: Array.isArray(object?.stampSheet)
        ? object.stampSheet.map((e: any) => Number(e))
        : [],
      rgStamp: isSet(object.rgStamp) ? Number(object.rgStamp) : 0,
      confirmedTransferredStampTargetCarIds: Array.isArray(
        object?.confirmedTransferredStampTargetCarIds
      )
        ? object.confirmedTransferredStampTargetCarIds.map((e: any) =>
            Number(e)
          )
        : [],
      rgPlayCount: isSet(object.rgPlayCount) ? Number(object.rgPlayCount) : 0,
      dressupLevel: isSet(object.dressupLevel)
        ? Number(object.dressupLevel)
        : 0,
      dressupPoint: isSet(object.dressupPoint)
        ? Number(object.dressupPoint)
        : 0,
      rgRegionMapScore: Array.isArray(object?.rgRegionMapScore)
        ? object.rgRegionMapScore.map((e: any) => Number(e))
        : [],
      competitionId: isSet(object.competitionId)
        ? Number(object.competitionId)
        : 0,
      periodId: isSet(object.periodId) ? Number(object.periodId) : 0,
      brakingPoint: isSet(object.brakingPoint)
        ? Number(object.brakingPoint)
        : 0,
      acquireCrown: isSet(object.acquireCrown)
        ? Boolean(object.acquireCrown)
        : false,
      acquireAllCrowns: isSet(object.acquireAllCrowns)
        ? Boolean(object.acquireAllCrowns)
        : false,
    };
  },

  toJSON(message: SaveGameResultRequest_GhostBattleResult): unknown {
    const obj: any = {};
    if (message.opponents) {
      obj.opponents = message.opponents.map((e) =>
        e
          ? SaveGameResultRequest_GhostBattleResult_GhostBattleOpponent.toJSON(
              e
            )
          : undefined
      );
    } else {
      obj.opponents = [];
    }
    message.path !== undefined && (obj.path = Math.round(message.path));
    message.isMorning !== undefined && (obj.isMorning = message.isMorning);
    message.selectionMethod !== undefined &&
      (obj.selectionMethod = ghostSelectionMethodToJSON(
        message.selectionMethod
      ));
    message.stampSheetCount !== undefined &&
      (obj.stampSheetCount = Math.round(message.stampSheetCount));
    if (message.stampSheet) {
      obj.stampSheet = message.stampSheet.map((e) => Math.round(e));
    } else {
      obj.stampSheet = [];
    }
    message.rgStamp !== undefined &&
      (obj.rgStamp = Math.round(message.rgStamp));
    if (message.confirmedTransferredStampTargetCarIds) {
      obj.confirmedTransferredStampTargetCarIds =
        message.confirmedTransferredStampTargetCarIds.map((e) => Math.round(e));
    } else {
      obj.confirmedTransferredStampTargetCarIds = [];
    }
    message.rgPlayCount !== undefined &&
      (obj.rgPlayCount = Math.round(message.rgPlayCount));
    message.dressupLevel !== undefined &&
      (obj.dressupLevel = Math.round(message.dressupLevel));
    message.dressupPoint !== undefined &&
      (obj.dressupPoint = Math.round(message.dressupPoint));
    if (message.rgRegionMapScore) {
      obj.rgRegionMapScore = message.rgRegionMapScore.map((e) => Math.round(e));
    } else {
      obj.rgRegionMapScore = [];
    }
    message.competitionId !== undefined &&
      (obj.competitionId = Math.round(message.competitionId));
    message.periodId !== undefined &&
      (obj.periodId = Math.round(message.periodId));
    message.brakingPoint !== undefined &&
      (obj.brakingPoint = Math.round(message.brakingPoint));
    message.acquireCrown !== undefined &&
      (obj.acquireCrown = message.acquireCrown);
    message.acquireAllCrowns !== undefined &&
      (obj.acquireAllCrowns = message.acquireAllCrowns);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<SaveGameResultRequest_GhostBattleResult>, I>
  >(object: I): SaveGameResultRequest_GhostBattleResult {
    const message = createBaseSaveGameResultRequest_GhostBattleResult();
    message.opponents =
      object.opponents?.map((e) =>
        SaveGameResultRequest_GhostBattleResult_GhostBattleOpponent.fromPartial(
          e
        )
      ) || [];
    message.path = object.path ?? 0;
    message.isMorning = object.isMorning ?? false;
    message.selectionMethod = object.selectionMethod ?? 1;
    message.stampSheetCount = object.stampSheetCount ?? 0;
    message.stampSheet = object.stampSheet?.map((e) => e) || [];
    message.rgStamp = object.rgStamp ?? 0;
    message.confirmedTransferredStampTargetCarIds =
      object.confirmedTransferredStampTargetCarIds?.map((e) => e) || [];
    message.rgPlayCount = object.rgPlayCount ?? 0;
    message.dressupLevel = object.dressupLevel ?? 0;
    message.dressupPoint = object.dressupPoint ?? 0;
    message.rgRegionMapScore = object.rgRegionMapScore?.map((e) => e) || [];
    message.competitionId = object.competitionId ?? 0;
    message.periodId = object.periodId ?? 0;
    message.brakingPoint = object.brakingPoint ?? 0;
    message.acquireCrown = object.acquireCrown ?? false;
    message.acquireAllCrowns = object.acquireAllCrowns ?? false;
    return message;
  },
};

function createBaseSaveGameResultRequest_GhostBattleResult_GhostBattleOpponent(): SaveGameResultRequest_GhostBattleResult_GhostBattleOpponent {
  return {
    result: 0,
    carId: 0,
    tunePower: 0,
    tuneHandling: 0,
    receiveStamp: false,
  };
}

export const SaveGameResultRequest_GhostBattleResult_GhostBattleOpponent = {
  encode(
    message: SaveGameResultRequest_GhostBattleResult_GhostBattleOpponent,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.result !== 0) {
      writer.uint32(8).sint32(message.result);
    }
    if (message.carId !== 0) {
      writer.uint32(16).uint32(message.carId);
    }
    if (message.tunePower !== 0) {
      writer.uint32(24).uint32(message.tunePower);
    }
    if (message.tuneHandling !== 0) {
      writer.uint32(32).uint32(message.tuneHandling);
    }
    if (message.receiveStamp === true) {
      writer.uint32(40).bool(message.receiveStamp);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SaveGameResultRequest_GhostBattleResult_GhostBattleOpponent {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseSaveGameResultRequest_GhostBattleResult_GhostBattleOpponent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.sint32();
          break;
        case 2:
          message.carId = reader.uint32();
          break;
        case 3:
          message.tunePower = reader.uint32();
          break;
        case 4:
          message.tuneHandling = reader.uint32();
          break;
        case 5:
          message.receiveStamp = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(
    object: any
  ): SaveGameResultRequest_GhostBattleResult_GhostBattleOpponent {
    return {
      result: isSet(object.result) ? Number(object.result) : 0,
      carId: isSet(object.carId) ? Number(object.carId) : 0,
      tunePower: isSet(object.tunePower) ? Number(object.tunePower) : 0,
      tuneHandling: isSet(object.tuneHandling)
        ? Number(object.tuneHandling)
        : 0,
      receiveStamp: isSet(object.receiveStamp)
        ? Boolean(object.receiveStamp)
        : false,
    };
  },

  toJSON(
    message: SaveGameResultRequest_GhostBattleResult_GhostBattleOpponent
  ): unknown {
    const obj: any = {};
    message.result !== undefined && (obj.result = Math.round(message.result));
    message.carId !== undefined && (obj.carId = Math.round(message.carId));
    message.tunePower !== undefined &&
      (obj.tunePower = Math.round(message.tunePower));
    message.tuneHandling !== undefined &&
      (obj.tuneHandling = Math.round(message.tuneHandling));
    message.receiveStamp !== undefined &&
      (obj.receiveStamp = message.receiveStamp);
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<SaveGameResultRequest_GhostBattleResult_GhostBattleOpponent>,
      I
    >
  >(object: I): SaveGameResultRequest_GhostBattleResult_GhostBattleOpponent {
    const message =
      createBaseSaveGameResultRequest_GhostBattleResult_GhostBattleOpponent();
    message.result = object.result ?? 0;
    message.carId = object.carId ?? 0;
    message.tunePower = object.tunePower ?? 0;
    message.tuneHandling = object.tuneHandling ?? 0;
    message.receiveStamp = object.receiveStamp ?? false;
    return message;
  },
};

function createBaseSaveGameResultResponse(): SaveGameResultResponse {
  return { error: 0, ghostSessionId: 0, availableTickets: [] };
}

export const SaveGameResultResponse = {
  encode(
    message: SaveGameResultResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.error !== 0) {
      writer.uint32(8).int32(message.error);
    }
    if (message.ghostSessionId !== 0) {
      writer.uint32(16).uint64(message.ghostSessionId);
    }
    for (const v of message.availableTickets) {
      UserItem.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SaveGameResultResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSaveGameResultResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.error = reader.int32() as any;
          break;
        case 2:
          message.ghostSessionId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.availableTickets.push(
            UserItem.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SaveGameResultResponse {
    return {
      error: isSet(object.error) ? errorCodeFromJSON(object.error) : 0,
      ghostSessionId: isSet(object.ghostSessionId)
        ? Number(object.ghostSessionId)
        : 0,
      availableTickets: Array.isArray(object?.availableTickets)
        ? object.availableTickets.map((e: any) => UserItem.fromJSON(e))
        : [],
    };
  },

  toJSON(message: SaveGameResultResponse): unknown {
    const obj: any = {};
    message.error !== undefined && (obj.error = errorCodeToJSON(message.error));
    message.ghostSessionId !== undefined &&
      (obj.ghostSessionId = Math.round(message.ghostSessionId));
    if (message.availableTickets) {
      obj.availableTickets = message.availableTickets.map((e) =>
        e ? UserItem.toJSON(e) : undefined
      );
    } else {
      obj.availableTickets = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SaveGameResultResponse>, I>>(
    object: I
  ): SaveGameResultResponse {
    const message = createBaseSaveGameResultResponse();
    message.error = object.error ?? 0;
    message.ghostSessionId = object.ghostSessionId ?? 0;
    message.availableTickets =
      object.availableTickets?.map((e) => UserItem.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSaveChargeRequest(): SaveChargeRequest {
  return { chargeLogs: [] };
}

export const SaveChargeRequest = {
  encode(
    message: SaveChargeRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.chargeLogs) {
      SaveChargeRequest_ChargeLog.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SaveChargeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSaveChargeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chargeLogs.push(
            SaveChargeRequest_ChargeLog.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SaveChargeRequest {
    return {
      chargeLogs: Array.isArray(object?.chargeLogs)
        ? object.chargeLogs.map((e: any) =>
            SaveChargeRequest_ChargeLog.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: SaveChargeRequest): unknown {
    const obj: any = {};
    if (message.chargeLogs) {
      obj.chargeLogs = message.chargeLogs.map((e) =>
        e ? SaveChargeRequest_ChargeLog.toJSON(e) : undefined
      );
    } else {
      obj.chargeLogs = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SaveChargeRequest>, I>>(
    object: I
  ): SaveChargeRequest {
    const message = createBaseSaveChargeRequest();
    message.chargeLogs =
      object.chargeLogs?.map((e) =>
        SaveChargeRequest_ChargeLog.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseSaveChargeRequest_ChargeLog(): SaveChargeRequest_ChargeLog {
  return { datetime: 0, pcbSerial: "", placeId: "", userId: 0 };
}

export const SaveChargeRequest_ChargeLog = {
  encode(
    message: SaveChargeRequest_ChargeLog,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.datetime !== 0) {
      writer.uint32(8).uint32(message.datetime);
    }
    if (message.pcbSerial !== "") {
      writer.uint32(18).string(message.pcbSerial);
    }
    if (message.placeId !== "") {
      writer.uint32(26).string(message.placeId);
    }
    if (message.userId !== 0) {
      writer.uint32(32).uint32(message.userId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SaveChargeRequest_ChargeLog {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSaveChargeRequest_ChargeLog();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.datetime = reader.uint32();
          break;
        case 2:
          message.pcbSerial = reader.string();
          break;
        case 3:
          message.placeId = reader.string();
          break;
        case 4:
          message.userId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SaveChargeRequest_ChargeLog {
    return {
      datetime: isSet(object.datetime) ? Number(object.datetime) : 0,
      pcbSerial: isSet(object.pcbSerial) ? String(object.pcbSerial) : "",
      placeId: isSet(object.placeId) ? String(object.placeId) : "",
      userId: isSet(object.userId) ? Number(object.userId) : 0,
    };
  },

  toJSON(message: SaveChargeRequest_ChargeLog): unknown {
    const obj: any = {};
    message.datetime !== undefined &&
      (obj.datetime = Math.round(message.datetime));
    message.pcbSerial !== undefined && (obj.pcbSerial = message.pcbSerial);
    message.placeId !== undefined && (obj.placeId = message.placeId);
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SaveChargeRequest_ChargeLog>, I>>(
    object: I
  ): SaveChargeRequest_ChargeLog {
    const message = createBaseSaveChargeRequest_ChargeLog();
    message.datetime = object.datetime ?? 0;
    message.pcbSerial = object.pcbSerial ?? "";
    message.placeId = object.placeId ?? "";
    message.userId = object.userId ?? 0;
    return message;
  },
};

function createBaseSaveChargeResponse(): SaveChargeResponse {
  return { error: 0 };
}

export const SaveChargeResponse = {
  encode(
    message: SaveChargeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.error !== 0) {
      writer.uint32(8).int32(message.error);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SaveChargeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSaveChargeResponse();
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

  fromJSON(object: any): SaveChargeResponse {
    return {
      error: isSet(object.error) ? errorCodeFromJSON(object.error) : 0,
    };
  },

  toJSON(message: SaveChargeResponse): unknown {
    const obj: any = {};
    message.error !== undefined && (obj.error = errorCodeToJSON(message.error));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SaveChargeResponse>, I>>(
    object: I
  ): SaveChargeResponse {
    const message = createBaseSaveChargeResponse();
    message.error = object.error ?? 0;
    return message;
  },
};

function createBaseLoadGhostBattleInfoRequest(): LoadGhostBattleInfoRequest {
  return { carId: 0 };
}

export const LoadGhostBattleInfoRequest = {
  encode(
    message: LoadGhostBattleInfoRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.carId !== 0) {
      writer.uint32(8).uint32(message.carId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LoadGhostBattleInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoadGhostBattleInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.carId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LoadGhostBattleInfoRequest {
    return {
      carId: isSet(object.carId) ? Number(object.carId) : 0,
    };
  },

  toJSON(message: LoadGhostBattleInfoRequest): unknown {
    const obj: any = {};
    message.carId !== undefined && (obj.carId = Math.round(message.carId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LoadGhostBattleInfoRequest>, I>>(
    object: I
  ): LoadGhostBattleInfoRequest {
    const message = createBaseLoadGhostBattleInfoRequest();
    message.carId = object.carId ?? 0;
    return message;
  },
};

function createBaseLoadGhostBattleInfoResponse(): LoadGhostBattleInfoResponse {
  return {
    error: 0,
    friendCars: [],
    challengers: [],
    stampTargetCars: [],
    previousVersionStampTargetCars: [],
    bookmarkedCars: [],
    history: [],
    weakenedCars: [],
    stampSheetCount: 0,
    stampSheet: [],
    stampReturnStats: [],
  };
}

export const LoadGhostBattleInfoResponse = {
  encode(
    message: LoadGhostBattleInfoResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.error !== 0) {
      writer.uint32(8).int32(message.error);
    }
    for (const v of message.friendCars) {
      FriendCar.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.challengers) {
      ChallengerCar.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.stampTargetCars) {
      StampTargetCar.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.previousVersionStampTargetCars) {
      PreviousVersionStampTargetCar.encode(
        v!,
        writer.uint32(98).fork()
      ).ldelim();
    }
    for (const v of message.bookmarkedCars) {
      BookmarkedCar.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    for (const v of message.history) {
      Car.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.weakenedCars) {
      LoadGhostBattleInfoResponse_WeakenedCar.encode(
        v!,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.stampSheetCount !== 0) {
      writer.uint32(56).uint32(message.stampSheetCount);
    }
    writer.uint32(66).fork();
    for (const v of message.stampSheet) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(74).fork();
    for (const v of message.stampReturnStats) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LoadGhostBattleInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoadGhostBattleInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.error = reader.int32() as any;
          break;
        case 2:
          message.friendCars.push(FriendCar.decode(reader, reader.uint32()));
          break;
        case 3:
          message.challengers.push(
            ChallengerCar.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.stampTargetCars.push(
            StampTargetCar.decode(reader, reader.uint32())
          );
          break;
        case 12:
          message.previousVersionStampTargetCars.push(
            PreviousVersionStampTargetCar.decode(reader, reader.uint32())
          );
          break;
        case 11:
          message.bookmarkedCars.push(
            BookmarkedCar.decode(reader, reader.uint32())
          );
          break;
        case 5:
          message.history.push(Car.decode(reader, reader.uint32()));
          break;
        case 10:
          message.weakenedCars.push(
            LoadGhostBattleInfoResponse_WeakenedCar.decode(
              reader,
              reader.uint32()
            )
          );
          break;
        case 7:
          message.stampSheetCount = reader.uint32();
          break;
        case 8:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.stampSheet.push(reader.uint32());
            }
          } else {
            message.stampSheet.push(reader.uint32());
          }
          break;
        case 9:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.stampReturnStats.push(reader.uint32());
            }
          } else {
            message.stampReturnStats.push(reader.uint32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LoadGhostBattleInfoResponse {
    return {
      error: isSet(object.error) ? errorCodeFromJSON(object.error) : 0,
      friendCars: Array.isArray(object?.friendCars)
        ? object.friendCars.map((e: any) => FriendCar.fromJSON(e))
        : [],
      challengers: Array.isArray(object?.challengers)
        ? object.challengers.map((e: any) => ChallengerCar.fromJSON(e))
        : [],
      stampTargetCars: Array.isArray(object?.stampTargetCars)
        ? object.stampTargetCars.map((e: any) => StampTargetCar.fromJSON(e))
        : [],
      previousVersionStampTargetCars: Array.isArray(
        object?.previousVersionStampTargetCars
      )
        ? object.previousVersionStampTargetCars.map((e: any) =>
            PreviousVersionStampTargetCar.fromJSON(e)
          )
        : [],
      bookmarkedCars: Array.isArray(object?.bookmarkedCars)
        ? object.bookmarkedCars.map((e: any) => BookmarkedCar.fromJSON(e))
        : [],
      history: Array.isArray(object?.history)
        ? object.history.map((e: any) => Car.fromJSON(e))
        : [],
      weakenedCars: Array.isArray(object?.weakenedCars)
        ? object.weakenedCars.map((e: any) =>
            LoadGhostBattleInfoResponse_WeakenedCar.fromJSON(e)
          )
        : [],
      stampSheetCount: isSet(object.stampSheetCount)
        ? Number(object.stampSheetCount)
        : 0,
      stampSheet: Array.isArray(object?.stampSheet)
        ? object.stampSheet.map((e: any) => Number(e))
        : [],
      stampReturnStats: Array.isArray(object?.stampReturnStats)
        ? object.stampReturnStats.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: LoadGhostBattleInfoResponse): unknown {
    const obj: any = {};
    message.error !== undefined && (obj.error = errorCodeToJSON(message.error));
    if (message.friendCars) {
      obj.friendCars = message.friendCars.map((e) =>
        e ? FriendCar.toJSON(e) : undefined
      );
    } else {
      obj.friendCars = [];
    }
    if (message.challengers) {
      obj.challengers = message.challengers.map((e) =>
        e ? ChallengerCar.toJSON(e) : undefined
      );
    } else {
      obj.challengers = [];
    }
    if (message.stampTargetCars) {
      obj.stampTargetCars = message.stampTargetCars.map((e) =>
        e ? StampTargetCar.toJSON(e) : undefined
      );
    } else {
      obj.stampTargetCars = [];
    }
    if (message.previousVersionStampTargetCars) {
      obj.previousVersionStampTargetCars =
        message.previousVersionStampTargetCars.map((e) =>
          e ? PreviousVersionStampTargetCar.toJSON(e) : undefined
        );
    } else {
      obj.previousVersionStampTargetCars = [];
    }
    if (message.bookmarkedCars) {
      obj.bookmarkedCars = message.bookmarkedCars.map((e) =>
        e ? BookmarkedCar.toJSON(e) : undefined
      );
    } else {
      obj.bookmarkedCars = [];
    }
    if (message.history) {
      obj.history = message.history.map((e) => (e ? Car.toJSON(e) : undefined));
    } else {
      obj.history = [];
    }
    if (message.weakenedCars) {
      obj.weakenedCars = message.weakenedCars.map((e) =>
        e ? LoadGhostBattleInfoResponse_WeakenedCar.toJSON(e) : undefined
      );
    } else {
      obj.weakenedCars = [];
    }
    message.stampSheetCount !== undefined &&
      (obj.stampSheetCount = Math.round(message.stampSheetCount));
    if (message.stampSheet) {
      obj.stampSheet = message.stampSheet.map((e) => Math.round(e));
    } else {
      obj.stampSheet = [];
    }
    if (message.stampReturnStats) {
      obj.stampReturnStats = message.stampReturnStats.map((e) => Math.round(e));
    } else {
      obj.stampReturnStats = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LoadGhostBattleInfoResponse>, I>>(
    object: I
  ): LoadGhostBattleInfoResponse {
    const message = createBaseLoadGhostBattleInfoResponse();
    message.error = object.error ?? 0;
    message.friendCars =
      object.friendCars?.map((e) => FriendCar.fromPartial(e)) || [];
    message.challengers =
      object.challengers?.map((e) => ChallengerCar.fromPartial(e)) || [];
    message.stampTargetCars =
      object.stampTargetCars?.map((e) => StampTargetCar.fromPartial(e)) || [];
    message.previousVersionStampTargetCars =
      object.previousVersionStampTargetCars?.map((e) =>
        PreviousVersionStampTargetCar.fromPartial(e)
      ) || [];
    message.bookmarkedCars =
      object.bookmarkedCars?.map((e) => BookmarkedCar.fromPartial(e)) || [];
    message.history = object.history?.map((e) => Car.fromPartial(e)) || [];
    message.weakenedCars =
      object.weakenedCars?.map((e) =>
        LoadGhostBattleInfoResponse_WeakenedCar.fromPartial(e)
      ) || [];
    message.stampSheetCount = object.stampSheetCount ?? 0;
    message.stampSheet = object.stampSheet?.map((e) => e) || [];
    message.stampReturnStats = object.stampReturnStats?.map((e) => e) || [];
    return message;
  },
};

function createBaseLoadGhostBattleInfoResponse_WeakenedCar(): LoadGhostBattleInfoResponse_WeakenedCar {
  return { carId: 0, consecutiveLosses: 0 };
}

export const LoadGhostBattleInfoResponse_WeakenedCar = {
  encode(
    message: LoadGhostBattleInfoResponse_WeakenedCar,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.carId !== 0) {
      writer.uint32(8).uint32(message.carId);
    }
    if (message.consecutiveLosses !== 0) {
      writer.uint32(16).uint32(message.consecutiveLosses);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LoadGhostBattleInfoResponse_WeakenedCar {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoadGhostBattleInfoResponse_WeakenedCar();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.carId = reader.uint32();
          break;
        case 2:
          message.consecutiveLosses = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LoadGhostBattleInfoResponse_WeakenedCar {
    return {
      carId: isSet(object.carId) ? Number(object.carId) : 0,
      consecutiveLosses: isSet(object.consecutiveLosses)
        ? Number(object.consecutiveLosses)
        : 0,
    };
  },

  toJSON(message: LoadGhostBattleInfoResponse_WeakenedCar): unknown {
    const obj: any = {};
    message.carId !== undefined && (obj.carId = Math.round(message.carId));
    message.consecutiveLosses !== undefined &&
      (obj.consecutiveLosses = Math.round(message.consecutiveLosses));
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<LoadGhostBattleInfoResponse_WeakenedCar>, I>
  >(object: I): LoadGhostBattleInfoResponse_WeakenedCar {
    const message = createBaseLoadGhostBattleInfoResponse_WeakenedCar();
    message.carId = object.carId ?? 0;
    message.consecutiveLosses = object.consecutiveLosses ?? 0;
    return message;
  },
};

function createBaseLoadStampTargetRequest(): LoadStampTargetRequest {
  return { carId: 0, needToPromote: false };
}

export const LoadStampTargetRequest = {
  encode(
    message: LoadStampTargetRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.carId !== 0) {
      writer.uint32(8).uint32(message.carId);
    }
    if (message.needToPromote === true) {
      writer.uint32(16).bool(message.needToPromote);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LoadStampTargetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoadStampTargetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.carId = reader.uint32();
          break;
        case 2:
          message.needToPromote = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LoadStampTargetRequest {
    return {
      carId: isSet(object.carId) ? Number(object.carId) : 0,
      needToPromote: isSet(object.needToPromote)
        ? Boolean(object.needToPromote)
        : false,
    };
  },

  toJSON(message: LoadStampTargetRequest): unknown {
    const obj: any = {};
    message.carId !== undefined && (obj.carId = Math.round(message.carId));
    message.needToPromote !== undefined &&
      (obj.needToPromote = message.needToPromote);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LoadStampTargetRequest>, I>>(
    object: I
  ): LoadStampTargetRequest {
    const message = createBaseLoadStampTargetRequest();
    message.carId = object.carId ?? 0;
    message.needToPromote = object.needToPromote ?? false;
    return message;
  },
};

function createBaseLoadStampTargetResponse(): LoadStampTargetResponse {
  return { error: 0, cars: [], challengers: [] };
}

export const LoadStampTargetResponse = {
  encode(
    message: LoadStampTargetResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.error !== 0) {
      writer.uint32(8).int32(message.error);
    }
    for (const v of message.cars) {
      StampTargetCar.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.challengers) {
      ChallengerCar.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LoadStampTargetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoadStampTargetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.error = reader.int32() as any;
          break;
        case 2:
          message.cars.push(StampTargetCar.decode(reader, reader.uint32()));
          break;
        case 3:
          message.challengers.push(
            ChallengerCar.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LoadStampTargetResponse {
    return {
      error: isSet(object.error) ? errorCodeFromJSON(object.error) : 0,
      cars: Array.isArray(object?.cars)
        ? object.cars.map((e: any) => StampTargetCar.fromJSON(e))
        : [],
      challengers: Array.isArray(object?.challengers)
        ? object.challengers.map((e: any) => ChallengerCar.fromJSON(e))
        : [],
    };
  },

  toJSON(message: LoadStampTargetResponse): unknown {
    const obj: any = {};
    message.error !== undefined && (obj.error = errorCodeToJSON(message.error));
    if (message.cars) {
      obj.cars = message.cars.map((e) =>
        e ? StampTargetCar.toJSON(e) : undefined
      );
    } else {
      obj.cars = [];
    }
    if (message.challengers) {
      obj.challengers = message.challengers.map((e) =>
        e ? ChallengerCar.toJSON(e) : undefined
      );
    } else {
      obj.challengers = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LoadStampTargetResponse>, I>>(
    object: I
  ): LoadStampTargetResponse {
    const message = createBaseLoadStampTargetResponse();
    message.error = object.error ?? 0;
    message.cars = object.cars?.map((e) => StampTargetCar.fromPartial(e)) || [];
    message.challengers =
      object.challengers?.map((e) => ChallengerCar.fromPartial(e)) || [];
    return message;
  },
};

function createBaseLockStampTargetRequest(): LockStampTargetRequest {
  return { carId: 0, targetCars: [] };
}

export const LockStampTargetRequest = {
  encode(
    message: LockStampTargetRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.carId !== 0) {
      writer.uint32(8).uint32(message.carId);
    }
    writer.uint32(18).fork();
    for (const v of message.targetCars) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LockStampTargetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLockStampTargetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.carId = reader.uint32();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.targetCars.push(reader.uint32());
            }
          } else {
            message.targetCars.push(reader.uint32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LockStampTargetRequest {
    return {
      carId: isSet(object.carId) ? Number(object.carId) : 0,
      targetCars: Array.isArray(object?.targetCars)
        ? object.targetCars.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: LockStampTargetRequest): unknown {
    const obj: any = {};
    message.carId !== undefined && (obj.carId = Math.round(message.carId));
    if (message.targetCars) {
      obj.targetCars = message.targetCars.map((e) => Math.round(e));
    } else {
      obj.targetCars = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LockStampTargetRequest>, I>>(
    object: I
  ): LockStampTargetRequest {
    const message = createBaseLockStampTargetRequest();
    message.carId = object.carId ?? 0;
    message.targetCars = object.targetCars?.map((e) => e) || [];
    return message;
  },
};

function createBaseLockStampTargetResponse(): LockStampTargetResponse {
  return { error: 0 };
}

export const LockStampTargetResponse = {
  encode(
    message: LockStampTargetResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.error !== 0) {
      writer.uint32(8).int32(message.error);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LockStampTargetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLockStampTargetResponse();
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

  fromJSON(object: any): LockStampTargetResponse {
    return {
      error: isSet(object.error) ? errorCodeFromJSON(object.error) : 0,
    };
  },

  toJSON(message: LockStampTargetResponse): unknown {
    const obj: any = {};
    message.error !== undefined && (obj.error = errorCodeToJSON(message.error));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LockStampTargetResponse>, I>>(
    object: I
  ): LockStampTargetResponse {
    const message = createBaseLockStampTargetResponse();
    message.error = object.error ?? 0;
    return message;
  },
};

function createBaseLoadGhostCompetitionInfoRequest(): LoadGhostCompetitionInfoRequest {
  return { carId: 0, competitionId: 0 };
}

export const LoadGhostCompetitionInfoRequest = {
  encode(
    message: LoadGhostCompetitionInfoRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.carId !== 0) {
      writer.uint32(8).uint32(message.carId);
    }
    if (message.competitionId !== 0) {
      writer.uint32(16).uint32(message.competitionId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LoadGhostCompetitionInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoadGhostCompetitionInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.carId = reader.uint32();
          break;
        case 2:
          message.competitionId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LoadGhostCompetitionInfoRequest {
    return {
      carId: isSet(object.carId) ? Number(object.carId) : 0,
      competitionId: isSet(object.competitionId)
        ? Number(object.competitionId)
        : 0,
    };
  },

  toJSON(message: LoadGhostCompetitionInfoRequest): unknown {
    const obj: any = {};
    message.carId !== undefined && (obj.carId = Math.round(message.carId));
    message.competitionId !== undefined &&
      (obj.competitionId = Math.round(message.competitionId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LoadGhostCompetitionInfoRequest>, I>>(
    object: I
  ): LoadGhostCompetitionInfoRequest {
    const message = createBaseLoadGhostCompetitionInfoRequest();
    message.carId = object.carId ?? 0;
    message.competitionId = object.competitionId ?? 0;
    return message;
  },
};

function createBaseLoadGhostCompetitionInfoResponse(): LoadGhostCompetitionInfoResponse {
  return {
    error: 0,
    periodId: 0,
    closed: false,
    brakingPoint: 0,
    qualified: false,
    topResults: [],
    result: 0,
    rank: 0,
    parameters1: [],
    parameters2: false,
  };
}

export const LoadGhostCompetitionInfoResponse = {
  encode(
    message: LoadGhostCompetitionInfoResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.error !== 0) {
      writer.uint32(8).int32(message.error);
    }
    if (message.periodId !== 0) {
      writer.uint32(16).uint32(message.periodId);
    }
    if (message.closed === true) {
      writer.uint32(24).bool(message.closed);
    }
    if (message.brakingPoint !== 0) {
      writer.uint32(32).uint32(message.brakingPoint);
    }
    if (message.qualified === true) {
      writer.uint32(40).bool(message.qualified);
    }
    writer.uint32(50).fork();
    for (const v of message.topResults) {
      writer.sint32(v);
    }
    writer.ldelim();
    if (message.result !== 0) {
      writer.uint32(56).sint32(message.result);
    }
    if (message.rank !== 0) {
      writer.uint32(64).uint32(message.rank);
    }
    writer.uint32(74).fork();
    for (const v of message.parameters1) {
      writer.float(v);
    }
    writer.ldelim();
    if (message.parameters2 === true) {
      writer.uint32(80).bool(message.parameters2);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LoadGhostCompetitionInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoadGhostCompetitionInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.error = reader.int32() as any;
          break;
        case 2:
          message.periodId = reader.uint32();
          break;
        case 3:
          message.closed = reader.bool();
          break;
        case 4:
          message.brakingPoint = reader.uint32();
          break;
        case 5:
          message.qualified = reader.bool();
          break;
        case 6:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.topResults.push(reader.sint32());
            }
          } else {
            message.topResults.push(reader.sint32());
          }
          break;
        case 7:
          message.result = reader.sint32();
          break;
        case 8:
          message.rank = reader.uint32();
          break;
        case 9:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.parameters1.push(reader.float());
            }
          } else {
            message.parameters1.push(reader.float());
          }
          break;
        case 10:
          message.parameters2 = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LoadGhostCompetitionInfoResponse {
    return {
      error: isSet(object.error) ? errorCodeFromJSON(object.error) : 0,
      periodId: isSet(object.periodId) ? Number(object.periodId) : 0,
      closed: isSet(object.closed) ? Boolean(object.closed) : false,
      brakingPoint: isSet(object.brakingPoint)
        ? Number(object.brakingPoint)
        : 0,
      qualified: isSet(object.qualified) ? Boolean(object.qualified) : false,
      topResults: Array.isArray(object?.topResults)
        ? object.topResults.map((e: any) => Number(e))
        : [],
      result: isSet(object.result) ? Number(object.result) : 0,
      rank: isSet(object.rank) ? Number(object.rank) : 0,
      parameters1: Array.isArray(object?.parameters1)
        ? object.parameters1.map((e: any) => Number(e))
        : [],
      parameters2: isSet(object.parameters2)
        ? Boolean(object.parameters2)
        : false,
    };
  },

  toJSON(message: LoadGhostCompetitionInfoResponse): unknown {
    const obj: any = {};
    message.error !== undefined && (obj.error = errorCodeToJSON(message.error));
    message.periodId !== undefined &&
      (obj.periodId = Math.round(message.periodId));
    message.closed !== undefined && (obj.closed = message.closed);
    message.brakingPoint !== undefined &&
      (obj.brakingPoint = Math.round(message.brakingPoint));
    message.qualified !== undefined && (obj.qualified = message.qualified);
    if (message.topResults) {
      obj.topResults = message.topResults.map((e) => Math.round(e));
    } else {
      obj.topResults = [];
    }
    message.result !== undefined && (obj.result = Math.round(message.result));
    message.rank !== undefined && (obj.rank = Math.round(message.rank));
    if (message.parameters1) {
      obj.parameters1 = message.parameters1.map((e) => e);
    } else {
      obj.parameters1 = [];
    }
    message.parameters2 !== undefined &&
      (obj.parameters2 = message.parameters2);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<LoadGhostCompetitionInfoResponse>, I>
  >(object: I): LoadGhostCompetitionInfoResponse {
    const message = createBaseLoadGhostCompetitionInfoResponse();
    message.error = object.error ?? 0;
    message.periodId = object.periodId ?? 0;
    message.closed = object.closed ?? false;
    message.brakingPoint = object.brakingPoint ?? 0;
    message.qualified = object.qualified ?? false;
    message.topResults = object.topResults?.map((e) => e) || [];
    message.result = object.result ?? 0;
    message.rank = object.rank ?? 0;
    message.parameters1 = object.parameters1?.map((e) => e) || [];
    message.parameters2 = object.parameters2 ?? false;
    return message;
  },
};

function createBaseLoadTimeAttackRecordRequest(): LoadTimeAttackRecordRequest {
  return { carId: 0, model: 0, course: 0 };
}

export const LoadTimeAttackRecordRequest = {
  encode(
    message: LoadTimeAttackRecordRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.carId !== 0) {
      writer.uint32(8).uint32(message.carId);
    }
    if (message.model !== 0) {
      writer.uint32(16).uint32(message.model);
    }
    if (message.course !== 0) {
      writer.uint32(24).uint32(message.course);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LoadTimeAttackRecordRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoadTimeAttackRecordRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.carId = reader.uint32();
          break;
        case 2:
          message.model = reader.uint32();
          break;
        case 3:
          message.course = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LoadTimeAttackRecordRequest {
    return {
      carId: isSet(object.carId) ? Number(object.carId) : 0,
      model: isSet(object.model) ? Number(object.model) : 0,
      course: isSet(object.course) ? Number(object.course) : 0,
    };
  },

  toJSON(message: LoadTimeAttackRecordRequest): unknown {
    const obj: any = {};
    message.carId !== undefined && (obj.carId = Math.round(message.carId));
    message.model !== undefined && (obj.model = Math.round(message.model));
    message.course !== undefined && (obj.course = Math.round(message.course));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LoadTimeAttackRecordRequest>, I>>(
    object: I
  ): LoadTimeAttackRecordRequest {
    const message = createBaseLoadTimeAttackRecordRequest();
    message.carId = object.carId ?? 0;
    message.model = object.model ?? 0;
    message.course = object.course ?? 0;
    return message;
  },
};

function createBaseLoadTimeAttackRecordResponse(): LoadTimeAttackRecordResponse {
  return {
    error: 0,
    wholeRanking: [],
    modelRanking: [],
    personalBestTime: 0,
    pbSection1Time: 0,
    pbSection2Time: 0,
    pbSection3Time: 0,
    pbSection4Time: 0,
    pbSection5Time: 0,
    pbSection6Time: 0,
    pbSection7Time: 0,
  };
}

export const LoadTimeAttackRecordResponse = {
  encode(
    message: LoadTimeAttackRecordResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.error !== 0) {
      writer.uint32(8).int32(message.error);
    }
    writer.uint32(18).fork();
    for (const v of message.wholeRanking) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(26).fork();
    for (const v of message.modelRanking) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.personalBestTime !== 0) {
      writer.uint32(32).uint32(message.personalBestTime);
    }
    if (message.pbSection1Time !== 0) {
      writer.uint32(40).uint32(message.pbSection1Time);
    }
    if (message.pbSection2Time !== 0) {
      writer.uint32(48).uint32(message.pbSection2Time);
    }
    if (message.pbSection3Time !== 0) {
      writer.uint32(56).uint32(message.pbSection3Time);
    }
    if (message.pbSection4Time !== 0) {
      writer.uint32(64).uint32(message.pbSection4Time);
    }
    if (message.pbSection5Time !== 0) {
      writer.uint32(72).uint32(message.pbSection5Time);
    }
    if (message.pbSection6Time !== 0) {
      writer.uint32(80).uint32(message.pbSection6Time);
    }
    if (message.pbSection7Time !== 0) {
      writer.uint32(88).uint32(message.pbSection7Time);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LoadTimeAttackRecordResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoadTimeAttackRecordResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.error = reader.int32() as any;
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.wholeRanking.push(reader.uint32());
            }
          } else {
            message.wholeRanking.push(reader.uint32());
          }
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.modelRanking.push(reader.uint32());
            }
          } else {
            message.modelRanking.push(reader.uint32());
          }
          break;
        case 4:
          message.personalBestTime = reader.uint32();
          break;
        case 5:
          message.pbSection1Time = reader.uint32();
          break;
        case 6:
          message.pbSection2Time = reader.uint32();
          break;
        case 7:
          message.pbSection3Time = reader.uint32();
          break;
        case 8:
          message.pbSection4Time = reader.uint32();
          break;
        case 9:
          message.pbSection5Time = reader.uint32();
          break;
        case 10:
          message.pbSection6Time = reader.uint32();
          break;
        case 11:
          message.pbSection7Time = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LoadTimeAttackRecordResponse {
    return {
      error: isSet(object.error) ? errorCodeFromJSON(object.error) : 0,
      wholeRanking: Array.isArray(object?.wholeRanking)
        ? object.wholeRanking.map((e: any) => Number(e))
        : [],
      modelRanking: Array.isArray(object?.modelRanking)
        ? object.modelRanking.map((e: any) => Number(e))
        : [],
      personalBestTime: isSet(object.personalBestTime)
        ? Number(object.personalBestTime)
        : 0,
      pbSection1Time: isSet(object.pbSection1Time)
        ? Number(object.pbSection1Time)
        : 0,
      pbSection2Time: isSet(object.pbSection2Time)
        ? Number(object.pbSection2Time)
        : 0,
      pbSection3Time: isSet(object.pbSection3Time)
        ? Number(object.pbSection3Time)
        : 0,
      pbSection4Time: isSet(object.pbSection4Time)
        ? Number(object.pbSection4Time)
        : 0,
      pbSection5Time: isSet(object.pbSection5Time)
        ? Number(object.pbSection5Time)
        : 0,
      pbSection6Time: isSet(object.pbSection6Time)
        ? Number(object.pbSection6Time)
        : 0,
      pbSection7Time: isSet(object.pbSection7Time)
        ? Number(object.pbSection7Time)
        : 0,
    };
  },

  toJSON(message: LoadTimeAttackRecordResponse): unknown {
    const obj: any = {};
    message.error !== undefined && (obj.error = errorCodeToJSON(message.error));
    if (message.wholeRanking) {
      obj.wholeRanking = message.wholeRanking.map((e) => Math.round(e));
    } else {
      obj.wholeRanking = [];
    }
    if (message.modelRanking) {
      obj.modelRanking = message.modelRanking.map((e) => Math.round(e));
    } else {
      obj.modelRanking = [];
    }
    message.personalBestTime !== undefined &&
      (obj.personalBestTime = Math.round(message.personalBestTime));
    message.pbSection1Time !== undefined &&
      (obj.pbSection1Time = Math.round(message.pbSection1Time));
    message.pbSection2Time !== undefined &&
      (obj.pbSection2Time = Math.round(message.pbSection2Time));
    message.pbSection3Time !== undefined &&
      (obj.pbSection3Time = Math.round(message.pbSection3Time));
    message.pbSection4Time !== undefined &&
      (obj.pbSection4Time = Math.round(message.pbSection4Time));
    message.pbSection5Time !== undefined &&
      (obj.pbSection5Time = Math.round(message.pbSection5Time));
    message.pbSection6Time !== undefined &&
      (obj.pbSection6Time = Math.round(message.pbSection6Time));
    message.pbSection7Time !== undefined &&
      (obj.pbSection7Time = Math.round(message.pbSection7Time));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LoadTimeAttackRecordResponse>, I>>(
    object: I
  ): LoadTimeAttackRecordResponse {
    const message = createBaseLoadTimeAttackRecordResponse();
    message.error = object.error ?? 0;
    message.wholeRanking = object.wholeRanking?.map((e) => e) || [];
    message.modelRanking = object.modelRanking?.map((e) => e) || [];
    message.personalBestTime = object.personalBestTime ?? 0;
    message.pbSection1Time = object.pbSection1Time ?? 0;
    message.pbSection2Time = object.pbSection2Time ?? 0;
    message.pbSection3Time = object.pbSection3Time ?? 0;
    message.pbSection4Time = object.pbSection4Time ?? 0;
    message.pbSection5Time = object.pbSection5Time ?? 0;
    message.pbSection6Time = object.pbSection6Time ?? 0;
    message.pbSection7Time = object.pbSection7Time ?? 0;
    return message;
  },
};

function createBaseSaveTerminalResultRequest(): SaveTerminalResultRequest {
  return {
    userId: 0,
    timestamp: 0,
    carOrder: [],
    confirmedTutorials: [],
    garageMenuEntered: false,
  };
}

export const SaveTerminalResultRequest = {
  encode(
    message: SaveTerminalResultRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.userId !== 0) {
      writer.uint32(8).uint32(message.userId);
    }
    if (message.timestamp !== 0) {
      writer.uint32(16).uint32(message.timestamp);
    }
    writer.uint32(26).fork();
    for (const v of message.carOrder) {
      writer.uint32(v);
    }
    writer.ldelim();
    writer.uint32(42).fork();
    for (const v of message.confirmedTutorials) {
      writer.int32(v);
    }
    writer.ldelim();
    if (message.garageMenuEntered === true) {
      writer.uint32(64).bool(message.garageMenuEntered);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SaveTerminalResultRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSaveTerminalResultRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userId = reader.uint32();
          break;
        case 2:
          message.timestamp = reader.uint32();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.carOrder.push(reader.uint32());
            }
          } else {
            message.carOrder.push(reader.uint32());
          }
          break;
        case 5:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.confirmedTutorials.push(reader.int32() as any);
            }
          } else {
            message.confirmedTutorials.push(reader.int32() as any);
          }
          break;
        case 8:
          message.garageMenuEntered = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SaveTerminalResultRequest {
    return {
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
      carOrder: Array.isArray(object?.carOrder)
        ? object.carOrder.map((e: any) => Number(e))
        : [],
      confirmedTutorials: Array.isArray(object?.confirmedTutorials)
        ? object.confirmedTutorials.map((e: any) => tutorialTypeFromJSON(e))
        : [],
      garageMenuEntered: isSet(object.garageMenuEntered)
        ? Boolean(object.garageMenuEntered)
        : false,
    };
  },

  toJSON(message: SaveTerminalResultRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.timestamp !== undefined &&
      (obj.timestamp = Math.round(message.timestamp));
    if (message.carOrder) {
      obj.carOrder = message.carOrder.map((e) => Math.round(e));
    } else {
      obj.carOrder = [];
    }
    if (message.confirmedTutorials) {
      obj.confirmedTutorials = message.confirmedTutorials.map((e) =>
        tutorialTypeToJSON(e)
      );
    } else {
      obj.confirmedTutorials = [];
    }
    message.garageMenuEntered !== undefined &&
      (obj.garageMenuEntered = message.garageMenuEntered);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SaveTerminalResultRequest>, I>>(
    object: I
  ): SaveTerminalResultRequest {
    const message = createBaseSaveTerminalResultRequest();
    message.userId = object.userId ?? 0;
    message.timestamp = object.timestamp ?? 0;
    message.carOrder = object.carOrder?.map((e) => e) || [];
    message.confirmedTutorials = object.confirmedTutorials?.map((e) => e) || [];
    message.garageMenuEntered = object.garageMenuEntered ?? false;
    return message;
  },
};

function createBaseSaveTerminalResultResponse(): SaveTerminalResultResponse {
  return { error: 0 };
}

export const SaveTerminalResultResponse = {
  encode(
    message: SaveTerminalResultResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.error !== 0) {
      writer.uint32(8).int32(message.error);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SaveTerminalResultResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSaveTerminalResultResponse();
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

  fromJSON(object: any): SaveTerminalResultResponse {
    return {
      error: isSet(object.error) ? errorCodeFromJSON(object.error) : 0,
    };
  },

  toJSON(message: SaveTerminalResultResponse): unknown {
    const obj: any = {};
    message.error !== undefined && (obj.error = errorCodeToJSON(message.error));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SaveTerminalResultResponse>, I>>(
    object: I
  ): SaveTerminalResultResponse {
    const message = createBaseSaveTerminalResultResponse();
    message.error = object.error ?? 0;
    return message;
  },
};

function createBasePingRequest(): PingRequest {
  return { ping: 0 };
}

export const PingRequest = {
  encode(
    message: PingRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.ping !== 0) {
      writer.uint32(8).uint32(message.ping);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PingRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePingRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ping = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PingRequest {
    return {
      ping: isSet(object.ping) ? Number(object.ping) : 0,
    };
  },

  toJSON(message: PingRequest): unknown {
    const obj: any = {};
    message.ping !== undefined && (obj.ping = Math.round(message.ping));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PingRequest>, I>>(
    object: I
  ): PingRequest {
    const message = createBasePingRequest();
    message.ping = object.ping ?? 0;
    return message;
  },
};

function createBasePingResponse(): PingResponse {
  return { error: 0, pong: 0 };
}

export const PingResponse = {
  encode(
    message: PingResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.error !== 0) {
      writer.uint32(8).int32(message.error);
    }
    if (message.pong !== 0) {
      writer.uint32(16).uint32(message.pong);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.error = reader.int32() as any;
          break;
        case 2:
          message.pong = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PingResponse {
    return {
      error: isSet(object.error) ? errorCodeFromJSON(object.error) : 0,
      pong: isSet(object.pong) ? Number(object.pong) : 0,
    };
  },

  toJSON(message: PingResponse): unknown {
    const obj: any = {};
    message.error !== undefined && (obj.error = errorCodeToJSON(message.error));
    message.pong !== undefined && (obj.pong = Math.round(message.pong));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PingResponse>, I>>(
    object: I
  ): PingResponse {
    const message = createBasePingResponse();
    message.error = object.error ?? 0;
    message.pong = object.pong ?? 0;
    return message;
  },
};

function createBaseLoadTerminalInformationRequest(): LoadTerminalInformationRequest {
  return { userId: 0 };
}

export const LoadTerminalInformationRequest = {
  encode(
    message: LoadTerminalInformationRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.userId !== 0) {
      writer.uint32(8).uint32(message.userId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LoadTerminalInformationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoadTerminalInformationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LoadTerminalInformationRequest {
    return {
      userId: isSet(object.userId) ? Number(object.userId) : 0,
    };
  },

  toJSON(message: LoadTerminalInformationRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LoadTerminalInformationRequest>, I>>(
    object: I
  ): LoadTerminalInformationRequest {
    const message = createBaseLoadTerminalInformationRequest();
    message.userId = object.userId ?? 0;
    return message;
  },
};

function createBaseLoadTerminalInformationResponse(): LoadTerminalInformationResponse {
  return {
    error: 0,
    prizeReceivable: false,
    noticeEntries: [],
    noticeMessage: [],
    noticeWindow: [],
    noticeWindowMessage: [],
    transferNotice: undefined,
    announceFeature: false,
    freeScratched: false,
    restrictedModels: [],
  };
}

export const LoadTerminalInformationResponse = {
  encode(
    message: LoadTerminalInformationResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.error !== 0) {
      writer.uint32(8).int32(message.error);
    }
    if (message.prizeReceivable === true) {
      writer.uint32(136).bool(message.prizeReceivable);
    }
    for (const v of message.noticeEntries) {
      LoadTerminalInformationResponse_TerminalNotice.encode(
        v!,
        writer.uint32(82).fork()
      ).ldelim();
    }
    for (const v of message.noticeMessage) {
      writer.uint32(90).string(v!);
    }
    writer.uint32(98).fork();
    for (const v of message.noticeWindow) {
      writer.int32(v);
    }
    writer.ldelim();
    for (const v of message.noticeWindowMessage) {
      writer.uint32(106).string(v!);
    }
    if (message.transferNotice !== undefined) {
      TransferNotice.encode(
        message.transferNotice,
        writer.uint32(114).fork()
      ).ldelim();
    }
    if (message.announceFeature === true) {
      writer.uint32(128).bool(message.announceFeature);
    }
    if (message.freeScratched === true) {
      writer.uint32(144).bool(message.freeScratched);
    }
    writer.uint32(18).fork();
    for (const v of message.restrictedModels) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LoadTerminalInformationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoadTerminalInformationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.error = reader.int32() as any;
          break;
        case 17:
          message.prizeReceivable = reader.bool();
          break;
        case 10:
          message.noticeEntries.push(
            LoadTerminalInformationResponse_TerminalNotice.decode(
              reader,
              reader.uint32()
            )
          );
          break;
        case 11:
          message.noticeMessage.push(reader.string());
          break;
        case 12:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.noticeWindow.push(reader.int32() as any);
            }
          } else {
            message.noticeWindow.push(reader.int32() as any);
          }
          break;
        case 13:
          message.noticeWindowMessage.push(reader.string());
          break;
        case 14:
          message.transferNotice = TransferNotice.decode(
            reader,
            reader.uint32()
          );
          break;
        case 16:
          message.announceFeature = reader.bool();
          break;
        case 18:
          message.freeScratched = reader.bool();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.restrictedModels.push(reader.uint32());
            }
          } else {
            message.restrictedModels.push(reader.uint32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LoadTerminalInformationResponse {
    return {
      error: isSet(object.error) ? errorCodeFromJSON(object.error) : 0,
      prizeReceivable: isSet(object.prizeReceivable)
        ? Boolean(object.prizeReceivable)
        : false,
      noticeEntries: Array.isArray(object?.noticeEntries)
        ? object.noticeEntries.map((e: any) =>
            LoadTerminalInformationResponse_TerminalNotice.fromJSON(e)
          )
        : [],
      noticeMessage: Array.isArray(object?.noticeMessage)
        ? object.noticeMessage.map((e: any) => String(e))
        : [],
      noticeWindow: Array.isArray(object?.noticeWindow)
        ? object.noticeWindow.map((e: any) => noticeEntryFromJSON(e))
        : [],
      noticeWindowMessage: Array.isArray(object?.noticeWindowMessage)
        ? object.noticeWindowMessage.map((e: any) => String(e))
        : [],
      transferNotice: isSet(object.transferNotice)
        ? TransferNotice.fromJSON(object.transferNotice)
        : undefined,
      announceFeature: isSet(object.announceFeature)
        ? Boolean(object.announceFeature)
        : false,
      freeScratched: isSet(object.freeScratched)
        ? Boolean(object.freeScratched)
        : false,
      restrictedModels: Array.isArray(object?.restrictedModels)
        ? object.restrictedModels.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: LoadTerminalInformationResponse): unknown {
    const obj: any = {};
    message.error !== undefined && (obj.error = errorCodeToJSON(message.error));
    message.prizeReceivable !== undefined &&
      (obj.prizeReceivable = message.prizeReceivable);
    if (message.noticeEntries) {
      obj.noticeEntries = message.noticeEntries.map((e) =>
        e ? LoadTerminalInformationResponse_TerminalNotice.toJSON(e) : undefined
      );
    } else {
      obj.noticeEntries = [];
    }
    if (message.noticeMessage) {
      obj.noticeMessage = message.noticeMessage.map((e) => e);
    } else {
      obj.noticeMessage = [];
    }
    if (message.noticeWindow) {
      obj.noticeWindow = message.noticeWindow.map((e) => noticeEntryToJSON(e));
    } else {
      obj.noticeWindow = [];
    }
    if (message.noticeWindowMessage) {
      obj.noticeWindowMessage = message.noticeWindowMessage.map((e) => e);
    } else {
      obj.noticeWindowMessage = [];
    }
    message.transferNotice !== undefined &&
      (obj.transferNotice = message.transferNotice
        ? TransferNotice.toJSON(message.transferNotice)
        : undefined);
    message.announceFeature !== undefined &&
      (obj.announceFeature = message.announceFeature);
    message.freeScratched !== undefined &&
      (obj.freeScratched = message.freeScratched);
    if (message.restrictedModels) {
      obj.restrictedModels = message.restrictedModels.map((e) => Math.round(e));
    } else {
      obj.restrictedModels = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LoadTerminalInformationResponse>, I>>(
    object: I
  ): LoadTerminalInformationResponse {
    const message = createBaseLoadTerminalInformationResponse();
    message.error = object.error ?? 0;
    message.prizeReceivable = object.prizeReceivable ?? false;
    message.noticeEntries =
      object.noticeEntries?.map((e) =>
        LoadTerminalInformationResponse_TerminalNotice.fromPartial(e)
      ) || [];
    message.noticeMessage = object.noticeMessage?.map((e) => e) || [];
    message.noticeWindow = object.noticeWindow?.map((e) => e) || [];
    message.noticeWindowMessage =
      object.noticeWindowMessage?.map((e) => e) || [];
    message.transferNotice =
      object.transferNotice !== undefined && object.transferNotice !== null
        ? TransferNotice.fromPartial(object.transferNotice)
        : undefined;
    message.announceFeature = object.announceFeature ?? false;
    message.freeScratched = object.freeScratched ?? false;
    message.restrictedModels = object.restrictedModels?.map((e) => e) || [];
    return message;
  },
};

function createBaseLoadTerminalInformationResponse_TerminalNotice(): LoadTerminalInformationResponse_TerminalNotice {
  return { noticeType: 1, field1: "", field2: 0, field3: 0 };
}

export const LoadTerminalInformationResponse_TerminalNotice = {
  encode(
    message: LoadTerminalInformationResponse_TerminalNotice,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.noticeType !== 1) {
      writer.uint32(8).int32(message.noticeType);
    }
    if (message.field1 !== "") {
      writer.uint32(18).string(message.field1);
    }
    if (message.field2 !== 0) {
      writer.uint32(24).uint32(message.field2);
    }
    if (message.field3 !== 0) {
      writer.uint32(32).uint32(message.field3);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LoadTerminalInformationResponse_TerminalNotice {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoadTerminalInformationResponse_TerminalNotice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.noticeType = reader.int32() as any;
          break;
        case 2:
          message.field1 = reader.string();
          break;
        case 3:
          message.field2 = reader.uint32();
          break;
        case 4:
          message.field3 = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LoadTerminalInformationResponse_TerminalNotice {
    return {
      noticeType: isSet(object.noticeType)
        ? noticeEntryFromJSON(object.noticeType)
        : 1,
      field1: isSet(object.field1) ? String(object.field1) : "",
      field2: isSet(object.field2) ? Number(object.field2) : 0,
      field3: isSet(object.field3) ? Number(object.field3) : 0,
    };
  },

  toJSON(message: LoadTerminalInformationResponse_TerminalNotice): unknown {
    const obj: any = {};
    message.noticeType !== undefined &&
      (obj.noticeType = noticeEntryToJSON(message.noticeType));
    message.field1 !== undefined && (obj.field1 = message.field1);
    message.field2 !== undefined && (obj.field2 = Math.round(message.field2));
    message.field3 !== undefined && (obj.field3 = Math.round(message.field3));
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<LoadTerminalInformationResponse_TerminalNotice>,
      I
    >
  >(object: I): LoadTerminalInformationResponse_TerminalNotice {
    const message = createBaseLoadTerminalInformationResponse_TerminalNotice();
    message.noticeType = object.noticeType ?? 1;
    message.field1 = object.field1 ?? "";
    message.field2 = object.field2 ?? 0;
    message.field3 = object.field3 ?? 0;
    return message;
  },
};

function createBaseCreateUserRequest(): CreateUserRequest {
  return {
    banapassportAmId: 0,
    cardChipId: "",
    accessCode: "",
    cardTypeCode: 0,
    cardRegionCode: 0,
    device: 0,
    timestamp: 0,
  };
}

export const CreateUserRequest = {
  encode(
    message: CreateUserRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.banapassportAmId !== 0) {
      writer.uint32(8).uint32(message.banapassportAmId);
    }
    if (message.cardChipId !== "") {
      writer.uint32(18).string(message.cardChipId);
    }
    if (message.accessCode !== "") {
      writer.uint32(26).string(message.accessCode);
    }
    if (message.cardTypeCode !== 0) {
      writer.uint32(32).uint32(message.cardTypeCode);
    }
    if (message.cardRegionCode !== 0) {
      writer.uint32(40).uint32(message.cardRegionCode);
    }
    if (message.device !== 0) {
      writer.uint32(48).int32(message.device);
    }
    if (message.timestamp !== 0) {
      writer.uint32(56).uint32(message.timestamp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateUserRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateUserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.banapassportAmId = reader.uint32();
          break;
        case 2:
          message.cardChipId = reader.string();
          break;
        case 3:
          message.accessCode = reader.string();
          break;
        case 4:
          message.cardTypeCode = reader.uint32();
          break;
        case 5:
          message.cardRegionCode = reader.uint32();
          break;
        case 6:
          message.device = reader.int32() as any;
          break;
        case 7:
          message.timestamp = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateUserRequest {
    return {
      banapassportAmId: isSet(object.banapassportAmId)
        ? Number(object.banapassportAmId)
        : 0,
      cardChipId: isSet(object.cardChipId) ? String(object.cardChipId) : "",
      accessCode: isSet(object.accessCode) ? String(object.accessCode) : "",
      cardTypeCode: isSet(object.cardTypeCode)
        ? Number(object.cardTypeCode)
        : 0,
      cardRegionCode: isSet(object.cardRegionCode)
        ? Number(object.cardRegionCode)
        : 0,
      device: isSet(object.device) ? deviceTypeFromJSON(object.device) : 0,
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
    };
  },

  toJSON(message: CreateUserRequest): unknown {
    const obj: any = {};
    message.banapassportAmId !== undefined &&
      (obj.banapassportAmId = Math.round(message.banapassportAmId));
    message.cardChipId !== undefined && (obj.cardChipId = message.cardChipId);
    message.accessCode !== undefined && (obj.accessCode = message.accessCode);
    message.cardTypeCode !== undefined &&
      (obj.cardTypeCode = Math.round(message.cardTypeCode));
    message.cardRegionCode !== undefined &&
      (obj.cardRegionCode = Math.round(message.cardRegionCode));
    message.device !== undefined &&
      (obj.device = deviceTypeToJSON(message.device));
    message.timestamp !== undefined &&
      (obj.timestamp = Math.round(message.timestamp));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateUserRequest>, I>>(
    object: I
  ): CreateUserRequest {
    const message = createBaseCreateUserRequest();
    message.banapassportAmId = object.banapassportAmId ?? 0;
    message.cardChipId = object.cardChipId ?? "";
    message.accessCode = object.accessCode ?? "";
    message.cardTypeCode = object.cardTypeCode ?? 0;
    message.cardRegionCode = object.cardRegionCode ?? 0;
    message.device = object.device ?? 0;
    message.timestamp = object.timestamp ?? 0;
    return message;
  },
};

function createBaseCreateUserResponse(): CreateUserResponse {
  return { error: 0, accessCode: "", banapassportAmId: 0, mbid: 0, userId: 0 };
}

export const CreateUserResponse = {
  encode(
    message: CreateUserResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.error !== 0) {
      writer.uint32(8).int32(message.error);
    }
    if (message.accessCode !== "") {
      writer.uint32(18).string(message.accessCode);
    }
    if (message.banapassportAmId !== 0) {
      writer.uint32(24).uint32(message.banapassportAmId);
    }
    if (message.mbid !== 0) {
      writer.uint32(32).uint32(message.mbid);
    }
    if (message.userId !== 0) {
      writer.uint32(40).uint32(message.userId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateUserResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateUserResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.error = reader.int32() as any;
          break;
        case 2:
          message.accessCode = reader.string();
          break;
        case 3:
          message.banapassportAmId = reader.uint32();
          break;
        case 4:
          message.mbid = reader.uint32();
          break;
        case 5:
          message.userId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateUserResponse {
    return {
      error: isSet(object.error) ? errorCodeFromJSON(object.error) : 0,
      accessCode: isSet(object.accessCode) ? String(object.accessCode) : "",
      banapassportAmId: isSet(object.banapassportAmId)
        ? Number(object.banapassportAmId)
        : 0,
      mbid: isSet(object.mbid) ? Number(object.mbid) : 0,
      userId: isSet(object.userId) ? Number(object.userId) : 0,
    };
  },

  toJSON(message: CreateUserResponse): unknown {
    const obj: any = {};
    message.error !== undefined && (obj.error = errorCodeToJSON(message.error));
    message.accessCode !== undefined && (obj.accessCode = message.accessCode);
    message.banapassportAmId !== undefined &&
      (obj.banapassportAmId = Math.round(message.banapassportAmId));
    message.mbid !== undefined && (obj.mbid = Math.round(message.mbid));
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateUserResponse>, I>>(
    object: I
  ): CreateUserResponse {
    const message = createBaseCreateUserResponse();
    message.error = object.error ?? 0;
    message.accessCode = object.accessCode ?? "";
    message.banapassportAmId = object.banapassportAmId ?? 0;
    message.mbid = object.mbid ?? 0;
    message.userId = object.userId ?? 0;
    return message;
  },
};

function createBaseAskAccessCodeRequest(): AskAccessCodeRequest {
  return { cardChipId: "" };
}

export const AskAccessCodeRequest = {
  encode(
    message: AskAccessCodeRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.cardChipId !== "") {
      writer.uint32(10).string(message.cardChipId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AskAccessCodeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAskAccessCodeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.cardChipId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AskAccessCodeRequest {
    return {
      cardChipId: isSet(object.cardChipId) ? String(object.cardChipId) : "",
    };
  },

  toJSON(message: AskAccessCodeRequest): unknown {
    const obj: any = {};
    message.cardChipId !== undefined && (obj.cardChipId = message.cardChipId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AskAccessCodeRequest>, I>>(
    object: I
  ): AskAccessCodeRequest {
    const message = createBaseAskAccessCodeRequest();
    message.cardChipId = object.cardChipId ?? "";
    return message;
  },
};

function createBaseAskAccessCodeResponse(): AskAccessCodeResponse {
  return { error: 0, accessCode: "" };
}

export const AskAccessCodeResponse = {
  encode(
    message: AskAccessCodeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.error !== 0) {
      writer.uint32(8).int32(message.error);
    }
    if (message.accessCode !== "") {
      writer.uint32(18).string(message.accessCode);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): AskAccessCodeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAskAccessCodeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.error = reader.int32() as any;
          break;
        case 2:
          message.accessCode = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AskAccessCodeResponse {
    return {
      error: isSet(object.error) ? errorCodeFromJSON(object.error) : 0,
      accessCode: isSet(object.accessCode) ? String(object.accessCode) : "",
    };
  },

  toJSON(message: AskAccessCodeResponse): unknown {
    const obj: any = {};
    message.error !== undefined && (obj.error = errorCodeToJSON(message.error));
    message.accessCode !== undefined && (obj.accessCode = message.accessCode);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AskAccessCodeResponse>, I>>(
    object: I
  ): AskAccessCodeResponse {
    const message = createBaseAskAccessCodeResponse();
    message.error = object.error ?? 0;
    message.accessCode = object.accessCode ?? "";
    return message;
  },
};

function createBaseRegisterOpponentGhostRequest(): RegisterOpponentGhostRequest {
  return { carId: 0, specialGhostId: 0 };
}

export const RegisterOpponentGhostRequest = {
  encode(
    message: RegisterOpponentGhostRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.carId !== 0) {
      writer.uint32(8).uint32(message.carId);
    }
    if (message.specialGhostId !== 0) {
      writer.uint32(16).uint32(message.specialGhostId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RegisterOpponentGhostRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterOpponentGhostRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.carId = reader.uint32();
          break;
        case 2:
          message.specialGhostId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RegisterOpponentGhostRequest {
    return {
      carId: isSet(object.carId) ? Number(object.carId) : 0,
      specialGhostId: isSet(object.specialGhostId)
        ? Number(object.specialGhostId)
        : 0,
    };
  },

  toJSON(message: RegisterOpponentGhostRequest): unknown {
    const obj: any = {};
    message.carId !== undefined && (obj.carId = Math.round(message.carId));
    message.specialGhostId !== undefined &&
      (obj.specialGhostId = Math.round(message.specialGhostId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RegisterOpponentGhostRequest>, I>>(
    object: I
  ): RegisterOpponentGhostRequest {
    const message = createBaseRegisterOpponentGhostRequest();
    message.carId = object.carId ?? 0;
    message.specialGhostId = object.specialGhostId ?? 0;
    return message;
  },
};

function createBaseRegisterOpponentGhostResponse(): RegisterOpponentGhostResponse {
  return { error: 0 };
}

export const RegisterOpponentGhostResponse = {
  encode(
    message: RegisterOpponentGhostResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.error !== 0) {
      writer.uint32(8).int32(message.error);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): RegisterOpponentGhostResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterOpponentGhostResponse();
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

  fromJSON(object: any): RegisterOpponentGhostResponse {
    return {
      error: isSet(object.error) ? errorCodeFromJSON(object.error) : 0,
    };
  },

  toJSON(message: RegisterOpponentGhostResponse): unknown {
    const obj: any = {};
    message.error !== undefined && (obj.error = errorCodeToJSON(message.error));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RegisterOpponentGhostResponse>, I>>(
    object: I
  ): RegisterOpponentGhostResponse {
    const message = createBaseRegisterOpponentGhostResponse();
    message.error = object.error ?? 0;
    return message;
  },
};

function createBaseGrantCarRightRequest(): GrantCarRightRequest {
  return { userId: 0, targetUserId: 0, timestamp: 0 };
}

export const GrantCarRightRequest = {
  encode(
    message: GrantCarRightRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.userId !== 0) {
      writer.uint32(8).uint32(message.userId);
    }
    if (message.targetUserId !== 0) {
      writer.uint32(16).uint32(message.targetUserId);
    }
    if (message.timestamp !== 0) {
      writer.uint32(24).uint32(message.timestamp);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GrantCarRightRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGrantCarRightRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userId = reader.uint32();
          break;
        case 2:
          message.targetUserId = reader.uint32();
          break;
        case 3:
          message.timestamp = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GrantCarRightRequest {
    return {
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      targetUserId: isSet(object.targetUserId)
        ? Number(object.targetUserId)
        : 0,
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
    };
  },

  toJSON(message: GrantCarRightRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.targetUserId !== undefined &&
      (obj.targetUserId = Math.round(message.targetUserId));
    message.timestamp !== undefined &&
      (obj.timestamp = Math.round(message.timestamp));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GrantCarRightRequest>, I>>(
    object: I
  ): GrantCarRightRequest {
    const message = createBaseGrantCarRightRequest();
    message.userId = object.userId ?? 0;
    message.targetUserId = object.targetUserId ?? 0;
    message.timestamp = object.timestamp ?? 0;
    return message;
  },
};

function createBaseGrantCarRightResponse(): GrantCarRightResponse {
  return { error: 0 };
}

export const GrantCarRightResponse = {
  encode(
    message: GrantCarRightResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.error !== 0) {
      writer.uint32(8).int32(message.error);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GrantCarRightResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGrantCarRightResponse();
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

  fromJSON(object: any): GrantCarRightResponse {
    return {
      error: isSet(object.error) ? errorCodeFromJSON(object.error) : 0,
    };
  },

  toJSON(message: GrantCarRightResponse): unknown {
    const obj: any = {};
    message.error !== undefined && (obj.error = errorCodeToJSON(message.error));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GrantCarRightResponse>, I>>(
    object: I
  ): GrantCarRightResponse {
    const message = createBaseGrantCarRightResponse();
    message.error = object.error ?? 0;
    return message;
  },
};

function createBaseLoadGhostCompetitionRankingRequest(): LoadGhostCompetitionRankingRequest {
  return { carId: 0, competitionId: 0 };
}

export const LoadGhostCompetitionRankingRequest = {
  encode(
    message: LoadGhostCompetitionRankingRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.carId !== 0) {
      writer.uint32(8).uint32(message.carId);
    }
    if (message.competitionId !== 0) {
      writer.uint32(16).uint32(message.competitionId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LoadGhostCompetitionRankingRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoadGhostCompetitionRankingRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.carId = reader.uint32();
          break;
        case 2:
          message.competitionId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LoadGhostCompetitionRankingRequest {
    return {
      carId: isSet(object.carId) ? Number(object.carId) : 0,
      competitionId: isSet(object.competitionId)
        ? Number(object.competitionId)
        : 0,
    };
  },

  toJSON(message: LoadGhostCompetitionRankingRequest): unknown {
    const obj: any = {};
    message.carId !== undefined && (obj.carId = Math.round(message.carId));
    message.competitionId !== undefined &&
      (obj.competitionId = Math.round(message.competitionId));
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<LoadGhostCompetitionRankingRequest>, I>
  >(object: I): LoadGhostCompetitionRankingRequest {
    const message = createBaseLoadGhostCompetitionRankingRequest();
    message.carId = object.carId ?? 0;
    message.competitionId = object.competitionId ?? 0;
    return message;
  },
};

function createBaseLoadGhostCompetitionRankingResponse(): LoadGhostCompetitionRankingResponse {
  return {
    error: 0,
    periodId: 0,
    numOfParticipants: 0,
    competitionSchedule: undefined,
    ownRecord: undefined,
    topRecords: [],
  };
}

export const LoadGhostCompetitionRankingResponse = {
  encode(
    message: LoadGhostCompetitionRankingResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.error !== 0) {
      writer.uint32(8).int32(message.error);
    }
    if (message.periodId !== 0) {
      writer.uint32(16).uint32(message.periodId);
    }
    if (message.numOfParticipants !== 0) {
      writer.uint32(24).uint32(message.numOfParticipants);
    }
    if (message.competitionSchedule !== undefined) {
      GhostCompetitionSchedule.encode(
        message.competitionSchedule,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.ownRecord !== undefined) {
      LoadGhostCompetitionRankingResponse_Entry.encode(
        message.ownRecord,
        writer.uint32(42).fork()
      ).ldelim();
    }
    for (const v of message.topRecords) {
      LoadGhostCompetitionRankingResponse_Entry.encode(
        v!,
        writer.uint32(50).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LoadGhostCompetitionRankingResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoadGhostCompetitionRankingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.error = reader.int32() as any;
          break;
        case 2:
          message.periodId = reader.uint32();
          break;
        case 3:
          message.numOfParticipants = reader.uint32();
          break;
        case 4:
          message.competitionSchedule = GhostCompetitionSchedule.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.ownRecord = LoadGhostCompetitionRankingResponse_Entry.decode(
            reader,
            reader.uint32()
          );
          break;
        case 6:
          message.topRecords.push(
            LoadGhostCompetitionRankingResponse_Entry.decode(
              reader,
              reader.uint32()
            )
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LoadGhostCompetitionRankingResponse {
    return {
      error: isSet(object.error) ? errorCodeFromJSON(object.error) : 0,
      periodId: isSet(object.periodId) ? Number(object.periodId) : 0,
      numOfParticipants: isSet(object.numOfParticipants)
        ? Number(object.numOfParticipants)
        : 0,
      competitionSchedule: isSet(object.competitionSchedule)
        ? GhostCompetitionSchedule.fromJSON(object.competitionSchedule)
        : undefined,
      ownRecord: isSet(object.ownRecord)
        ? LoadGhostCompetitionRankingResponse_Entry.fromJSON(object.ownRecord)
        : undefined,
      topRecords: Array.isArray(object?.topRecords)
        ? object.topRecords.map((e: any) =>
            LoadGhostCompetitionRankingResponse_Entry.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: LoadGhostCompetitionRankingResponse): unknown {
    const obj: any = {};
    message.error !== undefined && (obj.error = errorCodeToJSON(message.error));
    message.periodId !== undefined &&
      (obj.periodId = Math.round(message.periodId));
    message.numOfParticipants !== undefined &&
      (obj.numOfParticipants = Math.round(message.numOfParticipants));
    message.competitionSchedule !== undefined &&
      (obj.competitionSchedule = message.competitionSchedule
        ? GhostCompetitionSchedule.toJSON(message.competitionSchedule)
        : undefined);
    message.ownRecord !== undefined &&
      (obj.ownRecord = message.ownRecord
        ? LoadGhostCompetitionRankingResponse_Entry.toJSON(message.ownRecord)
        : undefined);
    if (message.topRecords) {
      obj.topRecords = message.topRecords.map((e) =>
        e ? LoadGhostCompetitionRankingResponse_Entry.toJSON(e) : undefined
      );
    } else {
      obj.topRecords = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<LoadGhostCompetitionRankingResponse>, I>
  >(object: I): LoadGhostCompetitionRankingResponse {
    const message = createBaseLoadGhostCompetitionRankingResponse();
    message.error = object.error ?? 0;
    message.periodId = object.periodId ?? 0;
    message.numOfParticipants = object.numOfParticipants ?? 0;
    message.competitionSchedule =
      object.competitionSchedule !== undefined &&
      object.competitionSchedule !== null
        ? GhostCompetitionSchedule.fromPartial(object.competitionSchedule)
        : undefined;
    message.ownRecord =
      object.ownRecord !== undefined && object.ownRecord !== null
        ? LoadGhostCompetitionRankingResponse_Entry.fromPartial(
            object.ownRecord
          )
        : undefined;
    message.topRecords =
      object.topRecords?.map((e) =>
        LoadGhostCompetitionRankingResponse_Entry.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseLoadGhostCompetitionRankingResponse_Entry(): LoadGhostCompetitionRankingResponse_Entry {
  return {
    rank: 0,
    result: 0,
    carId: 0,
    name: "",
    regionId: 0,
    model: 0,
    visualModel: 0,
    defaultColor: 0,
    title: "",
    level: 0,
    windowStickerString: "",
    playedShopName: "",
    playedAt: 0,
  };
}

export const LoadGhostCompetitionRankingResponse_Entry = {
  encode(
    message: LoadGhostCompetitionRankingResponse_Entry,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.rank !== 0) {
      writer.uint32(8).uint32(message.rank);
    }
    if (message.result !== 0) {
      writer.uint32(16).sint32(message.result);
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
    if (message.title !== "") {
      writer.uint32(82).string(message.title);
    }
    if (message.level !== 0) {
      writer.uint32(88).uint32(message.level);
    }
    if (message.windowStickerString !== "") {
      writer.uint32(98).string(message.windowStickerString);
    }
    if (message.playedShopName !== "") {
      writer.uint32(106).string(message.playedShopName);
    }
    if (message.playedAt !== 0) {
      writer.uint32(112).uint32(message.playedAt);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LoadGhostCompetitionRankingResponse_Entry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoadGhostCompetitionRankingResponse_Entry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rank = reader.uint32();
          break;
        case 2:
          message.result = reader.sint32();
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
        case 10:
          message.title = reader.string();
          break;
        case 11:
          message.level = reader.uint32();
          break;
        case 12:
          message.windowStickerString = reader.string();
          break;
        case 13:
          message.playedShopName = reader.string();
          break;
        case 14:
          message.playedAt = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LoadGhostCompetitionRankingResponse_Entry {
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
      title: isSet(object.title) ? String(object.title) : "",
      level: isSet(object.level) ? Number(object.level) : 0,
      windowStickerString: isSet(object.windowStickerString)
        ? String(object.windowStickerString)
        : "",
      playedShopName: isSet(object.playedShopName)
        ? String(object.playedShopName)
        : "",
      playedAt: isSet(object.playedAt) ? Number(object.playedAt) : 0,
    };
  },

  toJSON(message: LoadGhostCompetitionRankingResponse_Entry): unknown {
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
    message.title !== undefined && (obj.title = message.title);
    message.level !== undefined && (obj.level = Math.round(message.level));
    message.windowStickerString !== undefined &&
      (obj.windowStickerString = message.windowStickerString);
    message.playedShopName !== undefined &&
      (obj.playedShopName = message.playedShopName);
    message.playedAt !== undefined &&
      (obj.playedAt = Math.round(message.playedAt));
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<LoadGhostCompetitionRankingResponse_Entry>, I>
  >(object: I): LoadGhostCompetitionRankingResponse_Entry {
    const message = createBaseLoadGhostCompetitionRankingResponse_Entry();
    message.rank = object.rank ?? 0;
    message.result = object.result ?? 0;
    message.carId = object.carId ?? 0;
    message.name = object.name ?? "";
    message.regionId = object.regionId ?? 0;
    message.model = object.model ?? 0;
    message.visualModel = object.visualModel ?? 0;
    message.defaultColor = object.defaultColor ?? 0;
    message.title = object.title ?? "";
    message.level = object.level ?? 0;
    message.windowStickerString = object.windowStickerString ?? "";
    message.playedShopName = object.playedShopName ?? "";
    message.playedAt = object.playedAt ?? 0;
    return message;
  },
};

function createBaseLoadUnreceivedUserItemsRequest(): LoadUnreceivedUserItemsRequest {
  return { userId: 0 };
}

export const LoadUnreceivedUserItemsRequest = {
  encode(
    message: LoadUnreceivedUserItemsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.userId !== 0) {
      writer.uint32(8).uint32(message.userId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LoadUnreceivedUserItemsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoadUnreceivedUserItemsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LoadUnreceivedUserItemsRequest {
    return {
      userId: isSet(object.userId) ? Number(object.userId) : 0,
    };
  },

  toJSON(message: LoadUnreceivedUserItemsRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LoadUnreceivedUserItemsRequest>, I>>(
    object: I
  ): LoadUnreceivedUserItemsRequest {
    const message = createBaseLoadUnreceivedUserItemsRequest();
    message.userId = object.userId ?? 0;
    return message;
  },
};

function createBaseLoadUnreceivedUserItemsResponse(): LoadUnreceivedUserItemsResponse {
  return { error: 0, ownedUserItems: [] };
}

export const LoadUnreceivedUserItemsResponse = {
  encode(
    message: LoadUnreceivedUserItemsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.error !== 0) {
      writer.uint32(8).int32(message.error);
    }
    for (const v of message.ownedUserItems) {
      UserItem.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LoadUnreceivedUserItemsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoadUnreceivedUserItemsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.error = reader.int32() as any;
          break;
        case 7:
          message.ownedUserItems.push(UserItem.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LoadUnreceivedUserItemsResponse {
    return {
      error: isSet(object.error) ? errorCodeFromJSON(object.error) : 0,
      ownedUserItems: Array.isArray(object?.ownedUserItems)
        ? object.ownedUserItems.map((e: any) => UserItem.fromJSON(e))
        : [],
    };
  },

  toJSON(message: LoadUnreceivedUserItemsResponse): unknown {
    const obj: any = {};
    message.error !== undefined && (obj.error = errorCodeToJSON(message.error));
    if (message.ownedUserItems) {
      obj.ownedUserItems = message.ownedUserItems.map((e) =>
        e ? UserItem.toJSON(e) : undefined
      );
    } else {
      obj.ownedUserItems = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LoadUnreceivedUserItemsResponse>, I>>(
    object: I
  ): LoadUnreceivedUserItemsResponse {
    const message = createBaseLoadUnreceivedUserItemsResponse();
    message.error = object.error ?? 0;
    message.ownedUserItems =
      object.ownedUserItems?.map((e) => UserItem.fromPartial(e)) || [];
    return message;
  },
};

function createBaseLoadBookmarksRequest(): LoadBookmarksRequest {
  return { userId: 0 };
}

export const LoadBookmarksRequest = {
  encode(
    message: LoadBookmarksRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.userId !== 0) {
      writer.uint32(8).uint32(message.userId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LoadBookmarksRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoadBookmarksRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LoadBookmarksRequest {
    return {
      userId: isSet(object.userId) ? Number(object.userId) : 0,
    };
  },

  toJSON(message: LoadBookmarksRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LoadBookmarksRequest>, I>>(
    object: I
  ): LoadBookmarksRequest {
    const message = createBaseLoadBookmarksRequest();
    message.userId = object.userId ?? 0;
    return message;
  },
};

function createBaseLoadBookmarksResponse(): LoadBookmarksResponse {
  return { error: 0, cars: [] };
}

export const LoadBookmarksResponse = {
  encode(
    message: LoadBookmarksResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.error !== 0) {
      writer.uint32(8).int32(message.error);
    }
    for (const v of message.cars) {
      Car.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LoadBookmarksResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoadBookmarksResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.error = reader.int32() as any;
          break;
        case 2:
          message.cars.push(Car.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LoadBookmarksResponse {
    return {
      error: isSet(object.error) ? errorCodeFromJSON(object.error) : 0,
      cars: Array.isArray(object?.cars)
        ? object.cars.map((e: any) => Car.fromJSON(e))
        : [],
    };
  },

  toJSON(message: LoadBookmarksResponse): unknown {
    const obj: any = {};
    message.error !== undefined && (obj.error = errorCodeToJSON(message.error));
    if (message.cars) {
      obj.cars = message.cars.map((e) => (e ? Car.toJSON(e) : undefined));
    } else {
      obj.cars = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LoadBookmarksResponse>, I>>(
    object: I
  ): LoadBookmarksResponse {
    const message = createBaseLoadBookmarksResponse();
    message.error = object.error ?? 0;
    message.cars = object.cars?.map((e) => Car.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSaveBookmarksRequest(): SaveBookmarksRequest {
  return { userId: 0, cars: [] };
}

export const SaveBookmarksRequest = {
  encode(
    message: SaveBookmarksRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.userId !== 0) {
      writer.uint32(8).uint32(message.userId);
    }
    writer.uint32(18).fork();
    for (const v of message.cars) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SaveBookmarksRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSaveBookmarksRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userId = reader.uint32();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.cars.push(reader.uint32());
            }
          } else {
            message.cars.push(reader.uint32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SaveBookmarksRequest {
    return {
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      cars: Array.isArray(object?.cars)
        ? object.cars.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: SaveBookmarksRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    if (message.cars) {
      obj.cars = message.cars.map((e) => Math.round(e));
    } else {
      obj.cars = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SaveBookmarksRequest>, I>>(
    object: I
  ): SaveBookmarksRequest {
    const message = createBaseSaveBookmarksRequest();
    message.userId = object.userId ?? 0;
    message.cars = object.cars?.map((e) => e) || [];
    return message;
  },
};

function createBaseSaveBookmarksResponse(): SaveBookmarksResponse {
  return { error: 0 };
}

export const SaveBookmarksResponse = {
  encode(
    message: SaveBookmarksResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.error !== 0) {
      writer.uint32(8).int32(message.error);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SaveBookmarksResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSaveBookmarksResponse();
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

  fromJSON(object: any): SaveBookmarksResponse {
    return {
      error: isSet(object.error) ? errorCodeFromJSON(object.error) : 0,
    };
  },

  toJSON(message: SaveBookmarksResponse): unknown {
    const obj: any = {};
    message.error !== undefined && (obj.error = errorCodeToJSON(message.error));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SaveBookmarksResponse>, I>>(
    object: I
  ): SaveBookmarksResponse {
    const message = createBaseSaveBookmarksResponse();
    message.error = object.error ?? 0;
    return message;
  },
};

function createBaseStartTransferRequest(): StartTransferRequest {
  return { banapassportAmId: 0 };
}

export const StartTransferRequest = {
  encode(
    message: StartTransferRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.banapassportAmId !== 0) {
      writer.uint32(8).uint32(message.banapassportAmId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): StartTransferRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStartTransferRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.banapassportAmId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StartTransferRequest {
    return {
      banapassportAmId: isSet(object.banapassportAmId)
        ? Number(object.banapassportAmId)
        : 0,
    };
  },

  toJSON(message: StartTransferRequest): unknown {
    const obj: any = {};
    message.banapassportAmId !== undefined &&
      (obj.banapassportAmId = Math.round(message.banapassportAmId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StartTransferRequest>, I>>(
    object: I
  ): StartTransferRequest {
    const message = createBaseStartTransferRequest();
    message.banapassportAmId = object.banapassportAmId ?? 0;
    return message;
  },
};

function createBaseStartTransferResponse(): StartTransferResponse {
  return { error: 0, userId: 0, pollingInterval: 0 };
}

export const StartTransferResponse = {
  encode(
    message: StartTransferResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.error !== 0) {
      writer.uint32(8).int32(message.error);
    }
    if (message.userId !== 0) {
      writer.uint32(16).uint32(message.userId);
    }
    if (message.pollingInterval !== 0) {
      writer.uint32(24).uint32(message.pollingInterval);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): StartTransferResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStartTransferResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.error = reader.int32() as any;
          break;
        case 2:
          message.userId = reader.uint32();
          break;
        case 3:
          message.pollingInterval = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StartTransferResponse {
    return {
      error: isSet(object.error) ? errorCodeFromJSON(object.error) : 0,
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      pollingInterval: isSet(object.pollingInterval)
        ? Number(object.pollingInterval)
        : 0,
    };
  },

  toJSON(message: StartTransferResponse): unknown {
    const obj: any = {};
    message.error !== undefined && (obj.error = errorCodeToJSON(message.error));
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.pollingInterval !== undefined &&
      (obj.pollingInterval = Math.round(message.pollingInterval));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StartTransferResponse>, I>>(
    object: I
  ): StartTransferResponse {
    const message = createBaseStartTransferResponse();
    message.error = object.error ?? 0;
    message.userId = object.userId ?? 0;
    message.pollingInterval = object.pollingInterval ?? 0;
    return message;
  },
};

function createBaseSaveScreenshotRequest(): SaveScreenshotRequest {
  return {
    carId: 0,
    timestamp: 0,
    playedAt: 0,
    transparent: false,
    imageType: 1,
    image: Buffer.alloc(0),
    ghostMetadata: undefined,
    versusMetadata: undefined,
    terminalMetadata: undefined,
    acquiringVsStarMetadata: undefined,
    acquiringAuraMotifMetadata: undefined,
    ghostRegionMapMetadata: undefined,
    acquiringCrownMetadata: undefined,
    competitionResultMetadata: undefined,
    timeAttackResultMetadata: undefined,
    levelUpMetadata: undefined,
  };
}

export const SaveScreenshotRequest = {
  encode(
    message: SaveScreenshotRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.carId !== 0) {
      writer.uint32(8).uint32(message.carId);
    }
    if (message.timestamp !== 0) {
      writer.uint32(16).uint32(message.timestamp);
    }
    if (message.playedAt !== 0) {
      writer.uint32(72).uint32(message.playedAt);
    }
    if (message.transparent === true) {
      writer.uint32(64).bool(message.transparent);
    }
    if (message.imageType !== 1) {
      writer.uint32(24).int32(message.imageType);
    }
    if (message.image.length !== 0) {
      writer.uint32(34).bytes(message.image);
    }
    if (message.ghostMetadata !== undefined) {
      SaveScreenshotRequest_GhostBattleMetadata.encode(
        message.ghostMetadata,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.versusMetadata !== undefined) {
      SaveScreenshotRequest_VersusBattleMetadata.encode(
        message.versusMetadata,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.terminalMetadata !== undefined) {
      SaveScreenshotRequest_TerminalMetadata.encode(
        message.terminalMetadata,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.acquiringVsStarMetadata !== undefined) {
      SaveScreenshotRequest_AcquiringVersusStarMetadata.encode(
        message.acquiringVsStarMetadata,
        writer.uint32(82).fork()
      ).ldelim();
    }
    if (message.acquiringAuraMotifMetadata !== undefined) {
      SaveScreenshotRequest_AcquiringAuraMotifMetadata.encode(
        message.acquiringAuraMotifMetadata,
        writer.uint32(90).fork()
      ).ldelim();
    }
    if (message.ghostRegionMapMetadata !== undefined) {
      SaveScreenshotRequest_GhostRegionMapMetadata.encode(
        message.ghostRegionMapMetadata,
        writer.uint32(98).fork()
      ).ldelim();
    }
    if (message.acquiringCrownMetadata !== undefined) {
      SaveScreenshotRequest_AcquiringCrownMetadata.encode(
        message.acquiringCrownMetadata,
        writer.uint32(106).fork()
      ).ldelim();
    }
    if (message.competitionResultMetadata !== undefined) {
      SaveScreenshotRequest_GhostCompetitionResultMetadata.encode(
        message.competitionResultMetadata,
        writer.uint32(114).fork()
      ).ldelim();
    }
    if (message.timeAttackResultMetadata !== undefined) {
      SaveScreenshotRequest_TimeAttackResultMetadata.encode(
        message.timeAttackResultMetadata,
        writer.uint32(122).fork()
      ).ldelim();
    }
    if (message.levelUpMetadata !== undefined) {
      SaveScreenshotRequest_LevelUpMetadata.encode(
        message.levelUpMetadata,
        writer.uint32(130).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SaveScreenshotRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSaveScreenshotRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.carId = reader.uint32();
          break;
        case 2:
          message.timestamp = reader.uint32();
          break;
        case 9:
          message.playedAt = reader.uint32();
          break;
        case 8:
          message.transparent = reader.bool();
          break;
        case 3:
          message.imageType = reader.int32() as any;
          break;
        case 4:
          message.image = reader.bytes() as Buffer;
          break;
        case 5:
          message.ghostMetadata =
            SaveScreenshotRequest_GhostBattleMetadata.decode(
              reader,
              reader.uint32()
            );
          break;
        case 6:
          message.versusMetadata =
            SaveScreenshotRequest_VersusBattleMetadata.decode(
              reader,
              reader.uint32()
            );
          break;
        case 7:
          message.terminalMetadata =
            SaveScreenshotRequest_TerminalMetadata.decode(
              reader,
              reader.uint32()
            );
          break;
        case 10:
          message.acquiringVsStarMetadata =
            SaveScreenshotRequest_AcquiringVersusStarMetadata.decode(
              reader,
              reader.uint32()
            );
          break;
        case 11:
          message.acquiringAuraMotifMetadata =
            SaveScreenshotRequest_AcquiringAuraMotifMetadata.decode(
              reader,
              reader.uint32()
            );
          break;
        case 12:
          message.ghostRegionMapMetadata =
            SaveScreenshotRequest_GhostRegionMapMetadata.decode(
              reader,
              reader.uint32()
            );
          break;
        case 13:
          message.acquiringCrownMetadata =
            SaveScreenshotRequest_AcquiringCrownMetadata.decode(
              reader,
              reader.uint32()
            );
          break;
        case 14:
          message.competitionResultMetadata =
            SaveScreenshotRequest_GhostCompetitionResultMetadata.decode(
              reader,
              reader.uint32()
            );
          break;
        case 15:
          message.timeAttackResultMetadata =
            SaveScreenshotRequest_TimeAttackResultMetadata.decode(
              reader,
              reader.uint32()
            );
          break;
        case 16:
          message.levelUpMetadata =
            SaveScreenshotRequest_LevelUpMetadata.decode(
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

  fromJSON(object: any): SaveScreenshotRequest {
    return {
      carId: isSet(object.carId) ? Number(object.carId) : 0,
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
      playedAt: isSet(object.playedAt) ? Number(object.playedAt) : 0,
      transparent: isSet(object.transparent)
        ? Boolean(object.transparent)
        : false,
      imageType: isSet(object.imageType)
        ? screenshotTypeFromJSON(object.imageType)
        : 1,
      image: isSet(object.image)
        ? Buffer.from(bytesFromBase64(object.image))
        : Buffer.alloc(0),
      ghostMetadata: isSet(object.ghostMetadata)
        ? SaveScreenshotRequest_GhostBattleMetadata.fromJSON(
            object.ghostMetadata
          )
        : undefined,
      versusMetadata: isSet(object.versusMetadata)
        ? SaveScreenshotRequest_VersusBattleMetadata.fromJSON(
            object.versusMetadata
          )
        : undefined,
      terminalMetadata: isSet(object.terminalMetadata)
        ? SaveScreenshotRequest_TerminalMetadata.fromJSON(
            object.terminalMetadata
          )
        : undefined,
      acquiringVsStarMetadata: isSet(object.acquiringVsStarMetadata)
        ? SaveScreenshotRequest_AcquiringVersusStarMetadata.fromJSON(
            object.acquiringVsStarMetadata
          )
        : undefined,
      acquiringAuraMotifMetadata: isSet(object.acquiringAuraMotifMetadata)
        ? SaveScreenshotRequest_AcquiringAuraMotifMetadata.fromJSON(
            object.acquiringAuraMotifMetadata
          )
        : undefined,
      ghostRegionMapMetadata: isSet(object.ghostRegionMapMetadata)
        ? SaveScreenshotRequest_GhostRegionMapMetadata.fromJSON(
            object.ghostRegionMapMetadata
          )
        : undefined,
      acquiringCrownMetadata: isSet(object.acquiringCrownMetadata)
        ? SaveScreenshotRequest_AcquiringCrownMetadata.fromJSON(
            object.acquiringCrownMetadata
          )
        : undefined,
      competitionResultMetadata: isSet(object.competitionResultMetadata)
        ? SaveScreenshotRequest_GhostCompetitionResultMetadata.fromJSON(
            object.competitionResultMetadata
          )
        : undefined,
      timeAttackResultMetadata: isSet(object.timeAttackResultMetadata)
        ? SaveScreenshotRequest_TimeAttackResultMetadata.fromJSON(
            object.timeAttackResultMetadata
          )
        : undefined,
      levelUpMetadata: isSet(object.levelUpMetadata)
        ? SaveScreenshotRequest_LevelUpMetadata.fromJSON(object.levelUpMetadata)
        : undefined,
    };
  },

  toJSON(message: SaveScreenshotRequest): unknown {
    const obj: any = {};
    message.carId !== undefined && (obj.carId = Math.round(message.carId));
    message.timestamp !== undefined &&
      (obj.timestamp = Math.round(message.timestamp));
    message.playedAt !== undefined &&
      (obj.playedAt = Math.round(message.playedAt));
    message.transparent !== undefined &&
      (obj.transparent = message.transparent);
    message.imageType !== undefined &&
      (obj.imageType = screenshotTypeToJSON(message.imageType));
    message.image !== undefined &&
      (obj.image = base64FromBytes(
        message.image !== undefined ? message.image : Buffer.alloc(0)
      ));
    message.ghostMetadata !== undefined &&
      (obj.ghostMetadata = message.ghostMetadata
        ? SaveScreenshotRequest_GhostBattleMetadata.toJSON(
            message.ghostMetadata
          )
        : undefined);
    message.versusMetadata !== undefined &&
      (obj.versusMetadata = message.versusMetadata
        ? SaveScreenshotRequest_VersusBattleMetadata.toJSON(
            message.versusMetadata
          )
        : undefined);
    message.terminalMetadata !== undefined &&
      (obj.terminalMetadata = message.terminalMetadata
        ? SaveScreenshotRequest_TerminalMetadata.toJSON(
            message.terminalMetadata
          )
        : undefined);
    message.acquiringVsStarMetadata !== undefined &&
      (obj.acquiringVsStarMetadata = message.acquiringVsStarMetadata
        ? SaveScreenshotRequest_AcquiringVersusStarMetadata.toJSON(
            message.acquiringVsStarMetadata
          )
        : undefined);
    message.acquiringAuraMotifMetadata !== undefined &&
      (obj.acquiringAuraMotifMetadata = message.acquiringAuraMotifMetadata
        ? SaveScreenshotRequest_AcquiringAuraMotifMetadata.toJSON(
            message.acquiringAuraMotifMetadata
          )
        : undefined);
    message.ghostRegionMapMetadata !== undefined &&
      (obj.ghostRegionMapMetadata = message.ghostRegionMapMetadata
        ? SaveScreenshotRequest_GhostRegionMapMetadata.toJSON(
            message.ghostRegionMapMetadata
          )
        : undefined);
    message.acquiringCrownMetadata !== undefined &&
      (obj.acquiringCrownMetadata = message.acquiringCrownMetadata
        ? SaveScreenshotRequest_AcquiringCrownMetadata.toJSON(
            message.acquiringCrownMetadata
          )
        : undefined);
    message.competitionResultMetadata !== undefined &&
      (obj.competitionResultMetadata = message.competitionResultMetadata
        ? SaveScreenshotRequest_GhostCompetitionResultMetadata.toJSON(
            message.competitionResultMetadata
          )
        : undefined);
    message.timeAttackResultMetadata !== undefined &&
      (obj.timeAttackResultMetadata = message.timeAttackResultMetadata
        ? SaveScreenshotRequest_TimeAttackResultMetadata.toJSON(
            message.timeAttackResultMetadata
          )
        : undefined);
    message.levelUpMetadata !== undefined &&
      (obj.levelUpMetadata = message.levelUpMetadata
        ? SaveScreenshotRequest_LevelUpMetadata.toJSON(message.levelUpMetadata)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SaveScreenshotRequest>, I>>(
    object: I
  ): SaveScreenshotRequest {
    const message = createBaseSaveScreenshotRequest();
    message.carId = object.carId ?? 0;
    message.timestamp = object.timestamp ?? 0;
    message.playedAt = object.playedAt ?? 0;
    message.transparent = object.transparent ?? false;
    message.imageType = object.imageType ?? 1;
    message.image = object.image ?? Buffer.alloc(0);
    message.ghostMetadata =
      object.ghostMetadata !== undefined && object.ghostMetadata !== null
        ? SaveScreenshotRequest_GhostBattleMetadata.fromPartial(
            object.ghostMetadata
          )
        : undefined;
    message.versusMetadata =
      object.versusMetadata !== undefined && object.versusMetadata !== null
        ? SaveScreenshotRequest_VersusBattleMetadata.fromPartial(
            object.versusMetadata
          )
        : undefined;
    message.terminalMetadata =
      object.terminalMetadata !== undefined && object.terminalMetadata !== null
        ? SaveScreenshotRequest_TerminalMetadata.fromPartial(
            object.terminalMetadata
          )
        : undefined;
    message.acquiringVsStarMetadata =
      object.acquiringVsStarMetadata !== undefined &&
      object.acquiringVsStarMetadata !== null
        ? SaveScreenshotRequest_AcquiringVersusStarMetadata.fromPartial(
            object.acquiringVsStarMetadata
          )
        : undefined;
    message.acquiringAuraMotifMetadata =
      object.acquiringAuraMotifMetadata !== undefined &&
      object.acquiringAuraMotifMetadata !== null
        ? SaveScreenshotRequest_AcquiringAuraMotifMetadata.fromPartial(
            object.acquiringAuraMotifMetadata
          )
        : undefined;
    message.ghostRegionMapMetadata =
      object.ghostRegionMapMetadata !== undefined &&
      object.ghostRegionMapMetadata !== null
        ? SaveScreenshotRequest_GhostRegionMapMetadata.fromPartial(
            object.ghostRegionMapMetadata
          )
        : undefined;
    message.acquiringCrownMetadata =
      object.acquiringCrownMetadata !== undefined &&
      object.acquiringCrownMetadata !== null
        ? SaveScreenshotRequest_AcquiringCrownMetadata.fromPartial(
            object.acquiringCrownMetadata
          )
        : undefined;
    message.competitionResultMetadata =
      object.competitionResultMetadata !== undefined &&
      object.competitionResultMetadata !== null
        ? SaveScreenshotRequest_GhostCompetitionResultMetadata.fromPartial(
            object.competitionResultMetadata
          )
        : undefined;
    message.timeAttackResultMetadata =
      object.timeAttackResultMetadata !== undefined &&
      object.timeAttackResultMetadata !== null
        ? SaveScreenshotRequest_TimeAttackResultMetadata.fromPartial(
            object.timeAttackResultMetadata
          )
        : undefined;
    message.levelUpMetadata =
      object.levelUpMetadata !== undefined && object.levelUpMetadata !== null
        ? SaveScreenshotRequest_LevelUpMetadata.fromPartial(
            object.levelUpMetadata
          )
        : undefined;
    return message;
  },
};

function createBaseSaveScreenshotRequest_GhostBattleMetadata(): SaveScreenshotRequest_GhostBattleMetadata {
  return {
    tunePower: 0,
    tuneHandling: 0,
    area: 0,
    stampReturnCount: 0,
    opponents: [],
  };
}

export const SaveScreenshotRequest_GhostBattleMetadata = {
  encode(
    message: SaveScreenshotRequest_GhostBattleMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.tunePower !== 0) {
      writer.uint32(8).uint32(message.tunePower);
    }
    if (message.tuneHandling !== 0) {
      writer.uint32(16).uint32(message.tuneHandling);
    }
    if (message.area !== 0) {
      writer.uint32(24).uint32(message.area);
    }
    if (message.stampReturnCount !== 0) {
      writer.uint32(32).uint32(message.stampReturnCount);
    }
    for (const v of message.opponents) {
      SaveScreenshotRequest_OpponentCar.encode(
        v!,
        writer.uint32(50).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SaveScreenshotRequest_GhostBattleMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSaveScreenshotRequest_GhostBattleMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tunePower = reader.uint32();
          break;
        case 2:
          message.tuneHandling = reader.uint32();
          break;
        case 3:
          message.area = reader.uint32();
          break;
        case 4:
          message.stampReturnCount = reader.uint32();
          break;
        case 6:
          message.opponents.push(
            SaveScreenshotRequest_OpponentCar.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SaveScreenshotRequest_GhostBattleMetadata {
    return {
      tunePower: isSet(object.tunePower) ? Number(object.tunePower) : 0,
      tuneHandling: isSet(object.tuneHandling)
        ? Number(object.tuneHandling)
        : 0,
      area: isSet(object.area) ? Number(object.area) : 0,
      stampReturnCount: isSet(object.stampReturnCount)
        ? Number(object.stampReturnCount)
        : 0,
      opponents: Array.isArray(object?.opponents)
        ? object.opponents.map((e: any) =>
            SaveScreenshotRequest_OpponentCar.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: SaveScreenshotRequest_GhostBattleMetadata): unknown {
    const obj: any = {};
    message.tunePower !== undefined &&
      (obj.tunePower = Math.round(message.tunePower));
    message.tuneHandling !== undefined &&
      (obj.tuneHandling = Math.round(message.tuneHandling));
    message.area !== undefined && (obj.area = Math.round(message.area));
    message.stampReturnCount !== undefined &&
      (obj.stampReturnCount = Math.round(message.stampReturnCount));
    if (message.opponents) {
      obj.opponents = message.opponents.map((e) =>
        e ? SaveScreenshotRequest_OpponentCar.toJSON(e) : undefined
      );
    } else {
      obj.opponents = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<SaveScreenshotRequest_GhostBattleMetadata>, I>
  >(object: I): SaveScreenshotRequest_GhostBattleMetadata {
    const message = createBaseSaveScreenshotRequest_GhostBattleMetadata();
    message.tunePower = object.tunePower ?? 0;
    message.tuneHandling = object.tuneHandling ?? 0;
    message.area = object.area ?? 0;
    message.stampReturnCount = object.stampReturnCount ?? 0;
    message.opponents =
      object.opponents?.map((e) =>
        SaveScreenshotRequest_OpponentCar.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseSaveScreenshotRequest_VersusBattleMetadata(): SaveScreenshotRequest_VersusBattleMetadata {
  return { tunePower: 0, tuneHandling: 0, area: 0, opponents: [] };
}

export const SaveScreenshotRequest_VersusBattleMetadata = {
  encode(
    message: SaveScreenshotRequest_VersusBattleMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.tunePower !== 0) {
      writer.uint32(8).uint32(message.tunePower);
    }
    if (message.tuneHandling !== 0) {
      writer.uint32(16).uint32(message.tuneHandling);
    }
    if (message.area !== 0) {
      writer.uint32(24).uint32(message.area);
    }
    for (const v of message.opponents) {
      SaveScreenshotRequest_OpponentCar.encode(
        v!,
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SaveScreenshotRequest_VersusBattleMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSaveScreenshotRequest_VersusBattleMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tunePower = reader.uint32();
          break;
        case 2:
          message.tuneHandling = reader.uint32();
          break;
        case 3:
          message.area = reader.uint32();
          break;
        case 4:
          message.opponents.push(
            SaveScreenshotRequest_OpponentCar.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SaveScreenshotRequest_VersusBattleMetadata {
    return {
      tunePower: isSet(object.tunePower) ? Number(object.tunePower) : 0,
      tuneHandling: isSet(object.tuneHandling)
        ? Number(object.tuneHandling)
        : 0,
      area: isSet(object.area) ? Number(object.area) : 0,
      opponents: Array.isArray(object?.opponents)
        ? object.opponents.map((e: any) =>
            SaveScreenshotRequest_OpponentCar.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: SaveScreenshotRequest_VersusBattleMetadata): unknown {
    const obj: any = {};
    message.tunePower !== undefined &&
      (obj.tunePower = Math.round(message.tunePower));
    message.tuneHandling !== undefined &&
      (obj.tuneHandling = Math.round(message.tuneHandling));
    message.area !== undefined && (obj.area = Math.round(message.area));
    if (message.opponents) {
      obj.opponents = message.opponents.map((e) =>
        e ? SaveScreenshotRequest_OpponentCar.toJSON(e) : undefined
      );
    } else {
      obj.opponents = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<SaveScreenshotRequest_VersusBattleMetadata>, I>
  >(object: I): SaveScreenshotRequest_VersusBattleMetadata {
    const message = createBaseSaveScreenshotRequest_VersusBattleMetadata();
    message.tunePower = object.tunePower ?? 0;
    message.tuneHandling = object.tuneHandling ?? 0;
    message.area = object.area ?? 0;
    message.opponents =
      object.opponents?.map((e) =>
        SaveScreenshotRequest_OpponentCar.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseSaveScreenshotRequest_TerminalMetadata(): SaveScreenshotRequest_TerminalMetadata {
  return { tunePower: 0, tuneHandling: 0, name: "", title: "", level: 0 };
}

export const SaveScreenshotRequest_TerminalMetadata = {
  encode(
    message: SaveScreenshotRequest_TerminalMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.tunePower !== 0) {
      writer.uint32(8).uint32(message.tunePower);
    }
    if (message.tuneHandling !== 0) {
      writer.uint32(16).uint32(message.tuneHandling);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.title !== "") {
      writer.uint32(34).string(message.title);
    }
    if (message.level !== 0) {
      writer.uint32(40).uint32(message.level);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SaveScreenshotRequest_TerminalMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSaveScreenshotRequest_TerminalMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tunePower = reader.uint32();
          break;
        case 2:
          message.tuneHandling = reader.uint32();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.title = reader.string();
          break;
        case 5:
          message.level = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SaveScreenshotRequest_TerminalMetadata {
    return {
      tunePower: isSet(object.tunePower) ? Number(object.tunePower) : 0,
      tuneHandling: isSet(object.tuneHandling)
        ? Number(object.tuneHandling)
        : 0,
      name: isSet(object.name) ? String(object.name) : "",
      title: isSet(object.title) ? String(object.title) : "",
      level: isSet(object.level) ? Number(object.level) : 0,
    };
  },

  toJSON(message: SaveScreenshotRequest_TerminalMetadata): unknown {
    const obj: any = {};
    message.tunePower !== undefined &&
      (obj.tunePower = Math.round(message.tunePower));
    message.tuneHandling !== undefined &&
      (obj.tuneHandling = Math.round(message.tuneHandling));
    message.name !== undefined && (obj.name = message.name);
    message.title !== undefined && (obj.title = message.title);
    message.level !== undefined && (obj.level = Math.round(message.level));
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<SaveScreenshotRequest_TerminalMetadata>, I>
  >(object: I): SaveScreenshotRequest_TerminalMetadata {
    const message = createBaseSaveScreenshotRequest_TerminalMetadata();
    message.tunePower = object.tunePower ?? 0;
    message.tuneHandling = object.tuneHandling ?? 0;
    message.name = object.name ?? "";
    message.title = object.title ?? "";
    message.level = object.level ?? 0;
    return message;
  },
};

function createBaseSaveScreenshotRequest_AcquiringVersusStarMetadata(): SaveScreenshotRequest_AcquiringVersusStarMetadata {
  return { tunePower: 0, tuneHandling: 0, vsStarCount: 0 };
}

export const SaveScreenshotRequest_AcquiringVersusStarMetadata = {
  encode(
    message: SaveScreenshotRequest_AcquiringVersusStarMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.tunePower !== 0) {
      writer.uint32(8).uint32(message.tunePower);
    }
    if (message.tuneHandling !== 0) {
      writer.uint32(16).uint32(message.tuneHandling);
    }
    if (message.vsStarCount !== 0) {
      writer.uint32(24).uint32(message.vsStarCount);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SaveScreenshotRequest_AcquiringVersusStarMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseSaveScreenshotRequest_AcquiringVersusStarMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tunePower = reader.uint32();
          break;
        case 2:
          message.tuneHandling = reader.uint32();
          break;
        case 3:
          message.vsStarCount = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SaveScreenshotRequest_AcquiringVersusStarMetadata {
    return {
      tunePower: isSet(object.tunePower) ? Number(object.tunePower) : 0,
      tuneHandling: isSet(object.tuneHandling)
        ? Number(object.tuneHandling)
        : 0,
      vsStarCount: isSet(object.vsStarCount) ? Number(object.vsStarCount) : 0,
    };
  },

  toJSON(message: SaveScreenshotRequest_AcquiringVersusStarMetadata): unknown {
    const obj: any = {};
    message.tunePower !== undefined &&
      (obj.tunePower = Math.round(message.tunePower));
    message.tuneHandling !== undefined &&
      (obj.tuneHandling = Math.round(message.tuneHandling));
    message.vsStarCount !== undefined &&
      (obj.vsStarCount = Math.round(message.vsStarCount));
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<SaveScreenshotRequest_AcquiringVersusStarMetadata>,
      I
    >
  >(object: I): SaveScreenshotRequest_AcquiringVersusStarMetadata {
    const message =
      createBaseSaveScreenshotRequest_AcquiringVersusStarMetadata();
    message.tunePower = object.tunePower ?? 0;
    message.tuneHandling = object.tuneHandling ?? 0;
    message.vsStarCount = object.vsStarCount ?? 0;
    return message;
  },
};

function createBaseSaveScreenshotRequest_AcquiringAuraMotifMetadata(): SaveScreenshotRequest_AcquiringAuraMotifMetadata {
  return { tunePower: 0, tuneHandling: 0, auraMotif: 0 };
}

export const SaveScreenshotRequest_AcquiringAuraMotifMetadata = {
  encode(
    message: SaveScreenshotRequest_AcquiringAuraMotifMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.tunePower !== 0) {
      writer.uint32(8).uint32(message.tunePower);
    }
    if (message.tuneHandling !== 0) {
      writer.uint32(16).uint32(message.tuneHandling);
    }
    if (message.auraMotif !== 0) {
      writer.uint32(24).uint32(message.auraMotif);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SaveScreenshotRequest_AcquiringAuraMotifMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseSaveScreenshotRequest_AcquiringAuraMotifMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tunePower = reader.uint32();
          break;
        case 2:
          message.tuneHandling = reader.uint32();
          break;
        case 3:
          message.auraMotif = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SaveScreenshotRequest_AcquiringAuraMotifMetadata {
    return {
      tunePower: isSet(object.tunePower) ? Number(object.tunePower) : 0,
      tuneHandling: isSet(object.tuneHandling)
        ? Number(object.tuneHandling)
        : 0,
      auraMotif: isSet(object.auraMotif) ? Number(object.auraMotif) : 0,
    };
  },

  toJSON(message: SaveScreenshotRequest_AcquiringAuraMotifMetadata): unknown {
    const obj: any = {};
    message.tunePower !== undefined &&
      (obj.tunePower = Math.round(message.tunePower));
    message.tuneHandling !== undefined &&
      (obj.tuneHandling = Math.round(message.tuneHandling));
    message.auraMotif !== undefined &&
      (obj.auraMotif = Math.round(message.auraMotif));
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<SaveScreenshotRequest_AcquiringAuraMotifMetadata>,
      I
    >
  >(object: I): SaveScreenshotRequest_AcquiringAuraMotifMetadata {
    const message =
      createBaseSaveScreenshotRequest_AcquiringAuraMotifMetadata();
    message.tunePower = object.tunePower ?? 0;
    message.tuneHandling = object.tuneHandling ?? 0;
    message.auraMotif = object.auraMotif ?? 0;
    return message;
  },
};

function createBaseSaveScreenshotRequest_GhostRegionMapMetadata(): SaveScreenshotRequest_GhostRegionMapMetadata {
  return { tunePower: 0, tuneHandling: 0, rgScore: 0, rgRegionMapScore: [] };
}

export const SaveScreenshotRequest_GhostRegionMapMetadata = {
  encode(
    message: SaveScreenshotRequest_GhostRegionMapMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.tunePower !== 0) {
      writer.uint32(8).uint32(message.tunePower);
    }
    if (message.tuneHandling !== 0) {
      writer.uint32(16).uint32(message.tuneHandling);
    }
    if (message.rgScore !== 0) {
      writer.uint32(24).uint32(message.rgScore);
    }
    writer.uint32(34).fork();
    for (const v of message.rgRegionMapScore) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SaveScreenshotRequest_GhostRegionMapMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSaveScreenshotRequest_GhostRegionMapMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tunePower = reader.uint32();
          break;
        case 2:
          message.tuneHandling = reader.uint32();
          break;
        case 3:
          message.rgScore = reader.uint32();
          break;
        case 4:
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

  fromJSON(object: any): SaveScreenshotRequest_GhostRegionMapMetadata {
    return {
      tunePower: isSet(object.tunePower) ? Number(object.tunePower) : 0,
      tuneHandling: isSet(object.tuneHandling)
        ? Number(object.tuneHandling)
        : 0,
      rgScore: isSet(object.rgScore) ? Number(object.rgScore) : 0,
      rgRegionMapScore: Array.isArray(object?.rgRegionMapScore)
        ? object.rgRegionMapScore.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: SaveScreenshotRequest_GhostRegionMapMetadata): unknown {
    const obj: any = {};
    message.tunePower !== undefined &&
      (obj.tunePower = Math.round(message.tunePower));
    message.tuneHandling !== undefined &&
      (obj.tuneHandling = Math.round(message.tuneHandling));
    message.rgScore !== undefined &&
      (obj.rgScore = Math.round(message.rgScore));
    if (message.rgRegionMapScore) {
      obj.rgRegionMapScore = message.rgRegionMapScore.map((e) => Math.round(e));
    } else {
      obj.rgRegionMapScore = [];
    }
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<SaveScreenshotRequest_GhostRegionMapMetadata>,
      I
    >
  >(object: I): SaveScreenshotRequest_GhostRegionMapMetadata {
    const message = createBaseSaveScreenshotRequest_GhostRegionMapMetadata();
    message.tunePower = object.tunePower ?? 0;
    message.tuneHandling = object.tuneHandling ?? 0;
    message.rgScore = object.rgScore ?? 0;
    message.rgRegionMapScore = object.rgRegionMapScore?.map((e) => e) || [];
    return message;
  },
};

function createBaseSaveScreenshotRequest_AcquiringCrownMetadata(): SaveScreenshotRequest_AcquiringCrownMetadata {
  return { tunePower: 0, tuneHandling: 0, area: 0 };
}

export const SaveScreenshotRequest_AcquiringCrownMetadata = {
  encode(
    message: SaveScreenshotRequest_AcquiringCrownMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.tunePower !== 0) {
      writer.uint32(8).uint32(message.tunePower);
    }
    if (message.tuneHandling !== 0) {
      writer.uint32(16).uint32(message.tuneHandling);
    }
    if (message.area !== 0) {
      writer.uint32(24).uint32(message.area);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SaveScreenshotRequest_AcquiringCrownMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSaveScreenshotRequest_AcquiringCrownMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tunePower = reader.uint32();
          break;
        case 2:
          message.tuneHandling = reader.uint32();
          break;
        case 3:
          message.area = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SaveScreenshotRequest_AcquiringCrownMetadata {
    return {
      tunePower: isSet(object.tunePower) ? Number(object.tunePower) : 0,
      tuneHandling: isSet(object.tuneHandling)
        ? Number(object.tuneHandling)
        : 0,
      area: isSet(object.area) ? Number(object.area) : 0,
    };
  },

  toJSON(message: SaveScreenshotRequest_AcquiringCrownMetadata): unknown {
    const obj: any = {};
    message.tunePower !== undefined &&
      (obj.tunePower = Math.round(message.tunePower));
    message.tuneHandling !== undefined &&
      (obj.tuneHandling = Math.round(message.tuneHandling));
    message.area !== undefined && (obj.area = Math.round(message.area));
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<SaveScreenshotRequest_AcquiringCrownMetadata>,
      I
    >
  >(object: I): SaveScreenshotRequest_AcquiringCrownMetadata {
    const message = createBaseSaveScreenshotRequest_AcquiringCrownMetadata();
    message.tunePower = object.tunePower ?? 0;
    message.tuneHandling = object.tuneHandling ?? 0;
    message.area = object.area ?? 0;
    return message;
  },
};

function createBaseSaveScreenshotRequest_GhostCompetitionResultMetadata(): SaveScreenshotRequest_GhostCompetitionResultMetadata {
  return { tunePower: 0, tuneHandling: 0, rank: 0, result: 0 };
}

export const SaveScreenshotRequest_GhostCompetitionResultMetadata = {
  encode(
    message: SaveScreenshotRequest_GhostCompetitionResultMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.tunePower !== 0) {
      writer.uint32(8).uint32(message.tunePower);
    }
    if (message.tuneHandling !== 0) {
      writer.uint32(16).uint32(message.tuneHandling);
    }
    if (message.rank !== 0) {
      writer.uint32(24).uint32(message.rank);
    }
    if (message.result !== 0) {
      writer.uint32(32).sint32(message.result);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SaveScreenshotRequest_GhostCompetitionResultMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message =
      createBaseSaveScreenshotRequest_GhostCompetitionResultMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tunePower = reader.uint32();
          break;
        case 2:
          message.tuneHandling = reader.uint32();
          break;
        case 3:
          message.rank = reader.uint32();
          break;
        case 4:
          message.result = reader.sint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SaveScreenshotRequest_GhostCompetitionResultMetadata {
    return {
      tunePower: isSet(object.tunePower) ? Number(object.tunePower) : 0,
      tuneHandling: isSet(object.tuneHandling)
        ? Number(object.tuneHandling)
        : 0,
      rank: isSet(object.rank) ? Number(object.rank) : 0,
      result: isSet(object.result) ? Number(object.result) : 0,
    };
  },

  toJSON(
    message: SaveScreenshotRequest_GhostCompetitionResultMetadata
  ): unknown {
    const obj: any = {};
    message.tunePower !== undefined &&
      (obj.tunePower = Math.round(message.tunePower));
    message.tuneHandling !== undefined &&
      (obj.tuneHandling = Math.round(message.tuneHandling));
    message.rank !== undefined && (obj.rank = Math.round(message.rank));
    message.result !== undefined && (obj.result = Math.round(message.result));
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<SaveScreenshotRequest_GhostCompetitionResultMetadata>,
      I
    >
  >(object: I): SaveScreenshotRequest_GhostCompetitionResultMetadata {
    const message =
      createBaseSaveScreenshotRequest_GhostCompetitionResultMetadata();
    message.tunePower = object.tunePower ?? 0;
    message.tuneHandling = object.tuneHandling ?? 0;
    message.rank = object.rank ?? 0;
    message.result = object.result ?? 0;
    return message;
  },
};

function createBaseSaveScreenshotRequest_TimeAttackResultMetadata(): SaveScreenshotRequest_TimeAttackResultMetadata {
  return {
    tunePower: 0,
    tuneHandling: 0,
    course: 0,
    wholeRank: 0,
    modelRank: 0,
  };
}

export const SaveScreenshotRequest_TimeAttackResultMetadata = {
  encode(
    message: SaveScreenshotRequest_TimeAttackResultMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.tunePower !== 0) {
      writer.uint32(8).uint32(message.tunePower);
    }
    if (message.tuneHandling !== 0) {
      writer.uint32(16).uint32(message.tuneHandling);
    }
    if (message.course !== 0) {
      writer.uint32(24).uint32(message.course);
    }
    if (message.wholeRank !== 0) {
      writer.uint32(32).uint32(message.wholeRank);
    }
    if (message.modelRank !== 0) {
      writer.uint32(40).uint32(message.modelRank);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SaveScreenshotRequest_TimeAttackResultMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSaveScreenshotRequest_TimeAttackResultMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tunePower = reader.uint32();
          break;
        case 2:
          message.tuneHandling = reader.uint32();
          break;
        case 3:
          message.course = reader.uint32();
          break;
        case 4:
          message.wholeRank = reader.uint32();
          break;
        case 5:
          message.modelRank = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SaveScreenshotRequest_TimeAttackResultMetadata {
    return {
      tunePower: isSet(object.tunePower) ? Number(object.tunePower) : 0,
      tuneHandling: isSet(object.tuneHandling)
        ? Number(object.tuneHandling)
        : 0,
      course: isSet(object.course) ? Number(object.course) : 0,
      wholeRank: isSet(object.wholeRank) ? Number(object.wholeRank) : 0,
      modelRank: isSet(object.modelRank) ? Number(object.modelRank) : 0,
    };
  },

  toJSON(message: SaveScreenshotRequest_TimeAttackResultMetadata): unknown {
    const obj: any = {};
    message.tunePower !== undefined &&
      (obj.tunePower = Math.round(message.tunePower));
    message.tuneHandling !== undefined &&
      (obj.tuneHandling = Math.round(message.tuneHandling));
    message.course !== undefined && (obj.course = Math.round(message.course));
    message.wholeRank !== undefined &&
      (obj.wholeRank = Math.round(message.wholeRank));
    message.modelRank !== undefined &&
      (obj.modelRank = Math.round(message.modelRank));
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<SaveScreenshotRequest_TimeAttackResultMetadata>,
      I
    >
  >(object: I): SaveScreenshotRequest_TimeAttackResultMetadata {
    const message = createBaseSaveScreenshotRequest_TimeAttackResultMetadata();
    message.tunePower = object.tunePower ?? 0;
    message.tuneHandling = object.tuneHandling ?? 0;
    message.course = object.course ?? 0;
    message.wholeRank = object.wholeRank ?? 0;
    message.modelRank = object.modelRank ?? 0;
    return message;
  },
};

function createBaseSaveScreenshotRequest_LevelUpMetadata(): SaveScreenshotRequest_LevelUpMetadata {
  return { tunePower: 0, tuneHandling: 0, level: 0 };
}

export const SaveScreenshotRequest_LevelUpMetadata = {
  encode(
    message: SaveScreenshotRequest_LevelUpMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.tunePower !== 0) {
      writer.uint32(16).uint32(message.tunePower);
    }
    if (message.tuneHandling !== 0) {
      writer.uint32(24).uint32(message.tuneHandling);
    }
    if (message.level !== 0) {
      writer.uint32(8).uint32(message.level);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SaveScreenshotRequest_LevelUpMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSaveScreenshotRequest_LevelUpMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.tunePower = reader.uint32();
          break;
        case 3:
          message.tuneHandling = reader.uint32();
          break;
        case 1:
          message.level = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SaveScreenshotRequest_LevelUpMetadata {
    return {
      tunePower: isSet(object.tunePower) ? Number(object.tunePower) : 0,
      tuneHandling: isSet(object.tuneHandling)
        ? Number(object.tuneHandling)
        : 0,
      level: isSet(object.level) ? Number(object.level) : 0,
    };
  },

  toJSON(message: SaveScreenshotRequest_LevelUpMetadata): unknown {
    const obj: any = {};
    message.tunePower !== undefined &&
      (obj.tunePower = Math.round(message.tunePower));
    message.tuneHandling !== undefined &&
      (obj.tuneHandling = Math.round(message.tuneHandling));
    message.level !== undefined && (obj.level = Math.round(message.level));
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<SaveScreenshotRequest_LevelUpMetadata>, I>
  >(object: I): SaveScreenshotRequest_LevelUpMetadata {
    const message = createBaseSaveScreenshotRequest_LevelUpMetadata();
    message.tunePower = object.tunePower ?? 0;
    message.tuneHandling = object.tuneHandling ?? 0;
    message.level = object.level ?? 0;
    return message;
  },
};

function createBaseSaveScreenshotRequest_OpponentCar(): SaveScreenshotRequest_OpponentCar {
  return { carId: 0, tunePower: 0, tuneHandling: 0 };
}

export const SaveScreenshotRequest_OpponentCar = {
  encode(
    message: SaveScreenshotRequest_OpponentCar,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.carId !== 0) {
      writer.uint32(8).uint32(message.carId);
    }
    if (message.tunePower !== 0) {
      writer.uint32(16).uint32(message.tunePower);
    }
    if (message.tuneHandling !== 0) {
      writer.uint32(24).uint32(message.tuneHandling);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SaveScreenshotRequest_OpponentCar {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSaveScreenshotRequest_OpponentCar();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.carId = reader.uint32();
          break;
        case 2:
          message.tunePower = reader.uint32();
          break;
        case 3:
          message.tuneHandling = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SaveScreenshotRequest_OpponentCar {
    return {
      carId: isSet(object.carId) ? Number(object.carId) : 0,
      tunePower: isSet(object.tunePower) ? Number(object.tunePower) : 0,
      tuneHandling: isSet(object.tuneHandling)
        ? Number(object.tuneHandling)
        : 0,
    };
  },

  toJSON(message: SaveScreenshotRequest_OpponentCar): unknown {
    const obj: any = {};
    message.carId !== undefined && (obj.carId = Math.round(message.carId));
    message.tunePower !== undefined &&
      (obj.tunePower = Math.round(message.tunePower));
    message.tuneHandling !== undefined &&
      (obj.tuneHandling = Math.round(message.tuneHandling));
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<SaveScreenshotRequest_OpponentCar>, I>
  >(object: I): SaveScreenshotRequest_OpponentCar {
    const message = createBaseSaveScreenshotRequest_OpponentCar();
    message.carId = object.carId ?? 0;
    message.tunePower = object.tunePower ?? 0;
    message.tuneHandling = object.tuneHandling ?? 0;
    return message;
  },
};

function createBaseSaveScreenshotResponse(): SaveScreenshotResponse {
  return { error: 0 };
}

export const SaveScreenshotResponse = {
  encode(
    message: SaveScreenshotResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.error !== 0) {
      writer.uint32(8).int32(message.error);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SaveScreenshotResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSaveScreenshotResponse();
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

  fromJSON(object: any): SaveScreenshotResponse {
    return {
      error: isSet(object.error) ? errorCodeFromJSON(object.error) : 0,
    };
  },

  toJSON(message: SaveScreenshotResponse): unknown {
    const obj: any = {};
    message.error !== undefined && (obj.error = errorCodeToJSON(message.error));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SaveScreenshotResponse>, I>>(
    object: I
  ): SaveScreenshotResponse {
    const message = createBaseSaveScreenshotResponse();
    message.error = object.error ?? 0;
    return message;
  },
};

function createBaseSubmitClientLogRequest(): SubmitClientLogRequest {
  return { data: Buffer.alloc(0), modifiedAt: 0, logType: 0 };
}

export const SubmitClientLogRequest = {
  encode(
    message: SubmitClientLogRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    if (message.modifiedAt !== 0) {
      writer.uint32(16).uint32(message.modifiedAt);
    }
    if (message.logType !== 0) {
      writer.uint32(24).int32(message.logType);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SubmitClientLogRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubmitClientLogRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes() as Buffer;
          break;
        case 2:
          message.modifiedAt = reader.uint32();
          break;
        case 3:
          message.logType = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SubmitClientLogRequest {
    return {
      data: isSet(object.data)
        ? Buffer.from(bytesFromBase64(object.data))
        : Buffer.alloc(0),
      modifiedAt: isSet(object.modifiedAt) ? Number(object.modifiedAt) : 0,
      logType: isSet(object.logType)
        ? clientLogTypeFromJSON(object.logType)
        : 0,
    };
  },

  toJSON(message: SubmitClientLogRequest): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = base64FromBytes(
        message.data !== undefined ? message.data : Buffer.alloc(0)
      ));
    message.modifiedAt !== undefined &&
      (obj.modifiedAt = Math.round(message.modifiedAt));
    message.logType !== undefined &&
      (obj.logType = clientLogTypeToJSON(message.logType));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SubmitClientLogRequest>, I>>(
    object: I
  ): SubmitClientLogRequest {
    const message = createBaseSubmitClientLogRequest();
    message.data = object.data ?? Buffer.alloc(0);
    message.modifiedAt = object.modifiedAt ?? 0;
    message.logType = object.logType ?? 0;
    return message;
  },
};

function createBaseSubmitClientLogResponse(): SubmitClientLogResponse {
  return { error: 0 };
}

export const SubmitClientLogResponse = {
  encode(
    message: SubmitClientLogResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.error !== 0) {
      writer.uint32(8).int32(message.error);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SubmitClientLogResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubmitClientLogResponse();
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

  fromJSON(object: any): SubmitClientLogResponse {
    return {
      error: isSet(object.error) ? errorCodeFromJSON(object.error) : 0,
    };
  },

  toJSON(message: SubmitClientLogResponse): unknown {
    const obj: any = {};
    message.error !== undefined && (obj.error = errorCodeToJSON(message.error));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SubmitClientLogResponse>, I>>(
    object: I
  ): SubmitClientLogResponse {
    const message = createBaseSubmitClientLogResponse();
    message.error = object.error ?? 0;
    return message;
  },
};

function createBaseLoadScratchInformationRequest(): LoadScratchInformationRequest {
  return { userId: 0 };
}

export const LoadScratchInformationRequest = {
  encode(
    message: LoadScratchInformationRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.userId !== 0) {
      writer.uint32(8).uint32(message.userId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LoadScratchInformationRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoadScratchInformationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LoadScratchInformationRequest {
    return {
      userId: isSet(object.userId) ? Number(object.userId) : 0,
    };
  },

  toJSON(message: LoadScratchInformationRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LoadScratchInformationRequest>, I>>(
    object: I
  ): LoadScratchInformationRequest {
    const message = createBaseLoadScratchInformationRequest();
    message.userId = object.userId ?? 0;
    return message;
  },
};

function createBaseLoadScratchInformationResponse(): LoadScratchInformationResponse {
  return {
    error: 0,
    scratchSheets: [],
    currentSheet: 0,
    numOfScratched: 0,
    ownedUserItems: [],
  };
}

export const LoadScratchInformationResponse = {
  encode(
    message: LoadScratchInformationResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.error !== 0) {
      writer.uint32(8).int32(message.error);
    }
    for (const v of message.scratchSheets) {
      ScratchSheet.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.currentSheet !== 0) {
      writer.uint32(24).uint32(message.currentSheet);
    }
    if (message.numOfScratched !== 0) {
      writer.uint32(32).uint32(message.numOfScratched);
    }
    for (const v of message.ownedUserItems) {
      UserItem.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LoadScratchInformationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoadScratchInformationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.error = reader.int32() as any;
          break;
        case 2:
          message.scratchSheets.push(
            ScratchSheet.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.currentSheet = reader.uint32();
          break;
        case 4:
          message.numOfScratched = reader.uint32();
          break;
        case 5:
          message.ownedUserItems.push(UserItem.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LoadScratchInformationResponse {
    return {
      error: isSet(object.error) ? errorCodeFromJSON(object.error) : 0,
      scratchSheets: Array.isArray(object?.scratchSheets)
        ? object.scratchSheets.map((e: any) => ScratchSheet.fromJSON(e))
        : [],
      currentSheet: isSet(object.currentSheet)
        ? Number(object.currentSheet)
        : 0,
      numOfScratched: isSet(object.numOfScratched)
        ? Number(object.numOfScratched)
        : 0,
      ownedUserItems: Array.isArray(object?.ownedUserItems)
        ? object.ownedUserItems.map((e: any) => UserItem.fromJSON(e))
        : [],
    };
  },

  toJSON(message: LoadScratchInformationResponse): unknown {
    const obj: any = {};
    message.error !== undefined && (obj.error = errorCodeToJSON(message.error));
    if (message.scratchSheets) {
      obj.scratchSheets = message.scratchSheets.map((e) =>
        e ? ScratchSheet.toJSON(e) : undefined
      );
    } else {
      obj.scratchSheets = [];
    }
    message.currentSheet !== undefined &&
      (obj.currentSheet = Math.round(message.currentSheet));
    message.numOfScratched !== undefined &&
      (obj.numOfScratched = Math.round(message.numOfScratched));
    if (message.ownedUserItems) {
      obj.ownedUserItems = message.ownedUserItems.map((e) =>
        e ? UserItem.toJSON(e) : undefined
      );
    } else {
      obj.ownedUserItems = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LoadScratchInformationResponse>, I>>(
    object: I
  ): LoadScratchInformationResponse {
    const message = createBaseLoadScratchInformationResponse();
    message.error = object.error ?? 0;
    message.scratchSheets =
      object.scratchSheets?.map((e) => ScratchSheet.fromPartial(e)) || [];
    message.currentSheet = object.currentSheet ?? 0;
    message.numOfScratched = object.numOfScratched ?? 0;
    message.ownedUserItems =
      object.ownedUserItems?.map((e) => UserItem.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSaveScratchSheetRequest(): SaveScratchSheetRequest {
  return { timestamp: 0, targetSheet: 0, targetSquare: 0, userId: 0 };
}

export const SaveScratchSheetRequest = {
  encode(
    message: SaveScratchSheetRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.timestamp !== 0) {
      writer.uint32(56).uint32(message.timestamp);
    }
    if (message.targetSheet !== 0) {
      writer.uint32(8).uint32(message.targetSheet);
    }
    if (message.targetSquare !== 0) {
      writer.uint32(16).uint32(message.targetSquare);
    }
    if (message.userId !== 0) {
      writer.uint32(24).uint32(message.userId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SaveScratchSheetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSaveScratchSheetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 7:
          message.timestamp = reader.uint32();
          break;
        case 1:
          message.targetSheet = reader.uint32();
          break;
        case 2:
          message.targetSquare = reader.uint32();
          break;
        case 3:
          message.userId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SaveScratchSheetRequest {
    return {
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
      targetSheet: isSet(object.targetSheet) ? Number(object.targetSheet) : 0,
      targetSquare: isSet(object.targetSquare)
        ? Number(object.targetSquare)
        : 0,
      userId: isSet(object.userId) ? Number(object.userId) : 0,
    };
  },

  toJSON(message: SaveScratchSheetRequest): unknown {
    const obj: any = {};
    message.timestamp !== undefined &&
      (obj.timestamp = Math.round(message.timestamp));
    message.targetSheet !== undefined &&
      (obj.targetSheet = Math.round(message.targetSheet));
    message.targetSquare !== undefined &&
      (obj.targetSquare = Math.round(message.targetSquare));
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SaveScratchSheetRequest>, I>>(
    object: I
  ): SaveScratchSheetRequest {
    const message = createBaseSaveScratchSheetRequest();
    message.timestamp = object.timestamp ?? 0;
    message.targetSheet = object.targetSheet ?? 0;
    message.targetSquare = object.targetSquare ?? 0;
    message.userId = object.userId ?? 0;
    return message;
  },
};

function createBaseSaveScratchSheetResponse(): SaveScratchSheetResponse {
  return {
    error: 0,
    scratchSheets: [],
    currentSheet: 0,
    numOfScratched: 0,
    earnedItem: undefined,
  };
}

export const SaveScratchSheetResponse = {
  encode(
    message: SaveScratchSheetResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.error !== 0) {
      writer.uint32(8).int32(message.error);
    }
    for (const v of message.scratchSheets) {
      ScratchSheet.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.currentSheet !== 0) {
      writer.uint32(24).uint32(message.currentSheet);
    }
    if (message.numOfScratched !== 0) {
      writer.uint32(32).uint32(message.numOfScratched);
    }
    if (message.earnedItem !== undefined) {
      UserItem.encode(message.earnedItem, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SaveScratchSheetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSaveScratchSheetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.error = reader.int32() as any;
          break;
        case 2:
          message.scratchSheets.push(
            ScratchSheet.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.currentSheet = reader.uint32();
          break;
        case 4:
          message.numOfScratched = reader.uint32();
          break;
        case 5:
          message.earnedItem = UserItem.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SaveScratchSheetResponse {
    return {
      error: isSet(object.error) ? errorCodeFromJSON(object.error) : 0,
      scratchSheets: Array.isArray(object?.scratchSheets)
        ? object.scratchSheets.map((e: any) => ScratchSheet.fromJSON(e))
        : [],
      currentSheet: isSet(object.currentSheet)
        ? Number(object.currentSheet)
        : 0,
      numOfScratched: isSet(object.numOfScratched)
        ? Number(object.numOfScratched)
        : 0,
      earnedItem: isSet(object.earnedItem)
        ? UserItem.fromJSON(object.earnedItem)
        : undefined,
    };
  },

  toJSON(message: SaveScratchSheetResponse): unknown {
    const obj: any = {};
    message.error !== undefined && (obj.error = errorCodeToJSON(message.error));
    if (message.scratchSheets) {
      obj.scratchSheets = message.scratchSheets.map((e) =>
        e ? ScratchSheet.toJSON(e) : undefined
      );
    } else {
      obj.scratchSheets = [];
    }
    message.currentSheet !== undefined &&
      (obj.currentSheet = Math.round(message.currentSheet));
    message.numOfScratched !== undefined &&
      (obj.numOfScratched = Math.round(message.numOfScratched));
    message.earnedItem !== undefined &&
      (obj.earnedItem = message.earnedItem
        ? UserItem.toJSON(message.earnedItem)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SaveScratchSheetResponse>, I>>(
    object: I
  ): SaveScratchSheetResponse {
    const message = createBaseSaveScratchSheetResponse();
    message.error = object.error ?? 0;
    message.scratchSheets =
      object.scratchSheets?.map((e) => ScratchSheet.fromPartial(e)) || [];
    message.currentSheet = object.currentSheet ?? 0;
    message.numOfScratched = object.numOfScratched ?? 0;
    message.earnedItem =
      object.earnedItem !== undefined && object.earnedItem !== null
        ? UserItem.fromPartial(object.earnedItem)
        : undefined;
    return message;
  },
};

function createBaseTurnScratchSheetRequest(): TurnScratchSheetRequest {
  return { userId: 0, targetSheet: 0 };
}

export const TurnScratchSheetRequest = {
  encode(
    message: TurnScratchSheetRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.userId !== 0) {
      writer.uint32(8).uint32(message.userId);
    }
    if (message.targetSheet !== 0) {
      writer.uint32(16).uint32(message.targetSheet);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TurnScratchSheetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTurnScratchSheetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userId = reader.uint32();
          break;
        case 2:
          message.targetSheet = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TurnScratchSheetRequest {
    return {
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      targetSheet: isSet(object.targetSheet) ? Number(object.targetSheet) : 0,
    };
  },

  toJSON(message: TurnScratchSheetRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.targetSheet !== undefined &&
      (obj.targetSheet = Math.round(message.targetSheet));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TurnScratchSheetRequest>, I>>(
    object: I
  ): TurnScratchSheetRequest {
    const message = createBaseTurnScratchSheetRequest();
    message.userId = object.userId ?? 0;
    message.targetSheet = object.targetSheet ?? 0;
    return message;
  },
};

function createBaseTurnScratchSheetResponse(): TurnScratchSheetResponse {
  return { error: 0 };
}

export const TurnScratchSheetResponse = {
  encode(
    message: TurnScratchSheetResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.error !== 0) {
      writer.uint32(8).int32(message.error);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): TurnScratchSheetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTurnScratchSheetResponse();
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

  fromJSON(object: any): TurnScratchSheetResponse {
    return {
      error: isSet(object.error) ? errorCodeFromJSON(object.error) : 0,
    };
  },

  toJSON(message: TurnScratchSheetResponse): unknown {
    const obj: any = {};
    message.error !== undefined && (obj.error = errorCodeToJSON(message.error));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TurnScratchSheetResponse>, I>>(
    object: I
  ): TurnScratchSheetResponse {
    const message = createBaseTurnScratchSheetResponse();
    message.error = object.error ?? 0;
    return message;
  },
};

function createBaseCheckItemReceivableCarsRequest(): CheckItemReceivableCarsRequest {
  return { userId: 0, itemsToBeEarned: [] };
}

export const CheckItemReceivableCarsRequest = {
  encode(
    message: CheckItemReceivableCarsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.userId !== 0) {
      writer.uint32(8).uint32(message.userId);
    }
    for (const v of message.itemsToBeEarned) {
      UserItem.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CheckItemReceivableCarsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckItemReceivableCarsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userId = reader.uint32();
          break;
        case 2:
          message.itemsToBeEarned.push(
            UserItem.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CheckItemReceivableCarsRequest {
    return {
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      itemsToBeEarned: Array.isArray(object?.itemsToBeEarned)
        ? object.itemsToBeEarned.map((e: any) => UserItem.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CheckItemReceivableCarsRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    if (message.itemsToBeEarned) {
      obj.itemsToBeEarned = message.itemsToBeEarned.map((e) =>
        e ? UserItem.toJSON(e) : undefined
      );
    } else {
      obj.itemsToBeEarned = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CheckItemReceivableCarsRequest>, I>>(
    object: I
  ): CheckItemReceivableCarsRequest {
    const message = createBaseCheckItemReceivableCarsRequest();
    message.userId = object.userId ?? 0;
    message.itemsToBeEarned =
      object.itemsToBeEarned?.map((e) => UserItem.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCheckItemReceivableCarsResponse(): CheckItemReceivableCarsResponse {
  return { error: 0, carIds: [] };
}

export const CheckItemReceivableCarsResponse = {
  encode(
    message: CheckItemReceivableCarsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.error !== 0) {
      writer.uint32(8).int32(message.error);
    }
    writer.uint32(18).fork();
    for (const v of message.carIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CheckItemReceivableCarsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheckItemReceivableCarsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.error = reader.int32() as any;
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.carIds.push(reader.uint32());
            }
          } else {
            message.carIds.push(reader.uint32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CheckItemReceivableCarsResponse {
    return {
      error: isSet(object.error) ? errorCodeFromJSON(object.error) : 0,
      carIds: Array.isArray(object?.carIds)
        ? object.carIds.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: CheckItemReceivableCarsResponse): unknown {
    const obj: any = {};
    message.error !== undefined && (obj.error = errorCodeToJSON(message.error));
    if (message.carIds) {
      obj.carIds = message.carIds.map((e) => Math.round(e));
    } else {
      obj.carIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CheckItemReceivableCarsResponse>, I>>(
    object: I
  ): CheckItemReceivableCarsResponse {
    const message = createBaseCheckItemReceivableCarsResponse();
    message.error = object.error ?? 0;
    message.carIds = object.carIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseReceiveUserItemsRequest(): ReceiveUserItemsRequest {
  return { carId: 0, targetItemIds: [] };
}

export const ReceiveUserItemsRequest = {
  encode(
    message: ReceiveUserItemsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.carId !== 0) {
      writer.uint32(8).uint32(message.carId);
    }
    writer.uint32(18).fork();
    for (const v of message.targetItemIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ReceiveUserItemsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReceiveUserItemsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.carId = reader.uint32();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.targetItemIds.push(reader.uint32());
            }
          } else {
            message.targetItemIds.push(reader.uint32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ReceiveUserItemsRequest {
    return {
      carId: isSet(object.carId) ? Number(object.carId) : 0,
      targetItemIds: Array.isArray(object?.targetItemIds)
        ? object.targetItemIds.map((e: any) => Number(e))
        : [],
    };
  },

  toJSON(message: ReceiveUserItemsRequest): unknown {
    const obj: any = {};
    message.carId !== undefined && (obj.carId = Math.round(message.carId));
    if (message.targetItemIds) {
      obj.targetItemIds = message.targetItemIds.map((e) => Math.round(e));
    } else {
      obj.targetItemIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ReceiveUserItemsRequest>, I>>(
    object: I
  ): ReceiveUserItemsRequest {
    const message = createBaseReceiveUserItemsRequest();
    message.carId = object.carId ?? 0;
    message.targetItemIds = object.targetItemIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseReceiveUserItemsResponse(): ReceiveUserItemsResponse {
  return { error: 0 };
}

export const ReceiveUserItemsResponse = {
  encode(
    message: ReceiveUserItemsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.error !== 0) {
      writer.uint32(8).int32(message.error);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ReceiveUserItemsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReceiveUserItemsResponse();
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

  fromJSON(object: any): ReceiveUserItemsResponse {
    return {
      error: isSet(object.error) ? errorCodeFromJSON(object.error) : 0,
    };
  },

  toJSON(message: ReceiveUserItemsResponse): unknown {
    const obj: any = {};
    message.error !== undefined && (obj.error = errorCodeToJSON(message.error));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ReceiveUserItemsResponse>, I>>(
    object: I
  ): ReceiveUserItemsResponse {
    const message = createBaseReceiveUserItemsResponse();
    message.error = object.error ?? 0;
    return message;
  },
};

function createBaseUpdateEventModeSerialRequest(): UpdateEventModeSerialRequest {
  return { eventModeSerial: "" };
}

export const UpdateEventModeSerialRequest = {
  encode(
    message: UpdateEventModeSerialRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.eventModeSerial !== "") {
      writer.uint32(10).string(message.eventModeSerial);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateEventModeSerialRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateEventModeSerialRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eventModeSerial = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateEventModeSerialRequest {
    return {
      eventModeSerial: isSet(object.eventModeSerial)
        ? String(object.eventModeSerial)
        : "",
    };
  },

  toJSON(message: UpdateEventModeSerialRequest): unknown {
    const obj: any = {};
    message.eventModeSerial !== undefined &&
      (obj.eventModeSerial = message.eventModeSerial);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateEventModeSerialRequest>, I>>(
    object: I
  ): UpdateEventModeSerialRequest {
    const message = createBaseUpdateEventModeSerialRequest();
    message.eventModeSerial = object.eventModeSerial ?? "";
    return message;
  },
};

function createBaseUpdateEventModeSerialResponse(): UpdateEventModeSerialResponse {
  return {
    error: 0,
    serialError: 0,
    eventModeSerial: "",
    startAt: 0,
    endAt: 0,
  };
}

export const UpdateEventModeSerialResponse = {
  encode(
    message: UpdateEventModeSerialResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.error !== 0) {
      writer.uint32(8).int32(message.error);
    }
    if (message.serialError !== 0) {
      writer.uint32(32).int32(message.serialError);
    }
    if (message.eventModeSerial !== "") {
      writer.uint32(18).string(message.eventModeSerial);
    }
    if (message.startAt !== 0) {
      writer.uint32(40).uint32(message.startAt);
    }
    if (message.endAt !== 0) {
      writer.uint32(24).uint32(message.endAt);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): UpdateEventModeSerialResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateEventModeSerialResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.error = reader.int32() as any;
          break;
        case 4:
          message.serialError = reader.int32() as any;
          break;
        case 2:
          message.eventModeSerial = reader.string();
          break;
        case 5:
          message.startAt = reader.uint32();
          break;
        case 3:
          message.endAt = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateEventModeSerialResponse {
    return {
      error: isSet(object.error) ? errorCodeFromJSON(object.error) : 0,
      serialError: isSet(object.serialError)
        ? eventModeSerialErrorCodeFromJSON(object.serialError)
        : 0,
      eventModeSerial: isSet(object.eventModeSerial)
        ? String(object.eventModeSerial)
        : "",
      startAt: isSet(object.startAt) ? Number(object.startAt) : 0,
      endAt: isSet(object.endAt) ? Number(object.endAt) : 0,
    };
  },

  toJSON(message: UpdateEventModeSerialResponse): unknown {
    const obj: any = {};
    message.error !== undefined && (obj.error = errorCodeToJSON(message.error));
    message.serialError !== undefined &&
      (obj.serialError = eventModeSerialErrorCodeToJSON(message.serialError));
    message.eventModeSerial !== undefined &&
      (obj.eventModeSerial = message.eventModeSerial);
    message.startAt !== undefined &&
      (obj.startAt = Math.round(message.startAt));
    message.endAt !== undefined && (obj.endAt = Math.round(message.endAt));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateEventModeSerialResponse>, I>>(
    object: I
  ): UpdateEventModeSerialResponse {
    const message = createBaseUpdateEventModeSerialResponse();
    message.error = object.error ?? 0;
    message.serialError = object.serialError ?? 0;
    message.eventModeSerial = object.eventModeSerial ?? "";
    message.startAt = object.startAt ?? 0;
    message.endAt = object.endAt ?? 0;
    return message;
  },
};

function createBaseParticipateInInviteFriendCampaignRequest(): ParticipateInInviteFriendCampaignRequest {
  return {
    invitingUserId: 0,
    invitedUserId: 0,
    sourceCarId: 0,
    transmission: false,
  };
}

export const ParticipateInInviteFriendCampaignRequest = {
  encode(
    message: ParticipateInInviteFriendCampaignRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.invitingUserId !== 0) {
      writer.uint32(8).uint32(message.invitingUserId);
    }
    if (message.invitedUserId !== 0) {
      writer.uint32(16).uint32(message.invitedUserId);
    }
    if (message.sourceCarId !== 0) {
      writer.uint32(24).uint32(message.sourceCarId);
    }
    if (message.transmission === true) {
      writer.uint32(32).bool(message.transmission);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ParticipateInInviteFriendCampaignRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParticipateInInviteFriendCampaignRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.invitingUserId = reader.uint32();
          break;
        case 2:
          message.invitedUserId = reader.uint32();
          break;
        case 3:
          message.sourceCarId = reader.uint32();
          break;
        case 4:
          message.transmission = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ParticipateInInviteFriendCampaignRequest {
    return {
      invitingUserId: isSet(object.invitingUserId)
        ? Number(object.invitingUserId)
        : 0,
      invitedUserId: isSet(object.invitedUserId)
        ? Number(object.invitedUserId)
        : 0,
      sourceCarId: isSet(object.sourceCarId) ? Number(object.sourceCarId) : 0,
      transmission: isSet(object.transmission)
        ? Boolean(object.transmission)
        : false,
    };
  },

  toJSON(message: ParticipateInInviteFriendCampaignRequest): unknown {
    const obj: any = {};
    message.invitingUserId !== undefined &&
      (obj.invitingUserId = Math.round(message.invitingUserId));
    message.invitedUserId !== undefined &&
      (obj.invitedUserId = Math.round(message.invitedUserId));
    message.sourceCarId !== undefined &&
      (obj.sourceCarId = Math.round(message.sourceCarId));
    message.transmission !== undefined &&
      (obj.transmission = message.transmission);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<ParticipateInInviteFriendCampaignRequest>, I>
  >(object: I): ParticipateInInviteFriendCampaignRequest {
    const message = createBaseParticipateInInviteFriendCampaignRequest();
    message.invitingUserId = object.invitingUserId ?? 0;
    message.invitedUserId = object.invitedUserId ?? 0;
    message.sourceCarId = object.sourceCarId ?? 0;
    message.transmission = object.transmission ?? false;
    return message;
  },
};

function createBaseParticipateInInviteFriendCampaignResponse(): ParticipateInInviteFriendCampaignResponse {
  return { error: 0 };
}

export const ParticipateInInviteFriendCampaignResponse = {
  encode(
    message: ParticipateInInviteFriendCampaignResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.error !== 0) {
      writer.uint32(8).int32(message.error);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ParticipateInInviteFriendCampaignResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParticipateInInviteFriendCampaignResponse();
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

  fromJSON(object: any): ParticipateInInviteFriendCampaignResponse {
    return {
      error: isSet(object.error) ? errorCodeFromJSON(object.error) : 0,
    };
  },

  toJSON(message: ParticipateInInviteFriendCampaignResponse): unknown {
    const obj: any = {};
    message.error !== undefined && (obj.error = errorCodeToJSON(message.error));
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<ParticipateInInviteFriendCampaignResponse>, I>
  >(object: I): ParticipateInInviteFriendCampaignResponse {
    const message = createBaseParticipateInInviteFriendCampaignResponse();
    message.error = object.error ?? 0;
    return message;
  },
};

function createBaseConsumeUserItemRequest(): ConsumeUserItemRequest {
  return { userId: 0, carId: 0, userItemId: 0 };
}

export const ConsumeUserItemRequest = {
  encode(
    message: ConsumeUserItemRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.userId !== 0) {
      writer.uint32(8).uint32(message.userId);
    }
    if (message.carId !== 0) {
      writer.uint32(16).uint32(message.carId);
    }
    if (message.userItemId !== 0) {
      writer.uint32(24).uint32(message.userItemId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ConsumeUserItemRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConsumeUserItemRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.userId = reader.uint32();
          break;
        case 2:
          message.carId = reader.uint32();
          break;
        case 3:
          message.userItemId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ConsumeUserItemRequest {
    return {
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      carId: isSet(object.carId) ? Number(object.carId) : 0,
      userItemId: isSet(object.userItemId) ? Number(object.userItemId) : 0,
    };
  },

  toJSON(message: ConsumeUserItemRequest): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.carId !== undefined && (obj.carId = Math.round(message.carId));
    message.userItemId !== undefined &&
      (obj.userItemId = Math.round(message.userItemId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ConsumeUserItemRequest>, I>>(
    object: I
  ): ConsumeUserItemRequest {
    const message = createBaseConsumeUserItemRequest();
    message.userId = object.userId ?? 0;
    message.carId = object.carId ?? 0;
    message.userItemId = object.userItemId ?? 0;
    return message;
  },
};

function createBaseConsumeUserItemResponse(): ConsumeUserItemResponse {
  return { error: 0 };
}

export const ConsumeUserItemResponse = {
  encode(
    message: ConsumeUserItemResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.error !== 0) {
      writer.uint32(8).int32(message.error);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ConsumeUserItemResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConsumeUserItemResponse();
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

  fromJSON(object: any): ConsumeUserItemResponse {
    return {
      error: isSet(object.error) ? errorCodeFromJSON(object.error) : 0,
    };
  },

  toJSON(message: ConsumeUserItemResponse): unknown {
    const obj: any = {};
    message.error !== undefined && (obj.error = errorCodeToJSON(message.error));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ConsumeUserItemResponse>, I>>(
    object: I
  ): ConsumeUserItemResponse {
    const message = createBaseConsumeUserItemResponse();
    message.error = object.error ?? 0;
    return message;
  },
};

function createBaseSearchCarsByLevelRequest(): SearchCarsByLevelRequest {
  return { carId: 0, ghostLevel: 0, area: 0, regionId: 0 };
}

export const SearchCarsByLevelRequest = {
  encode(
    message: SearchCarsByLevelRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.carId !== 0) {
      writer.uint32(8).uint32(message.carId);
    }
    if (message.ghostLevel !== 0) {
      writer.uint32(16).uint32(message.ghostLevel);
    }
    if (message.area !== 0) {
      writer.uint32(24).uint32(message.area);
    }
    if (message.regionId !== 0) {
      writer.uint32(32).uint32(message.regionId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SearchCarsByLevelRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSearchCarsByLevelRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.carId = reader.uint32();
          break;
        case 2:
          message.ghostLevel = reader.uint32();
          break;
        case 3:
          message.area = reader.uint32();
          break;
        case 4:
          message.regionId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SearchCarsByLevelRequest {
    return {
      carId: isSet(object.carId) ? Number(object.carId) : 0,
      ghostLevel: isSet(object.ghostLevel) ? Number(object.ghostLevel) : 0,
      area: isSet(object.area) ? Number(object.area) : 0,
      regionId: isSet(object.regionId) ? Number(object.regionId) : 0,
    };
  },

  toJSON(message: SearchCarsByLevelRequest): unknown {
    const obj: any = {};
    message.carId !== undefined && (obj.carId = Math.round(message.carId));
    message.ghostLevel !== undefined &&
      (obj.ghostLevel = Math.round(message.ghostLevel));
    message.area !== undefined && (obj.area = Math.round(message.area));
    message.regionId !== undefined &&
      (obj.regionId = Math.round(message.regionId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SearchCarsByLevelRequest>, I>>(
    object: I
  ): SearchCarsByLevelRequest {
    const message = createBaseSearchCarsByLevelRequest();
    message.carId = object.carId ?? 0;
    message.ghostLevel = object.ghostLevel ?? 0;
    message.area = object.area ?? 0;
    message.regionId = object.regionId ?? 0;
    return message;
  },
};

function createBaseSearchCarsByLevelResponse(): SearchCarsByLevelResponse {
  return {
    error: 0,
    ramp: 0,
    path: 0,
    ghosts: [],
    selectionMethod: 1,
    rates: [],
  };
}

export const SearchCarsByLevelResponse = {
  encode(
    message: SearchCarsByLevelResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.error !== 0) {
      writer.uint32(8).int32(message.error);
    }
    if (message.ramp !== 0) {
      writer.uint32(16).uint32(message.ramp);
    }
    if (message.path !== 0) {
      writer.uint32(24).uint32(message.path);
    }
    for (const v of message.ghosts) {
      GhostCar.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.selectionMethod !== 1) {
      writer.uint32(40).int32(message.selectionMethod);
    }
    for (const v of message.rates) {
      SearchCarsByLevelResponse_Rate.encode(
        v!,
        writer.uint32(50).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SearchCarsByLevelResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSearchCarsByLevelResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.error = reader.int32() as any;
          break;
        case 2:
          message.ramp = reader.uint32();
          break;
        case 3:
          message.path = reader.uint32();
          break;
        case 4:
          message.ghosts.push(GhostCar.decode(reader, reader.uint32()));
          break;
        case 5:
          message.selectionMethod = reader.int32() as any;
          break;
        case 6:
          message.rates.push(
            SearchCarsByLevelResponse_Rate.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SearchCarsByLevelResponse {
    return {
      error: isSet(object.error) ? errorCodeFromJSON(object.error) : 0,
      ramp: isSet(object.ramp) ? Number(object.ramp) : 0,
      path: isSet(object.path) ? Number(object.path) : 0,
      ghosts: Array.isArray(object?.ghosts)
        ? object.ghosts.map((e: any) => GhostCar.fromJSON(e))
        : [],
      selectionMethod: isSet(object.selectionMethod)
        ? pathSelectionMethodFromJSON(object.selectionMethod)
        : 1,
      rates: Array.isArray(object?.rates)
        ? object.rates.map((e: any) =>
            SearchCarsByLevelResponse_Rate.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: SearchCarsByLevelResponse): unknown {
    const obj: any = {};
    message.error !== undefined && (obj.error = errorCodeToJSON(message.error));
    message.ramp !== undefined && (obj.ramp = Math.round(message.ramp));
    message.path !== undefined && (obj.path = Math.round(message.path));
    if (message.ghosts) {
      obj.ghosts = message.ghosts.map((e) =>
        e ? GhostCar.toJSON(e) : undefined
      );
    } else {
      obj.ghosts = [];
    }
    message.selectionMethod !== undefined &&
      (obj.selectionMethod = pathSelectionMethodToJSON(
        message.selectionMethod
      ));
    if (message.rates) {
      obj.rates = message.rates.map((e) =>
        e ? SearchCarsByLevelResponse_Rate.toJSON(e) : undefined
      );
    } else {
      obj.rates = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SearchCarsByLevelResponse>, I>>(
    object: I
  ): SearchCarsByLevelResponse {
    const message = createBaseSearchCarsByLevelResponse();
    message.error = object.error ?? 0;
    message.ramp = object.ramp ?? 0;
    message.path = object.path ?? 0;
    message.ghosts = object.ghosts?.map((e) => GhostCar.fromPartial(e)) || [];
    message.selectionMethod = object.selectionMethod ?? 1;
    message.rates =
      object.rates?.map((e) => SearchCarsByLevelResponse_Rate.fromPartial(e)) ||
      [];
    return message;
  },
};

function createBaseSearchCarsByLevelResponse_Rate(): SearchCarsByLevelResponse_Rate {
  return { carId: 0, type: 1, rate: 0 };
}

export const SearchCarsByLevelResponse_Rate = {
  encode(
    message: SearchCarsByLevelResponse_Rate,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.carId !== 0) {
      writer.uint32(8).uint32(message.carId);
    }
    if (message.type !== 1) {
      writer.uint32(16).int32(message.type);
    }
    if (message.rate !== 0) {
      writer.uint32(24).uint32(message.rate);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SearchCarsByLevelResponse_Rate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSearchCarsByLevelResponse_Rate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.carId = reader.uint32();
          break;
        case 2:
          message.type = reader.int32() as any;
          break;
        case 3:
          message.rate = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SearchCarsByLevelResponse_Rate {
    return {
      carId: isSet(object.carId) ? Number(object.carId) : 0,
      type: isSet(object.type) ? ghostRateTypeFromJSON(object.type) : 1,
      rate: isSet(object.rate) ? Number(object.rate) : 0,
    };
  },

  toJSON(message: SearchCarsByLevelResponse_Rate): unknown {
    const obj: any = {};
    message.carId !== undefined && (obj.carId = Math.round(message.carId));
    message.type !== undefined &&
      (obj.type = ghostRateTypeToJSON(message.type));
    message.rate !== undefined && (obj.rate = Math.round(message.rate));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SearchCarsByLevelResponse_Rate>, I>>(
    object: I
  ): SearchCarsByLevelResponse_Rate {
    const message = createBaseSearchCarsByLevelResponse_Rate();
    message.carId = object.carId ?? 0;
    message.type = object.type ?? 1;
    message.rate = object.rate ?? 0;
    return message;
  },
};

function createBaseLoadPathsAndTuningsRequest(): LoadPathsAndTuningsRequest {
  return {
    carId: 0,
    selectedCars: [],
    returnImmediately: false,
    stampTargetArea: 0,
  };
}

export const LoadPathsAndTuningsRequest = {
  encode(
    message: LoadPathsAndTuningsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.carId !== 0) {
      writer.uint32(8).uint32(message.carId);
    }
    writer.uint32(18).fork();
    for (const v of message.selectedCars) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.returnImmediately === true) {
      writer.uint32(24).bool(message.returnImmediately);
    }
    if (message.stampTargetArea !== 0) {
      writer.uint32(32).uint32(message.stampTargetArea);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LoadPathsAndTuningsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoadPathsAndTuningsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.carId = reader.uint32();
          break;
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.selectedCars.push(reader.uint32());
            }
          } else {
            message.selectedCars.push(reader.uint32());
          }
          break;
        case 3:
          message.returnImmediately = reader.bool();
          break;
        case 4:
          message.stampTargetArea = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LoadPathsAndTuningsRequest {
    return {
      carId: isSet(object.carId) ? Number(object.carId) : 0,
      selectedCars: Array.isArray(object?.selectedCars)
        ? object.selectedCars.map((e: any) => Number(e))
        : [],
      returnImmediately: isSet(object.returnImmediately)
        ? Boolean(object.returnImmediately)
        : false,
      stampTargetArea: isSet(object.stampTargetArea)
        ? Number(object.stampTargetArea)
        : 0,
    };
  },

  toJSON(message: LoadPathsAndTuningsRequest): unknown {
    const obj: any = {};
    message.carId !== undefined && (obj.carId = Math.round(message.carId));
    if (message.selectedCars) {
      obj.selectedCars = message.selectedCars.map((e) => Math.round(e));
    } else {
      obj.selectedCars = [];
    }
    message.returnImmediately !== undefined &&
      (obj.returnImmediately = message.returnImmediately);
    message.stampTargetArea !== undefined &&
      (obj.stampTargetArea = Math.round(message.stampTargetArea));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LoadPathsAndTuningsRequest>, I>>(
    object: I
  ): LoadPathsAndTuningsRequest {
    const message = createBaseLoadPathsAndTuningsRequest();
    message.carId = object.carId ?? 0;
    message.selectedCars = object.selectedCars?.map((e) => e) || [];
    message.returnImmediately = object.returnImmediately ?? false;
    message.stampTargetArea = object.stampTargetArea ?? 0;
    return message;
  },
};

function createBaseLoadPathsAndTuningsResponse(): LoadPathsAndTuningsResponse {
  return { error: 0, data: [] };
}

export const LoadPathsAndTuningsResponse = {
  encode(
    message: LoadPathsAndTuningsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.error !== 0) {
      writer.uint32(8).int32(message.error);
    }
    for (const v of message.data) {
      LoadPathsAndTuningsResponse_CarTuningsByPath.encode(
        v!,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LoadPathsAndTuningsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoadPathsAndTuningsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.error = reader.int32() as any;
          break;
        case 2:
          message.data.push(
            LoadPathsAndTuningsResponse_CarTuningsByPath.decode(
              reader,
              reader.uint32()
            )
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LoadPathsAndTuningsResponse {
    return {
      error: isSet(object.error) ? errorCodeFromJSON(object.error) : 0,
      data: Array.isArray(object?.data)
        ? object.data.map((e: any) =>
            LoadPathsAndTuningsResponse_CarTuningsByPath.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: LoadPathsAndTuningsResponse): unknown {
    const obj: any = {};
    message.error !== undefined && (obj.error = errorCodeToJSON(message.error));
    if (message.data) {
      obj.data = message.data.map((e) =>
        e ? LoadPathsAndTuningsResponse_CarTuningsByPath.toJSON(e) : undefined
      );
    } else {
      obj.data = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LoadPathsAndTuningsResponse>, I>>(
    object: I
  ): LoadPathsAndTuningsResponse {
    const message = createBaseLoadPathsAndTuningsResponse();
    message.error = object.error ?? 0;
    message.data =
      object.data?.map((e) =>
        LoadPathsAndTuningsResponse_CarTuningsByPath.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseLoadPathsAndTuningsResponse_CarTuningsByPath(): LoadPathsAndTuningsResponse_CarTuningsByPath {
  return { area: 0, ramp: 0, path: 0, carTunings: [], selectionMethod: 1 };
}

export const LoadPathsAndTuningsResponse_CarTuningsByPath = {
  encode(
    message: LoadPathsAndTuningsResponse_CarTuningsByPath,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.area !== 0) {
      writer.uint32(8).uint32(message.area);
    }
    if (message.ramp !== 0) {
      writer.uint32(16).uint32(message.ramp);
    }
    if (message.path !== 0) {
      writer.uint32(24).uint32(message.path);
    }
    for (const v of message.carTunings) {
      CarTuning.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.selectionMethod !== 1) {
      writer.uint32(40).int32(message.selectionMethod);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LoadPathsAndTuningsResponse_CarTuningsByPath {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoadPathsAndTuningsResponse_CarTuningsByPath();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.area = reader.uint32();
          break;
        case 2:
          message.ramp = reader.uint32();
          break;
        case 3:
          message.path = reader.uint32();
          break;
        case 4:
          message.carTunings.push(CarTuning.decode(reader, reader.uint32()));
          break;
        case 5:
          message.selectionMethod = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LoadPathsAndTuningsResponse_CarTuningsByPath {
    return {
      area: isSet(object.area) ? Number(object.area) : 0,
      ramp: isSet(object.ramp) ? Number(object.ramp) : 0,
      path: isSet(object.path) ? Number(object.path) : 0,
      carTunings: Array.isArray(object?.carTunings)
        ? object.carTunings.map((e: any) => CarTuning.fromJSON(e))
        : [],
      selectionMethod: isSet(object.selectionMethod)
        ? pathSelectionMethodFromJSON(object.selectionMethod)
        : 1,
    };
  },

  toJSON(message: LoadPathsAndTuningsResponse_CarTuningsByPath): unknown {
    const obj: any = {};
    message.area !== undefined && (obj.area = Math.round(message.area));
    message.ramp !== undefined && (obj.ramp = Math.round(message.ramp));
    message.path !== undefined && (obj.path = Math.round(message.path));
    if (message.carTunings) {
      obj.carTunings = message.carTunings.map((e) =>
        e ? CarTuning.toJSON(e) : undefined
      );
    } else {
      obj.carTunings = [];
    }
    message.selectionMethod !== undefined &&
      (obj.selectionMethod = pathSelectionMethodToJSON(
        message.selectionMethod
      ));
    return obj;
  },

  fromPartial<
    I extends Exact<
      DeepPartial<LoadPathsAndTuningsResponse_CarTuningsByPath>,
      I
    >
  >(object: I): LoadPathsAndTuningsResponse_CarTuningsByPath {
    const message = createBaseLoadPathsAndTuningsResponse_CarTuningsByPath();
    message.area = object.area ?? 0;
    message.ramp = object.ramp ?? 0;
    message.path = object.path ?? 0;
    message.carTunings =
      object.carTunings?.map((e) => CarTuning.fromPartial(e)) || [];
    message.selectionMethod = object.selectionMethod ?? 1;
    return message;
  },
};

function createBaseLoadGhostDriveDataRequest(): LoadGhostDriveDataRequest {
  return { path: 0, carTunings: [] };
}

export const LoadGhostDriveDataRequest = {
  encode(
    message: LoadGhostDriveDataRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.path !== 0) {
      writer.uint32(8).uint32(message.path);
    }
    for (const v of message.carTunings) {
      CarTuning.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LoadGhostDriveDataRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoadGhostDriveDataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = reader.uint32();
          break;
        case 2:
          message.carTunings.push(CarTuning.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LoadGhostDriveDataRequest {
    return {
      path: isSet(object.path) ? Number(object.path) : 0,
      carTunings: Array.isArray(object?.carTunings)
        ? object.carTunings.map((e: any) => CarTuning.fromJSON(e))
        : [],
    };
  },

  toJSON(message: LoadGhostDriveDataRequest): unknown {
    const obj: any = {};
    message.path !== undefined && (obj.path = Math.round(message.path));
    if (message.carTunings) {
      obj.carTunings = message.carTunings.map((e) =>
        e ? CarTuning.toJSON(e) : undefined
      );
    } else {
      obj.carTunings = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LoadGhostDriveDataRequest>, I>>(
    object: I
  ): LoadGhostDriveDataRequest {
    const message = createBaseLoadGhostDriveDataRequest();
    message.path = object.path ?? 0;
    message.carTunings =
      object.carTunings?.map((e) => CarTuning.fromPartial(e)) || [];
    return message;
  },
};

function createBaseLoadGhostDriveDataResponse(): LoadGhostDriveDataResponse {
  return { error: 0, data: [] };
}

export const LoadGhostDriveDataResponse = {
  encode(
    message: LoadGhostDriveDataResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.error !== 0) {
      writer.uint32(8).int32(message.error);
    }
    for (const v of message.data) {
      LoadGhostDriveDataResponse_GhostDriveData.encode(
        v!,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LoadGhostDriveDataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoadGhostDriveDataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.error = reader.int32() as any;
          break;
        case 2:
          message.data.push(
            LoadGhostDriveDataResponse_GhostDriveData.decode(
              reader,
              reader.uint32()
            )
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LoadGhostDriveDataResponse {
    return {
      error: isSet(object.error) ? errorCodeFromJSON(object.error) : 0,
      data: Array.isArray(object?.data)
        ? object.data.map((e: any) =>
            LoadGhostDriveDataResponse_GhostDriveData.fromJSON(e)
          )
        : [],
    };
  },

  toJSON(message: LoadGhostDriveDataResponse): unknown {
    const obj: any = {};
    message.error !== undefined && (obj.error = errorCodeToJSON(message.error));
    if (message.data) {
      obj.data = message.data.map((e) =>
        e ? LoadGhostDriveDataResponse_GhostDriveData.toJSON(e) : undefined
      );
    } else {
      obj.data = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LoadGhostDriveDataResponse>, I>>(
    object: I
  ): LoadGhostDriveDataResponse {
    const message = createBaseLoadGhostDriveDataResponse();
    message.error = object.error ?? 0;
    message.data =
      object.data?.map((e) =>
        LoadGhostDriveDataResponse_GhostDriveData.fromPartial(e)
      ) || [];
    return message;
  },
};

function createBaseLoadGhostDriveDataResponse_GhostDriveData(): LoadGhostDriveDataResponse_GhostDriveData {
  return {
    carId: 0,
    type: 1,
    driveData: undefined,
    trendBinaryByUser: undefined,
    trendBinaryByCar: undefined,
    trendBinaryByArea: undefined,
  };
}

export const LoadGhostDriveDataResponse_GhostDriveData = {
  encode(
    message: LoadGhostDriveDataResponse_GhostDriveData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.carId !== 0) {
      writer.uint32(8).uint32(message.carId);
    }
    if (message.type !== 1) {
      writer.uint32(16).int32(message.type);
    }
    if (message.driveData !== undefined) {
      BinaryData.encode(message.driveData, writer.uint32(26).fork()).ldelim();
    }
    if (message.trendBinaryByUser !== undefined) {
      BinaryData.encode(
        message.trendBinaryByUser,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.trendBinaryByCar !== undefined) {
      BinaryData.encode(
        message.trendBinaryByCar,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.trendBinaryByArea !== undefined) {
      BinaryData.encode(
        message.trendBinaryByArea,
        writer.uint32(50).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): LoadGhostDriveDataResponse_GhostDriveData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLoadGhostDriveDataResponse_GhostDriveData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.carId = reader.uint32();
          break;
        case 2:
          message.type = reader.int32() as any;
          break;
        case 3:
          message.driveData = BinaryData.decode(reader, reader.uint32());
          break;
        case 4:
          message.trendBinaryByUser = BinaryData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.trendBinaryByCar = BinaryData.decode(reader, reader.uint32());
          break;
        case 6:
          message.trendBinaryByArea = BinaryData.decode(
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

  fromJSON(object: any): LoadGhostDriveDataResponse_GhostDriveData {
    return {
      carId: isSet(object.carId) ? Number(object.carId) : 0,
      type: isSet(object.type) ? ghostTypeFromJSON(object.type) : 1,
      driveData: isSet(object.driveData)
        ? BinaryData.fromJSON(object.driveData)
        : undefined,
      trendBinaryByUser: isSet(object.trendBinaryByUser)
        ? BinaryData.fromJSON(object.trendBinaryByUser)
        : undefined,
      trendBinaryByCar: isSet(object.trendBinaryByCar)
        ? BinaryData.fromJSON(object.trendBinaryByCar)
        : undefined,
      trendBinaryByArea: isSet(object.trendBinaryByArea)
        ? BinaryData.fromJSON(object.trendBinaryByArea)
        : undefined,
    };
  },

  toJSON(message: LoadGhostDriveDataResponse_GhostDriveData): unknown {
    const obj: any = {};
    message.carId !== undefined && (obj.carId = Math.round(message.carId));
    message.type !== undefined && (obj.type = ghostTypeToJSON(message.type));
    message.driveData !== undefined &&
      (obj.driveData = message.driveData
        ? BinaryData.toJSON(message.driveData)
        : undefined);
    message.trendBinaryByUser !== undefined &&
      (obj.trendBinaryByUser = message.trendBinaryByUser
        ? BinaryData.toJSON(message.trendBinaryByUser)
        : undefined);
    message.trendBinaryByCar !== undefined &&
      (obj.trendBinaryByCar = message.trendBinaryByCar
        ? BinaryData.toJSON(message.trendBinaryByCar)
        : undefined);
    message.trendBinaryByArea !== undefined &&
      (obj.trendBinaryByArea = message.trendBinaryByArea
        ? BinaryData.toJSON(message.trendBinaryByArea)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<LoadGhostDriveDataResponse_GhostDriveData>, I>
  >(object: I): LoadGhostDriveDataResponse_GhostDriveData {
    const message = createBaseLoadGhostDriveDataResponse_GhostDriveData();
    message.carId = object.carId ?? 0;
    message.type = object.type ?? 1;
    message.driveData =
      object.driveData !== undefined && object.driveData !== null
        ? BinaryData.fromPartial(object.driveData)
        : undefined;
    message.trendBinaryByUser =
      object.trendBinaryByUser !== undefined &&
      object.trendBinaryByUser !== null
        ? BinaryData.fromPartial(object.trendBinaryByUser)
        : undefined;
    message.trendBinaryByCar =
      object.trendBinaryByCar !== undefined && object.trendBinaryByCar !== null
        ? BinaryData.fromPartial(object.trendBinaryByCar)
        : undefined;
    message.trendBinaryByArea =
      object.trendBinaryByArea !== undefined &&
      object.trendBinaryByArea !== null
        ? BinaryData.fromPartial(object.trendBinaryByArea)
        : undefined;
    return message;
  },
};

function createBaseCar(): Car {
  return {
    carId: 0,
    userId: 0,
    regionId: 0,
    name: "",
    manufacturer: 0,
    model: 0,
    visualModel: 0,
    defaultColor: 0,
    customColor: 0,
    wheel: 0,
    wheelColor: 0,
    aero: 0,
    bonnet: 0,
    wing: 0,
    gtWing: undefined,
    mirror: 0,
    neon: 0,
    trunk: 0,
    plate: 0,
    plateColor: 0,
    plateNumber: 0,
    tunePower: 0,
    tuneHandling: 0,
    title: "",
    level: 0,
    windowSticker: false,
    windowStickerString: "",
    windowStickerFont: 0,
    windowDecoration: 0,
    rivalMarker: 0,
    lastPlayedAt: 0,
    lastPlayedPlace: undefined,
    aura: 0,
    auraMotif: 0,
    ghostLevel: 0,
    country: "",
    searchCode: "",
  };
}

export const Car = {
  encode(message: Car, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.carId !== 0) {
      writer.uint32(8).uint32(message.carId);
    }
    if (message.userId !== 0) {
      writer.uint32(16).uint32(message.userId);
    }
    if (message.regionId !== 0) {
      writer.uint32(24).uint32(message.regionId);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.manufacturer !== 0) {
      writer.uint32(40).uint32(message.manufacturer);
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
    if (message.customColor !== 0) {
      writer.uint32(72).uint32(message.customColor);
    }
    if (message.wheel !== 0) {
      writer.uint32(80).uint32(message.wheel);
    }
    if (message.wheelColor !== 0) {
      writer.uint32(88).uint32(message.wheelColor);
    }
    if (message.aero !== 0) {
      writer.uint32(96).uint32(message.aero);
    }
    if (message.bonnet !== 0) {
      writer.uint32(104).uint32(message.bonnet);
    }
    if (message.wing !== 0) {
      writer.uint32(112).uint32(message.wing);
    }
    if (message.gtWing !== undefined) {
      GTWing.encode(message.gtWing, writer.uint32(122).fork()).ldelim();
    }
    if (message.mirror !== 0) {
      writer.uint32(128).uint32(message.mirror);
    }
    if (message.neon !== 0) {
      writer.uint32(192).uint32(message.neon);
    }
    if (message.trunk !== 0) {
      writer.uint32(200).uint32(message.trunk);
    }
    if (message.plate !== 0) {
      writer.uint32(208).uint32(message.plate);
    }
    if (message.plateColor !== 0) {
      writer.uint32(216).uint32(message.plateColor);
    }
    if (message.plateNumber !== 0) {
      writer.uint32(224).uint32(message.plateNumber);
    }
    if (message.tunePower !== 0) {
      writer.uint32(248).uint32(message.tunePower);
    }
    if (message.tuneHandling !== 0) {
      writer.uint32(256).uint32(message.tuneHandling);
    }
    if (message.title !== "") {
      writer.uint32(266).string(message.title);
    }
    if (message.level !== 0) {
      writer.uint32(272).uint32(message.level);
    }
    if (message.windowSticker === true) {
      writer.uint32(280).bool(message.windowSticker);
    }
    if (message.windowStickerString !== "") {
      writer.uint32(298).string(message.windowStickerString);
    }
    if (message.windowStickerFont !== 0) {
      writer.uint32(304).uint32(message.windowStickerFont);
    }
    if (message.windowDecoration !== 0) {
      writer.uint32(312).uint32(message.windowDecoration);
    }
    if (message.rivalMarker !== 0) {
      writer.uint32(328).uint32(message.rivalMarker);
    }
    if (message.lastPlayedAt !== 0) {
      writer.uint32(360).uint32(message.lastPlayedAt);
    }
    if (message.lastPlayedPlace !== undefined) {
      Place.encode(message.lastPlayedPlace, writer.uint32(370).fork()).ldelim();
    }
    if (message.aura !== 0) {
      writer.uint32(376).uint32(message.aura);
    }
    if (message.auraMotif !== 0) {
      writer.uint32(384).uint32(message.auraMotif);
    }
    if (message.ghostLevel !== 0) {
      writer.uint32(392).uint32(message.ghostLevel);
    }
    if (message.country !== "") {
      writer.uint32(402).string(message.country);
    }
    if (message.searchCode !== "") {
      writer.uint32(410).string(message.searchCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Car {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCar();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.carId = reader.uint32();
          break;
        case 2:
          message.userId = reader.uint32();
          break;
        case 3:
          message.regionId = reader.uint32();
          break;
        case 4:
          message.name = reader.string();
          break;
        case 5:
          message.manufacturer = reader.uint32();
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
          message.customColor = reader.uint32();
          break;
        case 10:
          message.wheel = reader.uint32();
          break;
        case 11:
          message.wheelColor = reader.uint32();
          break;
        case 12:
          message.aero = reader.uint32();
          break;
        case 13:
          message.bonnet = reader.uint32();
          break;
        case 14:
          message.wing = reader.uint32();
          break;
        case 15:
          message.gtWing = GTWing.decode(reader, reader.uint32());
          break;
        case 16:
          message.mirror = reader.uint32();
          break;
        case 24:
          message.neon = reader.uint32();
          break;
        case 25:
          message.trunk = reader.uint32();
          break;
        case 26:
          message.plate = reader.uint32();
          break;
        case 27:
          message.plateColor = reader.uint32();
          break;
        case 28:
          message.plateNumber = reader.uint32();
          break;
        case 31:
          message.tunePower = reader.uint32();
          break;
        case 32:
          message.tuneHandling = reader.uint32();
          break;
        case 33:
          message.title = reader.string();
          break;
        case 34:
          message.level = reader.uint32();
          break;
        case 35:
          message.windowSticker = reader.bool();
          break;
        case 37:
          message.windowStickerString = reader.string();
          break;
        case 38:
          message.windowStickerFont = reader.uint32();
          break;
        case 39:
          message.windowDecoration = reader.uint32();
          break;
        case 41:
          message.rivalMarker = reader.uint32();
          break;
        case 45:
          message.lastPlayedAt = reader.uint32();
          break;
        case 46:
          message.lastPlayedPlace = Place.decode(reader, reader.uint32());
          break;
        case 47:
          message.aura = reader.uint32();
          break;
        case 48:
          message.auraMotif = reader.uint32();
          break;
        case 49:
          message.ghostLevel = reader.uint32();
          break;
        case 50:
          message.country = reader.string();
          break;
        case 51:
          message.searchCode = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Car {
    return {
      carId: isSet(object.carId) ? Number(object.carId) : 0,
      userId: isSet(object.userId) ? Number(object.userId) : 0,
      regionId: isSet(object.regionId) ? Number(object.regionId) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      manufacturer: isSet(object.manufacturer)
        ? Number(object.manufacturer)
        : 0,
      model: isSet(object.model) ? Number(object.model) : 0,
      visualModel: isSet(object.visualModel) ? Number(object.visualModel) : 0,
      defaultColor: isSet(object.defaultColor)
        ? Number(object.defaultColor)
        : 0,
      customColor: isSet(object.customColor) ? Number(object.customColor) : 0,
      wheel: isSet(object.wheel) ? Number(object.wheel) : 0,
      wheelColor: isSet(object.wheelColor) ? Number(object.wheelColor) : 0,
      aero: isSet(object.aero) ? Number(object.aero) : 0,
      bonnet: isSet(object.bonnet) ? Number(object.bonnet) : 0,
      wing: isSet(object.wing) ? Number(object.wing) : 0,
      gtWing: isSet(object.gtWing) ? GTWing.fromJSON(object.gtWing) : undefined,
      mirror: isSet(object.mirror) ? Number(object.mirror) : 0,
      neon: isSet(object.neon) ? Number(object.neon) : 0,
      trunk: isSet(object.trunk) ? Number(object.trunk) : 0,
      plate: isSet(object.plate) ? Number(object.plate) : 0,
      plateColor: isSet(object.plateColor) ? Number(object.plateColor) : 0,
      plateNumber: isSet(object.plateNumber) ? Number(object.plateNumber) : 0,
      tunePower: isSet(object.tunePower) ? Number(object.tunePower) : 0,
      tuneHandling: isSet(object.tuneHandling)
        ? Number(object.tuneHandling)
        : 0,
      title: isSet(object.title) ? String(object.title) : "",
      level: isSet(object.level) ? Number(object.level) : 0,
      windowSticker: isSet(object.windowSticker)
        ? Boolean(object.windowSticker)
        : false,
      windowStickerString: isSet(object.windowStickerString)
        ? String(object.windowStickerString)
        : "",
      windowStickerFont: isSet(object.windowStickerFont)
        ? Number(object.windowStickerFont)
        : 0,
      windowDecoration: isSet(object.windowDecoration)
        ? Number(object.windowDecoration)
        : 0,
      rivalMarker: isSet(object.rivalMarker) ? Number(object.rivalMarker) : 0,
      lastPlayedAt: isSet(object.lastPlayedAt)
        ? Number(object.lastPlayedAt)
        : 0,
      lastPlayedPlace: isSet(object.lastPlayedPlace)
        ? Place.fromJSON(object.lastPlayedPlace)
        : undefined,
      aura: isSet(object.aura) ? Number(object.aura) : 0,
      auraMotif: isSet(object.auraMotif) ? Number(object.auraMotif) : 0,
      ghostLevel: isSet(object.ghostLevel) ? Number(object.ghostLevel) : 0,
      country: isSet(object.country) ? String(object.country) : "",
      searchCode: isSet(object.searchCode) ? String(object.searchCode) : "",
    };
  },

  toJSON(message: Car): unknown {
    const obj: any = {};
    message.carId !== undefined && (obj.carId = Math.round(message.carId));
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    message.regionId !== undefined &&
      (obj.regionId = Math.round(message.regionId));
    message.name !== undefined && (obj.name = message.name);
    message.manufacturer !== undefined &&
      (obj.manufacturer = Math.round(message.manufacturer));
    message.model !== undefined && (obj.model = Math.round(message.model));
    message.visualModel !== undefined &&
      (obj.visualModel = Math.round(message.visualModel));
    message.defaultColor !== undefined &&
      (obj.defaultColor = Math.round(message.defaultColor));
    message.customColor !== undefined &&
      (obj.customColor = Math.round(message.customColor));
    message.wheel !== undefined && (obj.wheel = Math.round(message.wheel));
    message.wheelColor !== undefined &&
      (obj.wheelColor = Math.round(message.wheelColor));
    message.aero !== undefined && (obj.aero = Math.round(message.aero));
    message.bonnet !== undefined && (obj.bonnet = Math.round(message.bonnet));
    message.wing !== undefined && (obj.wing = Math.round(message.wing));
    message.gtWing !== undefined &&
      (obj.gtWing = message.gtWing ? GTWing.toJSON(message.gtWing) : undefined);
    message.mirror !== undefined && (obj.mirror = Math.round(message.mirror));
    message.neon !== undefined && (obj.neon = Math.round(message.neon));
    message.trunk !== undefined && (obj.trunk = Math.round(message.trunk));
    message.plate !== undefined && (obj.plate = Math.round(message.plate));
    message.plateColor !== undefined &&
      (obj.plateColor = Math.round(message.plateColor));
    message.plateNumber !== undefined &&
      (obj.plateNumber = Math.round(message.plateNumber));
    message.tunePower !== undefined &&
      (obj.tunePower = Math.round(message.tunePower));
    message.tuneHandling !== undefined &&
      (obj.tuneHandling = Math.round(message.tuneHandling));
    message.title !== undefined && (obj.title = message.title);
    message.level !== undefined && (obj.level = Math.round(message.level));
    message.windowSticker !== undefined &&
      (obj.windowSticker = message.windowSticker);
    message.windowStickerString !== undefined &&
      (obj.windowStickerString = message.windowStickerString);
    message.windowStickerFont !== undefined &&
      (obj.windowStickerFont = Math.round(message.windowStickerFont));
    message.windowDecoration !== undefined &&
      (obj.windowDecoration = Math.round(message.windowDecoration));
    message.rivalMarker !== undefined &&
      (obj.rivalMarker = Math.round(message.rivalMarker));
    message.lastPlayedAt !== undefined &&
      (obj.lastPlayedAt = Math.round(message.lastPlayedAt));
    message.lastPlayedPlace !== undefined &&
      (obj.lastPlayedPlace = message.lastPlayedPlace
        ? Place.toJSON(message.lastPlayedPlace)
        : undefined);
    message.aura !== undefined && (obj.aura = Math.round(message.aura));
    message.auraMotif !== undefined &&
      (obj.auraMotif = Math.round(message.auraMotif));
    message.ghostLevel !== undefined &&
      (obj.ghostLevel = Math.round(message.ghostLevel));
    message.country !== undefined && (obj.country = message.country);
    message.searchCode !== undefined && (obj.searchCode = message.searchCode);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Car>, I>>(object: I): Car {
    const message = createBaseCar();
    message.carId = object.carId ?? 0;
    message.userId = object.userId ?? 0;
    message.regionId = object.regionId ?? 0;
    message.name = object.name ?? "";
    message.manufacturer = object.manufacturer ?? 0;
    message.model = object.model ?? 0;
    message.visualModel = object.visualModel ?? 0;
    message.defaultColor = object.defaultColor ?? 0;
    message.customColor = object.customColor ?? 0;
    message.wheel = object.wheel ?? 0;
    message.wheelColor = object.wheelColor ?? 0;
    message.aero = object.aero ?? 0;
    message.bonnet = object.bonnet ?? 0;
    message.wing = object.wing ?? 0;
    message.gtWing =
      object.gtWing !== undefined && object.gtWing !== null
        ? GTWing.fromPartial(object.gtWing)
        : undefined;
    message.mirror = object.mirror ?? 0;
    message.neon = object.neon ?? 0;
    message.trunk = object.trunk ?? 0;
    message.plate = object.plate ?? 0;
    message.plateColor = object.plateColor ?? 0;
    message.plateNumber = object.plateNumber ?? 0;
    message.tunePower = object.tunePower ?? 0;
    message.tuneHandling = object.tuneHandling ?? 0;
    message.title = object.title ?? "";
    message.level = object.level ?? 0;
    message.windowSticker = object.windowSticker ?? false;
    message.windowStickerString = object.windowStickerString ?? "";
    message.windowStickerFont = object.windowStickerFont ?? 0;
    message.windowDecoration = object.windowDecoration ?? 0;
    message.rivalMarker = object.rivalMarker ?? 0;
    message.lastPlayedAt = object.lastPlayedAt ?? 0;
    message.lastPlayedPlace =
      object.lastPlayedPlace !== undefined && object.lastPlayedPlace !== null
        ? Place.fromPartial(object.lastPlayedPlace)
        : undefined;
    message.aura = object.aura ?? 0;
    message.auraMotif = object.auraMotif ?? 0;
    message.ghostLevel = object.ghostLevel ?? 0;
    message.country = object.country ?? "";
    message.searchCode = object.searchCode ?? "";
    return message;
  },
};

function createBaseCarSetting(): CarSetting {
  return {
    carId: 0,
    view: false,
    transmission: false,
    retire: false,
    meter: 0,
    navigationMap: false,
    volume: 0,
    bgm: 0,
    nameplate: 0,
    nameplateColor: 0,
    terminalBackground: 0,
  };
}

export const CarSetting = {
  encode(
    message: CarSetting,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.carId !== 0) {
      writer.uint32(8).uint32(message.carId);
    }
    if (message.view === true) {
      writer.uint32(16).bool(message.view);
    }
    if (message.transmission === true) {
      writer.uint32(24).bool(message.transmission);
    }
    if (message.retire === true) {
      writer.uint32(32).bool(message.retire);
    }
    if (message.meter !== 0) {
      writer.uint32(40).uint32(message.meter);
    }
    if (message.navigationMap === true) {
      writer.uint32(48).bool(message.navigationMap);
    }
    if (message.volume !== 0) {
      writer.uint32(56).uint32(message.volume);
    }
    if (message.bgm !== 0) {
      writer.uint32(64).uint32(message.bgm);
    }
    if (message.nameplate !== 0) {
      writer.uint32(72).uint32(message.nameplate);
    }
    if (message.nameplateColor !== 0) {
      writer.uint32(80).uint32(message.nameplateColor);
    }
    if (message.terminalBackground !== 0) {
      writer.uint32(104).uint32(message.terminalBackground);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CarSetting {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCarSetting();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.carId = reader.uint32();
          break;
        case 2:
          message.view = reader.bool();
          break;
        case 3:
          message.transmission = reader.bool();
          break;
        case 4:
          message.retire = reader.bool();
          break;
        case 5:
          message.meter = reader.uint32();
          break;
        case 6:
          message.navigationMap = reader.bool();
          break;
        case 7:
          message.volume = reader.uint32();
          break;
        case 8:
          message.bgm = reader.uint32();
          break;
        case 9:
          message.nameplate = reader.uint32();
          break;
        case 10:
          message.nameplateColor = reader.uint32();
          break;
        case 13:
          message.terminalBackground = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CarSetting {
    return {
      carId: isSet(object.carId) ? Number(object.carId) : 0,
      view: isSet(object.view) ? Boolean(object.view) : false,
      transmission: isSet(object.transmission)
        ? Boolean(object.transmission)
        : false,
      retire: isSet(object.retire) ? Boolean(object.retire) : false,
      meter: isSet(object.meter) ? Number(object.meter) : 0,
      navigationMap: isSet(object.navigationMap)
        ? Boolean(object.navigationMap)
        : false,
      volume: isSet(object.volume) ? Number(object.volume) : 0,
      bgm: isSet(object.bgm) ? Number(object.bgm) : 0,
      nameplate: isSet(object.nameplate) ? Number(object.nameplate) : 0,
      nameplateColor: isSet(object.nameplateColor)
        ? Number(object.nameplateColor)
        : 0,
      terminalBackground: isSet(object.terminalBackground)
        ? Number(object.terminalBackground)
        : 0,
    };
  },

  toJSON(message: CarSetting): unknown {
    const obj: any = {};
    message.carId !== undefined && (obj.carId = Math.round(message.carId));
    message.view !== undefined && (obj.view = message.view);
    message.transmission !== undefined &&
      (obj.transmission = message.transmission);
    message.retire !== undefined && (obj.retire = message.retire);
    message.meter !== undefined && (obj.meter = Math.round(message.meter));
    message.navigationMap !== undefined &&
      (obj.navigationMap = message.navigationMap);
    message.volume !== undefined && (obj.volume = Math.round(message.volume));
    message.bgm !== undefined && (obj.bgm = Math.round(message.bgm));
    message.nameplate !== undefined &&
      (obj.nameplate = Math.round(message.nameplate));
    message.nameplateColor !== undefined &&
      (obj.nameplateColor = Math.round(message.nameplateColor));
    message.terminalBackground !== undefined &&
      (obj.terminalBackground = Math.round(message.terminalBackground));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CarSetting>, I>>(
    object: I
  ): CarSetting {
    const message = createBaseCarSetting();
    message.carId = object.carId ?? 0;
    message.view = object.view ?? false;
    message.transmission = object.transmission ?? false;
    message.retire = object.retire ?? false;
    message.meter = object.meter ?? 0;
    message.navigationMap = object.navigationMap ?? false;
    message.volume = object.volume ?? 0;
    message.bgm = object.bgm ?? 0;
    message.nameplate = object.nameplate ?? 0;
    message.nameplateColor = object.nameplateColor ?? 0;
    message.terminalBackground = object.terminalBackground ?? 0;
    return message;
  },
};

function createBaseGTWing(): GTWing {
  return {
    pillar: 0,
    pillarMaterial: 0,
    mainWing: 0,
    mainWingColor: 0,
    wingTip: 0,
    material: 0,
  };
}

export const GTWing = {
  encode(
    message: GTWing,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pillar !== 0) {
      writer.uint32(8).uint32(message.pillar);
    }
    if (message.pillarMaterial !== 0) {
      writer.uint32(16).uint32(message.pillarMaterial);
    }
    if (message.mainWing !== 0) {
      writer.uint32(24).uint32(message.mainWing);
    }
    if (message.mainWingColor !== 0) {
      writer.uint32(32).uint32(message.mainWingColor);
    }
    if (message.wingTip !== 0) {
      writer.uint32(40).uint32(message.wingTip);
    }
    if (message.material !== 0) {
      writer.uint32(48).uint32(message.material);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GTWing {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGTWing();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pillar = reader.uint32();
          break;
        case 2:
          message.pillarMaterial = reader.uint32();
          break;
        case 3:
          message.mainWing = reader.uint32();
          break;
        case 4:
          message.mainWingColor = reader.uint32();
          break;
        case 5:
          message.wingTip = reader.uint32();
          break;
        case 6:
          message.material = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GTWing {
    return {
      pillar: isSet(object.pillar) ? Number(object.pillar) : 0,
      pillarMaterial: isSet(object.pillarMaterial)
        ? Number(object.pillarMaterial)
        : 0,
      mainWing: isSet(object.mainWing) ? Number(object.mainWing) : 0,
      mainWingColor: isSet(object.mainWingColor)
        ? Number(object.mainWingColor)
        : 0,
      wingTip: isSet(object.wingTip) ? Number(object.wingTip) : 0,
      material: isSet(object.material) ? Number(object.material) : 0,
    };
  },

  toJSON(message: GTWing): unknown {
    const obj: any = {};
    message.pillar !== undefined && (obj.pillar = Math.round(message.pillar));
    message.pillarMaterial !== undefined &&
      (obj.pillarMaterial = Math.round(message.pillarMaterial));
    message.mainWing !== undefined &&
      (obj.mainWing = Math.round(message.mainWing));
    message.mainWingColor !== undefined &&
      (obj.mainWingColor = Math.round(message.mainWingColor));
    message.wingTip !== undefined &&
      (obj.wingTip = Math.round(message.wingTip));
    message.material !== undefined &&
      (obj.material = Math.round(message.material));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GTWing>, I>>(object: I): GTWing {
    const message = createBaseGTWing();
    message.pillar = object.pillar ?? 0;
    message.pillarMaterial = object.pillarMaterial ?? 0;
    message.mainWing = object.mainWing ?? 0;
    message.mainWingColor = object.mainWingColor ?? 0;
    message.wingTip = object.wingTip ?? 0;
    message.material = object.material ?? 0;
    return message;
  },
};

function createBaseCarItem(): CarItem {
  return { category: 1, itemId: 0, amount: 0 };
}

export const CarItem = {
  encode(
    message: CarItem,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.category !== 1) {
      writer.uint32(8).int32(message.category);
    }
    if (message.itemId !== 0) {
      writer.uint32(16).uint32(message.itemId);
    }
    if (message.amount !== 0) {
      writer.uint32(24).uint32(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CarItem {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCarItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.category = reader.int32() as any;
          break;
        case 2:
          message.itemId = reader.uint32();
          break;
        case 3:
          message.amount = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CarItem {
    return {
      category: isSet(object.category)
        ? itemCategoryFromJSON(object.category)
        : 1,
      itemId: isSet(object.itemId) ? Number(object.itemId) : 0,
      amount: isSet(object.amount) ? Number(object.amount) : 0,
    };
  },

  toJSON(message: CarItem): unknown {
    const obj: any = {};
    message.category !== undefined &&
      (obj.category = itemCategoryToJSON(message.category));
    message.itemId !== undefined && (obj.itemId = Math.round(message.itemId));
    message.amount !== undefined && (obj.amount = Math.round(message.amount));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CarItem>, I>>(object: I): CarItem {
    const message = createBaseCarItem();
    message.category = object.category ?? 1;
    message.itemId = object.itemId ?? 0;
    message.amount = object.amount ?? 0;
    return message;
  },
};

function createBaseCopiedCar(): CopiedCar {
  return { car: undefined, remainingPlayCounts: 0 };
}

export const CopiedCar = {
  encode(
    message: CopiedCar,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.car !== undefined) {
      Car.encode(message.car, writer.uint32(10).fork()).ldelim();
    }
    if (message.remainingPlayCounts !== 0) {
      writer.uint32(16).uint32(message.remainingPlayCounts);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CopiedCar {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCopiedCar();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.car = Car.decode(reader, reader.uint32());
          break;
        case 2:
          message.remainingPlayCounts = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CopiedCar {
    return {
      car: isSet(object.car) ? Car.fromJSON(object.car) : undefined,
      remainingPlayCounts: isSet(object.remainingPlayCounts)
        ? Number(object.remainingPlayCounts)
        : 0,
    };
  },

  toJSON(message: CopiedCar): unknown {
    const obj: any = {};
    message.car !== undefined &&
      (obj.car = message.car ? Car.toJSON(message.car) : undefined);
    message.remainingPlayCounts !== undefined &&
      (obj.remainingPlayCounts = Math.round(message.remainingPlayCounts));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CopiedCar>, I>>(
    object: I
  ): CopiedCar {
    const message = createBaseCopiedCar();
    message.car =
      object.car !== undefined && object.car !== null
        ? Car.fromPartial(object.car)
        : undefined;
    message.remainingPlayCounts = object.remainingPlayCounts ?? 0;
    return message;
  },
};

function createBaseFriendCar(): FriendCar {
  return { car: undefined, friendshipLevel: 0, nonhuman: false };
}

export const FriendCar = {
  encode(
    message: FriendCar,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.car !== undefined) {
      Car.encode(message.car, writer.uint32(10).fork()).ldelim();
    }
    if (message.friendshipLevel !== 0) {
      writer.uint32(16).uint32(message.friendshipLevel);
    }
    if (message.nonhuman === true) {
      writer.uint32(24).bool(message.nonhuman);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FriendCar {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFriendCar();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.car = Car.decode(reader, reader.uint32());
          break;
        case 2:
          message.friendshipLevel = reader.uint32();
          break;
        case 3:
          message.nonhuman = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FriendCar {
    return {
      car: isSet(object.car) ? Car.fromJSON(object.car) : undefined,
      friendshipLevel: isSet(object.friendshipLevel)
        ? Number(object.friendshipLevel)
        : 0,
      nonhuman: isSet(object.nonhuman) ? Boolean(object.nonhuman) : false,
    };
  },

  toJSON(message: FriendCar): unknown {
    const obj: any = {};
    message.car !== undefined &&
      (obj.car = message.car ? Car.toJSON(message.car) : undefined);
    message.friendshipLevel !== undefined &&
      (obj.friendshipLevel = Math.round(message.friendshipLevel));
    message.nonhuman !== undefined && (obj.nonhuman = message.nonhuman);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FriendCar>, I>>(
    object: I
  ): FriendCar {
    const message = createBaseFriendCar();
    message.car =
      object.car !== undefined && object.car !== null
        ? Car.fromPartial(object.car)
        : undefined;
    message.friendshipLevel = object.friendshipLevel ?? 0;
    message.nonhuman = object.nonhuman ?? false;
    return message;
  },
};

function createBaseChallengerCar(): ChallengerCar {
  return { car: undefined, stamp: 0, result: 0, area: 0 };
}

export const ChallengerCar = {
  encode(
    message: ChallengerCar,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.car !== undefined) {
      Car.encode(message.car, writer.uint32(10).fork()).ldelim();
    }
    if (message.stamp !== 0) {
      writer.uint32(24).uint32(message.stamp);
    }
    if (message.result !== 0) {
      writer.uint32(32).sint32(message.result);
    }
    if (message.area !== 0) {
      writer.uint32(40).uint32(message.area);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ChallengerCar {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChallengerCar();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.car = Car.decode(reader, reader.uint32());
          break;
        case 3:
          message.stamp = reader.uint32();
          break;
        case 4:
          message.result = reader.sint32();
          break;
        case 5:
          message.area = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ChallengerCar {
    return {
      car: isSet(object.car) ? Car.fromJSON(object.car) : undefined,
      stamp: isSet(object.stamp) ? Number(object.stamp) : 0,
      result: isSet(object.result) ? Number(object.result) : 0,
      area: isSet(object.area) ? Number(object.area) : 0,
    };
  },

  toJSON(message: ChallengerCar): unknown {
    const obj: any = {};
    message.car !== undefined &&
      (obj.car = message.car ? Car.toJSON(message.car) : undefined);
    message.stamp !== undefined && (obj.stamp = Math.round(message.stamp));
    message.result !== undefined && (obj.result = Math.round(message.result));
    message.area !== undefined && (obj.area = Math.round(message.area));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ChallengerCar>, I>>(
    object: I
  ): ChallengerCar {
    const message = createBaseChallengerCar();
    message.car =
      object.car !== undefined && object.car !== null
        ? Car.fromPartial(object.car)
        : undefined;
    message.stamp = object.stamp ?? 0;
    message.result = object.result ?? 0;
    message.area = object.area ?? 0;
    return message;
  },
};

function createBaseStampTargetCar(): StampTargetCar {
  return { car: undefined, returnCount: 0, locked: false, recommended: false };
}

export const StampTargetCar = {
  encode(
    message: StampTargetCar,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.car !== undefined) {
      Car.encode(message.car, writer.uint32(10).fork()).ldelim();
    }
    if (message.returnCount !== 0) {
      writer.uint32(16).uint32(message.returnCount);
    }
    if (message.locked === true) {
      writer.uint32(24).bool(message.locked);
    }
    if (message.recommended === true) {
      writer.uint32(32).bool(message.recommended);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StampTargetCar {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStampTargetCar();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.car = Car.decode(reader, reader.uint32());
          break;
        case 2:
          message.returnCount = reader.uint32();
          break;
        case 3:
          message.locked = reader.bool();
          break;
        case 4:
          message.recommended = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StampTargetCar {
    return {
      car: isSet(object.car) ? Car.fromJSON(object.car) : undefined,
      returnCount: isSet(object.returnCount) ? Number(object.returnCount) : 0,
      locked: isSet(object.locked) ? Boolean(object.locked) : false,
      recommended: isSet(object.recommended)
        ? Boolean(object.recommended)
        : false,
    };
  },

  toJSON(message: StampTargetCar): unknown {
    const obj: any = {};
    message.car !== undefined &&
      (obj.car = message.car ? Car.toJSON(message.car) : undefined);
    message.returnCount !== undefined &&
      (obj.returnCount = Math.round(message.returnCount));
    message.locked !== undefined && (obj.locked = message.locked);
    message.recommended !== undefined &&
      (obj.recommended = message.recommended);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StampTargetCar>, I>>(
    object: I
  ): StampTargetCar {
    const message = createBaseStampTargetCar();
    message.car =
      object.car !== undefined && object.car !== null
        ? Car.fromPartial(object.car)
        : undefined;
    message.returnCount = object.returnCount ?? 0;
    message.locked = object.locked ?? false;
    message.recommended = object.recommended ?? false;
    return message;
  },
};

function createBaseBookmarkedCar(): BookmarkedCar {
  return { car: undefined, returnCount: 0 };
}

export const BookmarkedCar = {
  encode(
    message: BookmarkedCar,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.car !== undefined) {
      Car.encode(message.car, writer.uint32(10).fork()).ldelim();
    }
    if (message.returnCount !== 0) {
      writer.uint32(16).uint32(message.returnCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BookmarkedCar {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBookmarkedCar();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.car = Car.decode(reader, reader.uint32());
          break;
        case 2:
          message.returnCount = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BookmarkedCar {
    return {
      car: isSet(object.car) ? Car.fromJSON(object.car) : undefined,
      returnCount: isSet(object.returnCount) ? Number(object.returnCount) : 0,
    };
  },

  toJSON(message: BookmarkedCar): unknown {
    const obj: any = {};
    message.car !== undefined &&
      (obj.car = message.car ? Car.toJSON(message.car) : undefined);
    message.returnCount !== undefined &&
      (obj.returnCount = Math.round(message.returnCount));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BookmarkedCar>, I>>(
    object: I
  ): BookmarkedCar {
    const message = createBaseBookmarkedCar();
    message.car =
      object.car !== undefined && object.car !== null
        ? Car.fromPartial(object.car)
        : undefined;
    message.returnCount = object.returnCount ?? 0;
    return message;
  },
};

function createBasePreviousVersionStampTargetCar(): PreviousVersionStampTargetCar {
  return { car: undefined, returnCount: 0, currentCarId: 0 };
}

export const PreviousVersionStampTargetCar = {
  encode(
    message: PreviousVersionStampTargetCar,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.car !== undefined) {
      Car.encode(message.car, writer.uint32(10).fork()).ldelim();
    }
    if (message.returnCount !== 0) {
      writer.uint32(24).uint32(message.returnCount);
    }
    if (message.currentCarId !== 0) {
      writer.uint32(16).uint32(message.currentCarId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): PreviousVersionStampTargetCar {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePreviousVersionStampTargetCar();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.car = Car.decode(reader, reader.uint32());
          break;
        case 3:
          message.returnCount = reader.uint32();
          break;
        case 2:
          message.currentCarId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PreviousVersionStampTargetCar {
    return {
      car: isSet(object.car) ? Car.fromJSON(object.car) : undefined,
      returnCount: isSet(object.returnCount) ? Number(object.returnCount) : 0,
      currentCarId: isSet(object.currentCarId)
        ? Number(object.currentCarId)
        : 0,
    };
  },

  toJSON(message: PreviousVersionStampTargetCar): unknown {
    const obj: any = {};
    message.car !== undefined &&
      (obj.car = message.car ? Car.toJSON(message.car) : undefined);
    message.returnCount !== undefined &&
      (obj.returnCount = Math.round(message.returnCount));
    message.currentCarId !== undefined &&
      (obj.currentCarId = Math.round(message.currentCarId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PreviousVersionStampTargetCar>, I>>(
    object: I
  ): PreviousVersionStampTargetCar {
    const message = createBasePreviousVersionStampTargetCar();
    message.car =
      object.car !== undefined && object.car !== null
        ? Car.fromPartial(object.car)
        : undefined;
    message.returnCount = object.returnCount ?? 0;
    message.currentCarId = object.currentCarId ?? 0;
    return message;
  },
};

function createBaseGhostCar(): GhostCar {
  return {
    car: undefined,
    area: 0,
    ramp: 0,
    path: 0,
    nonhuman: false,
    type: 1,
    trailId: 0,
  };
}

export const GhostCar = {
  encode(
    message: GhostCar,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.car !== undefined) {
      Car.encode(message.car, writer.uint32(10).fork()).ldelim();
    }
    if (message.area !== 0) {
      writer.uint32(16).uint32(message.area);
    }
    if (message.ramp !== 0) {
      writer.uint32(24).uint32(message.ramp);
    }
    if (message.path !== 0) {
      writer.uint32(64).uint32(message.path);
    }
    if (message.nonhuman === true) {
      writer.uint32(32).bool(message.nonhuman);
    }
    if (message.type !== 1) {
      writer.uint32(48).int32(message.type);
    }
    if (message.trailId !== 0) {
      writer.uint32(56).uint64(message.trailId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GhostCar {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGhostCar();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.car = Car.decode(reader, reader.uint32());
          break;
        case 2:
          message.area = reader.uint32();
          break;
        case 3:
          message.ramp = reader.uint32();
          break;
        case 8:
          message.path = reader.uint32();
          break;
        case 4:
          message.nonhuman = reader.bool();
          break;
        case 6:
          message.type = reader.int32() as any;
          break;
        case 7:
          message.trailId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GhostCar {
    return {
      car: isSet(object.car) ? Car.fromJSON(object.car) : undefined,
      area: isSet(object.area) ? Number(object.area) : 0,
      ramp: isSet(object.ramp) ? Number(object.ramp) : 0,
      path: isSet(object.path) ? Number(object.path) : 0,
      nonhuman: isSet(object.nonhuman) ? Boolean(object.nonhuman) : false,
      type: isSet(object.type) ? ghostTypeFromJSON(object.type) : 1,
      trailId: isSet(object.trailId) ? Number(object.trailId) : 0,
    };
  },

  toJSON(message: GhostCar): unknown {
    const obj: any = {};
    message.car !== undefined &&
      (obj.car = message.car ? Car.toJSON(message.car) : undefined);
    message.area !== undefined && (obj.area = Math.round(message.area));
    message.ramp !== undefined && (obj.ramp = Math.round(message.ramp));
    message.path !== undefined && (obj.path = Math.round(message.path));
    message.nonhuman !== undefined && (obj.nonhuman = message.nonhuman);
    message.type !== undefined && (obj.type = ghostTypeToJSON(message.type));
    message.trailId !== undefined &&
      (obj.trailId = Math.round(message.trailId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GhostCar>, I>>(object: I): GhostCar {
    const message = createBaseGhostCar();
    message.car =
      object.car !== undefined && object.car !== null
        ? Car.fromPartial(object.car)
        : undefined;
    message.area = object.area ?? 0;
    message.ramp = object.ramp ?? 0;
    message.path = object.path ?? 0;
    message.nonhuman = object.nonhuman ?? false;
    message.type = object.type ?? 1;
    message.trailId = object.trailId ?? 0;
    return message;
  },
};

function createBasePlace(): Place {
  return { placeId: "", shopName: "", regionId: 0, country: "" };
}

export const Place = {
  encode(message: Place, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.placeId !== "") {
      writer.uint32(10).string(message.placeId);
    }
    if (message.shopName !== "") {
      writer.uint32(18).string(message.shopName);
    }
    if (message.regionId !== 0) {
      writer.uint32(24).uint32(message.regionId);
    }
    if (message.country !== "") {
      writer.uint32(34).string(message.country);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Place {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlace();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.placeId = reader.string();
          break;
        case 2:
          message.shopName = reader.string();
          break;
        case 3:
          message.regionId = reader.uint32();
          break;
        case 4:
          message.country = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Place {
    return {
      placeId: isSet(object.placeId) ? String(object.placeId) : "",
      shopName: isSet(object.shopName) ? String(object.shopName) : "",
      regionId: isSet(object.regionId) ? Number(object.regionId) : 0,
      country: isSet(object.country) ? String(object.country) : "",
    };
  },

  toJSON(message: Place): unknown {
    const obj: any = {};
    message.placeId !== undefined && (obj.placeId = message.placeId);
    message.shopName !== undefined && (obj.shopName = message.shopName);
    message.regionId !== undefined &&
      (obj.regionId = Math.round(message.regionId));
    message.country !== undefined && (obj.country = message.country);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Place>, I>>(object: I): Place {
    const message = createBasePlace();
    message.placeId = object.placeId ?? "";
    message.shopName = object.shopName ?? "";
    message.regionId = object.regionId ?? 0;
    message.country = object.country ?? "";
    return message;
  },
};

function createBaseSystemSetting(): SystemSetting {
  return {
    mCoinChute: 0,
    mBuyCardCost: 0,
    mGameCost: 0,
    mContinueCost: 0,
    mFullCourseCost: 0,
    mFreePlay: false,
    mPcbId: 0,
    mIcCardRw: false,
    mIcCardVender: false,
    mMgCardRw: false,
    mForceFeedback: false,
    mWinsAndRemains: false,
    mEventMode: 0,
    mEventModeDist: false,
    mCloseType: 0,
    mCloseSun: 0,
    mCloseMon: 0,
    mCloseTue: 0,
    mCloseWed: 0,
    mCloseThu: 0,
    mCloseFri: 0,
    mCloseSat: 0,
    mCloseDay: 0,
    mTouchPanel: false,
    mGameVol: 0,
    mAttractVol: 0,
    mCalibHandleCenter: 0,
    mCalibAccelCenter: 0,
    mCalibBrakeCenter: 0,
    mCalibTouchLeft: 0,
    mCalibTouchRight: 0,
    mCalibTouchTop: 0,
    mCalibTouchBottom: 0,
  };
}

export const SystemSetting = {
  encode(
    message: SystemSetting,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.mCoinChute !== 0) {
      writer.uint32(8).uint32(message.mCoinChute);
    }
    if (message.mBuyCardCost !== 0) {
      writer.uint32(16).uint32(message.mBuyCardCost);
    }
    if (message.mGameCost !== 0) {
      writer.uint32(24).uint32(message.mGameCost);
    }
    if (message.mContinueCost !== 0) {
      writer.uint32(32).uint32(message.mContinueCost);
    }
    if (message.mFullCourseCost !== 0) {
      writer.uint32(40).uint32(message.mFullCourseCost);
    }
    if (message.mFreePlay === true) {
      writer.uint32(48).bool(message.mFreePlay);
    }
    if (message.mPcbId !== 0) {
      writer.uint32(56).uint32(message.mPcbId);
    }
    if (message.mIcCardRw === true) {
      writer.uint32(64).bool(message.mIcCardRw);
    }
    if (message.mIcCardVender === true) {
      writer.uint32(72).bool(message.mIcCardVender);
    }
    if (message.mMgCardRw === true) {
      writer.uint32(80).bool(message.mMgCardRw);
    }
    if (message.mForceFeedback === true) {
      writer.uint32(88).bool(message.mForceFeedback);
    }
    if (message.mWinsAndRemains === true) {
      writer.uint32(96).bool(message.mWinsAndRemains);
    }
    if (message.mEventMode !== 0) {
      writer.uint32(104).uint32(message.mEventMode);
    }
    if (message.mEventModeDist === true) {
      writer.uint32(112).bool(message.mEventModeDist);
    }
    if (message.mCloseType !== 0) {
      writer.uint32(120).uint32(message.mCloseType);
    }
    if (message.mCloseSun !== 0) {
      writer.uint32(128).uint32(message.mCloseSun);
    }
    if (message.mCloseMon !== 0) {
      writer.uint32(136).uint32(message.mCloseMon);
    }
    if (message.mCloseTue !== 0) {
      writer.uint32(144).uint32(message.mCloseTue);
    }
    if (message.mCloseWed !== 0) {
      writer.uint32(152).uint32(message.mCloseWed);
    }
    if (message.mCloseThu !== 0) {
      writer.uint32(160).uint32(message.mCloseThu);
    }
    if (message.mCloseFri !== 0) {
      writer.uint32(168).uint32(message.mCloseFri);
    }
    if (message.mCloseSat !== 0) {
      writer.uint32(176).uint32(message.mCloseSat);
    }
    if (message.mCloseDay !== 0) {
      writer.uint32(184).uint32(message.mCloseDay);
    }
    if (message.mTouchPanel === true) {
      writer.uint32(192).bool(message.mTouchPanel);
    }
    if (message.mGameVol !== 0) {
      writer.uint32(200).uint32(message.mGameVol);
    }
    if (message.mAttractVol !== 0) {
      writer.uint32(208).uint32(message.mAttractVol);
    }
    if (message.mCalibHandleCenter !== 0) {
      writer.uint32(216).uint32(message.mCalibHandleCenter);
    }
    if (message.mCalibAccelCenter !== 0) {
      writer.uint32(224).uint32(message.mCalibAccelCenter);
    }
    if (message.mCalibBrakeCenter !== 0) {
      writer.uint32(232).uint32(message.mCalibBrakeCenter);
    }
    if (message.mCalibTouchLeft !== 0) {
      writer.uint32(240).uint32(message.mCalibTouchLeft);
    }
    if (message.mCalibTouchRight !== 0) {
      writer.uint32(248).uint32(message.mCalibTouchRight);
    }
    if (message.mCalibTouchTop !== 0) {
      writer.uint32(256).uint32(message.mCalibTouchTop);
    }
    if (message.mCalibTouchBottom !== 0) {
      writer.uint32(264).uint32(message.mCalibTouchBottom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SystemSetting {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSystemSetting();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mCoinChute = reader.uint32();
          break;
        case 2:
          message.mBuyCardCost = reader.uint32();
          break;
        case 3:
          message.mGameCost = reader.uint32();
          break;
        case 4:
          message.mContinueCost = reader.uint32();
          break;
        case 5:
          message.mFullCourseCost = reader.uint32();
          break;
        case 6:
          message.mFreePlay = reader.bool();
          break;
        case 7:
          message.mPcbId = reader.uint32();
          break;
        case 8:
          message.mIcCardRw = reader.bool();
          break;
        case 9:
          message.mIcCardVender = reader.bool();
          break;
        case 10:
          message.mMgCardRw = reader.bool();
          break;
        case 11:
          message.mForceFeedback = reader.bool();
          break;
        case 12:
          message.mWinsAndRemains = reader.bool();
          break;
        case 13:
          message.mEventMode = reader.uint32();
          break;
        case 14:
          message.mEventModeDist = reader.bool();
          break;
        case 15:
          message.mCloseType = reader.uint32();
          break;
        case 16:
          message.mCloseSun = reader.uint32();
          break;
        case 17:
          message.mCloseMon = reader.uint32();
          break;
        case 18:
          message.mCloseTue = reader.uint32();
          break;
        case 19:
          message.mCloseWed = reader.uint32();
          break;
        case 20:
          message.mCloseThu = reader.uint32();
          break;
        case 21:
          message.mCloseFri = reader.uint32();
          break;
        case 22:
          message.mCloseSat = reader.uint32();
          break;
        case 23:
          message.mCloseDay = reader.uint32();
          break;
        case 24:
          message.mTouchPanel = reader.bool();
          break;
        case 25:
          message.mGameVol = reader.uint32();
          break;
        case 26:
          message.mAttractVol = reader.uint32();
          break;
        case 27:
          message.mCalibHandleCenter = reader.uint32();
          break;
        case 28:
          message.mCalibAccelCenter = reader.uint32();
          break;
        case 29:
          message.mCalibBrakeCenter = reader.uint32();
          break;
        case 30:
          message.mCalibTouchLeft = reader.uint32();
          break;
        case 31:
          message.mCalibTouchRight = reader.uint32();
          break;
        case 32:
          message.mCalibTouchTop = reader.uint32();
          break;
        case 33:
          message.mCalibTouchBottom = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SystemSetting {
    return {
      mCoinChute: isSet(object.mCoinChute) ? Number(object.mCoinChute) : 0,
      mBuyCardCost: isSet(object.mBuyCardCost)
        ? Number(object.mBuyCardCost)
        : 0,
      mGameCost: isSet(object.mGameCost) ? Number(object.mGameCost) : 0,
      mContinueCost: isSet(object.mContinueCost)
        ? Number(object.mContinueCost)
        : 0,
      mFullCourseCost: isSet(object.mFullCourseCost)
        ? Number(object.mFullCourseCost)
        : 0,
      mFreePlay: isSet(object.mFreePlay) ? Boolean(object.mFreePlay) : false,
      mPcbId: isSet(object.mPcbId) ? Number(object.mPcbId) : 0,
      mIcCardRw: isSet(object.mIcCardRw) ? Boolean(object.mIcCardRw) : false,
      mIcCardVender: isSet(object.mIcCardVender)
        ? Boolean(object.mIcCardVender)
        : false,
      mMgCardRw: isSet(object.mMgCardRw) ? Boolean(object.mMgCardRw) : false,
      mForceFeedback: isSet(object.mForceFeedback)
        ? Boolean(object.mForceFeedback)
        : false,
      mWinsAndRemains: isSet(object.mWinsAndRemains)
        ? Boolean(object.mWinsAndRemains)
        : false,
      mEventMode: isSet(object.mEventMode) ? Number(object.mEventMode) : 0,
      mEventModeDist: isSet(object.mEventModeDist)
        ? Boolean(object.mEventModeDist)
        : false,
      mCloseType: isSet(object.mCloseType) ? Number(object.mCloseType) : 0,
      mCloseSun: isSet(object.mCloseSun) ? Number(object.mCloseSun) : 0,
      mCloseMon: isSet(object.mCloseMon) ? Number(object.mCloseMon) : 0,
      mCloseTue: isSet(object.mCloseTue) ? Number(object.mCloseTue) : 0,
      mCloseWed: isSet(object.mCloseWed) ? Number(object.mCloseWed) : 0,
      mCloseThu: isSet(object.mCloseThu) ? Number(object.mCloseThu) : 0,
      mCloseFri: isSet(object.mCloseFri) ? Number(object.mCloseFri) : 0,
      mCloseSat: isSet(object.mCloseSat) ? Number(object.mCloseSat) : 0,
      mCloseDay: isSet(object.mCloseDay) ? Number(object.mCloseDay) : 0,
      mTouchPanel: isSet(object.mTouchPanel)
        ? Boolean(object.mTouchPanel)
        : false,
      mGameVol: isSet(object.mGameVol) ? Number(object.mGameVol) : 0,
      mAttractVol: isSet(object.mAttractVol) ? Number(object.mAttractVol) : 0,
      mCalibHandleCenter: isSet(object.mCalibHandleCenter)
        ? Number(object.mCalibHandleCenter)
        : 0,
      mCalibAccelCenter: isSet(object.mCalibAccelCenter)
        ? Number(object.mCalibAccelCenter)
        : 0,
      mCalibBrakeCenter: isSet(object.mCalibBrakeCenter)
        ? Number(object.mCalibBrakeCenter)
        : 0,
      mCalibTouchLeft: isSet(object.mCalibTouchLeft)
        ? Number(object.mCalibTouchLeft)
        : 0,
      mCalibTouchRight: isSet(object.mCalibTouchRight)
        ? Number(object.mCalibTouchRight)
        : 0,
      mCalibTouchTop: isSet(object.mCalibTouchTop)
        ? Number(object.mCalibTouchTop)
        : 0,
      mCalibTouchBottom: isSet(object.mCalibTouchBottom)
        ? Number(object.mCalibTouchBottom)
        : 0,
    };
  },

  toJSON(message: SystemSetting): unknown {
    const obj: any = {};
    message.mCoinChute !== undefined &&
      (obj.mCoinChute = Math.round(message.mCoinChute));
    message.mBuyCardCost !== undefined &&
      (obj.mBuyCardCost = Math.round(message.mBuyCardCost));
    message.mGameCost !== undefined &&
      (obj.mGameCost = Math.round(message.mGameCost));
    message.mContinueCost !== undefined &&
      (obj.mContinueCost = Math.round(message.mContinueCost));
    message.mFullCourseCost !== undefined &&
      (obj.mFullCourseCost = Math.round(message.mFullCourseCost));
    message.mFreePlay !== undefined && (obj.mFreePlay = message.mFreePlay);
    message.mPcbId !== undefined && (obj.mPcbId = Math.round(message.mPcbId));
    message.mIcCardRw !== undefined && (obj.mIcCardRw = message.mIcCardRw);
    message.mIcCardVender !== undefined &&
      (obj.mIcCardVender = message.mIcCardVender);
    message.mMgCardRw !== undefined && (obj.mMgCardRw = message.mMgCardRw);
    message.mForceFeedback !== undefined &&
      (obj.mForceFeedback = message.mForceFeedback);
    message.mWinsAndRemains !== undefined &&
      (obj.mWinsAndRemains = message.mWinsAndRemains);
    message.mEventMode !== undefined &&
      (obj.mEventMode = Math.round(message.mEventMode));
    message.mEventModeDist !== undefined &&
      (obj.mEventModeDist = message.mEventModeDist);
    message.mCloseType !== undefined &&
      (obj.mCloseType = Math.round(message.mCloseType));
    message.mCloseSun !== undefined &&
      (obj.mCloseSun = Math.round(message.mCloseSun));
    message.mCloseMon !== undefined &&
      (obj.mCloseMon = Math.round(message.mCloseMon));
    message.mCloseTue !== undefined &&
      (obj.mCloseTue = Math.round(message.mCloseTue));
    message.mCloseWed !== undefined &&
      (obj.mCloseWed = Math.round(message.mCloseWed));
    message.mCloseThu !== undefined &&
      (obj.mCloseThu = Math.round(message.mCloseThu));
    message.mCloseFri !== undefined &&
      (obj.mCloseFri = Math.round(message.mCloseFri));
    message.mCloseSat !== undefined &&
      (obj.mCloseSat = Math.round(message.mCloseSat));
    message.mCloseDay !== undefined &&
      (obj.mCloseDay = Math.round(message.mCloseDay));
    message.mTouchPanel !== undefined &&
      (obj.mTouchPanel = message.mTouchPanel);
    message.mGameVol !== undefined &&
      (obj.mGameVol = Math.round(message.mGameVol));
    message.mAttractVol !== undefined &&
      (obj.mAttractVol = Math.round(message.mAttractVol));
    message.mCalibHandleCenter !== undefined &&
      (obj.mCalibHandleCenter = Math.round(message.mCalibHandleCenter));
    message.mCalibAccelCenter !== undefined &&
      (obj.mCalibAccelCenter = Math.round(message.mCalibAccelCenter));
    message.mCalibBrakeCenter !== undefined &&
      (obj.mCalibBrakeCenter = Math.round(message.mCalibBrakeCenter));
    message.mCalibTouchLeft !== undefined &&
      (obj.mCalibTouchLeft = Math.round(message.mCalibTouchLeft));
    message.mCalibTouchRight !== undefined &&
      (obj.mCalibTouchRight = Math.round(message.mCalibTouchRight));
    message.mCalibTouchTop !== undefined &&
      (obj.mCalibTouchTop = Math.round(message.mCalibTouchTop));
    message.mCalibTouchBottom !== undefined &&
      (obj.mCalibTouchBottom = Math.round(message.mCalibTouchBottom));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SystemSetting>, I>>(
    object: I
  ): SystemSetting {
    const message = createBaseSystemSetting();
    message.mCoinChute = object.mCoinChute ?? 0;
    message.mBuyCardCost = object.mBuyCardCost ?? 0;
    message.mGameCost = object.mGameCost ?? 0;
    message.mContinueCost = object.mContinueCost ?? 0;
    message.mFullCourseCost = object.mFullCourseCost ?? 0;
    message.mFreePlay = object.mFreePlay ?? false;
    message.mPcbId = object.mPcbId ?? 0;
    message.mIcCardRw = object.mIcCardRw ?? false;
    message.mIcCardVender = object.mIcCardVender ?? false;
    message.mMgCardRw = object.mMgCardRw ?? false;
    message.mForceFeedback = object.mForceFeedback ?? false;
    message.mWinsAndRemains = object.mWinsAndRemains ?? false;
    message.mEventMode = object.mEventMode ?? 0;
    message.mEventModeDist = object.mEventModeDist ?? false;
    message.mCloseType = object.mCloseType ?? 0;
    message.mCloseSun = object.mCloseSun ?? 0;
    message.mCloseMon = object.mCloseMon ?? 0;
    message.mCloseTue = object.mCloseTue ?? 0;
    message.mCloseWed = object.mCloseWed ?? 0;
    message.mCloseThu = object.mCloseThu ?? 0;
    message.mCloseFri = object.mCloseFri ?? 0;
    message.mCloseSat = object.mCloseSat ?? 0;
    message.mCloseDay = object.mCloseDay ?? 0;
    message.mTouchPanel = object.mTouchPanel ?? false;
    message.mGameVol = object.mGameVol ?? 0;
    message.mAttractVol = object.mAttractVol ?? 0;
    message.mCalibHandleCenter = object.mCalibHandleCenter ?? 0;
    message.mCalibAccelCenter = object.mCalibAccelCenter ?? 0;
    message.mCalibBrakeCenter = object.mCalibBrakeCenter ?? 0;
    message.mCalibTouchLeft = object.mCalibTouchLeft ?? 0;
    message.mCalibTouchRight = object.mCalibTouchRight ?? 0;
    message.mCalibTouchTop = object.mCalibTouchTop ?? 0;
    message.mCalibTouchBottom = object.mCalibTouchBottom ?? 0;
    return message;
  },
};

function createBaseGhostCompetitionSchedule(): GhostCompetitionSchedule {
  return {
    competitionId: 0,
    qualifyingPeriodStartAt: 0,
    qualifyingPeriodCloseAt: 0,
    competitionStartAt: 0,
    competitionCloseAt: 0,
    competitionEndAt: 0,
    lengthOfPeriod: 0,
    lengthOfInterval: 0,
    area: 0,
    minigamePatternId: 0,
  };
}

export const GhostCompetitionSchedule = {
  encode(
    message: GhostCompetitionSchedule,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.competitionId !== 0) {
      writer.uint32(8).uint32(message.competitionId);
    }
    if (message.qualifyingPeriodStartAt !== 0) {
      writer.uint32(16).uint32(message.qualifyingPeriodStartAt);
    }
    if (message.qualifyingPeriodCloseAt !== 0) {
      writer.uint32(24).uint32(message.qualifyingPeriodCloseAt);
    }
    if (message.competitionStartAt !== 0) {
      writer.uint32(32).uint32(message.competitionStartAt);
    }
    if (message.competitionCloseAt !== 0) {
      writer.uint32(40).uint32(message.competitionCloseAt);
    }
    if (message.competitionEndAt !== 0) {
      writer.uint32(48).uint32(message.competitionEndAt);
    }
    if (message.lengthOfPeriod !== 0) {
      writer.uint32(56).uint32(message.lengthOfPeriod);
    }
    if (message.lengthOfInterval !== 0) {
      writer.uint32(64).uint32(message.lengthOfInterval);
    }
    if (message.area !== 0) {
      writer.uint32(72).uint32(message.area);
    }
    if (message.minigamePatternId !== 0) {
      writer.uint32(80).uint32(message.minigamePatternId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GhostCompetitionSchedule {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGhostCompetitionSchedule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.competitionId = reader.uint32();
          break;
        case 2:
          message.qualifyingPeriodStartAt = reader.uint32();
          break;
        case 3:
          message.qualifyingPeriodCloseAt = reader.uint32();
          break;
        case 4:
          message.competitionStartAt = reader.uint32();
          break;
        case 5:
          message.competitionCloseAt = reader.uint32();
          break;
        case 6:
          message.competitionEndAt = reader.uint32();
          break;
        case 7:
          message.lengthOfPeriod = reader.uint32();
          break;
        case 8:
          message.lengthOfInterval = reader.uint32();
          break;
        case 9:
          message.area = reader.uint32();
          break;
        case 10:
          message.minigamePatternId = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GhostCompetitionSchedule {
    return {
      competitionId: isSet(object.competitionId)
        ? Number(object.competitionId)
        : 0,
      qualifyingPeriodStartAt: isSet(object.qualifyingPeriodStartAt)
        ? Number(object.qualifyingPeriodStartAt)
        : 0,
      qualifyingPeriodCloseAt: isSet(object.qualifyingPeriodCloseAt)
        ? Number(object.qualifyingPeriodCloseAt)
        : 0,
      competitionStartAt: isSet(object.competitionStartAt)
        ? Number(object.competitionStartAt)
        : 0,
      competitionCloseAt: isSet(object.competitionCloseAt)
        ? Number(object.competitionCloseAt)
        : 0,
      competitionEndAt: isSet(object.competitionEndAt)
        ? Number(object.competitionEndAt)
        : 0,
      lengthOfPeriod: isSet(object.lengthOfPeriod)
        ? Number(object.lengthOfPeriod)
        : 0,
      lengthOfInterval: isSet(object.lengthOfInterval)
        ? Number(object.lengthOfInterval)
        : 0,
      area: isSet(object.area) ? Number(object.area) : 0,
      minigamePatternId: isSet(object.minigamePatternId)
        ? Number(object.minigamePatternId)
        : 0,
    };
  },

  toJSON(message: GhostCompetitionSchedule): unknown {
    const obj: any = {};
    message.competitionId !== undefined &&
      (obj.competitionId = Math.round(message.competitionId));
    message.qualifyingPeriodStartAt !== undefined &&
      (obj.qualifyingPeriodStartAt = Math.round(
        message.qualifyingPeriodStartAt
      ));
    message.qualifyingPeriodCloseAt !== undefined &&
      (obj.qualifyingPeriodCloseAt = Math.round(
        message.qualifyingPeriodCloseAt
      ));
    message.competitionStartAt !== undefined &&
      (obj.competitionStartAt = Math.round(message.competitionStartAt));
    message.competitionCloseAt !== undefined &&
      (obj.competitionCloseAt = Math.round(message.competitionCloseAt));
    message.competitionEndAt !== undefined &&
      (obj.competitionEndAt = Math.round(message.competitionEndAt));
    message.lengthOfPeriod !== undefined &&
      (obj.lengthOfPeriod = Math.round(message.lengthOfPeriod));
    message.lengthOfInterval !== undefined &&
      (obj.lengthOfInterval = Math.round(message.lengthOfInterval));
    message.area !== undefined && (obj.area = Math.round(message.area));
    message.minigamePatternId !== undefined &&
      (obj.minigamePatternId = Math.round(message.minigamePatternId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GhostCompetitionSchedule>, I>>(
    object: I
  ): GhostCompetitionSchedule {
    const message = createBaseGhostCompetitionSchedule();
    message.competitionId = object.competitionId ?? 0;
    message.qualifyingPeriodStartAt = object.qualifyingPeriodStartAt ?? 0;
    message.qualifyingPeriodCloseAt = object.qualifyingPeriodCloseAt ?? 0;
    message.competitionStartAt = object.competitionStartAt ?? 0;
    message.competitionCloseAt = object.competitionCloseAt ?? 0;
    message.competitionEndAt = object.competitionEndAt ?? 0;
    message.lengthOfPeriod = object.lengthOfPeriod ?? 0;
    message.lengthOfInterval = object.lengthOfInterval ?? 0;
    message.area = object.area ?? 0;
    message.minigamePatternId = object.minigamePatternId ?? 0;
    return message;
  },
};

function createBaseGhostCompetitionParameter(): GhostCompetitionParameter {
  return { parameters1: [], parameters2: false };
}

export const GhostCompetitionParameter = {
  encode(
    message: GhostCompetitionParameter,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.parameters1) {
      writer.float(v);
    }
    writer.ldelim();
    if (message.parameters2 === true) {
      writer.uint32(16).bool(message.parameters2);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GhostCompetitionParameter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGhostCompetitionParameter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.parameters1.push(reader.float());
            }
          } else {
            message.parameters1.push(reader.float());
          }
          break;
        case 2:
          message.parameters2 = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GhostCompetitionParameter {
    return {
      parameters1: Array.isArray(object?.parameters1)
        ? object.parameters1.map((e: any) => Number(e))
        : [],
      parameters2: isSet(object.parameters2)
        ? Boolean(object.parameters2)
        : false,
    };
  },

  toJSON(message: GhostCompetitionParameter): unknown {
    const obj: any = {};
    if (message.parameters1) {
      obj.parameters1 = message.parameters1.map((e) => e);
    } else {
      obj.parameters1 = [];
    }
    message.parameters2 !== undefined &&
      (obj.parameters2 = message.parameters2);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GhostCompetitionParameter>, I>>(
    object: I
  ): GhostCompetitionParameter {
    const message = createBaseGhostCompetitionParameter();
    message.parameters1 = object.parameters1?.map((e) => e) || [];
    message.parameters2 = object.parameters2 ?? false;
    return message;
  },
};

function createBaseTransferNotice(): TransferNotice {
  return {
    needToSeeTransferred: false,
    totalMaxiGold: 0,
    numOfPorscheCars: 0,
    porscheModels: [],
    hasR35: false,
  };
}

export const TransferNotice = {
  encode(
    message: TransferNotice,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.needToSeeTransferred === true) {
      writer.uint32(8).bool(message.needToSeeTransferred);
    }
    if (message.totalMaxiGold !== 0) {
      writer.uint32(16).uint32(message.totalMaxiGold);
    }
    if (message.numOfPorscheCars !== 0) {
      writer.uint32(24).uint32(message.numOfPorscheCars);
    }
    writer.uint32(34).fork();
    for (const v of message.porscheModels) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.hasR35 === true) {
      writer.uint32(40).bool(message.hasR35);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TransferNotice {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransferNotice();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.needToSeeTransferred = reader.bool();
          break;
        case 2:
          message.totalMaxiGold = reader.uint32();
          break;
        case 3:
          message.numOfPorscheCars = reader.uint32();
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.porscheModels.push(reader.uint32());
            }
          } else {
            message.porscheModels.push(reader.uint32());
          }
          break;
        case 5:
          message.hasR35 = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TransferNotice {
    return {
      needToSeeTransferred: isSet(object.needToSeeTransferred)
        ? Boolean(object.needToSeeTransferred)
        : false,
      totalMaxiGold: isSet(object.totalMaxiGold)
        ? Number(object.totalMaxiGold)
        : 0,
      numOfPorscheCars: isSet(object.numOfPorscheCars)
        ? Number(object.numOfPorscheCars)
        : 0,
      porscheModels: Array.isArray(object?.porscheModels)
        ? object.porscheModels.map((e: any) => Number(e))
        : [],
      hasR35: isSet(object.hasR35) ? Boolean(object.hasR35) : false,
    };
  },

  toJSON(message: TransferNotice): unknown {
    const obj: any = {};
    message.needToSeeTransferred !== undefined &&
      (obj.needToSeeTransferred = message.needToSeeTransferred);
    message.totalMaxiGold !== undefined &&
      (obj.totalMaxiGold = Math.round(message.totalMaxiGold));
    message.numOfPorscheCars !== undefined &&
      (obj.numOfPorscheCars = Math.round(message.numOfPorscheCars));
    if (message.porscheModels) {
      obj.porscheModels = message.porscheModels.map((e) => Math.round(e));
    } else {
      obj.porscheModels = [];
    }
    message.hasR35 !== undefined && (obj.hasR35 = message.hasR35);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TransferNotice>, I>>(
    object: I
  ): TransferNotice {
    const message = createBaseTransferNotice();
    message.needToSeeTransferred = object.needToSeeTransferred ?? false;
    message.totalMaxiGold = object.totalMaxiGold ?? 0;
    message.numOfPorscheCars = object.numOfPorscheCars ?? 0;
    message.porscheModels = object.porscheModels?.map((e) => e) || [];
    message.hasR35 = object.hasR35 ?? false;
    return message;
  },
};

function createBaseGameFeatureVersion(): GameFeatureVersion {
  return { version: 0, year: 0, month: 0, pluses: 0, releaseAt: 0 };
}

export const GameFeatureVersion = {
  encode(
    message: GameFeatureVersion,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.version !== 0) {
      writer.uint32(8).uint32(message.version);
    }
    if (message.year !== 0) {
      writer.uint32(16).uint32(message.year);
    }
    if (message.month !== 0) {
      writer.uint32(24).uint32(message.month);
    }
    if (message.pluses !== 0) {
      writer.uint32(32).uint32(message.pluses);
    }
    if (message.releaseAt !== 0) {
      writer.uint32(40).uint32(message.releaseAt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GameFeatureVersion {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGameFeatureVersion();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.uint32();
          break;
        case 2:
          message.year = reader.uint32();
          break;
        case 3:
          message.month = reader.uint32();
          break;
        case 4:
          message.pluses = reader.uint32();
          break;
        case 5:
          message.releaseAt = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GameFeatureVersion {
    return {
      version: isSet(object.version) ? Number(object.version) : 0,
      year: isSet(object.year) ? Number(object.year) : 0,
      month: isSet(object.month) ? Number(object.month) : 0,
      pluses: isSet(object.pluses) ? Number(object.pluses) : 0,
      releaseAt: isSet(object.releaseAt) ? Number(object.releaseAt) : 0,
    };
  },

  toJSON(message: GameFeatureVersion): unknown {
    const obj: any = {};
    message.version !== undefined &&
      (obj.version = Math.round(message.version));
    message.year !== undefined && (obj.year = Math.round(message.year));
    message.month !== undefined && (obj.month = Math.round(message.month));
    message.pluses !== undefined && (obj.pluses = Math.round(message.pluses));
    message.releaseAt !== undefined &&
      (obj.releaseAt = Math.round(message.releaseAt));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GameFeatureVersion>, I>>(
    object: I
  ): GameFeatureVersion {
    const message = createBaseGameFeatureVersion();
    message.version = object.version ?? 0;
    message.year = object.year ?? 0;
    message.month = object.month ?? 0;
    message.pluses = object.pluses ?? 0;
    message.releaseAt = object.releaseAt ?? 0;
    return message;
  },
};

function createBaseScratchSheet(): ScratchSheet {
  return { squares: [] };
}

export const ScratchSheet = {
  encode(
    message: ScratchSheet,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.squares) {
      ScratchSheet_ScratchSquare.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ScratchSheet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScratchSheet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.squares.push(
            ScratchSheet_ScratchSquare.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ScratchSheet {
    return {
      squares: Array.isArray(object?.squares)
        ? object.squares.map((e: any) => ScratchSheet_ScratchSquare.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ScratchSheet): unknown {
    const obj: any = {};
    if (message.squares) {
      obj.squares = message.squares.map((e) =>
        e ? ScratchSheet_ScratchSquare.toJSON(e) : undefined
      );
    } else {
      obj.squares = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ScratchSheet>, I>>(
    object: I
  ): ScratchSheet {
    const message = createBaseScratchSheet();
    message.squares =
      object.squares?.map((e) => ScratchSheet_ScratchSquare.fromPartial(e)) ||
      [];
    return message;
  },
};

function createBaseScratchSheet_ScratchSquare(): ScratchSheet_ScratchSquare {
  return { category: 1, itemId: 0, earned: false };
}

export const ScratchSheet_ScratchSquare = {
  encode(
    message: ScratchSheet_ScratchSquare,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.category !== 1) {
      writer.uint32(8).int32(message.category);
    }
    if (message.itemId !== 0) {
      writer.uint32(16).uint32(message.itemId);
    }
    if (message.earned === true) {
      writer.uint32(24).bool(message.earned);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): ScratchSheet_ScratchSquare {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseScratchSheet_ScratchSquare();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.category = reader.int32() as any;
          break;
        case 2:
          message.itemId = reader.uint32();
          break;
        case 3:
          message.earned = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ScratchSheet_ScratchSquare {
    return {
      category: isSet(object.category)
        ? itemCategoryFromJSON(object.category)
        : 1,
      itemId: isSet(object.itemId) ? Number(object.itemId) : 0,
      earned: isSet(object.earned) ? Boolean(object.earned) : false,
    };
  },

  toJSON(message: ScratchSheet_ScratchSquare): unknown {
    const obj: any = {};
    message.category !== undefined &&
      (obj.category = itemCategoryToJSON(message.category));
    message.itemId !== undefined && (obj.itemId = Math.round(message.itemId));
    message.earned !== undefined && (obj.earned = message.earned);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ScratchSheet_ScratchSquare>, I>>(
    object: I
  ): ScratchSheet_ScratchSquare {
    const message = createBaseScratchSheet_ScratchSquare();
    message.category = object.category ?? 1;
    message.itemId = object.itemId ?? 0;
    message.earned = object.earned ?? false;
    return message;
  },
};

function createBaseUserItem(): UserItem {
  return { category: 1, itemId: 0, userItemId: 0, earnedAt: 0, expireAt: 0 };
}

export const UserItem = {
  encode(
    message: UserItem,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.category !== 1) {
      writer.uint32(8).int32(message.category);
    }
    if (message.itemId !== 0) {
      writer.uint32(16).uint32(message.itemId);
    }
    if (message.userItemId !== 0) {
      writer.uint32(24).uint32(message.userItemId);
    }
    if (message.earnedAt !== 0) {
      writer.uint32(32).uint32(message.earnedAt);
    }
    if (message.expireAt !== 0) {
      writer.uint32(40).uint32(message.expireAt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserItem {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserItem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.category = reader.int32() as any;
          break;
        case 2:
          message.itemId = reader.uint32();
          break;
        case 3:
          message.userItemId = reader.uint32();
          break;
        case 4:
          message.earnedAt = reader.uint32();
          break;
        case 5:
          message.expireAt = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UserItem {
    return {
      category: isSet(object.category)
        ? itemCategoryFromJSON(object.category)
        : 1,
      itemId: isSet(object.itemId) ? Number(object.itemId) : 0,
      userItemId: isSet(object.userItemId) ? Number(object.userItemId) : 0,
      earnedAt: isSet(object.earnedAt) ? Number(object.earnedAt) : 0,
      expireAt: isSet(object.expireAt) ? Number(object.expireAt) : 0,
    };
  },

  toJSON(message: UserItem): unknown {
    const obj: any = {};
    message.category !== undefined &&
      (obj.category = itemCategoryToJSON(message.category));
    message.itemId !== undefined && (obj.itemId = Math.round(message.itemId));
    message.userItemId !== undefined &&
      (obj.userItemId = Math.round(message.userItemId));
    message.earnedAt !== undefined &&
      (obj.earnedAt = Math.round(message.earnedAt));
    message.expireAt !== undefined &&
      (obj.expireAt = Math.round(message.expireAt));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UserItem>, I>>(object: I): UserItem {
    const message = createBaseUserItem();
    message.category = object.category ?? 1;
    message.itemId = object.itemId ?? 0;
    message.userItemId = object.userItemId ?? 0;
    message.earnedAt = object.earnedAt ?? 0;
    message.expireAt = object.expireAt ?? 0;
    return message;
  },
};

function createBaseInviteFriendCampaignSchedule(): InviteFriendCampaignSchedule {
  return { campaignId: 0, startAt: 0, endAt: 0, couponUnreceivableAt: 0 };
}

export const InviteFriendCampaignSchedule = {
  encode(
    message: InviteFriendCampaignSchedule,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.campaignId !== 0) {
      writer.uint32(8).uint32(message.campaignId);
    }
    if (message.startAt !== 0) {
      writer.uint32(16).uint32(message.startAt);
    }
    if (message.endAt !== 0) {
      writer.uint32(24).uint32(message.endAt);
    }
    if (message.couponUnreceivableAt !== 0) {
      writer.uint32(32).uint32(message.couponUnreceivableAt);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): InviteFriendCampaignSchedule {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInviteFriendCampaignSchedule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.campaignId = reader.uint32();
          break;
        case 2:
          message.startAt = reader.uint32();
          break;
        case 3:
          message.endAt = reader.uint32();
          break;
        case 4:
          message.couponUnreceivableAt = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): InviteFriendCampaignSchedule {
    return {
      campaignId: isSet(object.campaignId) ? Number(object.campaignId) : 0,
      startAt: isSet(object.startAt) ? Number(object.startAt) : 0,
      endAt: isSet(object.endAt) ? Number(object.endAt) : 0,
      couponUnreceivableAt: isSet(object.couponUnreceivableAt)
        ? Number(object.couponUnreceivableAt)
        : 0,
    };
  },

  toJSON(message: InviteFriendCampaignSchedule): unknown {
    const obj: any = {};
    message.campaignId !== undefined &&
      (obj.campaignId = Math.round(message.campaignId));
    message.startAt !== undefined &&
      (obj.startAt = Math.round(message.startAt));
    message.endAt !== undefined && (obj.endAt = Math.round(message.endAt));
    message.couponUnreceivableAt !== undefined &&
      (obj.couponUnreceivableAt = Math.round(message.couponUnreceivableAt));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<InviteFriendCampaignSchedule>, I>>(
    object: I
  ): InviteFriendCampaignSchedule {
    const message = createBaseInviteFriendCampaignSchedule();
    message.campaignId = object.campaignId ?? 0;
    message.startAt = object.startAt ?? 0;
    message.endAt = object.endAt ?? 0;
    message.couponUnreceivableAt = object.couponUnreceivableAt ?? 0;
    return message;
  },
};

function createBaseCarTuning(): CarTuning {
  return { carId: 0, tunePower: 0, tuneHandling: 0, lastPlayedAt: 0 };
}

export const CarTuning = {
  encode(
    message: CarTuning,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.carId !== 0) {
      writer.uint32(8).uint32(message.carId);
    }
    if (message.tunePower !== 0) {
      writer.uint32(16).uint32(message.tunePower);
    }
    if (message.tuneHandling !== 0) {
      writer.uint32(24).uint32(message.tuneHandling);
    }
    if (message.lastPlayedAt !== 0) {
      writer.uint32(32).uint32(message.lastPlayedAt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CarTuning {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCarTuning();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.carId = reader.uint32();
          break;
        case 2:
          message.tunePower = reader.uint32();
          break;
        case 3:
          message.tuneHandling = reader.uint32();
          break;
        case 4:
          message.lastPlayedAt = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CarTuning {
    return {
      carId: isSet(object.carId) ? Number(object.carId) : 0,
      tunePower: isSet(object.tunePower) ? Number(object.tunePower) : 0,
      tuneHandling: isSet(object.tuneHandling)
        ? Number(object.tuneHandling)
        : 0,
      lastPlayedAt: isSet(object.lastPlayedAt)
        ? Number(object.lastPlayedAt)
        : 0,
    };
  },

  toJSON(message: CarTuning): unknown {
    const obj: any = {};
    message.carId !== undefined && (obj.carId = Math.round(message.carId));
    message.tunePower !== undefined &&
      (obj.tunePower = Math.round(message.tunePower));
    message.tuneHandling !== undefined &&
      (obj.tuneHandling = Math.round(message.tuneHandling));
    message.lastPlayedAt !== undefined &&
      (obj.lastPlayedAt = Math.round(message.lastPlayedAt));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CarTuning>, I>>(
    object: I
  ): CarTuning {
    const message = createBaseCarTuning();
    message.carId = object.carId ?? 0;
    message.tunePower = object.tunePower ?? 0;
    message.tuneHandling = object.tuneHandling ?? 0;
    message.lastPlayedAt = object.lastPlayedAt ?? 0;
    return message;
  },
};

function createBaseBinaryData(): BinaryData {
  return { data: Buffer.alloc(0), mergeSerial: 0 };
}

export const BinaryData = {
  encode(
    message: BinaryData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.data.length !== 0) {
      writer.uint32(10).bytes(message.data);
    }
    if (message.mergeSerial !== 0) {
      writer.uint32(16).sint32(message.mergeSerial);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BinaryData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBinaryData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.data = reader.bytes() as Buffer;
          break;
        case 2:
          message.mergeSerial = reader.sint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BinaryData {
    return {
      data: isSet(object.data)
        ? Buffer.from(bytesFromBase64(object.data))
        : Buffer.alloc(0),
      mergeSerial: isSet(object.mergeSerial) ? Number(object.mergeSerial) : 0,
    };
  },

  toJSON(message: BinaryData): unknown {
    const obj: any = {};
    message.data !== undefined &&
      (obj.data = base64FromBytes(
        message.data !== undefined ? message.data : Buffer.alloc(0)
      ));
    message.mergeSerial !== undefined &&
      (obj.mergeSerial = Math.round(message.mergeSerial));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BinaryData>, I>>(
    object: I
  ): BinaryData {
    const message = createBaseBinaryData();
    message.data = object.data ?? Buffer.alloc(0);
    message.mergeSerial = object.mergeSerial ?? 0;
    return message;
  },
};

function createBaseGhostTrail(): GhostTrail {
  return {
    carId: 0,
    area: 0,
    ramp: 0,
    path: 0,
    playedAt: 0,
    playedPlace: undefined,
    trail: Buffer.alloc(0),
  };
}

export const GhostTrail = {
  encode(
    message: GhostTrail,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.carId !== 0) {
      writer.uint32(8).uint32(message.carId);
    }
    if (message.area !== 0) {
      writer.uint32(16).uint32(message.area);
    }
    if (message.ramp !== 0) {
      writer.uint32(24).uint32(message.ramp);
    }
    if (message.path !== 0) {
      writer.uint32(56).uint32(message.path);
    }
    if (message.playedAt !== 0) {
      writer.uint32(32).uint32(message.playedAt);
    }
    if (message.playedPlace !== undefined) {
      Place.encode(message.playedPlace, writer.uint32(42).fork()).ldelim();
    }
    if (message.trail.length !== 0) {
      writer.uint32(50).bytes(message.trail);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GhostTrail {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGhostTrail();
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
          message.ramp = reader.uint32();
          break;
        case 7:
          message.path = reader.uint32();
          break;
        case 4:
          message.playedAt = reader.uint32();
          break;
        case 5:
          message.playedPlace = Place.decode(reader, reader.uint32());
          break;
        case 6:
          message.trail = reader.bytes() as Buffer;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GhostTrail {
    return {
      carId: isSet(object.carId) ? Number(object.carId) : 0,
      area: isSet(object.area) ? Number(object.area) : 0,
      ramp: isSet(object.ramp) ? Number(object.ramp) : 0,
      path: isSet(object.path) ? Number(object.path) : 0,
      playedAt: isSet(object.playedAt) ? Number(object.playedAt) : 0,
      playedPlace: isSet(object.playedPlace)
        ? Place.fromJSON(object.playedPlace)
        : undefined,
      trail: isSet(object.trail)
        ? Buffer.from(bytesFromBase64(object.trail))
        : Buffer.alloc(0),
    };
  },

  toJSON(message: GhostTrail): unknown {
    const obj: any = {};
    message.carId !== undefined && (obj.carId = Math.round(message.carId));
    message.area !== undefined && (obj.area = Math.round(message.area));
    message.ramp !== undefined && (obj.ramp = Math.round(message.ramp));
    message.path !== undefined && (obj.path = Math.round(message.path));
    message.playedAt !== undefined &&
      (obj.playedAt = Math.round(message.playedAt));
    message.playedPlace !== undefined &&
      (obj.playedPlace = message.playedPlace
        ? Place.toJSON(message.playedPlace)
        : undefined);
    message.trail !== undefined &&
      (obj.trail = base64FromBytes(
        message.trail !== undefined ? message.trail : Buffer.alloc(0)
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GhostTrail>, I>>(
    object: I
  ): GhostTrail {
    const message = createBaseGhostTrail();
    message.carId = object.carId ?? 0;
    message.area = object.area ?? 0;
    message.ramp = object.ramp ?? 0;
    message.path = object.path ?? 0;
    message.playedAt = object.playedAt ?? 0;
    message.playedPlace =
      object.playedPlace !== undefined && object.playedPlace !== null
        ? Place.fromPartial(object.playedPlace)
        : undefined;
    message.trail = object.trail ?? Buffer.alloc(0);
    return message;
  },
};

function createBasePlaceList(): PlaceList {
  return { places: [] };
}

export const PlaceList = {
  encode(
    message: PlaceList,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.places) {
      Place.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PlaceList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePlaceList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.places.push(Place.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PlaceList {
    return {
      places: Array.isArray(object?.places)
        ? object.places.map((e: any) => Place.fromJSON(e))
        : [],
    };
  },

  toJSON(message: PlaceList): unknown {
    const obj: any = {};
    if (message.places) {
      obj.places = message.places.map((e) => (e ? Place.toJSON(e) : undefined));
    } else {
      obj.places = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PlaceList>, I>>(
    object: I
  ): PlaceList {
    const message = createBasePlaceList();
    message.places = object.places?.map((e) => Place.fromPartial(e)) || [];
    return message;
  },
};

function createBaseGhostList(): GhostList {
  return { ghosts: [] };
}

export const GhostList = {
  encode(
    message: GhostList,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.ghosts) {
      GhostCar.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GhostList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGhostList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ghosts.push(GhostCar.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GhostList {
    return {
      ghosts: Array.isArray(object?.ghosts)
        ? object.ghosts.map((e: any) => GhostCar.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GhostList): unknown {
    const obj: any = {};
    if (message.ghosts) {
      obj.ghosts = message.ghosts.map((e) =>
        e ? GhostCar.toJSON(e) : undefined
      );
    } else {
      obj.ghosts = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GhostList>, I>>(
    object: I
  ): GhostList {
    const message = createBaseGhostList();
    message.ghosts = object.ghosts?.map((e) => GhostCar.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCarSummary(): CarSummary {
  return { hitCount: 0, cars: [] };
}

export const CarSummary = {
  encode(
    message: CarSummary,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.hitCount !== 0) {
      writer.uint32(8).uint32(message.hitCount);
    }
    for (const v of message.cars) {
      Car.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CarSummary {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCarSummary();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hitCount = reader.uint32();
          break;
        case 2:
          message.cars.push(Car.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CarSummary {
    return {
      hitCount: isSet(object.hitCount) ? Number(object.hitCount) : 0,
      cars: Array.isArray(object?.cars)
        ? object.cars.map((e: any) => Car.fromJSON(e))
        : [],
    };
  },

  toJSON(message: CarSummary): unknown {
    const obj: any = {};
    message.hitCount !== undefined &&
      (obj.hitCount = Math.round(message.hitCount));
    if (message.cars) {
      obj.cars = message.cars.map((e) => (e ? Car.toJSON(e) : undefined));
    } else {
      obj.cars = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CarSummary>, I>>(
    object: I
  ): CarSummary {
    const message = createBaseCarSummary();
    message.hitCount = object.hitCount ?? 0;
    message.cars = object.cars?.map((e) => Car.fromPartial(e)) || [];
    return message;
  },
};

function createBaseFileList(): FileList {
  return { files: [], interval: 0 };
}

export const FileList = {
  encode(
    message: FileList,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.files) {
      FileList_FileInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.interval !== 0) {
      writer.uint32(16).uint32(message.interval);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FileList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFileList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.files.push(FileList_FileInfo.decode(reader, reader.uint32()));
          break;
        case 2:
          message.interval = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FileList {
    return {
      files: Array.isArray(object?.files)
        ? object.files.map((e: any) => FileList_FileInfo.fromJSON(e))
        : [],
      interval: isSet(object.interval) ? Number(object.interval) : 0,
    };
  },

  toJSON(message: FileList): unknown {
    const obj: any = {};
    if (message.files) {
      obj.files = message.files.map((e) =>
        e ? FileList_FileInfo.toJSON(e) : undefined
      );
    } else {
      obj.files = [];
    }
    message.interval !== undefined &&
      (obj.interval = Math.round(message.interval));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FileList>, I>>(object: I): FileList {
    const message = createBaseFileList();
    message.files =
      object.files?.map((e) => FileList_FileInfo.fromPartial(e)) || [];
    message.interval = object.interval ?? 0;
    return message;
  },
};

function createBaseFileList_FileInfo(): FileList_FileInfo {
  return {
    fileId: 0,
    fileType: 1,
    fileSize: 0,
    url: "",
    sha1sum: Buffer.alloc(0),
    notBefore: 0,
    notAfter: 0,
  };
}

export const FileList_FileInfo = {
  encode(
    message: FileList_FileInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.fileId !== 0) {
      writer.uint32(8).uint32(message.fileId);
    }
    if (message.fileType !== 1) {
      writer.uint32(16).int32(message.fileType);
    }
    if (message.fileSize !== 0) {
      writer.uint32(24).uint32(message.fileSize);
    }
    if (message.url !== "") {
      writer.uint32(34).string(message.url);
    }
    if (message.sha1sum.length !== 0) {
      writer.uint32(42).bytes(message.sha1sum);
    }
    if (message.notBefore !== 0) {
      writer.uint32(48).uint32(message.notBefore);
    }
    if (message.notAfter !== 0) {
      writer.uint32(56).uint32(message.notAfter);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FileList_FileInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFileList_FileInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.fileId = reader.uint32();
          break;
        case 2:
          message.fileType = reader.int32() as any;
          break;
        case 3:
          message.fileSize = reader.uint32();
          break;
        case 4:
          message.url = reader.string();
          break;
        case 5:
          message.sha1sum = reader.bytes() as Buffer;
          break;
        case 6:
          message.notBefore = reader.uint32();
          break;
        case 7:
          message.notAfter = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): FileList_FileInfo {
    return {
      fileId: isSet(object.fileId) ? Number(object.fileId) : 0,
      fileType: isSet(object.fileType) ? fileTypeFromJSON(object.fileType) : 1,
      fileSize: isSet(object.fileSize) ? Number(object.fileSize) : 0,
      url: isSet(object.url) ? String(object.url) : "",
      sha1sum: isSet(object.sha1sum)
        ? Buffer.from(bytesFromBase64(object.sha1sum))
        : Buffer.alloc(0),
      notBefore: isSet(object.notBefore) ? Number(object.notBefore) : 0,
      notAfter: isSet(object.notAfter) ? Number(object.notAfter) : 0,
    };
  },

  toJSON(message: FileList_FileInfo): unknown {
    const obj: any = {};
    message.fileId !== undefined && (obj.fileId = Math.round(message.fileId));
    message.fileType !== undefined &&
      (obj.fileType = fileTypeToJSON(message.fileType));
    message.fileSize !== undefined &&
      (obj.fileSize = Math.round(message.fileSize));
    message.url !== undefined && (obj.url = message.url);
    message.sha1sum !== undefined &&
      (obj.sha1sum = base64FromBytes(
        message.sha1sum !== undefined ? message.sha1sum : Buffer.alloc(0)
      ));
    message.notBefore !== undefined &&
      (obj.notBefore = Math.round(message.notBefore));
    message.notAfter !== undefined &&
      (obj.notAfter = Math.round(message.notAfter));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<FileList_FileInfo>, I>>(
    object: I
  ): FileList_FileInfo {
    const message = createBaseFileList_FileInfo();
    message.fileId = object.fileId ?? 0;
    message.fileType = object.fileType ?? 1;
    message.fileSize = object.fileSize ?? 0;
    message.url = object.url ?? "";
    message.sha1sum = object.sha1sum ?? Buffer.alloc(0);
    message.notBefore = object.notBefore ?? 0;
    message.notAfter = object.notAfter ?? 0;
    return message;
  },
};

function createBaseGhostCompetitionTarget(): GhostCompetitionTarget {
  return {
    competitionId: 0,
    specialGhostId: 0,
    ghostCar: undefined,
    trailId: 0,
    updatedAt: 0,
    competitionSchedule: undefined,
  };
}

export const GhostCompetitionTarget = {
  encode(
    message: GhostCompetitionTarget,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.competitionId !== 0) {
      writer.uint32(8).uint32(message.competitionId);
    }
    if (message.specialGhostId !== 0) {
      writer.uint32(16).uint32(message.specialGhostId);
    }
    if (message.ghostCar !== undefined) {
      GhostCar.encode(message.ghostCar, writer.uint32(26).fork()).ldelim();
    }
    if (message.trailId !== 0) {
      writer.uint32(32).uint64(message.trailId);
    }
    if (message.updatedAt !== 0) {
      writer.uint32(40).uint32(message.updatedAt);
    }
    if (message.competitionSchedule !== undefined) {
      GhostCompetitionSchedule.encode(
        message.competitionSchedule,
        writer.uint32(50).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): GhostCompetitionTarget {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGhostCompetitionTarget();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.competitionId = reader.uint32();
          break;
        case 2:
          message.specialGhostId = reader.uint32();
          break;
        case 3:
          message.ghostCar = GhostCar.decode(reader, reader.uint32());
          break;
        case 4:
          message.trailId = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.updatedAt = reader.uint32();
          break;
        case 6:
          message.competitionSchedule = GhostCompetitionSchedule.decode(
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

  fromJSON(object: any): GhostCompetitionTarget {
    return {
      competitionId: isSet(object.competitionId)
        ? Number(object.competitionId)
        : 0,
      specialGhostId: isSet(object.specialGhostId)
        ? Number(object.specialGhostId)
        : 0,
      ghostCar: isSet(object.ghostCar)
        ? GhostCar.fromJSON(object.ghostCar)
        : undefined,
      trailId: isSet(object.trailId) ? Number(object.trailId) : 0,
      updatedAt: isSet(object.updatedAt) ? Number(object.updatedAt) : 0,
      competitionSchedule: isSet(object.competitionSchedule)
        ? GhostCompetitionSchedule.fromJSON(object.competitionSchedule)
        : undefined,
    };
  },

  toJSON(message: GhostCompetitionTarget): unknown {
    const obj: any = {};
    message.competitionId !== undefined &&
      (obj.competitionId = Math.round(message.competitionId));
    message.specialGhostId !== undefined &&
      (obj.specialGhostId = Math.round(message.specialGhostId));
    message.ghostCar !== undefined &&
      (obj.ghostCar = message.ghostCar
        ? GhostCar.toJSON(message.ghostCar)
        : undefined);
    message.trailId !== undefined &&
      (obj.trailId = Math.round(message.trailId));
    message.updatedAt !== undefined &&
      (obj.updatedAt = Math.round(message.updatedAt));
    message.competitionSchedule !== undefined &&
      (obj.competitionSchedule = message.competitionSchedule
        ? GhostCompetitionSchedule.toJSON(message.competitionSchedule)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GhostCompetitionTarget>, I>>(
    object: I
  ): GhostCompetitionTarget {
    const message = createBaseGhostCompetitionTarget();
    message.competitionId = object.competitionId ?? 0;
    message.specialGhostId = object.specialGhostId ?? 0;
    message.ghostCar =
      object.ghostCar !== undefined && object.ghostCar !== null
        ? GhostCar.fromPartial(object.ghostCar)
        : undefined;
    message.trailId = object.trailId ?? 0;
    message.updatedAt = object.updatedAt ?? 0;
    message.competitionSchedule =
      object.competitionSchedule !== undefined &&
      object.competitionSchedule !== null
        ? GhostCompetitionSchedule.fromPartial(object.competitionSchedule)
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
