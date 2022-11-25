import React, { createRef, useRef, useState } from 'react'
import "../styles/meme_styles.css";
import {render} from 'react-dom';
import * as htmlToImage from 'html-to-image';





export default function Meme(props) {

  
  const ref = React.createRef(null)

  const getImage = () => {
    htmlToImage.toPng(ref.current)
      .then(function(dataUrl){
        var img = new Image()
        img.src = dataUrl
        document.body.appendChild(img)
      })
      .catch((error) => {
        console.log(error)
      })
    console.log('getImage')
    
  }

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  });

  const [Memes, setAllMemes] = React.useState([]);

  
  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(data => setAllMemes(data.data.memes))
  }, [])

  function getRandomMeme() {
    // Get a random number based on the Array length
    const randomNumber = Math.floor(Math.random() * Memes.length);
    // we destructure the object at the index and pull value by key
    const { url } = Memes[randomNumber];
    setMeme(e => {
      return{
        ...e,
        randomImage: url  
      }
    })  
  }
  
  function handleChange(event){
    const {name, value} = event.target
    setMeme(e => ({
      ...e,
      [name]: value 
    }))
  }
 
  return (
    <div  className="wrap">
      <div className="meme_con">
    
        <input className="meme_in_1" onChange={handleChange}
          maxLength="52"
          type="text"
          placeholder="Top text"
          name="topText"
          value={meme.topText}
        />

        <input type="text" className="meme_in_2" onChange={handleChange}
          maxLength="52"
          placeholder="Bottom text"
          name="bottomText"
          value={meme.bottomText}
          />

        <button onClick={getRandomMeme} className="meme_btn">
          Random button 🖼
        </button>       
      </div>
      <div className="memeDisplay" ref={ref} >
        <img className="meme_img_con" src={meme.randomImage} alt=""/>
          <div className="topText">
            <h2 >{meme.topText}</h2> 
          </div>
          <div className="bottomText">
            <h2 >{meme.bottomText}</h2> 
          </div>
      </div>

      <button onClick={getImage} className="meme_btn">
          Random button 🖼
        </button>

          
    </div>
  );
}
