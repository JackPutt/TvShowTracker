import React, { useState, Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css'
import Login from './components/Login';

const App = () => {
    const [token, setToken] = useState([]);

	const loginSubmit = async () => {
		//Grab values from login form
		var { uname, pass } = document.forms[0];

		//Login in using api/login endpoint
		await fetch('https://localhost:7263/api/login', {
			method: "post",
			headers: { 'Content-Type': 'application/json' },
			body: '{ "username": "' + uname.value + '", "password": "' + pass.value + '" }'
		})
			.then(function (response) {
				if (response.ok) {
					console.log("Successfully logged in!");
					return response.json();
				}
				throw new Error(response.statusText);
			})
			.then(function (data) {
				setToken(data);
			})
			.catch(function (error) {
				console.log("Error: ", error);
			});
	}

	//If token not set yet, then show login/register page
    if (token.length == 0 || token.token == '') {
        return (
            <Login loginSubmit={loginSubmit} />
        );
    }

    return (
        <h1>Hello World</h1>
    );
}
export default App
