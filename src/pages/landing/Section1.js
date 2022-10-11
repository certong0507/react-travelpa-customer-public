import React from "react"
import Card from "@mui/material/Card"
import Typography from "@mui/material/Typography"
import CardContent from "@mui/material/CardContent"
import Grid from "@mui/material/Grid"
import { IoDiamondOutline } from "react-icons/io5"
import { TiStarOutline } from "react-icons/ti"
import { AiOutlineSetting } from "react-icons/ai"
import { BiShareAlt } from "react-icons/bi"
import { Link } from "react-router-dom"
import ScrollIntoView from "react-scroll-into-view"

export default function Section1() {
    const iconStyle = {
        backgroundColor: " rgb(0, 156, 153)",
        padding: "5%",
        width: "fit-content",
        borderRadius: "50%",
        cursor: "pointer",
    }
    return (
        <section className="p-3" style={{ backgroundColor: "#009c99" }}>
            <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 1, sm: 2, md: 12 }}
                style={{ marginTop: "-5%" }}
            >
                <Grid item xs={1} sm={1} md={3} sx={{zIndex: "999"}}>
                    <Card className="h-100">
                        <CardContent>
                            <ScrollIntoView selector="#section2">
                                <div style={iconStyle} className="mb-3">
                                    <IoDiamondOutline size="2em" color="white" />
                                </div>
                            </ScrollIntoView>
                            <Typography variant="h6" className="text-uppercase font-bold">
                                Easy Purchase
                            </Typography>

                            <Typography variant="body2" color="text.secondary" className="mt-3">
                                We provide price comparison, with this feature you can now purchase
                                the suitable insurance easily
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={1} sm={1} md={3} sx={{zIndex: "999"}}>
                    <Card className="h-100">
                        <CardContent>
                            <Link to="/travel-insurance" className="text-decoration-none">
                                <div style={iconStyle} className="mb-3 d-inline-block">
                                    <TiStarOutline size="2em" color="white" />
                                </div>
                            </Link>

                            <Typography variant="h6" className="text-uppercase font-bold">
                                Products
                            </Typography>

                            <Typography variant="body2" color="text.secondary" className="mt-3">
                                We provide the latest products, and also the promotion
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={1} sm={1} md={3} sx={{zIndex: "999"}}>
                    <Card className="h-100">
                        <CardContent>
                            <Link to="/contact-us" className="text-decoration-none">
                                <div style={iconStyle} className="mb-3 d-inline-block">
                                    <AiOutlineSetting size="2em" color="white" />
                                </div>
                            </Link>

                            <Typography variant="h6" className="text-uppercase font-bold">
                                Support
                            </Typography>

                            <Typography variant="body2" color="text.secondary" className="mt-3">
                                We provide helpdesk support, to assists you in any kind of questions
                                and problems
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={1} sm={1} md={3} sx={{zIndex: "999"}}>
                    <Card className="h-100">
                        <CardContent>
                            <Link to="/login" className="text-decoration-none">
                                <div style={iconStyle} className="mb-3"> <BiShareAlt size="2em" color="white" />
                                </div>
                            </Link>
                            <Typography variant="h6" className="text-uppercase font-bold">
                                Personalised Account
                            </Typography>

                            <Typography variant="body2" color="text.secondary" className="mt-3">
                                With personalised account, you can now manage and upkeep all your
                                insurance record
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </section>
    )
}
