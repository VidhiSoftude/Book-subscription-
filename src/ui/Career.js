
import React from "react";
import careerImage from "../img/careers-img.jpg";
import careerHeader from "../img/blog-header.jpg";
import InnerHeaderBanner from "../components/InnerHeaderBanner";
import InnerHeader from "../components/InnerHeader";
import Footer from "../components/Footer";

const Career = () => {
  return (
    <>
      <InnerHeader />
      <InnerHeaderBanner name={"Careers"} img={careerHeader} />

      <main id="main">
        <section id="blog" className="blog">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>Join Us in Building the Future of Technology</h2>
            </div>

            <div className="row gy-4 blog-details">
              <div className="col-lg-6">
                <img
                  src={careerImage}
                  className="img-fluid"
                  alt="Join Us in Building the Future of Technology"
                  title="Join Us in Building the Future of Technology"
                />
              </div>
              <div className="col-lg-6">
                <p>
                At UpstartAI, we are a futuristic company driven by high-energy individuals committed to nurturing talent and driving innovation to shape the future of technology. As we broaden our horizons, we are looking for passionate individuals to join our team and contribute to pioneering projects.
                </p>
                <p>
                We offer a forward-thinking work environment where creativity and collaboration flourish. Whether you're an experienced professional or just starting your career, UpstartAI provides unparalleled opportunities for growth and learning from creative minds.
                </p>
                <div className="content">
                  <blockquote>
                    <p>
                    Excited to be part of our journey? Send your resumes to{" "}
                      <a href="mailto:contact_team@upstartai.in">
                        contact_team@upstartai.in
                      </a> </p>
                      <p>
                      Don't miss out—apply now and be part of something revolutionary!
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Career;

