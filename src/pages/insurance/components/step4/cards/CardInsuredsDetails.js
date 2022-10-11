import React from "react"
import { CCard, CCardBody } from "@coreui/react"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import { useMediaQuery } from "react-responsive"
import { format } from "date-fns"

import TableNominee from "src/pages/insurance/components/step4/tables/TableNominee"

export default function CardInsuredsDetails({ paymentReturnData }) {
    const isDesktop = useMediaQuery({ minWidth: 992 })

    return (
        <>
            {paymentReturnData?.package_rate?.insured_list?.length > 0 &&
                paymentReturnData?.package_rate?.insured_list?.map(
                    (item, index) =>
                        item?.name?.length > 0 && (
                            <div key={index} style={{ overflowX: "auto" }}>
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
                                                <b>Insured {index + 1} Details</b>
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
                                                    <Typography variant="subtitle2" color="primary">
                                                        Insured Full Name
                                                    </Typography>
                                                    <div style={{ marginLeft: "1%" }}>
                                                        {item?.name}
                                                    </div>
                                                </div>
                                            </Grid>

                                            <Grid item xs={1} sm={1} md={6}>
                                                <div className="d-flex">
                                                    <Typography variant="subtitle2" color="primary">
                                                        Travel Document
                                                    </Typography>

                                                    <div
                                                        className="text-uppercase"
                                                        style={{ marginLeft: "1%" }}
                                                    >
                                                        {item?.travel_document}{" "}
                                                        {item?.travel_document_value}
                                                    </div>
                                                </div>
                                            </Grid>

                                            <Grid item xs={1} sm={1} md={6}>
                                                <div className="d-flex">
                                                    <Typography variant="subtitle2" color="primary">
                                                        Insured DOB
                                                    </Typography>

                                                    <div style={{ marginLeft: "1%" }}>
                                                        {item?.dob &&
                                                            format(
                                                                new Date(item?.dob),
                                                                "d MMM yyyy",
                                                            )}
                                                    </div>
                                                </div>
                                            </Grid>

                                            <Grid item xs={1} sm={1} md={6}>
                                                <div className="d-flex">
                                                    <Typography variant="subtitle2" color="primary">
                                                        Insured Occupation
                                                    </Typography>

                                                    <div style={{ marginLeft: "1%" }}>
                                                        {item?.occupation}
                                                    </div>
                                                </div>
                                            </Grid>

                                            <Grid item xs={1} sm={1} md={6}>
                                                <div className="d-flex">
                                                    <Typography variant="subtitle2" color="primary">
                                                        Insured Address
                                                    </Typography>

                                                    <div style={{ marginLeft: "1%" }}>
                                                        {item?.address}
                                                    </div>
                                                </div>
                                            </Grid>

                                            <Grid item xs={1} sm={1} md={6}>
                                                <div className="d-flex">
                                                    <Typography variant="subtitle2" color="primary">
                                                        Insured Mobile Number
                                                    </Typography>

                                                    <div style={{ marginLeft: "1%" }}>
                                                        {item?.mobile_no
                                                            ? `(${item?.country_code}) ${item?.mobile_no}`
                                                            : "-"}
                                                    </div>
                                                </div>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={1} sm={1} md={12} className="mt-3">
                                            <Typography variant="subtitle2" color="primary">
                                                <b>Nominees</b>
                                            </Typography>

                                            <TableNominee data={item?.nominee_list} />
                                        </Grid>
                                    </CCardBody>
                                </CCard>
                            </div>
                        ),
                )}
        </>
    )
}
