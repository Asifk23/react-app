import './header.css'
import './nav-style.css'
import Logo from '../../images/logo.jpg'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
    const [IsShow, setIsShow] = useState(false)
    // show toggle menu
    const toggleMenu = () => {

        if (IsShow === false) {
            setIsShow(true)
        } else {
            setIsShow(false)
        }
    }

    const hideToggle = () => {
        setIsShow(false)
    }




    return (
        <div>
            <header className="header">
                <nav className="navbar">

                    {/* large display nav links */}
                    

                    <nav className="nav">
                        <ul>
                            <li><Link to="/" className="nav-item">home</Link ></li>
                            <li><Link to="/about" className="nav-item">about</Link ></li>
                            <li><Link to="" className="nav-item">who we are</Link ></li>
                            <li><Link to="" className="nav-item">connect with us</Link ></li>
                            <li><Link to="" className="nav-item">home</Link ></li>
                        </ul>
                    </nav>

                    {/* site logo */}
                    <div className="logo-col">
                        <img
                            className="logo"
                            src={Logo}
                            alt="site logo" />
                    </div>

                </nav>


                {/* small device menu */}
                <div className="menu-bar">


                    <div>
                        {/* null div for align menu bar*/}
                    </div>

                    {/*  center aligned logo */}
                    <div className="logo-col">
                        <img
                            className="logo"
                            src={Logo}
                            alt="site logo" />
                    </div>

                    {/* right aligned menu icon */}
                    <div className="menu-col " >
                        <div className="cursor-pointer menu-icons" onClick={toggleMenu}>
                            <span className="icon"></span>
                            <span className="icon"></span>
                        </div>

                    </div>

                    {/* menu items */}


                </div>






            </header>

            {/* toggle menu */}
            <div className={IsShow === true ? "mobile-menu-wrapper" : "hidden"}>
                <div className="logo-col">

                    <img
                        onClick={toggleMenu}
                        className="logo cursor-pointer"
                        src={Logo}
                        alt="site logo" />
                </div>

                <nav className="nav" onClick={hideToggle}>
                        <ul>
                            <li><Link to="/" className="nav-item">home</Link ></li>
                            <li><Link to="/about" className="nav-item">about</Link ></li>
                            <li><Link to="" className="nav-item">who we are</Link ></li>
                            <li><Link to="" className="nav-item">connect with us</Link ></li>
                            <li><Link to="" className="nav-item">home</Link ></li>
                        </ul>
                    </nav>


                <div className="social-icons-col" onClick={hideToggle}>
                    <ul class="icon-list">
                        <li class="icon-item">
                            <a href="#" class="icon-link"><i className="fa fa-facebook"></i></a>
                        </li>
                        <li class="icon-item">
                            <a href="#" class="icon-link"><i className="fa fa-instagram"></i></a>
                        </li>
                        <li class="icon-item">
                            <a href="#" class="icon-link"><i className="fa fa-twitter"></i></a>
                        </li>

                    </ul>

                </div>
            </div>
        </div>
    )
}

export default Header
