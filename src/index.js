import "react-app-polyfill/stable"
import "core-js"
import React from "react"
import ReactDOM from "react-dom"
import { createTheme, ThemeProvider, styled } from "@mui/material/styles"

import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { store, persistor } from "./store"

const theme = createTheme({
    typography: {
        fontFamily: ["Arial", "sans-serif"].join(","),
    },
    palette: {
        primary: {
            main: "#009c99",
        },
        secondary: {
            main: "#ffcc80",
        },
        white: {
            main: "#ffffff",
            overrides: {
                MuiButton: {
                    label: {
                        color: "009c99",
                    },
                },
            },
        },
    },
})

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </PersistGate>
    </Provider>,
    document.getElementById("root"),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
