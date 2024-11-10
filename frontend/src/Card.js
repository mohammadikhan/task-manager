import Button from "./Button.js";

function Card(props) {

    return (
        <div className="card">
            <img></img>
            <h2>{props.name}</h2>
            <div>
                <input placeholder="Username"></input>
            </div>
            <div>
                <input placeholder="Password"></input>
            </div>
            <p></p>
                <Button name="Sign In" type="submit">Sign In</Button>
            <p>Don't have an account?</p>
            <Button name="Sign Up">Sign Up</Button>
            
            
        </div>

    )
}

export default Card;