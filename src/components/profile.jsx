import React from 'react';
import kenafrica from "./kenafrica.jpeg";

export default function Profile(){
    return(
        <div className='profile'>
            <img src={kenafrica} alt='Kenafrica' className='kenafrica' width="80%" height="50%" top="44px" left="144px"/>


            <h1 className='Title'>SOFTWARE ENGINEER</h1>
            <h3 className='Name'>Ken Sarowiwa</h3>
            <h4 className='Welcome'>welcome to <a href="kenafrica~music.com"></a></h4>
            <a href='https://www.linkedin.com/in/ken-sarowiwa-7504a5178/'><button className='Button1' width= '115px'
    height= '34px'
    left= '151px'
    top= '468px'>Linkedin</button></a>
            <a href='https://mail.google.com/mail/u/0/#inbox'><button className='Button2'>Email</button></a>
            <a href='https://github.com/Ken-Sarowiwa'><button className='Button2'>Github</button></a>
        </div>
    )
}