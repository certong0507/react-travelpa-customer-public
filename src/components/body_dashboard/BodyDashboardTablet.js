import React, { Suspense } from "react"
import Grid from "@mui/material/Grid"
import { Outlet } from "react-router-dom"
import { CSpinner, CContainer } from "@coreui/react"

import { TabletView } from "src/utils/functions"
import { AppSidebar } from "src/components"

export default function BodyDashboardTablet() {
    return (
        <TabletView>
            <CContainer className="mt-3 pb-5">
                <Grid container columns={{ sm: 12, md: 12, lg: 12 }}>
                    <Grid item sm={4} md={2} lg={2}>
                        <AppSidebar />
                    </Grid>
                    <Grid item sm={8} md={10} lg={10}>
                        <Suspense fallback={<CSpinner color="rgb(237, 247, 237)" />}>
                            <Outlet />
                        </Suspense>
                    </Grid>
                </Grid>
            </CContainer>
        </TabletView>
    )
}
