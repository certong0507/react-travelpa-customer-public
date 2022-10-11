import React from "react"
import { connect } from "react-redux"

import DesktopHeader from "src/components/header/components/headers/DesktopHeader"
import TabletHeader from "src/components/header/components/headers/TabletHeader"
import MobilePortraitPublicHeader from "src/components/header/components/headers/MobilePortraitHeader"

export const Header = ({}) => {
    return (
        <>
            <DesktopHeader />
            <TabletHeader />
            <MobilePortraitPublicHeader />
        </>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
