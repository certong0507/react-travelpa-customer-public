import React from "react"
import { connect } from "react-redux"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import { format } from "date-fns"

export const PersonalInformationCard = ({ back, insuranceDetailsForm, sales }) => {
    return (
        <Card variant="outlined" className="p-2">
            <CardContent>
                <div className="d-flex justify-content-between align-self-center">
                    <Typography variant={"div"} className="summary-card-title">
                        <b>Personal Information</b>
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
                        <Grid item xs={12} className="pt-2 pl-2">
                            <div>
                                <Typography variant="subtitle2" color="primary">
                                    Full Name
                                </Typography>
                                <div>{insuranceDetailsForm?.fullName || "-"}</div>
                            </div>
                        </Grid>

                        <Grid item xs={12} className="pt-2">
                            <div>
                                <Typography variant="subtitle2" color="primary">
                                    Email
                                </Typography>
                                <div>{insuranceDetailsForm?.email || "-"}</div>
                            </div>
                        </Grid>

                        <Grid item xs={12} className="pt-2">
                            <div>
                                <Typography variant="subtitle2" color="primary">
                                    Travel Document
                                </Typography>
                                <div className="text-uppercase">
                                    {insuranceDetailsForm?.travelDocument || "-"}{" "}
                                    {insuranceDetailsForm?.travelDocumentValue}
                                </div>
                            </div>
                        </Grid>

                        <Grid item xs={12} className="pt-2">
                            <div>
                                <Typography variant="subtitle2" color="primary">
                                    DOB
                                </Typography>
                                <div className="text-uppercase">
                                    {insuranceDetailsForm?.dob &&
                                        format(new Date(insuranceDetailsForm?.dob), "d MMM yyyy")}
                                </div>
                            </div>
                        </Grid>

                        <Grid item xs={12} className="pt-2">
                            <div>
                                <Typography variant="subtitle2" color="primary">
                                    Mobile No
                                </Typography>
                                <div>{insuranceDetailsForm?.countryCode + insuranceDetailsForm?.mobileNo}</div>
                            </div>
                        </Grid>

                        <Grid item xs={12} className="pt-2">
                            <div>
                                <Typography variant="subtitle2" color="primary">
                                    Address
                                </Typography>
                                <div>{insuranceDetailsForm?.address || "-"}</div>
                            </div>
                        </Grid>

                        <Grid item xs={12} className="pt-2">
                            <div>
                                <Typography variant="subtitle2" color="primary">
                                    Occupation
                                </Typography>
                                <div>{insuranceDetailsForm?.occupation || "-"}</div>
                            </div>
                        </Grid>

                        {sales?.name && (
                            <Grid item xs={12} className="pt-2">
                                <div>
                                    <Typography variant="subtitle2" color="primary">
                                        Sales
                                    </Typography>
                                    <div>{sales?.name || "-"}</div>
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
    sales: state.insurance.sales,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalInformationCard)
