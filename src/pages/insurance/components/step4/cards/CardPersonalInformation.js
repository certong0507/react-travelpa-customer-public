import React from "react"
import { connect } from "react-redux"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import { format } from "date-fns"

export const PersonalInformationCard = ({ paymentReturnData }) => {
    return (
        <Card variant="outlined" className="p-2">
            <CardContent>
                <div className="d-flex justify-content-between align-self-center">
                    <Typography variant="h6" component="div" className="summary-card-title">
                        <b>Personal Information</b>
                    </Typography>
                </div>

                <div className="mb-3 pb-2"></div>

                <Box sx={{ width: "100%" }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={12} className="pt-2 pl-2">
                            <div>
                                <Typography variant="subtitle2" color="primary">
                                    Full Name
                                </Typography>
                                <div>{paymentReturnData?.package_rate?.name || "-"}</div>
                            </div>
                        </Grid>

                        <Grid item xs={12} className="pt-2">
                            <div>
                                <Typography variant="subtitle2" color="primary">
                                    Travel Document
                                </Typography>
                                <div className="text-uppercase">
                                    {paymentReturnData?.package_rate?.travel_document || "-"}{" "}
                                    {paymentReturnData?.package_rate?.travel_document_value}
                                </div>
                            </div>
                        </Grid>

                        <Grid item xs={12} className="pt-2">
                            <div>
                                <Typography variant="subtitle2" color="primary">
                                    DOB
                                </Typography>
                                <div className="text-uppercase">
                                    {paymentReturnData?.package_rate?.dob &&
                                        format(
                                            new Date(paymentReturnData?.package_rate?.dob),
                                            "d MMM yyyy",
                                        )}
                                </div>
                            </div>
                        </Grid>

                        <Grid item xs={12} className="pt-2">
                            <div>
                                <Typography variant="subtitle2" color="primary">
                                    Address
                                </Typography>
                                <div>{paymentReturnData?.package_rate?.address || "-"}</div>
                            </div>
                        </Grid>

                        <Grid item xs={12} className="pt-2">
                            <div>
                                <Typography variant="subtitle2" color="primary">
                                    Occupation
                                </Typography>
                                <div>{paymentReturnData?.package_rate?.occupation || "-"}</div>
                            </div>
                        </Grid>

                        <Grid item xs={12} className="pt-2">
                            <div>
                                <Typography variant="subtitle2" color="primary">
                                    Email
                                </Typography>
                                <div>{paymentReturnData?.package_rate?.email || "-"}</div>
                            </div>
                        </Grid>

                        <Grid item xs={12} className="pt-2">
                            <div>
                                <Typography variant="subtitle2" color="primary">
                                    Mobile Number
                                </Typography>
                                <div>
                                    {paymentReturnData?.package_rate?.mobile_no
                                        ? `(${paymentReturnData?.package_rate?.country_code}) ${paymentReturnData?.package_rate?.mobile_no}`
                                        : "-"}
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Box>
            </CardContent>
        </Card>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalInformationCard)
