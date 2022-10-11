import React from "react"
import { connect } from "react-redux"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import { format } from "date-fns"

import { TRIP_TYPE } from "src/utils/enum"

export const CoverageDetailsCard = ({ paymentReturnData, meta }) => {
    const showTravelPeriod = () => {
        if (!paymentReturnData?.package_rate?.departure_date) {
            return "-"
        }

        if (paymentReturnData?.package_rate?.tripType === TRIP_TYPE.ANNUAL.id) {
            return (
                <div>
                    {format(new Date(paymentReturnData?.package_rate?.departure_date), "d/MM/yyyy")}
                </div>
            )
        } else {
            return (
                <div>
                    {format(new Date(paymentReturnData?.package_rate?.departure_date), "d/MM/yyyy")}{" "}
                    - {""}
                    {format(new Date(paymentReturnData?.package_rate?.return_date), "d/MM/yyyy")}
                </div>
            )
        }
    }
    return (
        <Card variant="outlined" className="p-2 h-100">
            <CardContent>
                <div className="d-flex justify-content-between align-self-center">
                    <Typography variant="h6" component="div" className="summary-card-title">
                        <b>Trip Details</b>
                    </Typography>
                </div>

                <div className="mb-3 pb-2"></div>

                <Box sx={{ width: "100%" }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={12} className="pt-2">
                            <div>
                                <Typography variant="subtitle2" color="primary">
                                    Destination
                                </Typography>
                                <div>{paymentReturnData?.package_rate?.destinations_name}</div>
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
                                <div>{paymentReturnData?.package_rate?.trip_type_name}</div>
                            </div>
                        </Grid>

                        <Grid item xs={12} className="pt-2 pl-2">
                            <div>
                                <Typography variant="subtitle2" color="primary">
                                    Coverage Type
                                </Typography>
                                <div className="text-capitalize">
                                    {paymentReturnData?.package_rate?.coverage_type || "-"}
                                </div>
                            </div>
                        </Grid>

                        {paymentReturnData?.package_rate?.travelDelayUpgrade !== undefined && (
                            <Grid item xs={12} className="pt-2 pl-2">
                                <div>
                                    <Typography variant="subtitle2" color="primary">
                                        Travel Delay Upgrade
                                    </Typography>
                                    <div className="text-capitalize">
                                        {paymentReturnData?.package_rate?.travel_delay_upgrade == 1
                                            ? "Yes"
                                            : "No"}
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
    meta: state.core.meta,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(CoverageDetailsCard)
