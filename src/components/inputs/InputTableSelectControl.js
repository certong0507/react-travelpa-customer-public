import * as React from "react"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import FormHelperText from "@mui/material/FormHelperText"
import { Controller } from "react-hook-form"

const InputTableSelectControl = ({ control, name, label, options, defaultValue, ...props }) => {
    return (
        <>
            <Controller
                control={control}
                name={name}
                defaultValue={defaultValue}
                render={({ field: { onChange, value }, fieldState: { invalid, error } }) => (
                    <FormControl fullWidth error={invalid}>
                        <InputLabel className="input-label">{label} *</InputLabel>
                        <Select
                            required
                            className="input-select"
                            size="small"
                            label={label}
                            value={value}
                            onChange={onChange}
                            sx={{
                                ".MuiOutlinedInput-notchedOutline": {
                                    transition: "0.3s",
                                    legend: {
                                        float: "unset",
                                    },
                                },
                            }}
                        >
                            {options &&
                                options?.map((item, index) => (
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
export default InputTableSelectControl
