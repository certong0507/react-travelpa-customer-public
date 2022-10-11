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
import SignUpForm from "src/pages/sign_up/components/forms/SignUpForm"
import { doSignup } from "src/action/api_actions"

// Reference:
// https://react-oauth.vercel.app
export const SectionRight = ({ isDesktop, isTablet, isMobile, doSignup }) => {
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

    const googleSignup = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            var xhr = new XMLHttpRequest()

            // get a callback when the server responds
            xhr.addEventListener("load", () => {
                // update the state of the component with the result here
                // console.log(xhr.responseText)
                // const userProfile = xhr?.responseText
                handleSignUp("google", xhr?.responseText)
            })
            // open the request with the verb and the url
            xhr.open("GET", "https://www.googleapis.com/oauth2/v3/userinfo")
            xhr.setRequestHeader("Authorization", `Bearer ${tokenResponse.access_token}`)
            // send the request
            xhr.send()
        },
        onError: (errorResponse) => console.log(errorResponse),
    })

    const handleSignUp = (type, userProfile) => {
        if (type === "google") {
            if (userProfile) {
                const userProfileJson = JSON.parse(userProfile)
                doSignup({
                    name: userProfileJson?.name,
                    email: userProfileJson?.email,
                    google_id: userProfileJson?.sub,
                })
            }
        } else if (type === "facebook") {
            if (userProfile) {
                doSignup({
                    name: userProfile?.name,
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
                    Sign Up
                </Typography>

                <SignUpForm />

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
                            onFail={(error) => {
                                console.log("Login Failed!", error)
                            }}
                            onProfileSuccess={(response) => {
                                handleSignUp("facebook", response)
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
                                googleSignup()
                            }}
                        >
                            Google
                        </Button>
                    </Grid>
                </Grid>

                <Typography
                    variant="caption"
                    component="div"
                    className="w-75 text-center mx-auto mt-4"
                >
                    By signing up, you agree to Untung1{`'s`}{" "}
                    <Link
                        to="/term-and-condition"
                        target="_blank"
                        style={{
                            color: "#009c99",
                            textDecoration: "none",
                            cursor: "pointer",
                        }}
                    >
                        Terms and Conditions
                    </Link>
                    {" & "}
                    <Link
                        to="/privacy-policy"
                        target="_blank"
                        style={{
                            color: "#009c99",
                            textDecoration: "none",
                            cursor: "pointer",
                        }}
                    >
                        Privacy Policy
                    </Link>
                </Typography>

                <Box fullWidth className="text-center mt-4">
                    <Typography noWrap variant="caption" color="text.secondary" component="div">
                        Have an account?{" "}
                        <Link to="/login" className="text-decoration-none">
                            <Typography
                                component="span"
                                variant="caption"
                                color="primary"
                                fontWeight="bolder"
                            >
                                Log In
                            </Typography>
                        </Link>
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    )
}

const mapStateToProps = (state) => ({
    signupSuccess: state.core.doSignupSuccess,
    signupFail: state.core.doSignupFail,
    signupErrorMessage: state.core.doSignupErrorMessage,
})

const mapDispatchToProps = {
    doSignup,
}

export default connect(mapStateToProps, mapDispatchToProps)(SectionRight)
