import React from "react"
import { connect } from "react-redux"
import Box from "@mui/material/Box"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import Typography from "@mui/material/Typography"
import { Link } from "react-router-dom"
import { HiUser } from "react-icons/hi"
import { BsArchiveFill } from "react-icons/bs"
import { BiLogOut } from "react-icons/bi"
import { MdModeEdit } from "react-icons/md"
import { FaUserCircle } from "react-icons/fa"

export const AppSideBar = ({
    loggedInUser,
}) => {
    return (
        <Box>
            <Box className="d-flex align-items-center mb-4">
                <Box>
                    <FaUserCircle size="3rem" color="rgb(42, 74, 75)" />
                </Box>
                <Box className="mx-2">
                    <Box>
                        <Typography variant="subtitle2">
                            <b>{loggedInUser?.customer?.name}</b>
                        </Typography>
                    </Box>
                    <Box>
                        <Link to="/dashboard/my-profile" className="text-decoration-none">
                            <Typography variant="caption">
                                <MdModeEdit color="#009c99" className="mx-1" />
                                <span className="text-dark">Edit Profile</span>
                            </Typography>
                        </Link>
                    </Box>
                </Box>
            </Box>
            <List>
                <ListItem>
                    <ListItemText>
                        <Link to="/dashboard/my-profile" className="text-decoration-none">
                            <Typography variant="subtitle2" component="div">
                                <div className="d-flex align-items-center">
                                    <HiUser color="#009c99" size="1.1rem" />
                                    <span className="mx-2 text-dark">My Profile</span>
                                </div>
                            </Typography>
                        </Link>
                    </ListItemText>
                </ListItem>

                <ListItem>
                    <ListItemText>
                        <Link to="/dashboard/my-purchase" className="text-decoration-none">
                            <Typography variant="subtitle2" component="div">
                                <div className="d-flex align-items-center">
                                    <BsArchiveFill color="#009c99" />
                                    <span className="mx-2 text-dark">My Purchase</span>
                                </div>
                            </Typography>
                        </Link>
                    </ListItemText>
                </ListItem>

                {/* <ListItem>
                    <ListItemText>
                        <Link to="/login" className="text-decoration-none">
                            <Typography variant="subtitle2" component="div">
                                <div className="d-flex align-items-center">
                                    <BiLogOut color="#009c99" />
                                    <span className="mx-2 text-dark">Logout</span>
                                </div>
                            </Typography>
                        </Link>
                    </ListItemText>
                </ListItem> */}
            </List>
        </Box>
    )
}

const mapStateToProps = (state) => ({
    loggedInUser: state.core.loggedInUser,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(AppSideBar)