import React from 'react';
import kenafrica from "./kenafrica.jpeg";

export default function Profile(){
    return(
        <div className='profile'>
            <img src={kenafrica} alt='Kenafrica' className='kenafrica' width="80%" height="50%" top="44px" left="144px"/>


            <h1 className='Title'>SOFTWARE ENGINEER</h1>
            <h3 className='Name'>Ken Sarowiwa</h3>
            <h4 className='Welcome'>welcome to <a href="kenafrica~music.com"></a></h4>
            <button className='Button1' width= '115px'
    height= '34px'
    left= '151px'
    top= '468px'>Email</button>
            <button className='Button2'>Linkedin</button>
        </div>
    )
}