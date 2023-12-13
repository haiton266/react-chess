import axiosC from './axios-customize'
const verify_otp = (username, password, email, otp) => {
    return axiosC.post("/user/verify_otp", { username, password, email, otp })
}
export { verify_otp };