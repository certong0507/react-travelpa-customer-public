import React from "react"
import Box from "@mui/material/Box"
import { Navigation, Pagination, Autoplay } from "swiper"
import { Swiper } from "swiper/react"
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

export default function SwiperBanner({ children }) {
    return (
        <Box sx={{ position: "relative" }}>
            <Box sx={{ position: "absolute", zIndex: 20, right: 20, top: "40%" }}>
                <MdNavigateNext className="swiper_white_button_next" size="2.5rem" />
            </Box>

            <Box sx={{ position: "absolute", zIndex: 20, left: 20, top: "40%" }}>
                <MdNavigateBefore className="swiper_white_button_prev" size="2.5rem" />
            </Box>

            <Swiper
                className="mb-5"
                autoplay
                loop={true}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{
                    clickable: true,
                }}
                navigation={{
                    nextEl: ".swiper_white_button_next",
                    prevEl: ".swiper_white_button_prev",
                }}
                modules={[Pagination, Navigation, Autoplay]}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {children}
            </Swiper>
        </Box>
    )
}
