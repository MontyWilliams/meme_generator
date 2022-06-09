import React from 'react';
import '../styles/meme_styles.css';
import Memes from '../memesData';

export default function Meme() {

  function getMemeImage() {
    const memesArray = Memes.data.memes;
    console.log(memesArray)
}


  return(
    <div className="meme_con">
     
      <input type="text" placeholder="yea" className="meme_in_1"/>
      <input type="text" placeholder="yea yea" className="meme_in_2"/>

        <button onClick={getMemeImage} className="meme_btn">Get yo memes here Bru 🖼</button> 
    </div>
  )
} 
