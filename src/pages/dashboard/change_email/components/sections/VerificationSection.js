import React, { useEffect } from "react"
import { connect } from "react-redux"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { useNavigate } from "react-router-dom"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

import { VerificationCodeSchema } from "src/pages/dashboard/change_email/components/schema/Schema"
import InputTableTextControl from "src/components/inputs/InputTableTextControl"
import {
    doSendCurrentEmailVerificationCode,
    doConfirmCurrentEmailVerificationCode,
} from "src/action/api_actions"
import { setErrorCodeConfirmData, setCodeConfirmSuccess } from "src/action/ui_actions"

export const VerificationSection = ({
    setCodeConfirmSuccess,
    setErrorCodeConfirmData,
    doConfirmCurrentEmailVerificationCode,
    doSendCurrentEmailVerificationCode,
    setIsVerifiedEmail,
    loggedInUser,
    errorCodeConfirmData,
    codeConfirmSuccess,
}) => {
    const navigate = useNavigate()
    const { control, handleSubmit, trigger, getValues, setValue, setError, reset } = useForm({
        defaultValues: {
            verifyCode: "",
        },
        resolver: yupResolver(VerificationCodeSchema),
        mode: "all",
    })

    useEffect(() => {
        reset()
    }, [])

    useEffect(() => {
        if (codeConfirmSuccess) {
            setIsVerifiedEmail(true)
        }
    }, [codeConfirmSuccess])

    useEffect(() => {
        if (errorCodeConfirmData) {
            setError("verifyCode", { type: "custom", message: errorCodeConfirmData })
        }
    }, [errorCodeConfirmData])

    const handleReSend = () => {
        doSendCurrentEmailVerificationCode()
    }

    const handleContinue = () => {
        setErrorCodeConfirmData(null)
        setCodeConfirmSuccess(null)
        const verifyCode = getValues("verifyCode")
        doConfirmCurrentEmailVerificationCode({ verify_code: verifyCode })
    }

    const handleCancel = () => {
        navigate("/dashboard/my-profile")
    }

    return (
        <>
            <Box
                sx={{ p: 2, border: "1px solid rgb(42, 74, 75)", borderRadius: "4px" }}
                className="mb-5"
            >
                <Typography
                    variant="subtitle1"
                    component="div"
                    color="text.secondary"
                    className="mb-2"
                >
                    A verification code was sent to{" "}
                    <Typography variant="body1" component="span">
                        <b>{loggedInUser?.customer?.email}</b>
                    </Typography>
                </Typography>

                <Typography
                    variant="caption"
                    color="text.secondary"
                    component="div"
                    className="mb-2 lh-sm"
                >
                    Enter the account verification code you received. (It could take up to 5 minutes
                    for an account verification code to be delivered.)
                </Typography>

                <Grid container columns={{ xs: 1, lg: 12 }}>
                    <Grid item xs={1} lg={3} className="pt-0 mb-3">
                        <InputTableTextControl
                            control={control}
                            name="verifyCode"
                            label="Verification Code"
                        />
                    </Grid>
                </Grid>

                <Button disableElevation variant="contained" onClick={handleSubmit(handleContinue)}>
                    Continue
                </Button>
            </Box>

            <Typography variant="subtitle2" className="mb-2">
                Having trouble receiving an account verification code?
            </Typography>

            <Box className="d-flex justify-content-between">
                <Button disableElevation variant="contained" onClick={handleReSend}>
                    Resend account verification code
                </Button>

                <Button disableElevation variant="outlined" onClick={handleCancel}>
                    Cancel
                </Button>
            </Box>
        </>
    )
}

const mapStateToProps = (state) => ({
    loggedInUser: state.core.loggedInUser,
    errorCodeConfirmData: state.userProfile.errorCodeConfirmData,
    codeConfirmSuccess: state.userProfile.codeConfirmSuccess,
})

const mapDispatchToProps = {
    doConfirmCurrentEmailVerificationCode,
    doSendCurrentEmailVerificationCode,
    setErrorCodeConfirmData,
    setCodeConfirmSuccess,
}

export default connect(mapStateToProps, mapDispatchToProps)(VerificationSection)
