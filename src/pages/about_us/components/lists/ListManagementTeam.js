import * as React from "react"
import Box from "@mui/material/Box"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import Divider from "@mui/material/Divider"
import InboxIcon from "@mui/icons-material/Inbox"
import DraftsIcon from "@mui/icons-material/Drafts"
import { Typography } from "@mui/material"

export default function ListManagementTeam() {
    return (
        <Box
            id="about-us-management-team"
            sx={{ overflowX: "auto", bgcolor: "rgb(237, 247, 237)" }}
        >
            <List dense sx={{ width: "1296px" }}>
                <ListItem>
                    <ListItemText
                        primary={<b>Yu Cheng Yew</b>}
                        primaryTypographyProps={{ color: "#0F9C99" }}
                        secondaryTypographyProps={{ color: "rgba(0, 0, 0, 0.6)" }}
                        secondary={
                            <Typography variant="caption" component="div" className="lh-sm">
                                Co-Founder of Squarebox Technology
                            </Typography>
                        }
                    />
                    <ListItemText
                        className="management-description"
                        sx={{ width: "63%" }}
                        primary={
                            <ul>
                                <li>3 years CEO of Squarebox Technology.</li>
                                <li>
                                    1 year experience in Shopee Singapore as a senior associate
                                    business intelligence, focused on sellers and users data
                                    analysis, to help BD/Marketing team have a good insight for them
                                    to make decisions.
                                </li>
                                <li>
                                    5 years experience as software engineer/senior engineer at
                                    various companies in Singapore.
                                </li>
                                <li>10 years experience in software development field.</li>
                            </ul>
                        }
                    />
                </ListItem>

                <Divider />

                <ListItem>
                    <ListItemText
                        primary={<b>Arthur Yap Kaa Sheng</b>}
                        primaryTypographyProps={{ color: "#0F9C99" }}
                        secondary={
                            <Typography variant="caption" component="div" className="lh-sm">
                                Co-Founder of Squarebox Technology
                            </Typography>
                        }
                    />
                    <ListItemText
                        className="management-description"
                        sx={{ width: "63%" }}
                        primary={
                            <ul>
                                <li>3 years CTO of Squarebox Technology.</li>
                                <li>10 years experience in IT and product development field.</li>
                            </ul>
                        }
                    />
                </ListItem>

                <Divider />

                <ListItem>
                    <ListItemText
                        primary={<b>Patrick Teo Cheng Hiong</b>}
                        primaryTypographyProps={{ color: "#0F9C99" }}
                        secondary={
                            <Typography variant="caption" component="div" className="lh-sm">
                                Managing Director of Untung Sewajar Sdn Bhd
                            </Typography>
                        }
                    />
                    <ListItemText
                        className="management-description"
                        sx={{ width: "67%" }}
                        primary={
                            <ul>
                                <li>
                                    Untung Sewajar Sdn Bhd (USSB) Consultant Companies is the
                                    amongst the top Insurance Agency in having serviced the industry
                                    for nearly 20 years, with its management team 10 persons to
                                    cater Insurance needs in Malaysia.
                                </li>
                                <li>
                                    USSB offer personalized services with a contingency of
                                    professional qualified personnel using up to date IT system for
                                    sourcing, claims and underwriting. The company officers are
                                    accessible and offers diverse flow of advice on risks and
                                    information on claim processing.
                                </li>
                                <li>
                                    USSB team of 10 professional deal with over 200 clients, making
                                    us leaders in the industry unparalleled experience. Our company
                                    motto &quot;Understanding & Customizing Risk&quot; reflects our
                                    commitment to our clients of professionalism in the Risk
                                    Management.
                                </li>
                            </ul>
                        }
                    />
                </ListItem>

                <Divider />

                <ListItem>
                    <ListItemText
                        primary={<b>Tay Cheng San</b>}
                        primaryTypographyProps={{ color: "#0F9C99" }}
                        secondary={
                            <Typography variant="caption" component="div" className="lh-sm">
                                Director of AI concept Sdn Bhd
                            </Typography>
                        }
                    />
                    <ListItemText
                        className="management-description w-60"
                        primary={
                            <ul>
                                <li>
                                    23 years in software development. Large scale software for
                                    government, colleges and MNC. Smart school management system for
                                    MOE.
                                </li>
                                <li>Centre of Artificial Intelligence and Robotic at UTM.</li>
                                <li>MS EE – Artificial Intelligence from UTM.</li>
                            </ul>
                        }
                    />
                </ListItem>

                <Divider />

                <ListItem>
                    <ListItemText
                        primary={<b>Ben Sat Hwei Hoe</b>}
                        primaryTypographyProps={{ color: "#0F9C99" }}
                        secondary={
                            <Typography variant="caption" component="div" className="lh-sm">
                                Founder of HY Retails Sdn Bhd
                            </Typography>
                        }
                    />
                    <ListItemText
                        className="management-description w-60"
                        primary={
                            <ul>
                                <li>
                                    Corporate planning, administration and marketing USSB group.
                                </li>
                                <li>Serviced the insurance industry for nearly 11 years.</li>
                                <li>
                                    Bachelor degree in Business Management - University of
                                    Sunderland.
                                </li>
                            </ul>
                        }
                    />
                </ListItem>
            </List>
        </Box>
    )
}
