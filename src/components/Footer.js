import React from "react";
import footerLogo from '../img/company__logo.png'
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";


const Footer = () => {
  return (
    <>
      <footer id="footer" className="footer">
        <div className="footer-content">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-4 col-md-12 footer-info">
                <Link to="/" className="logo d-flex align-items-center">
                  <img src={footerLogo} alt="" title="" />
                </Link>
                <p>
                Fiction, forward.
                </p>
                <div className="social-links d-flex  mt-3">
                  <Link to="https://x.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJteCI6IjIifQ%3D%3D%22%7D" className="twitter">
                    <i className="bi bi-twitter"></i>
                  </Link>

                  <Link to="https://www.facebook.com/login/" className="facebook">
                    <i className="bi bi-facebook"></i>
                  </Link>
                  
                  <Link to ="https://www.linkedin.com/" className="linkedin">
                    <i className="bi bi-linkedin"></i>
                  </Link>
                </div>
              </div>
              <div className="col-lg-2 col-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className=""></i>
                    <Link to ="/">Pick a book



</Link>
                  </li>
                  <li>
                    {/* <i className=""></i> */}
                    <Link to="/about">Current books</Link>
                  </li>
                  <li>
                    {/* <i className="bi bi-dash"></i> */}
                    <Link to ="/services">All books</Link>
                  </li>
                  <li>
                    {/* <i className="bi bi-dash"></i> */}
                    <Link to="/careers">Book of the Year</Link>
                  </li>
                  {/* <li>
                    <i className="bi bi-dash"></i>
                    <Link to ="/contact">Contact Us</Link>
                  </li> */}
                </ul>
              </div>
              <div className="col-lg-3 col-6 footer-links">
                <h4>About BOTM</h4>
                <ul>
                  <li>
                    {/* <i className="bi bi-dash"></i> */}
                    <HashLink smooth to ="/services/#Educational-content">
                    About us
                    </HashLink>
                  </li>
                  <li>
                    {/* <i className="bi bi-dash"></i> */}
                    <HashLink smooth to ="/services/#Entertainment-content">
                    Virtual Book Tour
                    </HashLink>
                  </li>
                  <li>
                    {/* <i className="bi bi-dash"></i> */}
                    <HashLink smooth to="/services/#Games">Relationship status</HashLink>
                  </li>
                  <li>
                    {/* <i className="bi bi-dash"></i> */}
                    <HashLink smooth to ="/services/#Sports">Recent Press</HashLink>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                <h4>Contact Us</h4>
                <address>
                 
              Vijay Nagar <br /> Indore <br /> Madhya Pradesh, India <br />
                  <br />
                  <strong>Phone:</strong> +91 9111338805<br />
                  <strong>Email: </strong>
                  <a href="mailto: contact_team@upstartai.in">                  
                  BookHive@gmail.com
                  </a> 
                  <br />
                </address>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-legal">
          <div className="container">
            <div className="copyright">
              <span id="copyright">
                <script>
                  document.getElementById('copyright').appendChild(document.createTextNode(new
                  Date().getFullYear()) )
                </script>
              </span>
              &copy;  Copyright
              <span> BookHive </span>. All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
      
    </>
  )
  
};

export default Footer;
