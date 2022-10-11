import * as yup from "yup"
import moment from "moment"

const Schema = yup
    .object()
    .shape({
        fullName: yup
            .string()
            .nullable()
            .required("Required field")
            .max(255, "The maximum length is 255 characters"),
        email: yup
            .string()
            .nullable()
            .required("Required field")
            .email("Must be a valid email")
            .max(255, "The maximum length is 255 characters"),
        password: yup
            .string()
            .nullable()
            .required("Required field")
            .min(8, 'Password must be at least 8 characters')
            .max(50, "The maximum length is 50 characters"),
    })
    .required()

export default Schema
