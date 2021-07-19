import React from 'react'
import './Home.css'
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import SideBar from '../../components/sidebar/SideBar'


const Home = () => {
    return (
        <div className="home">
            <Header/>
            <div className="homeContent">
                <Posts/>
                <SideBar/>
            </div>
        </div>
    )
}

export default Home
