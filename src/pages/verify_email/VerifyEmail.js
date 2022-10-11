import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate, useSearchParams } from 'react-router-dom';
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"

import Header from "src/components/header"
import Footer from "src/components/footer/copyright"
import { doVerifyEmail, doResetVerifyEmailState } from "src/action/api_actions";

const VerifyEmail = ({ 
    loggedInUser,
    verifyEmailSuccess,
    verifyEmailFail,
    doVerifyEmail, 
}) => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {
        const token = searchParams.get("id")

        if (token) {
            doVerifyEmail(token)
        }

        doResetVerifyEmailState();
	}, []);

    useEffect(() => {
		if (verifyEmailSuccess) {
            doResetVerifyEmailState();
		}

        if (verifyEmailFail) {
            navigate("/");
        }
	}, [verifyEmailSuccess, verifyEmailFail]);

    const handleBack = () => {
        if (loggedInUser) {
            navigate("/");
        } else {
            navigate("/login");
        }
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
                <Card variant="outlined" className="m-auto p-2" sx={{ minWidth: "30%" }}>
                    <CardContent>
                    <div className="d-flex justify-content-center">
                            <Typography variant="h6" className="mb-4">
                                Verification Success
                            </Typography>
                        </div>

                        <p className="text-medium-emphasis" style={{ fontSize: "14px" }}>
                            Your account has been verified.
                        </p>

                        <div className="text-center">
                            <Button
                                disableElevation
                                variant="contained"
                                className="mt-3 "
                                onClick={handleBack}
                            >
                                {loggedInUser ? "Back to homepage" : "Proceed to login"}
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
    loggedInUser: state.core.loggedInUser,
    verifyEmailSuccess: state.core.doVerifyEmailSuccess,
    verifyEmailFail: state.core.doVerifyEmailFail,
});

const mapDispatchToProps = {
    doVerifyEmail
};

export default connect(mapStateToProps, mapDispatchToProps)(VerifyEmail);
