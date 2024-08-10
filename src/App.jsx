import React, { useEffect } from 'react';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
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
import Catalog from './Pages/Catalog/Catalog';
import Company from './Pages/Company/Company';

const App = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const { loading, error } = useSelector(state => state.setsSlice);
    const { isLoggedIn } = useSelector(state => state.user);

    useEffect(() => {
        dispatch(setLoading());
        axios('http://localhost:8080/clothes')
            .then(({ data }) => dispatch(getAllSets(data)))
            .catch(err => dispatch(setError(err.message)));
    }, [dispatch]);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [location]);

    return (
        <>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path='' element={<Home />} />
                    <Route path='cart' element={isLoggedIn ? <Cart /> : <Navigate to='/' />} />
                    <Route path='oneItem/:id' element={<OneItem />} />
                    <Route path='sale' element={<Sale />} />
                    <Route path='sets' element={<Sets />} />
                    <Route path='allclothes' element={<AllClothes />} />
                    <Route path='guarantee' element={<Guarantee />} />
                    <Route path='delivery' element={<Delivery />} />
                    <Route path='catalog' element={<Catalog />} />
                    <Route path='company' element={<Company />} />
                </Route>
                <Route path='*' element={<NotFound />} />
            </Routes>
        </>
    );
};

export default App;
