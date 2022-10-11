import React from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { CImage } from "@coreui/react"

import logo from "src/assets/logo.png"

export default function SectionLeft({ isDesktop, isTablet, isMobile }) {
    const showLogo = () => {
        if (isDesktop) {
            return <CImage fluid src={logo} style={{ width: "45%" }} className="mx-auto pb-5" />
        }

        if (isTablet) {
            return <CImage fluid src={logo} style={{ width: "100%" }} className="mx-auto pb-5" />
        }

        if (isMobile) {
            return <CImage fluid src={logo} style={{ width: "100%" }} className="mx-auto pb-5" />
        }
    }
    return (
        <Box className="d-flex flex-column m-5">
            {showLogo()}

            <Typography
                variant="subtitle1"
                color="#009c99"
                className={`${isDesktop ? "w-80" : "w-100"} text-center m-auto`}
                sx={{ fontSize: "1rem" }}
            >
                Top Insurance Agency in having serviced the industry for nearly 20 years, with its
                management team 10 persons to cater Insurance needs in Malaysia.
            </Typography>
        </Box>
    )
}
