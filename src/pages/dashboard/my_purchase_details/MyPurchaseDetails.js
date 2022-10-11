import React, { useEffect, useState } from "react"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import { useParams } from "react-router-dom"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { FiDownload } from "react-icons/fi"

import { doDownloadQuotation, doGetMyPurchaseDetails } from "src/action/api_actions"
import PersonalInformationSection from "src/pages/dashboard/my_purchase_details/components/sections/PersonalInformationSection"
import TraverDetailsSection from "src/pages/dashboard/my_purchase_details/components/sections/TraverDetailsSection"
import InsuredAccordion from "src/pages/dashboard/my_purchase_details/components/accordions/InsuredAccordion"

export const MyPurchaseDetails = ({
    doDownloadQuotation,
    doGetMyPurchaseDetails,
    myPurchaseDetails,
    qoutationPDF,
}) => {
    const { id } = useParams()

    useEffect(() => {
        window.scrollTo(0, 0)
        doGetMyPurchaseDetails(id)
    }, [])

    useEffect(() => {
        // console.log("[myPurchaseDetails]", myPurchaseDetails)
    }, [myPurchaseDetails])

    useEffect(() => {
        if (myPurchaseDetails && qoutationPDF) {
            const linkSource = qoutationPDF
            const downloadLink = document.createElement("a")
            const fileName = `${myPurchaseDetails?.reference_number}_Quotation`
            downloadLink.href = linkSource
            downloadLink.download = fileName
            downloadLink.click()
        }
    }, [qoutationPDF])

    const handleDownloadQuotation = () => {
        doDownloadQuotation(myPurchaseDetails?.id)
    }

    return (
        <Box>
            <Card variant="outlined">
                <CardContent>
                    <Box className="d-flex justify-content-between mb-3">
                        <Link to={`/dashboard/my-purchase`} className="text-decoration-none">
                            <Button variant="outlined" size="small">
                                Back
                            </Button>
                        </Link>

                        <Box>
                            {myPurchaseDetails?.policy_pdf_url && (
                                <a
                                    download
                                    href={myPurchaseDetails?.policy_pdf_url}
                                    target="_"
                                    className="mx-2"
                                >
                                    <Button
                                        size="small"
                                        variant="text"
                                        className="text-decoration-underline"
                                    >
                                        Download Policy
                                    </Button>
                                </a>
                            )}
                            <Button
                                disableElevation
                                size="small"
                                variant="contained"
                                onClick={handleDownloadQuotation}
                            >
                                <FiDownload className="mx-1" size="1.05rem" /> Quotation
                            </Button>
                        </Box>
                    </Box>

                    <Typography variant="h6" color="#2a4a4b" component="div" className="mx-2">
                        <b>{myPurchaseDetails?.package_name} </b> -{" "}
                        {myPurchaseDetails?.reference_number}
                    </Typography>

                    <PersonalInformationSection />

                    <TraverDetailsSection />

                    {myPurchaseDetails?.insured_list?.map((item, index) => (
                        <InsuredAccordion key={item.id} item={item} index={index} />
                    ))}
                </CardContent>
            </Card>
        </Box>
    )
}

const mapStateToProps = (state) => ({
    myPurchaseDetails: state.myPurchase.myPurchaseDetails,
    qoutationPDF: state.myPurchase.qoutationPDF,
})

const mapDispatchToProps = { doDownloadQuotation, doGetMyPurchaseDetails }

export default connect(mapStateToProps, mapDispatchToProps)(MyPurchaseDetails)
