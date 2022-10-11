import React from "react"
import { styled } from "@mui/material/styles"
import TextField from "@mui/material/TextField"
import { Controller } from "react-hook-form"

import { NumberFormatter, NumberFormatterLeadingZeros } from "src/utils/functions"

const InputTableTextControl = styled(
    ({ control, name, label, defaultValue, number, onBlur, leadingZeros, ...props }) => (
        <>
            <Controller
                control={control}
                name={name}
                defaultValue={defaultValue || ""}
                render={({ field: { onChange, value }, fieldState: { invalid, error } }) => (
                    <TextField
                        required
                        fullWidth
                        label={label}
                        size="small"
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                        error={invalid}
                        helperText={error?.message || " "}
                        InputLabelProps={{
                            style: {
                                color: "#CCCCCC",
                            },
                        }}
                        InputProps={{
                            inputComponent: number
                                ? leadingZeros
                                    ? NumberFormatterLeadingZeros
                                    : NumberFormatter
                                : null,
                            // autoComplete: "off",
                        }}
                        FormHelperTextProps={{
                            className: "mt-0",
                        }}
                        multiline
                        {...props}
                    />
                )}
            />
        </>
    ),
)(({ theme }) => ({
    ".MuiInputLabel-root.Mui-error": {
        color: "rgb(239, 83, 80) !important",
    },
    ".MuiInputLabel-shrink.Mui-focused.Mui-error": {
        color: "rgb(239, 83, 80) !important",
    },
    ".MuiInputLabel-shrink.Mui-focused": {
        color: "#009C99 !important",
    },
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

export default InputTableTextControl
