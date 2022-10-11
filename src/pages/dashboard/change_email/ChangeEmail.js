import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"

import VerificationSection from "src/pages/dashboard/change_email/components/sections/VerificationSection"
import ChangeEmailSection from "src/pages/dashboard/change_email/components/sections/ChangeEmailSection"

export const ChangeEmail = () => {
    const [isVerifiedEmail, setIsVerifiedEmail] = useState(false)

    useEffect(() => {
        setIsVerifiedEmail(false)
    }, [])

    return (
        <Box>
            <Card variant="outlined">
                <CardContent>
                    <Typography variant="h6" className="mb-3">
                        Change Email
                    </Typography>

                    {!isVerifiedEmail && (
                        <VerificationSection setIsVerifiedEmail={setIsVerifiedEmail} />
                    )}

                    {isVerifiedEmail && <ChangeEmailSection />}
                </CardContent>
            </Card>
        </Box>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ChangeEmail)
