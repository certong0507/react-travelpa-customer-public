export const COVERAGE_TYPE = {
    INDIVIDUAL: "individual",
    FAMILY: "family",
    INSURED_AND_SPOUSE: "insured & spouse",
}

export const TRAVEL_DOCUMENT_TYPE = [
    { label: "NRIC", value: "nric" },
    { label: "Passport", value: "passport" },
    { label: "Old IC", value: "old_ic" },
    { label: "Police Number", value: "police_number" },
]

export const INSURANCE = {
    AIG: "aig",
    ALLIANZ: "allianz",
    CHUBB: "chubb",
    RHB: "rhb",
    TUNE: "tune",
    AXA: "axa",
}

export const TRIP_TYPE = {
    SINGLE: {
        id: 1,
        code: "single",
    },
    ROUND: {
        id: 2,
        code: "round",
    },
    ANNUAL: {
        id: 3,
        code: "annual",
    },
}

export const COUNTRY_CODE = [{ label: "Malaysia (+60)", value: "+60" }]

export const GENERAL_SETTING = {
    PAGE_LIMIT: 10,
}
