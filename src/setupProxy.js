const { createProxyMiddleware } = require("http-proxy-middleware")

// References:
// https://github.com/chimurai/http-proxy-middleware/blob/master/recipes/router.md#proxy-table

const proxyTable = {
    "http://localhost:3077": "http://localhost:3000",
}

module.exports = function (app) {
    app.use(
        createProxyMiddleware("/api", {
            target: process.env.REACT_APP_API_ROOT_URL,
            changeOrigin: true,
            router: proxyTable,
        }),
    )
}
