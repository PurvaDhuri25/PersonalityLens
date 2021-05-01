import React from 'react';
import '../../App.css';
import myVideo from './vid3.mov';

function About() {
  return (
<div>
      <video src={myVideo} type="video/mp4" autoPlay muted loop/>
      <br/><br/>
            <h1>HOW IT WORKS?</h1><br/><br/>
            <p className="sty1">Think about the approximate number of video calls you have 
              been a part of since March, 2020. Now, compare it to the number 
              of video calls you were a part of before that. I am sure the difference
               is huge for most of us. Meetings with family, friends, and colleagues have shifted 
               to video calls.
Video calling has also made it possible for us to keep expanding our networks and meet new people
 while maintaining social distancing. Hence, it is not wrong to say that, we are making quite a few
  personal as well as professional first impressions over videos. The personality perception through first impressions can be quite subjective and even lead to first impression bias. Of course, there are self-reported personality assessment tests but they can often suffer from a social desirability bias.
   And this gives us an opportunity to leverage AI to find a more objective approach to apparent personality analysis.
     <br/> Thus what we have created is an online web application which will take a simple recorded video as input and then output the personality features percentage.</p> </div>)
}

export default About;