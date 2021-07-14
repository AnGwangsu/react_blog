import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/style/Header.css'

const Header = () => {
    return (
        <div className="header_wrap">
            <Link to="/">Home</Link>
            <Link to="/introduce">Introduce</Link>
            <Link to="/webGame">WebGame</Link>
            <Link to="/portfolio">Portfoli</Link>
        </div>
    )
}

export default Header
