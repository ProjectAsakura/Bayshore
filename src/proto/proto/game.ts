/* eslint-disable */
export const protobufPackage = "game";

export enum gidArea {
  GID_AREA_TOKYO = 0,
  GID_AREA_HAKONE = 1,
  GID_AREA_NAGOYA = 2,
  GID_AREA_OSAKA = 3,
  GID_AREA_FUKUOKA = 4,
  GID_AREA_SUBTOKYO_3_4 = 5,
  GID_AREA_SUBTOKYO_5 = 6,
  GID_AREA_TURNPIKE = 7,
  GID_AREA_KOBE = 8,
  GID_AREA_HIROSHIMA = 9,
  GID_AREA_STORY = 10,
  UNRECOGNIZED = -1,
}

export function gidAreaFromJSON(object: any): gidArea {
  switch (object) {
    case 0:
    case "GID_AREA_TOKYO":
      return gidArea.GID_AREA_TOKYO;
    case 1:
    case "GID_AREA_HAKONE":
      return gidArea.GID_AREA_HAKONE;
    case 2:
    case "GID_AREA_NAGOYA":
      return gidArea.GID_AREA_NAGOYA;
    case 3:
    case "GID_AREA_OSAKA":
      return gidArea.GID_AREA_OSAKA;
    case 4:
    case "GID_AREA_FUKUOKA":
      return gidArea.GID_AREA_FUKUOKA;
    case 5:
    case "GID_AREA_SUBTOKYO_3_4":
      return gidArea.GID_AREA_SUBTOKYO_3_4;
    case 6:
    case "GID_AREA_SUBTOKYO_5":
      return gidArea.GID_AREA_SUBTOKYO_5;
    case 7:
    case "GID_AREA_TURNPIKE":
      return gidArea.GID_AREA_TURNPIKE;
    case 8:
    case "GID_AREA_KOBE":
      return gidArea.GID_AREA_KOBE;
    case 9:
    case "GID_AREA_HIROSHIMA":
      return gidArea.GID_AREA_HIROSHIMA;
    case 10:
    case "GID_AREA_STORY":
      return gidArea.GID_AREA_STORY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return gidArea.UNRECOGNIZED;
  }
}

