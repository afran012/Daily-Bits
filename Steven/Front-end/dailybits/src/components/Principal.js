import React from 'react';
import { Link } from "react-router-dom";
import { CardImg, CardsContainer, PrincipalDiv, CardLink } from './PrincipalStyles';

const Principal = () => {
  return (
      <PrincipalDiv>
          <p>Practica tus conocmientos en la categoría que prefieras.</p>
          <CardsContainer className='cards-container'>
          
                <div className='card'>
                <Link to="/html">
                <div className='card-img'>
                        <CardImg src='https://www.iconninja.com/files/306/245/260/technologies-front-end-markup-language-long-shadow-web-web-technology-html-icon.svg' />
                    </div>
                </Link>

                    <div className='card-text'>
                        <CardLink href='#'>HTML</CardLink>
                    </div>
                </div>
                <div className='card'>
                <Link to="/css">
                <div className='card-img'>
                        <CardImg src='https://lh3.googleusercontent.com/p-eb6zVOZqqZTGqLfwGP5V4ixuKtwRJJq5RmvHexIQYUaRZ5Ya9OxMdbsFWqIpStjGfoCg=s85' />
                    </div>
                </Link>

                    <div className='card-text'>
                        <CardLink href='#'>CSS</CardLink>
                    </div>
                </div>
                <div className='card'>
                <Link to="/js">
                <div className='card-img'>
                        <CardImg src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png' />
                    </div>
                </Link>
                    <div className='card-text'>
                        <CardLink href='#'>JavaScript</CardLink>
                    </div>
                </div>
          </CardsContainer>

      </PrincipalDiv>
  );
};

export default Principal;
