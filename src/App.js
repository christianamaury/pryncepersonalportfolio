import React from 'react';
import BootstrapCarousel from "./BootstrapCarousel.js";
import logo from './logo.svg';
import './App.css';
import reference1 from './Images/reference1.jpg';
import Book1 from './Images/Book1.png';
import Book2 from './Images/Book2.png';
import Book3 from './Images/Book3.png';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faYoutube, faTwitter} from "@fortawesome/free-brands-svg-icons"
import { faBookmark } from "@fortawesome/free-regular-svg-icons";


function App() {
  return (

    <div className="Title">
      <header>
      <FontAwesomeIcon icon={faInstagram} size="2x" className="InstagramLogo"/>
      <FontAwesomeIcon icon={faFacebook} size="2x" className="FacebookLogo"/>
      <FontAwesomeIcon icon={faYoutube} size="2x" className="YoutubeLogo"/>
      <FontAwesomeIcon icon={faTwitter} size="2x" className="TwitterLogo"/>
      <h1 className="titleMargin"> PRYNCE MICHAEL </h1>
      </header>

      <div className ="App">
        <h3>
      ENTREPRENEUR | SPEAKER | AUTHOR
        </h3>
        <img className="InitialPhoto" src={reference1}  alt="reference1"/>
      </div>
      <div className="About">
        <h2>
        ABOUT
        </h2>
      </div>

      <div className="App">
        <h3>
          <p>
            I am Prynce Michael; International Best-Selling Author, Speaker,
          </p>
          <p>
          Entrepreneur, Aspiring Film Producer and
          host of the Chat Podcast.
          </p>

        </h3>
      </div>

      <div className="Author">
        <h2>
      <FontAwesomeIcon icon={faBookmark} size="lg" className="BookMarkIconLeftSide"/>
      AUTHOR OF THE FOLLOWING ACCLAIMED BOOKS
    <FontAwesomeIcon icon={faBookmark} size="lg" className="BookMarkIcon"/>
        </h2>

      </div>

      <div className="App">
        <h2>
          <ul className="OrderItems">
            <li> GET YOUR BOOKS TODAY </li>

          </ul>
        </h2>
        <a href="https://www.amazon.com/No-Time-Like-Present-Enhance/dp/1646201620/ref=sr_1_4?crid=YO4XG2CHIDJJ&keywords=No+time+like+the+present&qid=1669437077&sprefix=no+time+like+the+presen%2Caps%2C130&sr=8-4" target="_blank">
        <img className="NoTimeImageBook" src={Book1}  alt="Book1"/>
        </a>
        <a href="https://www.amazon.com/Am-Flight-Attendant-That-Superpower-ebook/dp/B09QY24QRQ/ref=sr_1_2?crid=346RTG880UI14&keywords=I+am+a+flight+attendant+and+that+is+my+superpower&qid=1669437307&s=books&sprefix=i+am+a+flight+attendant+and+that+is+my+superpowe%2Cstripbooks%2C132&sr=1-2" target="_blank">
        <img className="FlightAttendant" src={Book2}  alt="Book2"/>
        </a>
        <a href="https://www.amazon.com/Handbook-Developing-Human-Equity-Civility-ebook/dp/B08WKV47W8/ref=sr_1_2?qid=1669437217&refinements=p_27%3APrynce+Michael&s=books&sr=1-2&text=Prynce+Michael" target="_blank">
        <img className="DevelopingHumanBook" src={Book3}  alt="Book3"/>
        </a>

      </div>

      <div className="LetsConnect">
        <h2>
      LETS CONNECT

        </h2>

      </div>

      <div className="App ContactBox">
      <form>
      <input type="text" className="input-field" placeholder="Enter your Name"/>
      <input type="email" className="input-field" placeholder=" Enter your Email"/>
      <input type="email" className="input-field" placeholder="Enter your phone number (optional)"/>
      <textarea type="text" className="input-field texttext-field" placeholder="I hope to hear from you!">
      </textarea>

      <button type="button" className="btn"> Send Message </button>
      </form>
      </div>

      <footer>

      <FontAwesomeIcon icon={faInstagram} size="3x" className="InstagramLogo"/>
      <FontAwesomeIcon icon={faFacebook} size="3x" className="FacebookLogo"/>
      <FontAwesomeIcon icon={faYoutube} size="3x" className="YoutubeLogo"/>
      <FontAwesomeIcon icon={faTwitter} size="3x" className="TwitterLogo"/>

      <p className="Footer">
      © Copyright I AM PRYNCE MICHAEL
      </p>
      </footer>

    </div>
  );
}

export default App;
