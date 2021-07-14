import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/style/Header.css'

const Header = () => {
    return (
        <div>
            <div className="header_web">
                <Link to="/">Home</Link>
                <Link to="/webGame">WebGame</Link>
                <Link to="/portfolio">Portfoli</Link>
                <Link to="/login">Login</Link>
            </div>
            <div className="header_mobile">
                <i class="mdi mdi-view-headline"></i>
            </div>
        </div>
    )
}

export default Header
