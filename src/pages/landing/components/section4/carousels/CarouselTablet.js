import React from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { SwiperSlide } from "swiper/react"

import { TabletView } from "src/utils/functions"
import SwiperBanner from "src/pages/landing/components/section4/swipers/SwiperBanner"

export default function CarouselTablet({ overlayStyle, styleBanner, styleBannerMalCentral }) {
    return (
        <TabletView>
            <SwiperBanner>
                <SwiperBanner>
                    <SwiperSlide>
                        <Box>
                            <section style={styleBanner}>
                                <div
                                    className="mx-5"
                                    style={{
                                        top: "40%",
                                        zIndex: 11,
                                        position: "fixed",
                                        width: "100%",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            color: "#FFFFFF",
                                            fontSize: "35px",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        Stay Insured, Travel Assured
                                    </Typography>
                                    <Typography
                                        sx={{
                                            color: "#ecb422",
                                            fontSize: "20px",
                                            fontWeight: "bold",
                                            marginLeft: "7%",
                                            marginTop: "1%",
                                            letterSpacing: "9px",
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
        </TabletView>
    )
}
