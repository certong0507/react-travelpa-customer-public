import React from "react"
import { CContainer } from "@coreui/react"
import Header from "src/components/header"
import Footer from "src/components/footer/copyright"

const PrivacyPolicy = () => {
    const paragraph = {
        fontSize: "14px",
        fontWeight: "400",
        color: "#000000",
        textAlign: "justify",
    }

    return (
        <CContainer fluid className="page-body" style={{ paddingLeft: "0", paddingRight: "0" }}>
            <Header />

            <CContainer className="mb-5">
                <div
                    style={{
                        color: "rgb(0, 156, 153)",
                        letterSpacing: "0.1em",
                        fontStyle: "normal",
                        fontWeight: "700",
                        fontSize: "32px",
                        marginTop: "1rem",
                        marginBottom: "1rem",
                    }}
                    className="text-center mb-5"
                >
                    Privacy Policy
                </div>
                <p style={paragraph}>
                    The personal data you have provided in the form (&quot;Personal Data&quot;) will
                    be processed for purposes of providing you the Inquiry services and other
                    related purposes (collectively, &quot;Purpose&quot;). We also wishes to inform
                    you that your Personal Data may be disclosed to third parties, such as insurance
                    service providers, insurance intermediaries or insurance agents for reasons
                    relating to the Purpose. You may request for access to or correction of your
                    Personal Data or limit the processing thereof at any time hereafter by
                    submitting such request to us via email to noreply@365grp.com. Any inquiries or
                    complaints with respect to your Personal Data should also be channeled to us in
                    this manner. Please note that it will be necessary for us to process your
                    Personal Data for the Purpose, without which we will not be able to provide you
                    and you will not be able to use our services.
                </p>
            </CContainer>

            <Footer />
        </CContainer>
    )
}

export default PrivacyPolicy
