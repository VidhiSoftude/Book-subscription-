import React from 'react'
import { Link } from 'react-router-dom'

import dashboard from '../img/digital.jpg'

const Revenue = () => {
  return (
    <>
        <section id="features" className="features">
        <div className="details">
          <div className="container" data-aos="fade-up" data-aos-delay="300">
            <div className="row">
              <div className="col-md-7">
                <h4>About Us</h4>
                <p> Welcome to BookHive, your ultimate destination for all things literary. At BookHive, we believe that books are more than just stories on a page—they are gateways to new worlds, ideas, and experiences. Our mission is to bring together a diverse collection of books and create a thriving community of readers, writers, and book enthusiasts.
                <br/>
                <br/>

Whether you're searching for the latest bestseller, a timeless classic, or a hidden gem, BookHive is here to connect you with the books that inspire, educate, and entertain. Our curated selection covers a wide range of genres, ensuring there's something for every reader.
<br/>
<br/>

At the heart of BookHive is our commitment to fostering a love for reading. We offer insightful reviews, author interviews, and book recommendations to help you discover your next great read. Join our community, share your thoughts, and dive into the endless world of books with us.
<br/>
<br/>

BookHive—where every book finds its place, and every reader finds their hive. </p>
                <Link to="/about" className="btn-get-started">Know More</Link>
              </div>
              <div className="col-lg-5 position-relative" data-aos="fade-up" data-aos-delay="200">
                <div className="phone-wrap">
                  <img src={dashboard} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Revenue