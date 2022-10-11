import * as yup from "yup"

const Schema = yup
    .object()
    .shape({
        name: yup
            .string()
            .nullable()
            .required("Required field")
            .max(255, "The maximum length is 255 characters"),
    })
    .required()

export default Schema
