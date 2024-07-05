import React, { useEffect } from 'react';
import { Route, Routes,} from 'react-router-dom';
import Layout from './Layout/Layout';
import './App.scss'
import Home from './Pages/Home/Home';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getAllSets } from './store/setsSlice';



const App = () => {


    const dispatch = useDispatch()
    useEffect(()=>{
        axios('http://localhost:8080/sets')
        .then(({data})=>dispatch(getAllSets(data)))
    },[])
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route path='' element={<Home/>}/>
                </Route>
            </Routes>
        </>
    );
};

export default App;