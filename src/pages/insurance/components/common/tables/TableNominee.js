import React from "react"
import Grid from "@mui/material/Grid"
import { BiTrash } from "react-icons/bi"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import IconButton from "@mui/material/IconButton"
import Box from "@mui/material/Box"
import { format } from "date-fns"

function TableNominee({ remove, data }) {
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
                                    <b>Mobile No</b>
                                </TableCell>
                                <TableCell>
                                    <b>Relationship</b>
                                </TableCell>
                                <TableCell>
                                    <b>Share (%)</b>
                                </TableCell>
                                {remove && <TableCell style={{ width: "5%" }}></TableCell>}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data?.map(
                                (item, index) =>
                                    item.nomineeName.length > 0 && (
                                        <TableRow
                                            key={index}
                                            sx={{
                                                "&:last-child td, &:last-child th": {
                                                    border: 0,
                                                },
                                            }}
                                        >
                                            <TableCell style={{ width: "19%" }}>
                                                {item.nomineeName}
                                            </TableCell>
                                            <TableCell
                                                style={{ width: "19%" }}
                                                className="text-uppercase"
                                            >
                                                {item.nomineeTravelDocument}{" "}
                                                {item.nomineeTravelDocumentValue}
                                            </TableCell>
                                            <TableCell style={{ width: "19%" }}>
                                                {item.nomineeDOB &&
                                                    format(new Date(item.nomineeDOB), "d MMM yyyy")}
                                            </TableCell>
                                            <TableCell>{item.nomineeCountryCode}{item.nomineeMobileNo}</TableCell>
                                            <TableCell>{item.nomineeRelationship}</TableCell>
                                            <TableCell>{item.nomineeShare}</TableCell>
                                            {remove && (
                                                <TableCell style={{ width: "5%" }}>
                                                    <IconButton
                                                        onClick={() => remove(index)}
                                                        color="error"
                                                        size="small"
                                                    >
                                                        <BiTrash />
                                                    </IconButton>
                                                </TableCell>
                                            )}
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
