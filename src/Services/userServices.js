import axiosC from './axios-customize'

const loginApi = (username, password) => {
    return axiosC.post("/user/login", { username: username, password: password })
}


const getAllUser = () => {
    return axiosC.get("/user/all")
}

const updateScore = (username, score) => {
    return axiosC.put(`/user/${username}`, { score });
}

export { loginApi, getAllUser, updateScore };