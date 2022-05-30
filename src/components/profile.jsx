import React from 'react';
import kenafrica from "./kenafrica.jpeg";
import gang from "./gang.jpeg";
import kena from "./kena and barbs.jpeg";
import kena1 from "./kena.jpeg"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import guitar from "./acoustic-guitar-icon-vector-20784513.jpg";

export default function Profile(){
    return(
        <div className='profile'>
            <div className='logo'><img src={guitar} width="50px" height="50px"/></div>
            <AliceCarousel autoPlay autoPlayInterval="1000">
                <img src={kenafrica} alt='Kenafrica' className='sliderimg' width="80%" height="50%" top="44px" left="144px"/>
                <img src={kena} alt='Kenafrica' className='sliderimg' width="80%" height="50%" top="44px" left="144px"/>
                <img src={kena1} alt='Kenafrica' className='sliderimg' width="80%" height="50%" top="44px" left="144px"/>
                <img src={gang} alt='Kenafrica' className='sliderimg' width="80%" height="50%" top="44px" left="144px"/>
            </AliceCarousel>

            <h1 className='Title'>SOFTWARE ENGINEER</h1>
            <h3 className='Name'>Ken Sarowiwa</h3>
            <h4 className='Welcome'>welcome to my personal portfolio, stick around and get to learn so much about me.</h4>
            <a href='https://www.linkedin.com/in/ken-sarowiwa-7504a5178/'><button className='Button1' width= '115px'
    height= '34px'
    left= '151px'
    top= '468px'>Linkedin</button></a>
            <a href='https://mail.google.com/mail/u/0/#inbox'><button className='Button2'>Email</button></a>
            <a href='https://github.com/Ken-Sarowiwa'><button className='Button2'>Github</button></a>
        </div>
    )
}