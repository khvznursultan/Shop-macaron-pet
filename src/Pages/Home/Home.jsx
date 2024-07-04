import React from 'react';
import Banner from './Banner/Banner';
import Navigate from './Navigate/Navigate';
import News from './News/News';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Navigate/>
            <News/>
        </div>
    );
};

export default Home;