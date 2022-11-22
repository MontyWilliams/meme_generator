import React from "react";
import "../styles/meme_styles.css";
// import Memes from "../memesData";


export default function Meme(props) {

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
    const memesArray = Memes;
    // Get a random number based on the Array length
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    // we destructure the object at the index and pull value by key
    const { url } = memesArray[randomNumber];
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
        
        <input type="text" placeholder="Top text" className="meme_in_1" name="topText" value={meme.topText} onChange={handleChange}/>
        <input type="text" placeholder="Bottom text" className="meme_in_2" name="bottomText" value={meme.bottomText} onChange={handleChange}/>
        <button onClick={getRandomMeme} className="meme_btn">
          Random button 🖼
        </button>
        
      </div>
      <div className="memeDisplay">
        <img className="meme_img_con" src={meme.randomImage} alt="" />
          <div >
            <h2 className=" top">{meme.topText}</h2> 
            <h2 className=" bottom" >{meme.bottomText}</h2> 
          </div>
      </div>
    
    </div>
  );
}
