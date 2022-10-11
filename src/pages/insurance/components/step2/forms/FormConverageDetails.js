import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import { add, sub } from "date-fns"

import InputTableSelectSearchControl from "src/components/inputs/InputTableSelectSearchControl"
import InputTableDateControl from "src/components/inputs/InputTableDateControl"
import InputTableSelectControl from "src/components/inputs/InputTableSelectControl"
import InputCheckBox from "src/components/inputs/InputCheckBox"
import { TRIP_TYPE, INSURANCE, COVERAGE_TYPE } from "src/utils/enum"
import { setWatchInsuranceCoverage, setIsSpouse } from "src/action/ui_actions"
import { FormHelperText } from "@mui/material"

function ConverageDetailsForm({
    setWatchInsuranceCoverage,
    setIsSpouse,
    setValue,
    resetField,
    control,
    meta,
    selectedInsurance,
    watchTripType,
    watchCoverageType,
    watchDepartureDate,
    watchIsWithinMalaysia,
    watchIsSpouse,
    watchDestination,
}) {
    const [departureDate, setDepartureDate] = useState(null)
    const [optionsCountries, setOptionsCountries] = useState(null)
    const [optionsTripTypes, setOptionsTripType] = useState(null)
    const [disabledDestination, setDisabledDestination] = useState(false)
    const [hideReturnDate, setHideReturnDate] = useState(false)
    let optionsCoverageType = [
        { label: "Individual", value: "individual" },
        { label: "Family", value: "family" },
    ]

    if (selectedInsurance?.insurer_code === INSURANCE.RHB) {
        optionsCoverageType.push({ label: "Insured & Spouse", value: "insured & spouse" })
    }

    let optionsTravelDelayUpgrade = []
    if (selectedInsurance?.insurer_code === INSURANCE.AIG) {
        if (
            !selectedInsurance?.package_name.includes("Domestic") &&
            !selectedInsurance?.package_name.includes("Primary")
        ) {
            optionsTravelDelayUpgrade.push({ label: "No", value: 0 })
            optionsTravelDelayUpgrade.push({ label: "Yes", value: 1 })
        }
    }

    const [isShowChubbMessage, setIsShowChubbMessage] = useState(false)

    useEffect(() => {
        setHideReturnDate(false)

        if (watchTripType === TRIP_TYPE.ANNUAL.id) {
            setHideReturnDate(true)

            if (watchDepartureDate) {
                let returnDate = add(new Date(watchDepartureDate), { years: 1 })
                returnDate = sub(returnDate, { days: 1 })

                setValue("returnDate", returnDate)
            }
            setDepartureDate(new Date(watchDepartureDate))
        }

        // For tune insurance
        if (selectedInsurance?.insurer_code === INSURANCE.TUNE) {
            if (watchTripType === TRIP_TYPE.SINGLE.id) {
                setHideReturnDate(true)
                setValue("returnDate", watchDepartureDate)
            }
        }
    }, [watchTripType])

    useEffect(() => {
        if (watchDepartureDate) {
            if (watchTripType === TRIP_TYPE.ANNUAL.id) {
                let returnDate = add(new Date(watchDepartureDate), { years: 1 })
                returnDate = sub(returnDate, { days: 1 })

                setValue("returnDate", returnDate)
                setDepartureDate(new Date(watchDepartureDate))
            } else {
                resetField("returnDate")
                setDepartureDate(new Date(watchDepartureDate))
            }

            // For tune insurance
            if (selectedInsurance?.insurer_code === INSURANCE.TUNE) {
                if (watchTripType === TRIP_TYPE.SINGLE.id) {
                    setValue("returnDate", watchDepartureDate)
                }
            }
        }
    }, [watchDepartureDate])

    useEffect(() => {
        setWatchInsuranceCoverage(watchCoverageType)
    }, [watchCoverageType])

    useEffect(() => {
        setWatchInsuranceCoverage(watchCoverageType)
    }, [watchCoverageType])

    useEffect(() => {
        if (meta?.destination_list) {
            setOptionsCountries(
                meta?.destination_list.map((i) => {
                    return { label: i.country_name, code: i.id }
                }),
            )

            if (selectedInsurance?.package_name.includes("AIG")) {
                if (selectedInsurance?.package_name.includes("Domestic")) {
                    setOptionsCountries(
                        meta?.destination_list
                            .filter((item) => item.is_domestic === 1)
                            .map((i) => {
                                return { label: i.country_name, code: i.id }
                            }),
                    )
                } else {
                    setOptionsCountries(
                        meta?.destination_list
                            .filter((item) => item.is_domestic === 0)
                            .map((i) => {
                                return { label: i.country_name, code: i.id }
                            }),
                    )
                }
            }
            if (selectedInsurance?.package_name.includes("Tune")) {
                setOptionsCountries(
                    meta?.destination_list
                        .filter((item) => item.is_domestic === 0)
                        .map((i) => {
                            return { label: i.country_name, code: i.id }
                        }),
                )
            }
        }

        if (meta?.trip_type_list) {
            if (
                selectedInsurance?.package_name?.toLowerCase().indexOf("aig primary") > -1 ||
                selectedInsurance?.package_name?.toLowerCase().indexOf("rhb") > -1 ||
                selectedInsurance?.package_name?.toLowerCase().indexOf("tune") > -1
            ) {
                setOptionsTripType(
                    meta?.trip_type_list
                        .filter((i) => i?.trip_type_code?.toLowerCase() !== TRIP_TYPE.ANNUAL.code)
                        .map((item) => {
                            return { label: item.trip_type_name, value: item.id }
                        }),
                )
            } else {
                setOptionsTripType(
                    meta?.trip_type_list.map((item) => {
                        return { label: item.trip_type_name, value: item.id }
                    }),
                )
            }
        }
    }, [meta])

    useEffect(() => {
        if (optionsCountries) {
            // Default to Malaysia for AIG Domestic
            if (selectedInsurance?.package_name.includes("AIG")) {
                if (selectedInsurance?.package_name.includes("Domestic")) {
                    setValue("destination", [{ label: "Malaysia", code: 136 }])
                }
            }
        } 
    }, [optionsCountries])

    useEffect(() => {
        if (watchIsWithinMalaysia) {
            if (selectedInsurance?.insurer_code === INSURANCE.AIG) {
                setDisabledDestination(false)

                if (!selectedInsurance?.package_name.includes("Domestic")) {
                    resetField("destination")
                }
            } else {
                setValue("destination", [{ label: "Malaysia", code: 136 }])
                setDisabledDestination(true)
            }
        } else {
            resetField("destination")
            setDisabledDestination(false)
        }
    }, [watchIsWithinMalaysia])

    useEffect(() => {
        if (watchIsSpouse) {
            setIsSpouse(true)
        } else {
            setIsSpouse(false)
        }
    }, [watchIsSpouse])

    useEffect(() => {
        if (selectedInsurance?.insurer_code === INSURANCE.CHUBB) {
            let existDomestic = false;
            let existOversea = false;

            if(watchDestination.filter((item) => item.code === 136).length === 1) {
                existDomestic = true;
            }
            
            if(watchDestination.filter((item) => item.code !== 136).length >= 1) {
                existOversea = true;
            }

            if(existDomestic === true && existOversea === true) {
                setIsShowChubbMessage(true)
            } else {
                setIsShowChubbMessage(false)
            }  
        }
    }, [watchDestination])

    return (
        <>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 1, md: 12 }}>
                <Grid item xs={12}>
                    <Typography variant="h6" color="primary">
                        Travel Details
                    </Typography>
                </Grid>
                
                <Grid item xs={selectedInsurance?.insurer_code !== INSURANCE.AIG && selectedInsurance?.insurer_code !== INSURANCE.TUNE && selectedInsurance?.insurer_code !== INSURANCE.AXA ? 8 : 12}>
                    <InputTableSelectSearchControl
                        disabled={disabledDestination}
                        control={control}
                        multiple={true}
                        name="destination"
                        label="Destination"
                        options={optionsCountries}
                    />
                    {isShowChubbMessage === true && (
                        <FormHelperText style={{color : "red"}}>*For CHUBB package, domestic cannot buy together with oversea trip.</FormHelperText>
                    )}
                </Grid>

                {selectedInsurance?.insurer_code !== INSURANCE.AIG && selectedInsurance?.insurer_code !== INSURANCE.TUNE
                && selectedInsurance?.insurer_code !== INSURANCE.AXA && (
                    <Grid item xs={4}>
                        <InputCheckBox
                            control={control}
                            name="isWithinMalaysia"
                            label="Within Malaysia?"
                        />
                    </Grid>
                )}

                <Grid item xs={6}>
                    <InputTableSelectControl
                        defaultValue={TRIP_TYPE.SINGLE.id}
                        control={control}
                        name="tripType"
                        label="Trip Type"
                        options={optionsTripTypes}
                    />
                </Grid>

                <Grid item xs={6}>
                    <InputTableSelectControl
                        defaultValue="individual"
                        control={control}
                        name="coverageType"
                        label="Coverage"
                        options={optionsCoverageType}
                    />
                </Grid>

                <Grid item xs={6}>
                    <InputTableDateControl
                        disablePast
                        control={control}
                        name="departureDate"
                        label="Departure Date"
                    />
                </Grid>

                <Grid item xs={6}>
                    {/* {(watchTripType !== TRIP_TYPE.ANNUAL.id ||
                        (selectedInsurance?.insurer_code === INSURANCE.TUNE && watchTripType === TRIP_TYPE.ROUND.id))  */}
                    {!hideReturnDate
                        && (
                            <InputTableDateControl
                                control={control}
                                name="returnDate"
                                label="Return Date"
                                defaultCalendarMonth={departureDate}
                                minDate={departureDate}
                                disabled={!departureDate}
                            />
                    )}
                </Grid>

                {optionsTravelDelayUpgrade.length > 0 && (
                    <Grid item xs={6}>
                        <InputTableSelectControl
                            defaultValue="0"
                            control={control}
                            name="travelDelayUpgrade"
                            label="Travel Delay Upgrade"
                            options={optionsTravelDelayUpgrade}
                        />
                    </Grid>
                )}

                {watchCoverageType === COVERAGE_TYPE.FAMILY && (
                    <Grid item xs={6}>
                        <InputCheckBox
                            control={control}
                            name="isSpouse"
                            label="Is your spouse travel with you?"
                        />
                    </Grid>
                )}
                
            </Grid>
        </>
    )
}

const mapStateToProps = (state) => ({
    meta: state.core.meta,
    selectedInsurance: state.insurance.selectedInsurance,
    isSpouse: state.insurance.isSpouse,
})

const mapDispatchToProps = { setWatchInsuranceCoverage, setIsSpouse }

export default connect(mapStateToProps, mapDispatchToProps)(ConverageDetailsForm)
