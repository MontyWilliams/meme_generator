import React from "react";
import "../styles/meme_styles.css";
import Memes from "../memesData";


export default function Meme() {

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  });

  const [memeImg, setMemeImg] = React.useState([]);
  

  
  function getRandomMeme() {
    const memesArray = Memes.data.memes;
    // Get a random number based on the Array length
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    // we destructure the object at the index and pull value by key
    const { url } = memesArray[randomNumber];
   
  }
 
  
  return (
    <div>
      <div className="meme_con">
        <input type="text" placeholder="yea" className="meme_in_1" />
        <input type="text" placeholder="yea yea" className="meme_in_2" />
        <button onClick={getRandomMeme} className="meme_btn">
          Random button 🖼
        </button>
      </div>
      <div className="meme_img_con">
        {/* <img  src={memeImage} alt="" /> */}
      </div>
    
    </div>
  );
}
