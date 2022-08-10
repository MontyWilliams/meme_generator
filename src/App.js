import React from 'react'
import Nav  from "./components/Nav";
import Meme from "./components/Meme";
import Footer from "./components/Footer";



import './styles/styles.css';

function App() {
  return (
    <div className="App">
     <Nav />
     <Meme />
     <Footer />
    </div>
  );
}

export default App;
