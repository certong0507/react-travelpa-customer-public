import * as React from "react"
import { styled } from "@mui/material/styles"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import InputBase from "@mui/material/InputBase"
import FormHelperText from "@mui/material/FormHelperText"
import { Controller } from "react-hook-form"

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    "& .MuiInputBase-input": {
        position: "relative",
        border: "1px solid rgba(0, 0, 0, 0.2)",
        padding: "8.5px 14px",
        transition: theme.transitions.create(["border-color", "box-shadow"]),
        "&:focus": {
            borderRadius: 2,
            boxShadow: "none !important",
        },
    },
}))

const InputSelectControl = ({ control, name, label, options, ...props }) => {
    return (
        <>
            <InputLabel className="mb-1">{label}</InputLabel>
            <Controller
                control={control}
                name={name}
                defaultValue=""
                render={({ field: { onChange, value }, fieldState: { invalid, error } }) => (
                    <FormControl fullWidth error={invalid}>
                        <Select
                            className="input-select"
                            size="small"
                            value={value}
                            onChange={onChange}
                            input={<BootstrapInput />}
                        >
                            {options && options?.map((item, index) => (
                                <MenuItem key={index} value={item.value}>
                                    {item.label}
                                </MenuItem>
                            ))}
                        </Select>
                        <FormHelperText>{error?.message || " "}</FormHelperText>
                    </FormControl>
                )}
            />
        </>
    )
}
export default InputSelectControl
