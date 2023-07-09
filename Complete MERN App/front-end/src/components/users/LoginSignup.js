import React, { Fragment, useEffect, useRef, useState } from "react"
import Loader from '../layout/loader/Loader'
import FaceRoundedIcon from '@mui/icons-material/FaceRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import { Link } from "react-router-dom";
import './loginSignup.css'
import { useSelector, useDispatch } from 'react-redux'
import { Login, clearErrors } from '../../actions/userAction'

const LoginSignup = () => {

    const dispatch = useDispatch()
    const {loading,error} = useSelector((state)=>state.user)

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
    const [avatar, setAvatar] = useState();
    const [avatarPreview, setAvatarPreview] = useState('/Profile.png')

    useEffect(()=>{
        // dispatch(clearErrors())
    },[dispatch,loading])


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

    const loginSubmit = (e) => {
        // console.log('Login form submitted')
        e.preventDefault()
        dispatch(Login(loginemail, loginpassword))

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

    const registerDataChange = (e) => {

        if (e.target.name === 'avatar') {
            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setAvatarPreview(reader.result);
                    setAvatar(reader.result)
                }
            }

            reader.readAsDataURL(e.target.files[0]);
        }
        else {
            setUser({ ...user, [e.target.name]: e.target.value })
        }

    };

    return <Fragment>
        {loading ? <Loader /> : <Fragment>
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
                        <FaceRoundedIcon />
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
                            name='email'
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
                            name='password'
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
    </Fragment> 

}

export { LoginSignup };