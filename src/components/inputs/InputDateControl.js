import React from "react"
import AdapterDateFns from "@mui/lab/AdapterDateFns"
import LocalizationProvider from "@mui/lab/LocalizationProvider"
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker"
import { Controller } from "react-hook-form"
import TextField from "@mui/material/TextField"
import { styled } from "@mui/material/styles"
import FormHelperText from "@mui/material/FormHelperText"
import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"

const TextFieldStyle = styled(TextField)(({ theme }) => ({
    ".MuiInputLabel-root": {
        top: -3,
    },
    ".MuiInputLabel-root.MuiInputLabel-shrink": {
        top: 7,
    },
}))

const InputDateControl = ({ control, name, label, minDate, maxDate, ...props }) => {
    return (
        <>
            <InputLabel className="mb-2">{label}</InputLabel>
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
                                label=""
                                minDate={minDate || null}
                                maxDate={maxDate || null}
                                value={value}
                                onChange={onChange}
                                renderInput={(params) => {
                                    params.error = invalid
                                    return <TextFieldStyle size="small" {...params} />
                                }}
                                {...props}
                            />

                            <FormHelperText>{error?.message}</FormHelperText>
                        </LocalizationProvider>
                    </FormControl>
                )}
            />
        </>
    )
}

export default InputDateControl
