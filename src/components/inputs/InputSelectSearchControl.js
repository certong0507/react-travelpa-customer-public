import * as React from "react"
import InputLabel from "@mui/material/InputLabel"
import FormControl from "@mui/material/FormControl"
import Autocomplete from "@mui/material/Autocomplete"
import TextField from "@mui/material/TextField"
import FormHelperText from "@mui/material/FormHelperText"
import { Controller } from "react-hook-form"

const InputSelectSearchControl = ({ control, name, label, multiple, options, ...props }) => {
    return (
        <>
            <InputLabel className="mb-1">{label}</InputLabel>
            <Controller
                control={control}
                name={name}
                defaultValue={multiple ? [] : ""}
                render={({ field: { onChange, value }, fieldState: { invalid, error } }) => (
                    <FormControl fullWidth error={invalid}>
                        <Autocomplete
                            size="small"
                            multiple={multiple}
                            value={value}
                            onChange={(e, data) => onChange(data)}
                            options={options || []}
                            renderInput={(params) => <TextField {...params} {...props} />}
                        />
                        <FormHelperText>{error?.message || " "}</FormHelperText>
                    </FormControl>
                )}
            />
        </>
    )
}
export default InputSelectSearchControl
