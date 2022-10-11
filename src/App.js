import React, { useEffect, Suspense } from "react"
import { HashRouter, Route, Routes } from "react-router-dom"
import CircularProgress from "@mui/material/CircularProgress"
import Typography from "@mui/material/Typography"
import ReactGA from "react-ga"

import "./scss/style.scss"
import routes from "src/dashboardRoutes"

const loading = (
    <div className="h-100vh d-flex">
        <div className="d-flex flex-column m-auto">
            <CircularProgress />
            <Typography variant="caption" className="mt-3" color="primary">Loading...</Typography>
        </div>
    </div>
)

// Containers
const DefaultLayout = React.lazy(() => import("./layout/DefaultLayout"))

// Pages
const Login = React.lazy(() => import("./pages/login/Login"))
const SignUp = React.lazy(() => import("./pages/sign_up/SignUp"))
const Page404 = React.lazy(() => import("./pages/page404/Page404"))
const Page500 = React.lazy(() => import("./pages/page500/Page500"))
const Landing = React.lazy(() => import("./pages/landing"))
const Insurance = React.lazy(() => import("./pages/insurance/Insurance"))
const MalCentral = React.lazy(() => import("./pages/travel_packages/malcentral/MalCentral"))
const AboutUs = React.lazy(() => import("./pages/about_us/AboutUs"))
const ContactUs = React.lazy(() => import("./pages/contact_us/ContactUs"))
const PrivacyPolicy = React.lazy(() => import("./pages/privacy_policy/PrivacyPolicy"))
const TermAndCondition = React.lazy(() => import("./pages/term_and_condition/TermAndCondition"))
const ForgotPassword = React.lazy(() => import("./pages/forgot-password/ForgotPassword"))
const ForgotPasswordSent = React.lazy(() =>
    import("./pages/forgot_password_sent/ForgotPasswordSent"),
)
const ResetPassword = React.lazy(() => import("./pages/reset_password/ResetPassword"))
const ResetPasswordSuccess = React.lazy(() =>
    import("./pages/reset_password_success/ResetPasswordSuccess"),
)
const PaymentReturnFail = React.lazy(() => import("./pages/payment_return_fail/PaymentReturnFail"))
const VerifyEmail = React.lazy(() => import("./pages/verify_email/VerifyEmail"))
const Demo1 = React.lazy(() => import("./pages/dashboard/my_profile/MyProfile"))
// const Products = React.lazy(() => import("./pages/products/Products"))

const App = () => {
    ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS)

    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search)
    }, [])

    return (
        <HashRouter>
            <Suspense fallback={loading}>
                <Routes>
                    <Route exact path="/login" name="Login Page" element={<Login />} />
                    <Route exact path="/sign-up" name="Sign Up Page" element={<SignUp />} />
                    <Route exact path="/404" name="Page 404" element={<Page404 />} />
                    <Route exact path="/500" name="Page 500" element={<Page500 />} />
                    <Route
                        exact
                        path="/travel-insurance"
                        name="Travel Insurance"
                        element={<Insurance />}
                    />
                     <Route
                        exact
                        path="/travel-packages"
                        name="Travel Packages"
                        element={<MalCentral />}
                    />
                    <Route exact path="/about-us" name="About Us" element={<AboutUs />} />
                    <Route exact path="/contact-us" name="Contact Us" element={<ContactUs />} />
                    {/* <Route  path="/products/:insurance" name="Products" element={<Products />} /> */}
                    <Route
                        exact
                        path="/privacy-policy"
                        name="Privacy Policy"
                        element={<PrivacyPolicy />}
                    />
                    <Route
                        exact
                        path="/term-and-condition"
                        name="Term and Condition"
                        element={<TermAndCondition />}
                    />
                    <Route
                        exact
                        path="/forgot-password"
                        name="Forgot Password"
                        element={<ForgotPassword />}
                    />
                    <Route
                        exact
                        path="/forgot-password-sent"
                        name="Forgot Password Sent"
                        element={<ForgotPasswordSent />}
                    />
                    <Route
                        path="/reset-password"
                        name="Reset Password"
                        element={<ResetPassword />}
                    />
                    <Route
                        exact
                        path="/reset-password-success"
                        name="Reset Password Success"
                        element={<ResetPasswordSuccess />}
                    />
                    <Route
                        exact
                        path="/reset-password-fail"
                        name="Reset Password Fail"
                        element={<PaymentReturnFail />}
                    />
                    <Route
                        exact
                        path="/verify-email"
                        name="Verify Email"
                        element={<VerifyEmail />}
                    />
                    <Route path="dashboard" name="Dashboard" element={<DefaultLayout />}>
                        {routes?.map((item, index) => (
                            <Route
                                key={index}
                                path={item?.path}
                                name={item?.name}
                                element={<item.element />}
                            />
                        ))}
                    </Route>
                    <Route path="/" name="Home" element={<Landing />} />
                    <Route path="*" name="Not Found" element={<Page404 />} />
                </Routes>
            </Suspense>
        </HashRouter>
    )
}

export default App
