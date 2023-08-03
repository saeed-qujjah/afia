import React from "react";
import { NavLink } from "react-router-dom";
import NavBar from "../NavBar";
import background from "../../global/images/doctors-hands-holding-medical-care-objects.jpg";
import "./AboutUs.css";
import logo from "../../global/images/Green Medical Logo (1).svg";
import logo2 from "../../global/images/aafia.png";
import consul from "../../global/images/talk.png"
import advice from "../../global/images/hands-holding-heart.png"
import rev from "../../global/images/review.png"
import dating from "../../global/images/calendar.png"
import "boxicons"

const AboutUs = () => {
  return (
    <div>
      <NavBar page="about"/>
      {/* <div className="navbar flex justify-between fixed w-[100%] items-center px-20 py-2 bg-[var(--p-color)] z-50 shadow-md">
      <div className="flex justify-between items-center">
        <img className="w-28" src={logo2} alt="" />
      </div>
        <div className="flex justify-between items-center">
          <NavLink
            to="/Login"
            className="border border-[var(--green-color)] outline-none px-4 py-2 pt-1 rounded-lg text-[var(--green-color)] "
          >
            Login
          </NavLink>
          <NavLink
            to="/Register"
            className="border-none outline-none ml-5 bg-[var(--green-color)] px-4 py-2 pt-1 rounded-lg text-[var(--p-color)]"
          >
            SignUp
          </NavLink>
        </div>
    </div> */}
      <div className="abouts pt-20 bg-[url('/src/global/images/young-handsome-physician-medical-robe-with-stethoscope.jpg')] bg-cover w-full h-screen">
        <p className="w-[750px] font-[Caprasimo] p-28 pb-12 pl-20 text-7xl text-[var(--green-color)]">
          Providing Best Medical Care
        </p>
        <p
          style={{ lineHeight: 1.7 }}
          className="w-[550px] text-[var(--p-color)] opacity-60 text-lg pl-20"
        >
          Health care of our patients and thier safety are always will be our
          responsablity and our priority, so we follow the best practices for
          cleanliness
        </p>
      </div>
      <div class="services">
        <div className="mx-auto px-20">
          <div class="main-header">
            <h2 className="text-[var(--gray-color)]">services</h2>
            <p>
              Caring For The Health, All Aspects Of Medical Practice And Well
              Being Of Family.
            </p>
          </div>
          <div class="srv-container">
            {/* <img src={background} alt="" className="w-[100%] absolute -z-50"/> */}
            <div class="box">
              {/* <box-icon color="var(--gray-color)" name="id-card"></box-icon> */}
              <img src={consul} alt=""/>
              <div class="text">
                <h3>Consultation</h3>
                <p>
                  This service involves providing advice and guidance to
                  individuals regarding their health concerns. This can be done
                  through online or phone consultations.
                </p>
              </div>
            </div>
            <div class="box">
              {/* <box-icon
                color="var(--gray-color)"
                type="solid"
                name="calendar-minus"
              ></box-icon> */}
              <img src={rev} alt=""/>
              <div class="text">
                <h3>Review</h3>
                <p>
                  This service involves a review of an existing consultation and
                  analysis of an individual's health data, such as medical
                  history, test results, and lifestyle factors, to make
                  recommendations to improve their overall health and
                  well-being.
                </p>
              </div>
            </div>
            <div class="box">
              <box-icon color="var(--gray-color)" name="timer"></box-icon>
              <img src={dating} alt=""/>
              <div class="text">
                <h3>Appointment</h3>
                <p>
                  This service involves providing advice and guidance to
                  individuals regarding their health concerns. This can be done
                  through one-on-one sessions with a healthcare professional.
                </p>
              </div>
            </div>
            <div class="box">
              {/* <box-icon
                color="var(--gray-color)"
                name="message-dots"
              ></box-icon> */}
              <img src={advice} alt=""/>
              <div class="text">
                <h3>Medical Advices</h3>
                <p>
                  This service provides access to reliable and up-to-date
                  medical information and tools to help individuals make
                  informed decisions about their health and wellness. This can
                  include access to articles and other educational materials on
                  various health topics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer">
        <div class="container">
          {/* <div className="flex justify-center items-center"> */}
          {/* <img className="w-36" src={logo} alt="" /> */}
          {/* <span className='ml-3 pb-6 text-[var(--main-color)] font-bold text-3xl'>Aafia</span> */}
          {/* </div> */}
          {/* <img className="w-10" src={logo} alt="Logo" /> */}
          <p>Find us on social media</p>
          <div class="social-icons">
            <i color="blue" class="fab fa-facebook-f"></i>
            <i class="fab fa-twitter"></i>
            <i class="fas fa-home"></i>
            <i class="fab fa-linkedin"></i>
          </div>
          <p class="copyright">
            © 2023 <span>Aafia</span> All Right Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
