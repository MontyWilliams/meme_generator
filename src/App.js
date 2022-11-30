import React from 'react'
import Nav  from "./components/Nav";
import Meme from "./components/Meme";
import Footer from "./components/Footer";
import Town from "./Tulsa.mp4";




import './styles/styles.css';

function App() {
  return (
    <div className="App">
       <video className="TTown" autoPlay loop muted  width="100%" height="100%" >
    <source src={Town} type="video/mp4" />
    </video>
     <Nav />
     <Meme />
     <Footer />
    </div>
  );
}

export default App;
