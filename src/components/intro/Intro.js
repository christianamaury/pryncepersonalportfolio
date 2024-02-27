import React from 'react';
import {Link} from "react-scroll";
import './intro.css';
import bg from "../../assets/image.png";
import btnImg from "../../assets/hireme.png";

export const Intro = () => {
  return(
  <section id='intro'>
      <div className='introContent'>
        <span className='hello'>
          Hello,
        </span>

        <span className='introText'>
        I'm
        </span>

        <span className='introName'>
          Prentice Ahmad
          <br/>

        </span>

        <p className='introPara'>
         Formerly known as (Prynce Michael) is one of the most vivacious speakers you will ever hear.
         He is the host of "The Chat" podcast, as well as Two-time International Best-selling Author of books such as;
         "No Time Like The Present", "I Am A Flight Attendant And That Is My Superpower",
         and "The Handbook to Developing Human Equity: World Civility - The Missing Element".
         Prentice Ahmad is also THE FIRST MISTER U.S. UNITED 2023 crowned July 2023.
         From homeless, being on public assistance to CEO entrepreneur.
         Prentice Ahmad's transparency and charismatic coaching has influenced audiences worldwide
         proving that we all have the potential to be great,
         but it is what we do with that potential that matters.
         </p>

         <Link>
          <button className='btn'>
            <img src={btnImg} alt="Hire Me Photo" className='btnImg'/>
              Let's Collaborate Together 
          </button>
         </Link>

      </div>

      <img src={bg} alt="Profile Background Image" className="bg" />

  </section>
  )
}
