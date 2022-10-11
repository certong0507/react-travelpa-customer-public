import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { CCard, CCardBody } from "@coreui/react"
import { Link } from "react-router-dom"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import Divider from "@mui/material/Divider"
import HTMLEllipsis from "react-lines-ellipsis/lib/html"
import produce from "immer"
import Box from "@mui/material/Box"
import Alert from "@mui/material/Alert"

import { setSelectedInsurance, setInsuranceDetails } from "src/action/ui_actions"
import logoAIG from "src/assets/logoAIG.png"
import logoAllianz from "src/assets/logoAllianz.png"
import logoCHUBB from "src/assets/logoCHUBB.png"
import logoRHB from "src/assets/logoRHB.png"
import logoTune from "src/assets/logoTune.png"
import logoAXA from "src/assets/logoAXA.png"
import InputSelect from "src/components/inputs/InputSelect"
import { INSURANCE } from "src/utils/enum"

export const Step1 = ({
    setSelectedInsurance,
    setInsuranceDetails,
    next,
    insurances,
    sales,
    meta,
    insuranceDetailsForm,
    selectedInsurance,
    loggedInUser,
}) => {
    const [insuranceInsurance, setInsuranceInsurance] = useState(null)
    const [insurance, setInsurance] = useState(null)
    const [filterByInsurance, setFilterByInsurance] = useState(null)
    const [filterByRegion, setFilterByRegion] = useState(null)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        setInsuranceInsurance()
        if (insurances && insurances?.length > 0) {
            setInsuranceInsurance(prepareInsurance())
        } else {
            setInsuranceInsurance(null)
        }
    }, [insurances])

    useEffect(() => {
        if (meta?.insurer_list) {
            setInsurance(
                meta?.insurer_list?.map((i) => {
                    return { label: i.insurer_name, value: i.id }
                }),
            )
        }
    }, [meta])

    useEffect(() => {
        let tempInsurance = prepareInsurance()

        if (filterByInsurance?.length > 0) {
            tempInsurance = tempInsurance?.filter((i) => filterByInsurance?.includes(i.insurer_id))
        }

        if (filterByRegion?.length > 0) {
            const domestic = filterByRegion.includes("domestic")
            const oversea = filterByRegion.includes("oversea")

            if (domestic && !oversea) {
                tempInsurance = tempInsurance?.filter((i) => i.start_from_price_domestic !== null)
            }

            if (oversea && !domestic) {
                tempInsurance = tempInsurance?.filter((i) => i.start_from_price_oversea !== null)
            }
        }

        setInsuranceInsurance(tempInsurance)
    }, [filterByInsurance, filterByRegion])

    const prepareInsurance = () => {
        let tempInsurances = []
        for (let i = 0; i < insurances?.length; i++) {
            let insuranceLogo = null
            let insuranceTitleColor = null

            let tempInsurance = produce(insurances[i], (draftState) => {
                return draftState
            })

            if (tempInsurance?.package_name?.toLowerCase().includes("aig")) {
                insuranceLogo = logoAIG
                insuranceTitleColor = "#081c74"
            }

            if (tempInsurance?.package_name?.toLowerCase().includes("allianz")) {
                insuranceLogo = logoAllianz
                insuranceTitleColor = "#003781"
            }

            if (tempInsurance?.package_name?.toLowerCase().includes("chubb")) {
                insuranceLogo = logoCHUBB
                insuranceTitleColor = "#080404"
            }

            if (tempInsurance?.package_name?.toLowerCase().includes("rhb")) {
                insuranceLogo = logoRHB
                insuranceTitleColor = "#0067b1"
            }

            if (tempInsurance?.package_name?.toLowerCase().includes("tune")) {
                insuranceLogo = logoTune
                insuranceTitleColor = "#e91c24"
            }

            if (tempInsurance?.package_name?.toLowerCase().includes("axa")) {
                insuranceLogo = logoAXA
                insuranceTitleColor = "#01028e"
            }

            tempInsurance = produce(tempInsurance, (draftState) => {
                draftState.insuranceLogo = insuranceLogo
                draftState.insuranceTitleColor = insuranceTitleColor
                draftState.backgroundStyle = {
                    backgroundImage: `url(${insuranceLogo})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "55%",
                    backgroundColor: "rgba(255,255,255,0.9)",
                    backgroundBlendMode: "overlay",
                }
            })
            tempInsurances.push(tempInsurance)
        }
        return tempInsurances
    }

    const filterInsurance = (insurance) => {
        setFilterByInsurance(insurance)
    }

    const filterRegion = (region) => {
        setFilterByRegion(region)
    }

    const selectButton = (item) => {
        if (insuranceDetailsForm || insuranceDetailsForm?.insureds.length > 0) {
            if (insuranceDetailsForm?.insurerCode !== item?.insurer_code) {
                //1. set coverage type to individual
                //2. remove all insured
                //3. add main insured
                //4. remove all child
                //5. set isSpouse to false
                const coverageTypeDefault = "individual"
                const isSpouseDefault = false
                let destination = insuranceDetailsForm?.destination
                let isWithinMalaysia = insuranceDetailsForm?.isWithinMalaysia

                // Reset destination for aig
                if (item?.insurer_code === INSURANCE.AIG) {
                    if (item?.package_name.includes("Domestic")) {
                        destination = [{ label: "Malaysia", code: 136 }]
                    } else {
                        destination = []
                    }

                    isWithinMalaysia = false
                }

                setInsuranceDetails({
                    insurerCode: selectedInsurance?.insurer_code,
                    fullName: insuranceDetailsForm?.fullName,
                    travelDocument: insuranceDetailsForm?.travelDocument,
                    travelDocumentValue: insuranceDetailsForm?.travelDocumentValue,
                    dob: insuranceDetailsForm?.dob,
                    address: insuranceDetailsForm?.address,
                    occupation: insuranceDetailsForm?.occupation,
                    email: insuranceDetailsForm?.email,
                    countryCode: insuranceDetailsForm?.countryCode,
                    mobileNo: insuranceDetailsForm?.mobileNo,
                    coverageType: coverageTypeDefault,
                    departureDate: insuranceDetailsForm?.departureDate,
                    returnDate: insuranceDetailsForm?.returnDate,
                    travelDelayUpgrade: insuranceDetailsForm?.travelDelayUpgrade,
                    destination: destination,
                    isWithinMalaysia: isWithinMalaysia,
                    isSpouse: isSpouseDefault,
                    tripType: insuranceDetailsForm?.tripType,
                    insureds: [],
                    child: [],
                    token: insuranceDetailsForm?.token,
                    referralId: sales?.id,
                })
            }
        }
    }

    return (
        <div id="insurance-step-1-wrapper" className="d-flex justify-content-center">
            <CCard>
                <CCardBody className="text-center">
                    {!loggedInUser && (
                        <Alert severity="info" className="mb-5">
                            <Box className="d-flex flex-column" sx={{ textAlign: "initial" }}>
                                <Typography variant="caption">
                                    <b>
                                        <Link
                                            to="/login"
                                            className="text-decoration-underline"
                                            style={{ color: "#014361" }}
                                        >
                                            Login Now
                                        </Link>{" "}
                                        or{" "}
                                        <Link
                                            to="/sign-up"
                                            className="text-decoration-underline"
                                            style={{ color: "#014361" }}
                                        >
                                            Sign Up
                                        </Link>{" "}
                                        for a free account.
                                    </b>
                                </Typography>

                                <Typography variant="caption">
                                    An Untung1 Account provides you with the following advantages:
                                </Typography>

                                <Typography variant="caption">
                                    <ul className="mb-0">
                                        <li>View Purchase History</li>
                                        <li>Download Insurance Quotation</li>
                                        <li>Download Insurance Policy</li>
                                    </ul>
                                </Typography>
                            </Box>
                        </Alert>
                    )}

                    {sales?.name && (
                        <div id="insurance-step-1-sale">
                            <div id="insurance-step-1-sale-content" className="mb-2">
                                Sales : {sales?.name}
                            </div>
                        </div>
                    )}

                    <div id="insurance-step-1-title">Choose the right plan for you</div>

                    <Grid
                        container
                        spacing={{ xs: 2, md: 3 }}
                        columns={{ xs: 1, sm: 1, md: 12 }}
                        className="m-auto mb-3 justify-content-end"
                    >
                        <Grid item xs={3} className="p-0">
                            <InputSelect
                                label="Filter Insurance..."
                                options={insurance}
                                handleChange={(insurance) => filterInsurance(insurance)}
                            />
                        </Grid>

                        <Grid item xs={3} className="p-0">
                            <InputSelect
                                label="Filter Region..."
                                options={[
                                    { label: "Domestic", value: "domestic" },
                                    { label: "Oversea", value: "oversea" },
                                ]}
                                handleChange={(region) => filterRegion(region)}
                            />
                        </Grid>
                    </Grid>

                    <Grid
                        container
                        spacing={{ xs: 2, md: 3 }}
                        columns={{ xs: 1, sm: 1, md: 8, lg: 12 }}
                        className="pb-3"
                        style={{
                            margin: "auto 0",
                            background: "rgb(237, 247, 237)",
                            borderRadius: "4px",
                        }}
                    >
                        {insuranceInsurance?.length === 0 && (
                            <div className="m-3">No package to display</div>
                        )}
                        {insuranceInsurance?.map((item, index) => (
                            <Grid item key={index} xs={1} sm={1} md={4} lg={4} className="p-3">
                                <Card
                                    className="w-100 p-2 position-relative"
                                    sx={{
                                        border: sales?.insurer_id?.find(
                                            (i) => i === item?.insurer_id,
                                        )
                                            ? `2px solid ${item.insuranceTitleColor}`
                                            : "none",
                                    }}
                                >
                                    <CardContent style={{ minHeight: "335px" }}>
                                        <div
                                            className={`d-flex ${
                                                item?.insurer_code === INSURANCE.TUNE ||
                                                item?.insurer_code === INSURANCE.AIG ||
                                                item?.insurer_code === INSURANCE.AXA
                                                    ? "mb-3"
                                                    : ""
                                            }`}
                                            style={{ minHeight: "66px" }}
                                        >
                                            <div className="m-auto">
                                                <img
                                                    src={item.insuranceLogo}
                                                    style={{
                                                        width:
                                                            item?.insurer_code === INSURANCE.TUNE ||
                                                            item?.insurer_code === INSURANCE.AXA
                                                                ? "25%"
                                                                : "40%",
                                                    }}
                                                    alt="logo"
                                                />
                                            </div>
                                        </div>
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="div"
                                            style={{
                                                fontSize: "18px",
                                                marginBottom: "1rem",
                                                color: item.insuranceTitleColor,
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
                                                minHeight: "100px",
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
                                                minHeight: "100px",
                                            }}
                                        >
                                            <div className="d-flex">
                                                <div className="mt-1">
                                                    <span style={{ paddingRight: "0.5rem" }}>
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
                                                                    {item?.start_from_price_oversea}
                                                                </span>{" "}
                                                                <span>(Oversea)</span>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </Typography>
                                    </CardContent>

                                    <CardActions className="d-flex justify-content-center flex-column">
                                        <Button
                                            disableElevation
                                            size="small"
                                            variant="contained"
                                            className="w-75"
                                            style={{ padding: "5px" }}
                                            onClick={() => {
                                                setSelectedInsurance(item)
                                                selectButton(item)
                                                next()
                                            }}
                                        >
                                            Select
                                        </Button>

                                        {sales?.insurer_id?.find((i) => i === item?.insurer_id) ? (
                                            <Typography
                                                component="div"
                                                variant="caption"
                                                color="error"
                                            >
                                                <b>Recommended!</b>
                                            </Typography>
                                        ) : (
                                            <Box sx={{ height: "22px" }}> </Box>
                                        )}
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
                                                    window.location.href = item?.attachment_url
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
                </CCardBody>
            </CCard>
        </div>
    )
}

const mapStateToProps = (state) => ({
    insurances: state.insurance.insurances,
    sales: state.insurance.sales,
    meta: state.core.meta,
    insuranceDetailsForm: state.insurance.insuranceDetailsForm,
    selectedInsurance: state.insurance.selectedInsurance,
    loggedInUser: state.core.loggedInUser,
})

const mapDispatchToProps = { setSelectedInsurance, setInsuranceDetails }

export default connect(mapStateToProps, mapDispatchToProps)(Step1)
