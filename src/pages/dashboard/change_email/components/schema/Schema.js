import * as yup from "yup"

const VerificationCodeSchema = yup
    .object()
    .shape({
        verifyCode: yup.string().required("Field is required."),
    })
    .required()

const NewEmailSchema = yup
    .object()
    .shape({
        newEmail: yup.string().required("Field is required."),
        confirmationCode: yup.string(),
    })
    .required()

export { VerificationCodeSchema, NewEmailSchema }
