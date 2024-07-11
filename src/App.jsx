import React, { useEffect } from 'react';
import { Route, Router, Routes,} from 'react-router-dom';
import Layout from './Layout/Layout';
import './App.scss'
import Home from './Pages/Home/Home';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getAllSets } from './store/setsSlice';
import Cart from './Pages/Cart/Cart';
import OneItem from './Pages/OneItem/OneItem';



const App = () => {


    const dispatch = useDispatch()
    useEffect(()=>{
        axios('http://localhost:8080/clothes')
        .then(({data})=>dispatch(getAllSets(data)))
    },[])
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route path='' element={<Home/>}/>
                    <Route path='cart' element={<Cart/>}/>
                    <Route path='oneItem/:id' element={<OneItem/>}/>
                </Route>
            </Routes>
        </>
    );
};

export default App;