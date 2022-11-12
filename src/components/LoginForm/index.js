import {Component} from 'react'

import './index.css'

class LoginFoam extends Component {
  state = {username: '', password: '', isInvalidPassword: false}

  componentDidMount() {}

  onChangeUsername = event => {
    this.setState({
      username: event.target.value,
      isInvalidPassword: false,
      errorText: '',
    })
  }

  onChangePassword = event =>
    this.setState({password: event.target.value, isInvalidPassword: false})

  routeToHome = () => {
    const {history} = this.props
    history.replace('/')
  }

  fetchCredential = async () => {
    const {username, password} = this.state
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify({username, password}),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    console.log(response)
    if (response.ok === true) {
      this.routeToHome(data)
    } else {
      this.setState({
        isInvalidPassword: true,
        errorText: '*Please Enter the Username and Password',
      })
    }
  }

  submitForm = event => {
    event.preventDefault()
    this.setState({username: '', password: ''})
    const {username, password} = this.state
    if (username === '') {
      this.setState({
        isInvalidPassword: true,
        errorText: '*Please Enter the Username',
      })
    } else if (password === '') {
      this.setState({
        isInvalidPassword: true,
        errorText: '*Please Enter the Password',
      })
    } else {
      this.fetchCredential()
    }
  }

  renderUsernameInput = () => {
    const {username} = this.state
    return (
      <div className="input-label-con">
        <label htmlFor="username" className="label">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="input"
          value={username}
          placeholder="Username"
          onChange={this.onChangeUsername}
        />
      </div>
    )
  }

  renderPasswordInput = () => {
    const {password} = this.state
    return (
      <div className="input-label-con">
        <label htmlFor="password" className="label">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="input"
          value={password}
          placeholder="Password"
          onChange={this.onChangePassword}
        />
      </div>
    )
  }

  render() {
    const {isInvalidPassword, errorText} = this.state
    return (
      <>
        <div className="login-form-bg">
          <div className="login-image-con">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="logo-image-login"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
              alt="website login"
              className="login-image"
            />
          </div>
          <form className="username-password-con" onSubmit={this.submitForm}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
              className="lg-logo-image-login"
            />
            {this.renderUsernameInput()}
            {this.renderPasswordInput()}
            <button type="submit" className="login-btn">
              Login
            </button>
            {isInvalidPassword && <p className="error-msg">{errorText}</p>}
          </form>
        </div>
      </>
    )
  }
}

export default LoginFoam
