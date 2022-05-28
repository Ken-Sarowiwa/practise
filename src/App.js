import React from 'react';
import { ReactDOM } from 'react';
import './App.css';
import kenafrica from "./components/kenafrica.jpeg";
import Profile from "./components/profile.jsx";
import About from "./components/About.jsx";
import Interests from "./components/Interests.jsx";
import Footer from "./components/footer.jsx";
function App() {
  return (
    <div className="App">
      <Profile />
      <About/>
      <Interests />
      <Footer/>
    </div>
  );

}

export default App;
      