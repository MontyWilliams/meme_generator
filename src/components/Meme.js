import React from 'react';
import '../styles/meme_styles.css';
import Memes from '../memesData';


export default function Meme() {

  function getRandonMeme() {
    const memesArray = Memes.data.memes;
    // Get a random number based on the Array length
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    // we destructure the object at the index and pull value by key
    const {url} = memesArray[randomNumber]
    console.log(url)
  }
  function printRandomMeme(){
    const memesArray = Memes.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    for (let i = 0; i < randomNumber; i++) {
     const payDay = memesArray.map(thing => <p key={thing}>{thing}</p>)
    }
 

  }

  return(
  <div>
    <div className="meme_con">
      <input type="text" placeholder="yea" className="meme_in_1"/>
      <input type="text" placeholder="yea yea" className="meme_in_2"/>

        <button onClick={printRandomMeme} className="meme_btn">Print a meme Bru 🖼</button> 
        <button onClick={getRandonMeme} className="meme_btn">Random button</button> 
    </div>
    </div>
  )
} 
