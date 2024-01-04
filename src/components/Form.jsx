import React from 'react';
import memesData from '../memesData.jsx';


export default function Form() {

    const [memeImage, setMemeImage] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })

    function getMemeImage(event) {
        event.preventDefault()
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length )
        const url = memesArray[randomNumber].url
        setMemeImage (prevMeme => ({
            ...prevMeme,
            randomImage: url
        }));
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMemeImage (prevMeme => ({
            ...prevMeme,
            [name]: value
        }));
    }

    return (
        <div className="main--section">
            <section>
                <form className="form">
                    <div>
                        <label className="form--label">Top text</label>
                        <input 
                            type="text" 
                            placeholder="Shut up"
                            className="form--input"
                            name="topText"
                            value={memeImage.topText}
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label className="form--label">Bottom text</label>
                        <input 
                            type="text"
                            placeholder="and take my money"
                            className="form--input"
                            name="bottomText"
                            value={memeImage.bottomText} 
                            onChange={handleChange}
                        />
                    </div>
                    <button 
                        onClick={getMemeImage}
                        className="form--btn">
                            Get a new meme image  🖼
                    </button>
                </form>

            </section>
            <div className="meme--container">
                <img src={memeImage.randomImage} className="meme--image" />
                <h2 className="meme--text top">{memeImage.topText}</h2>
                <h2 className="meme--text bottom">{memeImage.bottomText}</h2>
            </div>
        </div>
    )
}



