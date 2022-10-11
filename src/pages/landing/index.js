import React, { useEffect } from "react"
import { connect } from "react-redux"

import Banner from "./Banner"
import Section1 from "./Section1"
import Section2 from "./Section2"
import Section3 from "./Section3"
import Section4 from "./Section4"
import Header from "src/components/header"
import Footer from "src/components/footer/copyright"
import { doGetInsurance, doResetSalesState } from "src/action/api_actions"
import { setInsuranceDetails } from "src/action/ui_actions"

export const Landing = ({ doGetInsurance, setInsuranceDetails, doResetSalesState }) => {
    useEffect(() => {
        window.scrollTo(0, 0)
        
        doGetInsurance()
        setInsuranceDetails(null)
        doResetSalesState()
    }, [])

    return (
        <div>
            <Header />
            <Banner />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Footer />
        </div>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = { doGetInsurance, setInsuranceDetails, doResetSalesState }

export default connect(mapStateToProps, mapDispatchToProps)(Landing)
