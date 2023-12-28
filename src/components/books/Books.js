import React from "react";
import "./books.css";
import book1 from "../../assets/Book1.png";
import book2 from "../../assets/Book2.png";
import book3 from "../../assets/Book3.png";

export const Books = () => {
  return (
    <section id='books'>
          <span className='booksTitle'> Author </span>
          <span className='booksDesc' > Two-time International Best-selling Author of books such as </span>
        <div className='booksBars'>

          <div className='booksBar'>
            <img src={book1} alt='No Time Like The Present' className='booksBarImg'/>
            <div className='bookBarText'>
              <h2>
                No Time Like The Present
              </h2>
              <p>
               7 ways to enhance your life now.
              </p>

            </div>
          </div>

          <div className='booksBar'>
            <img src={book2} alt="I am a flight attendant and that is my superpower" className='booksBarImg' />
            <div className='bookBarText'>
              <h2>
                I am a flight attendant and that is my superpower
              </h2>

              <p>
                  Volume 2
              </p>

            </div>
          </div>

          <div className='booksBar'>
            <img src={book3} alt='Developing Human Equity' className='booksBarImg' />
            <div className='bookBarText'>
              <h2>
                  The Handbook to Developing Human Equity
              </h2>
              <p>
                World Civility - The Missing Element
              </p>

            </div>
          </div>

        </div>

    </section>

  )
}
