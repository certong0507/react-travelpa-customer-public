import React from "react"

import CarouselDesktop from "src/pages/landing/components/section4/carousels/CarouselDesktop"
import CarouselMobilePortrait from "src/pages/landing/components/section4/carousels/CarouselMobilePortrait"
import CarouselTablet from "src/pages/landing/components/section4/carousels/CarouselTablet"
import backgroundImageMalCentral from "src/assets/images/bannerMalCentral_1.jpeg"
import backgroundImage from "src/assets/images/landing_plain_bg.png"

export default function Banner() {
    const overlayStyle = {
        backgroundColor: "transparent",
        backgroundImage: "linear-gradient(180deg, #2A2A2A00 13%, #000000 100%)",
        opacity: 0.35,
        mixBlendMode: "multiply",
        height: "100%",
        width: "100%",
        top: 0,
        left: 0,
        position: "absolute",
        zIndex: 10,
    }

    const styleBannerMalCentral = {
        backgroundImage: `url(${backgroundImageMalCentral})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        transition: "background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s",
        padding: "380px 40px 220px 40px",
    }

    const styleBanner = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        padding: "380px 40px 220px 40px",
    }

    return (
        <section>
            <CarouselDesktop
                overlayStyle={overlayStyle}
                styleBanner={styleBanner}
                styleBannerMalCentral={styleBannerMalCentral}
            />
            <CarouselTablet
                overlayStyle={overlayStyle}
                styleBanner={styleBanner}
                styleBannerMalCentral={styleBannerMalCentral}
            />
            <CarouselMobilePortrait
                overlayStyle={overlayStyle}
                styleBanner={styleBanner}
                styleBannerMalCentral={styleBannerMalCentral}
            />
        </section>
    )
}
