import {ChangeEvent} from "react";
import * as React from "react";
import {SelectValue} from "@mui/base/useSelect";
import {IVacancy} from "../types/types.ts";
import {getRandomFIO} from "../randomizers/rundom.ts";


export const stringCallback = (fn: (state: string) => void) => (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    fn(e.target.value)
}
export const stringSelectCallback = (fn: (state: string) => void) => (e: React.MouseEvent | React.KeyboardEvent | React.FocusEvent | null, value: SelectValue<string, false>) => {
    fn(value || "")
}

export const vacancy: IVacancy = {
    title: "Middle JAVA developer",
    positionNumber: "13213214",
    manager: "Макаров М. А.",
    recrutor: "Воракам А. М.",
    createdAt: "2019-03-14",
    brief: {},
    ConsiderationByCustomer: [{
        id: 1,
        fio: getRandomFIO(),
        inStatusTime: "10.10.2023",
        acorrdance: 98,
        teamAnalysis: 66,
        flags: ["HR", "TG", "INTERVIEW", "2_CASES", "STUDENT", "BAD_SKILLS", "REGION", "DECLINED"]
    },
        {
            id: 2,
            fio: getRandomFIO(),
            inStatusTime: "10.10.2023",
            acorrdance: 70,
            teamAnalysis: 5,
        },
        {
            id: 3,
            fio: getRandomFIO(),
            inStatusTime: "10.10.2023",
            acorrdance: 70,
            teamAnalysis: 90,
            flags: ["HR", "TG", "INTERVIEW", "2_CASES", "STUDENT", "MISS_INTERVIEW","WITHOUT_GRADUATE", "BAD_SKILLS", "REGION", "DECLINED"]
        }
    ],
    new: [],
    declined: [],
    interesting: [],
}