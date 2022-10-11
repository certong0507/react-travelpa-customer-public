import React from "react"
import Box from "@mui/material/Box"

import backgroundImage from "src/assets/images/bannerMalCentral_1.jpeg"

export default function SectionBanner() {
    const bannerStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        transition: "background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s",
        padding: "380px 40px 220px 40px",
    }

    const overlayStyle = {
        backgroundColor: "transparent",
        backgroundImage: "linear-gradient(180deg, #2A2A2A00 13%, #000000 100%)",
        opacity: 0.35,
        mixBlendMode: "multiply",
        // height: "100%",
        // width: "100%",
        top: 0,
        left: 0,
        position: "absolute",
        zIndex: 10,
    }

    return (
        <Box>
            <section style={bannerStyle}>
                <div style={overlayStyle}></div>
                <div>
                    <h1
                        style={{
                            color: "#FFFFFF",
                            fontSize: "47px",
                            fontWeight: "bold",
                            textTransform: "uppercase",
                            textShadow: "4px 4px 10px rgb(0 0 0 / 92%)",
                            zIndex: 11,
                            // position: "fixed",
                            width: "100%",
                        }}
                    >
                        AMAZING EUROPE
                    </h1>
                </div>
            </section>
        </Box>
    )
}
