import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { yupResolver } from "@hookform/resolvers/yup"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"

import Schema from "src/pages/login/components/schema/Schema"
import InputTableTextControl from "src/components/inputs/InputTableTextControl"
import { doLogin, doResetLoginState, doGetLoggedInUser } from "src/action/api_actions"

const LoginForm = ({
    loginSuccess,
    loginFail,
    loginErrorMessage,
    loggedInUser,
    doLogin,
    doResetLoginState,
    doGetLoggedInUser,
}) => {
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState(null)
    const { control, handleSubmit, trigger } = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
        resolver: yupResolver(Schema),
        mode: "all",
    })

    useEffect(() => {
        doResetLoginState()
    }, [])

    useEffect(() => {
        if (loggedInUser) {
            navigate("/")
        }
    }, [loggedInUser])

    const handleLogin = async (form) => {
        const isValidForm = await trigger()

        if (isValidForm) {
            doLogin({
                name: form?.fullName,
                email: form?.email,
                password: form?.password,
            })
        }
    }

    useEffect(() => {
        if (loginSuccess) {
            // console.log("google login success")
            setErrorMessage(null)
            doResetLoginState()
            doGetLoggedInUser()
        }

        if (loginFail) {
            // console.log("google login fail")
            setErrorMessage(loginErrorMessage)
            doResetLoginState()
        }
    }, [loginSuccess, loginFail])

    return (
        <Box>
            <InputTableTextControl control={control} name="email" label="Email" />

            <InputTableTextControl
                control={control}
                name="password"
                label="Password"
                type="password"
            />

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
                onClick={handleSubmit(handleLogin)}
            >
                Log In
            </Button>
        </Box>
    )
}

const mapStateToProps = (state) => ({
    loginSuccess: state.core.doLoginSuccess,
    loginFail: state.core.doLoginFail,
    loginErrorMessage: state.core.doLoginErrorMessage,
    loggedInUser: state.core.loggedInUser,
})

const mapDispatchToProps = {
    doLogin,
    doResetLoginState,
    doGetLoggedInUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
