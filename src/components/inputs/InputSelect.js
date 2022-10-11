import React, { useState } from "react"
import { styled } from "@mui/material/styles"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import ListItemText from "@mui/material/ListItemText"
import Select from "@mui/material/Select"
import Checkbox from "@mui/material/Checkbox"
import InputBase from "@mui/material/InputBase"

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        },
    },
}

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    "label + &": {
        marginTop: theme.spacing(3),
    },
    "& .MuiInputBase-input": {
        borderRadius: 4,
        position: "relative",
        backgroundColor: theme.palette.background.paper,
        border: "1.5px solid #ced4da",
        fontSize: 14,
        padding: "8px 15px 8px 10px",
        transition: theme.transitions.create(["border-color", "box-shadow"]),
        "&:focus": {
            borderRadius: 4,
            borderColor: "#009c99",
            boxShadow: "0 0 0 0.07rem rgba(0, 156, 153, 1)",
        },
    },
}))

export default function InputSelect({ label, options, handleChange }) {
    const [selectedOptions, setSelectedOptions] = useState([])

    const onChange = (event) => {
        const {
            target: { value },
        } = event
        setSelectedOptions(typeof value === "string" ? value.split(",") : value)
        handleChange(value)
    }

    return (
        <div className="my-auto">
            <FormControl sx={{ m: 1, width: 240 }} size="small">
                <Select
                    multiple
                    displayEmpty
                    value={selectedOptions}
                    onChange={onChange}
                    input={<BootstrapInput />}
                    renderValue={(selected) => {
                        if (selected.length === 0) {
                            return label
                        }

                        return options
                            ?.filter((i) => selected?.includes(i.value))
                            .map((m) => m.label)
                            .join(", ")
                    }}
                    MenuProps={MenuProps}
                >
                    {options?.map((option, index) => (
                        <MenuItem key={index} value={option.value}>
                            <Checkbox
                                checked={selectedOptions.indexOf(option.value) > -1}
                                size="small"
                            />
                            <ListItemText
                                primaryTypographyProps={{ fontSize: 14, color: "primary.main" }}
                                primary={option.label}
                            />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    )
}
