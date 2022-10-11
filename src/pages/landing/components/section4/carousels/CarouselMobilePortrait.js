import React from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { SwiperSlide } from "swiper/react"

import SwiperBanner from "src/pages/landing/components/section4/swipers/SwiperBanner"
import { MobilePortraitView } from "src/utils/functions"

export default function CarouselMobilePortrait({
    overlayStyle,
    styleBanner,
    styleBannerMalCentral,
}) {
    const styleTabletBanner = {
        ...styleBanner,
        padding: "380px 10px 220px 10px",
    }

    return (
        <MobilePortraitView>
            <SwiperBanner>
                <SwiperBanner>
                    <SwiperBanner>
                        <SwiperSlide>
                            <Box>
                                <section style={styleTabletBanner}>
                                    <div
                                        className="mx-5"
                                        style={{
                                            top: "50%",
                                            zIndex: 11,
                                            position: "fixed",
                                            width: "100%",
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                color: "#FFFFFF",
                                                fontSize: "20px",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            Stay Insured, Travel Assured
                                        </Typography>
                                        <Typography
                                            sx={{
                                                color: "#ecb422",
                                                fontSize: "10px",
                                                fontWeight: "bold",
                                                marginLeft: "15%",
                                                marginTop: "1%",
                                                letterSpacing: "3px",
                                            }}
                                        >
                                            FAST - EASY - SAFE
                                        </Typography>
                                    </div>
                                </section>
                            </Box>
                        </SwiperSlide>

                        <SwiperSlide>
                            <Box>
                                <section style={styleBannerMalCentral}>
                                    <div style={overlayStyle}></div>
                                    <div>
                                        <h1
                                            style={{
                                                color: "#FFFFFF",
                                                fontSize: "27px",
                                                fontWeight: "bold",
                                                textTransform: "uppercase",
                                                textShadow: "4px 4px 10px rgb(0 0 0 / 92%)",
                                                zIndex: 11,
                                                position: "fixed",
                                                width: "100%",
                                            }}
                                        >
                                            AMAZING EUROPE
                                        </h1>
                                    </div>
                                </section>
                            </Box>
                        </SwiperSlide>
                    </SwiperBanner>
                </SwiperBanner>
            </SwiperBanner>
        </MobilePortraitView>
    )
}
