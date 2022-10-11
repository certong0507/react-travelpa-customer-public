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

function InsuredTable({ remove, data }) {
    return (
        <Box sx={{ border: "thin solid rgba(0, 0, 0, 0.12)", borderRadius: "4px" }}>
            <Grid item xs={12} className="pl-0">
                <TableContainer>
                    <Table size="small" >
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ width: "19%" }}>Name</TableCell>
                                <TableCell style={{ width: "19%" }}>NRIC</TableCell>
                                <TableCell style={{ width: "19%" }}>Address</TableCell>
                                <TableCell>Occupation</TableCell>
                                <TableCell>Email</TableCell>
                                {remove && <TableCell style={{ width: "5%" }}></TableCell>}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data?.map((item, index) => (
                                <TableRow
                                    key={index}
                                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                >
                                    <TableCell style={{ width: "19%" }}>
                                        {item.insuredFullName}
                                    </TableCell>
                                    <TableCell style={{ width: "19%" }}>
                                        {item.insuredTravelDocumentValue}
                                    </TableCell>
                                    <TableCell style={{ width: "19%" }}>
                                        {item.insuredAddress}
                                    </TableCell>
                                    <TableCell>{item.insuredOccupation}</TableCell>

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
                            ))}

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

export default InsuredTable
