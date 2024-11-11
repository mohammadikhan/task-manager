
import React from "react";


function Login() {

   
    return(

        <div className="card">
            <h2>Login</h2>
            <div>
                <input placeholder="Username"></input>
            </div>
            <div>
                <input placeholder="Password"></input>
            </div>
            <p></p>
                <button className="button" name="Sign In" type="submit">Sign In</button>
            <p>Don't have an account?</p>
            <div>                
                <button className="button">Sign Up</button>
            </div>
            
            
            
        </div>
    )

}

export default Login