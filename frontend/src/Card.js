
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
                <button className="button" name="Sign In" type="submit">Sign In</button>
            <p>Don't have an account?</p>
            <button className="button" name="Sign Up">Sign Up</button>
            
            
        </div>

    )
}

export default Card;