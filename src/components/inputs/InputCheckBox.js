import * as React from "react"
import FormControl from "@mui/material/FormControl"
import Checkbox from "@mui/material/Checkbox"
import FormHelperText from "@mui/material/FormHelperText"
import Typography from "@mui/material/Typography"
import { Controller } from "react-hook-form"

const InputCheckBox = ({ control, name, label, ...props }) => {
    return (
        <>
            <Controller
                control={control}
                name={name}
                defaultValue={false}
                render={({ field: { onChange, value }, fieldState: { invalid, error } }) => (
                    <FormControl fullWidth error={invalid} >
                        <div className="d-flex">
                            <Checkbox
                                size="small"
                                onChange={onChange}
                                checked={value}
                            />
                            <div className="align-self-center">
                                <Typography variant="body1" component="div">
                                    {label}
                                </Typography>
                            </div>
                        </div>
                        <FormHelperText>{error?.message || " "}</FormHelperText>
                    </FormControl>
                )}
            />
        </>
    )
}
export default InputCheckBox
