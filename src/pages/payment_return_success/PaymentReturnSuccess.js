import React from "react"
import { connect } from "react-redux"
import Typography from "@mui/material/Typography"
import { IoMdCheckmarkCircleOutline } from "react-icons/io"

// import Banner from "./Banner"
import Header from "src/components/header"
import Footer from "src/components/footer/copyright"

export const PaymentReturnSuccess = ({}) => {
    return (
        <div className="page-body">
            <Header />
            <div
                className="text-center"
                style={{ padding: "5%", backgroundColor: "rgb(237, 247, 237)" }}
            >
                <IoMdCheckmarkCircleOutline color="#009c99" size="5em" />
            </div>
            <div className="text-center mt-5">
                <Typography className="mb-3" variant="h4" color="primary">
                    Thank You !
                </Typography>
                <Typography className="mb-3" variant="h6">
                    Payment Done Successfully
                </Typography>
                <Typography className="mb-3 w-50 m-auto" variant="body2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis tellus
                    accumsan, blandit eros eu, gravida nulla. Quisque vel urna a tellus ultricies
                    lacinia.
                </Typography>
            </div>
            <Footer />
        </div>
    )
}

const mapStateToProps = (state) => ({
    insuranceDetailsForm: state.insurance.insuranceDetailsForm,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(PaymentReturnSuccess)
