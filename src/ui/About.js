
import React, { useEffect } from 'react';
import AOS from "aos";
import '../../node_modules/aos/dist/aos.css';
import aboutHeader from '../img/about-header.jpg';
import softwareImage from '../img/Vision_Image.png';
//import teamMember1 from '../img/team/Padmakumar.png';
//import teamMember2 from '../img/team/Sundaramoorthy.png';
import InnerHeader from '../components/InnerHeader';
import InnerHeaderBanner from '../components/InnerHeaderBanner';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const About = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <>
            <InnerHeader />
            <InnerHeaderBanner name={"About Us"} img={aboutHeader} />

            <main id="main">
                <section id="about" className="about">
                    <div className="container" data-aos="fade-up">
                        <div className="section-header">
                            <h2>Our name says a lot, but there’s a little MORE to it. And us.</h2>
                        </div>
                        <div className="row gy-4 align-items-center" data-aos="fade-up">
                            <div className="col-lg-6">
                                <img src={softwareImage} className="img-fluid" alt="UpstartAI: Empowering Innovations" title="UpstartAI: Empowering Innovations" />
                            </div>
                            <div className="col-lg-6">
                                <p>Welcome to BookHive, your ultimate destination for all things literary. At BookHive, we believe that books are more than just stories on a page—they are gateways to new worlds, ideas, and experiences. Our mission is to bring together a diverse collection of books and create a thriving community of readers, writers, and book enthusiasts.
                                

Whether you're searching for the latest bestseller, a timeless classic, or a hidden gem, BookHive is here to connect you with the books that inspire, educate, and entertain. Our curated selection covers a wide range of genres, ensuring there's something for every reader.

At the heart of BookHive is our commitment to fostering a love for reading. We offer insightful reviews, author interviews, and book recommendations to help you discover your next great read. Join our community, share your thoughts, and dive into the endless world of books with us.

BookHive—where every book finds its place, and every reader finds their hive.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <div id="vision" className="vision aos-init" data-aos="fade-up" data-aos-delay="300">
                    <div className="container">
                        <div className="row gy-4">
                            <div className="col-lg-4 aos-init">
                                <div className="card-item">
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="card-body">
                                                <h4 className="card-title">Vision</h4>
                                                <p>We have a VISION to inspire and shape a more curious and thoughtful culture.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 aos-init">
                                <div className="card-item">
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="card-body">
                                                <h4 className="card-title">Mission</h4>
                                                <p>Our MISSION is to bring the best new fiction forward.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 aos-init" data-aos="fade-up" data-aos-delay="300">
                                <div className="card-item">
                                    <div className="row">
                                        <div className="col-xl-12">
                                            <div className="card-body">
                                                <h4 className="card-title">Our Values</h4>
                                                <p>Going the extra mile, humankind serving humankind, delivering lasting value with uncompromising integrity and dedication.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <section id="management" className="management light-bg aos-init" data-aos="fade-up" data-aos-delay="300">
                    <div className="container">
                        <div className="section-header">
                            <h2>Meet Our Team</h2>
                            <p>In a world with what some might call an overabundance or illusion of choice, our readers enjoy the satisfaction and certainty that comes with our selection process and the quality of the books we send their way.</p>
                        </div>
                        <div className="row member d-flex align-items-center ">
                         {/*   <div className="col-md-2">
                                <div className="pic"><img className="img-fluid" alt="TanuShree" /></div>
                            </div> */}
                            <div className="col-md-10">
                                <div className="member-info">
                                    <h4>Tanu Shree</h4>
                                    <span>Co-Founder</span>
                                   <p>Tanu Shree, our accomplished co-founder, is a Data Scientist with a proven track record of leveraging data-driven insights to drive business growth and innovation. With extensive experience in data analysis, machine learning, and statistical modeling, Tanu Shree has mastered the art of extracting valuable insights from complex datasets and solving even the most challenging problems.</p> 
                                    <div className="social">
                                        <Link to="/"><i className="bi bi-twitter"></i></Link>
                                        <Link to="/"><i className="bi bi-linkedin"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row member d-flex align-items-center mt-4">
                             {/*<div className="col-md-2">
                               <div className="pic"><img src={teamMember2} className="img-fluid" alt="V.Sundaramoorthy" /></div> 
                            </div>*/}
                            <div className="col-md-10">
                                <div className="member-info">
                                    <h4>Zikra Azhar</h4>
                                    <span>Co-Founder</span>
                                    <p>Zikra, our diligent co-founder, is driven by a passion for innovation and problem-solving. With a keen eye for detail and a robust technical foundation, she excels at tackling complex challenges and bringing fresh ideas to product development.</p>
                                   
                                    <div className="social">
                                        <Link to="/"><i className="bi bi-twitter"></i></Link>
                                        <a href="https://www.linkedin.com/in/sundaramoorthy-velayutham-92697aa/" target="_blank" rel="noreferrer"><i className="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                      </div>
                           
                        

                      <div className="row member d-flex align-items-center mt-4">
                             {/*<div className="col-md-2">
                               <div className="pic"><img src={teamMember2} className="img-fluid" alt="V.Sundaramoorthy" /></div> 
                            </div>*/}
                            <div className="col-md-10">
                                <div className="member-info">
                                    <h4>Ajay Kumar</h4>
                                    <span>Co-Founder</span>
                                    <p>Ajay is a motivated data engineer with a knack for transforming raw data into actionable insights. His analytical mindset and attention to detail enable him to effectively clean, organize, and analyze data to drive decision-making processes.</p>
                                    
                                    <div className="social">
                                        <Link to="/"><i className="bi bi-twitter"></i></Link>
                                        <a href="https://www.linkedin.com/in/sundaramoorthy-velayutham-92697aa/" target="_blank" rel="noreferrer"><i className="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>
                       </div>
                       

                      

         </div>
   </section>

            </main>
            <Footer />
        </>
    )
}

export default About;
