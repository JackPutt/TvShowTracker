import React from 'react'

const onSubmit = (event) => {
    event.preventDefault();
}
const Login = (props) => {

    return (
        <>
            <div className="form">
                <form onSubmit={onSubmit}>
                    <div className="input-container">
                        <label>Username </label>
                        <input type="text" name="uname" required />
                    </div>
                    <div className="input-container">
                        <label>Password </label>
                        <input type="password" name="pass" required />
                    </div>
                    <div className="button-container">
                        <input type="submit" onClick={() => props.loginSubmit()} />
                    </div>
                </form>
            </div>
        </>
    );
};

export default Login;
