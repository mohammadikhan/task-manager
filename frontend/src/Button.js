import ReactDOM from 'react-dom/client';
import React from 'react';
import Register from './Register';

function Button(props) {

    const handleAuth = (name) => {
        if (name == "Sign Up") {
            const root = ReactDOM.createRoot(document.getElementById('root'));
                root.render(
                <Register/>
                );
            }
                        
        }

    return(
        <div>
            <button onClick={() => handleAuth(props.name)} className="button">{props.name}</button>
        </div>
    )
}

export default Button;