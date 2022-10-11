import React, { useEffect } from "react"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import moment from "moment"

import NomineesTable from "src/pages/dashboard/my_purchase_details/components/tables/NomineesTable"

export default function InsuredDetailsSection({ item }) {
    return (
        <Box>
            <Grid container columns={{ xs: 1, sm: 1, md: 12, lg: 12 }}>
                <Grid item xs={1} sm={1} md={4} lg={4}>
                    <Typography variant="caption" color="primary" className="text-uppercase">
                        {item?.travel_document}
                    </Typography>
                    <Typography variant="body2">{item?.travel_document_value}</Typography>
                </Grid>

                <Grid item xs={1} sm={1} md={4} lg={4}>
                    <Typography variant="caption" color="primary">
                        DOB
                    </Typography>
                    <Typography variant="body2">
                        {moment(item?.dob).format("DD MMM YYYY")}
                    </Typography>
                </Grid>

                <Grid item xs={1} sm={1} md={4} lg={4}>
                    <Typography variant="caption" color="primary">
                        Mobile No.
                    </Typography>
                    <Typography variant="body2">
                        ({item?.country_code}) {item?.mobile_no}
                    </Typography>
                </Grid>

                <Grid item xs={1} sm={1} md={4} lg={4}>
                    <Typography variant="caption" color="primary">
                        Occupation
                    </Typography>
                    <Typography variant="body2" className="text-capitalize">
                        {item?.occupation}
                    </Typography>
                </Grid>

                <Grid item xs={1} sm={1} md={8} lg={8}>
                    <Typography variant="caption" color="primary">
                        Address
                    </Typography>
                    <Typography variant="body2">{item?.address}</Typography>
                </Grid>
            </Grid>

            <NomineesTable data={item?.nominee_list} />
        </Box>
    )
}
