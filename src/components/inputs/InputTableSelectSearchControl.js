import * as React from "react"
import TextField from "@mui/material/TextField"
import Autocomplete from "@mui/material/Autocomplete"
import FormControl from "@mui/material/FormControl"
import FormHelperText from "@mui/material/FormHelperText"
import { Controller } from "react-hook-form"

const InputTableSelectSearchControl = ({
    control,
    name,
    label,
    multiple,
    options,
    disabled,
    ...props
}) => {
    return (
        <Controller
            control={control}
            name={name}
            defaultValue={multiple ? [] : ""}
            render={({ field: { onChange, value }, fieldState: { invalid, error } }) => (
                <FormControl fullWidth error={invalid}>
                    <Autocomplete
                        disablePortal
                        disabled={disabled}
                        size="small"
                        multiple={multiple}
                        value={value}
                        onChange={(e, data) => onChange(data)}
                        options={options || []}
                        isOptionEqualToValue={(option, value) => option.code === value.code}
                        sx={{
                            ".MuiOutlinedInput-notchedOutline": {
                                transition: "0.3s",
                                top: 0,
                            },
                            ".MuiInputLabel-root": {
                                backgroundColor: "#ffffff",
                                paddingLeft: "2px",
                                paddingRight: "2px",
                            },
                        }}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                {...props}
                                label={label}
                                error={invalid}
                                required
                            />
                        )}
                    />
                    <FormHelperText>{error?.message || " "}</FormHelperText>
                </FormControl>
            )}
        />
    )
}

export default InputTableSelectSearchControl
