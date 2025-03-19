import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PostFormPage from './pages/PostFormPage';
import Layout from './components/Layout';

function App() {
    return (
        <Router>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/post" element={<PostFormPage />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;