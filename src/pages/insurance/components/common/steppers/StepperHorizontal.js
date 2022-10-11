import React from "react"
import Box from "@mui/material/Box"
import Stepper from "@mui/material/Stepper"
import Step from "@mui/material/Step"
import StepLabel from "@mui/material/StepLabel"
import { CContainer } from "@coreui/react"

function StepperHorizontal({ id, showStepContent, activeStep, steps }) {
    return (
        <Box id={id} sx={{ width: "100%" }} className="mt-5 mb-5">
            <CContainer className="container-wrapper">
                <Stepper activeStep={activeStep} style={{ marginTop: "5rem" }}>
                    {steps.map((label, index) => {
                        const stepProps = {}
                        const labelProps = {}

                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        )
                    })}
                </Stepper>
            </CContainer>

            {activeStep === steps.length ? (
                <CContainer sx={{ mt: 2, mb: 1 }}>
                    All steps completed - you&apos;re finished
                </CContainer>
            ) : (
                <CContainer style={{}}>{showStepContent()}</CContainer>
            )}
        </Box>
    )
}

export default StepperHorizontal
