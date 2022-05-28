import React from 'react';
import kenafrica from "./kenafrica.jpeg";

export default function Profile(){
    return(
        <div className='profile'>
            <img src={kenafrica} alt='Kenafrica' className='kenafrica'/>
            <h1 className='Title'>SOFTWARE ENGINEER</h1>
            <h3 className='Name'>Ken Sarowiwa</h3>
            <h4 className='Welcome'>welcome to <a href="kenafrica~music.com"></a></h4>
        </div>
    )
}