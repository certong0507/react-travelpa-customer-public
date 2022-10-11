import React from "react"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import { useMediaQuery } from "react-responsive"

import SectionLeft from "src/pages/sign_up/components/sections/SectionLeft"
import SectionRight from "src/pages/sign_up/components/sections/SectionRight"

export default function ViewsTablet() {
    const isLandscape = useMediaQuery({ query: "(orientation: landscape)" })

    return (
        <Box
            sx={{
                height: isLandscape ? "100%" : "100vh",
                backgroundColor: "rgb(237, 247, 237)",
            }}
        >
            <Grid container columns={{ xs: 1, sm: 6, md: 6, lg: 12 }} sx={{ height: "inherit" }}>
                <Grid item xs={1} sm={3} md={3} lg={6} className="m-auto">
                    <SectionLeft isTablet />
                </Grid>

                <Grid item xs={1} sm={3} md={3} lg={6} className="m-auto">
                    <SectionRight isTablet />
                </Grid>
            </Grid>
        </Box>
    )
}
