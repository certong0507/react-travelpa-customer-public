import moment from "moment"
import { TRIP_TYPE } from "src/utils/enum";
import InsuranceRules from "src/pages/insurance/components/step2/rules/rules.json"

export const validateDuplicateNRIC = ({ list, name, value, excludeIndex }) => {
    return list.findIndex(
        (item, index) => index !== excludeIndex && item[name].toString() === value.toString(),
    )
}

export const validateAge = ({ nric, insurerCode, packageName, coverageType, tripTypeId, type }) => {
    
    let selectedPackageName = null
    if (InsuranceRules[insurerCode][packageName]) {
        selectedPackageName = packageName
    } else {
        selectedPackageName = "other"
    }

    let tripTypeName = null;
    if (tripTypeId === TRIP_TYPE.SINGLE.id || tripTypeId === TRIP_TYPE.ROUND.id) {
        tripTypeName = "single&round"
    } else if(tripTypeId === TRIP_TYPE.ANNUAL.id) {
        tripTypeName = "annual"
    }

    const rule = InsuranceRules[insurerCode][selectedPackageName][tripTypeName][coverageType]["age"][type];
    const insuredDOB = nricToDOB(nric)
    const { age, diffDays } = dobToAge(insuredDOB)

    let isValidAge = true
    let errorMessage = null
 
    if (rule["minDay"] !== null) {
        if (diffDays < rule["minDay"]) {
            isValidAge = false
            errorMessage = validateAgeErrorMessage(type, rule)
            return { isValidAge, errorMessage }
        }
    }

    if (rule["minDay"] === null) {
        if (rule["minYear"] !== null) {
            if (age < rule["minYear"]) {
                isValidAge = false
                errorMessage = validateAgeErrorMessage(type, rule)
                return { isValidAge, errorMessage }
            }
        }
    }

    if (rule["maxYear"] !== null) {
        if (age > rule["maxYear"]) {
            isValidAge = false
            errorMessage = validateAgeErrorMessage(type, rule)
            return { isValidAge, errorMessage }
        }
    }

    return { isValidAge, errorMessage }
}

export const validateAgeErrorMessage = (type, rule) => {
    let errorMessage = ""
    if(type === "child") {
        errorMessage += "Child insured age should between "
    } else {
        errorMessage += "Insured age should between "
    }
    let fromErrorMessage = ""
    if (rule["minDay"] !== null) {
        fromErrorMessage = rule["minDay"] + " days old"
    }
    if (rule["minDay"] === null) {
        fromErrorMessage = rule["minYear"] + " years old"
    }
    if(rule["maxYear"] !== null) {
        errorMessage = errorMessage + fromErrorMessage + " to " + rule["maxYear"] + " years old only."
    } else {
        errorMessage = errorMessage + "not less than " + fromErrorMessage + '.'
    }
    return errorMessage
}

export const nricToDOB = (nric) => {
    const checkValidNricRegex = /^(\d{2})(\d{2})(\d{2})-?\d{2}-?\d{4}$/

    if (nric.match(checkValidNricRegex)) {
        let year = (checkValidNricRegex.exec(nric) || [])[1] || ""
        let month = (checkValidNricRegex.exec(nric) || [])[2] || ""
        let day = (checkValidNricRegex.exec(nric) || [])[3] || ""

        const now = new Date().getFullYear().toString()

        const decade = now.substring(0, 2)
        if (now.substring(2, 4) >= year) {
            year = parseInt(decade.concat(year.toString()), 10)
        }

        const date = new Date(year, month - 1, day, 0, 0, 0, 0)
        return date
    }
}

export const dobToAge = (dob) => {
    const todaysDate = moment(dob);
    const age = moment().diff(todaysDate, 'years');
    const diffDays = moment().diff(todaysDate, 'days');

    return { age, diffDays }
}
