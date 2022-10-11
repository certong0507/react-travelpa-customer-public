import React from "react"
import { CContainer } from "@coreui/react"

import Header from "src/components/header"
import Footer from "src/components/footer/copyright"
import SectionBanner from "src/pages/travel_packages/malcentral/components/sections/SectionBanner"
import SectionBody from "src/pages/travel_packages/malcentral/components/sections/SectionBody"

export default function MalCentral() {
    return (
        <CContainer fluid style={{ paddingLeft: "0", paddingRight: "0" }} className="page-body">
            <Header />

            <SectionBanner />

            <CContainer id="page-malcentral" className="mt-5 mb-5">
                <SectionBody />
            </CContainer>

            <Footer />
        </CContainer>
    )
}
