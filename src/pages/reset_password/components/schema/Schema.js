import * as yup from "yup"

const Schema = yup
    .object()
    .shape({
        password: yup.string().required("Field is required.")
        .min(8, 'Password must be at least 8 characters'),
        confirmPassword: yup.string()
        .required('Field is required.')
        .oneOf([yup.ref('password')], 'Passwords does not match'),
    })
    .required();

export default Schema
