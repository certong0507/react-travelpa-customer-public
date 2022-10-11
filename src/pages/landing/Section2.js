import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { useNavigate } from "react-router-dom"
import Button from "@mui/material/Button"
import { useMediaQuery } from "react-responsive"
import {
    TabletView,
    DesktopView,
    MobilePortraitView,
} from "src/utils/functions"

import TableInsuranceComparison from "src/pages/landing/components/section2/tables/TableInsuranceComparison"
import CarouselComparisonMobile from "src/pages/landing/components/section2/carousel/CarouselComparisonMobile"

export const Section2 = ({}) => {
    const navigate = useNavigate()
    const isMobile = useMediaQuery({ maxWidth: 767 })
    const isPortrait = useMediaQuery({ query: "(orientation: portrait)" })

    return (
        <section style={{ backgroundColor: "#e5e5e5" }} id="section2">
            <div
                className="pt-5"
                style={{
                    backgroundColor: "#009c99",
                    color: "#ffffff",
                    height: isMobile ? "224px" : "374px",
                }}
            >
                <h2 className="text-center mt-5"> Stay Insured, Travel Assured</h2>
            </div>

            <TabletView>
                <CarouselComparisonMobile />
            </TabletView>

            <DesktopView>
                <TableInsuranceComparison />
            </DesktopView>

            <MobilePortraitView>
                <CarouselComparisonMobile />
            </MobilePortraitView>

            <div
                className="d-flex justify-content-center pt-5 pb-4"
                style={{ backgroundColor: "rgb(237, 247, 237)" }}
            >
                <Button disableElevation variant="contained" onClick={() => navigate("/travel-insurance")}>
                    Purchase Insurance
                </Button>
            </div>
        </section>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Section2)
