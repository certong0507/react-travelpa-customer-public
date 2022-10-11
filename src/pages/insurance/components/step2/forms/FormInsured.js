import React, { useEffect, useState } from "react"
import Grid from "@mui/material/Grid"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import { BiTrash } from "react-icons/bi"
import { CCard, CCardBody } from "@coreui/react"
import Typography from "@mui/material/Typography"
import { useFieldArray } from "react-hook-form"
import { HiPlusSm } from "react-icons/hi"
import { BiMinusCircle } from "react-icons/bi"
import { useMediaQuery } from "react-responsive"

import { EnumInsured } from "src/pages/insurance/utils/enum"
import InputTableTextControl from "src/components/inputs/InputTableTextControl"
import InputTableDateControl from "src/components/inputs/InputTableDateControl"
import NomineeForm from "src/pages/insurance/components/step2/forms/FormNominee"
import InputTableSelectControl from "src/components/inputs/InputTableSelectControl"
import { COUNTRY_CODE, TRAVEL_DOCUMENT_TYPE, COVERAGE_TYPE } from "src/utils/enum"
import { convertNricToDob } from "src/pages/insurance/utils/convert_nric_to_dob"

export default function FormInsured({
    control,
    indexInsured,
    name,
    removeInsured,
    getValues,
    setError,
    setValue,
    validateDetails,
    watch,
    setDeletedNomineeArray,
    watchInsuranceCoverage,
}) {
    const watchNomineesTotalShare = watch(`${name}.${indexInsured}.nomineesTotalShare`)
    const { fields, append, remove, update } = useFieldArray({
        name: `${name}.${indexInsured}.nominees`,
        control,
    })
    const watchInsuredTravelDocument = watch(`${name}.${indexInsured}.insuredTravelDocument`)
    const watchInsuredTravelDocumentValue = watch(
        `${name}.${indexInsured}.insuredTravelDocumentValue`,
    )
    const [insuredTravelDocumentLabel, setInsuredTravelDocumentLabel] = useState("NRIC")
    const [isNumber, setIsNumber] = useState(true)
    const isDesktop = useMediaQuery({ minWidth: 992 })
    const nominees = getValues(`${name}.${indexInsured}.nominees`)

    useEffect(() => {
        if (fields.length === 0) {
            append({
                nomineeName: "",
                nomineeTravelDocument: "nric",
                nomineeTravelDocumentValue: "",
                nomineeDOB: "",
                nomineeRelationship: "",
                nomineeShare: "",
                nomineeCountryCode: "+60",
                nomineeMobileNo: "",
            })
        }
    }, [])

    useEffect(() => {
        if (watchInsuredTravelDocument) {
            TRAVEL_DOCUMENT_TYPE?.map((item) => {
                if (watchInsuredTravelDocument === item.value) {
                    setInsuredTravelDocumentLabel(item.label)

                    setIsNumber(false)
                    if (watchInsuredTravelDocument === "nric") {
                        setIsNumber(true)
                    }
                }
                return true
            })
        }
    }, [watchInsuredTravelDocument])

    // Auto fill insured dob when user fill up nric
    useEffect(() => {
        if (watchInsuredTravelDocumentValue) {
            if (watchInsuredTravelDocument === "nric") {
                const nric = getValues(`${name}.${indexInsured}.insuredTravelDocumentValue`)
                const returnDOB = convertNricToDob(nric)
                setValue(`${name}.${indexInsured}.insuredDOB`, returnDOB)
            }
        }
    }, [watchInsuredTravelDocumentValue])

    const removeNominee = (index, nomineeId) => {
        if (nomineeId) {
            setDeletedNomineeArray((oldArray) => [...oldArray, { id: nomineeId }])
        }

        remove(index)
    }

    const copyDetails = () => {
        setValue(`${name}.${indexInsured}.insuredFullName`, getValues("fullName"))
        setValue(`${name}.${indexInsured}.insuredTravelDocument`, getValues("travelDocument"))
        setValue(
            `${name}.${indexInsured}.insuredTravelDocumentValue`,
            getValues("travelDocumentValue"),
        )
        setValue(`${name}.${indexInsured}.insuredDOB`, getValues("dob"))
        setValue(`${name}.${indexInsured}.insuredOccupation`, getValues("occupation"))
        setValue(`${name}.${indexInsured}.insuredAddress`, getValues("address"))
        setValue(`${name}.${indexInsured}.insuredCountryCode`, getValues("countryCode"))
        setValue(`${name}.${indexInsured}.insuredMobileNo`, getValues("mobileNo"))
    }

    return (
        <CCard
            className="mb-4"
            style={{
                backgroundColor: "rgb(237, 247, 237)",
                width: isDesktop ? "100%" : "1200px",
            }}
        >
            <CCardBody>
                <div className="d-flex justify-content-between">
                    <div className="w-100 d-flex">
                        <Typography
                            variant="subtitle2"
                            color="primary"
                            sx={{ fontSize: "1.4em", marginRight: "1%" }}
                        >
                            {/* 1. if coverage type is individual - Insured 1, Insured 2
                                2. if coverage type is family - Insured, Spouse
                                3. if coverage type is insured&spouse - Insured, Spouse
                            */}
                            {watchInsuranceCoverage === COVERAGE_TYPE.INDIVIDUAL
                                ? "Insured " + (indexInsured + 1)
                                : indexInsured === 0
                                ? "Insured"
                                : "Spouse"}
                        </Typography>

                        {indexInsured === 0 && (
                            <div className="d-flex justify-content-between">
                                <Button
                                    disableElevation
                                    color="primary"
                                    variant="contained"
                                    size="small"
                                    onClick={copyDetails}
                                >
                                    Same as Personal Information
                                </Button>
                            </div>
                        )}

                        {/* hide if coverage type is family and rhb - insured&spouse */}
                        {indexInsured !== 0 && watchInsuranceCoverage === COVERAGE_TYPE.INDIVIDUAL && (
                            <Grid item xs={12} sm={12} md={12}>
                                <IconButton
                                    color="error"
                                    variant="contained"
                                    size="small"
                                    className="w-100"
                                    onClick={removeInsured}
                                >
                                    <BiTrash size={"1.3em"} />
                                </IconButton>
                            </Grid>
                        )}
                    </div>
                </div>

                <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 12, sm: 12, md: 12 }}
                    direction="row"
                    className="mt-2"
                >
                    <Grid item xs={5} sm={5} md={5}>
                        <InputTableTextControl
                            control={control}
                            name={`${name}.${indexInsured}.insuredFullName`}
                            label="Full Name"
                        />
                    </Grid>

                    <Grid item xs={2} sm={2} md={2}>
                        <InputTableSelectControl
                            defaultValue="nric"
                            control={control}
                            name={`${name}.${indexInsured}.insuredTravelDocument`}
                            label="Travel Document"
                            options={TRAVEL_DOCUMENT_TYPE}
                        />
                    </Grid>

                    <Grid item xs={3} sm={3} md={3}>
                        <InputTableTextControl
                            leadingZeros
                            number={isNumber}
                            control={control}
                            name={`${name}.${indexInsured}.insuredTravelDocumentValue`}
                            label={insuredTravelDocumentLabel}
                            onBlur={(e) =>
                                validateDetails({
                                    type: EnumInsured.NRIC,
                                    name: `${name}.${indexInsured}.insuredTravelDocumentValue`,
                                    value: e.target.value,
                                })
                            }
                        />
                    </Grid>

                    <Grid item xs={2} sm={2} md={2}>
                        <InputTableDateControl
                            control={control}
                            name={`${name}.${indexInsured}.insuredDOB`}
                            label="DOB"
                        />
                    </Grid>

                    <Grid item xs={2} sm={2} md={2}>
                        <InputTableSelectControl
                            defaultValue="+60"
                            control={control}
                            name={`${name}.${indexInsured}.insuredCountryCode`}
                            label="Country Code"
                            options={COUNTRY_CODE}
                        />
                    </Grid>

                    <Grid item xs={2} sm={2} md={2}>
                        <InputTableTextControl
                            control={control}
                            name={`${name}.${indexInsured}.insuredMobileNo`}
                            label="Mobile No"
                            leadingZeros
                            number
                        />
                    </Grid>

                    <Grid item xs={3} sm={3} md={3}>
                        <InputTableTextControl
                            control={control}
                            name={`${name}.${indexInsured}.insuredOccupation`}
                            label="Occupation"
                        />
                    </Grid>

                    <Grid item xs={5} sm={5} md={5}>
                        <InputTableTextControl
                            control={control}
                            name={`${name}.${indexInsured}.insuredAddress`}
                            label="Address"
                        />
                    </Grid>

                    <Grid item xs={12} sm={12} md={12}>
                        <Typography
                            variant="subtitle2"
                            color="primary"
                            style={{ paddingLeft: "4%" }}
                        >
                            Nominee Details
                        </Typography>

                        {fields.map((item, indexNominee) => (
                            <div className="d-flex justify-content-between" key={item.id}>
                                <Grid
                                    item
                                    xs={0.5}
                                    sm={0.5}
                                    md={0.5}
                                    style={{ paddingTop: "12px" }}
                                >
                                    {indexNominee !== 0 && (
                                        <IconButton
                                            color="error"
                                            variant="contained"
                                            size="small"
                                            onClick={() => {
                                                removeNominee(indexNominee, item.nomineeId)

                                                const nomineesShare = nominees
                                                    .filter((i, idx) => idx !== indexNominee)
                                                    .map((i) => i.nomineeShare)

                                                const totalShare = nomineesShare.reduce(
                                                    (previous, current, index, array) => {
                                                        const previousShare =
                                                            previous === "" ? 0 : previous
                                                        const currentShare =
                                                            current === "" ? 0 : current
                                                        return (
                                                            parseFloat(previousShare) +
                                                            parseFloat(currentShare)
                                                        )
                                                    },
                                                )

                                                setValue(
                                                    `${name}.${indexInsured}.nomineesTotalShare`,
                                                    totalShare,
                                                )
                                            }}
                                        >
                                            <BiMinusCircle size={"1.3em"} />
                                        </IconButton>
                                    )}
                                </Grid>

                                <NomineeForm
                                    name={name}
                                    indexInsured={indexInsured}
                                    indexNominee={indexNominee}
                                    control={control}
                                    append={append}
                                    update={update}
                                    getValues={getValues}
                                    setError={setError}
                                    setValue={setValue}
                                    watch={watch}
                                />
                            </div>
                        ))}

                        <div
                            className="mt-3 d-flex justify-content-between"
                            style={{ paddingLeft: "4%" }}
                        >
                            {getValues(`insureds[${indexInsured}].nominees`)?.length < 9 && (
                                <Button
                                    disableRipple
                                    disableElevation
                                    style={{ backgroundColor: "transparent" }}
                                    color="primary"
                                    size="small"
                                    onClick={() => {
                                        append({
                                            nomineeName: "",
                                            nomineeTravelDocument: "nric",
                                            nomineeTravelDocumentValue: "",
                                            nomineeDOB: "",
                                            nomineeRelationship: "",
                                            nomineeShare: "",
                                            nomineeCountryCode: "+60",
                                            nomineeMobileNo: "",
                                        })
                                    }}
                                >
                                    <div className="d-flex align-items-center">
                                        <HiPlusSm
                                            size={"1.3em"}
                                            style={{
                                                color: "#2a4a4b",
                                            }}
                                        />
                                        <div>Add other nominee</div>
                                    </div>
                                </Button>
                            )}

                            <Typography
                                variant="body2"
                                color="primary"
                                style={{
                                    marginRight: "10%",
                                    color:
                                        parseFloat(watchNomineesTotalShare) > 0 &&
                                        parseFloat(watchNomineesTotalShare) !== 100
                                            ? "#d32f2f"
                                            : "#009c99",
                                }}
                            >
                                {parseFloat(watchNomineesTotalShare) > 0 &&
                                    parseFloat(watchNomineesTotalShare) !== 100 &&
                                    "Invalid"}{" "}
                                Total Share (%): <b>{watchNomineesTotalShare}</b>/ 100
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </CCardBody>
        </CCard>
    )
}
