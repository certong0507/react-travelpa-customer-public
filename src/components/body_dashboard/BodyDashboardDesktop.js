import React, { Suspense } from "react"
import Grid from "@mui/material/Grid"
import { Outlet } from "react-router-dom"
import { CSpinner, CContainer } from "@coreui/react"

import { DesktopView } from "src/utils/functions"
import { AppSidebar } from "src/components"

export default function BodyDashboardDesktop() {
    return (
        <DesktopView>
            <CContainer className="mt-5" style={{ minHeight: "100vh" }}>
                <Grid container columns={{ md: 12, lg: 12 }}>
                    <Grid item md={3} lg={2}>
                        <AppSidebar />
                    </Grid>
                    <Grid item md={9} lg={10}>
                        <Suspense fallback={<CSpinner color="rgb(237, 247, 237)" />}>
                            <Outlet />
                        </Suspense>
                    </Grid>
                </Grid>
            </CContainer>
        </DesktopView>
    )
}
