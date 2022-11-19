

/* import AxiosServices from './AxiosServices'
import Configurations from '../configurations/Configurations'

const axiosServices = new AxiosServices();

export default class AuthServices {
  SignUp(data) {
    return axiosServices.post(Configurations.SignUp, data, false)
  }

  SignIn(data) {
    return axiosServices.post(Configurations.SignIn, data, false)
  }
} */
import axiosInstance from "./axiosInstance"


 

export default class AuthServices {
  SignUp(data) {
    return axiosInstance.post('/api/Auth/User', data, false)
  }

  SignIn(data) {
    return axiosInstance.post('/api/Auth/Login', data, false)
  }
}

