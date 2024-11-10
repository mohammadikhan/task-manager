
function Button(props) {

    const handleAuth = (name) => {
        if (name == "Sign In") {
            console.log("Logging In...");
        } else if ( name == "Sign Up"){
            console.log("Redirecting you to the registration page...");
        }
        
    }

    return(
        <div>
            <button onClick={() => handleAuth(props.name)} className="button">{props.name}</button>
        </div>
    )
}

export default Button;