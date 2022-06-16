import React from "react";
import "../styles/meme_styles.css";
import Memes from "../memesData";


export default function Meme() {

  const [memeImage, setmemeImage] = React.useState("");
  const [memeList, setmemeList] = React.useState([]);
  console.log(memeList)

  
  function getRandonMeme() {
    const memesArray = Memes.data.memes;
    // Get a random number based on the Array length
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    // we destructure the object at the index and pull value by key
    const { url } = memesArray[randomNumber];
    setmemeImage(url)
  }
  function printRandomMeme() {
    const memesArray = Memes.data.memes;
    const memes_Array = [];
    for (let i = 0; i < 3; i++) {
      const randomNumber = Math.floor(Math.random() * memesArray.length);
      memes_Array.push(memesArray[randomNumber]); 
      setmemeList(memes_Array)
    }
  }
  const memes_array_ran = memeList.map((this1) => <p> {this1}</p> );
  
  return (
    <div>
      <div className="meme_con">
        <input type="text" placeholder="yea" className="meme_in_1" />
        <input type="text" placeholder="yea yea" className="meme_in_2" />

        <button onClick={printRandomMeme} className="meme_btn">
          Print a meme Bru 🖼
        </button>
        <button onClick={getRandonMeme} className="meme_btn">
          Random button
        </button>
      </div>
      <div className="meme_img_con">
        <img  src={memeImage} alt="" />
      </div>
      <div className="meme_list_con">
      <span>
        
      {memeList.map((memes) => (
        <p>{memes.name}</p>
       
    ))}
      </span>

      </div>
    </div>
  );
}
