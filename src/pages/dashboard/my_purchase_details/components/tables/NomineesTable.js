import React from "react"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import moment from "moment"

export default function NomineesTable({ data }) {
    return (
        <TableContainer
            component={Paper}
            elevation={0}
            className="mt-4"
            sx={{ backgroundColor: "rgb(237, 247, 237)" }}
        >
            <Typography variant="subtitle2" color="#2a4a4b">
                <b>Nominees</b>
            </Typography>
            <Table sx={{ minWidth: 650 }} size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <Typography variant="caption">
                                <b>Name</b>
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography variant="caption">
                                <b>Travel Document</b>
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography variant="caption">
                                <b>DOB</b>
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography variant="caption">
                                <b>Mobile No.</b>
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography variant="caption">
                                <b>Relationship</b>
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography variant="caption">
                                <b>Share (%)</b>
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((item) => (
                        <TableRow
                            key={item.id}
                            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                        >
                            <TableCell>
                                <Typography variant="body2">{item.name}</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography component="div" noWrap>
                                    <Typography
                                        component="span"
                                        variant="caption"
                                        color="primary"
                                        className="text-uppercase"
                                    >
                                        {item.travel_document}
                                    </Typography>{" "}
                                    <Typography component="span">
                                        <Typography component="span" variant="body2">
                                            {item.travel_document_value}
                                        </Typography>
                                    </Typography>
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="body2">
                                    {moment(item.dob).format("DD MMM YYYY")}
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="body2">{item.mobile_no}</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="body2">{item.relationship}</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="body2">{item.share}</Typography>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
