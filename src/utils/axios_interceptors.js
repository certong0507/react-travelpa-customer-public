import axios from 'axios'

import { doLogout } from 'src/action/api_actions'

export default (store) => {
    axios.interceptors.request.use(async (request) => {
        request.withCredentials = true
        return request
    })

    axios.interceptors.response.use(
        function (response) {
            return response
        },
        function (error) {
            if (error.response) {
                if (error.response.status === 401 || error?.response?.data?.code === 401) {
                    store.dispatch(doLogout())
                }
            }

            return Promise.reject(error)
        },
    )
}
