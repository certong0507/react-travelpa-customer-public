import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { CCard, CCardBody } from "@coreui/react"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import Collapse from "@mui/material/Collapse"
import CardActions from "@mui/material/CardActions"
import IconButton from "@mui/material/IconButton"
import { styled } from "@mui/material/styles"
// import { format } from "date-fns"
// import { useMediaQuery } from "react-responsive"

import PersonalInformationCard from "src/pages/insurance/components/step3/cards/CardPersonalInformation"
import CoverageDetailsCard from "src/pages/insurance/components/step3/cards/CardCoverageDetails"
// import TableNominee from "src/pages/insurance/components/common/tables/TableNominee"
import CardInsuranceRateDetails from "src/pages/insurance/components/common/cards/CardInsuranceRateDetails"
import InsuredDetailsCard from "src/pages/insurance/components/step3/cards/CardInsuredDetails"
import ChildDetailsCard from "src/pages/insurance/components/step3/cards/CardChildDetails"
import { setInsuranceDetails } from "src/action/ui_actions"
import {
    doStoreCustomerApplication,
    doUpdateCustomerApplication,
    doResetStoreCustomerApplication,
} from "src/action/api_actions"

const ExpandMore = styled((props) => {
    const { expand, ...other } = props
    return <IconButton {...other} />
})(({ theme, expand }) => ({
    transform: !expand ? "rotate(180deg)" : "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
    }),
}))

