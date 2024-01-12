import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import generateCalendar from './Containers/Calender/Calender.js';
import React from 'react';

function App() {
    React.useEffect(() => {
      document.addEventListener("DOMContentLoaded", function() {
        generateCalendar(new Date().getFullYear(), new Date().getMonth());
      });
    }, []);


  return (
    <div className="App">
      <header className="App-header">

      <NavBar /> {/* Include the Navbar component here */}
      



        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"s
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
