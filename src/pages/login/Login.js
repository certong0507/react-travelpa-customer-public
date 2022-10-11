import React from "react"
import { GoogleOAuthProvider } from '@react-oauth/google'

import {
    DesktopView,
    TabletView,
    MobilePortraitView,
} from "src/utils/functions"
import Header from "src/components/header"
import Footer from "src/components/footer/copyright"
import ViewsDesktop from "src/pages/login/components/views/ViewsDesktop"
import ViewTablet from "src/pages/login/components/views/ViewTablet"
import ViewMobilePortrait from "src/pages/login/components/views/ViewMobilePortrait"

const clientId = "742772385104-0lr2j2mttucusr92559b5rjd91ov1b7i.apps.googleusercontent.com"

const Login = () => {
    return (
        <>
            <Header />

            <GoogleOAuthProvider clientId={clientId}>
                <DesktopView>
                    <ViewsDesktop />
                </DesktopView>

                <TabletView>
                    <ViewTablet />
                </TabletView>

                <MobilePortraitView>
                    <ViewMobilePortrait />
                </MobilePortraitView>
            </GoogleOAuthProvider>

            <Footer />
        </>
    )
}

export default Login
