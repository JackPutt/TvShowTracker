import React from 'react'

const onSubmit = (event) => {
    event.preventDefault();
}
const Register = (props) => {

    return (
        <>
            <div className="form">
                <h4>Register</h4>
                <form onSubmit={onSubmit}>
                    <div className="input-container">
                        <label className="w-100">Username </label>
                        <div className="w-100">
                            <input type="text" className="form-control" name="uname" placeholder="Username..." required />
                            </div>
                    </div>
                    <div className="input-container">
                        <label className="w-100">Email </label>
                        <div className="w-100">
                            <input type="email" className="form-control" name="email" placeholder="Email..." required />
                        </div>
                    </div>
                    <div className="input-container">
                        <label className="w-100">Password </label>
                        <div className="w-100">
                            <input type="password" className="form-control" name="pass" placeholder="Password..." required />
                        </div>
                    </div>
                    <div className="button-container">
                        <input type="submit" onClick={() => props.register()} value="Register" />
                    </div>
                </form>
            </div>
        </>
    );
};

export default Register;
