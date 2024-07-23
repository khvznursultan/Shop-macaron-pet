import React, { useEffect } from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import './App.scss';
import Home from './Pages/Home/Home';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSets, setLoading, setError } from './store/setsSlice';
import Cart from './Pages/Cart/Cart';
import OneItem from './Pages/OneItem/OneItem';
import Sale from './Pages/Sale/Sale';
import Sets from './Pages/Sets/Sets';
import AllClothes from './Pages/AllClothes/AllClothes';
import NotFound from './Pages/NotFound/NotFound';
import Guarantee from './Pages/Guarantee/Guarantee';
import Delivery from './Pages/Delivery/Delivery';





const App = () => {
    const dispatch = useDispatch();
    const { loading, error } = useSelector(state => state.setsSlice);

    useEffect(() => {
        dispatch(setLoading());
        axios('http://localhost:8080/clothes')
            .then(({ data }) => dispatch(getAllSets(data)))
            .catch(err => dispatch(setError(err.message)));
    }, [dispatch]);

    return (
        <>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path='' element={<Home />} />
                    <Route path='cart' element={<Cart />} />
                    <Route path='oneItem/:id' element={<OneItem />} />
                    <Route path='sale' element={<Sale/>}/>
                    <Route path='sets' element={<Sets/>}/>
                    <Route path='allclothes' element={<AllClothes/>}/>
                    <Route path='guarantee' element={<Guarantee/>}/>
                    <Route path='delivery' element={<Delivery/>}/>
                <Route path='*' element={<NotFound/>}/>
                </Route>
            </Routes>
        </>
    );
};

export default App;