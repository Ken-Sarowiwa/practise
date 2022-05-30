import React from 'react'
import YouTube from '@u-wave/react-youtube';


export default function About() {

const links = ["W13GKWaE0Pw", "sXYh-SH0Exs", "Vw_lE-xNy1w", "PImkcfs_5KU"];
const final_links = links.map(linkitems=>{
  return linkitems
});
  return (
    <div className='About'>
        <hr/><h2>About</h2><hr/>
        <p>Hello everybody, my name is Ken Sarowiwa. I am talented individual, i am a writer with no notepad, a painter with no canvas, a singer with a magical voice and above all a good human being. striving to be a better version of myself each day. follow me on my social media and professional accounts above. Melodies changed my life, i like to read and play the guitar at my free time.
          i love martial arts and UFC. There is just something when you see somebody's head jumping up and down on the canvas.
        </p>

        <YouTube
          video="sXYh-SH0Exs"
          autoplay
          />

        <YouTube
          video="Vw_lE-xNy1w"
          autoplay
          />

        <YouTube
          video="PImkcfs_5KU"
          autoplay
          />






    </div>
  )
}
