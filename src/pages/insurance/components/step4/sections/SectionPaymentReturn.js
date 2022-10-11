import React from "react"
import { connect } from "react-redux"
import Grid from "@mui/material/Grid"
import { Link } from "react-router-dom"
import { useMediaQuery } from "react-responsive"
import Divider from "@mui/material/Divider"
import Chip from "@mui/material/Chip"

import CardInsuranceRateDetails from "src/pages/insurance/components/common/cards/CardInsuranceRateDetails"
import CardPaymentReturnStatus from "src/pages/insurance/components/step4/cards/CardPaymentReturnStatus"
import CardPersonalInformation from "src/pages/insurance/components/step4/cards/CardPersonalInformation"
import CardCoverageDetails from "src/pages/insurance/components/step4/cards/CardCoverageDetails"
import CardInsuredsDetails from "src/pages/insurance/components/step4/cards/CardInsuredsDetails"

export const SectionPaymentReturn = ({ paymentReturnData }) => {
    const isSurfacePro7 = useMediaQuery({ width: 912 })

    return (
        <Grid
            container
            spacing={{ xs: 2, md: 5 }}
            columns={{ xs: 1, sm: 1, md: isSurfacePro7 ? 1 : 12 }}
        >
            <Grid item xs={1} sm={1} md={6}>
                <CardInsuranceRateDetails />
            </Grid>

            <Grid item xs={1} sm={1} md={isSurfacePro7 ? 1 : 6}>
                <CardPaymentReturnStatus paymentReturnData={paymentReturnData} />

                <div className="mt-2 d-flex justify-content-end">
                    <Link
                        to="/"
                        style={{
                            color: "#009c99",
                            cursor: "pointer",
                        }}
                    >
                        Back to Home Page
                    </Link>
                </div>
            </Grid>

            <Grid item xs={1} sm={1} md={12}>
                <Divider className="mt-5 mb-3">
                    <Chip color="primary" label="Policy Details" sx={{ borderRadius: "4px" }} />
                </Divider>
            </Grid>

            <Grid item xs={1} sm={1} md={6}>
                <CardPersonalInformation paymentReturnData={paymentReturnData} />
            </Grid>

            <Grid item xs={1} sm={1} md={6}>
                <CardCoverageDetails paymentReturnData={paymentReturnData} />
            </Grid>

            <Grid item xs={1} sm={1} md={12}>
                <CardInsuredsDetails paymentReturnData={paymentReturnData} />
            </Grid>
        </Grid>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(SectionPaymentReturn)
