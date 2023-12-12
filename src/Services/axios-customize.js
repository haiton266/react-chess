import axios from 'axios'
const axiosC = axios.create({
  baseURL: 'http://127.0.0.1:5001'
});
// Add a response interceptor
axiosC.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});

export default axiosC;