export const Step3 = ({
    back,
    next,
    selectedInsurance,
    insuranceDetailsForm,
    packageRateDetails,
    doStoreCustomerApplication,
    doUpdateCustomerApplication,
    doResetStoreCustomerApplication,
    success,
    storeCustomerApplicationResponse,
    setInsuranceDetails,
}) => {
    const [expanded, setExpanded] = useState([])
    // const isDesktop = useMediaQuery({ minWidth: 992 })

    const handleExpandClick = () => {
        setExpanded(!expanded)
    }

    const onSave = () => {
        // Update
        if (insuranceDetailsForm?.customerApplicationId) {
            doUpdateCustomerApplication({
                token: insuranceDetailsForm?.token,
                customerApplicationId: insuranceDetailsForm?.customerApplicationId,
                packageId: selectedInsurance?.id,
                fullName: insuranceDetailsForm?.fullName,
                travelDocument: insuranceDetailsForm?.travelDocument,
                travelDocumentValue: insuranceDetailsForm?.travelDocumentValue,
                dob: insuranceDetailsForm?.dob,
                address: insuranceDetailsForm?.address,
                occupation: insuranceDetailsForm?.occupation,
                email: insuranceDetailsForm?.email,
                countryCode: insuranceDetailsForm?.countryCode,
                mobileNo: insuranceDetailsForm?.mobileNo,
                coverageType: insuranceDetailsForm?.coverageType,
                tripTypeId: insuranceDetailsForm?.tripType,
                departureDate: insuranceDetailsForm?.departureDate,
                returnDate: insuranceDetailsForm?.returnDate,
                destinations: insuranceDetailsForm?.destination?.map((item) => item.code),
                insureds: insuranceDetailsForm?.insureds,
                child: insuranceDetailsForm?.child,
                travelDelayUpgrade: insuranceDetailsForm?.travelDelayUpgrade,
                deletedInsured: insuranceDetailsForm?.deletedInsured,
                deletedNominee: insuranceDetailsForm?.deletedNominee,
            })
        }
        // Insert
        else {
            doStoreCustomerApplication({
                packageId: selectedInsurance?.id,
                fullName: insuranceDetailsForm?.fullName,
                travelDocument: insuranceDetailsForm?.travelDocument,
                travelDocumentValue: insuranceDetailsForm?.travelDocumentValue,
                dob: insuranceDetailsForm?.dob,
                address: insuranceDetailsForm?.address,
                occupation: insuranceDetailsForm?.occupation,
                email: insuranceDetailsForm?.email,
                countryCode: insuranceDetailsForm?.countryCode,
                mobileNo: insuranceDetailsForm?.mobileNo,
                coverageType: insuranceDetailsForm?.coverageType,
                tripTypeId: insuranceDetailsForm?.tripType,
                departureDate: insuranceDetailsForm?.departureDate,
                returnDate: insuranceDetailsForm?.returnDate,
                destinations: insuranceDetailsForm?.destination?.map((item) => item.code),
                insureds: insuranceDetailsForm?.insureds,
                child: insuranceDetailsForm?.child,
                travelDelayUpgrade: insuranceDetailsForm?.travelDelayUpgrade,
                referralId: insuranceDetailsForm?.referralId,
            })
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0)

        const unloadCallback = (event) => {
            event.preventDefault()
            event.returnValue = ""
            return ""
        }

        window.addEventListener("beforeunload", unloadCallback)
        return () => window.removeEventListener("beforeunload", unloadCallback)
    }, [])

    useEffect(() => {
        if (success) {
            next()
            doResetStoreCustomerApplication()

            setInsuranceDetails({
                insurerCode: selectedInsurance?.insurer_code,
                fullName: insuranceDetailsForm?.fullName,
                travelDocument: insuranceDetailsForm?.travelDocument,
                travelDocumentValue: insuranceDetailsForm?.travelDocumentValue,
                dob: insuranceDetailsForm?.dob,
                address: insuranceDetailsForm?.address,
                occupation: insuranceDetailsForm?.occupation,
                email: insuranceDetailsForm?.email,
                countryCode: insuranceDetailsForm?.countryCode,
                mobileNo: insuranceDetailsForm?.mobileNo,
                coverageType: insuranceDetailsForm?.coverageType,
                departureDate: insuranceDetailsForm?.departureDate,
                returnDate: insuranceDetailsForm?.returnDate,
                destination: insuranceDetailsForm?.destination,
                isWithinMalaysia: insuranceDetailsForm.isWithinMalaysia,
                isSpouse: insuranceDetailsForm.isSpouse,
                tripType: insuranceDetailsForm?.tripType,
                customerApplicationId: storeCustomerApplicationResponse?.customer_application_id,
                insureds: storeCustomerApplicationResponse?.insureds,
                child: storeCustomerApplicationResponse?.child,
                travelDelayUpgrade: insuranceDetailsForm?.travelDelayUpgrade,
                token: storeCustomerApplicationResponse?.token,
                deletedInsured: [],
                deletedNominee: [],
            })
        }
    }, [success])

    return (
        <div id="insurance-step-3-wrapper" className="d-flex justify-content-center mt-5">
            <CCard className="w-100 border-0">
                <CCardBody>
                    <div id="insurance-step-3-title">
                        <b>Review and make payment</b>
                    </div>

                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 3, md: 3 }}>
                        <Grid item xs={12} sm={6} md={6}>
                            <PersonalInformationCard back={back} />
                        </Grid>

                        <Grid item xs={12} sm={6} md={6}>
                            <CoverageDetailsCard back={back} />
                        </Grid>
                    </Grid>

                    {insuranceDetailsForm?.insureds?.length > 0 &&
                        insuranceDetailsForm?.insureds?.map(
                            (item, index) =>
                                item?.insuredFullName?.length > 0 && (
                                    <div key={index} style={{ overflowX: "auto" }}>
                                        <InsuredDetailsCard 
                                            item={item}
                                            index={index}
                                        />
                                    </div>
                                ),
                        )
                    }

                    {insuranceDetailsForm?.child?.length > 0 &&
                        insuranceDetailsForm?.child?.map(
                            (item, index) =>
                                item?.insuredFullName?.length > 0 && (
                                    <div key={index} style={{ overflowX: "auto" }}>
                                        <ChildDetailsCard 
                                            item={item}
                                            index={index}
                                        />
                                    </div>
                                ),
                        )
                    }

                    <Grid
                        container
                        spacing={{ xs: 2, md: 5 }}
                        columns={{ xs: 1, sm: 2, md: 9 }}
                        style={{ marginTop: "40px" }}
                    >
                        <Grid item xs={1} sm={1} md={5}>
                            <CardActions
                                disableSpacing
                                style={{ border: "1px solid rgba(0, 0, 0, 0.12)" }}
                            >
                                <Typography variant="div" className="summary-card-title">
                                    <b>Schedule of Benefits</b>
                                </Typography>

                                <ExpandMore
                                    expand={expanded}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </ExpandMore>
                            </CardActions>

                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: packageRateDetails?.package_rate?.insurance_benefit
                                            ?.content,
                                    }}
                                />
                            </Collapse>
                        </Grid>

                        <Grid item xs={1} sm={1} md={4}>
                            <CardInsuranceRateDetails back={back} />

                            <div className="d-flex justify-content-end mt-3">
                                <Button
                                    disableElevation
                                    className="m-2"
                                    size="small"
                                    variant="outlined"
                                    onClick={back}
                                >
                                    Back
                                </Button>
                                <Button
                                    disableElevation
                                    className="m-2"
                                    size="small"
                                    variant="contained"
                                    onClick={onSave}
                                >
                                    Pay Now
                                </Button>
                            </div>
                        </Grid>
                    </Grid>
                </CCardBody>
            </CCard>
        </div>
    )
}

const mapStateToProps = (state) => ({
    selectedInsurance: state.insurance.selectedInsurance,
    insuranceDetailsForm: state.insurance.insuranceDetailsForm,
    packageRateDetails: state.insurance.packageRateDetails,
    success: state.insurance.success,
    fail: state.insurance.fail,
    storeCustomerApplicationErrorMessage: state.insurance.storeCustomerApplicationErrorMessage,
    storeCustomerApplicationResponse: state.insurance.storeCustomerApplicationResponse,
})

const mapDispatchToProps = {
    doStoreCustomerApplication,
    doUpdateCustomerApplication,
    doResetStoreCustomerApplication,
    setInsuranceDetails,
}

export default connect(mapStateToProps, mapDispatchToProps)(Step3)
