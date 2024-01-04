import React from 'react';

function Header() {
    return (
        <header>
            <img 
                className="header--img"
                src="./src/images/troll-face.png"
                alt="Troll face meme photo">
            </img>
            <span className="header--title"><h1>MemeGenerator</h1></span>
            <span className="header--subtitle"><h3>My react projects #3</h3></span>
        </header>
    ) 
}

export default Header;