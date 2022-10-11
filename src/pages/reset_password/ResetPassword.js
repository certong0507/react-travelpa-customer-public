import React, { useEffect } from "react"
import { connect } from "react-redux"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { useSearchParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"

import Header from "src/components/header"
import Footer from "src/components/footer/copyright"
import Schema from "src/pages/reset_password/components/schema/Schema"
import InputTableTextControl from "src/components/inputs/InputTableTextControl"
import { doResetPassword, resetForgotPasswordState } from "src/action/api_actions"

const ResetPassword = ({
    doResetPassword,
    resetForgotPasswordState,
    success,
    fail,
    errorDetailData,
}) => {
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()
    const { control, handleSubmit, getValues } = useForm({
        defaultValues: {
            password: "",
            confirmPassword: "",
        },
        resolver: yupResolver(Schema),
        mode: "all",
    })

    useEffect(() => {
        resetForgotPasswordState()
    }, [])

    useEffect(() => {
        if (success) {
            navigate("/reset-password-success")
        }
    }, [success])

    useEffect(() => {
        if (fail) {
            navigate("/reset-password-fail")
        }
    }, [fail])

    const handleReset = () => {
        const password = getValues("confirmPassword")
        const token = searchParams.get("t")

        doResetPassword({ password, token })
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
                        <div className="d-flex justify-content-center">
                            <Typography variant="h6" className="mb-4">
                                Reset Password
                            </Typography>
                        </div>

                        <div className="text-center">
                            <InputTableTextControl
                                control={control}
                                name="password"
                                label="New Password"
                                type="password"
                            />

                            <InputTableTextControl
                                control={control}
                                name="confirmPassword"
                                label="Confirm Password"
                                type="password"
                            />

                            <Button
                                disableElevation
                                variant="contained"
                                className="mt-3 "
                                onClick={handleSubmit(handleReset)}
                            >
                                Confirm
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
    fail: state.forgotPassword.fail,
    errorDetailData: state.forgotPassword.errorDetailData,
})

const mapDispatchToProps = {
    doResetPassword,
    resetForgotPasswordState,
}

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword)
