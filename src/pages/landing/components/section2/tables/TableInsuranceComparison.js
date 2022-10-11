import React from "react"
import { connect } from "react-redux"
import Table from "@mui/material/Table"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableRow from "@mui/material/TableRow"
import TableBody from "@mui/material/TableBody"
import Paper from "@mui/material/Paper"
import { makeStyles } from "@mui/styles"
import { Typography } from "@mui/material"

import logoAIG from "src/assets/logoAIG.png"
import logoAllianz from "src/assets/logoAllianz.png"
import logoCHUBB from "src/assets/logoCHUBB.png"
import logoRHB from "src/assets/logoRHB.png"
import logoTune from "src/assets/logoTune.png"
import logoAXA from "src/assets/logoAXA.png"

const useStyles = makeStyles({
    tableRightBorder: { borderRight: "1px solid rgba(224, 224, 224, 1)" },
})

export const TableInsuranceComparison = (props) => {
    const classes = useStyles()

    return (
        <div
            className="d-flex justify-content-center"
            style={{ backgroundColor: "rgb(237, 247, 237)" }}
        >
            <div className="d-flex justify-content-evenly w-75" style={{ marginTop: "-5%" }}>
                <div>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} size="small">
                            <TableBody>
                                <TableRow>
                                    <TableCell
                                        variant="head"
                                        className={`text-center ${classes.tableRightBorder}`}
                                    ></TableCell>
                                    <TableCell
                                        variant="head"
                                        className={`text-center ${classes.tableRightBorder}`}
                                    >
                                        <img src={logoRHB} width={90} />
                                    </TableCell>
                                    <TableCell
                                        variant="head"
                                        className={`text-center ${classes.tableRightBorder}`}
                                    >
                                        <img src={logoCHUBB} width={125} />
                                    </TableCell>
                                    <TableCell
                                        variant="head"
                                        className={`text-center ${classes.tableRightBorder}`}
                                    >
                                        <img src={logoAIG} width={90} />
                                    </TableCell>
                                    <TableCell
                                        variant="head"
                                        className={`text-center ${classes.tableRightBorder}`}
                                    >
                                        <img src={logoTune} width={80} />
                                    </TableCell>
                                    <TableCell
                                        variant="head"
                                        className={`text-center ${classes.tableRightBorder}`}
                                    >
                                        <img src={logoAllianz} width={115} />
                                    </TableCell>
                                    <TableCell
                                        variant="head"
                                        className={`text-center ${classes.tableRightBorder}`}
                                    >
                                        <img src={logoAXA} width={60} />
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell
                                        variant="head"
                                        colSpan={7}
                                        className={classes.tableRightBorder}
                                        style={{
                                            backgroundColor: "rgb(42, 74, 75)",
                                            color: "#ffffff",
                                        }}
                                    >
                                        Accidental Death and Total Disablement
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">
                                            <b>Adult</b>
                                        </Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">RM 300,000.00</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">RM 325,000.00</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">RM 500,000.00</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">RM 300,000.00</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">RM 500,000.00</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">RM 450,000.00</Typography>
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">
                                            <b>Child</b>
                                        </Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">RM 75,000.00</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">RM 81,250.00</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">RM 125,000.00</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">RM 50,000.00</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">RM 250,000.00</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">RM 450,000.00</Typography>
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell variant="head">
                                        <Typography variant="caption">
                                            <b>Medical Expenses</b>
                                        </Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">RM 500,000.00</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">Yes</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">RM 10,000,000.00</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">RM 300,000.00</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">RM 350,000.00</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">RM 450,000.00</Typography>
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">
                                            <b>Due to Accident</b>
                                        </Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">Yes</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">Yes</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">Yes</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">Yes</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">
                                            RM 175,000.00 ( Child )
                                        </Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">Yes</Typography>
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">
                                            Up to age 69 years
                                        </Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">Yes</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">RM 2,000,000.00</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">Yes</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">Yes</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">Yes</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">Yes</Typography>
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">
                                            Above age 69 years
                                        </Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">Yes</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">RM 500,000.00</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">Yes</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">Yes</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">Yes</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">Yes</Typography>
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell colSpan={7} className={classes.tableRightBorder}>
                                        <Typography variant="caption">Due to Sickness</Typography>
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">
                                            Up to age 69 years
                                        </Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">Yes</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">RM 1,000,000.00</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">Yes</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">Yes</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">Yes</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">Yes</Typography>
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">
                                            Above age 69 years
                                        </Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">Yes</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">RM 150,000.00</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">Yes</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">Yes</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">Yes</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">Yes</Typography>
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell
                                        colSpan={7}
                                        variant="head"
                                        className={classes.tableRightBorder}
                                    >
                                        <Typography variant="caption">
                                            <b>Travel Cancellation</b>
                                        </Typography>
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">
                                            Cancellation Expenses
                                        </Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">RM 30,000.00</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">Actual Cost</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">RM 30,000.00</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">RM 15,000.00</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">RM 25,000.00</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">RM 20,000.00</Typography>
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">
                                            Travel Curtailment
                                        </Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">RM 30,000.00</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">Actual Cost</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">RM 30,000.00</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">RM 18,000.00</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">RM 25,000.00</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">RM 20,000.00</Typography>
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell variant="head" className={classes.tableRightBorder}>
                                        <Typography variant="caption">
                                            <b>Full Terrorism Cover</b>
                                        </Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">Covered</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">Covered</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">Not covered</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">Not covered</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">Covered</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">Covered</Typography>
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell variant="head" className={classes.tableRightBorder}>
                                        <Typography variant="caption">
                                            <b>Cashless admission - on major city</b>
                                        </Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">No</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">Yes</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">Yes</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">No</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">No</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">No</Typography>
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell
                                        variant="head"
                                        colSpan={7}
                                        style={{
                                            backgroundColor: "rgb(42, 74, 75)",
                                            color: "#ffffff",
                                        }}
                                    >
                                        <Typography variant="caption">
                                            <b>COVID-19</b>
                                        </Typography>
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell className={classes.tableRightBorder} variant="head">
                                        <Typography variant="caption">
                                            <b>COVID-19 Coverages</b>
                                        </Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">Yes</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">Yes</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">Yes</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">
                                            (due to Stage 3 to Stage 5 treatment)
                                        </Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">Yes</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">Yes</Typography>
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">
                                            Medical Expenses (incurred Overseas)
                                        </Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">RM 500,000.00</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">RM 450,000.00</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">RM 800,000.00</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">RM 300,000.00</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">RM 350,000.00</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">RM 450,000.00</Typography>
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">
                                            Travel Cancellation / Curtailment
                                        </Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">
                                            RM 30,000.00 ( admitted hospital )
                                        </Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">RM 50,000.00</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">RM 30,000.00</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">RM 5,000.00</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">RM 25,000.00</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">RM 20,000.00</Typography>
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">
                                            Out-of-country COVID-19 Diagnosis Quarantine Allowance
                                            (Up to 14 days)
                                        </Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">N/A</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">N/A</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">
                                            RM 500.00 / day up to RM 7,000.00
                                        </Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">N/A</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">N/A</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">N/A</Typography>
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">
                                            Daily Hospital Income - Maximum coverage
                                        </Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">
                                            RM 250.00 per day up to 30 days
                                        </Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">
                                            RM 350.00 per day up to 60 days
                                        </Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">N/A</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">
                                            RM 150.00 per full day up to RM 4,000.00
                                        </Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">
                                            RM 350.00 per day up to RM 15,000.00
                                        </Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">
                                            RM 350.00 per day up to RM 10,500.00
                                        </Typography>
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">
                                            Quarantine Allowance (Exclude Mandatory Quarantine)
                                        </Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>N/A</TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">N/A</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">N/A</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">
                                            RM 100.00 per full day up to RM 1,400.00
                                        </Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">N/A</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">N/A</Typography>
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">
                                            Emergency Medical Evacuation & Repatriation
                                        </Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">RM 3,000,000.00</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">Unlimited</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">Unlimited</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">RM 300,000.00</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">RM 10,000,000.00</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">Unlimited</Typography>
                                    </TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">
                                            Repatriation of Mortal Remains
                                        </Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">RM 3,000,000.00</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">Unlimited</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">Unlimited</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">RM 300,000.00</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">RM 10,000,000.00</Typography>
                                    </TableCell>
                                    <TableCell className={classes.tableRightBorder}>
                                        <Typography variant="caption">Unlimited</Typography>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Typography variant="caption">
                        *Terms & Conditions apply. Please refer to Policy Schedule or Product Plan
                        Details for further information.
                    </Typography>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(TableInsuranceComparison)
