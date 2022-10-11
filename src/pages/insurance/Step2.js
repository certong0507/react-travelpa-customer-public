import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { useForm, useFieldArray } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import LoadingButton from "@mui/lab/LoadingButton"
import Typography from "@mui/material/Typography"

import ConverageDetailsForm from "src/pages/insurance/components/step2/forms/FormConverageDetails"
import PersonalInformationForm from "src/pages/insurance/components/step2/forms/FormPersonalInformation"
import FormSchema from "src/pages/insurance/components/step2/yup/schema"
import InsuredForm from "src/pages/insurance/components/step2/forms/FormInsured"
import ChildForm from "src/pages/insurance/components/step2/forms/FormChild"
import ButtonNewInsured from "src/pages/insurance/components/step2/buttons/ButtonNewInsured"
import ButtonNewChild from "src/pages/insurance/components/step2/buttons/ButtonNewChild"
import { setInsuranceDetails, setIsSpouse } from "src/action/ui_actions"
import { doGetInsuranceRate, doResetGetInsuranceRateState } from "src/action/api_actions"
import { validateDuplicateNRIC, validateAge } from "src/pages/insurance/utils/functions"
import { EnumInsured } from "src/pages/insurance/utils/enum"
import { COVERAGE_TYPE, INSURANCE } from "src/utils/enum"

let optionsCoverageType = []
let countryList = []

