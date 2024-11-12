
import React from "react";
import { Link } from "react-router-dom";
import '../styles/login.css';

function Login() {
       
    return(

        <div className="login-container">
        <div className="login-card">
            <div className="login-left">
                <h2 className="login-title">Welcome Back!</h2>
                <p> Resume Managing Your Workflow Effortlessly. </p>
            </div>
            <div className="login-right">
                <h2 className="login-title">Login</h2>
                <form className="login-form">
                    <div className="input-group">
                        <input type="email" placeholder="Email" className="login-input" required />
                    </div>
                    <div className="input-group">
                        <input type="password" placeholder="Password" className="login-input" required />
                    </div>
                    <Link to="/forgot-password" className="forgot-password-link">Forgot password?</Link>
                    <button className="login-button" type="submit">Log In</button>
                </form>
                <p className="signup-prompt">
                    Don’t have an account? <Link to="/register" className="signup-link">Sign up</Link>
                </p>
            </div>
        </div>
    </div>
    )

}

export default Login