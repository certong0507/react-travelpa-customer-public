import React, { useEffect } from "react"
import { connect } from "react-redux"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import { useNavigate } from "react-router-dom"

import Header from "src/components/header"
import Footer from "src/components/footer/copyright"
import { resetForgotPasswordState } from "src/action/api_actions"

const ResetPasswordFail = ({ resetForgotPasswordState }) => {
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
                        <div className="d-flex justify-content-center">
                            <Typography variant="h6" className="mb-4">
                                Fail to Reset Password
                            </Typography>
                        </div>

                        <p className="text-medium-emphasis" style={{ fontSize: "14px" }}>
                            Unable to reset you password at the momoent. Please try again later.
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

export default connect(mapStateToProps, mapDispatchToProps)(ResetPasswordFail)
