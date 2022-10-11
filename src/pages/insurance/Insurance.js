import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { CContainer } from "@coreui/react"
import jwt_decode from "jwt-decode"
import { useSearchParams, useLocation } from "react-router-dom"

import {
    doGetInsurance,
    doGetMeta,
    doGetSalesUserDetail,
    doResetStoreCustomerApplication,
} from "src/action/api_actions"
import { setInsuranceRateDetails } from "src/action/ui_actions"
import Header from "src/components/header"
import Footer from "src/components/footer/copyright"
import Step1 from "./Step1"
import Step2 from "./Step2"
import Step3 from "./Step3"
import Step4 from "./Step4"
import StepperHorizontal from "src/pages/insurance/components/common/steppers/StepperHorizontal"
import StepperVertical from "src/pages/insurance/components/common/steppers/StepperVertical"
import {
    DesktopView,
    TabletView,
    MobilePortraitView,
} from "src/utils/functions"

const steps = ["Package Selection", "Information", "Summary", "Payment"]

export const Insurance = ({
    doGetInsurance,
    doGetMeta,
    doGetSalesUserDetail,
    doResetStoreCustomerApplication,
    setInsuranceRateDetails,
}) => {
    const location = useLocation()
    const [activeStep, setActiveStep] = useState(0)
    const [searchParams, setSearchParams] = useSearchParams()
    const [paymentReturnData, setPaymentReturnData] = useState(null)

    useEffect(() => {
        doGetInsurance()
        doGetMeta()
        const token = searchParams.get("id")

        if (token) {
            doGetSalesUserDetail(token)
        }

        doResetStoreCustomerApplication()
    }, [])

    useEffect(() => {
        if(location?.state?.fromProducts) {
            setActiveStep(1)
        }
    }, [location])

    useEffect(() => {
        const xToken = searchParams.get("gMh3eC2jQRHDSVLS4KEfHfOLmEz3MZCvXIkUUu4p")

        if (xToken) {
            const decodedToken = jwt_decode(xToken)

            if (decodedToken) {
                setActiveStep(3)
                setPaymentReturnData(decodedToken)
                setInsuranceRateDetails(decodedToken)
            }
        }
    }, [searchParams])

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1)
    }

    const showStepContent = () => {
        switch (activeStep) {
            case 0:
                return stepContent1()
            case 1:
                return stepContent2()
            case 2:
                return stepContent3()
            case 3:
                return stepContent4()
            default:
                return <CContainer className="mt-5">-</CContainer>
        }
    }

    const stepContent4 = () => {
        return <Step4 back={handleBack} next={handleNext} paymentReturnData={paymentReturnData} />
    }

    const stepContent3 = () => {
        return <Step3 back={handleBack} next={handleNext} />
    }

    const stepContent2 = () => {
        return <Step2 back={handleBack} next={handleNext} />
    }

    const stepContent1 = () => {
        return <Step1 next={handleNext} insurances={[]} />
    }

    return (
        <div className="page-body">
            <Header />

            <DesktopView>
                <StepperHorizontal
                    id="desktop-insurance-horizontal-stepper"
                    activeStep={activeStep}
                    steps={steps}
                    showStepContent={showStepContent}
                />
            </DesktopView>

            <TabletView>
                <StepperHorizontal
                    id="desktop-insurance-horizontal-stepper"
                    activeStep={activeStep}
                    steps={steps}
                    showStepContent={showStepContent}
                />
            </TabletView>

            <MobilePortraitView>
                <StepperVertical
                    id="mobile-insurance-vertical-stepper"
                    activeStep={activeStep}
                    steps={steps}
                    showStepContent={showStepContent}
                />
            </MobilePortraitView>

            {/* <Footer /> */}
        </div>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {
    doGetInsurance,
    doGetMeta,
    doGetSalesUserDetail,
    doResetStoreCustomerApplication,
    setInsuranceRateDetails,
}

export default connect(mapStateToProps, mapDispatchToProps)(Insurance)
