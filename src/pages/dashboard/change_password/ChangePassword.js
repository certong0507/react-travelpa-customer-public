import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { useNavigate } from "react-router-dom"

import Schema from "src/pages/dashboard/change_password/components/schema/Schema"
import InputTableTextControl from "src/components/inputs/InputTableTextControl"
import ConfirmationDialog from "src/pages/dashboard/change_password/components/dialogs/ConfirmationDialog"
import { doChangePassword, doResetChangePassword } from "src/action/api_actions"

export const ChangePassword = ({
    success,
    fail,
    errorDetailData,
    doChangePassword,
    doResetChangePassword,
}) => {
    const navigate = useNavigate()
    const { control, handleSubmit, trigger } = useForm({
        resolver: yupResolver(Schema),
        mode: "all",
    })
    const [isOpenConfirmationDialog, setIsOpenConfirmationDialog] = useState(false)
    const [errorResponse, setErrorResponse] = useState(null)

    useEffect(() => {
        doResetChangePassword()
        setErrorResponse(null)
    }, [])

    const handleConfirm = async (form) => {
        const isValidForm = await trigger()

        if (isValidForm) {
            doChangePassword({
                current_password: form.current_password,
                password: form.password,
            })
        }
    }

    useEffect(() => {
        if (success) {
            doResetChangePassword()
            setIsOpenConfirmationDialog(true)
        }

        if (fail) {
            setErrorResponse(errorDetailData)
        }
    }, [success, fail])

    const handleClose = () => {
        setIsOpenConfirmationDialog(!isOpenConfirmationDialog)
        navigate("/dashboard/my-profile")
    }
    
    return (
        <>
            <ConfirmationDialog
                title="Password Updated."
                buttonLabel="OK"
                isOpen={isOpenConfirmationDialog}
                handleClose={handleClose}
            ></ConfirmationDialog>

            <Box>
                <Card variant="outlined">
                    <CardContent>
                        <Box className="d-flex justify-content-between">
                            <Typography variant="h6">Change Password</Typography>
                        </Box>
                        <p className="text-medium-emphasis" style={{ fontSize: "14px" }}>
                            {
                                "For your account's security, do not share your password with anyone else"
                            }
                        </p>
                        <Grid container columns={{ xs: 1, lg: 12 }}>
                            <Grid item xs={1} lg={12} className="pt-0">
                                <Grid container columns={{ xs: 1, sm: 1, md: 12, lg: 12 }}>
                                    <Grid item xs={1} sm={1} md={1.5} lg={1.5}>
                                        <Typography variant="caption" color="text.secondary">
                                            Current Password
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={1} sm={1} md={4.5} lg={4.5}>
                                        <InputTableTextControl
                                            control={control}
                                            name="current_password"
                                            label=""
                                            type="password"
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={1} lg={12} className="pt-0">
                                <Grid container columns={{ xs: 1, sm: 1, md: 12, lg: 12 }}>
                                    <Grid item xs={1} sm={1} md={1.5} lg={1.5}>
                                        <Typography variant="caption" color="text.secondary">
                                            New Password
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={1} sm={1} md={4.5} lg={4.5}>
                                        <InputTableTextControl
                                            control={control}
                                            name="password"
                                            label=""
                                            type="password"
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={1} lg={12} className="pt-0">
                                <Grid container columns={{ xs: 1, sm: 1, md: 12, lg: 12 }}>
                                    <Grid item xs={1} sm={1} md={1.5} lg={1.5}>
                                        <Typography variant="caption" color="text.secondary">
                                            Confirm Password
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={1} sm={1} md={4.5} lg={4.5}>
                                        <InputTableTextControl
                                            control={control}
                                            name="confirm_password"
                                            label=""
                                            type="password"
                                        />
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
                                onClick={handleSubmit(handleConfirm)}
                            >
                                Confirm
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
})

const mapDispatchToProps = {
    doChangePassword,
    doResetChangePassword,
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword)
