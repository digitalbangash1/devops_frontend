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





const browserHistory = createBrowserHistory();

const authService = new AuthServices();

export default class SignIn extends Component {

  constructor() {
    super()
    this.state = {
      Email: '',
      PassWord: '',
      RoleValue: 'User',
      EmailFlag: false,
      PassWordFlag: false,

    }
  }

  handlValues = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value },
      console.log('name', name, 'value:', value),)
  }


  handleChangeRole = (e) => {
    this.setState({ RoleValue: e.target.value })
  }

  CheckValidity = () => {
    console.log('check calling')
    this.setState({
      EmailFlag: false,
      PassWordFlag: false,

    })


    if (this.state.Email === '') {
      this.setState({ EmailFlag: true })
    }
    if (this.state.PassWord === '') {
      this.setState({ PassWordFlag: true })
    }
  }
  handleForceupdateMethod() {
    this.forceUpdate();
  }

  handleSubmit = () => {
    this.CheckValidity()
    if (this.state.Email !== '' &&
      this.state.PassWord !== '') {
      console.log('Accepted')

      let data = {
        email: this.state.Email,
        passWord: this.state.PassWord,
        role: this.state.RoleValue,
      }
      authService.SignIn(data).then((data) => {
        console.log('data:', data)


        if (data.data.isSuccess) {

          browserHistory.push("/admin")
          window.location.reload()

        }
        else {
          console.log('Somthing went worong')
        }

      })
        .catch((error) => {
          console.log('Error:', error)
        })

    }
    else {
      console.log('Not Accepted')
    }
  }



  render() {
    console.log('State : ', this.state)
    return (
      <div className="SignUp-Container">
        <div className="SignUp-SubContainer">
          <div className="Header">Sign In</div>
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
                type="password"
                value={this.state.PassWord}
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
            <Link to="/login">
              <Button className="Btn" color="primary"  >Create New Account</Button>
            </Link>
            <Button className="Btn" variant="contained" color="primary" onClick={this.handleSubmit}>

              Sign In
            </Button>

          </div>
        </div>
      </div>
    )
  }

}