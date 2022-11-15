import React,{useRef} from 'react';
import "../assets/styles/login.css";
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import play from '../assets/images/getItPlay.png';
import getapple from '../assets/images/getItApple.png'
import phone from '../assets/images/phone.png'
import face from '../assets/images/facebook.png'
import google from '../assets/images/google.png'
import apple from '../assets/images/apple.png'

const Login = () => {
    const password = useRef();
    const i = useRef()
    const showHide = () => {
        if (password.current.type === 'password') {
            password.current.setAttribute('type', 'text');
            i.current.classList = "fa fa-eye-slash"
        }
        else {
            password.current.setAttribute('type', 'password');
            i.current.classList = "fa fa-eye"
        }
    }
    const navigate = useNavigate()
    const dashboard =()=>{
      navigate('/dashboard')
    }
    return (
        <>
            <div>
                <div className="container">
                    <section className='section'>
                        <div className="check">
                            <header className='header'>
                                <Link to="/" class="logo"><img src={logo} alt="" /></Link>
                            </header>
                            <div className="top">
                                <h4>Check out our Mobile App</h4>
                                <p>Health checkup in the palm of your hand</p>
                            </div>
                            <div className="download">
                                <div className="images">
                                    <img src={play} alt="" />
                                    <img src={getapple} alt="" />
                                </div>
                            </div>
                            <div className="bottom">
                                <div className="bottomImg">
                                    <img src={phone} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="formBox">
                            <div className="inside">
                                <div class="form">
                                    <h2>Login</h2>
                                    <div className="box">
                                        <div class="inputBox">
                                            <input type="text" required placeholder='Email Or Phone' />
                                            <span>Name</span>
                                            <i className='i'></i>
                                        </div>
                                        <div class="inputBox">
                                            <input type="password" required placeholder='Password' ref={password} />
                                            <i class="fa fa-eye" ref={i} onClick={showHide} aria-hidden="true"></i>
                                            <span>Password</span>
                                            <i className='i'></i>
                                        </div>
                                        <div class="links">
                                            <Link to="#">Forgotten password?</Link>
                                        </div>
                                        <div className="bottomBox">
                                            <div className="social">
                                                <img src={google} alt="" />
                                                <img src={face} alt="" />
                                                <img src={apple} alt="" />
                                            </div>
                                            <input type="submit" value="Login" onClick={dashboard} />
                                        </div>
                                    </div>
                                </div>
                                <div className="mid">
                                    <p>No account?<Link to="#">Sign up</Link></p>
                                </div>
                            </div>
                            <div className="copyright">
                                <p>Copyright <i class="fa fa-copyright" aria-hidden="true"></i> 2022, InTime BioTech LLC.</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Login