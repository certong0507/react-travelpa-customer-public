import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { useParams, Link } from "react-router-dom"
import { CContainer, CCard, CCardBody } from "@coreui/react"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import Button from "@mui/material/Button"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import HTMLEllipsis from "react-lines-ellipsis/lib/html"
import Divider from "@mui/material/Divider"
import produce from "immer"

import { setSelectedInsurance, setInsuranceDetails } from "src/action/ui_actions"
import Header from "src/components/header"
import Footer from "src/components/footer/copyright"
import logoAIG from "src/assets/logoAIG.png"
import logoAllianz from "src/assets/logoAllianz.png"
import logoCHUBB from "src/assets/logoCHUBB.png"
import logoRHB from "src/assets/logoRHB.png"
import logoTune from "src/assets/logoTune.png"
import { INSURANCE } from "src/utils/enum"
import { doGetInsurance } from "src/action/api_actions"
import { setInsurance } from "src/action/ui_actions"

export const Products = ({
    setInsurance,
    doGetInsurance,
    setSelectedInsurance,
    setInsuranceDetails,
    insurances,
}) => {
    const { insurance } = useParams()
    const [insuranceLogo, setInsuranceLogo] = useState(null)
    const [insuranceInsurance, setInsuranceInsurance] = useState(null)

    useEffect(() => {
        if (insurance) {
            setInsurance(null)
            setInsuranceDetails(null)
            setSelectedInsurance(null)
            doGetInsurance(insurance)
        }
    }, [])

    useEffect(() => {
        setInsuranceInsurance()
        if (insurances && insurances?.length > 0) {
            let tempInsurance = []

            for (let i = 0; i < insurances.length; i++) {
                let packageTitleColor = null

                let tempInsurance = produce(insurances[i], (draftState) => {
                    return draftState
                })

                if (tempInsurance?.package_name?.toLowerCase().includes(INSURANCE.AIG)) {
                    packageTitleColor = "#081c74"
                }

                if (tempInsurance?.package_name?.toLowerCase().includes(INSURANCE.ALLIANZ)) {
                    packageTitleColor = "#003781"
                }

                if (tempInsurance?.package_name?.toLowerCase().includes(INSURANCE.CHUBB)) {
                    packageTitleColor = "#080404"
                }

                if (tempInsurance?.package_name?.toLowerCase().includes(INSURANCE.RHB)) {
                    packageTitleColor = "#0067b1"
                }

                if (tempInsurance?.package_name?.toLowerCase().includes(INSURANCE.TUNE)) {
                    packageTitleColor = "rgb(228, 22, 15)"
                }

                tempInsurance = produce(tempInsurance, (draftState) => {
                    draftState.packageTitleColor = packageTitleColor
                    draftState.backgroundStyle = {
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "55%",
                        backgroundColor: "rgba(255,255,255,0.9)",
                        backgroundBlendMode: "overlay",
                    }
                })

                tempInsurance.push(tempInsurance)
            }

            setInsuranceInsurance(tempInsurance)
        } else {
            setInsuranceInsurance(null)
        }
    }, [insurances])

    useEffect(() => {
        doGetInsurance(insurance)

        if (insurance.toLowerCase().includes(INSURANCE.AIG)) {
            setInsuranceLogo(logoAIG)
        }

        if (insurance.toLowerCase().includes(INSURANCE.ALLIANZ)) {
            setInsuranceLogo(logoAllianz)
        }

        if (insurance.toLowerCase().includes(INSURANCE.CHUBB)) {
            setInsuranceLogo(logoCHUBB)
        }

        if (insurance.toLowerCase().includes(INSURANCE.RHB)) {
            setInsuranceLogo(logoRHB)
        }

        if (insurance.toLowerCase().includes(INSURANCE.TUNE)) {
            setInsuranceLogo(logoTune)
        }
    }, [insurance])

    return (
        <div>
            <Header />
            <div className="page-body">
                <CCard className="border-0">
                    <CCardBody>
                        <CContainer className="text-center">
                            <div
                                className="mt-4 mb-4 m-auto"
                                style={{ width: "8rem", color: "#009c99" }}
                            >
                                <img src={insuranceLogo} width="100%" />
                            </div>
                        </CContainer>

                        <CContainer>
                            <Grid
                                container
                                spacing={{ xs: 2, md: 3 }}
                                columns={{ xs: 1, sm: 1, md: 8, lg: 12 }}
                                className="pb-3"
                                style={{
                                    margin: "auto 0",
                                    background: "rgb(237, 247, 237)",
                                    borderRadius: "4px",
                                    width: "auto",
                                }}
                            >
                                {!insuranceInsurance && (
                                    <div className="m-3">
                                        <Typography variant="caption" display="block" gutterBottom>
                                            No package to show.
                                        </Typography>
                                    </div>
                                )}

                                {insuranceInsurance?.map((item, index) => (
                                    <Grid
                                        item
                                        key={index}
                                        xs={1}
                                        sm={1}
                                        md={4}
                                        lg={4}
                                        className="p-3"
                                    >
                                        <Card className="w-100 p-2 position-relative">
                                            {/* <CardContent style={item.backgroundStyle}> */}
                                            <CardContent>
                                                <Typography
                                                    gutterBottom
                                                    variant="h5"
                                                    component="div"
                                                    style={{
                                                        fontSize: "18px",
                                                        marginBottom: "1rem",
                                                        color: item.packageTitleColor,
                                                        fontWeight: "700",
                                                        textAlign: "center",
                                                    }}
                                                >
                                                    {item?.package_name}
                                                </Typography>

                                                <Typography
                                                    variant="body2"
                                                    component="div"
                                                    color="text.secondary"
                                                    style={{
                                                        fontSize: "0.8rem",
                                                        marginBottom: "1rem",
                                                        minHeight: "135px",
                                                        textAlign: "initial",
                                                    }}
                                                >
                                                    <HTMLEllipsis
                                                        unsafeHTML={item?.package_description}
                                                        maxLine="5"
                                                        ellipsis="..."
                                                        basedOn="letters"
                                                    />
                                                </Typography>

                                                <Typography
                                                    variant="body2"
                                                    color="text.secondary"
                                                    component="div"
                                                    style={{
                                                        fontSize: "0.7rem",
                                                        padding: "0.5rem",
                                                        fontWeight: "700",
                                                        textAlign: "left",
                                                    }}
                                                >
                                                    <div className="d-flex">
                                                        <div className="mt-1">
                                                            <span
                                                                style={{ paddingRight: "0.5rem" }}
                                                            >
                                                                From
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                {item?.start_from_price_domestic && (
                                                                    <div>
                                                                        <span
                                                                            style={{
                                                                                fontSize: "20px",
                                                                                fontWeight: "700",
                                                                                color: "black",
                                                                            }}
                                                                        >
                                                                            RM{" "}
                                                                            {
                                                                                item?.start_from_price_domestic
                                                                            }
                                                                        </span>{" "}
                                                                        <span>(Domestic)</span>
                                                                    </div>
                                                                )}
                                                            </div>

                                                            <div>
                                                                {item?.start_from_price_oversea && (
                                                                    <div>
                                                                        <span
                                                                            style={{
                                                                                fontSize: "20px",
                                                                                fontWeight: "700",
                                                                                color: "black",
                                                                            }}
                                                                        >
                                                                            RM{" "}
                                                                            {
                                                                                item?.start_from_price_oversea
                                                                            }
                                                                        </span>{" "}
                                                                        <span>(Oversea)</span>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Typography>
                                            </CardContent>

                                            <CardActions className="text-center">
                                                <Link
                                                    to="/travel-insurance"
                                                    state={{ fromProducts: true }}
                                                    className="text-decoration-none w-100"
                                                    style={{
                                                        color: "#ffffff",
                                                    }}
                                                    onClick={() => {
                                                        setSelectedInsurance(item)
                                                    }}
                                                >
                                                    <Button
                                                        disableElevation
                                                        size="small"
                                                        variant="contained"
                                                        className="w-75"
                                                        style={{ padding: "5px" }}
                                                    >
                                                        Select
                                                    </Button>
                                                </Link>
                                            </CardActions>

                                            <Divider className="mt-3 mb-2"></Divider>

                                            <div className="d-flex justify-content-center">
                                                <Button
                                                    disableElevation
                                                    size="small"
                                                    onClick={() => {
                                                        if (
                                                            item?.attachment_url !== null &&
                                                            item?.attachment_url !== ""
                                                        ) {
                                                            window.location.href =
                                                                item?.attachment_url
                                                        }
                                                    }}
                                                >
                                                    See more plan details
                                                </Button>
                                            </div>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        </CContainer>
                    </CCardBody>
                </CCard>
            </div>
            <Footer />
        </div>
    )
}

const mapStateToProps = (state) => ({
    insurances: state.insurance.insurances,
})

const mapDispatchToProps = { setInsurance, doGetInsurance, setSelectedInsurance, setInsuranceDetails }

export default connect(mapStateToProps, mapDispatchToProps)(Products)
