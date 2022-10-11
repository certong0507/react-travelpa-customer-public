import React from "react"
import { connect } from "react-redux"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import { format } from "date-fns"

import { TRIP_TYPE } from "src/utils/enum"

export const CoverageDetailsCard = ({ back, insuranceDetailsForm, meta }) => {
    const showTripType = () => {
        if (insuranceDetailsForm?.tripType) {
            return meta?.trip_type_list
                ?.filter((item) => item.id === insuranceDetailsForm?.tripType)
                ?.map((item) => item.trip_type_name)
        } else {
            return "-"
        }
    }

    const showDestination = () => {
        if (insuranceDetailsForm?.destination?.length > 0) {
            return insuranceDetailsForm?.destination?.map((item) => item.label).join(", ")
        } else {
            return "-"
        }
    }

    const showTravelPeriod = () => {
        if (!insuranceDetailsForm?.departureDate) {
            return "-"
        }

        if (insuranceDetailsForm?.tripType === TRIP_TYPE.ANNUAL.id) {
            return <div>{format(new Date(insuranceDetailsForm?.departureDate), "d/MM/yyyy")}</div>
        } else {
            return (
                <div>
                    {format(new Date(insuranceDetailsForm?.departureDate), "d/MM/yyyy")} - {""}
                    {format(new Date(insuranceDetailsForm?.returnDate), "d/MM/yyyy")}
                </div>
            )
        }
    }
    return (
        <Card variant="outlined" className="p-2 h-100">
            <CardContent>
                <div className="d-flex justify-content-between align-self-center">
                    <Typography variant="div" className="summary-card-title">
                        <b>Trip Details</b>
                    </Typography>

                    <div className="d-inline-block">
                        <Button
                            disableElevation
                            size="small"
                            variant="contained"
                            onClick={() => back()}
                        >
                            Edit
                        </Button>
                    </div>
                </div>

                <div className="mb-3 pb-2"></div>

                <Box sx={{ width: "100%" }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={12} className="pt-2">
                            <div>
                                <Typography variant="subtitle2" color="primary">
                                    Destination
                                </Typography>
                                <div>{showDestination()}</div>
                            </div>
                        </Grid>

                        <Grid item xs={12} className="pt-2">
                            <div>
                                <Typography variant="subtitle2" color="primary">
                                    Travel Period
                                </Typography>
                                <div>{showTravelPeriod()}</div>
                            </div>
                        </Grid>

                        <Grid item xs={12} className="pt-2">
                            <div>
                                <Typography variant="subtitle2" color="primary">
                                    Trip Type
                                </Typography>
                                <div>{showTripType()}</div>
                            </div>
                        </Grid>

                        <Grid item xs={12} className="pt-2 pl-2">
                            <div>
                                <Typography variant="subtitle2" color="primary">
                                    Coverage Type
                                </Typography>
                                <div className="text-capitalize">
                                    {insuranceDetailsForm?.coverageType || "-"}
                                </div>
                            </div>
                        </Grid>

                        {insuranceDetailsForm?.travelDelayUpgrade !== undefined && (
                            <Grid item xs={12} className="pt-2 pl-2">
                                <div>
                                    <Typography variant="subtitle2" color="primary">
                                        Travel Delay Upgrade
                                    </Typography>
                                    <div className="text-capitalize">
                                        {insuranceDetailsForm?.travelDelayUpgrade == 1 ? "Yes" : "No"}
                                    </div>
                                </div>
                            </Grid>
                        )}
                    </Grid>
                </Box>
            </CardContent>
        </Card>
    )
}

const mapStateToProps = (state) => ({
    insuranceDetailsForm: state.insurance.insuranceDetailsForm,
    meta: state.core.meta,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(CoverageDetailsCard)
