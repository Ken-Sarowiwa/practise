import React from 'react';
import pic from "./kenafrica.jpeg";

export default function profile(){
    const divstyle1 ={
        width:'200px',
        height:'100px',
        border:'1px',
        solid :'#000'

    };

    const divstyle2 ={
        width:'200px',
        height:'100px',
        border:'1px',
        solid :'#000'
    }

    return(
        <>
            <img src="./kenafrica.jpeg" alt='Kenafrica'/>
            <h1>SOFTWARE ENGINEER</h1>
            <h3>Ken Sarowiwa</h3>
            <h4>welcome to <a href="kenafrica~music.com"></a></h4>
            <div style={divstyle1}><a href='https://www.linkedin.com/in/ken-sarowiwa-7504a5178/'>linkedin</a></div>
           <div style= {divstyle2}><a href="https://twitter.com/kennaroot">Twitter</a></div>



        </>
    )
}