const IFlags = ["HR", "TG", "INTERVIEW", "2_CASES", "STUDENT", "MISS_INTERVIEW","WITHOUT_GRADUATE", "BAD_SKILLS", "REGION", "DECLINED"] as const
type FlagType = typeof IFlags[number]

export interface ICandidate {
    id: number,
    category: string,
    fio: string,
    inStatusTime: string,
    acorrdance?: number,
    teamAnalysis?: number,
    flags?: FlagType[],
}

export interface IVacancy {
    id: number,
    title: string
    positionNumber: string
    createdAt: string
    manager?: string
    recrutor?: string
    brief: object
    content: string

}

export const Categories = {
    new: "Новая",
    declined: "Отклонена",
    interesting: "Может быть интерестна"
}
