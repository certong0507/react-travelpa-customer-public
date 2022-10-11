import React, { useEffect } from "react"
import { connect } from "react-redux"
import { useMediaQuery } from "react-responsive"

import SectionPayment from "src/pages/insurance/components/step4/sections/SectionPayment"
import SectionPaymentReturn from "src/pages/insurance/components/step4/sections/SectionPaymentReturn"

export const Step4 = ({ back, paymentReturnData }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    const isSurfacePro7 = useMediaQuery({ width: 912 })

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const showContent = () => {
        if (paymentReturnData) {
            return <SectionPaymentReturn paymentReturnData={paymentReturnData} />
        } else {
            return <SectionPayment back={back} />
        }
    }
    return (
        <div className={isDesktop || isSurfacePro7 ? "mt-5" : ""}>
            <div style={{ paddingTop: "25px" }}>{showContent()}</div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    storeCustomerApplicationResponse: state.insurance.storeCustomerApplicationResponse,
    insuranceDetailsForm: state.insurance.insuranceDetailsForm,
    selectedInsurance: state.insurance.selectedInsurance,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Step4)
