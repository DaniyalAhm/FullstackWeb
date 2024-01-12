import React from 'react';

import { About, Footer, Header, PersonalProjects, Skills, Calender } from './containers';
import Navbar from './components/Navbar/Navbar';
import './App.scss';

const App = () => {
    return (
        <div className='app'>
            <Navbar className="Navbar" />
            <Header className="Header" />
            <About className="About" />
            <Skills className="Skills" />
            <PersonalProjects  className="PersonalProjects"/>
            <Footer className="Footer" />
            <Calender className="Calender" />
        </div>
);}

export default App;
