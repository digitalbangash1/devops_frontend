
import axiosInstance from "./axiosInstance"


 

export default class AuthServices {
  SignUp(data) {
    return axiosInstance.post('/api/Auth/User', data, false)
  }

  SignIn(data) {
    return axiosInstance.post('/api/Auth/Login', data, false)
  }
}
//auth classs
