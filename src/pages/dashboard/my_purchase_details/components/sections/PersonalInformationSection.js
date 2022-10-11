import React from "react"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import moment from "moment"
import { connect } from "react-redux"

export const PersonalInformationSection = ({ myPurchaseDetails }) => {
    return (
        <Box className="mt-4">
            <Typography variant="subtitle1" color="#2a4a4b" component="div">
                <b>Personal Infomation</b>
            </Typography>

            <Grid container columns={{ xs: 1, sm: 1, md: 12, lg: 12 }}>
                <Grid item xs={1} sm={1} md={4} lg={4}>
                    <Typography variant="caption" color="primary">
                        Name
                    </Typography>
                    <Typography variant="body2">{myPurchaseDetails?.name}</Typography>
                </Grid>

                <Grid item xs={1} sm={1} md={4} lg={4}>
                    <Typography variant="caption" color="primary" className="text-uppercase">
                        {myPurchaseDetails?.travel_document}
                    </Typography>
                    <Typography variant="body2">
                        {myPurchaseDetails?.travel_document_value}
                    </Typography>
                </Grid>

                <Grid item xs={1} sm={1} md={4} lg={4}>
                    <Typography variant="caption" color="primary">
                        DOB
                    </Typography>
                    <Typography variant="body2">
                        {moment(myPurchaseDetails?.dob).format("DD MMM YYYY")}
                    </Typography>
                </Grid>

                <Grid item xs={1} sm={1} md={4} lg={4}>
                    <Typography variant="caption" color="primary">
                        Email
                    </Typography>
                    <Typography variant="body2">{myPurchaseDetails?.email}</Typography>
                </Grid>

                <Grid item xs={1} sm={1} md={4} lg={4}>
                    <Typography variant="caption" color="primary">
                        Occupation
                    </Typography>
                    <Typography variant="body2" className="text-capitalize">{myPurchaseDetails?.occupation}</Typography>
                </Grid>

                <Grid item xs={1} sm={1} md={4} lg={4}>
                    <Typography variant="caption" color="primary">
                        Mobile No.
                    </Typography>
                    <Typography variant="body2">
                        ({myPurchaseDetails?.country_code}) {myPurchaseDetails?.mobile_no}
                    </Typography>
                </Grid>

                <Grid item xs={1} sm={1} md={12} lg={12}>
                    <Typography variant="caption" color="primary">
                        Address
                    </Typography>
                    <Typography variant="body2">{myPurchaseDetails?.address}</Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

const mapStateToProps = (state) => ({
    myPurchaseDetails: state.myPurchase.myPurchaseDetails,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalInformationSection)
