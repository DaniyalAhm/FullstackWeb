import React from 'react';

import { About, Footer, Header, PersonalProjects, Skills } from './containers';
import Navbar from './components/Navbar/Navbar';
import './App.scss';

const App = () => {
    return (
        <div className='app'>
            <Navbar />
            <Header />
            <About />
            <Skills />
            <PersonalProjects />
            <Footer />
        </div>
    );
};

export default App;
