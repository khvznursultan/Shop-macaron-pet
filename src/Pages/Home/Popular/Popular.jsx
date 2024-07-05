import React from 'react';
import './Popular.scss';
import { useSelector } from 'react-redux';



const Popular = () => {
    const {data} = useSelector(state=>state.getAllSets)


    return (
        <section className='popular'>
            <div className="container">
                <h2>Популярные наборы</h2>
                
            </div>
        </section>
    );
};

export default Popular;