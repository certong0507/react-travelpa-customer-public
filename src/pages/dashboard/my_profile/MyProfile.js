import React, { useState, useEffect } from "react"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Alert from "@mui/material/Alert"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { connect } from "react-redux"
import { useNavigate } from "react-router-dom"
import { VscError } from "react-icons/vsc"
import { BiCheckCircle } from "react-icons/bi"

import InputTableTextControl from "src/components/inputs/InputTableTextControl"
import Schema from "src/pages/dashboard/my_profile/components/schema/Schema"
import ConfirmationDialog from "src/pages/dashboard/my_profile/components/dialogs/ConfirmationDialog"
import VerificationCodeDialog from "src/pages/dashboard/my_profile/components/dialogs/VerificationCodeDialog"
import {
    doUpdateUserProfile,
    doResetUserProfile,
    doGetLoggedInUser,
    doResendVerificationEmail,
} from "src/action/api_actions"
import {
    setCodeSentSuccess,
    setErrorCodeSentData,
    setResendVerificationEmail,
} from "src/action/ui_actions"

export const MyProfile = ({
    loggedInUser,
    success,
    fail,
    errorDetailData,
    errorresendVerificationEmail,
    doUpdateUserProfile,
    doResetUserProfile,
    doGetLoggedInUser,
    doResendVerificationEmail,
    setResendVerificationEmail,
    setCodeSentSuccess,
    setErrorCodeSentData,
    resendVerificationEmailSuccess,
    resendVerificationEmailFail,
}) => {
    const navigate = useNavigate()
    const { control, handleSubmit, trigger } = useForm({
        defaultValues: {
            name: loggedInUser?.customer?.name || "",
            phone_number: loggedInUser?.customer?.phone_number || "",
            address: loggedInUser?.customer?.address || "",
        },
        resolver: yupResolver(Schema),
        mode: "all",
    })
    const [isOpenResendVerificationEmailDialog, setIsOpenResendVerificationEmailnDialog] =
        useState(false)
    const [isOpenConfirmationDialog, setIsOpenConfirmationDialog] = useState(false)
    const [isOpenChangeEmailDialog, setIsOpenChangeEmailDialog] = useState(false)
    const [errorResponse, setErrorResponse] = useState(null)

    useEffect(() => {
        doResetUserProfile()
        setCodeSentSuccess(false)
        doGetLoggedInUser()
        setResendVerificationEmail(false)
        setIsOpenResendVerificationEmailnDialog(false)
    }, [])

    useEffect(() => {
        if (success) {
            doGetLoggedInUser()
            doResetUserProfile()
            setIsOpenConfirmationDialog(true)
        }

        if (fail) {
            setErrorResponse(errorDetailData)
        }
    }, [success, fail])

    useEffect(() => {
        if (!errorDetailData) {
            setErrorResponse(null)
        }
    }, [errorDetailData])

    useEffect(() => {
        if (resendVerificationEmailSuccess) {
            setIsOpenResendVerificationEmailnDialog(true)
        }

        if (resendVerificationEmailFail) {
            setIsOpenResendVerificationEmailnDialog(true)
        }
    }, [resendVerificationEmailSuccess, resendVerificationEmailFail])

    const handleSave = async (form) => {
        const isValidForm = await trigger()

        if (isValidForm) {
            doUpdateUserProfile({
                name: form.name,
                phone_number: form.phone_number,
                address: form.address,
            })
        }
    }

    const handleOnclickResendVerificationEmail = () => {
        doResendVerificationEmail()
    }

    return (
        <>
            {resendVerificationEmailSuccess && (
                <ConfirmationDialog
                    title="Resend Verification Email"
                    buttonLabel="OK"
                    isOpen={isOpenResendVerificationEmailDialog}
                    handleClose={() => {
                        setResendVerificationEmail(false)
                        setIsOpenResendVerificationEmailnDialog(
                            !isOpenResendVerificationEmailDialog,
                        )
                    }}
                >
                    <Box>
                        <Box className="d-flex justify-content-center mb-3">
                            <BiCheckCircle color="#4caf50" size="5rem" />
                        </Box>
                        <Typography variant="body2" className="text-center">
                            Please check your inbox/junk mail for the verification email.
                        </Typography>
                    </Box>
                </ConfirmationDialog>
            )}

            {resendVerificationEmailFail && (
                <ConfirmationDialog
                    title="Resend Verification Email"
                    buttonLabel="OK"
                    isOpen={isOpenResendVerificationEmailDialog}
                    handleClose={() => {
                        setResendVerificationEmail(false)
                        setIsOpenResendVerificationEmailnDialog(
                            !isOpenResendVerificationEmailDialog,
                        )
                    }}
                >
                    <Box>
                        <Box className="d-flex justify-content-center mb-3">
                            <VscError color="#ef5350" size="5rem" />
                        </Box>
                        <Typography variant="body2" className="text-center">
                            {errorresendVerificationEmail}
                        </Typography>
                    </Box>
                </ConfirmationDialog>
            )}

            {isOpenConfirmationDialog && (
                <ConfirmationDialog
                    title="Profile Updated."
                    buttonLabel="OK"
                    isOpen={isOpenConfirmationDialog}
                    handleClose={() => setIsOpenConfirmationDialog(!isOpenConfirmationDialog)}
                ></ConfirmationDialog>
            )}

            {isOpenChangeEmailDialog && (
                <VerificationCodeDialog
                    isOpen={isOpenChangeEmailDialog}
                    handleClose={() => setIsOpenChangeEmailDialog(!isOpenChangeEmailDialog)}
                ></VerificationCodeDialog>
            )}

            <Box>
                <Card variant="outlined">
                    <CardContent>
                        {!loggedInUser?.customer?.is_verify && (
                            <Alert severity="warning" className="mb-3 d-flex justify-content-start">
                                <Typography variant="caption">Please verify your email.</Typography>

                                <Button
                                    disableElevation
                                    disableFocusRipple
                                    color="warning"
                                    size="small"
                                    variant="text"
                                    onClick={handleOnclickResendVerificationEmail}
                                >
                                    <Typography variant="caption">
                                        Resend Verification Email
                                    </Typography>
                                </Button>
                            </Alert>
                        )}

                        <Box className="d-flex justify-content-between mb-3">
                            <Typography variant="h6">My Profile</Typography>
                        </Box>

                        <Grid container columns={{ xs: 1, lg: 12 }}>
                            <Grid item xs={1} lg={12} className="pt-0">
                                <Grid container columns={{ xs: 1, sm: 1, md: 12, lg: 12 }}>
                                    <Grid item xs={1} sm={1} md={1.5} lg={1.5} className="pt-0">
                                        <Typography variant="caption" color="text.secondary">
                                            Full Name
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={1} sm={1} md={4.5} lg={4.5} className="pt-0">
                                        <InputTableTextControl
                                            control={control}
                                            name="name"
                                            label=""
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={1} lg={12} className="pt-0">
                                <Grid container columns={{ xs: 1, sm: 1, md: 12, lg: 12 }}>
                                    <Grid item xs={1} sm={1} md={1.5} lg={1.5} className="pt-0">
                                        <Typography variant="caption" color="text.secondary">
                                            Phone Number
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={1} sm={1} md={4.5} lg={4.5} className="pt-0">
                                        <InputTableTextControl
                                            control={control}
                                            name="phone_number"
                                            label=""
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={1} lg={12} className="pt-0">
                                <Grid container columns={{ xs: 1, sm: 1, md: 12, lg: 12 }}>
                                    <Grid item xs={1} sm={1} md={1.5} lg={1.5} className="pt-0">
                                        <Typography variant="caption" color="text.secondary">
                                            Address
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={1} sm={1} md={4.5} lg={4.5} className="pt-0">
                                        <InputTableTextControl
                                            control={control}
                                            name="address"
                                            label=""
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={1} lg={12} className="pt-0 mb-3">
                                <Grid container columns={{ xs: 1, sm: 1, md: 12, lg: 12 }}>
                                    <Grid item xs={1} sm={1} md={1.5} lg={1.5} className="pt-0">
                                        <Typography variant="caption" color="text.secondary">
                                            Email
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={1} sm={1} md={4.5} lg={4.5} className="pt-0">
                                        <div className="d-flex justify-content-start">
                                            <Typography
                                                variant="body2"
                                                style={{ paddingRight: "0px" }}
                                            >
                                                {loggedInUser?.customer?.email}
                                            </Typography>
                                            <Button
                                                disableRipple
                                                style={{
                                                    textDecoration: "underline",
                                                    padding: "0px 0px",
                                                }}
                                                onClick={() => {
                                                    setErrorCodeSentData(null)
                                                    setIsOpenChangeEmailDialog(true)
                                                }}
                                                variant="text"
                                                size="small"
                                            >
                                                Change
                                            </Button>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={1} lg={12} className="pt-0">
                                <Grid container columns={{ xs: 1, sm: 1, md: 12, lg: 12 }}>
                                    <Grid item xs={1} sm={1} md={1.5} lg={1.5} className="pt-0">
                                        <Typography variant="caption" color="text.secondary">
                                            Password
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={1} sm={1} md={4.5} lg={4.5} className="pt-0">
                                        <div className="d-flex justify-content-start">
                                            <Typography
                                                variant="body2"
                                                style={{ paddingRight: "0px" }}
                                            >
                                                {"********"}
                                            </Typography>
                                            <Button
                                                disableRipple
                                                style={{
                                                    textDecoration: "underline",
                                                    padding: "0px 0px",
                                                }}
                                                onClick={() => {
                                                    navigate("/dashboard/change-password")
                                                }}
                                                variant="text"
                                                size="small"
                                            >
                                                Change
                                            </Button>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Box className="d-flex justify-content-between">
                            <Typography
                                variant="subtitle2"
                                color="error"
                                component="div"
                                className="my-auto"
                            >
                                {errorResponse?.errorMessage}
                            </Typography>
                            <Button
                                disableElevation
                                variant="contained"
                                onClick={handleSubmit(handleSave)}
                            >
                                Save
                            </Button>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </>
    )
}

const mapStateToProps = (state) => ({
    loggedInUser: state.core.loggedInUser,
    success: state.userProfile.success,
    fail: state.userProfile.fail,
    errorDetailData: state.userProfile.errorDetailData,
    resendVerificationEmailSuccess: state.userProfile.resendVerificationEmailSuccess,
    resendVerificationEmailFail: state.userProfile.resendVerificationEmailFail,
    errorresendVerificationEmail: state.userProfile.errorresendVerificationEmail,
})

const mapDispatchToProps = {
    doUpdateUserProfile,
    doResetUserProfile,
    doGetLoggedInUser,
    doResendVerificationEmail,
    setCodeSentSuccess,
    setErrorCodeSentData,
    setResendVerificationEmail,
}

export default connect(mapStateToProps, mapDispatchToProps)(MyProfile)
