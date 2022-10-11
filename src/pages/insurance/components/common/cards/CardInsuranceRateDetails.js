import React from "react"
import { connect } from "react-redux"
import Card from "@mui/material/Card"
import Divider from "@mui/material/Divider"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"

export const CardInsuranceRateDetails = ({ packageRateDetails }) => {
    const labelStyle = {
        fontSize: "16px",
        marginBottom: "1rem",
        color: "#3D3D3D",
        fontWeight: "700",
    }

    const valueStyle = {
        fontSize: "1rem",
        marginBottom: "1rem",
        color: "#808080",
        fontWeight: "700",
    }

    return (
        <Box sx={{ width: "100%" }}>
            <Card variant="outlined" className="p-2" style={{ border: "2px solid #009c99" }}>
                <CardContent>
                    <div className="mb-3">
                        <Typography variant="div" className="summary-card-title">
                            <b>Quotation Summary</b>
                        </Typography>
                    </div>

                    <div className="d-flex justify-content-between align-self-center">
                        <Typography variant="body2" style={labelStyle}>
                            Product
                        </Typography>

                        <Typography variant="body2" style={valueStyle}>
                            {packageRateDetails?.package_name || "-"}
                        </Typography>
                    </div>

                    <div className="d-flex justify-content-between align-self-center">
                        <Typography variant="body2" style={labelStyle}>
                            Premium (RM)
                        </Typography>

                        <Typography variant="body2" style={valueStyle}>
                            {packageRateDetails?.package_rate?.premium || "-"}
                        </Typography>
                    </div>

                    <div className="d-flex justify-content-between align-self-center">
                        <Typography variant="body2" style={labelStyle}>
                            Service Tax 6%
                        </Typography>

                        <Typography variant="body2" style={valueStyle}>
                            {packageRateDetails?.package_rate?.service_tax || "-"}
                        </Typography>
                    </div>

                    <div className="d-flex justify-content-between align-self-center">
                        <Typography variant="body2" style={labelStyle}>
                            Stamp Duty
                        </Typography>

                        <Typography variant="body2" style={valueStyle}>
                            {packageRateDetails?.package_rate?.stamp_duty || "-"}
                        </Typography>
                    </div>

                    {packageRateDetails?.package_rate?.total_travel_delay_upgrade_fee !== null &&
                        packageRateDetails?.package_rate?.total_travel_delay_upgrade_fee !==
                            "0.00" && (
                            <div className="d-flex justify-content-between align-self-center">
                                <Typography variant="body2" style={labelStyle}>
                                    Travel Delay Upgrade
                                </Typography>

                                <Typography variant="body2" style={valueStyle}>
                                    {packageRateDetails?.package_rate
                                        ?.total_travel_delay_upgrade_fee || "-"}
                                </Typography>
                            </div>
                        )}

                    <Divider className="mt-3 mb-4"></Divider>

                    <div
                        className="d-flex justify-content-between align-self-center"
                        style={{ backgroundColor: "rgb(237, 247, 237)", padding: "1%" }}
                    >
                        <Typography variant="body2" style={labelStyle}>
                            Total Premium (RM)
                        </Typography>

                        <Typography variant="body2" style={valueStyle}>
                            {packageRateDetails?.package_rate?.total_premium || "-"}
                        </Typography>
                    </div>
                </CardContent>
            </Card>
        </Box>
    )
}

const mapStateToProps = (state) => ({
    packageRateDetails: state.insurance.packageRateDetails,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(CardInsuranceRateDetails)
