import React, { Suspense } from "react"
import { Outlet } from "react-router-dom"
import { CSpinner, CContainer } from "@coreui/react"

import { MobilePortraitView } from "src/utils/functions"

export default function BodyDashboardMobilePortrait() {
    return (
        <MobilePortraitView>
            <CContainer className="mt-3 pb-5 h-100vh">
                <Suspense fallback={<CSpinner color="rgb(237, 247, 237)" />}>
                    <Outlet />
                </Suspense>
            </CContainer>
        </MobilePortraitView>
    )
}
