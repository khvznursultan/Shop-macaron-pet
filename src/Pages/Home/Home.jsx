import React from 'react';
import Banner from './Banner/Banner';
import Navigate from './Navigate/Navigate';
import News from './News/News';
import Popular from './Popular/Popular';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Navigate/>
            <News/>
            <Popular/>
        </div>
    );
};

export default Home;