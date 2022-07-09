import React from 'react';
import './App.css';
import Gallery from "./components/Gallery";
import Header from "./components/Header";


function App() {
    return (
        <div className="App">
            <Header/>
            <br/>
            <br/>
            <Gallery/>
        </div>
    );
}

export default App;
