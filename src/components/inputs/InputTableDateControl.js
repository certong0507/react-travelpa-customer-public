import React from "react"
import AdapterDateFns from "@mui/lab/AdapterDateFns"
import LocalizationProvider from "@mui/lab/LocalizationProvider"
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker"
import { Controller } from "react-hook-form"
import TextField from "@mui/material/TextField"
import { styled } from "@mui/material/styles"
import FormHelperText from "@mui/material/FormHelperText"
import FormControl from "@mui/material/FormControl"

const TextFieldStyle = styled(TextField)(({ theme }) => ({
    ".MuiOutlinedInput-notchedOutline": {
        transition: "0.3s",
        legend: {
            float: "unset",
            overflow: "hidden",
            display: "block",
            width: "auto",
            padding: 0,
            height: "11px",
            fontSize: "0.75em",
            visibility: "hidden",
            transition: "max-width 100ms cubic-bezier(0.0, 0, 0.2, 1) 50ms",
            whiteSpace: "nowrap",
        },
    },
}))

const InputDateControl = ({ control, name, label, ...props }) => {
    return (
        <>
            <Controller
                control={control}
                name={name}
                defaultValue={null}
                render={({
                    field: { onChange, onBlur, value },
                    fieldState: { invalid, error },
                }) => (
                    <FormControl fullWidth error={invalid}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <MobileDatePicker
                                disableCloseOnSelect={false}
                                inputFormat="d MMM yyyy"
                                label={label}
                                value={value}
                                onChange={onChange}
                                renderInput={(params) => {
                                    params.error = invalid
                                    params.required = true
                                    return <TextFieldStyle size="small" {...params} />
                                }}
                                {...props}
                            />

                            <FormHelperText>{error?.message || " "}</FormHelperText>
                        </LocalizationProvider>
                    </FormControl>
                )}
            />
        </>
    )
}

export default InputDateControl
