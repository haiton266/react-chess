import axiosC from './axios-customize'


const logoutApi = (username) => {
    return axiosC.post(`/user/${username}/logout`);
}


const loginApi = (username, password) => {
    return axiosC.post("/user/login", { username: username, password: password })
}
const RegisterApi = (username, password, email, otp) => {
    return axiosC.post("/user/register", { email: email, username: username, password: password })
}

const getAllUser = () => {
    return axiosC.get("/user/all")
}

const updateScore = (username, score) => {
    return axiosC.put(`/user/${username}`, { score });
}


export { loginApi, getAllUser, updateScore, RegisterApi, logoutApi };