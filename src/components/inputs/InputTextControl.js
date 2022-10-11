import React from "react"
import { styled } from "@mui/material/styles"
import TextField from "@mui/material/TextField"
import { Controller } from "react-hook-form"
import InputLabel from "@mui/material/InputLabel"
import NumberFormat from "react-number-format"

function CustomNumberFormater(props) {
    const { inputRef, onChange, ...other } = props

    return (
        <NumberFormat
            {...other}
            allowNegative={false}
            getInputRef={inputRef}
            onValueChange={(values) => {
                onChange({
                    target: {
                        name: props.name,
                        value: values.value,
                    },
                })
            }}
        />
    )
}

const InputTextControl = styled(({ control, name, label, number, ...props }) => (
    <>
        <InputLabel className="mb-2">{label}</InputLabel>
        <Controller
            control={control}
            name={name}
            defaultValue=""
            render={({ field: { onChange, onBlur, value }, fieldState: { invalid, error } }) => (
                <TextField
                    fullWidth
                    label=""
                    size="small"
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    error={invalid}
                    helperText={error?.message || " "}
                    InputProps={{
                        inputComponent: number ? CustomNumberFormater : null,
                        // autoComplete: "off",
                    }}
                    {...props}
                />
            )}
        />
    </>
))(({ theme }) => ({
    ".MuiOutlinedInput-notchedOutline": {
        transition: "0.3s",
        top: 0,
    },
}))

export default InputTextControl
