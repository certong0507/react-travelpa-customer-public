import React, { useEffect } from "react"
import Box from "@mui/material/Box"
import { AppContent, AppHeader } from "../components/index"
import { useNavigate } from "react-router-dom"

const DefaultLayout = () => {
    const navigate = useNavigate()

    useEffect(() => {
        navigate("/dashboard/my-profile")
    }, [])

    return (
        <Box sx={{ backgroundColor: "rgb(237, 247, 237);" }}>
            <AppHeader />
            <AppContent />
        </Box>
    )
}

export default DefaultLayout
