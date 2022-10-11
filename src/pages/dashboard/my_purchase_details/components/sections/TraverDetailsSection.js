import React from "react"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import moment from "moment"
import { connect } from "react-redux"

export const TraverDetailsSection = ({ myPurchaseDetails }) => {
    return (
        <Box className="mt-5 mb-5">
            <Typography variant="subtitle1" color="#2a4a4b" component="div">
                <b>Travel Details</b>
            </Typography>

            <Grid container columns={{ xs: 1, sm: 1, md: 12, lg: 12 }}>
                <Grid item xs={1} sm={1} md={4} lg={4}>
                    <Typography variant="caption" color="primary">
                        Destination
                    </Typography>
                    <Typography variant="body2">{myPurchaseDetails?.destinations_name}</Typography>
                </Grid>

                <Grid item xs={1} sm={1} md={4} lg={4}>
                    <Typography variant="caption" color="primary">
                        Trip Type
                    </Typography>
                    <Typography variant="body2">{myPurchaseDetails?.trip_type_name}</Typography>
                </Grid>

                <Grid item xs={1} sm={1} md={4} lg={4}>
                    <Typography variant="caption" color="primary">
                        Coverage
                    </Typography>
                    <Typography variant="body2" className="text-capitalize">
                        {myPurchaseDetails?.coverage_type}
                    </Typography>
                </Grid>

                <Grid item xs={1} sm={1} md={4} lg={4}>
                    <Typography variant="caption" color="primary">
                        Departure Date
                    </Typography>
                    <Typography variant="body2">
                        {moment(myPurchaseDetails?.departure_date).format("DD MMM YYYY")}
                    </Typography>
                </Grid>

                <Grid item xs={1} sm={1} md={4} lg={4}>
                    <Typography variant="caption" color="primary">
                        Return Date
                    </Typography>
                    <Typography variant="body2">
                        {moment(myPurchaseDetails?.return_date).format("DD MMM YYYY")}
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

const mapStateToProps = (state) => ({
    myPurchaseDetails: state.myPurchase.myPurchaseDetails,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(TraverDetailsSection)
