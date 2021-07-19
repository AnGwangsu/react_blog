import React from 'react'
import { Link } from 'react-router-dom'
import './TopBar.css'

const TopBar = () => {
    return (
        <div className="top">
            <div className="topCenter">
                <ul className="topList">
                    <Link to="/"><li className="topListItem">HOME</li></Link>
                    <Link to="/webGame"><li className="topListItem">WEBGAME</li></Link>
                    <Link to="/portfolio"><li className="topListItem">PORTFOLIO</li></Link>
                    <Link to="/login"><li className="topListItem">SIGN IN</li></Link>
                </ul>
                <div className="mobileIcon">
                    <i className="fas fa-bars"></i>
                </div>
            </div>
        </div>
    )
}

export default TopBar
