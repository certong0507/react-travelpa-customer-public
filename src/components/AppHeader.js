import React from "react"
import { connect } from "react-redux"

import Header from "src/components/header"

const AppHeader = () => {
    return <Header />
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader)
