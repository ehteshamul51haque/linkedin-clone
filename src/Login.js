import React from 'react'
import "./Login.css"

function Login() {
    const loginToApp = () => { };
    const register = () => { };

    return (
        <div className='login'>
            <img src="https://www.edigitalagency.com.au/wp-content/uploads/Linkedin-logo-png.png" alt='icon' />

            <form>
                <input placeholder='Full name{required if registered' type="text" />
                <input placeholder='Profile pic URL(optional)' type="text" />
                <input placeholder='Email' type="email" />
                <input placeholder='Password' type="password" />
                <button type='submit' onClick={loginToApp}>Sign In</button>
            </form>
            <p>Not a member?
                <span className='login_register' onClick={register}> Register Now</span>
            </p>
        </div>
    )
}

export default Login
