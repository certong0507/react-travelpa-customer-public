import React from "react"
import { connect } from "react-redux"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import { IoCloseCircle, IoCheckmarkCircle } from "react-icons/io5"

export const CardPaymentReturnStatus = ({ paymentReturnData }) => {
    return (
        <Box sx={{ width: "100%" }}>
            <Card variant="outlined" className="p-2" style={{ border: "none" }}>
                <CardContent className="p-0">
                    <div className="p-2" style={{ backgroundColor: "rgb(237, 247, 237)" }}>
                        <Typography variant="subtitle2" style={{ fontSize: "medium" }}>
                            {paymentReturnData?.package_name}
                        </Typography>
                    </div>

                    <div
                        className="mt-1 d-flex justify-content-between"
                        style={{ backgroundColor: "rgb(237, 247, 237)" }}
                    >
                        <div className="p-2 w-100">
                            <b>Payment Status</b>
                        </div>
                        <div
                            className="p-2 w-100"
                            style={{
                                color: paymentReturnData?.paymentSuccess ? "#009C99" : "#D32f2f",
                            }}
                        >
                            {paymentReturnData?.paymentStatusMessage}
                        </div>
                    </div>

                    <div
                        className="mt-1 d-flex justify-content-between"
                        style={{ backgroundColor: "rgb(237, 247, 237)" }}
                    >
                        <div className="p-2 w-100">
                            <b>Payment Ref No.</b>
                        </div>
                        <div className="p-2 w-100">{paymentReturnData?.referenceNumber}</div>
                    </div>

                    <div
                        className="mt-1 d-flex justify-content-between"
                        style={{ backgroundColor: "rgb(237, 247, 237)" }}
                    >
                        {!paymentReturnData?.paymentSuccess && (
                            <>
                                <div className="p-2 w-100">
                                    <b>Error</b>
                                </div>
                                <div className="p-2 w-100">{paymentReturnData?.errorMessage}</div>
                            </>
                        )}
                    </div>

                    <div className="p-2" style={{ backgroundColor: "rgb(237, 247, 237)" }}>
                        {!paymentReturnData?.paymentSuccess && (
                            <IoCloseCircle
                                color="#D32f2f"
                                size="1.4em"
                                style={{ marginRight: "1%" }}
                            />
                        )}

                        {paymentReturnData?.paymentSuccess && (
                            <IoCheckmarkCircle
                                color="#009C99"
                                size="1.4em"
                                style={{ marginRight: "1%" }}
                            />
                        )}

                        {paymentReturnData?.message}
                    </div>
                </CardContent>
            </Card>
        </Box>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(CardPaymentReturnStatus)
