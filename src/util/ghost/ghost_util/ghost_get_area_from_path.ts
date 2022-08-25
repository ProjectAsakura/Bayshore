export async function getArea(path: number)
{
    let area = 0;

    if(path >= 0 && path <= 9){ // GID_PATH_C1
        area = Number(0);
    }
    else if(path >= 10 && path <= 15){ // GID_PATH_N9
        area = Number(1);
    }
    else if(path >= 16 && path <= 17){ // GID_PATH_WTEAST
        area = Number(2);
    }
    else if(path >= 18 && path <= 19){ // GID_PATH_WT_UP_DOWN
        area = Number(3);
    }
    else if(path >= 20 && path <= 26){ // GID_PATH_WG
        area = Number(4);
    }
    else if(path >= 27 && path <= 33){ // GID_PATH_KG
        area = Number(5);
    }
    else if(path >= 34 && path <= 37){ // GID_PATH_YS
        area = Number(6);
    }
    else if(path >= 38 && path <= 48){ // GID_PATH_KG_SHINYAMASHITA_MINATOMIRAI
        area = Number(7);
    }
    else if(path === 49){ // GID_PATH_NGR
        area = Number(8);
    }
    else if(path >= 50 && path <= 53){ // GID_PATH_OS
        area = Number(9);
    }
    else if(path >= 54 && path <= 55){ // GID_PATH_KB
        area = Number(10);
    }
    else if(path >= 58 && path <= 61){ // GID_PATH_FK
        area = Number(11);
    }
    else if(path >= 62 && path <= 63){ // GID_PATH_HK
        area = Number(12);
    }
    else if(path >= 64 && path <= 65){ // GID_PATH_TP
        area = Number(13);
    }
    else if(path >= 56 && path <= 57){ // GID_PATH_HS
        area = Number(18);
    }

    return { area }
}