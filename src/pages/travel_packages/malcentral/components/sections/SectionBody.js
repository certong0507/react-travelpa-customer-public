import React from "react"
import Grid from "@mui/material/Grid"

import EAEMUC from "src/assets/images/malcentral/EAEMUC.jpeg"
import EEEPRG from "src/assets/images/malcentral/EEEPRG.jpeg"
import EIMFCO from "src/assets/images/malcentral/EIMFCO.jpeg"
import ENSARN from "src/assets/images/malcentral/ENSARN.jpeg"
import ESCARN from "src/assets/images/malcentral/ESCARN.jpeg"
import ESFNCE from "src/assets/images/malcentral/ESFNCE.jpeg"
import ESIZRH from "src/assets/images/malcentral/ESIZRH.jpeg"
import ESPBCN from "src/assets/images/malcentral/ESPBCN.jpeg"
import CardTravelPackage from "src/pages/travel_packages/malcentral/components/cards/CardTravelPackage"

export default function SectionBody() {
    const tourPackages = [
        {
            banner: EAEMUC,
            tourTitle: "Jewels of Romantic Alpine Europe",
            tourCaption: "10 DAYS 8 NIGHTS",
            tourCode: "TOUR CODE: EAEMUC",
            link: "https://malcentral.com.my/amazing-europe/jewel-of-romantic-alpine-europe/"
        },
        {
            banner: ESIZRH,
            tourTitle: "Swiss Indulgence & Stunning Lake Como",
            tourCaption: "9 DAYS 7 NIGHTS",
            tourCode: "TOUR CODE: ESIZRH",
            link: "https://malcentral.com.my/amazing-europe/swiss-indulgence/"
        },
        {
            banner: ESFNCE,
            tourTitle: "Southern France - Riviera, Provence & the Alps",
            tourCaption: "9 DAYS 7 NIGHTS",
            tourCode: "TOUR CODE: ESFNCE",
            link: "https://malcentral.com.my/amazing-europe/southern-france-riviera-provence-the-alps/"
        },
        {
            banner: EIMFCO,
            tourTitle: "The Italian Masterpiece  - La Vita Bella",
            tourCaption: "9 DAYS 7 NIGHTS",
            tourCode: "TOUR CODE: EIMFCO",
            link: "https://malcentral.com.my/amazing-europe/italian-masterpiece-la-vita-bella/"
        },
        {
            banner: ESPBCN,
            tourTitle: "Vibrant Spain & Portugal",
            tourCaption: "11 DAYS 9 NIGHTS",
            tourCode: "TOUR CODE: ESPBCN",
            link: "https://malcentral.com.my/amazing-europe/vibrant-spain-portugal/"
        },
        {
            banner: EEEPRG,
            tourTitle: "Enchanting Vibes of Eastern Europe",
            tourCaption: "11 DAYS 9 NIGHTS",
            tourCode: "TOUR CODE: EEEPRG",
            link: "https://malcentral.com.my/amazing-europe/enchanting-vibes-of-eastern-europe/"
        },
        {
            banner: ENSARN,
            tourTitle: "Arctic Norway & Sweden - 'Northern Lights' Splendour",
            tourCaption: "10 DAYS 8 NIGHTS",
            tourCode: "TOUR CODE: ENSARN",
            link: "https://malcentral.com.my/amazing-europe/arctic-norway-sweden-northern-lights-splendour/"
        },
        {
            banner: ESCARN,
            tourTitle: "Magical Scandinavia - Fjords & Capital",
            tourCaption: "11 DAYS 9 NIGHTS",
            tourCode: "TOUR CODE: ESCARN",
            link: "https://malcentral.com.my/amazing-europe/magical-scandinavia/"
        },
    ]
    return (
        <Grid container columnSpacing={3} columns={{ sm: 12, md: 12, lg: 12 }}>
            {tourPackages?.map((item, index) => (
                <Grid item key={index} sm={6} md={3} lg={3} className="w-100">
                    <CardTravelPackage item={item} />
                </Grid>
            ))}
        </Grid>
    )
}
