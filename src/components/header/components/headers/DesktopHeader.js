import React, { useState, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import MenuItem from "@mui/material/MenuItem"
import Popper from "@mui/material/Popper"
import Grow from "@mui/material/Grow"
import Paper from "@mui/material/Paper"
import ClickAwayListener from "@mui/material/ClickAwayListener"
import MenuList from "@mui/material/MenuList"
import ExpandMore from "@mui/icons-material/ExpandMore"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import {
    CContainer,
    CHeader,
    CHeaderBrand,
    CHeaderNav,
    CNavItem,
    CNavLink,
    CImage,
} from "@coreui/react"
import { FaUserCircle } from "react-icons/fa"

import logo from "src/assets/logo.png"
import { DesktopView } from "src/utils/functions"

import { doLogout, doResetLogoutState } from "src/action/api_actions"

export const DesktopHeader = ({ loggedInUser, logOutSuccess, doLogout, doResetLogoutState }) => {
    const [open, setOpen] = useState(false)
    const anchorRef = useRef(null)
    const [openProfile, setOpenProfile] = useState(false)
    const anchorRefProfile = useRef(null)
    const navigate = useNavigate()

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen)
    }

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return
        }

        setOpen(false)
    }

    function handleListKeyDown(event) {
        if (event.key === "Tab") {
            event.preventDefault()
            setOpen(false)
        } else if (event.key === "Escape") {
            setOpen(false)
        }
    }

    const prevOpen = useRef(open)

    useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus()
        }

        prevOpen.current = open
    }, [open])

    const handleToggleProfile = () => {
        setOpenProfile((prevOpen) => !prevOpen)
    }

    const handleCloseProfile = (event) => {
        if (anchorRefProfile.current && anchorRefProfile.current.contains(event.target)) {
            return
        }

        setOpenProfile(false)
    }

    function handleListKeyDownProfile(event) {
        if (event.key === "Tab") {
            event.preventDefault()
            setOpenProfile(false)
        } else if (event.key === "Escape") {
            setOpenProfile(false)
        }
    }

    const prevOpenProfile = useRef(open)

    useEffect(() => {
        if (prevOpenProfile.current === true && openProfile === false) {
            anchorRefProfile.current.focus()
        }

        prevOpenProfile.current = openProfile
    }, [openProfile])

    useEffect(() => {
        if (logOutSuccess) {
            doResetLogoutState()
            navigate("/")
        }
    }, [logOutSuccess])

    return (
        <DesktopView>
            <CHeader position="sticky" className="border-bottom-0">
                <CContainer className="d-flex justify-content-between">
                    <div className="d-flex justify-content-md-around">
                        <CHeaderBrand href="#">
                            <CImage fluid src={logo} style={{ width: "35%" }} />
                        </CHeaderBrand>
                    </div>

                    <div id="desktop-menu" className="justify-content-end">
                        <CHeaderNav>
                            <CNavItem className="align-self-center">
                                <CNavLink component="div" className="text-center">
                                    <Button
                                        ref={anchorRef}
                                        id="composition-button"
                                        aria-controls={open ? "composition-menu" : undefined}
                                        aria-expanded={open ? "true" : undefined}
                                        aria-haspopup="true"
                                        onClick={handleToggle}
                                        className="text-capitalize p-0"
                                        style={{ fontSize: "16px", backgroundColor: "transparent" }}
                                        disableElevation
                                        disableFocusRipple
                                        disableRipple
                                        disableTouchRipple
                                    >
                                        <span
                                            style={{
                                                color: "rgb(42, 74, 75)",
                                            }}
                                        >
                                            Products
                                        </span>
                                        <ExpandMore
                                            className={open ? "expand-dropdown" : ""}
                                            fontSize="small"
                                            style={{
                                                color: "rgb(42, 74, 75)",
                                                transition: "transform .3s",
                                            }}
                                        />
                                    </Button>
                                    <Popper
                                        open={open}
                                        anchorEl={anchorRef.current}
                                        role={undefined}
                                        placement="bottom-start"
                                        transition
                                        disablePortal
                                    >
                                        {({ TransitionProps, placement }) => (
                                            <Grow
                                                {...TransitionProps}
                                                style={{
                                                    transformOrigin:
                                                        placement === "bottom-start"
                                                            ? "left top"
                                                            : "left bottom",
                                                }}
                                            >
                                                <Paper>
                                                    <ClickAwayListener onClickAway={handleClose}>
                                                        <MenuList
                                                            autoFocusItem={open}
                                                            id="menu-products-list"
                                                            aria-labelledby="composition-button"
                                                            onKeyDown={handleListKeyDown}
                                                        >
                                                            <Link
                                                                to="/travel-insurance"
                                                                className="text-decoration-none"
                                                                style={{
                                                                    color: "#2a4a4b",
                                                                }}
                                                            >
                                                                <MenuItem
                                                                    onClick={handleClose}
                                                                    style={{
                                                                        fontSize: "small",
                                                                    }}
                                                                >
                                                                    Travel PA
                                                                </MenuItem>
                                                            </Link>

                                                            <Link
                                                                to="/travel-packages"
                                                                className="text-decoration-none"
                                                                style={{
                                                                    color: "#2a4a4b",
                                                                }}
                                                            >
                                                                <MenuItem
                                                                    onClick={handleClose}
                                                                    style={{
                                                                        color: "#2a4a4b",
                                                                        fontSize: "small",
                                                                    }}
                                                                >
                                                                    <div>Travel Packages</div>
                                                                </MenuItem>
                                                            </Link>
                                                        </MenuList>
                                                    </ClickAwayListener>
                                                </Paper>
                                            </Grow>
                                        )}
                                    </Popper>
                                </CNavLink>
                            </CNavItem>

                            <CNavItem className="align-self-center">
                                <CNavLink component="div" className="text-center">
                                    <a
                                        href="#/about-us"
                                        className="text-decoration-none"
                                        style={{ color: "rgb(42, 74, 75)" }}
                                    >
                                        About Us
                                    </a>
                                </CNavLink>
                            </CNavItem>

                            <CNavItem className="align-self-center">
                                <CNavLink
                                    component="div"
                                    className="text-center"
                                    style={{ marginRight: "20px" }}
                                >
                                    <a
                                        href="#/contact-us"
                                        className="text-decoration-none"
                                        style={{ color: "rgb(42, 74, 75)" }}
                                    >
                                        Contact Us
                                    </a>
                                </CNavLink>
                            </CNavItem>

                            {!loggedInUser && (
                                <CNavItem className="align-self-center">
                                    <CNavLink
                                        href="#/login"
                                        style={{ color: "rgb(42, 74, 75)", textAlign: "end" }}
                                    >
                                        <Button disableElevation disableRipple variant="outlined">
                                            Login
                                        </Button>
                                    </CNavLink>
                                </CNavItem>
                            )}

                            {!loggedInUser && (
                                <CNavItem>
                                    <CNavLink
                                        href="#/sign-up"
                                        style={{ color: "rgb(42, 74, 75)", textAlign: "start" }}
                                    >
                                        <Button variant="contained" disableElevation>
                                            Sign Up
                                        </Button>
                                    </CNavLink>
                                </CNavItem>
                            )}

                            {loggedInUser && (
                                <CNavItem className="align-self-center">
                                    <CNavLink component="div">
                                        <Button
                                            disableElevation
                                            disableFocusRipple
                                            disableRipple
                                            disableTouchRipple
                                            className="p-0"
                                            style={{ backgroundColor: "transparent" }}
                                        >
                                            <Box>
                                                <FaUserCircle
                                                    size="1.2rem"
                                                    color="rgb(42, 74, 75)"
                                                />
                                            </Box>
                                            <Box
                                                ref={anchorRefProfile}
                                                className="mx-1 cursor-pointer"
                                                onClick={handleToggleProfile}
                                            >
                                                <Typography variant="caption">
                                                    <b>{loggedInUser?.customer?.name}</b>
                                                </Typography>
                                                <ExpandMore
                                                    className={openProfile ? "expand-dropdown" : ""}
                                                    fontSize="small"
                                                    style={{
                                                        color: "#2a4a4b",
                                                        transition: "transform .3s",
                                                    }}
                                                />
                                            </Box>
                                        </Button>

                                        <Popper
                                            open={openProfile}
                                            anchorEl={anchorRefProfile.current}
                                            role={undefined}
                                            placement="bottom-start"
                                            transition
                                            disablePortal
                                        >
                                            {({ TransitionProps, placement }) => (
                                                <Grow
                                                    {...TransitionProps}
                                                    style={{
                                                        transformOrigin:
                                                            placement === "bottom-start"
                                                                ? "left top"
                                                                : "left bottom",
                                                    }}
                                                >
                                                    <Paper>
                                                        <ClickAwayListener
                                                            onClickAway={handleCloseProfile}
                                                        >
                                                            <MenuList
                                                                autoFocusItem={openProfile}
                                                                id="menu-products-list"
                                                                aria-labelledby="composition-button"
                                                                onKeyDown={handleListKeyDownProfile}
                                                            >
                                                                <Link
                                                                    to="/dashboard/my-profile"
                                                                    className="text-decoration-none"
                                                                    style={{
                                                                        color: "#2a4a4b",
                                                                    }}
                                                                >
                                                                    <MenuItem
                                                                        onClick={handleCloseProfile}
                                                                        style={{
                                                                            fontSize: "small",
                                                                        }}
                                                                    >
                                                                        My Profile
                                                                    </MenuItem>
                                                                </Link>
                                                                <Link
                                                                    to="/dashboard/my-purchase"
                                                                    className="text-decoration-none"
                                                                    style={{
                                                                        color: "#2a4a4b",
                                                                    }}
                                                                >
                                                                    <MenuItem
                                                                        onClick={handleCloseProfile}
                                                                        style={{
                                                                            fontSize: "small",
                                                                        }}
                                                                    >
                                                                        My Purchase
                                                                    </MenuItem>
                                                                </Link>
                                                                <Link
                                                                    to="/login"
                                                                    className="text-decoration-none"
                                                                    style={{
                                                                        color: "#2a4a4b",
                                                                    }}
                                                                >
                                                                    <MenuItem
                                                                        // onClick={
                                                                        //     handleCloseProfile
                                                                        // }
                                                                        onClick={() => {
                                                                            // handleCloseProfile()
                                                                            doLogout()
                                                                        }}
                                                                        style={{
                                                                            color: "#2a4a4b",
                                                                            fontSize: "small",
                                                                        }}
                                                                    >
                                                                        Logout
                                                                    </MenuItem>
                                                                </Link>
                                                            </MenuList>
                                                        </ClickAwayListener>
                                                    </Paper>
                                                </Grow>
                                            )}
                                        </Popper>
                                    </CNavLink>
                                </CNavItem>
                            )}
                        </CHeaderNav>
                    </div>
                </CContainer>
            </CHeader>
        </DesktopView>
    )
}

const mapStateToProps = (state) => ({
    loggedInUser: state.core.loggedInUser,
    logOutSuccess: state.core.doLogOutSuccess,
})

const mapDispatchToProps = {
    doLogout,
    doResetLogoutState,
}

export default connect(mapStateToProps, mapDispatchToProps)(DesktopHeader)
