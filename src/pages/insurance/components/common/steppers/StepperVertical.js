import React from "react"
import Box from "@mui/material/Box"
import Stepper from "@mui/material/Stepper"
import Step from "@mui/material/Step"
import StepLabel from "@mui/material/StepLabel"
import StepContent from "@mui/material/StepContent"

function StepperVertical({ id, showStepContent, steps, activeStep }) {
    return (
        <Box id={id} sx={{ maxWidth: 400 }}>
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((label, index) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                        <StepContent>{showStepContent()}</StepContent>
                    </Step>
                ))}
            </Stepper>
            {activeStep === steps.length && (
                <StepContent>All steps completed - you&apos;re finished</StepContent>
            )}
        </Box>
    )
}

export default StepperVertical
