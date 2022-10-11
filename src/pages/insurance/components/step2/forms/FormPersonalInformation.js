import React, { useEffect, useState } from "react"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"

import InputTableTextControl from "src/components/inputs/InputTableTextControl"
import InputTableSelectControl from "src/components/inputs/InputTableSelectControl"
import InputTableDateControl from "src/components/inputs/InputTableDateControl"
import { COUNTRY_CODE, TRAVEL_DOCUMENT_TYPE } from "src/utils/enum"
import { convertNricToDob } from "src/pages/insurance/utils/convert_nric_to_dob"

function PersonalInformationForm({
    control,
    getValues,
    setValue,
    watchTravelDocument,
    watchTravelDocumentValue,
}) {
    const [travelDocumentLabel, setTravelDocumentLabel] = useState("NRIC")
    const [isNumber, setIsNumber] = useState(true)

    useEffect(() => {
        if (watchTravelDocument) {
            TRAVEL_DOCUMENT_TYPE?.map((item) => {
                if (watchTravelDocument === item.value) {
                    setTravelDocumentLabel(item.label)

                    setIsNumber(false)
                    if (watchTravelDocument === "nric") {
                        setIsNumber(true)
                    }
                }
                return true
            })
        }
    }, [watchTravelDocument])

    // Auto fill dob when user fill up nric
    useEffect(() => {
        if (watchTravelDocumentValue) {
            if (watchTravelDocument === "nric") {
                const nric = getValues("travelDocumentValue")
                const returnDOB = convertNricToDob(nric)
                setValue("dob", returnDOB)
            }
        }
    }, [watchTravelDocumentValue])

    return (
        <>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 1, md: 12 }}>
                <Grid item xs={12}>
                    <Typography variant="h6" color="primary">
                        Personal Information
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <InputTableTextControl
                        defaultValue=""
                        control={control}
                        name="fullName"
                        label="Full Name"
                    />
                </Grid>

                <Grid item xs={6}>
                    <InputTableTextControl
                        defaultValue=""
                        control={control}
                        name="email"
                        label="Email"
                    />
                </Grid>

                <Grid item xs={3.5}>
                    <InputTableSelectControl
                        defaultValue="nric"
                        control={control}
                        name="travelDocument"
                        label="Travel Document"
                        options={TRAVEL_DOCUMENT_TYPE}
                    />
                </Grid>

                <Grid item xs={4.5}>
                    <InputTableTextControl
                        defaultValue=""
                        leadingZeros
                        number={isNumber}
                        control={control}
                        name="travelDocumentValue"
                        label={travelDocumentLabel}
                    />
                </Grid>

                <Grid item xs={4}>
                    <InputTableDateControl control={control} name="dob" label="DOB" />
                </Grid>

                <Grid item xs={3.5}>
                    <InputTableSelectControl
                        defaultValue="+60"
                        control={control}
                        name="countryCode"
                        label="Country Code"
                        options={COUNTRY_CODE}
                    />
                </Grid>

                <Grid item xs={4}>
                    <InputTableTextControl
                        defaultValue=""
                        control={control}
                        name="mobileNo"
                        label="Mobile No"
                        leadingZeros
                        number={isNumber}
                    />
                </Grid>

                <Grid item xs={4.5}>
                    <InputTableTextControl
                        defaultValue=""
                        control={control}
                        name="occupation"
                        label="Occupation"
                    />
                </Grid>

                <Grid item xs={12}>
                    <InputTableTextControl
                        defaultValue=""
                        control={control}
                        name="address"
                        label="Address"
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default PersonalInformationForm
