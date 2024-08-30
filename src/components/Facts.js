import React from 'react'

const Facts = () => {
  return (
    <>
  
      <section id="facts" className="facts">
        <div className="container" data-aos="fade-up">
          <div className="row justify-content-center">
            <div className="col-lg-12 text-center">
              <div className="section-header">
                <h2 className="text-white">Our Footprints</h2>
                <p>Delivering service excellence to all our Customers across geography… </p>
              </div>
              <div className="row counters">
                <div className="col-lg-4 col-6 text-center">
                  <span  className="purecounter">2</span>
                  <h3> COUNTRIES </h3>
                  <p> Global Presence </p>
                </div>
                <div className="col-lg-4 col-6 text-center">
                  <span className="purecounter">3</span>
                  <h3> CUSTOMERS </h3>
                  <p>Across the Globe</p>
                </div>
                <div className="col-lg-4 col-6 text-center">
                  <span  className="purecounter">8</span>
                  <h3> TEAM</h3>
                  <p>Members</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Facts