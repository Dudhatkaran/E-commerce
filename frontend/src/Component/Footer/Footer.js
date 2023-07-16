import React from "react";
import { TbMinusVertical, TbCopyright } from "react-icons/tb";
import './Footer.css'
import { FaMapMarkerAlt, FaPhoneAlt, FaTelegram, FaFacebookF, FaWhatsapp, FaInstagram, FaTelegramPlane } from 'react-icons/fa';
import { BsEnvelopeOpen } from 'react-icons/bs';


const Footer = () => {
  return (
    <>
      <footer className="footer-section">
        <div className="container-fluid p-5">
          <div className="footer-cta">
            <div className="row align-items-center">
              <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta align-items-center d-flex">
                  <div>
                    <FaMapMarkerAlt className="map" size={30} />
                  </div>
                  <div className="cta-text">
                    <h4>Find us</h4>
                    <span>Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016 </span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta d-flex align-items-center">
                  <div>
                    <FaPhoneAlt className="call" size={25} />
                  </div>
                  <i className="fas fa-phone" />
                  <div className="cta-text">
                    <h4>Call us</h4>
                    <span>+91 1234567890</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-4 mb-30">
                <div className="single-cta d-flex align-items-center">
                  <div>
                    <BsEnvelopeOpen className="envelop" size={30} />
                  </div>
                  <div className="cta-text">
                    <h4>Mail us</h4>
                    <span>contact@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-content pt-5 pb-1">
            <div className="row">
              <div className="col-xl-4 col-lg-4 mb-50">
                <div className="footer-widget">
                  <div className="footer-logo">
                    <a href="index.html"><img src="assets/images/logo.png" className="img-fluid" alt="logo" /></a>
                  </div>
                  <div className="footer-text">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                  </div>
                  <div className="footer-social-icon">
                    <span>Follow us</span>
                    <ul className="social_icon mb-2">
                      <li><a href="#"><FaFacebookF className="faceBook" size={25} /></a></li>
                      <li><a href="#"><FaWhatsapp className="faceBook" size={25} /></a></li>
                      <li><a href="#"><FaInstagram className="faceBook" size={25} /></a></li>
                      <li><a href="#"><FaTelegramPlane className="faceBook" size={25} /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Useful Links</h3>
                  </div>
                  <ul>
                    <li><a href="#">Our Team</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Our Gallery</a></li>
                    <li><a href="#">Selection Process</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Sponsorship</a></li>
                    <li><a href="#">Our Policies</a></li>
                    <li><a href="#">Our Team</a></li>
                    <li><a href="#">Contact us</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Subscribe</h3>
                  </div>
                  <div className="footer-text mb-25">
                    <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                  </div>
                  <div className="subscribe-form">
                    <form action="#">
                      <input type="text" placeholder="Email Address" />
                      <button><FaTelegram className="tele" size={30} /></button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                <div className="copyright-text">
                  <p>Copyright © 2023, All Right Reserved <a href="#">Soumitra Ghosh</a></p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                <div className="footer-menu">
                  <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Terms</a></li>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Policy</a></li>
                    <li><a href="#">Contact</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </>
  );
};

export default Footer;
