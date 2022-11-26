import logo from './logo.svg';
import './App.css';
import reference1 from './Images/reference1.jpg';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faYoutube, faTwitter} from "@fortawesome/free-brands-svg-icons"
import { faBookmark } from "@fortawesome/free-regular-svg-icons";


function App() {
  return (

    <div className="Title">
      <header>
      <h1>PRYNCE MICHAEL </h1>
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
            <li> NO TIME LIKE THE PRESENT </li>
            <li> I AM A FLIGHT ATTENDANT & THAT IS MY POWER </li>
            <li> DEVELOPING HUMAN EQUITY </li>

          </ul>
        </h2>
      </div>
      <footer>
        <p className="Footer">
        © Copyright I AM PRYNCE MICHAEL
        </p>

      <FontAwesomeIcon icon={faInstagram} size="lg" className="InstagramLogo"/>
      <FontAwesomeIcon icon={faFacebook} size="lg" className="FacebookLogo"/>
      <FontAwesomeIcon icon={faYoutube} size="lg" className="YoutubeLogo"/>
      <FontAwesomeIcon icon={faTwitter} size="lg" className="TwitterLogo"/>
      </footer>


    </div>
  );
}

export default App;
