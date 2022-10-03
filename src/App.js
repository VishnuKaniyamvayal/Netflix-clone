import React from "react";
import Navbar from "./Components/NavBar/Navbar";
import "./App.css"
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import {originals} from './urls'

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Banner/>
    <RowPost url= {originals} title="NETFLIX ORIGINALS" />
    <RowPost  title ="COMEDY" isSmall />
    <RowPost  title ="HORROR" isSmall /> 
    </div>
  );
}

export default App;
