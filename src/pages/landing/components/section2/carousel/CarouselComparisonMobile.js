import React, { useState } from "react"
import { connect } from "react-redux"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Paper from "@mui/material/Paper"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import Typography from "@mui/material/Typography"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import Table from "@mui/material/Table"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableRow from "@mui/material/TableRow"
import TableBody from "@mui/material/TableBody"

import "swiper/css"
import "swiper/css/pagination"

import logoAIG from "src/assets/logoAIG.png"
import logoAllianz from "src/assets/logoAllianz.png"
import logoCHUBB from "src/assets/logoCHUBB.png"
import logoRHB from "src/assets/logoRHB.png"
import logoTune from "src/assets/logoTune.png"
import logoAXA from "src/assets/logoAXA.png"
import content from "src/pages/landing/components/section2/data/dataMobileCoparison"

const styleCard = {
    textAlign: "Center",
    height: "250px",
    display: "flex",
    justifyContent: "center",
    alignItem: "middle",
}

const styleTableHead = {
    fontSize: "x-small",
    lineHeight: "normal",
    paddingLeft: 0,
    paddingRight: 0,
}

const styleTableBody = {
    fontSize: "x-small",
    lineHeight: "normal",
    paddingLeft: 0,
    paddingRight: 0,
}

export const CarouselComparisonMobile = (props) => {
    const [activeContent, setActiveContent] = useState(null)
    const [activeIndex, setActiveIndex] = useState(null)

    const setContent = (index) => {
        setActiveIndex(index)

        if (index === 0) {
            setActiveContent(content["rhb"])
        }

        if (index === 1) {
            setActiveContent(content["chubb"])
        }

        if (index === 2) {
            setActiveContent(content["aig"])
        }

        if (index === 3) {
            setActiveContent(content["tune"])
        }

        if (index === 4) {
            setActiveContent(content["allianz"])
        }

        if (index === 5) {
            setActiveContent(content["axa"])
        }
    }

    return (
        <div style={{ backgroundColor: "rgb(237, 247, 237)" }}>
            <Swiper
                className="pt-4"
                slidesPerView={1.2}
                centeredSlides={true}
                spaceBetween={10}
                pagination={{ clickable: true }}
                modules={[Pagination]}
                onTransitionEnd={(swiper) => {
                    setContent(swiper.activeIndex)
                }}
            >
                <SwiperSlide
                    id="rhb"
                    style={{
                        borderRadius: "6px",
                        border: activeIndex === 0 ? "2px solid #0067b1" : "none",
                    }}
                >
                    <Box sx={{ minWidth: 275 }}>
                        <Card variant="outlined">
                            <CardContent style={styleCard}>
                                <div className="m-auto">
                                    <img src={logoRHB} width={150} />
                                </div>
                            </CardContent>
                        </Card>
                    </Box>
                </SwiperSlide>

                <SwiperSlide
                    id="chubb"
                    style={{
                        borderRadius: "6px",
                        border: activeIndex === 1 ? "2px solid #080404" : "none",
                    }}
                >
                    <Box sx={{ minWidth: 275 }}>
                        <Card variant="outlined">
                            <CardContent style={styleCard}>
                                <div className="m-auto">
                                    <img src={logoCHUBB} width={200} />
                                </div>
                            </CardContent>
                        </Card>
                    </Box>
                </SwiperSlide>

                <SwiperSlide
                    id="aig"
                    style={{
                        borderRadius: "6px",
                        border: activeIndex === 2 ? "2px solid #081c74" : "none",
                    }}
                >
                    <Box sx={{ minWidth: 275 }}>
                        <Card variant="outlined">
                            <CardContent style={styleCard}>
                                <div className="m-auto">
                                    <img src={logoAIG} width={130} />
                                </div>
                            </CardContent>
                        </Card>
                    </Box>
                </SwiperSlide>

                <SwiperSlide
                    id="tune"
                    style={{
                        borderRadius: "6px",
                        border: activeIndex === 3 ? "2px solid #e4160f" : "none",
                    }}
                >
                    <Box sx={{ minWidth: 275 }}>
                        <Card variant="outlined">
                            <CardContent style={styleCard}>
                                <div className="m-auto">
                                    <img src={logoTune} width={130} />
                                </div>
                            </CardContent>
                        </Card>
                    </Box>
                </SwiperSlide>

                <SwiperSlide
                    id="allianz"
                    style={{
                        borderRadius: "6px",
                        border: activeIndex === 4 ? "2px solid #003781" : "none",
                    }}
                >
                    <Box sx={{ minWidth: 275 }}>
                        <Card variant="outlined">
                            <CardContent style={styleCard}>
                                <div className="m-auto">
                                    <img src={logoAllianz} width={150} />
                                </div>
                            </CardContent>
                        </Card>
                    </Box>
                </SwiperSlide>

                <SwiperSlide
                    id="allianz"
                    style={{
                        borderRadius: "6px",
                        border: activeIndex === 5 ? "2px solid #003781" : "none",
                    }}
                >
                    <Box sx={{ minWidth: 275 }}>
                        <Card variant="outlined">
                            <CardContent style={styleCard}>
                                <div className="m-auto">
                                    <img src={logoAXA} width={150} />
                                </div>
                            </CardContent>
                        </Card>
                    </Box>
                </SwiperSlide>
            </Swiper>

            <Swiper
                slidesPerView={1.2}
                centeredSlides={true}
                spaceBetween={10}
                pagination={{ clickable: true }}
                modules={[Pagination]}
                className="mt-2"
            >
                <SwiperSlide>
                    <div>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography style={{ fontSize: "small" }} className="font-bold">
                                    Accidental Death and Total Disablement
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>
                                <TableContainer component={Paper} elevation={0}>
                                    <Table sx={{ minWidth: "100%" }} size="small">
                                        <TableBody>
                                            <TableRow>
                                                <TableCell
                                                    variant="head"
                                                    style={styleTableHead}
                                                    className="font-normal"
                                                >
                                                    Adult
                                                </TableCell>
                                                <TableCell
                                                    variant="body"
                                                    className="text-end"
                                                    style={styleTableBody}
                                                >
                                                    {activeContent?.accident?.adult}
                                                </TableCell>
                                            </TableRow>

                                            <TableRow>
                                                <TableCell
                                                    variant="head"
                                                    style={styleTableHead}
                                                    className="font-normal"
                                                >
                                                    Child
                                                </TableCell>
                                                <TableCell
                                                    variant="body"
                                                    className="text-end"
                                                    style={styleTableBody}
                                                >
                                                    {activeContent?.accident?.adult}
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography style={{ fontSize: "small" }} className="font-bold">
                                    Medical Expenses
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>
                                <TableContainer component={Paper} elevation={0}>
                                    <Table sx={{ minWidth: "100%" }} size="small">
                                        <TableBody>
                                            <TableRow>
                                                <TableCell
                                                    variant="head"
                                                    style={styleTableHead}
                                                    className="font-normal"
                                                >
                                                    Medical Expenses
                                                </TableCell>
                                                <TableCell
                                                    variant="body"
                                                    className="text-end"
                                                    style={styleTableBody}
                                                >
                                                    {activeContent?.medical?.medical}
                                                </TableCell>
                                            </TableRow>

                                            <TableRow>
                                                <TableCell
                                                    variant="head"
                                                    style={styleTableHead}
                                                    className="font-normal"
                                                >
                                                    Due to Accident
                                                </TableCell>
                                                <TableCell
                                                    variant="body"
                                                    className="text-end"
                                                    style={styleTableBody}
                                                >
                                                    {activeContent?.medical?.due_to_accident}
                                                </TableCell>
                                            </TableRow>

                                            <TableRow>
                                                <TableCell
                                                    variant="head"
                                                    style={styleTableHead}
                                                    className="font-normal"
                                                >
                                                    Up to age 69 years (Due to Accident)
                                                </TableCell>
                                                <TableCell
                                                    variant="body"
                                                    className="text-end"
                                                    style={styleTableBody}
                                                >
                                                    {activeContent?.medical?.accident_up_69}
                                                </TableCell>
                                            </TableRow>

                                            <TableRow>
                                                <TableCell
                                                    variant="head"
                                                    style={styleTableHead}
                                                    className="font-normal"
                                                >
                                                    Above age 69 years (Due to Accident)
                                                </TableCell>
                                                <TableCell
                                                    variant="body"
                                                    className="text-end"
                                                    style={styleTableBody}
                                                >
                                                    {activeContent?.medical?.accident_above_69}
                                                </TableCell>
                                            </TableRow>

                                            <TableRow>
                                                <TableCell
                                                    variant="head"
                                                    style={styleTableHead}
                                                    className="font-normal"
                                                >
                                                    Up to age 69 years (Due to Sickness)
                                                </TableCell>
                                                <TableCell
                                                    variant="body"
                                                    className="text-end"
                                                    style={styleTableBody}
                                                >
                                                    {activeContent?.medical?.sickness_up_69}
                                                </TableCell>
                                            </TableRow>

                                            <TableRow>
                                                <TableCell
                                                    variant="head"
                                                    style={styleTableHead}
                                                    className="font-normal"
                                                >
                                                    Above age 69 years (Due to Sickness)
                                                </TableCell>
                                                <TableCell
                                                    variant="body"
                                                    className="text-end"
                                                    style={styleTableBody}
                                                >
                                                    {activeContent?.medical?.sickness_above_69}
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography style={{ fontSize: "small" }} className="font-bold">
                                    Travel Cancellation
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>
                                <TableContainer component={Paper} elevation={0}>
                                    <Table sx={{ minWidth: "100%" }} size="small">
                                        <TableBody>
                                            <TableRow>
                                                <TableCell
                                                    variant="head"
                                                    style={styleTableHead}
                                                    className="font-normal"
                                                >
                                                    Cancellation Expenses
                                                </TableCell>
                                                <TableCell
                                                    variant="body"
                                                    className="text-end"
                                                    style={styleTableBody}
                                                >
                                                    {activeContent?.travel?.cancel_expenses}
                                                </TableCell>
                                            </TableRow>

                                            <TableRow>
                                                <TableCell
                                                    variant="head"
                                                    style={styleTableHead}
                                                    className="font-normal"
                                                >
                                                    Travel Curtailment
                                                </TableCell>
                                                <TableCell
                                                    variant="body"
                                                    className="text-end"
                                                    style={styleTableBody}
                                                >
                                                    {activeContent?.travel?.travel_curtailment}
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography style={{ fontSize: "small" }} className="font-bold">
                                    Full Terrorism Cover
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>
                                <TableContainer component={Paper} elevation={0}>
                                    <Table sx={{ minWidth: "100%" }} size="small">
                                        <TableBody>
                                            <TableRow>
                                                <TableCell
                                                    variant="head"
                                                    style={styleTableHead}
                                                    className="font-normal"
                                                >
                                                    Full Terrorism Cover
                                                </TableCell>
                                                <TableCell
                                                    variant="body"
                                                    className="text-end"
                                                    style={styleTableBody}
                                                >
                                                    {activeContent?.full}
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography style={{ fontSize: "small" }} className="font-bold">
                                    Cashless admission - on major city
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>
                                <TableContainer component={Paper} elevation={0}>
                                    <Table sx={{ minWidth: "100%" }} size="small">
                                        <TableBody>
                                            <TableRow>
                                                <TableCell
                                                    variant="head"
                                                    style={styleTableHead}
                                                    className="font-normal"
                                                >
                                                    Cashless admission - on major city
                                                </TableCell>
                                                <TableCell
                                                    variant="body"
                                                    className="text-end"
                                                    style={styleTableBody}
                                                >
                                                    {activeContent?.cashless}
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon sx={{ color: "#ffffff" }} />}
                                style={{
                                    backgroundColor: "#009c99",
                                    color: "#ffffff",
                                }}
                            >
                                <Typography
                                    style={{
                                        fontSize: "small",
                                    }}
                                    className="font-bold"
                                >
                                    COVID-19 Coverages
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails
                                style={{
                                    backgroundColor: "#009c99",
                                    color: "#ffffff",
                                }}
                            >
                                <TableContainer
                                    component={Paper}
                                    elevation={0}
                                    sx={{ overflowX: "inherit" }}
                                >
                                    <Table
                                        sx={{ minWidth: "100%" }}
                                        size="small"
                                        style={{
                                            backgroundColor: "#009c99",
                                            border: "none",
                                        }}
                                    >
                                        <TableBody>
                                            <TableRow>
                                                <TableCell
                                                    variant="head"
                                                    style={styleTableHead}
                                                    className="font-normal text-white"
                                                >
                                                    COVID-19 Coverages
                                                </TableCell>
                                                <TableCell
                                                    variant="body"
                                                    className="text-end text-white"
                                                    style={styleTableBody}
                                                >
                                                    {activeContent?.covid?.covid}
                                                </TableCell>
                                            </TableRow>

                                            <TableRow>
                                                <TableCell
                                                    variant="head"
                                                    style={styleTableHead}
                                                    className="font-normal text-white"
                                                >
                                                    Medical Expenses (incurred Overseas)
                                                </TableCell>
                                                <TableCell
                                                    variant="body"
                                                    className="text-end text-white"
                                                    style={styleTableBody}
                                                >
                                                    {activeContent?.covid?.medical}
                                                </TableCell>
                                            </TableRow>

                                            <TableRow>
                                                <TableCell
                                                    variant="head"
                                                    style={styleTableHead}
                                                    className="font-normal text-white"
                                                >
                                                    Travel Cancellation / Curtailment
                                                </TableCell>
                                                <TableCell
                                                    variant="body"
                                                    className="text-end text-white"
                                                    style={styleTableBody}
                                                >
                                                    {activeContent?.covid?.travel}
                                                </TableCell>
                                            </TableRow>

                                            <TableRow>
                                                <TableCell
                                                    variant="head"
                                                    style={styleTableHead}
                                                    className="font-normal text-white"
                                                >
                                                    Out-of-country COVID-19 Diagnosis Quarantine
                                                    Allowance (Up to 14 days)
                                                </TableCell>
                                                <TableCell
                                                    variant="body"
                                                    className="text-end text-white"
                                                    style={styleTableBody}
                                                >
                                                    {activeContent?.covid?.out_of_country}
                                                </TableCell>
                                            </TableRow>

                                            <TableRow>
                                                <TableCell
                                                    variant="head"
                                                    style={styleTableHead}
                                                    className="font-normal text-white"
                                                >
                                                    Daily Hospital Income - Maximum coverage
                                                </TableCell>
                                                <TableCell
                                                    variant="body"
                                                    className="text-end text-white"
                                                    style={styleTableBody}
                                                >
                                                    {activeContent?.covid?.daily}
                                                </TableCell>
                                            </TableRow>

                                            <TableRow>
                                                <TableCell
                                                    variant="head"
                                                    style={styleTableHead}
                                                    className="font-normal text-white"
                                                >
                                                    Quarantine Allowance (Exclude Mandatory
                                                    Quarantine)
                                                </TableCell>
                                                <TableCell
                                                    variant="body"
                                                    className="text-end text-white"
                                                    style={styleTableBody}
                                                >
                                                    {activeContent?.covid?.quarentine}
                                                </TableCell>
                                            </TableRow>

                                            <TableRow>
                                                <TableCell
                                                    variant="head"
                                                    style={styleTableHead}
                                                    className="font-normal text-white"
                                                >
                                                    Emergency Medical Evacuation & Repatriation
                                                </TableCell>
                                                <TableCell
                                                    variant="body"
                                                    className="text-end text-white"
                                                    style={styleTableBody}
                                                >
                                                    {activeContent?.covid?.emeergency}
                                                </TableCell>
                                            </TableRow>

                                            <TableRow>
                                                <TableCell
                                                    variant="head"
                                                    style={styleTableHead}
                                                    className="font-normal text-white"
                                                >
                                                    Repatriation of Mortal Remains
                                                </TableCell>
                                                <TableCell
                                                    variant="body"
                                                    className="text-end text-white"
                                                    style={styleTableBody}
                                                >
                                                    {activeContent?.covid?.repatriation}
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </SwiperSlide>
            </Swiper>

            <Typography
                variant="caption"
                component={"div"}
                className="p-3"
                style={{ lineHeight: "normal", fontSize: "x-small" }}
            >
                *Contents are for illustration purposes only. Please refer to relevant insurance
                website for updated details.
            </Typography>
        </div>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(CarouselComparisonMobile)
