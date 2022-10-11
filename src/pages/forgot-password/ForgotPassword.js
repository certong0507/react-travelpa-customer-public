import React, { useEffect } from "react"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import { connect } from "react-redux"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { IoIosArrowRoundBack } from "react-icons/io"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

import Header from "src/components/header"
import Footer from "src/components/footer/copyright"
import Schema from "src/pages/forgot-password/components/schema/Schema"
import InputTableTextControl from "src/components/inputs/InputTableTextControl"
import { doForgotPassword, resetForgotPasswordState } from "src/action/api_actions"

export const ForgotPassword = ({
    resetForgotPasswordState,
    doForgotPassword,
    success,
    fail,
}) => {
    const navigate = useNavigate()
    const { control, getValues, trigger } = useForm({
        defaultValues: {
            email: "",
        },
        resolver: yupResolver(Schema),
        mode: "all",
    })

    useEffect(() => {
        resetForgotPasswordState()
    }, [])

    const handleReset = async () => {
        if (success) {
            resetForgotPasswordState()
            navigate("/")
        } else {
            const valid = await trigger()

            if (valid) {
                const email = getValues("email")
                doForgotPassword({ email })
            }
        }
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
                <Card variant="outlined" className="m-auto p-2" sx={{ minWidth: "40%" }}>
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
                                Forgot Password
                            </Typography>

                            <div></div>
                        </div>

                        <p className="text-medium-emphasis" style={{ fontSize: "14px" }}>
                            Please key in your registered email. <br />
                            You will be able to reset your password using the link in the email.
                        </p>

                        <div className="text-center">
                            <InputTableTextControl control={control} name="email" label="Email" />

                            {success && (
                                <Box>
                                    <Typography variant="caption" color="#1E4620">
                                        If the user is registered, a link to reset the password will
                                        be sent to the user&apos;s email address
                                    </Typography>
                                </Box>
                            )}

                            {fail && (
                                <Box>
                                    <Typography variant="caption" color="#5F2120">
                                        Uable to reset password at the moment, please try again
                                        later.
                                    </Typography>
                                </Box>
                            )}

                            <Button
                                disableElevation
                                variant="contained"
                                className="mt-3 "
                                onClick={handleReset}
                            >
                                {success ? "Back" : "Next"}
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </Box>

            <Footer />
        </>
    )
}

const mapStateToProps = (state) => ({
    success: state.forgotPassword.success,
    fail: state.userProfile.fail,
})

const mapDispatchToProps = { resetForgotPasswordState, doForgotPassword }

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword)
