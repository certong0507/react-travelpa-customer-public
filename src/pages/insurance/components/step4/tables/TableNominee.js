import React from "react"
import Grid from "@mui/material/Grid"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Box from "@mui/material/Box"
import { format } from "date-fns"

function TableNominee({ data }) {
    return (
        <Box sx={{ border: "thin solid rgba(0, 0, 0, 0.12)", borderRadius: "4px" }}>
            <Grid item xs={12} className="pl-0">
                <TableContainer>
                    <Table size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ width: "19%" }}>
                                    <b>Name</b>
                                </TableCell>
                                <TableCell style={{ width: "19%" }}>
                                    <b>Travel Document</b>
                                </TableCell>
                                <TableCell style={{ width: "19%" }}>
                                    <b>DOB</b>
                                </TableCell>
                                <TableCell>
                                    <b>Relationship</b>
                                </TableCell>
                                <TableCell>
                                    <b>Mobile Number</b>
                                </TableCell>
                                <TableCell>
                                    <b>Share (%)</b>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data?.map(
                                (item, index) =>
                                    item.name.length > 0 && (
                                        <TableRow
                                            key={index}
                                            sx={{
                                                "&:last-child td, &:last-child th": {
                                                    border: 0,
                                                },
                                            }}
                                        >
                                            <TableCell style={{ width: "19%" }}>
                                                {item.name}
                                            </TableCell>
                                            <TableCell
                                                style={{ width: "19%" }}
                                                className="text-uppercase"
                                            >
                                                {item.travel_document} {item.travel_document_value}
                                            </TableCell>
                                            <TableCell style={{ width: "19%" }}>
                                                {item.dob &&
                                                    format(new Date(item.dob), "d MMM yyyy")}
                                            </TableCell>
                                            <TableCell>{item.relationship}</TableCell>
                                            <TableCell>
                                                {item.mobile_no
                                                    ? `(${item.country_code}) ${item.mobile_no}`
                                                    : "-"}
                                            </TableCell>
                                            <TableCell>{item.share}</TableCell>
                                        </TableRow>
                                    ),
                            )}

                            {data?.length === 0 && (
                                <TableRow
                                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                >
                                    <TableCell colSpan={6}>No record</TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Box>
    )
}

export default TableNominee