export function gidAreaToJSON(object: gidArea): string {
  switch (object) {
    case gidArea.GID_AREA_TOKYO:
      return "GID_AREA_TOKYO";
    case gidArea.GID_AREA_HAKONE:
      return "GID_AREA_HAKONE";
    case gidArea.GID_AREA_NAGOYA:
      return "GID_AREA_NAGOYA";
    case gidArea.GID_AREA_OSAKA:
      return "GID_AREA_OSAKA";
    case gidArea.GID_AREA_FUKUOKA:
      return "GID_AREA_FUKUOKA";
    case gidArea.GID_AREA_SUBTOKYO_3_4:
      return "GID_AREA_SUBTOKYO_3_4";
    case gidArea.GID_AREA_SUBTOKYO_5:
      return "GID_AREA_SUBTOKYO_5";
    case gidArea.GID_AREA_TURNPIKE:
      return "GID_AREA_TURNPIKE";
    case gidArea.GID_AREA_KOBE:
      return "GID_AREA_KOBE";
    case gidArea.GID_AREA_HIROSHIMA:
      return "GID_AREA_HIROSHIMA";
    case gidArea.GID_AREA_STORY:
      return "GID_AREA_STORY";
    case gidArea.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum gidTacourse {
  GID_TACOURSE_C1IN = 0,
  GID_TACOURSE_C1OUT = 1,
  GID_TACOURSE_RINGLEFT = 2,
  GID_TACOURSE_RINGRIGHT = 3,
  GID_TACOURSE_SUBTOKYO_3_4 = 4,
  GID_TACOURSE_SUBTOKYO_5 = 5,
  GID_TACOURSE_WANGANEAST = 6,
  GID_TACOURSE_WANGANWEST = 7,
  GID_TACOURSE_K1_DOWN = 8,
  GID_TACOURSE_K1_UP = 9,
  GID_TACOURSE_YAESUIN = 10,
  GID_TACOURSE_YAESUOUT = 11,
  GID_TACOURSE_YOKOHAMAIN = 12,
  GID_TACOURSE_YOKOHAMAOUT = 13,
  GID_TACOURSE_NAGOYA = 14,
  GID_TACOURSE_OSAKA = 15,
  GID_TACOURSE_KOBE = 16,
  GID_TACOURSE_FUKUOKA = 17,
  GID_TACOURSE_HAKONEFOR = 18,
  GID_TACOURSE_HAKONEBACK = 19,
  GID_TACOURSE_TURNPIKE_UP = 20,
  GID_TACOURSE_TURNPIKE_DOWN = 21,
  GID_TACOURSE_TOKYOALL = 22,
  GID_TACOURSE_KANAGAWAALL = 23,
  GID_TACOURSE_HIROSHIMA = 24,
  UNRECOGNIZED = -1,
}

export function gidTacourseFromJSON(object: any): gidTacourse {
  switch (object) {
    case 0:
    case "GID_TACOURSE_C1IN":
      return gidTacourse.GID_TACOURSE_C1IN;
    case 1:
    case "GID_TACOURSE_C1OUT":
      return gidTacourse.GID_TACOURSE_C1OUT;
    case 2:
    case "GID_TACOURSE_RINGLEFT":
      return gidTacourse.GID_TACOURSE_RINGLEFT;
    case 3:
    case "GID_TACOURSE_RINGRIGHT":
      return gidTacourse.GID_TACOURSE_RINGRIGHT;
    case 4:
    case "GID_TACOURSE_SUBTOKYO_3_4":
      return gidTacourse.GID_TACOURSE_SUBTOKYO_3_4;
    case 5:
    case "GID_TACOURSE_SUBTOKYO_5":
      return gidTacourse.GID_TACOURSE_SUBTOKYO_5;
    case 6:
    case "GID_TACOURSE_WANGANEAST":
      return gidTacourse.GID_TACOURSE_WANGANEAST;
    case 7:
    case "GID_TACOURSE_WANGANWEST":
      return gidTacourse.GID_TACOURSE_WANGANWEST;
    case 8:
    case "GID_TACOURSE_K1_DOWN":
      return gidTacourse.GID_TACOURSE_K1_DOWN;
    case 9:
    case "GID_TACOURSE_K1_UP":
      return gidTacourse.GID_TACOURSE_K1_UP;
    case 10:
    case "GID_TACOURSE_YAESUIN":
      return gidTacourse.GID_TACOURSE_YAESUIN;
    case 11:
    case "GID_TACOURSE_YAESUOUT":
      return gidTacourse.GID_TACOURSE_YAESUOUT;
    case 12:
    case "GID_TACOURSE_YOKOHAMAIN":
      return gidTacourse.GID_TACOURSE_YOKOHAMAIN;
    case 13:
    case "GID_TACOURSE_YOKOHAMAOUT":
      return gidTacourse.GID_TACOURSE_YOKOHAMAOUT;
    case 14:
    case "GID_TACOURSE_NAGOYA":
      return gidTacourse.GID_TACOURSE_NAGOYA;
    case 15:
    case "GID_TACOURSE_OSAKA":
      return gidTacourse.GID_TACOURSE_OSAKA;
    case 16:
    case "GID_TACOURSE_KOBE":
      return gidTacourse.GID_TACOURSE_KOBE;
    case 17:
    case "GID_TACOURSE_FUKUOKA":
      return gidTacourse.GID_TACOURSE_FUKUOKA;
    case 18:
    case "GID_TACOURSE_HAKONEFOR":
      return gidTacourse.GID_TACOURSE_HAKONEFOR;
    case 19:
    case "GID_TACOURSE_HAKONEBACK":
      return gidTacourse.GID_TACOURSE_HAKONEBACK;
    case 20:
    case "GID_TACOURSE_TURNPIKE_UP":
      return gidTacourse.GID_TACOURSE_TURNPIKE_UP;
    case 21:
    case "GID_TACOURSE_TURNPIKE_DOWN":
      return gidTacourse.GID_TACOURSE_TURNPIKE_DOWN;
    case 22:
    case "GID_TACOURSE_TOKYOALL":
      return gidTacourse.GID_TACOURSE_TOKYOALL;
    case 23:
    case "GID_TACOURSE_KANAGAWAALL":
      return gidTacourse.GID_TACOURSE_KANAGAWAALL;
    case 24:
    case "GID_TACOURSE_HIROSHIMA":
      return gidTacourse.GID_TACOURSE_HIROSHIMA;
    case -1:
    case "UNRECOGNIZED":
    default:
      return gidTacourse.UNRECOGNIZED;
  }
}

export function gidTacourseToJSON(object: gidTacourse): string {
  switch (object) {
    case gidTacourse.GID_TACOURSE_C1IN:
      return "GID_TACOURSE_C1IN";
    case gidTacourse.GID_TACOURSE_C1OUT:
      return "GID_TACOURSE_C1OUT";
    case gidTacourse.GID_TACOURSE_RINGLEFT:
      return "GID_TACOURSE_RINGLEFT";
    case gidTacourse.GID_TACOURSE_RINGRIGHT:
      return "GID_TACOURSE_RINGRIGHT";
    case gidTacourse.GID_TACOURSE_SUBTOKYO_3_4:
      return "GID_TACOURSE_SUBTOKYO_3_4";
    case gidTacourse.GID_TACOURSE_SUBTOKYO_5:
      return "GID_TACOURSE_SUBTOKYO_5";
    case gidTacourse.GID_TACOURSE_WANGANEAST:
      return "GID_TACOURSE_WANGANEAST";
    case gidTacourse.GID_TACOURSE_WANGANWEST:
      return "GID_TACOURSE_WANGANWEST";
    case gidTacourse.GID_TACOURSE_K1_DOWN:
      return "GID_TACOURSE_K1_DOWN";
    case gidTacourse.GID_TACOURSE_K1_UP:
      return "GID_TACOURSE_K1_UP";
    case gidTacourse.GID_TACOURSE_YAESUIN:
      return "GID_TACOURSE_YAESUIN";
    case gidTacourse.GID_TACOURSE_YAESUOUT:
      return "GID_TACOURSE_YAESUOUT";
    case gidTacourse.GID_TACOURSE_YOKOHAMAIN:
      return "GID_TACOURSE_YOKOHAMAIN";
    case gidTacourse.GID_TACOURSE_YOKOHAMAOUT:
      return "GID_TACOURSE_YOKOHAMAOUT";
    case gidTacourse.GID_TACOURSE_NAGOYA:
      return "GID_TACOURSE_NAGOYA";
    case gidTacourse.GID_TACOURSE_OSAKA:
      return "GID_TACOURSE_OSAKA";
    case gidTacourse.GID_TACOURSE_KOBE:
      return "GID_TACOURSE_KOBE";
    case gidTacourse.GID_TACOURSE_FUKUOKA:
      return "GID_TACOURSE_FUKUOKA";
    case gidTacourse.GID_TACOURSE_HAKONEFOR:
      return "GID_TACOURSE_HAKONEFOR";
    case gidTacourse.GID_TACOURSE_HAKONEBACK:
      return "GID_TACOURSE_HAKONEBACK";
    case gidTacourse.GID_TACOURSE_TURNPIKE_UP:
      return "GID_TACOURSE_TURNPIKE_UP";
    case gidTacourse.GID_TACOURSE_TURNPIKE_DOWN:
      return "GID_TACOURSE_TURNPIKE_DOWN";
    case gidTacourse.GID_TACOURSE_TOKYOALL:
      return "GID_TACOURSE_TOKYOALL";
    case gidTacourse.GID_TACOURSE_KANAGAWAALL:
      return "GID_TACOURSE_KANAGAWAALL";
    case gidTacourse.GID_TACOURSE_HIROSHIMA:
      return "GID_TACOURSE_HIROSHIMA";
    case gidTacourse.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum gidRunarea {
  GID_RUNAREA_C1 = 0,
  GID_RUNAREA_RING = 1,
  GID_RUNAREA_SUBTOKYO_3_4 = 2,
  GID_RUNAREA_SUBTOKYO_5 = 3,
  GID_RUNAREA_WANGAN = 4,
  GID_RUNAREA_K1 = 5,
  GID_RUNAREA_YAESU = 6,
  GID_RUNAREA_YOKOHAMA = 7,
  GID_RUNAREA_NAGOYA = 8,
  GID_RUNAREA_OSAKA = 9,
  GID_RUNAREA_KOBE = 10,
  GID_RUNAREA_FUKUOKA = 11,
  GID_RUNAREA_HAKONE = 12,
  GID_RUNAREA_TURNPIKE = 13,
  GID_RUNAREA_DUMMY1 = 14,
  GID_RUNAREA_DUMMY2 = 15,
  GID_RUNAREA_DUMMY3 = 16,
  GID_RUNAREA_C1_CLOSED = 17,
  GID_RUNAREA_HIROSHIMA = 18,
  UNRECOGNIZED = -1,
}

export function gidRunareaFromJSON(object: any): gidRunarea {
  switch (object) {
    case 0:
    case "GID_RUNAREA_C1":
      return gidRunarea.GID_RUNAREA_C1;
    case 1:
    case "GID_RUNAREA_RING":
      return gidRunarea.GID_RUNAREA_RING;
    case 2:
    case "GID_RUNAREA_SUBTOKYO_3_4":
      return gidRunarea.GID_RUNAREA_SUBTOKYO_3_4;
    case 3:
    case "GID_RUNAREA_SUBTOKYO_5":
      return gidRunarea.GID_RUNAREA_SUBTOKYO_5;
    case 4:
    case "GID_RUNAREA_WANGAN":
      return gidRunarea.GID_RUNAREA_WANGAN;
    case 5:
    case "GID_RUNAREA_K1":
      return gidRunarea.GID_RUNAREA_K1;
    case 6:
    case "GID_RUNAREA_YAESU":
      return gidRunarea.GID_RUNAREA_YAESU;
    case 7:
    case "GID_RUNAREA_YOKOHAMA":
      return gidRunarea.GID_RUNAREA_YOKOHAMA;
    case 8:
    case "GID_RUNAREA_NAGOYA":
      return gidRunarea.GID_RUNAREA_NAGOYA;
    case 9:
    case "GID_RUNAREA_OSAKA":
      return gidRunarea.GID_RUNAREA_OSAKA;
    case 10:
    case "GID_RUNAREA_KOBE":
      return gidRunarea.GID_RUNAREA_KOBE;
    case 11:
    case "GID_RUNAREA_FUKUOKA":
      return gidRunarea.GID_RUNAREA_FUKUOKA;
    case 12:
    case "GID_RUNAREA_HAKONE":
      return gidRunarea.GID_RUNAREA_HAKONE;
    case 13:
    case "GID_RUNAREA_TURNPIKE":
      return gidRunarea.GID_RUNAREA_TURNPIKE;
    case 14:
    case "GID_RUNAREA_DUMMY1":
      return gidRunarea.GID_RUNAREA_DUMMY1;
    case 15:
    case "GID_RUNAREA_DUMMY2":
      return gidRunarea.GID_RUNAREA_DUMMY2;
    case 16:
    case "GID_RUNAREA_DUMMY3":
      return gidRunarea.GID_RUNAREA_DUMMY3;
    case 17:
    case "GID_RUNAREA_C1_CLOSED":
      return gidRunarea.GID_RUNAREA_C1_CLOSED;
    case 18:
    case "GID_RUNAREA_HIROSHIMA":
      return gidRunarea.GID_RUNAREA_HIROSHIMA;
    case -1:
    case "UNRECOGNIZED":
    default:
      return gidRunarea.UNRECOGNIZED;
  }
}

export function gidRunareaToJSON(object: gidRunarea): string {
  switch (object) {
    case gidRunarea.GID_RUNAREA_C1:
      return "GID_RUNAREA_C1";
    case gidRunarea.GID_RUNAREA_RING:
      return "GID_RUNAREA_RING";
    case gidRunarea.GID_RUNAREA_SUBTOKYO_3_4:
      return "GID_RUNAREA_SUBTOKYO_3_4";
    case gidRunarea.GID_RUNAREA_SUBTOKYO_5:
      return "GID_RUNAREA_SUBTOKYO_5";
    case gidRunarea.GID_RUNAREA_WANGAN:
      return "GID_RUNAREA_WANGAN";
    case gidRunarea.GID_RUNAREA_K1:
      return "GID_RUNAREA_K1";
    case gidRunarea.GID_RUNAREA_YAESU:
      return "GID_RUNAREA_YAESU";
    case gidRunarea.GID_RUNAREA_YOKOHAMA:
      return "GID_RUNAREA_YOKOHAMA";
    case gidRunarea.GID_RUNAREA_NAGOYA:
      return "GID_RUNAREA_NAGOYA";
    case gidRunarea.GID_RUNAREA_OSAKA:
      return "GID_RUNAREA_OSAKA";
    case gidRunarea.GID_RUNAREA_KOBE:
      return "GID_RUNAREA_KOBE";
    case gidRunarea.GID_RUNAREA_FUKUOKA:
      return "GID_RUNAREA_FUKUOKA";
    case gidRunarea.GID_RUNAREA_HAKONE:
      return "GID_RUNAREA_HAKONE";
    case gidRunarea.GID_RUNAREA_TURNPIKE:
      return "GID_RUNAREA_TURNPIKE";
    case gidRunarea.GID_RUNAREA_DUMMY1:
      return "GID_RUNAREA_DUMMY1";
    case gidRunarea.GID_RUNAREA_DUMMY2:
      return "GID_RUNAREA_DUMMY2";
    case gidRunarea.GID_RUNAREA_DUMMY3:
      return "GID_RUNAREA_DUMMY3";
    case gidRunarea.GID_RUNAREA_C1_CLOSED:
      return "GID_RUNAREA_C1_CLOSED";
    case gidRunarea.GID_RUNAREA_HIROSHIMA:
      return "GID_RUNAREA_HIROSHIMA";
    case gidRunarea.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum gidRamp {
  GID_RAMP_C1_IN_KANDABASHI = 0,
  GID_RAMP_C1_IN_SHIODOME = 1,
  GID_RAMP_C1_OUT_KANDABASHI = 2,
  GID_RAMP_C1_OUT_SHIBA = 3,
  GID_RAMP_RING_LEFT_ARIAKE = 4,
  GID_RAMP_RING_RIGHT_KIBA = 5,
  GID_RAMP_SUBTOKYO_SHIBUYA = 6,
  GID_RAMP_SUBTOKYO_GAIEN = 7,
  GID_RAMP_SUBTOKYO_DAIKANCHOU = 8,
  GID_RAMP_SUBTOKYO_SHINJUKU = 9,
  GID_RAMP_WANGAN_EAST_AIRPORT = 10,
  GID_RAMP_WANGAN_EAST_DAIKOKU = 11,
  GID_RAMP_WANGAN_WEST_RINKAI = 12,
  GID_RAMP_WANGAN_WEST_AIRPORT = 13,
  GID_RAMP_K1_DOWN_SHIBAURA = 14,
  GID_RAMP_K1_DOWN_HANEDA = 15,
  GID_RAMP_K1_UP_HANEDA = 16,
  GID_RAMP_K1_UP_SHIOIRI = 17,
  GID_RAMP_YAESU_SHIODOME = 18,
  GID_RAMP_YAESU_KYOBASHI = 19,
  GID_RAMP_YAESU_KANDABASHI = 20,
  GID_RAMP_MINATOMIRAI_IN_HIGASHIKANAGAWA = 21,
  GID_RAMP_MINATOMIRAI_IN_MINATOMIRAI = 22,
  GID_RAMP_MINATOMIRAI_OUT_SHINYAMASHITA = 23,
  GID_RAMP_MINATOMIRAI_OUT_MINATOMIRAI = 24,
  GID_RAMP_NAGOYA_MARUNOUCHI = 25,
  GID_RAMP_OOSAKA_DOUTONBORI = 26,
  GID_RAMP_KOBE_SHINKOUCHOU = 27,
  GID_RAMP_KOBE_NADAOOHASHI = 28,
  GID_RAMP_FUKUOKA_WEST_MEIHAMA = 29,
  GID_RAMP_FUKUOKA_WEST_HAKATA = 30,
  GID_RAMP_FUKUOKA_EAST_NISHI = 31,
  GID_RAMP_FUKUOKA_EAST_HANDOUBASHI = 32,
  GID_RAMP_HAKONE_FOR = 33,
  GID_RAMP_HAKONE_BACK = 34,
  GID_RAMP_TURNPIKE_UP = 35,
  GID_RAMP_TURNPIKE_DOWN = 36,
  GID_RAMP_HIROSHIMA_SHINONOME = 37,
  GID_RAMP_HIROSHIMA_UJINA = 38,
  UNRECOGNIZED = -1,
}

export function gidRampFromJSON(object: any): gidRamp {
  switch (object) {
    case 0:
    case "GID_RAMP_C1_IN_KANDABASHI":
      return gidRamp.GID_RAMP_C1_IN_KANDABASHI;
    case 1:
    case "GID_RAMP_C1_IN_SHIODOME":
      return gidRamp.GID_RAMP_C1_IN_SHIODOME;
    case 2:
    case "GID_RAMP_C1_OUT_KANDABASHI":
      return gidRamp.GID_RAMP_C1_OUT_KANDABASHI;
    case 3:
    case "GID_RAMP_C1_OUT_SHIBA":
      return gidRamp.GID_RAMP_C1_OUT_SHIBA;
    case 4:
    case "GID_RAMP_RING_LEFT_ARIAKE":
      return gidRamp.GID_RAMP_RING_LEFT_ARIAKE;
    case 5:
    case "GID_RAMP_RING_RIGHT_KIBA":
      return gidRamp.GID_RAMP_RING_RIGHT_KIBA;
    case 6:
    case "GID_RAMP_SUBTOKYO_SHIBUYA":
      return gidRamp.GID_RAMP_SUBTOKYO_SHIBUYA;
    case 7:
    case "GID_RAMP_SUBTOKYO_GAIEN":
      return gidRamp.GID_RAMP_SUBTOKYO_GAIEN;
    case 8:
    case "GID_RAMP_SUBTOKYO_DAIKANCHOU":
      return gidRamp.GID_RAMP_SUBTOKYO_DAIKANCHOU;
    case 9:
    case "GID_RAMP_SUBTOKYO_SHINJUKU":
      return gidRamp.GID_RAMP_SUBTOKYO_SHINJUKU;
    case 10:
    case "GID_RAMP_WANGAN_EAST_AIRPORT":
      return gidRamp.GID_RAMP_WANGAN_EAST_AIRPORT;
    case 11:
    case "GID_RAMP_WANGAN_EAST_DAIKOKU":
      return gidRamp.GID_RAMP_WANGAN_EAST_DAIKOKU;
    case 12:
    case "GID_RAMP_WANGAN_WEST_RINKAI":
      return gidRamp.GID_RAMP_WANGAN_WEST_RINKAI;
    case 13:
    case "GID_RAMP_WANGAN_WEST_AIRPORT":
      return gidRamp.GID_RAMP_WANGAN_WEST_AIRPORT;
    case 14:
    case "GID_RAMP_K1_DOWN_SHIBAURA":
      return gidRamp.GID_RAMP_K1_DOWN_SHIBAURA;
    case 15:
    case "GID_RAMP_K1_DOWN_HANEDA":
      return gidRamp.GID_RAMP_K1_DOWN_HANEDA;
    case 16:
    case "GID_RAMP_K1_UP_HANEDA":
      return gidRamp.GID_RAMP_K1_UP_HANEDA;
    case 17:
    case "GID_RAMP_K1_UP_SHIOIRI":
      return gidRamp.GID_RAMP_K1_UP_SHIOIRI;
    case 18:
    case "GID_RAMP_YAESU_SHIODOME":
      return gidRamp.GID_RAMP_YAESU_SHIODOME;
    case 19:
    case "GID_RAMP_YAESU_KYOBASHI":
      return gidRamp.GID_RAMP_YAESU_KYOBASHI;
    case 20:
    case "GID_RAMP_YAESU_KANDABASHI":
      return gidRamp.GID_RAMP_YAESU_KANDABASHI;
    case 21:
    case "GID_RAMP_MINATOMIRAI_IN_HIGASHIKANAGAWA":
      return gidRamp.GID_RAMP_MINATOMIRAI_IN_HIGASHIKANAGAWA;
    case 22:
    case "GID_RAMP_MINATOMIRAI_IN_MINATOMIRAI":
      return gidRamp.GID_RAMP_MINATOMIRAI_IN_MINATOMIRAI;
    case 23:
    case "GID_RAMP_MINATOMIRAI_OUT_SHINYAMASHITA":
      return gidRamp.GID_RAMP_MINATOMIRAI_OUT_SHINYAMASHITA;
    case 24:
    case "GID_RAMP_MINATOMIRAI_OUT_MINATOMIRAI":
      return gidRamp.GID_RAMP_MINATOMIRAI_OUT_MINATOMIRAI;
    case 25:
    case "GID_RAMP_NAGOYA_MARUNOUCHI":
      return gidRamp.GID_RAMP_NAGOYA_MARUNOUCHI;
    case 26:
    case "GID_RAMP_OOSAKA_DOUTONBORI":
      return gidRamp.GID_RAMP_OOSAKA_DOUTONBORI;
    case 27:
    case "GID_RAMP_KOBE_SHINKOUCHOU":
      return gidRamp.GID_RAMP_KOBE_SHINKOUCHOU;
    case 28:
    case "GID_RAMP_KOBE_NADAOOHASHI":
      return gidRamp.GID_RAMP_KOBE_NADAOOHASHI;
    case 29:
    case "GID_RAMP_FUKUOKA_WEST_MEIHAMA":
      return gidRamp.GID_RAMP_FUKUOKA_WEST_MEIHAMA;
    case 30:
    case "GID_RAMP_FUKUOKA_WEST_HAKATA":
      return gidRamp.GID_RAMP_FUKUOKA_WEST_HAKATA;
    case 31:
    case "GID_RAMP_FUKUOKA_EAST_NISHI":
      return gidRamp.GID_RAMP_FUKUOKA_EAST_NISHI;
    case 32:
    case "GID_RAMP_FUKUOKA_EAST_HANDOUBASHI":
      return gidRamp.GID_RAMP_FUKUOKA_EAST_HANDOUBASHI;
    case 33:
    case "GID_RAMP_HAKONE_FOR":
      return gidRamp.GID_RAMP_HAKONE_FOR;
    case 34:
    case "GID_RAMP_HAKONE_BACK":
      return gidRamp.GID_RAMP_HAKONE_BACK;
    case 35:
    case "GID_RAMP_TURNPIKE_UP":
      return gidRamp.GID_RAMP_TURNPIKE_UP;
    case 36:
    case "GID_RAMP_TURNPIKE_DOWN":
      return gidRamp.GID_RAMP_TURNPIKE_DOWN;
    case 37:
    case "GID_RAMP_HIROSHIMA_SHINONOME":
      return gidRamp.GID_RAMP_HIROSHIMA_SHINONOME;
    case 38:
    case "GID_RAMP_HIROSHIMA_UJINA":
      return gidRamp.GID_RAMP_HIROSHIMA_UJINA;
    case -1:
    case "UNRECOGNIZED":
    default:
      return gidRamp.UNRECOGNIZED;
  }
}

export function gidRampToJSON(object: gidRamp): string {
  switch (object) {
    case gidRamp.GID_RAMP_C1_IN_KANDABASHI:
      return "GID_RAMP_C1_IN_KANDABASHI";
    case gidRamp.GID_RAMP_C1_IN_SHIODOME:
      return "GID_RAMP_C1_IN_SHIODOME";
    case gidRamp.GID_RAMP_C1_OUT_KANDABASHI:
      return "GID_RAMP_C1_OUT_KANDABASHI";
    case gidRamp.GID_RAMP_C1_OUT_SHIBA:
      return "GID_RAMP_C1_OUT_SHIBA";
    case gidRamp.GID_RAMP_RING_LEFT_ARIAKE:
      return "GID_RAMP_RING_LEFT_ARIAKE";
    case gidRamp.GID_RAMP_RING_RIGHT_KIBA:
      return "GID_RAMP_RING_RIGHT_KIBA";
    case gidRamp.GID_RAMP_SUBTOKYO_SHIBUYA:
      return "GID_RAMP_SUBTOKYO_SHIBUYA";
    case gidRamp.GID_RAMP_SUBTOKYO_GAIEN:
      return "GID_RAMP_SUBTOKYO_GAIEN";
    case gidRamp.GID_RAMP_SUBTOKYO_DAIKANCHOU:
      return "GID_RAMP_SUBTOKYO_DAIKANCHOU";
    case gidRamp.GID_RAMP_SUBTOKYO_SHINJUKU:
      return "GID_RAMP_SUBTOKYO_SHINJUKU";
    case gidRamp.GID_RAMP_WANGAN_EAST_AIRPORT:
      return "GID_RAMP_WANGAN_EAST_AIRPORT";
    case gidRamp.GID_RAMP_WANGAN_EAST_DAIKOKU:
      return "GID_RAMP_WANGAN_EAST_DAIKOKU";
    case gidRamp.GID_RAMP_WANGAN_WEST_RINKAI:
      return "GID_RAMP_WANGAN_WEST_RINKAI";
    case gidRamp.GID_RAMP_WANGAN_WEST_AIRPORT:
      return "GID_RAMP_WANGAN_WEST_AIRPORT";
    case gidRamp.GID_RAMP_K1_DOWN_SHIBAURA:
      return "GID_RAMP_K1_DOWN_SHIBAURA";
    case gidRamp.GID_RAMP_K1_DOWN_HANEDA:
      return "GID_RAMP_K1_DOWN_HANEDA";
    case gidRamp.GID_RAMP_K1_UP_HANEDA:
      return "GID_RAMP_K1_UP_HANEDA";
    case gidRamp.GID_RAMP_K1_UP_SHIOIRI:
      return "GID_RAMP_K1_UP_SHIOIRI";
    case gidRamp.GID_RAMP_YAESU_SHIODOME:
      return "GID_RAMP_YAESU_SHIODOME";
    case gidRamp.GID_RAMP_YAESU_KYOBASHI:
      return "GID_RAMP_YAESU_KYOBASHI";
    case gidRamp.GID_RAMP_YAESU_KANDABASHI:
      return "GID_RAMP_YAESU_KANDABASHI";
    case gidRamp.GID_RAMP_MINATOMIRAI_IN_HIGASHIKANAGAWA:
      return "GID_RAMP_MINATOMIRAI_IN_HIGASHIKANAGAWA";
    case gidRamp.GID_RAMP_MINATOMIRAI_IN_MINATOMIRAI:
      return "GID_RAMP_MINATOMIRAI_IN_MINATOMIRAI";
    case gidRamp.GID_RAMP_MINATOMIRAI_OUT_SHINYAMASHITA:
      return "GID_RAMP_MINATOMIRAI_OUT_SHINYAMASHITA";
    case gidRamp.GID_RAMP_MINATOMIRAI_OUT_MINATOMIRAI:
      return "GID_RAMP_MINATOMIRAI_OUT_MINATOMIRAI";
    case gidRamp.GID_RAMP_NAGOYA_MARUNOUCHI:
      return "GID_RAMP_NAGOYA_MARUNOUCHI";
    case gidRamp.GID_RAMP_OOSAKA_DOUTONBORI:
      return "GID_RAMP_OOSAKA_DOUTONBORI";
    case gidRamp.GID_RAMP_KOBE_SHINKOUCHOU:
      return "GID_RAMP_KOBE_SHINKOUCHOU";
    case gidRamp.GID_RAMP_KOBE_NADAOOHASHI:
      return "GID_RAMP_KOBE_NADAOOHASHI";
    case gidRamp.GID_RAMP_FUKUOKA_WEST_MEIHAMA:
      return "GID_RAMP_FUKUOKA_WEST_MEIHAMA";
    case gidRamp.GID_RAMP_FUKUOKA_WEST_HAKATA:
      return "GID_RAMP_FUKUOKA_WEST_HAKATA";
    case gidRamp.GID_RAMP_FUKUOKA_EAST_NISHI:
      return "GID_RAMP_FUKUOKA_EAST_NISHI";
    case gidRamp.GID_RAMP_FUKUOKA_EAST_HANDOUBASHI:
      return "GID_RAMP_FUKUOKA_EAST_HANDOUBASHI";
    case gidRamp.GID_RAMP_HAKONE_FOR:
      return "GID_RAMP_HAKONE_FOR";
    case gidRamp.GID_RAMP_HAKONE_BACK:
      return "GID_RAMP_HAKONE_BACK";
    case gidRamp.GID_RAMP_TURNPIKE_UP:
      return "GID_RAMP_TURNPIKE_UP";
    case gidRamp.GID_RAMP_TURNPIKE_DOWN:
      return "GID_RAMP_TURNPIKE_DOWN";
    case gidRamp.GID_RAMP_HIROSHIMA_SHINONOME:
      return "GID_RAMP_HIROSHIMA_SHINONOME";
    case gidRamp.GID_RAMP_HIROSHIMA_UJINA:
      return "GID_RAMP_HIROSHIMA_UJINA";
    case gidRamp.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum gidPath {
  GID_PATH_C1IN_KANDABASHI01 = 0,
  GID_PATH_C1IN_KANDABASHI02 = 1,
  GID_PATH_C1IN_KANDABASHI03 = 2,
  GID_PATH_C1IN_SHIODOME01 = 3,
  GID_PATH_C1OUT_KANDABASHI01 = 4,
  GID_PATH_C1OUT_KANDABASHI02 = 5,
  GID_PATH_C1OUT_KANDABASHI03 = 6,
  GID_PATH_C1OUT_SHIBAKOUEN01 = 7,
  GID_PATH_C1OUT_SHIBAKOUEN02 = 8,
  GID_PATH_C1OUT_SHIBAKOUEN03 = 9,
  GID_PATH_N9IN_ARIAKE01 = 10,
  GID_PATH_N9IN_ARIAKE02 = 11,
  GID_PATH_N9IN_ARIAKE03 = 12,
  GID_PATH_N9OUT_KIBA01 = 13,
  GID_PATH_N9OUT_KIBA02 = 14,
  GID_PATH_N9OUT_KIBA03 = 15,
  GID_PATH_WTEAST_SHIBUYA = 16,
  GID_PATH_WTWEST_GAIEN = 17,
  GID_PATH_WTUP_DAIKANCHOU = 18,
  GID_PATH_WTDOWN_SHINJYUKU = 19,
  GID_PATH_WGIN_AIRPORT01 = 20,
  GID_PATH_WGIN_AIRPORT02 = 21,
  GID_PATH_WGIN_AIRPORT03 = 22,
  GID_PATH_WGIN_DAIKOKU01 = 23,
  GID_PATH_WGOUT_13_01 = 24,
  GID_PATH_WGOUT_AIRPORT01 = 25,
  GID_PATH_WGOUT_AIRPORT02 = 26,
  GID_PATH_KGDOWN_SHIBAURA01 = 27,
  GID_PATH_KGDOWN_HANEDA01 = 28,
  GID_PATH_KGDOWN_HANEDA02 = 29,
  GID_PATH_KGUP_HANEDA01 = 30,
  GID_PATH_KGUP_HANEDA02 = 31,
  GID_PATH_KGUP_SHIOIRI01 = 32,
  GID_PATH_KGUP_SHIOIRI02 = 33,
  GID_PATH_YSIN_SHIODOME01 = 34,
  GID_PATH_YSIN_SHIODOME02 = 35,
  GID_PATH_YSOUT_KYOBASHI01 = 36,
  GID_PATH_YSOUT_KANDABASHI01 = 37,
  GID_PATH_KGDOWN_HIGASHIKANAGAWA01 = 38,
  GID_PATH_KGDOWN_HIGASHIKANAGAWA02 = 39,
  GID_PATH_KGDOWN_MINATOMIRAI01 = 40,
  GID_PATH_KGDOWN_MINATOMIRAI02 = 41,
  GID_PATH_KGDOWN_MINATOMIRAI03 = 42,
  GID_PATH_KGUP_SHINYAMASHITA01 = 43,
  GID_PATH_KGUP_SHINYAMASHITA02 = 44,
  GID_PATH_KGUP_SHINYAMASHITA03 = 45,
  GID_PATH_KGUP_MINATOMIRAI01 = 46,
  GID_PATH_KGUP_MINATOMIRAI02 = 47,
  GID_PATH_KGUP_MINATOMIRAI03 = 48,
  GID_PATH_NGR_MARUNOUCHI = 49,
  GID_PATH_OS_TONBORI01 = 50,
  GID_PATH_OS_TONBORI02 = 51,
  GID_PATH_OS_TONBORI03 = 52,
  GID_PATH_OS_TONBORI04 = 53,
  GID_PATH_KB_SHINKOUCHOU = 54,
  GID_PATH_KB_NADA = 55,
  GID_PATH_HS_SHINONOME = 56,
  GID_PATH_HS_UJINA = 57,
  GID_PATH_FK_MEINOHAMA = 58,
  GID_PATH_FK_HAKATA = 59,
  GID_PATH_FK_NISHIKOUEN = 60,
  GID_PATH_FK_HANMICHIBASHI = 61,
  GID_PATH_HKFOR = 62,
  GID_PATH_HKBACK = 63,
  GID_PATH_TP_BOTTOM = 64,
  GID_PATH_TP_TOP = 65,
  UNRECOGNIZED = -1,
}

export function gidPathFromJSON(object: any): gidPath {
  switch (object) {
    case 0:
    case "GID_PATH_C1IN_KANDABASHI01":
      return gidPath.GID_PATH_C1IN_KANDABASHI01;
    case 1:
    case "GID_PATH_C1IN_KANDABASHI02":
      return gidPath.GID_PATH_C1IN_KANDABASHI02;
    case 2:
    case "GID_PATH_C1IN_KANDABASHI03":
      return gidPath.GID_PATH_C1IN_KANDABASHI03;
    case 3:
    case "GID_PATH_C1IN_SHIODOME01":
      return gidPath.GID_PATH_C1IN_SHIODOME01;
    case 4:
    case "GID_PATH_C1OUT_KANDABASHI01":
      return gidPath.GID_PATH_C1OUT_KANDABASHI01;
    case 5:
    case "GID_PATH_C1OUT_KANDABASHI02":
      return gidPath.GID_PATH_C1OUT_KANDABASHI02;
    case 6:
    case "GID_PATH_C1OUT_KANDABASHI03":
      return gidPath.GID_PATH_C1OUT_KANDABASHI03;
    case 7:
    case "GID_PATH_C1OUT_SHIBAKOUEN01":
      return gidPath.GID_PATH_C1OUT_SHIBAKOUEN01;
    case 8:
    case "GID_PATH_C1OUT_SHIBAKOUEN02":
      return gidPath.GID_PATH_C1OUT_SHIBAKOUEN02;
    case 9:
    case "GID_PATH_C1OUT_SHIBAKOUEN03":
      return gidPath.GID_PATH_C1OUT_SHIBAKOUEN03;
    case 10:
    case "GID_PATH_N9IN_ARIAKE01":
      return gidPath.GID_PATH_N9IN_ARIAKE01;
    case 11:
    case "GID_PATH_N9IN_ARIAKE02":
      return gidPath.GID_PATH_N9IN_ARIAKE02;
    case 12:
    case "GID_PATH_N9IN_ARIAKE03":
      return gidPath.GID_PATH_N9IN_ARIAKE03;
    case 13:
    case "GID_PATH_N9OUT_KIBA01":
      return gidPath.GID_PATH_N9OUT_KIBA01;
    case 14:
    case "GID_PATH_N9OUT_KIBA02":
      return gidPath.GID_PATH_N9OUT_KIBA02;
    case 15:
    case "GID_PATH_N9OUT_KIBA03":
      return gidPath.GID_PATH_N9OUT_KIBA03;
    case 16:
    case "GID_PATH_WTEAST_SHIBUYA":
      return gidPath.GID_PATH_WTEAST_SHIBUYA;
    case 17:
    case "GID_PATH_WTWEST_GAIEN":
      return gidPath.GID_PATH_WTWEST_GAIEN;
    case 18:
    case "GID_PATH_WTUP_DAIKANCHOU":
      return gidPath.GID_PATH_WTUP_DAIKANCHOU;
    case 19:
    case "GID_PATH_WTDOWN_SHINJYUKU":
      return gidPath.GID_PATH_WTDOWN_SHINJYUKU;
    case 20:
    case "GID_PATH_WGIN_AIRPORT01":
      return gidPath.GID_PATH_WGIN_AIRPORT01;
    case 21:
    case "GID_PATH_WGIN_AIRPORT02":
      return gidPath.GID_PATH_WGIN_AIRPORT02;
    case 22:
    case "GID_PATH_WGIN_AIRPORT03":
      return gidPath.GID_PATH_WGIN_AIRPORT03;
    case 23:
    case "GID_PATH_WGIN_DAIKOKU01":
      return gidPath.GID_PATH_WGIN_DAIKOKU01;
    case 24:
    case "GID_PATH_WGOUT_13_01":
      return gidPath.GID_PATH_WGOUT_13_01;
    case 25:
    case "GID_PATH_WGOUT_AIRPORT01":
      return gidPath.GID_PATH_WGOUT_AIRPORT01;
    case 26:
    case "GID_PATH_WGOUT_AIRPORT02":
      return gidPath.GID_PATH_WGOUT_AIRPORT02;
    case 27:
    case "GID_PATH_KGDOWN_SHIBAURA01":
      return gidPath.GID_PATH_KGDOWN_SHIBAURA01;
    case 28:
    case "GID_PATH_KGDOWN_HANEDA01":
      return gidPath.GID_PATH_KGDOWN_HANEDA01;
    case 29:
    case "GID_PATH_KGDOWN_HANEDA02":
      return gidPath.GID_PATH_KGDOWN_HANEDA02;
    case 30:
    case "GID_PATH_KGUP_HANEDA01":
      return gidPath.GID_PATH_KGUP_HANEDA01;
    case 31:
    case "GID_PATH_KGUP_HANEDA02":
      return gidPath.GID_PATH_KGUP_HANEDA02;
    case 32:
    case "GID_PATH_KGUP_SHIOIRI01":
      return gidPath.GID_PATH_KGUP_SHIOIRI01;
    case 33:
    case "GID_PATH_KGUP_SHIOIRI02":
      return gidPath.GID_PATH_KGUP_SHIOIRI02;
    case 34:
    case "GID_PATH_YSIN_SHIODOME01":
      return gidPath.GID_PATH_YSIN_SHIODOME01;
    case 35:
    case "GID_PATH_YSIN_SHIODOME02":
      return gidPath.GID_PATH_YSIN_SHIODOME02;
    case 36:
    case "GID_PATH_YSOUT_KYOBASHI01":
      return gidPath.GID_PATH_YSOUT_KYOBASHI01;
    case 37:
    case "GID_PATH_YSOUT_KANDABASHI01":
      return gidPath.GID_PATH_YSOUT_KANDABASHI01;
    case 38:
    case "GID_PATH_KGDOWN_HIGASHIKANAGAWA01":
      return gidPath.GID_PATH_KGDOWN_HIGASHIKANAGAWA01;
    case 39:
    case "GID_PATH_KGDOWN_HIGASHIKANAGAWA02":
      return gidPath.GID_PATH_KGDOWN_HIGASHIKANAGAWA02;
    case 40:
    case "GID_PATH_KGDOWN_MINATOMIRAI01":
      return gidPath.GID_PATH_KGDOWN_MINATOMIRAI01;
    case 41:
    case "GID_PATH_KGDOWN_MINATOMIRAI02":
      return gidPath.GID_PATH_KGDOWN_MINATOMIRAI02;
    case 42:
    case "GID_PATH_KGDOWN_MINATOMIRAI03":
      return gidPath.GID_PATH_KGDOWN_MINATOMIRAI03;
    case 43:
    case "GID_PATH_KGUP_SHINYAMASHITA01":
      return gidPath.GID_PATH_KGUP_SHINYAMASHITA01;
    case 44:
    case "GID_PATH_KGUP_SHINYAMASHITA02":
      return gidPath.GID_PATH_KGUP_SHINYAMASHITA02;
    case 45:
    case "GID_PATH_KGUP_SHINYAMASHITA03":
      return gidPath.GID_PATH_KGUP_SHINYAMASHITA03;
    case 46:
    case "GID_PATH_KGUP_MINATOMIRAI01":
      return gidPath.GID_PATH_KGUP_MINATOMIRAI01;
    case 47:
    case "GID_PATH_KGUP_MINATOMIRAI02":
      return gidPath.GID_PATH_KGUP_MINATOMIRAI02;
    case 48:
    case "GID_PATH_KGUP_MINATOMIRAI03":
      return gidPath.GID_PATH_KGUP_MINATOMIRAI03;
    case 49:
    case "GID_PATH_NGR_MARUNOUCHI":
      return gidPath.GID_PATH_NGR_MARUNOUCHI;
    case 50:
    case "GID_PATH_OS_TONBORI01":
      return gidPath.GID_PATH_OS_TONBORI01;
    case 51:
    case "GID_PATH_OS_TONBORI02":
      return gidPath.GID_PATH_OS_TONBORI02;
    case 52:
    case "GID_PATH_OS_TONBORI03":
      return gidPath.GID_PATH_OS_TONBORI03;
    case 53:
    case "GID_PATH_OS_TONBORI04":
      return gidPath.GID_PATH_OS_TONBORI04;
    case 54:
    case "GID_PATH_KB_SHINKOUCHOU":
      return gidPath.GID_PATH_KB_SHINKOUCHOU;
    case 55:
    case "GID_PATH_KB_NADA":
      return gidPath.GID_PATH_KB_NADA;
    case 56:
    case "GID_PATH_HS_SHINONOME":
      return gidPath.GID_PATH_HS_SHINONOME;
    case 57:
    case "GID_PATH_HS_UJINA":
      return gidPath.GID_PATH_HS_UJINA;
    case 58:
    case "GID_PATH_FK_MEINOHAMA":
      return gidPath.GID_PATH_FK_MEINOHAMA;
    case 59:
    case "GID_PATH_FK_HAKATA":
      return gidPath.GID_PATH_FK_HAKATA;
    case 60:
    case "GID_PATH_FK_NISHIKOUEN":
      return gidPath.GID_PATH_FK_NISHIKOUEN;
    case 61:
    case "GID_PATH_FK_HANMICHIBASHI":
      return gidPath.GID_PATH_FK_HANMICHIBASHI;
    case 62:
    case "GID_PATH_HKFOR":
      return gidPath.GID_PATH_HKFOR;
    case 63:
    case "GID_PATH_HKBACK":
      return gidPath.GID_PATH_HKBACK;
    case 64:
    case "GID_PATH_TP_BOTTOM":
      return gidPath.GID_PATH_TP_BOTTOM;
    case 65:
    case "GID_PATH_TP_TOP":
      return gidPath.GID_PATH_TP_TOP;
    case -1:
    case "UNRECOGNIZED":
    default:
      return gidPath.UNRECOGNIZED;
  }
}

export function gidPathToJSON(object: gidPath): string {
  switch (object) {
    case gidPath.GID_PATH_C1IN_KANDABASHI01:
      return "GID_PATH_C1IN_KANDABASHI01";
    case gidPath.GID_PATH_C1IN_KANDABASHI02:
      return "GID_PATH_C1IN_KANDABASHI02";
    case gidPath.GID_PATH_C1IN_KANDABASHI03:
      return "GID_PATH_C1IN_KANDABASHI03";
    case gidPath.GID_PATH_C1IN_SHIODOME01:
      return "GID_PATH_C1IN_SHIODOME01";
    case gidPath.GID_PATH_C1OUT_KANDABASHI01:
      return "GID_PATH_C1OUT_KANDABASHI01";
    case gidPath.GID_PATH_C1OUT_KANDABASHI02:
      return "GID_PATH_C1OUT_KANDABASHI02";
    case gidPath.GID_PATH_C1OUT_KANDABASHI03:
      return "GID_PATH_C1OUT_KANDABASHI03";
    case gidPath.GID_PATH_C1OUT_SHIBAKOUEN01:
      return "GID_PATH_C1OUT_SHIBAKOUEN01";
    case gidPath.GID_PATH_C1OUT_SHIBAKOUEN02:
      return "GID_PATH_C1OUT_SHIBAKOUEN02";
    case gidPath.GID_PATH_C1OUT_SHIBAKOUEN03:
      return "GID_PATH_C1OUT_SHIBAKOUEN03";
    case gidPath.GID_PATH_N9IN_ARIAKE01:
      return "GID_PATH_N9IN_ARIAKE01";
    case gidPath.GID_PATH_N9IN_ARIAKE02:
      return "GID_PATH_N9IN_ARIAKE02";
    case gidPath.GID_PATH_N9IN_ARIAKE03:
      return "GID_PATH_N9IN_ARIAKE03";
    case gidPath.GID_PATH_N9OUT_KIBA01:
      return "GID_PATH_N9OUT_KIBA01";
    case gidPath.GID_PATH_N9OUT_KIBA02:
      return "GID_PATH_N9OUT_KIBA02";
    case gidPath.GID_PATH_N9OUT_KIBA03:
      return "GID_PATH_N9OUT_KIBA03";
    case gidPath.GID_PATH_WTEAST_SHIBUYA:
      return "GID_PATH_WTEAST_SHIBUYA";
    case gidPath.GID_PATH_WTWEST_GAIEN:
      return "GID_PATH_WTWEST_GAIEN";
    case gidPath.GID_PATH_WTUP_DAIKANCHOU:
      return "GID_PATH_WTUP_DAIKANCHOU";
    case gidPath.GID_PATH_WTDOWN_SHINJYUKU:
      return "GID_PATH_WTDOWN_SHINJYUKU";
    case gidPath.GID_PATH_WGIN_AIRPORT01:
      return "GID_PATH_WGIN_AIRPORT01";
    case gidPath.GID_PATH_WGIN_AIRPORT02:
      return "GID_PATH_WGIN_AIRPORT02";
    case gidPath.GID_PATH_WGIN_AIRPORT03:
      return "GID_PATH_WGIN_AIRPORT03";
    case gidPath.GID_PATH_WGIN_DAIKOKU01:
      return "GID_PATH_WGIN_DAIKOKU01";
    case gidPath.GID_PATH_WGOUT_13_01:
      return "GID_PATH_WGOUT_13_01";
    case gidPath.GID_PATH_WGOUT_AIRPORT01:
      return "GID_PATH_WGOUT_AIRPORT01";
    case gidPath.GID_PATH_WGOUT_AIRPORT02:
      return "GID_PATH_WGOUT_AIRPORT02";
    case gidPath.GID_PATH_KGDOWN_SHIBAURA01:
      return "GID_PATH_KGDOWN_SHIBAURA01";
    case gidPath.GID_PATH_KGDOWN_HANEDA01:
      return "GID_PATH_KGDOWN_HANEDA01";
    case gidPath.GID_PATH_KGDOWN_HANEDA02:
      return "GID_PATH_KGDOWN_HANEDA02";
    case gidPath.GID_PATH_KGUP_HANEDA01:
      return "GID_PATH_KGUP_HANEDA01";
    case gidPath.GID_PATH_KGUP_HANEDA02:
      return "GID_PATH_KGUP_HANEDA02";
    case gidPath.GID_PATH_KGUP_SHIOIRI01:
      return "GID_PATH_KGUP_SHIOIRI01";
    case gidPath.GID_PATH_KGUP_SHIOIRI02:
      return "GID_PATH_KGUP_SHIOIRI02";
    case gidPath.GID_PATH_YSIN_SHIODOME01:
      return "GID_PATH_YSIN_SHIODOME01";
    case gidPath.GID_PATH_YSIN_SHIODOME02:
      return "GID_PATH_YSIN_SHIODOME02";
    case gidPath.GID_PATH_YSOUT_KYOBASHI01:
      return "GID_PATH_YSOUT_KYOBASHI01";
    case gidPath.GID_PATH_YSOUT_KANDABASHI01:
      return "GID_PATH_YSOUT_KANDABASHI01";
    case gidPath.GID_PATH_KGDOWN_HIGASHIKANAGAWA01:
      return "GID_PATH_KGDOWN_HIGASHIKANAGAWA01";
    case gidPath.GID_PATH_KGDOWN_HIGASHIKANAGAWA02:
      return "GID_PATH_KGDOWN_HIGASHIKANAGAWA02";
    case gidPath.GID_PATH_KGDOWN_MINATOMIRAI01:
      return "GID_PATH_KGDOWN_MINATOMIRAI01";
    case gidPath.GID_PATH_KGDOWN_MINATOMIRAI02:
      return "GID_PATH_KGDOWN_MINATOMIRAI02";
    case gidPath.GID_PATH_KGDOWN_MINATOMIRAI03:
      return "GID_PATH_KGDOWN_MINATOMIRAI03";
    case gidPath.GID_PATH_KGUP_SHINYAMASHITA01:
      return "GID_PATH_KGUP_SHINYAMASHITA01";
    case gidPath.GID_PATH_KGUP_SHINYAMASHITA02:
      return "GID_PATH_KGUP_SHINYAMASHITA02";
    case gidPath.GID_PATH_KGUP_SHINYAMASHITA03:
      return "GID_PATH_KGUP_SHINYAMASHITA03";
    case gidPath.GID_PATH_KGUP_MINATOMIRAI01:
      return "GID_PATH_KGUP_MINATOMIRAI01";
    case gidPath.GID_PATH_KGUP_MINATOMIRAI02:
      return "GID_PATH_KGUP_MINATOMIRAI02";
    case gidPath.GID_PATH_KGUP_MINATOMIRAI03:
      return "GID_PATH_KGUP_MINATOMIRAI03";
    case gidPath.GID_PATH_NGR_MARUNOUCHI:
      return "GID_PATH_NGR_MARUNOUCHI";
    case gidPath.GID_PATH_OS_TONBORI01:
      return "GID_PATH_OS_TONBORI01";
    case gidPath.GID_PATH_OS_TONBORI02:
      return "GID_PATH_OS_TONBORI02";
    case gidPath.GID_PATH_OS_TONBORI03:
      return "GID_PATH_OS_TONBORI03";
    case gidPath.GID_PATH_OS_TONBORI04:
      return "GID_PATH_OS_TONBORI04";
    case gidPath.GID_PATH_KB_SHINKOUCHOU:
      return "GID_PATH_KB_SHINKOUCHOU";
    case gidPath.GID_PATH_KB_NADA:
      return "GID_PATH_KB_NADA";
    case gidPath.GID_PATH_HS_SHINONOME:
      return "GID_PATH_HS_SHINONOME";
    case gidPath.GID_PATH_HS_UJINA:
      return "GID_PATH_HS_UJINA";
    case gidPath.GID_PATH_FK_MEINOHAMA:
      return "GID_PATH_FK_MEINOHAMA";
    case gidPath.GID_PATH_FK_HAKATA:
      return "GID_PATH_FK_HAKATA";
    case gidPath.GID_PATH_FK_NISHIKOUEN:
      return "GID_PATH_FK_NISHIKOUEN";
    case gidPath.GID_PATH_FK_HANMICHIBASHI:
      return "GID_PATH_FK_HANMICHIBASHI";
    case gidPath.GID_PATH_HKFOR:
      return "GID_PATH_HKFOR";
    case gidPath.GID_PATH_HKBACK:
      return "GID_PATH_HKBACK";
    case gidPath.GID_PATH_TP_BOTTOM:
      return "GID_PATH_TP_BOTTOM";
    case gidPath.GID_PATH_TP_TOP:
      return "GID_PATH_TP_TOP";
    case gidPath.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum gidTimezone {
  GID_TIMEZONE_DAY = 0,
  GID_TIMEZONE_NIGHT = 1,
  UNRECOGNIZED = -1,
}

export function gidTimezoneFromJSON(object: any): gidTimezone {
  switch (object) {
    case 0:
    case "GID_TIMEZONE_DAY":
      return gidTimezone.GID_TIMEZONE_DAY;
    case 1:
    case "GID_TIMEZONE_NIGHT":
      return gidTimezone.GID_TIMEZONE_NIGHT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return gidTimezone.UNRECOGNIZED;
  }
}

export function gidTimezoneToJSON(object: gidTimezone): string {
  switch (object) {
    case gidTimezone.GID_TIMEZONE_DAY:
      return "GID_TIMEZONE_DAY";
    case gidTimezone.GID_TIMEZONE_NIGHT:
      return "GID_TIMEZONE_NIGHT";
    case gidTimezone.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum gidExtreme {
  GID_EXTREME_NORMAL = 0,
  GID_EXTREME_REVERSE = 1,
  UNRECOGNIZED = -1,
}

export function gidExtremeFromJSON(object: any): gidExtreme {
  switch (object) {
    case 0:
    case "GID_EXTREME_NORMAL":
      return gidExtreme.GID_EXTREME_NORMAL;
    case 1:
    case "GID_EXTREME_REVERSE":
      return gidExtreme.GID_EXTREME_REVERSE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return gidExtreme.UNRECOGNIZED;
  }
}

export function gidExtremeToJSON(object: gidExtreme): string {
  switch (object) {
    case gidExtreme.GID_EXTREME_NORMAL:
      return "GID_EXTREME_NORMAL";
    case gidExtreme.GID_EXTREME_REVERSE:
      return "GID_EXTREME_REVERSE";
    case gidExtreme.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
