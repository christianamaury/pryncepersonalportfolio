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
            <a href="https://www.amazon.com/No-Time-Like-Present-Enhance/dp/1646201620/ref=sr_1_10?crid=WQ9N4NEX5S6K&dib=eyJ2IjoiMSJ9.F3HP-Bh6Gx3tTABQj5LI7hcC5zyx3c7h1miXbuIvNQCDiUo4N5s2-b6x5oefy4pr7LcTEcwKWUE68qnSk6RDjRCjLsSHV5xYeiqOtkQE33DXAWviw6pEvYkX03PjCHvUe1VLa3NasrswA0Vbag41QcNzcuAHDG7LgkAK5HWD7rh7uibd6tJCD7y1r-MGoJazkEVRejWH3CTq_-dWpiYzjBVHUuloyhfdw07oZTGNpF0.nTMLTZdS4jSSVUU8_U6sgNtIFYAb3rdk3pU7ebbsXNA&dib_tag=se&keywords=No+Time+Like+The+Present+book&qid=1709047909&sprefix=no+time+like+the+present+bo%2Caps%2C328&sr=8-10">
            <img src={book1} alt='No Time Like The Present' className='booksBarImg'/>
            </a>

            <div className='bookBarText'>
              <h2>
                No Time Like The Present
              </h2>
              <p>
                <a href="https://www.amazon.com/No-Time-Like-Present-Enhance/dp/1646201620/ref=sr_1_10?crid=WQ9N4NEX5S6K&dib=eyJ2IjoiMSJ9.F3HP-Bh6Gx3tTABQj5LI7hcC5zyx3c7h1miXbuIvNQCDiUo4N5s2-b6x5oefy4pr7LcTEcwKWUE68qnSk6RDjRCjLsSHV5xYeiqOtkQE33DXAWviw6pEvYkX03PjCHvUe1VLa3NasrswA0Vbag41QcNzcuAHDG7LgkAK5HWD7rh7uibd6tJCD7y1r-MGoJazkEVRejWH3CTq_-dWpiYzjBVHUuloyhfdw07oZTGNpF0.nTMLTZdS4jSSVUU8_U6sgNtIFYAb3rdk3pU7ebbsXNA&dib_tag=se&keywords=No+Time+Like+The+Present+book&qid=1709047909&sprefix=no+time+like+the+present+bo%2Caps%2C328&sr=8-10">
                     7 ways to enhance your life now.
                </a>
              </p>

            </div>
          </div>

          <div className='booksBar'>
            <a href="https://www.amazon.com/Am-Flight-Attendant-That-Superpower-ebook/dp/B09QY24QRQ/ref=sr_1_2?crid=5YJQ824X8HEW&dib=eyJ2IjoiMSJ9.IeYq3VbASXqdQWrtKeZCv2527ysTlC0ZV_r22PAvIn6LX98qJ5pP_98lx5E7DmBa.XbzsDb42p0gSiKZieew3zSjwgagzqASkvmijS4avHlg&dib_tag=se&keywords=I+am+a+flight+attendant+and+that+is+my+superpower&qid=1709048698&s=books&sprefix=i+am+a+flight+attendant+and+that+is+my+superpower%2Cstripbooks%2C343&sr=1-2">
                <img src={book2} alt="I am a flight attendant and that is my superpower" className='booksBarImg' />
            </a>
            <div className='bookBarText'>
              <h2>
                I am a flight attendant and that is my superpower
              </h2>

              <p>
                  <a href="https://www.amazon.com/Am-Flight-Attendant-That-Superpower-ebook/dp/B09QY24QRQ/ref=sr_1_2?crid=5YJQ824X8HEW&dib=eyJ2IjoiMSJ9.IeYq3VbASXqdQWrtKeZCv2527ysTlC0ZV_r22PAvIn6LX98qJ5pP_98lx5E7DmBa.XbzsDb42p0gSiKZieew3zSjwgagzqASkvmijS4avHlg&dib_tag=se&keywords=I+am+a+flight+attendant+and+that+is+my+superpower&qid=1709048698&s=books&sprefix=i+am+a+flight+attendant+and+that+is+my+superpower%2Cstripbooks%2C343&sr=1-2">
                    Volume 2
                  </a>
              </p>
            </div>
          </div>

          <div className='booksBar'>
            <a href="https://www.amazon.com/Handbook-Developing-Human-Equity-Civility-ebook/dp/B08WKV47W8/ref=sr_1_3?dib=eyJ2IjoiMSJ9.f4arPB4XaaHUpci8I0aj8RBfcDEc1HsbBJIAal_h5JLGjHj071QN20LucGBJIEps.9tkWbkwSvyR_fxCyKrkP8Hq-CcaO8YP-0Lgq6n2gFGs&dib_tag=se&qid=1709048672&refinements=p_27%3APrynce+Michael&s=books&sr=1-3&text=Prynce+Michael">
                <img src={book3} alt='Developing Human Equity' className='booksBarImg'/>
            </a>
            <div className='bookBarText'>
              <h2>
                  The Handbook to Developing Human Equity
              </h2>
              <p>
                <a href="https://www.amazon.com/Handbook-Developing-Human-Equity-Civility-ebook/dp/B08WKV47W8/ref=sr_1_3?dib=eyJ2IjoiMSJ9.f4arPB4XaaHUpci8I0aj8RBfcDEc1HsbBJIAal_h5JLGjHj071QN20LucGBJIEps.9tkWbkwSvyR_fxCyKrkP8Hq-CcaO8YP-0Lgq6n2gFGs&dib_tag=se&qid=1709048672&refinements=p_27%3APrynce+Michael&s=books&sr=1-3&text=Prynce+Michael">
                  World Civility - The Missing Element
                </a>
              </p>
            </div>
          </div>

        </div>

    </section>

  )
}
