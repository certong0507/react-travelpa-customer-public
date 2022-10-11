import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom';
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { yupResolver } from "@hookform/resolvers/yup"

import Schema from "src/pages/sign_up/components/schema/Schema"
import InputTableTextControl from "src/components/inputs/InputTableTextControl"
import SignupSuccessDialog from "src/pages/sign_up/components/dialogs/SignupSuccessDialog"
import { doSignup, doResetSignUpState } from "src/action/api_actions"

export const SignUpForm = ({ 
    signupSuccess,
    signupFail,
    signupErrorMessage,
    signupResponse,
    loggedInUser,
    doSignup,
    doResetSignUpState,
}) => {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState(null)
    const { control, handleSubmit, trigger } = useForm({
        defaultValues: {
            fullName: "",
            email: "",
            password: "",
        },
        resolver: yupResolver(Schema),
        mode: "all",
    })
    const [isOpenConfirmationDialog, setIsOpenConfirmationDialog] = useState(false)

    useEffect(() => {
        doResetSignUpState()
    }, [])

    useEffect(() => {
        if (loggedInUser) {
            navigate("/");
        }
    }, [loggedInUser])

    const handleSignUp = async (form) => {
        const isValidForm = await trigger()

        if (isValidForm) {
            doSignup({
                name: form?.fullName,
                email: form?.email,
                password: form?.password,
            })
        }
    }

    useEffect(() => {
        if (signupSuccess) {
            setIsOpenConfirmationDialog(true)
            setErrorMessage(null)
            doResetSignUpState()
        }

        if (signupFail) {
            setErrorMessage(signupErrorMessage)
            doResetSignUpState()
        }
    }, [signupSuccess, signupFail])

    const handleClose = () => {
        setIsOpenConfirmationDialog(!isOpenConfirmationDialog)
        navigate("/login")
    }

    return (
        <>
            <SignupSuccessDialog
                title="SIGN UP SUCCESS"
                buttonLabel="PROCEED TO LOGIN"
                isOpen={isOpenConfirmationDialog}
                handleClose={handleClose}
            >
                <div>We have sent you email to {signupResponse?.email}</div>
                <div>Please click the link in that message to activate your account.</div>
            </SignupSuccessDialog>
            
            <Box>
                <InputTableTextControl control={control} name="fullName" label="Full Name" />

                <InputTableTextControl control={control} name="email" label="Email" />

                <InputTableTextControl control={control} name="password" label="Password" type="password" />

                <div className="d-flex justify-content-start">
                    <Typography variant="subtitle2" color="error">
                        {errorMessage}
                    </Typography>
                </div>

                <Button
                    fullWidth
                    disableElevation
                    variant="contained"
                    className="mt-3"
                    onClick={handleSubmit(handleSignUp)}
                >
                    Sign Up
                </Button>
            </Box>
        </>
        
    )
}

const mapStateToProps = (state) => ({
    signupSuccess: state.core.doSignupSuccess,
    signupFail: state.core.doSignupFail,
    signupErrorMessage: state.core.doSignupErrorMessage,
    signupResponse: state.core.doSignupResponse,
    loggedInUser: state.core.loggedInUser,
})

const mapDispatchToProps = { 
    doSignup,
    doResetSignUpState,
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm)