import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import Divider from "@mui/material/Divider"
import Button from "@mui/material/Button"
import { Link } from "react-router-dom"
import { useMediaQuery } from "react-responsive"
import { useGoogleLogin } from "@react-oauth/google"
import FacebookLogin from "@greatsumini/react-facebook-login"
import { FaFacebookF } from "react-icons/fa"

import GoogleIcon from "src/pages/login/components/GoogleIcon"
import LoginForm from "src/pages/login/components/forms/LoginForm"
import { doLogin } from "src/action/api_actions"

export const SectionRight = ({ isDesktop, isTablet, isMobile, doLogin }) => {
    const isiPadPro = useMediaQuery({ width: 1024, height: 1366 })
    const responsiveWidth = () => {
        if (isiPadPro) {
            return "w-80"
        }

        if (isDesktop) {
            return "w-50"
        }

        if (isTablet) {
            return "w-80"
        }

        if (isMobile) {
            return "w-80"
        }
    }

    const googleLogin = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            var xhr = new XMLHttpRequest()

            // get a callback when the server responds
            xhr.addEventListener("load", () => {
                // update the state of the component with the result here
                // console.log(xhr.responseText)
                handleLogin("google", xhr?.responseText)
            })
            // open the request with the verb and the url
            xhr.open("GET", "https://www.googleapis.com/oauth2/v3/userinfo")
            xhr.setRequestHeader("Authorization", `Bearer ${tokenResponse.access_token}`)
            // send the request
            xhr.send()
        },
        onError: (errorResponse) => console.log(errorResponse),
    })

    const handleLogin = (type, userProfile) => {
        if (type === "google") {
            if (userProfile) {
                const userProfileJson = JSON.parse(userProfile)
                doLogin({
                    email: userProfileJson?.email,
                    google_id: userProfileJson?.sub,
                })
            }
        } else if (type === "facebook") {
            if (userProfile) {
                doLogin({
                    email: userProfile?.email,
                    facebook_id: userProfile?.id,
                })
            }
        }
    }

    return (
        <Card variant="outlined" className={`${responsiveWidth()} m-auto p-3 mb-5`}>
            <CardContent className="pb-0">
                <Typography variant="subtitle1" className="mb-3" sx={{ fontSize: "20px" }}>
                    Log In
                </Typography>

                <LoginForm />

                <Typography
                    variant="caption"
                    color="#009c99"
                    className="mt-1 cursor-pointer d-flex justify-content-end"
                    component="div"
                >
                    <Link
                        to="/forgot-password"
                        style={{
                            color: "#009c99",
                            textDecoration: "none",
                            cursor: "pointer",
                        }}
                    >
                        Forgot Password
                    </Link>
                </Typography>

                <Divider className="mt-4 mb-1">
                    <Typography
                        variant="caption"
                        style={{
                            fontSize: "0.75rem",
                            color: "#ccc",
                        }}
                    >
                        OR
                    </Typography>
                </Divider>

                <Grid container columns={{ xs: 1, sm: 12, md: 12 }} columnSpacing={2}>
                    <Grid item xs={1} sm={6} md={6}>
                        <FacebookLogin
                            appId="1081715829440196"
                            style={{
                                backgroundColor: "#4267b2",
                                color: "#fff",
                                fontSize: "13px",
                                padding: "12px 24px",
                                border: "none",
                                borderRadius: "4px",
                                width: "100%",
                            }}
                            autoLoad={false}
                            initParams={{
                                version: "v10.0",
                            }}
                            onFail={(error) => {
                                console.log("Login Failed!", error)
                            }}
                            onProfileSuccess={(response) => {
                                handleLogin("facebook", response)
                            }}
                        >
                            <Box className="d-flex justify-content-center">
                                <FaFacebookF size="1rem" /> <Box className="mx-2">Facebook</Box>
                            </Box>
                        </FacebookLogin>
                    </Grid>

                    <Grid item xs={1} sm={6} md={6}>
                        <Button
                            size="small"
                            variant="outlined"
                            startIcon={<GoogleIcon />}
                            className="w-100 text-capitalize"
                            onClick={() => {
                                googleLogin()
                            }}
                        >
                            Google
                        </Button>
                    </Grid>
                </Grid>

                <Box fullWidth className="text-center mt-4">
                    <Typography noWrap variant="caption" color="text.secondary" component="div">
                        New to Untung1?{" "}
                        <Link to="/sign-up" className="text-decoration-none">
                            <Typography
                                component="span"
                                variant="caption"
                                color="primary"
                                fontWeight="bolder"
                            >
                                Sign Up
                            </Typography>
                        </Link>
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    )
}

const mapStateToProps = (state) => ({
    loginSuccess: state.core.doLoginSuccess,
    loginFail: state.core.doLoginFail,
    loginErrorMessage: state.core.doLoginErrorMessage,
})

const mapDispatchToProps = {
    doLogin,
}

export default connect(mapStateToProps, mapDispatchToProps)(SectionRight)
