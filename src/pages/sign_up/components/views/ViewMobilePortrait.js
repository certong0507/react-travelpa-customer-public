import React from "react"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"

import SectionLeft from "src/pages/sign_up/components/sections/SectionLeft"
import SectionRight from "src/pages/sign_up/components/sections/SectionRight"

export default function ViewMobilePortrait() {
    return (
        <Box
            sx={{
                height: "100%",
                backgroundColor: "rgb(237, 247, 237)",
            }}
        >
            <Grid container columns={{ xs: 1, sm: 6, md: 6, lg: 12 }} sx={{ height: "inherit" }}>
                <Grid item xs={1} sm={3} md={3} lg={6} className="m-auto">
                    <SectionLeft isMobile />
                </Grid>

                <Grid item xs={1} sm={3} md={3} lg={6} className="m-auto">
                    <SectionRight isMobile />
                </Grid>
            </Grid>
        </Box>
    )
}