export const Step2 = ({
    doGetInsuranceRate,
    setInsuranceDetails,
    doResetGetInsuranceRateState,
    back,
    next,
    insuranceDetailsForm,
    selectedInsurance,
    insuranceRateSuccess,
    insuranceRateFail,
    insuranceRateErrorMessage,
    meta,
    sales,
    // isSpouse,
    watchInsuranceCoverage,
    setIsSpouse,
    loggedInUser,
}) => {
    const { control, watch, trigger, getValues, setValue, setError, resetField } = useForm({
        defaultValues: {
            fullName: insuranceDetailsForm?.fullName,
            travelDocument: insuranceDetailsForm?.travelDocument,
            travelDocumentValue: insuranceDetailsForm?.travelDocumentValue,
            dob: insuranceDetailsForm?.dob,
            address: insuranceDetailsForm?.address,
            occupation: insuranceDetailsForm?.occupation,
            email: insuranceDetailsForm?.email,
            countryCode: insuranceDetailsForm?.countryCode,
            mobileNo: insuranceDetailsForm?.mobileNo,
            departureDate: insuranceDetailsForm?.departureDate,
            returnDate: insuranceDetailsForm?.returnDate,
            tripType: insuranceDetailsForm?.tripType,
            coverageType: insuranceDetailsForm?.coverageType,
            travelDelayUpgrade: insuranceDetailsForm?.travelDelayUpgrade,
            destination: countryList
                ?.filter((c) => insuranceDetailsForm?.destination.map((d) => d.code).includes(c.id))
                .map((c) => {
                    return { label: c.country_name, code: c.id }
                }),
            isWithinMalaysia: insuranceDetailsForm?.isWithinMalaysia,
            isSpouse: insuranceDetailsForm?.isSpouse,
            insureds: insuranceDetailsForm?.insureds,
            child: insuranceDetailsForm?.child,
        },
        resolver: yupResolver(FormSchema),
        mode: "all",
    })
    const { fields, append, remove } = useFieldArray({ name: "insureds", control })
    const {
        fields: childFields,
        append: childAppend,
        remove: childRemove,
    } = useFieldArray({ name: "child", control })
    const watchDepartureDate = watch("departureDate")
    const watchTravelDocument = watch("travelDocument")
    const watchTravelDocumentValue = watch("travelDocumentValue")
    const watchTripType = watch("tripType")
    const watchCoverageType = watch("coverageType")
    const watchIsWithinMalaysia = watch("isWithinMalaysia")
    const watchIsSpouse = watch("isSpouse")
    const watchDestination = watch("destination")
    const [errorMessage, setErrorMessage] = useState(null)
    const [deletedNomineeArray, setDeletedNomineeArray] = useState([])
    const [deletedInsuredArray, setDeletedInsuredArray] = useState([])
    const [isloading, setIsLoading] = useState(false)
    const [isFromCoverageType, setIsFromCoverageType] = useState(false)
    const [isFromOtherPage, setIsFromOtherPage] = useState(true)
    const [isFromOtherPageIsSpouse, setIsFromOtherPageIsSpouse] = useState(true)
    const [customerApplicationId, setCustomerApplicationId] = useState(null)

    useEffect(() => {
        window.scrollTo(0, 0)

        if (!selectedInsurance) {
            back()
        }

        optionsCoverageType = [
            { label: "Individual", value: "individual" },
            { label: "Family", value: "family" },
        ]

        if (selectedInsurance?.insurer_code === INSURANCE.RHB) {
            optionsCoverageType.push({ label: "Insured & Spouse", value: "insured & spouse" })
        }

        countryList = meta?.destination_list
        if (selectedInsurance?.insurer_code === INSURANCE.AIG) {
            if (selectedInsurance?.start_from_price_domestic) {
                countryList = meta?.destination_list.filter((item) => item.is_domestic === 1)
            } else {
                countryList = meta?.destination_list.filter((item) => item.is_domestic === 0)
            }
        }

        if (!insuranceDetailsForm || insuranceDetailsForm?.insureds?.length === 0) {
            addInsured()
        }

        setCustomerApplicationId(insuranceDetailsForm?.customerApplicationId)

        const unloadCallback = (event) => {
            event.preventDefault()
            event.returnValue = ""
            return ""
        }

        window.addEventListener("beforeunload", unloadCallback)
        return () => window.removeEventListener("beforeunload", unloadCallback)
    }, [])

    useEffect(() => {
        if (insuranceRateSuccess) {
            setInsuranceDetails({
                insurerCode: selectedInsurance?.insurer_code,
                fullName: getValues("fullName"),
                travelDocument: getValues("travelDocument"),
                travelDocumentValue: getValues("travelDocumentValue"),
                dob: getValues("dob"),
                address: getValues("address"),
                occupation: getValues("occupation"),
                email: getValues("email"),
                countryCode: getValues("countryCode"),
                mobileNo: getValues("mobileNo"),
                coverageType: getValues("coverageType"),
                departureDate: getValues("departureDate"),
                returnDate: getValues("returnDate"),
                travelDelayUpgrade: getValues("travelDelayUpgrade"),
                destination: getValues("destination"),
                isWithinMalaysia: getValues("isWithinMalaysia"),
                isSpouse: getValues("isSpouse"),
                tripType: getValues("tripType"),
                insureds: getValues("insureds"),
                nominees: getValues("insureds.nominees"),
                child: getValues("child"),
                childNominees: getValues("child.nominees"),
                customerApplicationId: customerApplicationId,
                token: insuranceDetailsForm?.token,
                deletedNominee: deletedNomineeArray,
                deletedInsured: deletedInsuredArray,
                referralId: sales?.id,
            })

            setIsLoading(false)
            setErrorMessage(null)
            doResetGetInsuranceRateState()
            setIsFromOtherPage(true)
            setIsFromOtherPageIsSpouse(true)
            next()
        }

        if (insuranceRateFail) {
            setIsLoading(false)
            setErrorMessage(insuranceRateErrorMessage)
            doResetGetInsuranceRateState()
        }
    }, [insuranceRateSuccess, insuranceRateFail])

    useEffect(() => {
        // Do not remove insured form if from step3
        if (watchIsSpouse) {
            // If is route from step3, do not append spouse
            if (!isFromOtherPageIsSpouse) {
                setIsFromCoverageType(false)
                addInsured()
            }

            setIsFromOtherPageIsSpouse(false)
        } else {
            // If is not click from coverage type dropdown and
            // is not route from step3, remove spouse
            if (!isFromCoverageType && !isFromOtherPage) {
                const spouseInsured = getValues("insureds")
                removeInsured(1, spouseInsured[1])
                // remove(1)
            }
            // If is not route from step3
            else if (!isFromOtherPageIsSpouse) {
                if (watchInsuranceCoverage !== COVERAGE_TYPE.INSURED_AND_SPOUSE) {
                    const spouseInsured = getValues("insureds")
                    removeInsured(1, spouseInsured[1])
                    // remove(1)
                }
            }
            setIsFromOtherPageIsSpouse(false)
        }
    }, [watchIsSpouse])

    useEffect(() => {
        if (watchInsuranceCoverage) {
            setIsFromCoverageType(true)
            setIsSpouse(false)

            // Do not remove insured form if from step3
            if (!isFromOtherPage) {
                remove()
                addInsured()
                setCustomerApplicationId(null)

                if (watchInsuranceCoverage === COVERAGE_TYPE.INSURED_AND_SPOUSE) {
                    resetField("isSpouse")

                    // append spouse
                    addInsured()

                    // remove child if any
                    childRemove()
                } else if (watchInsuranceCoverage === COVERAGE_TYPE.FAMILY) {
                    if (selectedInsurance?.insurer_code === INSURANCE.RHB) {
                        addChild()
                    }
                } else {
                    // Individual
                    childRemove()
                    resetField("isSpouse")
                }
            }

            setIsFromOtherPage(false)
        }
    }, [watchInsuranceCoverage])

    useEffect(() => {
        const isEmptyFullName = getValues("fullName") === ""
        const isEmptyEmail = getValues("email") === ""
        const isEmptyAddress = getValues("address") === ""
        const isEmptyMobileNo = getValues("mobileNo") === ""

        if (isEmptyFullName) {
            setValue("fullName", loggedInUser?.customer?.name)
        }

        if (isEmptyEmail) {
            setValue("email", loggedInUser?.customer?.email)
        }

        if (isEmptyAddress) {
            setValue("address", loggedInUser?.customer?.address)
        }

        if (isEmptyMobileNo) {
            setValue("mobileNo", loggedInUser?.customer?.phone_number)
        }
    }, [loggedInUser])

    const addInsured = () => {
        append({
            insuredFullName: "",
            insuredTravelDocument: "nric",
            insuredTravelDocumentValue: "",
            insuredAddress: "",
            insuredOccupation: "",
            insuredCountryCode: "+60",
            insuredMobileNo: "",
            nomineesTotalShare: "0",
        })
    }

    const addChild = () => {
        childAppend({
            insuredFullName: "",
            insuredTravelDocument: "nric",
            insuredTravelDocumentValue: "",
            insuredAddress: "",
            insuredOccupation: "",
            nomineesTotalShare: "0",
        })
    }

    const removeInsured = (index, item) => {
        if (item?.insured_id) {
            setDeletedInsuredArray((oldArray) => [...oldArray, { id: item?.insured_id }])

            //Find nominee under insured
            const nomineeIdArray = item?.nominees.map((item) => item.nomineeId)

            for (let i = 0; i < nomineeIdArray.length; i++) {
                setDeletedNomineeArray((oldArray) => [...oldArray, { id: nomineeIdArray[i] }])
            }
        }

        remove(index)
    }

    const removeChild = (index, item) => {
        if (item?.insured_id) {
            setDeletedInsuredArray((oldArray) => [...oldArray, { id: item?.insured_id }])

            //Find nominee under insured
            const nomineeIdArray = item?.nominees.map((item) => item.nomineeId)

            for (let i = 0; i < nomineeIdArray.length; i++) {
                setDeletedNomineeArray((oldArray) => [...oldArray, { id: nomineeIdArray[i] }])
            }
        }

        childRemove(index)
    }

    const validateNomineeNRIC = () => {
        const insureds = getValues("insureds")
        let duplicateNRICList = []

        for (let i = 0; i < insureds.length; i++) {
            const nominees = insureds[i]?.nominees

            for (let k = 0; k < nominees.length; k++) {
                const nominee = nominees[k]
                const duplicateNRIC = nominees.filter(
                    (item, index) =>
                        item?.nomineeTravelDocumentValue === nominee?.nomineeTravelDocumentValue &&
                        index !== k,
                )

                duplicateNRICList.push(duplicateNRIC)

                if (duplicateNRIC.length > 0) {
                    setError(`insureds[${i}].nominees[${k}].nomineeTravelDocumentValue`, {
                        message: "Duplicate NRIC found",
                    })
                }
            }
        }

        return {
            invalid: duplicateNRICList.flat().length > 0,
            error: "Duplicate nominee NRIC found",
        }
    }

    const validateInsuredNRIC = () => {
        const insureds = getValues("insureds")
        let duplicateNRICList = []

        for (let i = 0; i < insureds.length; i++) {
            const insured = insureds[i]

            const duplicateNRIC = insureds.filter(
                (item, index) =>
                    insured?.insuredTravelDocumentValue !== "" &&
                    insured?.insuredTravelDocumentValue === item?.insuredTravelDocumentValue &&
                    index !== i,
            )

            duplicateNRICList.push(duplicateNRIC)

            if (duplicateNRIC.length > 0) {
                setError(`insureds[${i}].insuredTravelDocumentValue`, {
                    message: "Duplicate NRIC found",
                })
            }
        }

        return {
            invalid: duplicateNRICList.flat().length > 0,
            error: "Duplicate insured NRIC found",
        }
    }

    const validateNomineeTotalShare = () => {
        let validInsured = []
        const insureds = getValues("insureds")
        for (let i = 0; i < insureds.length; i++) {
            const nominees = insureds[i]?.nominees

            const nomineesShare = nominees.map((i) => i.nomineeShare)
            const totalShare = nomineesShare.reduce((previous, current, index, array) => {
                const previousShare = previous === "" ? 0 : previous
                const currentShare = current === "" ? 0 : current
                return parseFloat(previousShare) + parseFloat(currentShare)
            })

            if (parseFloat(totalShare) !== 100) {
                validInsured.push(false)
            } else {
                validInsured.push(true)
            }
        }

        if (validInsured.includes(false)) {
            return {
                invalid: true,
                error: "Invalid total nominees share (%)",
            }
        } else {
            return {
                invalid: false,
                error: null,
            }
        }
    }

    const validateInsuredCoverageType = () => {
        const coverageType = getValues("coverageType")
        const insureds = getValues("insureds")
        const child = getValues("child")
        const combinedInsured = insureds.concat(child)

        if (coverageType === COVERAGE_TYPE.FAMILY) {
            if (combinedInsured.length < 2) {
                return {
                    invalid: true,
                    error: "Unable to proceed, for family, must more than 1 insured.",
                }
            }
        }

        if (coverageType === COVERAGE_TYPE.INSURED_AND_SPOUSE) {
            if (combinedInsured.length !== 2) {
                return {
                    invalid: true,
                    error: "Unable to proceed, for insured & spouse, must equal 2 insured.",
                }
            }
        }
    }

    const validateInsuredAge = () => {
        const insureds = getValues("insureds")

        for (let i = 0; i < insureds.length; i++) {
            const insured = insureds[i]

            if (
                insured?.insuredTravelDocument === "nric" &&
                insured?.insuredTravelDocumentValue?.length === 12
            ) {
                const { isValidAge, errorMessage } = validateAge({
                    nric: insured?.insuredTravelDocumentValue,
                    insurerCode: selectedInsurance?.insurer_code,
                    packageName: selectedInsurance?.package_name,
                    coverageType: getValues("coverageType"),
                    tripTypeId: getValues("tripType"),
                    type: "adult",
                })

                if (!isValidAge) {
                    setError(`insureds.${i}.insuredTravelDocumentValue`, {
                        message: errorMessage,
                        type: "invalidChildAge",
                    })

                    return {
                        invalid: !isValidAge,
                        error: errorMessage,
                    }
                }
            } else {
                return {
                    invalid: false,
                    error: null,
                }
            }
        }
    }

    const validateChildAge = () => {
        const children = getValues("child")

        for (let i = 0; i < children.length; i++) {
            const child = children[i]

            if (
                child?.insuredTravelDocument === "nric" &&
                child?.insuredTravelDocumentValue?.length === 12
            ) {
                const { isValidAge, errorMessage } = validateAge({
                    nric: child?.insuredTravelDocumentValue,
                    insurerCode: selectedInsurance?.insurer_code,
                    packageName: selectedInsurance?.package_name,
                    coverageType: getValues("coverageType"),
                    tripTypeId: getValues("tripType"),
                    type: "child",
                })

                if (!isValidAge) {
                    setError(`child.${i}.insuredTravelDocumentValue`, {
                        message: errorMessage,
                        type: "invalidChildAge",
                    })

                    return {
                        invalid: !isValidAge,
                        error: errorMessage,
                    }
                }
            } else {
                return {
                    invalid: false,
                    error: null,
                }
            }
        }
    }

    const proceed = async () => {
        const validInsuredForm = await trigger()
        const validInsuredNRIC = validateInsuredNRIC()
        const validNomineeNRIC = validateNomineeNRIC()
        const validNomineeTotalShare = validateNomineeTotalShare()
        const validInsuredCoverageType = validateInsuredCoverageType()
        const validInsuredAge = validateInsuredAge()
        const validChildAge = validateChildAge()

        if (!validInsuredForm) {
            setErrorMessage("Please fill in all the required fields.")
            return
        }

        if (validInsuredNRIC?.invalid) {
            setErrorMessage(validInsuredNRIC?.error)
            return
        }

        if (validNomineeNRIC?.invalid) {
            setErrorMessage(validNomineeNRIC?.error)
            return
        }

        if (validNomineeTotalShare?.invalid) {
            setErrorMessage(validNomineeTotalShare?.error)
            return
        }

        if (validInsuredCoverageType?.invalid) {
            setErrorMessage(validInsuredCoverageType?.error)
            return
        }

        if (validInsuredAge?.invalid) {
            setErrorMessage(validInsuredAge?.error)
            return
        }

        if (validChildAge?.invalid) {
            setErrorMessage(validChildAge?.error)
            return
        }

        setIsLoading(true)

        doGetInsuranceRate({
            packageId: selectedInsurance?.id,
            coverageType: getValues("coverageType"),
            tripTypeId: getValues("tripType"),
            destinations: getValues("destination").map((item) => item.code),
            departureDate: getValues("departureDate"),
            returnDate: getValues("returnDate"),
            travelDelayUpgrade: getValues("travelDelayUpgrade"),
            insureds: getValues("insureds").filter((i) => i.insuredFullName),
            child: getValues("child").filter((i) => i.insuredFullName),
        })
    }

    return (
        <div id="insurance-step-2-wrapper" className="mt-5">
            <div id="insurance-step-2-title" className="mb-4">
                <Grid container columns={{ xs: 1, sm: 12, md: 12 }}>
                    <Grid item xs={1} sm={5.3} md={2.8} className="my-auto">
                        <Typography variant="h5" component="div">
                            Please complete this form :
                        </Typography>
                    </Grid>

                    <Grid item xs={1} sm={6.7} md={9.2}>
                        <span
                            className="p-2"
                            style={{
                                color: "#009c99",
                                border: "2px solid #009c99",
                                borderRadius: "4px",
                                backgroundColor: "rgb(237, 247, 237)",
                                fontSize: "20px",
                            }}
                        >
                            {selectedInsurance?.package_name}
                        </span>
                    </Grid>
                </Grid>
            </div>

            <Grid container spacing={{ xs: 2, md: 5 }} columns={{ xs: 1, sm: 1, md: 12 }}>
                <Grid item xs={1} sm={1} md={6}>
                    <Card variant="outlined">
                        <CardContent>
                            <PersonalInformationForm
                                control={control}
                                watchTravelDocument={watchTravelDocument}
                                watchTravelDocumentValue={watchTravelDocumentValue}
                                getValues={getValues}
                                setValue={setValue}
                            />
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={1} sm={1} md={6}>
                    <Card variant="outlined" className="h-100">
                        <CardContent>
                            <ConverageDetailsForm
                                control={control}
                                resetField={resetField}
                                setValue={setValue}
                                getValues={getValues}
                                watchTripType={watchTripType}
                                watchCoverageType={watchCoverageType}
                                watchDepartureDate={watchDepartureDate}
                                watchIsWithinMalaysia={watchIsWithinMalaysia}
                                watchIsSpouse={watchIsSpouse}
                                watchDestination={watchDestination}
                            />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <div className="mt-4" style={{ overflowX: "auto" }}>
                {fields.map((item, index) => (
                    <InsuredForm
                        name="insureds"
                        key={item.id}
                        indexInsured={index}
                        control={control}
                        getValues={getValues}
                        setError={setError}
                        setValue={setValue}
                        watch={watch}
                        watchInsuranceCoverage={watchInsuranceCoverage}
                        removeInsured={() => removeInsured(index, item)}
                        setDeletedNomineeArray={setDeletedNomineeArray}
                        validateDetails={({ type, name, value }) => {
                            switch (type) {
                                case EnumInsured.NRIC:
                                    const isValid = validateDuplicateNRIC({
                                        list: fields,
                                        name: "insuredTravelDocumentValue",
                                        value,
                                        excludeIndex: index,
                                    })

                                    if (isValid > -1) {
                                        setError(name, {
                                            message: "Duplicate NRIC found",
                                            type: "duplicateInsuredNRIC",
                                        })
                                    }

                                    if (value.length === 12) {
                                        const { isValidAge, errorMessage } = validateAge({
                                            nric: value,
                                            insurerCode: selectedInsurance?.insurer_code,
                                            packageName: selectedInsurance?.package_name,
                                            coverageType: getValues("coverageType"),
                                            tripTypeId: getValues("tripType"),
                                            type: "adult",
                                        })

                                        if (!isValidAge) {
                                            setError(name, {
                                                message: errorMessage,
                                                type: "invalidInsuredAge",
                                            })
                                        }
                                    }
                                    break
                                default:
                                    return
                            }
                        }}
                    />
                ))}
            </div>

            <div className="mt-4" style={{ overflowX: "auto" }}>
                {childFields.map((item, index) => (
                    <ChildForm
                        name="child"
                        key={item.id}
                        indexInsured={index}
                        control={control}
                        getValues={getValues}
                        setError={setError}
                        setValue={setValue}
                        watch={watch}
                        selectedInsurance={selectedInsurance}
                        watchInsuranceCoverage={watchInsuranceCoverage}
                        removeChild={() => removeChild(index, item)}
                        setDeletedNomineeArray={setDeletedNomineeArray}
                        validateDetails={({ type, name, value }) => {
                            switch (type) {
                                case EnumInsured.NRIC:
                                    const isValid = validateDuplicateNRIC({
                                        list: childFields,
                                        name: "insuredTravelDocumentValue",
                                        value,
                                        excludeIndex: index,
                                    })

                                    if (isValid > -1) {
                                        setError(name, {
                                            message: "Duplicate NRIC found",
                                            type: "duplicateInsuredNRIC",
                                        })
                                    }

                                    if (value.length === 12) {
                                        const { isValidAge, errorMessage } = validateAge({
                                            nric: value,
                                            insurerCode: selectedInsurance?.insurer_code,
                                            packageName: selectedInsurance?.package_name,
                                            coverageType: getValues("coverageType"),
                                            tripTypeId: getValues("tripType"),
                                            type: "child",
                                        })

                                        if (!isValidAge) {
                                            setError(name, {
                                                message: errorMessage,
                                                type: "invalidChildAge",
                                            })
                                        }
                                    }
                                    break
                                default:
                                    return
                            }
                        }}
                    />
                ))}
            </div>

            {getValues("insureds")?.length < 9 &&
                selectedInsurance?.insurer_code !== INSURANCE.RHB &&
                watchInsuranceCoverage === COVERAGE_TYPE.INDIVIDUAL && (
                    <ButtonNewInsured addInsured={addInsured} />
                )}

            {getValues("child")?.length < 9 && watchInsuranceCoverage === COVERAGE_TYPE.FAMILY && (
                <ButtonNewChild addChild={addChild} />
            )}

            <div className="d-flex justify-content-end">
                <Typography variant="subtitle2" color="error">
                    {errorMessage}
                </Typography>
            </div>

            <div className="d-flex justify-content-end mt-3">
                <Button
                    disableElevation
                    className="m-2"
                    size="small"
                    variant="outlined"
                    onClick={() => back()}
                >
                    Back
                </Button>
                <LoadingButton
                    disableElevation
                    className="m-2"
                    size="small"
                    variant="contained"
                    loading={isloading}
                    onClick={proceed}
                >
                    Next
                </LoadingButton>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    insuranceDetailsForm: state.insurance.insuranceDetailsForm,
    selectedInsurance: state.insurance.selectedInsurance,
    insuranceRateSuccess: state.insurance.insuranceRateSuccess,
    insuranceRateFail: state.insurance.insuranceRateFail,
    insuranceRateErrorMessage: state.insurance.insuranceRateErrorMessage,
    meta: state.core.meta,
    sales: state.insurance.sales,
    // isSpouse: state.insurance.isSpouse,
    watchInsuranceCoverage: state.insurance.watchInsuranceCoverage,
    watchInsuranceCoverage: state.insurance.watchInsuranceCoverage,
    loggedInUser: state.core.loggedInUser,
})

const mapDispatchToProps = {
    setInsuranceDetails,
    doGetInsuranceRate,
    doResetGetInsuranceRateState,
    setIsSpouse,
}

export default connect(mapStateToProps, mapDispatchToProps)(Step2)
