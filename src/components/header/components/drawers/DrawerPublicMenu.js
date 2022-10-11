import React, { useState } from "react"
import { connect } from "react-redux"
import Drawer from "@mui/material/Drawer"
import Box from "@mui/material/Box"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"
import Typography from "@mui/material/Typography"
import ExpandMore from "@mui/icons-material/ExpandMore"
import Collapse from "@mui/material/Collapse"
import Divider from "@mui/material/Divider"
import { Link } from "react-router-dom"
import { CImage } from "@coreui/react"
import { TbInfoSquare } from "react-icons/tb"
import { FiPhone } from "react-icons/fi"
import { BiLogIn, BiLogOut } from "react-icons/bi"
import { HiUserAdd, HiUser } from "react-icons/hi"
import { BsArchiveFill } from "react-icons/bs"
import { MdOutlineMiscellaneousServices } from "react-icons/md"

import logo from "src/assets/logo.png"
import { doLogout } from "src/action/api_actions"

export const DrawerPublicMenu = ({ state, toggleDrawer, doLogout, loggedInUser }) => {
    const [openProductSubmenu, setOpenProductSubmenu] = useState(null)

    const handleClick = () => {
        setOpenProductSubmenu(!openProductSubmenu)
    }

    return (
        <Drawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
            className="w-75"
        >
            <Box role="presentation">
                <List>
                    <ListItem>
                        <ListItemButton>
                            <Link to="/" className="text-center text-decoration-none">
                                <CImage src={logo} className="w-75" />
                            </Link>
                        </ListItemButton>
                    </ListItem>

                    <ListItem className="bg-white">
                        <ListItemText>
                            <Link to="/about-us" className="text-decoration-none">
                                <Typography variant="subtitle2">
                                    <div className="d-flex align-items-center">
                                        <TbInfoSquare size="1.2rem" color="#009c99" />
                                        <span className="mx-2 text-dark">About Us</span>
                                    </div>
                                </Typography>
                            </Link>
                        </ListItemText>
                    </ListItem>

                    <ListItem className="bg-white">
                        <ListItemText>
                            <Link to="/contact-us" className="text-decoration-none">
                                <Typography variant="subtitle2">
                                    <div className="d-flex align-items-center">
                                        <FiPhone size="1rem" color="#009c99" />
                                        <span className="mx-2 text-dark">Contact Us</span>
                                    </div>
                                </Typography>
                            </Link>
                        </ListItemText>
                    </ListItem>

                    {!loggedInUser && (
                        <>
                            <ListItem className="bg-white">
                                <ListItemText>
                                    <Link to="/login" className="text-decoration-none">
                                        <Typography variant="subtitle2">
                                            <div className="d-flex align-items-center">
                                                <BiLogIn size="1rem" color="#009c99" />
                                                <span className="mx-2 text-dark">Login</span>
                                            </div>
                                        </Typography>
                                    </Link>
                                </ListItemText>
                            </ListItem>
                        </>
                    )}

                    {!loggedInUser && (
                        <>
                            <ListItem className="bg-white">
                                <ListItemText>
                                    <Link to="/sign-up" className="text-decoration-none">
                                        <Typography variant="subtitle2">
                                            <div className="d-flex align-items-center">
                                                <HiUserAdd size="1rem" color="#009c99" />
                                                <span className="mx-2 text-dark">Sign Up</span>
                                            </div>
                                        </Typography>
                                    </Link>
                                </ListItemText>
                            </ListItem>
                        </>
                    )}

                    <ListItem className="bg-white" onClick={handleClick}>
                        <ListItemText>
                            <Typography variant="subtitle2">
                                <div className="d-flex align-items-center">
                                    <MdOutlineMiscellaneousServices size="1rem" color="#009c99" />
                                    <span className="mx-2 text-dark">Products</span>
                                </div>
                            </Typography>
                        </ListItemText>
                        <ExpandMore
                            className={openProductSubmenu ? "expand-dropdown" : ""}
                            style={{
                                color: "#2a4a4b",
                                transition: "transform .3s",
                            }}
                        />
                    </ListItem>

                    <Collapse in={openProductSubmenu} timeout="auto" unmountOnExit>
                        <List className="pt-0 pb-0">
                            <ListItem className="bg-white">
                                <ListItemText>
                                    <Link to="/travel-insurance" className="text-decoration-none">
                                        <div
                                            className="mx-4 d-flex justify-content-start"
                                            onClick={toggleDrawer("left", false)}
                                        >
                                            <Typography
                                                variant="caption"
                                                style={{ color: "#2a4a4b" }}
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="mx-2 text-dark">
                                                        Travel PA
                                                    </span>
                                                </div>
                                            </Typography>
                                        </div>
                                    </Link>
                                </ListItemText>
                            </ListItem>

                            <ListItem className="bg-white">
                                <ListItemText>
                                    <Link to="/travel-packages" className="text-decoration-none">
                                        <div
                                            className="mx-4 d-flex justify-content-start"
                                            onClick={toggleDrawer("left", false)}
                                        >
                                            <Typography
                                                variant="caption"
                                                style={{ color: "#2a4a4b" }}
                                            >
                                                <div className="d-flex align-items-center">
                                                    <span className="mx-2 text-dark">
                                                        <div>
                                                            Travel Packages
                                                        </div>
                                                    </span>
                                                </div>
                                            </Typography>
                                        </div>
                                    </Link>
                                </ListItemText>
                            </ListItem>
                        </List>
                    </Collapse>

                    {loggedInUser && (
                        <div
                            onClick={toggleDrawer("left", false)}
                            onKeyDown={toggleDrawer("left", false)}
                        >
                            <Divider light variant="middle" className="my-3" />

                            <ListItem className="bg-white">
                                <ListItemText>
                                    <Link
                                        to="/dashboard/my-profile"
                                        className="text-decoration-none"
                                    >
                                        <Typography variant="subtitle2">
                                            <div className="d-flex align-items-center">
                                                <HiUser color="#009c99" size="1.1rem" />
                                                <span className="mx-2 text-dark">My Profile</span>
                                            </div>
                                        </Typography>
                                    </Link>
                                </ListItemText>
                            </ListItem>

                            <ListItem className="bg-white">
                                <ListItemText>
                                    <Link
                                        to="/dashboard/my-purchase"
                                        className="text-decoration-none"
                                    >
                                        <Typography variant="subtitle2">
                                            <div className="d-flex align-items-center">
                                                <BsArchiveFill color="#009c99" />
                                                <span className="mx-2 text-dark">My Purchase</span>
                                            </div>
                                        </Typography>
                                    </Link>
                                </ListItemText>
                            </ListItem>

                            <ListItem className="bg-white">
                                <ListItemText>
                                    <Link
                                        to="/login"
                                        className="text-decoration-none"
                                        onClick={() => doLogout()}
                                    >
                                        <Typography variant="subtitle2">
                                            <div className="d-flex align-items-center">
                                                <BiLogOut color="#009c99" size="1.1rem" />
                                                <span className="mx-2 text-dark">Logout</span>
                                            </div>
                                        </Typography>
                                    </Link>
                                </ListItemText>
                            </ListItem>
                        </div>
                    )}
                </List>
            </Box>
        </Drawer>
    )
}

const mapStateToProps = (state) => ({
    loggedInUser: state.core.loggedInUser,
})

const mapDispatchToProps = { doLogout }

export default connect(mapStateToProps, mapDispatchToProps)(DrawerPublicMenu)
