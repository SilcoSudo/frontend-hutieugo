import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PostFormPage from './pages/PostFormPage';
import Layout from './components/Layout';
import './styles/styles.css';

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/post" element={<PostFormPage />} />
            </Route>
        </Routes>
    );
}

export default App;