import React from 'react';
import { Route, Routes,} from 'react-router-dom';
import Layout from './Layout/Layout';
import './App.scss'
import Home from './Pages/Home/Home';



const App = () => {
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