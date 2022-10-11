import React from "react"
import { CContainer, CHeader, CHeaderBrand, CHeaderNav, CNavItem, CImage } from "@coreui/react"
import { CgMenu } from "react-icons/cg"

import logo from "src/assets/logo.png"
import { MobilePortraitView } from "src/utils/functions"
import MenuDrawer from "src/components/header/components/drawers/DrawerPublicMenu"

export default function MobilePortraitHeader() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    })

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
            return
        }

        setState({ ...state, [anchor]: open })
    }
    // const navigate = useNavigate()

    return (
        <MobilePortraitView>
            <CHeader position="sticky" className="border-bottom-0">
                <CContainer className="d-flex justify-content-between">
                    <div className="d-flex justify-content-md-around">
                        <CHeaderBrand href="#">
                            <CImage fluid src={logo} style={{ width: "35%" }} />
                        </CHeaderBrand>
                        <div id="mobile-menu-hamburger" className="justify-content-end">
                            <CHeaderNav>
                                <CNavItem className="align-self-center">
                                    <CgMenu
                                        size={"1.5em"}
                                        color="rgb(0, 156, 153)"
                                        onClick={toggleDrawer("left", true)}
                                    />
                                </CNavItem>
                            </CHeaderNav>

                            <MenuDrawer
                                state={state}
                                setState={setState}
                                toggleDrawer={toggleDrawer}
                            />
                        </div>
                    </div>
                </CContainer>
            </CHeader>
        </MobilePortraitView>
    )
}
