import React from 'react'

const onSubmit = (event) => {
    event.preventDefault();
}
const Login = (props) => {

    return (
        <>
            <div className="form">
                <h4>Login</h4>
                <form onSubmit={onSubmit}>
                    <div className="input-container">
                        <label className="w-100">Username </label>
                        <div className="w-100">
                            <input type="text" name="uname" className="form-control" placeholder="Username..." required />
                        </div>
                    </div>
                    <div className="input-container">
                        <label className="w-100">Password </label>
                        <div className="w-100">
                            <input type="password" name="pass" className="form-control" placeholder="Password..." required />
                        </div>
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
