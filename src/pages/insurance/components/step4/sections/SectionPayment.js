import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import Grid from "@mui/material/Grid"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Checkbox from "@mui/material/Checkbox"
import { Link } from "react-router-dom"
import { useMediaQuery } from "react-responsive"

import CardInsuranceRateDetails from "src/pages/insurance/components/common/cards/CardInsuranceRateDetails"
import logoVisa from "src/assets/logoVisa.png"
import logoFPX from "src/assets/logoFPX.png"

export const SectionPayment = ({
    back,
    storeCustomerApplicationResponse,
    insuranceDetailsForm,
    selectedInsurance,
    packageRateDetails,
}) => {
    const [vCode, setVCode] = useState(null)
    const [orderId, setOrderId] = useState(null)
    const [merchantId, seMerchantId] = useState(null)
    const [totalPremium, setTotalPremium] = useState(null)
    const [isChecked, setIsChecked] = useState(false)
    const isSurfacePro7 = useMediaQuery({ width: 912 })

    useEffect(() => {
        if (storeCustomerApplicationResponse) {
            setVCode(storeCustomerApplicationResponse?.v_code)
            setOrderId(storeCustomerApplicationResponse?.order_id)
            seMerchantId(storeCustomerApplicationResponse?.merchant_id)
        }
    }, [storeCustomerApplicationResponse])

    useEffect(() => {
        setTotalPremium(packageRateDetails?.package_rate?.total_premium)
    }, [packageRateDetails])

    return (
        <>
            <Grid
                container
                spacing={{ xs: 2, md: 5 }}
                columns={{ xs: 1, sm: 1, md: isSurfacePro7 ? 1 : 12 }}
            >
                <Grid item xs={1} sm={1} md={6}>
                    <CardInsuranceRateDetails />
                </Grid>

                <Grid item xs={1} sm={1} md={isSurfacePro7 ? 1 : 6}>
                    <Typography variant="h6">
                        <b>Payment Method</b>
                    </Typography>

                    <Typography variant="subtitle2">
                        Secure Online Payment by MOLPay Please select a payment type from below to
                        proceed for payment.
                    </Typography>

                    <div className="mt-5">
                        <Grid
                            container
                            spacing={{ xs: 2, md: 5 }}
                            columns={{ xs: 1, sm: 12, md: 12 }}
                        >
                            <Grid item xs={1} sm={6} md={6}>
                                <div className="m-3">
                                    <div className="text-center">
                                        <img src={logoVisa} style={{ width: "50%" }} />
                                    </div>
                                    <div className="mt-2">
                                        <Button
                                            disableElevation
                                            size="small"
                                            className="w-100"
                                            variant="contained"
                                            component="div"
                                            disabled={!isChecked}
                                            data-toggle="molpayseamless"
                                            data-status={true}
                                            data-mpsmerchantid={merchantId}
                                            data-mpschannel="credit"
                                            data-mpsamount={totalPremium}
                                            data-mpsorderid={orderId}
                                            data-mpsbill_name={insuranceDetailsForm?.fullName}
                                            data-mpsbill_email={insuranceDetailsForm?.email}
                                            data-mpsbill_desc={selectedInsurance?.package_name}
                                            data-mpsvcode={vCode}
                                        >
                                            Pay with Credit/Debit Card
                                        </Button>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={1} sm={6} md={6}>
                                <div className="m-3">
                                    <div className="text-center">
                                        <img src={logoFPX} style={{ width: "44%" }} />
                                    </div>
                                    <div className="mt-2">
                                        <Button
                                            disableElevation
                                            size="small"
                                            className="w-100"
                                            variant="contained"
                                            component="div"
                                            disabled={!isChecked}
                                            data-toggle="molpayseamless"
                                            data-status={true}
                                            data-mpsmerchantid={merchantId}
                                            data-mpschannel="fpx"
                                            data-mpsamount={totalPremium}
                                            data-mpsorderid={orderId}
                                            data-mpsbill_name={insuranceDetailsForm?.fullName}
                                            data-mpsbill_email={insuranceDetailsForm?.email}
                                            data-mpsbill_desc={selectedInsurance?.package_name}
                                            data-mpsvcode={vCode}
                                        >
                                            Pay with FPX
                                        </Button>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </div>

                    <div className="mt-5 d-flex">
                        <div>
                            <Checkbox
                                size="small"
                                onChange={(e) => {
                                    setIsChecked(e.target.checked)
                                }}
                            />
                        </div>
                        <div>
                            <Typography variant="caption" component="div">
                                I have read your{" "}
                                <Link
                                    to="/privacy-policy"
                                    target="_blank"
                                    style={{
                                        color: "#009c99",
                                        textDecoration: "none",
                                        cursor: "pointer",
                                    }}
                                >
                                    Privacy Policy
                                </Link>{" "}
                                and agree to provide my personal contact details to enable you to
                                contact me for the purposes of this Quotation.
                            </Typography>

                            <Typography variant="caption" component="div" className="mt-4">
                                Click{" "}
                                <Link
                                    to="/privacy-policy"
                                    target="_blank"
                                    style={{
                                        color: "#009c99",
                                        textDecoration: "none",
                                        cursor: "pointer",
                                    }}
                                >
                                    Privacy Policy
                                </Link>{" "}
                                or{" "}
                                <Link
                                    to="/term-and-condition"
                                    target="_blank"
                                    style={{
                                        color: "#009c99",
                                        textDecoration: "none",
                                        cursor: "pointer",
                                    }}
                                >
                                    Terms and Conditions
                                </Link>{" "}
                                to read more.
                            </Typography>
                        </div>
                    </div>
                </Grid>
            </Grid>
            <div className="d-flex justify-content-end">
                <Button
                    disableElevation
                    className="m-2"
                    size="small"
                    variant="outlined"
                    onClick={back}
                >
                    Back
                </Button>
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    storeCustomerApplicationResponse: state.insurance.storeCustomerApplicationResponse,
    insuranceDetailsForm: state.insurance.insuranceDetailsForm,
    selectedInsurance: state.insurance.selectedInsurance,
    packageRateDetails: state.insurance.packageRateDetails,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(SectionPayment)
