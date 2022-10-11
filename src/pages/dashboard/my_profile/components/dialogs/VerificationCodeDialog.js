import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { useNavigate } from "react-router-dom"
import Box from "@mui/material/Box"
import Dialog from "@mui/material/Dialog"
import DialogTitle from "@mui/material/DialogTitle"
import DialogContent from "@mui/material/DialogContent"
import DialogActions from "@mui/material/DialogActions"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import CircularProgress from "@mui/material/CircularProgress"

import { doSendCurrentEmailVerificationCode } from "src/action/api_actions"
import { setErrorCodeConfirmData, setErrorCodeSentData } from "src/action/ui_actions"

export const VerificationCodeDialog = ({
    doSendCurrentEmailVerificationCode,
    setErrorCodeSentData,
    setErrorCodeConfirmData,
    handleClose,
    isOpen,
    loggedInUser,
    codeSentSuccess,
    errorCodeSentData,
}) => {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setTimeout(() => {
            if (errorCodeSentData) {
                setIsLoading(false)
                setError(errorCodeSentData)
            }
        }, 3000)
    }, [errorCodeSentData])

    useEffect(() => {
        let timer1 = setTimeout(() => {
            if (codeSentSuccess) {
                handleClose()
                navigate("/dashboard/change-email")
            } else {
                setIsLoading(false)
            }
        }, 3000)

        return () => {
            clearTimeout(timer1)
        }
    }, [codeSentSuccess])

    const handleSendCode = () => {
        setErrorCodeSentData(null)
        setErrorCodeConfirmData(null)
        doSendCurrentEmailVerificationCode()
        setIsLoading(true)
    }
    return (
        <Dialog
            disableEscapeKeyDown
            onClose={(event, reason) => {
                if (reason && reason === "backdropClick") return
                handleClose()
            }}
            open={isOpen}
            fullWidth
        >
            <DialogTitle>Email Verification</DialogTitle>

            <DialogContent>
                {isLoading && (
                    <Box className="text-center">
                        <div>
                            <CircularProgress />
                        </div>
                        <Typography
                            variant="body2"
                            component="div"
                            color="text.secondary"
                            className="mt-3"
                        >
                            Sending email...
                        </Typography>
                    </Box>
                )}

                {!isLoading && (
                    <Typography variant="body2" component="div" color="text.secondary">
                        Please verify your email before proceed to change email. Email account
                        verification code to{" "}
                        <Typography variant="subtitle1" component="span">
                            <b>{loggedInUser?.customer?.email}</b>
                        </Typography>
                        .
                    </Typography>
                )}
            </DialogContent>

            {!isLoading && (
                <DialogActions className="justify-content-between m-2">
                    <Typography color="error" variant="caption">
                        {error}
                    </Typography>

                    <Box>
                        <Button
                            disableRipple
                            disableElevation
                            onClick={handleClose}
                            autoFocus
                            variant="outlined"
                            className="mx-2"
                        >
                            Cancel
                        </Button>
                        <Button
                            disableRipple
                            disableElevation
                            onClick={handleSendCode}
                            autoFocus
                            variant="contained"
                        >
                            Send Code
                        </Button>
                    </Box>
                </DialogActions>
            )}
        </Dialog>
    )
}

const mapStateToProps = (state) => ({
    loggedInUser: state.core.loggedInUser,
    codeSentSuccess: state.userProfile.codeSentSuccess,
    errorCodeSentData: state.userProfile.errorCodeSentData,
})

const mapDispatchToProps = {
    doSendCurrentEmailVerificationCode,
    setErrorCodeConfirmData,
    setErrorCodeSentData,
}

export default connect(mapStateToProps, mapDispatchToProps)(VerificationCodeDialog)
