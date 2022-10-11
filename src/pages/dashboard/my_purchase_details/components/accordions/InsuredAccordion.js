import React, { useEffect } from "react"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import Typography from "@mui/material/Typography"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

import InsuredDetailsSection from "src/pages/dashboard/my_purchase_details/components/sections/InsuredDetailsSection"

export default function InsuredAccordion({ index, item }) {
    return (
        <Accordion
            elevation={0}
            variant="outlined"
            sx={{
                "&:before": {
                    display: "none",
                },
                borderRadius: "5px",
            }}
            className="mb-3"
        >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{ backgroundColor: "rgb(237, 247, 237)" }}
            >
                <Typography variant="subtitle1" component="div" className="d-flex">
                    Insured {index + 1}
                    <Typography
                        variant="caption"
                        component="div"
                        className="my-auto mx-2"
                        color="primary"
                    >
                        {item?.name}
                    </Typography>
                </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: "rgb(237, 247, 237)" }}>
                <InsuredDetailsSection item={item} />
            </AccordionDetails>
        </Accordion>
    )
}
