import React from "react"
import { Link } from "react-router-dom"
import { CContainer } from "@coreui/react"
import Header from "src/components/header"
import Footer from "src/components/footer/copyright"
import Box from "@mui/material/Box"

import ListManagementTeam from "src/pages/about_us/components/lists/ListManagementTeam"

const AboutUs = () => {
    const subTitle = {
        fontSize: "20.8px",
        fontWeight: "700",
        color: "#000000",
    }

    const paragraph = {
        fontSize: "14px",
        fontWeight: "400",
        color: "#000000",
        textAlign: "justify",
    }

    const linkStyle = {
        color: "rgb(0, 156, 153)",
        textDecoration: "none",
    }

    return (
        <CContainer fluid className="page-body" style={{ paddingLeft: "0", paddingRight: "0" }}>
            <Header />

            <CContainer>
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
                    About Us
                </div>

                <div style={subTitle} className="mt-2 mb-2">
                    Company Background
                </div>
                <p style={paragraph}>
                    Untung Sewajar Sdn Bhd (USSB) Consultant Companies is the amongst the top
                    Insurance Agency in having serviced the industry for nearly 20 years, with its
                    management team 10 persons to cater Insurance needs in Malaysia.
                </p>
                <p style={paragraph}>
                    USSB offer personalized services with a contingency of professional qualified
                    personnel using up to date IT system for sourcing, claims and underwriting. The
                    company officers are accessible and offers diverse flow of advice on risks and
                    information on claim processing.
                </p>

                <p style={paragraph}>
                    USSB team of 10 professional deal with over 200 clients, making us leaders in
                    the industry unparalleled experience. Our company motto &quot;Understanding
                    &amp; Customizing Risk&quot; reflects our commitment to our clients of
                    professionalism in the Risk Management.
                </p>
                
                <div style={subTitle} className="mt-5 mb-2">
                    Company Growth
                </div>
                <p style={paragraph}>
                    The USSB offers its services to the whole Malaysia market after its growing
                    success within Kuala Lumpur &quot; Selangor market. With the existing synergy,
                    we now place covers in Peninsular Malaysia &quot; Sabah Sarawak.
                </p>
                <p style={paragraph}>
                    From our humble beginnings in the early 1999 with only RM 100,000.00 in premium
                    bookings, today we handle over million shillings in premium bookings. We have
                    been growing annually at between 15-20% per annum.
                </p>

                <div style={subTitle} className="mt-5 mb-2">
                    Products Offered
                </div>
                <p style={paragraph}>
                    USSB have always searched for an adequate solution (for even unusual risks) to
                    ensure that our clients&#39; are satisfied and feel secure. For example, with
                    the rapid growth of the mobile equipment Industry in Malaysia, there was need to
                    provide a comprehensive insurance cover to cater for risks associated with their
                    loss, damage or theft and also third party liability &quot; it&#39;s earning
                    loss due to accidental causes. USSB developed a novel product— with exclusive
                    right on Equipment All Risk with Public Liability &quot; Public Road Extension
                    program to meet nationwide stakeholders in the country. As a result, more than
                    5000 units of equipment currently covered under this scheme.
                </p>

                <Box className="mb-5">
                    <div style={subTitle} className="mt-5 mb-2">
                        Management Team
                    </div>
                    <ListManagementTeam />
                </Box>
                
                <p style={paragraph} className="mb-5">
                    Read about{" "}
                    <Link style={linkStyle} to="/term-and-condition">
                        <span>Term of Services</span>
                    </Link>{" "}
                    and{" "}
                    <Link style={linkStyle} to="/privacy-policy">
                        <span>Privacy Notice</span>
                    </Link>
                    .
                </p>
            </CContainer>

            <Footer />
        </CContainer>
    )
}

export default AboutUs
