import React from "react"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"

import sectionImage from "src/assets/images/landing_section_3.png"

export default function Section3({ show }) {
    return (
        <div className="mb-5 mt-5">
            <div className="d-flex justify-content-center mt-5">
                <img src={sectionImage} alt="" className="w-25" />
            </div>
            <Container className="d-flex mt-5">
                <div style={{ textAlign: "end", marginRight: "2%" }}>
                    <Typography gutterBottom variant="h2">
                        01
                    </Typography>
                    <Typography gutterBottom variant="h5">
                        Background
                    </Typography>
                    <Typography variant="caption">
                        We are the amongst the top Insurance Agency in having serviced the industry
                        for nearly 20 years, with its management team 10 persons to cater Insurance
                        needs in Malaysia. We have a team of 10 professional deal with over 200
                        clients, making us leaders in the industry unparalleled experience. Our
                        company motto &quot;Understanding & Customizing Risk&quot; reflects our
                        commitment to our clients of professionalism in the Risk Management.
                    </Typography>
                </div>

                <div style={{ textAlign: "start", marginLeft: "2%" }}>
                    <Typography gutterBottom variant="h2">
                        02
                    </Typography>
                    <Typography gutterBottom variant="h5">
                        Growth
                    </Typography>
                    <Typography variant="caption">
                        We offers its services to the whole Malaysia market after its growing
                        success within Kuala Lumpur & Selangor market. With the existing synergy, we
                        now place covers in Peninsular Malaysia & Sabah Sarawak. From our humble
                        beginnings in the early 1999 with only RM 100,000.00 in premium bookings,
                        today we handle over million shillings in premium bookings. We have been
                        growing annually at between 15-20% per annum.
                    </Typography>
                </div>
            </Container>
        </div>
    )
}
