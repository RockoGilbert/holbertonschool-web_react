import React, { Component } from "react";
import "./Login.css";

class Login extends Component {
  render() {
    return (
      <React.Fragment>
          <form>
						<p>Login to access the full dashboard</p>
						<label htmlFor="email" onClick={() => {
							// select corresponding input
							document.getElementById('password').focus();
						}}>Email</label>
						<input type="email" id="email" />
						<label htmlFor="password" onClick={() => {
							// select corresponding input
							document.getElementById('password').focus();
						}}>Password</label>
						<input type="password" id="password" />
						<button>OK</button>
          </form>
      </React.Fragment>
    );
  }
};

export default Login;
