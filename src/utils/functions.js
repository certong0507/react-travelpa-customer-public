import React from "react"
import NumberFormat from "react-number-format"
import { useMediaQuery } from "react-responsive"

export const NumberFormatterLeadingZeros = React.forwardRef(function NumberFormatCustom(
    props,
    ref,
) {
    const { onChange, name, ...other } = props

    return (
        <NumberFormat
            {...other}
            allowLeadingZeros
            allowNegative={false}
            decimalSeparator={false}
            getInputRef={ref}
            onValueChange={(values) => {
                onChange({
                    target: {
                        name: name,
                        value: values.value,
                    },
                })
            }}
        />
    )
})

export const NumberFormatter = React.forwardRef(function NumberFormatCustom(props, ref) {
    const { onChange, name, ...other } = props

    return (
        <NumberFormat
            {...other}
            allowNegative={false}
            getInputRef={ref}
            onValueChange={(values) => {
                onChange({
                    target: {
                        name: name,
                        value: values.value,
                    },
                })
            }}
        />
    )
})

export const DesktopView = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop ? children : null
}

export const TabletView = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
    return isTablet ? children : null
}

export const DefaultView = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 768 })
    return isNotMobile ? children : null
}

export const MobilePortraitView = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })

    return isMobile ? children : null
}