import React, { useState, useEffect } from "react"
import Grid from "@mui/material/Grid"
import Divider from "@mui/material/Divider"

import InputTableTextControl from "src/components/inputs/InputTableTextControl"
import InputTableDateControl from "src/components/inputs/InputTableDateControl"
import InputTableSelectControl from "src/components/inputs/InputTableSelectControl"
import { validateDuplicateNRIC } from "src/pages/insurance/utils/functions"
import { COUNTRY_CODE, TRAVEL_DOCUMENT_TYPE } from "src/utils/enum"
import { convertNricToDob } from "src/pages/insurance/utils/convert_nric_to_dob"

function NomineeForm({
    name,
    indexInsured,
    indexNominee,
    control,
    getValues,
    setError,
    setValue,
    watch,
}) {
    const nominees = getValues(`${name}.${indexInsured}.nominees`)
    const watchNomineeTravelDocument = watch(
        `${name}.${indexInsured}.nominees[${indexNominee}].nomineeTravelDocument`,
    )
    const watchNomineeTravelDocumentValue = watch(
        `${name}.${indexInsured}.nominees[${indexNominee}].nomineeTravelDocumentValue`,
    )
    const [nomineeTravelDocumentLabel, setNomineeTravelDocumentLabel] = useState("NRIC")
    const [isNumber, setIsNumber] = useState(true)

    useEffect(() => {
        if (watchNomineeTravelDocument) {
            TRAVEL_DOCUMENT_TYPE?.map((item) => {
                if (watchNomineeTravelDocument === item.value) {
                    setNomineeTravelDocumentLabel(item.label)

                    setIsNumber(false)
                    if (watchNomineeTravelDocument === "nric") {
                        setIsNumber(true)
                    }
                }
                return true
            })
        }
    }, [watchNomineeTravelDocument])

    // Auto fill insured dob when user fill up nric
    useEffect(() => {
        if (watchNomineeTravelDocumentValue) {
            if (watchNomineeTravelDocument === "nric") {
                const nric = getValues(
                    `${name}.${indexInsured}.nominees[${indexNominee}].nomineeTravelDocumentValue`,
                )
                const returnDOB = convertNricToDob(nric)
                setValue(`${name}.${indexInsured}.nominees[${indexNominee}].nomineeDOB`, returnDOB)
            }
        }
    }, [watchNomineeTravelDocumentValue])

    return (
        <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 12, sm: 12, md: 12 }}
            direction="row"
            className="mt-2"
        >
            <Grid item xs={3} sm={3} md={3} className="pt-0">
                <InputTableTextControl
                    control={control}
                    name={`${name}.${indexInsured}.nominees[${indexNominee}].nomineeName`}
                    label="Nominee Name"
                />
            </Grid>

            <Grid item xs={3} sm={3} md={3} className="pt-0">
                <InputTableSelectControl
                    defaultValue="nric"
                    control={control}
                    name={`${name}.${indexInsured}.nominees[${indexNominee}].nomineeTravelDocument`}
                    label="Travel Document"
                    options={TRAVEL_DOCUMENT_TYPE}
                />
            </Grid>

            <Grid item xs={3} sm={3} md={3} className="pt-0">
                <InputTableTextControl
                    leadingZeros
                    number={isNumber}
                    control={control}
                    name={`${name}.${indexInsured}.nominees[${indexNominee}].nomineeTravelDocumentValue`}
                    label={nomineeTravelDocumentLabel}
                    onBlur={(e) => {
                        const isValidNRIC = validateDuplicateNRIC({
                            list: nominees,
                            name: "nomineeTravelDocumentValue",
                            value: e.target.value,
                            excludeIndex: indexNominee,
                        })

                        if (isValidNRIC > -1) {
                            setError(
                                `${name}.${indexInsured}.nominees[${indexNominee}].nomineeTravelDocumentValue`,
                                { message: "Duplicate NRIC found", type: "duplicateNomineeNRIC" },
                            )
                            return
                        }
                    }}
                />
            </Grid>

            <Grid item xs={3} sm={3} md={3} className="pt-0">
                <InputTableDateControl
                    control={control}
                    name={`${name}.${indexInsured}.nominees[${indexNominee}].nomineeDOB`}
                    label="DOB"
                />
            </Grid>

            <Grid item xs={3} sm={3} md={3} className="pt-0">
                <InputTableSelectControl
                    defaultValue="+60"
                    control={control}
                    name={`${name}.${indexInsured}.nominees[${indexNominee}].nomineeCountryCode`}
                    label="Country Code"
                    options={COUNTRY_CODE}
                />
            </Grid>

            <Grid item xs={3} sm={3} md={3} className="pt-0">
                <InputTableTextControl
                    control={control}
                    name={`${name}.${indexInsured}.nominees[${indexNominee}].nomineeMobileNo`}
                    label="Mobile No"
                    leadingZeros
                    number
                />
            </Grid>

            <Grid item xs={3} sm={3} md={3} className="pt-0">
                <InputTableTextControl
                    control={control}
                    name={`${name}.${indexInsured}.nominees[${indexNominee}].nomineeRelationship`}
                    label="Relationship"
                />
            </Grid>

            <Grid item xs={3} sm={3} md={3} className="pt-0">
                <InputTableTextControl
                    number
                    control={control}
                    name={`${name}.${indexInsured}.nominees[${indexNominee}].nomineeShare`}
                    label="Share (%)"
                    onBlur={(e) => {
                        const nomineesShare = nominees.map((i) => i.nomineeShare)
                        const totalShare = nomineesShare.reduce(
                            (previous, current, index, array) => {
                                const previousShare = previous === "" ? 0 : previous
                                const currentShare = current === "" ? 0 : current
                                return parseFloat(previousShare) + parseFloat(currentShare)
                            },
                        )

                        if (totalShare > 100) {
                            setError(
                                `${name}.${indexInsured}.nominees[${indexNominee}].nomineeShare`,
                                { message: "Invalid share (%)" },
                            )
                        }
                        setValue(`${name}.${indexInsured}.nomineesTotalShare`, totalShare)
                    }}
                />
            </Grid>

            <Grid item xs={12} sm={12} md={12} className="pt-0 mt-3 mb-4">
                <Divider light sx={{ color: "rgba(0, 0, 0, 0.52)" }} />
            </Grid>
        </Grid>
    )
}

export default NomineeForm
