import React, { useEffect, useState } from "react"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import Pagination from "@mui/material/Pagination"
import Stack from "@mui/material/Stack"
import moment from "moment"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { FiDownload } from "react-icons/fi"

import { doDownloadQuotation, doGetMyPurchaseList } from "src/action/api_actions"

export const MyPurchase = ({
    doDownloadQuotation,
    doGetMyPurchaseList,
    myPurchaseList,
    myPurchaseListPageCount,
    qoutationPDF,
}) => {
    const [selectedRow, setSelectedRow] = useState(null)

    useEffect(() => {
        setSelectedRow(null)
        doGetMyPurchaseList(1)
    }, [])

    useEffect(() => {
        if (selectedRow && qoutationPDF) {
            const linkSource = qoutationPDF
            const downloadLink = document.createElement("a")
            const fileName = `${selectedRow?.reference_number}_Quotation`
            downloadLink.href = linkSource
            downloadLink.download = fileName
            downloadLink.click()
        }
    }, [qoutationPDF])

    useEffect(() => {
        if (selectedRow) {
            doDownloadQuotation(selectedRow?.id)
        }
    }, [selectedRow])

    const handlePageChange = (event, page) => {
        doGetMyPurchaseList(page)
    }

    const handleDownloadQuotation = (row) => {
        setSelectedRow(row)
    }
    return (
        <Box>
            <Card variant="outlined">
                <CardContent>
                    <Typography variant="h6" className="mb-3">
                        My Purchase
                    </Typography>

                    <TableContainer component={Paper} elevation={0}>
                        <Table sx={{ minWidth: 650 }} size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Order No. </TableCell>
                                    <TableCell align="center">Name</TableCell>
                                    <TableCell align="center">Package</TableCell>
                                    <TableCell align="center">Purchase Date</TableCell>
                                    <TableCell align="center" colSpan={3}></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {myPurchaseList?.map((row, index) => (
                                    <TableRow
                                        key={row.id}
                                        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                    >
                                        <TableCell scope="row">
                                            <Link
                                                to={`/dashboard/my-purchase/${row?.id}`}
                                                style={{ color: "#009c99" }}
                                            >
                                                {row?.reference_number}
                                            </Link>
                                        </TableCell>
                                        <TableCell align="center">{row?.customer_name}</TableCell>
                                        <TableCell align="center">{row?.package_name}</TableCell>
                                        <TableCell align="center">
                                            {moment(row?.created_at).format("DD MMM YYYY")}
                                        </TableCell>
                                        <TableCell align="center">
                                            {row?.policy_pdf_url && (
                                                <a download href={row?.policy_pdf_url} target="_">
                                                    <Button
                                                        size="small"
                                                        variant="text"
                                                        className="text-decoration-underline"
                                                    >
                                                        Download Policy
                                                    </Button>
                                                </a>
                                            )}
                                        </TableCell>
                                        <TableCell align="center">
                                            <Button
                                                disableElevation
                                                size="small"
                                                variant="contained"
                                                onClick={() => handleDownloadQuotation(row)}
                                            >
                                                <FiDownload className="mx-1" size="1.05rem" /> Quotation
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>

                        <Box className="d-flex justify-content-center mt-5">
                            <Stack spacing={2}>
                                <Pagination
                                    color="primary"
                                    count={myPurchaseListPageCount}
                                    shape="rounded"
                                    onChange={handlePageChange}
                                />
                            </Stack>
                        </Box>
                    </TableContainer>
                </CardContent>
            </Card>
        </Box>
    )
}

const mapStateToProps = (state) => ({
    myPurchaseList: state.myPurchase.myPurchaseList,
    myPurchaseListPageCount: state.myPurchase.myPurchaseListPageCount,
    qoutationPDF: state.myPurchase.qoutationPDF,
})

const mapDispatchToProps = { doDownloadQuotation, doGetMyPurchaseList }

export default connect(mapStateToProps, mapDispatchToProps)(MyPurchase)
