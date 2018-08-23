import React from 'react';
import SearchForm from '../SearchPage/SearchPage';

import img from './frontPage.png';

import '../../css/Home.css';

const Home = () =>
    <div className="home-box">
        <img src={img} alt="logo" className="home-logo"/>
        <SearchForm fire={true}/>
    </div>;


export default Home;
