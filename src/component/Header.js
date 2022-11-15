import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import user from '../assets/images/user.jpg';

const Header = () => {
    return (
        <>
            <header className='dashHead'>
                <div className="logo">
                    <Link to="/" class="logo"><img src={logo} alt="" /></Link>
                </div>
                <div className="menu headMenu">
                    <ul className="listBox">
                        <li class="list active">
                            <Link to="#">
                                <span class="icon">
                                    <i class="fa fa-home" aria-hidden="true"></i>
                                </span>
                                <span class="text">Home</span>
                            </Link>
                        </li>
                        <li class="list">
                            <Link to="#">
                                <span class="icon">
                                    <i class="fa fa-bar-chart" aria-hidden="true"></i>
                                </span>
                                <span className="text">Risks</span>
                            </Link>
                        </li>
                        <li class="list">
                            <Link to="#">
                                <span class="icon">
                                    <i class="fa fa-plus-square" aria-hidden="true"></i>
                                </span>
                                <span class="text">Suggestions</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="profilePic">
                    <span>Jane</span>
                    <div class="user">
                        <img src={user} alt="" />
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header