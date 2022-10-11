import React from "react"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import { Link } from "react-router-dom"
import { HiOutlineArrowSmRight } from "react-icons/hi"

import Header from "src/components/header"
import Footer from "src/components/footer/copyright"

const Page404 = () => {
    return (
        <div>
            <Header />

            <Box
                sx={{
                    height: "90vh",
                    backgroundColor: "rgb(237, 247, 237)",
                }}
            >
                <Container sx={{ height: "500px", backgroundColor: "rgb(237, 247, 237)" }}>
                    <Grid container className="m-auto" sx={{ height: "inherit" }}>
                        <Grid item md={6} className="m-auto">
                            <div className="clearfix">
                                <Typography
                                    variant="h2"
                                    color="rgb(42, 74, 75)"
                                    className="float-start display-3 me-4"
                                >
                                    404
                                </Typography>
                                <Typography variant="h5" color="rgb(42, 74, 75)" className="pt-3">
                                    Oops! You{"'"}re lost.
                                </Typography>
                                <p className="text-medium-emphasis float-start">
                                    The page you are looking for was not found.
                                </p>
                            </div>
                            <Link
                                to="/"
                                className="d-flex justify-content-end text-decoration-none"
                            >
                                <Typography variant="overline" color="#009c99" component="div">
                                    Back to homepage
                                </Typography>
                                <div className="my-auto">
                                    <HiOutlineArrowSmRight color="rgb(42, 74, 75)" />
                                </div>
                            </Link>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Footer />
        </div>
    )
}

export default Page404
