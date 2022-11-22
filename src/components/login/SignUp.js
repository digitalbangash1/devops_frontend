import React, { Component } from 'react'
import './SignUp.scss'
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { createBrowserHistory } from 'history';
import AuthServices from '../../api/AuthServices';



const authService = new AuthServices();
const browserHistory = createBrowserHistory();

export default class SignUp extends Component {

  constructor() {
    super()
    this.state = {
      Email: '',
      PassWord: '',
      ConfirmPassWord: '',
      RoleValue: 'User',
      EmailFlag: false,
      PassWordFlag: false,
      ConfirmPassWordFlag: false,

    }
  }

  handlValues = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value }, console.log('name', name, 'value:', value),)
  }


  handleChangeRole = (e) => {
    this.setState({ RoleValue: e.target.value })
  }


  CheckValidity = () => {
    console.log('check calling')
    this.setState({
      EmailFlag: false,
      PassWordFlag: false,
      ConfirmPassWordFlag: false,
    })


    if (this.state.Email === '') {
      this.setState({ EmailFlag: true })
    }
    if (this.state.PassWord === '') {
      this.setState({ PassWordFlag: true })
    }
    if (this.state.ConfirmPassWord === '') {
      this.setState({ ConfirmPassWordFlag: true })
    }
  }

  handleSubmit = (e) => {

    this.CheckValidity()
    if (this.state.Email !== '' &&
      this.state.PassWord !== '' &&
      this.state.ConfirmPassWord !== '') {
      console.log('Accepted')

      let data = {
        email: this.state.Email,
        passWord: this.state.PassWord,
        confirmPassWord: this.state.ConfirmPassWord,
        role: this.state.RoleValue,
      }
      authService.SignUp(data).then((data) => {
        console.log('data :', data)

        if (data.data.isSuccess) {
          browserHistory.push("/admin")
          window.location.reload()
        }
        else {
          console.log('Somthing went worong')
        }

      })
        .catch((error) => {
          console.log('Error :', error)
        })

    }
    else {
      console.log('Not Accepted')
    }
  }

  handleSignIn = () => {
    this.props.history.push("/SignIn")
  }

  render() {
    console.log('State : ', this.state)
    return (
      <div className="SignUp-Container">
        <div className="SignUp-SubContainer">
          <div className="Header">Register</div>
          <div className="Body">
            <form className="form">

              <TextField
                error={this.state.EmailFlag}
                className="TextField"
                name="Email"
                label="Email"
                variant="outlined"
                size="small"
                value={this.state.Email}
                onChange={this.handlValues}
              />
              <TextField
                error={this.state.PassWordFlag}
                className="TextField"
                name="PassWord"
                label="PassWord"
                variant="outlined"
                size="small"
                type="passWord"
                value={this.state.PassWord}
                onChange={this.handlValues}
              />
              <TextField
                error={this.state.ConfirmPassWordFlag}
                className="TextField"
                name="ConfirmPassWord"
                label="Confirm PassWord"
                variant="outlined"
                size="small"
                type="passWord"
                value={this.state.ConfirmPassWord}
                onChange={this.handlValues}
              />
              <RadioGroup
                className="Roles"
                name="Role"
                value={this.state.RoleValue}
                onChange={this.handleChangeRole}
              >
                <FormControlLabel className="RoleValue" value="Admin" control={<Radio />} label="Admin" />
                <FormControlLabel className="RoleValue" value="User" control={<Radio />} label="User" />
              </RadioGroup>
            </form>

          </div>
          <div className="buttons">
            <Link to="/login/SignIn" >
              <Button className="Btn" color="primary">Sign In</Button>
            </Link>
            <Button className="Btn" variant="contained" color="primary" onClick={this.handleSubmit}>
              SignUp
            </Button>
          </div>
        </div>
      </div>

    )
  }

}
