
import React from "react";
import { Link } from "react-router-dom";
import '../styles/register.css'

const Register = () => {

    const submit = async () => {
        const passWord = document.getElementById("pass").value;
        const verify = document.getElementById("verify").value;

        if (passWord === verify){
            alert("PASSWORDS DO NOT MATCH")
        }
       //console.log(passWord);
    }

    return (
        <div className="register-container">
        <div className="register-card">
            <div className="register-left">
                <h2 className="register-title">Register Your Account!</h2>
                <p> Register Now to Simplify Your Task Management </p>
            </div>
            <div className="register-right">
                <h2 className="register-title">Create Your Account</h2>
                <form onSubmit={submit} className="register-form">
                    <div className="input-group">
                        <input type="email" placeholder="Email" className="register-input" required />
                    </div>
                    <div className="input-group">
                        <input type="username" placeholder="Username" className="register-input" required />
                    </div>
                    <div className="input-group">
                        <input type="password" id="pass" placeholder="Password" className="register-input" required />
                    </div>
                    <div className="input-group">
                        <input type="password" id="verify" placeholder="Verify Password" className="register-input" required />
                    </div>
                    <button className="register-button" type="submit">Register</button>
                </form>
                <p className="register-prompt">
                    Already Have an Account? <Link to="/login" className="login-link">Login</Link>
                </p>
            </div>
        </div>
    </div>
    )
}

export default Register