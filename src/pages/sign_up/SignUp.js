import React from "react"
import { GoogleOAuthProvider } from '@react-oauth/google'

import Header from "src/components/header"
import Footer from "src/components/footer/copyright"
import ViewsDesktop from "src/pages/sign_up/components/views/ViewsDesktop"
import ViewTablet from "src/pages/sign_up/components/views/ViewTablet"
import ViewMobilePortrait from "src/pages/sign_up/components/views/ViewMobilePortrait"
import {
    DesktopView,
    TabletView,
    MobilePortraitView,
} from "src/utils/functions"

const clientId = "742772385104-0lr2j2mttucusr92559b5rjd91ov1b7i.apps.googleusercontent.com"

export default function SignUp() {
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
