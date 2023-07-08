import React, { Fragment, useRef, useState } from "react"
import Loader from '../layout/loader/Loader'
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { Link } from "react-router-dom";
import './loginSignup.css'


const Login = () => {

    const loginTab = useRef(null);
    const registerTab = useRef(null);
    const switcherTab = useRef(null);

    const [loginemail, setLoginEmail] = useState('')
    const [loginpassword, setLoginPassword] = useState('')

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = user;
    const [avatar,setAvatar] = useState();
    const [avatarPreview,setAvatarPreview] = useState('/Profile.png')


    const switchTabs = (e, tab) => {

        if (tab === 'login') {
            switcherTab.current.classList.add('shiftToNeutral')
            switcherTab.current.classList.remove('shiftToRight')

            registerTab.current.classList.remove('shiftToNeutralForm')
            loginTab.current.classList.remove('shiftToLeft')
        };

        if (tab === 'register') {
            switcherTab.current.classList.add('shiftToRight')
            switcherTab.current.classList.remove('shiftToNeutral')

            registerTab.current.classList.add('shiftToNeutralForm')
            loginTab.current.classList.add('shiftToLeft')
        }
    };

    const loginSubmit = () => {
        console.log('Login form submitted')

    };

    const registerSubmit = (e) => {
        e.preventDefault()

        const myForm = new FormData();

        myForm.set('name', name);
        myForm.set('E-mail', email);
        myForm.set('Password', password);
        myForm.set('avatar', avatar);

        console.log('Signup Form submit')
    };

    const registerDataChange = () =>{

    };

    return <Fragment>
        <div className="loginSignupContainer">
            <div className="loginSignupBox">
                <div>
                    <div className="loginSignupToggle">
                        <p onClick={(e) => switchTabs(e, 'login')}>Login</p>
                        <p onClick={(e) => switchTabs(e, 'register')}>Register</p>
                    </div>
                    <button ref={switcherTab}></button>
                </div>

                <form className="loginForm" onSubmit={loginSubmit} ref={loginTab}>
                    <div className="loginEmail">
                        <EmailRoundedIcon />
                        <input
                            type="email"
                            placeholder="E-mail"
                            required
                            value={loginemail}
                            onChange={(e) => setLoginEmail(e.target.value)}
                        />
                    </div>

                    <div className="loginEmail">
                        <LockRoundedIcon />
                        <input
                            type="password"
                            placeholder="Password"
                            required
                            value={loginpassword}
                            onChange={(e) => setLoginPassword(e.target.value)}
                        />
                    </div>

                    <Link to='/password/forgot' >Forget Password</Link>
                    <input type="submit" value='Login' className="loginBtn" />
                </form>

                <form className="signupForm"
                    ref={registerTab}
                    encType="multipart/form-data"
                    onSubmit={registerSubmit}
                >
                    <div className="signupName">
                        <AccountCircleRoundedIcon />
                        <input
                            type="text"
                            placeholder="Name"
                            required
                            name="name"
                            value={name}
                            onChange={registerDataChange}
                        />
                    </div>

                    <div className="signupEmail">
                        <EmailRoundedIcon />
                        <input
                            type="email"
                            placeholder="E-mail"
                            required
                            value={email}
                            onChange={registerDataChange}
                        />
                    </div>

                    <div className="signupPassword">
                        <LockRoundedIcon />
                        <input
                            type="password"
                            placeholder="Password"
                            required
                            value={password}
                            onChange={registerDataChange}
                        />
                    </div>

                    <div id="registerImage">
                        <img src={avatarPreview} alt="avatarPreview" />
                        <input
                            type="file"
                            name="avatar"
                            accept="image/*"
                            onChange={registerDataChange}
                        />
                    </div>

                    <input
                        type="submit"
                        value='Register'
                        className="signupBtn"
                    // disabled={loading ? true : false}
                    />

                </form>
            </div>
        </div>
    </Fragment>



}

export { Login };