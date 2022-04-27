import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './Contact'
import Projects from './Projects';
import Header from './Header'
import Home from './Home';

function AppRouter() {
    return (
        <Router>
        <Header />
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/contact" exact element={<Contact />} />
                <Route path="/projects" exact element={<Projects />} />
            </Routes>
        </Router>
    )
}

export default AppRouter