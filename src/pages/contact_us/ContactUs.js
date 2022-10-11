import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { CRow, CCol, CCard, CCardBody } from "@coreui/react"
import { CContainer } from "@coreui/react"

import Header from "src/components/header"
import Footer from "src/components/footer/copyright"
import SimpleGoogleMap from "./components/SimpleGoogleMap"

const ContactUs = () => {
    const leftCol = {
        fontSize: "14px",
        fontWeight: "700",
        color: "#000000",
    }

    const rightCol = {
        fontSize: "14px",
        fontWeight: "400",
        color: "#000000",
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <CContainer fluid style={{ paddingLeft: "0", paddingRight: "0" }} className="page-body">
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
                    Contact Us
                </div>

                <div
                    style={{
                        fontSize: "17.6px",
                        fontWeight: "400",
                        color: "#000000",
                        textAlign: "justify",
                    }}
                    className="mb-3"
                >
                    Looking forward to hear from you.
                </div>

                <CContainer className="mb-3" style={{ paddingLeft: "0", paddingRight: "0" }}>
                    <CRow className="mb-1">
                        <CCol xs={4} sm={2} style={leftCol}>
                            Address
                        </CCol>
                        <CCol xs={8} sm={10} style={rightCol}>
                            : F-1-1B, Jalan Prima Saujana 2/C, Taman Prima Saujana, Seksyen 2,
                            43000, KAJANG, Selangor
                        </CCol>
                    </CRow>
                    <CRow className="mb-1">
                        <CCol xs={4} sm={2} style={leftCol}>
                            Contact No.
                        </CCol>
                        <CCol xs={8} sm={10} style={rightCol}>
                            : +603-8730 8733
                        </CCol>
                    </CRow>
                    <CRow className="mb-1">
                        <CCol xs={4} sm={2} style={leftCol}>
                            Email
                        </CCol>
                        <CCol xs={8} sm={10} style={rightCol}>
                            :{" "}
                            <Link
                                to="#"
                                onClick={(e) => {
                                    window.location.href = "mailto:admin@untung1.com"
                                    e.preventDefault()
                                }}
                            >
                                admin@untung1.com
                            </Link>
                        </CCol>
                    </CRow>
                    <CRow className="mb-1">
                        <CCol xs={4} sm={2} style={leftCol}>
                            Office Hour
                        </CCol>
                        <CCol xs={8} sm={10} style={rightCol}>
                            <span>: Mon - Fri (09.00AM to 05.00PM)</span>
                            <br />
                            <span style={{ paddingLeft: "8px" }}>
                                Saturday (09.00AM to 12.30PM)
                            </span>
                        </CCol>
                    </CRow>
                </CContainer>

                <CRow className="mb-5">
                    <CCol xs={12} lg={6}>
                        <SimpleGoogleMap
                            height="500px"
                            width="100%"
                            map={{
                                center: {
                                    lat: 3.00795,
                                    lng: 101.804385,
                                },
                                zoom: 16,
                            }}
                        ></SimpleGoogleMap>
                    </CCol>
                </CRow>
            </CContainer>

            <Footer />
        </CContainer>
    )
}

export default ContactUs
