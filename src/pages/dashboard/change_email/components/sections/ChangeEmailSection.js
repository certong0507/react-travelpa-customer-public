import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { useNavigate } from "react-router-dom"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"

import { NewEmailSchema } from "src/pages/dashboard/change_email/components/schema/Schema"
import InputTableTextControl from "src/components/inputs/InputTableTextControl"
import {
    doSendNewEmailVerificationCode,
    doConfirmNewEmailVerificationCode,
    doGetLoggedInUser,
} from "src/action/api_actions"
import {
    setErrorNewCodeConfirmData,
    setNewCodeConfirmSuccess,
    setNewCodeSentSuccess,
} from "src/action/ui_actions"

export const ChangeEmailSection = ({
    setNewCodeSentSuccess,
    setNewCodeConfirmSuccess,
    setErrorNewCodeConfirmData,
    doSendNewEmailVerificationCode,
    doConfirmNewEmailVerificationCode,
    doGetLoggedInUser,
    loggedInUser,
    newCodeSentSuccess,
    newCodeConfirmSuccess,
    errorNewCodeSentData,
    errorNewCodeConfirmData,
}) => {
    const navigate = useNavigate()
    const { control, handleSubmit, trigger, getValues, setValue, setError, resetField } = useForm({
        resolver: yupResolver(NewEmailSchema),
        mode: "all",
    })

    useEffect(() => {
        // console.log("[newCodeConfirmSuccess]", newCodeConfirmSuccess)
    }, [newCodeConfirmSuccess])

    useEffect(() => {
        if (errorNewCodeSentData) {
            setError("newEmail", { type: "custom", message: errorNewCodeSentData })
        }
    }, [errorNewCodeSentData])

    useEffect(() => {
        if (errorNewCodeConfirmData) {
            setError("confirmationCode", { type: "custom", message: errorNewCodeConfirmData })
        }
    }, [errorNewCodeConfirmData])

    const handleChangeEmail = () => {
        setErrorNewCodeConfirmData(null)
        const newEmail = getValues("newEmail")
        doSendNewEmailVerificationCode({ new_email: newEmail })
    }

    const handleConfirmChangeEmail = () => {
        const newEmail = getValues("newEmail")
        const confirmationCode = getValues("confirmationCode")
        doConfirmNewEmailVerificationCode({ verify_code: confirmationCode, new_email: newEmail })
    }

    const handleContinue = () => {
        setNewCodeSentSuccess(false)
        setNewCodeConfirmSuccess(false)
        doGetLoggedInUser()
        navigate("/dashboard/my-profile")
    }

    return (
        <>
            <Box
                // sx={{ p: 2, border: "1px solid rgb(42, 74, 75)", borderRadius: "4px" }}
                className="mb-5"
            >
                {!newCodeConfirmSuccess && (
                    <>
                        <Typography variant="body2" component="div" className="mb-2">
                            Current Email Address {" : "} {<b>{loggedInUser?.customer?.email}</b>}
                        </Typography>
                        <Grid container columns={{ xs: 1, lg: 12 }}>
                            <Grid item xs={1} lg={3} className="pt-0">
                                <InputTableTextControl
                                    control={control}
                                    name="newEmail"
                                    label="New Email Address"
                                    disabled={newCodeSentSuccess}
                                />
                            </Grid>
                        </Grid>
                    </>
                )}
                {newCodeSentSuccess && !newCodeConfirmSuccess && (
                    <>
                        <Typography variant="caption" component="div" className="mb-2">
                            Enter the code we sent to vour new email address
                        </Typography>
                        <Grid container columns={{ xs: 1, lg: 12 }}>
                            <Grid item xs={1} lg={3} className="pt-0">
                                <InputTableTextControl
                                    control={control}
                                    name="confirmationCode"
                                    label="Confirmation Code"
                                />
                            </Grid>
                        </Grid>
                    </>
                )}

                {!newCodeSentSuccess && (
                    <Button
                        disableElevation
                        variant="contained"
                        onClick={handleSubmit(handleChangeEmail)}
                        className="mt-3"
                    >
                        Change Email
                    </Button>
                )}

                {newCodeSentSuccess && !newCodeConfirmSuccess && (
                    <Button
                        disableElevation
                        variant="contained"
                        onClick={handleConfirmChangeEmail}
                        className="mt-3"
                    >
                        Confirm Change Email
                    </Button>
                )}

                {newCodeConfirmSuccess && (
                    <Box>
                        <Typography variant="subtitle1" component="div">
                            Your email address has been updated
                        </Typography>
                        <Typography variant="caption" component="div" color="text.secondary">
                            Please login with your email address
                        </Typography>
                        <Button
                            disableElevation
                            variant="contained"
                            className="mt-3"
                            onClick={handleContinue}
                        >
                            Continue
                        </Button>
                    </Box>
                )}
            </Box>
        </>
    )
}

const mapStateToProps = (state) => ({
    loggedInUser: state.core.loggedInUser,
    newCodeSentSuccess: state.userProfile.newCodeSentSuccess,
    newCodeConfirmSuccess: state.userProfile.newCodeConfirmSuccess,
    errorNewCodeSentData: state.userProfile.errorNewCodeSentData,
    errorNewCodeConfirmData: state.userProfile.errorNewCodeConfirmData,
})

const mapDispatchToProps = {
    doSendNewEmailVerificationCode,
    setErrorNewCodeConfirmData,
    doConfirmNewEmailVerificationCode,
    doGetLoggedInUser,
    setNewCodeConfirmSuccess,
    setNewCodeSentSuccess,
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangeEmailSection)
