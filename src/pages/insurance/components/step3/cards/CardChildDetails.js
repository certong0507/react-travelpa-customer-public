import React from "react"
import { connect } from "react-redux"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import { CCard, CCardBody } from "@coreui/react"
import { format } from "date-fns"
import { useMediaQuery } from "react-responsive"

import TableNominee from "src/pages/insurance/components/common/tables/TableNominee"

export const ChildDetailsCard = ({ insuranceDetailsForm, item, index }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })

    return (
        <CCard
            key={index}
            className="mb-3 mt-3"
            style={{
                backgroundColor: "rgb(237, 247, 237)",
                width: isDesktop ? "100%" : "1200px",
            }}
        >
            <CCardBody>
                <div className="d-flex justify-content-between">
                    <Typography
                        variant="subtitle2"
                        color="primary"
                        className="text-decoration-underline"
                    >
                        <b>
                            {"Child " + (index + 1)}
                        </b>
                    </Typography>
                </div>

                <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 1, sm: 1, md: 12 }}
                    direction="row"
                    className="mt-2"
                >
                    <Grid item xs={1} sm={1} md={6}>
                        <div className="d-flex">
                            <Typography
                                variant="subtitle2"
                                color="primary"
                            >
                                Insured Full Name
                            </Typography>
                            <div style={{ marginLeft: "1%" }}>
                                {item?.insuredFullName}
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={1} sm={1} md={6}>
                        <div className="d-flex">
                            <Typography
                                variant="subtitle2"
                                color="primary"
                            >
                                Travel Document
                            </Typography>

                            <div
                                className="text-uppercase"
                                style={{ marginLeft: "1%" }}
                            >
                                {item?.insuredTravelDocument}{" "}
                                {item?.insuredTravelDocumentValue}
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={1} sm={1} md={6}>
                        <div className="d-flex">
                            <Typography
                                variant="subtitle2"
                                color="primary"
                            >
                                Insured DOB
                            </Typography>

                            <div style={{ marginLeft: "1%" }}>
                                {item?.insuredDOB &&
                                    format(
                                        new Date(item?.insuredDOB),
                                        "d MMM yyyy",
                                    )}
                            </div>
                        </div>
                    </Grid>
                    
                    <Grid item xs={1} sm={1} md={6}>
                        <div className="d-flex">
                            <Typography
                                variant="subtitle2"
                                color="primary"
                            >
                                Insured Occupation
                            </Typography>

                            <div style={{ marginLeft: "1%" }}>
                                {item?.insuredOccupation}
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={1} sm={1} md={6}>
                        <div className="d-flex">
                            <Typography
                                variant="subtitle2"
                                color="primary"
                            >
                                Insured Address
                            </Typography>

                            <div style={{ marginLeft: "1%" }}>
                                {item?.insuredAddress}
                            </div>
                        </div>
                    </Grid>
                </Grid>
                <Grid item xs={1} sm={1} md={12} className="mt-3">
                    <Typography variant="subtitle2" color="primary">
                        <b>Nominees</b>
                    </Typography>

                    <TableNominee data={item?.nominees} />
                </Grid>
            </CCardBody>
        </CCard>
    )
}

const mapStateToProps = (state) => ({
    insuranceDetailsForm: state.insurance.insuranceDetailsForm,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ChildDetailsCard)
