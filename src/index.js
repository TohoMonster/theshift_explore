import React from 'react';
import ReactDOM from 'react-dom';

import SiteHeader from './components/site-header';
import HomeHeroSection from "./components/HomeHeroSection";

ReactDOM.render(
    <React.StrictMode>
        <SiteHeader></SiteHeader>
        <HomeHeroSection></HomeHeroSection>
    </React.StrictMode>,
    document.getElementById('root')
);

