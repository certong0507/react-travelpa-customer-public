import * as yup from "yup"
import moment from "moment"

const FormSchema = yup
    .object()
    .shape({
        fullName: yup
            .string()
            .nullable()
            .required("Required field")
            .max(255, "The maximum length is 255 characters"),
        travelDocument: yup.string().required("Required field"),
        travelDocumentValue: yup
            .string()
            .required("Required field")
            .when("travelDocument", {
                is: (travelDocument) => travelDocument === "nric",
                then: yup
                    .string()
                    .test("travelDocumentValue", "NRIC must be exactly 12 digits", (value) => {
                        return value.length === 12
                    }),
            })
            .when("nomineeTravelDocument", {
                is: (nomineeTravelDocument) => nomineeTravelDocument !== "nric",
                then: yup
                    .string()
                    .test(
                        "nomineeTravelDocumentValue",
                        "The maximum length is 100 characters",
                        (value) => {
                            return value.length <= 100
                        },
                    ),
            }),
        // .when("travelDocument", {
        //     is: (travelDocument) => travelDocument === "passport",
        //     then: yup
        //         .string()
        //         .test("nric", "Nric must be exactly 20 digit", (value) => {
        //             return value.length === 20
        //         }),
        // }),
        dob: yup
            .date()
            .typeError("Required field")
            .test("dob", "Invalid DOB", (value) => {
                return moment().diff(moment(value), "days") >= 1
            }),
        mobileNo: yup
            .string()
            .nullable()
            .required("Required field")
            .max(20, "The maximum length is 20 digits"),
        address: yup
            .string()
            .nullable()
            .required("Required field")
            .max(255, "The maximum length is 255 characters"),
        occupation: yup
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
        coverageType: yup.string().required("Required field"),
        tripType: yup.string().required("Required field"),
        departureDate: yup
            .date()
            .typeError("Required field")
            .test("departureDate", "Please choose a valid departure date", (value) => {
                return moment().diff(moment(value), "days") <= 0
            }),
        returnDate: yup
            .date()
            .typeError("Required field")
            .min(yup.ref("departureDate"), "Return date can't be before departure date")
            .when("departureDate", {
                is: (departureDate) => departureDate.length > 0,
                then: yup
                    .date()
                    .typeError("Required field")
                    .min(yup.ref("departureDate"), "Return date can't be before departure date"),
            }),
        destination: yup
            .array(
                yup.object().shape({
                    label: yup.string().required(),
                    code: yup.string().required(),
                }),
            )
            .typeError("Required field")
            .min(1, "Destination field must have at least 1 items"),

        insureds: yup.array().of(
            yup.object().shape({
                insuredFullName: yup
                    .string()
                    .required("Required field")
                    .max(255, "The maximum length is 255 characters"),
                insuredTravelDocument: yup.string().required("Required field"),
                insuredTravelDocumentValue: yup
                    .string()
                    .required("Required field")
                    .when("insuredTravelDocument", {
                        is: (insuredTravelDocument) => insuredTravelDocument === "nric",
                        then: yup
                            .string()
                            .test(
                                "insuredTravelDocumentValue",
                                "NRIC must be exactly 12 digits",
                                (value) => {
                                    return value.length === 12
                                },
                            ),
                    })
                    .when("insuredTravelDocument", {
                        is: (insuredTravelDocument) => insuredTravelDocument !== "nric",
                        then: yup
                            .string()
                            .test(
                                "insuredTravelDocumentValue",
                                "The maximum length is 100 characters",
                                (value) => {
                                    return value.length <= 100
                                },
                            ),
                    }),
                insuredDOB: yup
                    .date()
                    .typeError("Required field")
                    .test("insuredDOB", "Invalid DOB", (value) => {
                        return moment().diff(moment(value), "days") >= 1
                    }),
                insuredAddress: yup
                    .string()
                    .required("Required field")
                    .max(255, "The maximum length is 255 characters"),
                insuredOccupation: yup
                    .string()
                    .required("Required field")
                    .max(255, "The maximum length is 255 characters"),
                insuredMobileNo: yup
                    .string()
                    .nullable()
                    .required("Required field")
                    .max(20, "The maximum length is 20 digits"),
                nomineesTotalShare: yup.string(),
                nominees: yup.array().of(
                    yup.object().shape({
                        nomineeName: yup
                            .string()
                            .required("Required field")
                            .max(255, "The maximum length is 255 characters"),
                        nomineeDOB: yup
                            .date()
                            .typeError("Required field")
                            .test("nomineeDOB", "Invalid DOB", (value) => {
                                return moment().diff(moment(value), "days") >= 1
                            }),
                        nomineeTravelDocument: yup.string().required("Required field"),
                        nomineeTravelDocumentValue: yup
                            .string()
                            .required("Required field")
                            .when("nomineeTravelDocument", {
                                is: (nomineeTravelDocument) => nomineeTravelDocument === "nric",
                                then: yup
                                    .string()
                                    .test(
                                        "nomineeTravelDocumentValue",
                                        "NRIC must be exactly 12 digit",
                                        (value) => {
                                            return value.length === 12
                                        },
                                    ),
                            })
                            .when("nomineeTravelDocument", {
                                is: (nomineeTravelDocument) => nomineeTravelDocument !== "nric",
                                then: yup
                                    .string()
                                    .test(
                                        "nomineeTravelDocumentValue",
                                        "The maximum length is 100 digits",
                                        (value) => {
                                            return value.length <= 100
                                        },
                                    ),
                            }),
                        nomineeRelationship: yup
                            .string()
                            .required("Required field")
                            .max(255, "The maximum length is 255 characters"),
                        nomineeMobileNo: yup
                            .string()
                            .nullable()
                            .required("Required field")
                            .max(20, "The maximum length is 20 digits"),
                        nomineeShare: yup
                            .number()
                            .typeError("1 to 100 only")
                            .required("Required field")
                            .min(1, "1 to 100 only")
                            .max(100, "1 to 100 only"),
                    }),
                ),
            }),
        ),
        child: yup.array().of(
            yup.object().shape({
                insuredFullName: yup
                    .string()
                    .required("Required field")
                    .max(255, "The maximum length is 255 characters"),
                insuredTravelDocument: yup.string().required("Required field"),
                insuredTravelDocumentValue: yup
                    .string()
                    .required("Required field")
                    .when("insuredTravelDocument", {
                        is: (insuredTravelDocument) => insuredTravelDocument === "nric",
                        then: yup
                            .string()
                            .test(
                                "insuredTravelDocumentValue",
                                "NRIC must be exactly 12 digits",
                                (value) => {
                                    return value.length === 12
                                },
                            ),
                    })
                    .when("nomineeTravelDocument", {
                        is: (nomineeTravelDocument) => nomineeTravelDocument !== "nric",
                        then: yup
                            .string()
                            .test(
                                "nomineeTravelDocumentValue",
                                "The maximum length is 100 characters",
                                (value) => {
                                    return value.length <= 100
                                },
                            ),
                    }),
                insuredDOB: yup
                    .date()
                    .typeError("Required field")
                    .test("insuredDOB", "Invalid DOB", (value) => {
                        return moment().diff(moment(value), "days") >= 1
                    }),
                insuredAddress: yup
                    .string()
                    .required("Required field")
                    .max(255, "The maximum length is 255 characters"),
                insuredOccupation: yup
                    .string()
                    .required("Required field")
                    .max(255, "The maximum length is 255 characters"),
                insuredMobileNo: yup
                    .string()
                    .nullable()
                    .required("Required field")
                    .max(20, "The maximum length is 20 digits"),
                nomineesTotalShare: yup.string(),
                nominees: yup.array().of(
                    yup.object().shape({
                        nomineeName: yup
                            .string()
                            .required("Required field")
                            .max(255, "The maximum length is 255 characters"),
                        nomineeDOB: yup
                            .date()
                            .typeError("Required field")
                            .test("nomineeDOB", "Invalid DOB", (value) => {
                                return moment().diff(moment(value), "days") >= 1
                            }),
                        nomineeTravelDocument: yup.string().required("Required field"),
                        nomineeTravelDocumentValue: yup
                            .string()
                            .required("Required field")
                            .when("nomineeTravelDocument", {
                                is: (nomineeTravelDocument) => nomineeTravelDocument === "nric",
                                then: yup
                                    .string()
                                    .test(
                                        "nomineeTravelDocumentValue",
                                        "NRIC must be exactly 12 digit",
                                        (value) => {
                                            return value.length === 12
                                        },
                                    ),
                            })
                            .when("nomineeTravelDocument", {
                                is: (nomineeTravelDocument) => nomineeTravelDocument !== "nric",
                                then: yup
                                    .string()
                                    .test(
                                        "nomineeTravelDocumentValue",
                                        "The maximum length is 100 digits",
                                        (value) => {
                                            return value.length <= 100
                                        },
                                    ),
                            }),
                        nomineeRelationship: yup
                            .string()
                            .required("Required field")
                            .max(255, "The maximum length is 255 characters"),
                        nomineeMobileNo: yup
                            .string()
                            .nullable()
                            .required("Required field")
                            .max(20, "The maximum length is 20 digits"),
                        nomineeShare: yup
                            .number()
                            .typeError("1 to 100 only")
                            .required("Required field")
                            .min(1, "1 to 100 only")
                            .max(100, "1 to 100 only"),
                    }),
                ),
            }),
        ),
    })
    .required()

export default FormSchema
