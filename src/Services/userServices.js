import axiosC from './axios-customize'

const loginApi = (username, password) => {
    return axiosC.post("/user/login", { username: username, password: password })
}

export { loginApi };