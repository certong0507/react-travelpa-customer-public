import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { IoIosArrowRoundBack } from "react-icons/io"

import Header from "src/components/header"
import Footer from "src/components/footer/copyright"
import { resetForgotPasswordState } from "src/action/api_actions"

const ForgotPasswordSent = ({ resetForgotPasswordState }) => {
    const navigate = useNavigate()

    useEffect(() => {
        resetForgotPasswordState()
    }, [])

    const handleBack = () => {
        navigate("/login")
    }

    return (
        <>
            <Header />

            <Box
                className="d-flex"
                sx={{
                    height: "90vh",
                    backgroundColor: "rgb(237, 247, 237)",
                    p: 5,
                }}
            >
                <Card variant="outlined" className="m-auto p-2" sx={{ minWidth: "30%" }}>
                    <CardContent>
                        <div className="d-flex justify-content-between">
                            <Link
                                to="/login"
                                style={{
                                    color: "#009c99",
                                    textDecoration: "none",
                                    cursor: "pointer",
                                }}
                            >
                                <IoIosArrowRoundBack size="2.5rem" color="#009c99" />
                            </Link>

                            <Typography variant="h6" className="mb-4" sx={{ marginLeft: "-10%" }}>
                                Email Sent!
                            </Typography>

                            <div></div>
                        </div>

                        <p className="text-medium-emphasis" style={{ fontSize: "14px" }}>
                            You will be able to reset your password using the link in the email.
                        </p>

                        <div className="text-center">
                            <Button
                                disableElevation
                                variant="contained"
                                className="mt-3 "
                                onClick={handleBack}
                            >
                                Back to Log In
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </Box>

            <Footer />
        </>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {
    resetForgotPasswordState,
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordSent)
