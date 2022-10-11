import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import { useNavigate } from 'react-router-dom';

import Header from "src/components/header"
import Footer from "src/components/footer/copyright"
import { resetForgotPasswordState } from "src/action/api_actions";

const ResetPasswordSuccess = ({ loggedInUser, resetForgotPasswordState }) => {
    const navigate = useNavigate();

    useEffect(() => {
		resetForgotPasswordState();
	}, []);

    useEffect(() => {
		if (loggedInUser) {
			navigate("/");
		}
	}, [loggedInUser]);

    const handleBack = () => {
        navigate("/login");
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
                                Reset Password Successful
                            </Typography>
                        </div>

                        <p className="text-medium-emphasis" style={{ fontSize: "14px" }}>
                            You password has been reset.
                        </p>

                        <div className="text-center">
                            <Button
                                disableElevation
                                variant="contained"
                                className="mt-3 "
                                onClick={handleBack}
                            >
                                Proceed to Log In
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
});

const mapDispatchToProps = {
    resetForgotPasswordState
};

export default connect(mapStateToProps, mapDispatchToProps)(ResetPasswordSuccess);
