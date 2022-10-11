import React from "react"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"

import { 
    OUR_PARTNERS,
} from "src/pages/landing/components/section4/data/dataOurPartners"
import {
    TabletView,
    DesktopView,
    MobilePortraitView,
} from "src/utils/functions"

export default function Section4() {
    return (
        <section style={{ backgroundColor: "#edf7ed", paddingBottom: "4rem" }} id="section4">

            <div
                className="pt-2"
                style={{
                    color: "#000000",
                }}
            >
                <h2 className="text-center mt-5" 
                    style={{ fontWeight: "bold" }}
                >
                    Our Partners
                </h2>
            </div>

            <TabletView>
                <Container className="d-flex mt-5">
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 4, md: 12 }}>

                        {OUR_PARTNERS?.map((item, index) => (
                            <Grid key={index} 
                                item xs={1}
                                className="align-self-center text-align-center"
                                style={{ paddingTop: "40px" }}
                            >
                                <img src={item?.logo} alt="" className={item?.className} />
                            </Grid>
                        ))}

                    </Grid>
                </Container>
            </TabletView>

            <DesktopView>
                <Container className="d-flex mt-5">
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 1, md: 12 }}>

                        {OUR_PARTNERS?.map((item, index) => (
                            <Grid key={index} 
                                item md={2.4} lg={2.4} 
                                className="align-self-center text-align-center"
                                style={{ paddingTop: "40px" }}
                            >
                                <img src={item?.logo} alt="" className={item?.className} />
                            </Grid>
                        ))}

                    </Grid>
                </Container>
            </DesktopView>

            <MobilePortraitView>
                <Container className="d-flex mt-5">
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 3, sm: 3, md: 12 }}>

                        {OUR_PARTNERS?.map((item, index) => (
                            <Grid key={index} 
                                item xs={1.5}
                                className="align-self-center text-align-center"
                                style={{ paddingTop: "40px" }}
                            >
                                <img src={item?.logo} alt="" className={item?.className} />
                            </Grid>
                        ))}

                    </Grid>
                </Container>
            </MobilePortraitView>

        </section>
       
    )
}
