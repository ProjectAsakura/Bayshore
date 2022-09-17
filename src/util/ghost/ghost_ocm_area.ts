// OCM Area
export async function OCMArea(competition_id: number)
{
    let areaVal = 0;
    let rampVal = 0;
    let pathVal = 0;

    // 16th - C1 Outbound
    if(competition_id === 1) 
    {
        // GID_RUNAREA_C1
        areaVal = 0;

        // GID_RAMP_C1_OUT_KANDABASHI
        rampVal = 2;

        // GID_PATH_C1OUT_KANDABASHI03
        pathVal = 6;
    }
    // 17th - Osaka
    else if(competition_id === 2) 
    { 
        // GID_RUNAREA_OSAKA
        areaVal = 9;

        // GID_RAMP_OOSAKA_DOUTONBORI
        rampVal = 26;

        // GID_PATH_OS_TONBORI04
        pathVal = 53;
    }
    // 18th - Fukuoka
    else if(competition_id === 3) 
    { 
        // GID_RUNAREA_FUKUOKA
        areaVal = 11;

        // GID_RAMP_FUKUOKA_EAST_NISHI
        rampVal = 31
        
        // GID_PATH_FK_NISHIKOUEN;
        pathVal = 60;
    }
    // 19th - Nagoya
    else if(competition_id === 4) 
    { 
        // GID_RUNAREA_NAGOYA
        areaVal = 8;

        // GID_RAMP_NAGOYA_MARUNOUCHI
        rampVal = 25;

        // GID_PATH_NGR_MARUNOUCHI
        pathVal = 49;
    }
    // 6th - C1 Inbound
    else if(competition_id === 5) 
    { 
        // GID_RUNAREA_C1
        areaVal = 0;

        // GID_RAMP_C1_IN_KANDABASHI
        rampVal = 0;

        // GID_PATH_C1IN_KANDABASHI02
        pathVal = 1;
    }
    // 20th - Kobe
    else if(competition_id === 6) 
    { 
        // GID_RUNAREA_KOBE
        areaVal = 10;

        // GID_RAMP_KOBE_NADAOOHASHI
        rampVal = 28;

        // GID_PATH_KB_NADA
        pathVal = 55;
    }
    // 7th - Fukutoshin
    else if(competition_id === 7) 
    { 
        // GID_RUNAREA_SUBTOKYO_3_4
        areaVal = 2;

        // GID_RAMP_SUBTOKYO_GAIEN
        rampVal = 7;

        // GID_PATH_WTWEST_GAIEN
        pathVal = 17;
    }
    // 21st - Hiroshima
    else if(competition_id === 8) 
    { 
        // GID_RUNAREA_HIROSHIMA
        areaVal = 18;

        // GID_RAMP_HIROSHIMA_SHINONOME
        rampVal = 37;

        // GID_PATH_HS_SHINONOME
        pathVal = 56;
    }
    // 8th - Hakone
    else if(competition_id === 9) 
    { 
        // GID_RUNAREA_HAKONE
        areaVal = 12;

        // GID_RAMP_HAKONE_FOR
        rampVal = 33;

        // GID_PATH_HKFOR
        pathVal = 62;
    }
    // 1st - C1 Outbound
    else if(competition_id === 10) 
    { 
        // GID_RUNAREA_C1
        areaVal = 0;

        // GID_RAMP_C1_OUT_SHIBA
        rampVal = 3;

        // GID_PATH_C1OUT_KANDABASHI03
        pathVal = 9;
    }
    // 2nd - Osaka
    else if(competition_id === 11) 
    { 
        // GID_RUNAREA_OSAKA
        areaVal = 9;

        // GID_RAMP_OOSAKA_DOUTONBORI
        rampVal = 26;

        // GID_PATH_OS_TONBORI03
        pathVal = 52;
    }
    // 3rd - Fukuoka
    else if(competition_id === 12) 
    { 
        // GID_RUNAREA_FUKUOKA
        areaVal = 11;

        // GID_RAMP_FUKUOKA_EAST_NISHI
        rampVal = 31
        
        // GID_PATH_FK_NISHIKOUEN;
        pathVal = 60;
    }
    // 4th - Nagoya
    else if(competition_id === 13) 
    { 
        // GID_RUNAREA_NAGOYA
        areaVal = 8;

        // GID_RAMP_NAGOYA_MARUNOUCHI
        rampVal = 25;

        // GID_PATH_NGR_MARUNOUCHI
        pathVal = 49;
    }
    // 5th - Yaesu
    else if(competition_id === 14) 
    { 
        // GID_RUNAREA_YAESU
        areaVal = 6;

        // GID_RAMP_YAESU_SHIODOME
        rampVal = 18;

        // GID_PATH_YSIN_SHIODOME01
        pathVal = 34;
    }
    // 9th - Hakone (Mt. Taikan)
    else if(competition_id === 15) 
    { 
        // GID_RUNAREA_TURNPIKE
        areaVal = 13;

        // GID_RAMP_TURNPIKE_UP
        rampVal = 35;

        // GID_PATH_TP_BOTTOM
        pathVal = 64;
    }
    //10th - Sub-center(Shibuya/Shinjuku)
    else if(competition_id === 16) 
    { 
        // GID_RUNAREA_SUBTOKYO_3_4
        areaVal = 2;

        // GID_RAMP_SUBTOKYO_GAIEN
        rampVal = 7;

        // GID_PATH_WTWEST_GAIEN
        pathVal = 17;
    }
    // 11th - Sub-center(Ikebukuro)
    else if(competition_id === 17) 
    { 
        // GID_RUNAREA_SUBTOKYO_5
        areaVal = 3;

        // GID_RAMP_SUBTOKYO_DAIKANCHOU
        rampVal = 8;

        // GID_PATH_WTUP_DAIKANCHOU
        pathVal = 18;
    }
    // 12th - Kobe
    else if(competition_id === 18) 
    { 
        // GID_RUNAREA_KOBE
        areaVal = 10;

        // GID_RAMP_KOBE_NADAOOHASHI
        rampVal = 28;

        // GID_PATH_KB_NADA
        pathVal = 55;
    }
    // 13th - New Belt Line
    else if(competition_id === 19) 
    { 
        // GID_RUNAREA_RING
        areaVal = 1;

        // GID_RAMP_RING_LEFT_ARIAKE
        rampVal = 4;

        // GID_PATH_N9IN_ARIAKE02
        pathVal = 11;
    }
    // 14th - Yokohama
    else if(competition_id === 20) 
    { 
        // GID_RUNAREA_YOKOHAMA
        areaVal = 7;

        // GID_RAMP_MINATOMIRAI_OUT_SHINYAMASHITA
        rampVal = 23;

        // GID_PATH_KGUP_SHINYAMASHITA03
        pathVal = 45;
    }
    // 15th - Hiroshima
    else if(competition_id === 21) 
    { 
        // GID_RUNAREA_HIROSHIMA
        areaVal = 18;

        // GID_RAMP_HIROSHIMA_UJINA
        rampVal = 38;

        // GID_PATH_HS_UJINA
        pathVal = 57;
    }

    // Return the value to 'BASE_PATH/src/modules/ghost_ocm.ts'
    return {areaVal, rampVal, pathVal};
}