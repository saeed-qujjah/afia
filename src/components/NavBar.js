import React, { useState } from "react";
import logo from "../global/images/Green Medical Logo.png";
import logo2 from "../global/images/afia.png";
import { NavLink, useNavigate } from "react-router-dom";
import consul from "../global/images/talk.png";
import advice from "../global/images/hands-holding-heart.png";
import rev from "../global/images/review.png";
import dating from "../global/images/calendar.png";
import home from "../global/images/home.png";
import logout from "../global/images/logout.png";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { authAction } from "../store/auth";

const NavBar = ({ page }) => {
  const nav = useNavigate();
  const dispatch = useDispatch()
  const [pageActive, setPageActive] = useState("");
  const [showSetting,setShowSetting] = useState(false);
  const isDoctor = !!Cookies.get("user") ? JSON.parse(Cookies.get("user")).role === 0 : false 

  const showSettingHandler = () => {
    setShowSetting(!showSetting)
  }

  const logoutHandler = () => {
    Cookies.remove("user");
    Cookies.remove("accessToken");
    Cookies.remove("refeshToken");
    dispatch(authAction.logoutHandler());
    nav("/AboutUs");
  };

  return (
    <>
      {/* <div className="navbar flex justify-between fixed w-[200px] h-[100vh] flex-col items-left px-2 py-2 bg-[var(--p-color)] z-50 shadow-md">
        <div className="h-[75%]">
          <div className="flex justify-between items-center">
            <img className="w-28" src={logo2} alt="" />
            <div>
              <div className="w-[14px] h-[14px] rounded-full bg-[var(--gray-color)] text-[10px] flex justify-center items-center text-[var(--p-color)] absolute z-10 top-[13px] right-[19px]">
                2
              </div>
              <box-icon
                style={{ cursor: "pointer" }}
                name="bell"
                type="solid"
                color="var(--green-color)"
                animation="tada"
              ></box-icon>
            </div>
          </div>
          {page === "bout" && (
            <div className="flex flex-col justify-between items-center">
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
          )}
          {page !== "about" && (
            <div className="flex h-[50%] justify-between flex-col items-left relative mt-[30px]">
              <ul className="flex justify-between items-left flex-col h-[90%] text-[var(--gray-color)]">
                <li className={pageActive === "Home" ? "active" : "unactive"}>
                  <img src={home} alt="" />
                  <NavLink
                    to="/Aafia/Home"
                    // className={pageActive === "Home" ? "active" : "unactive"}
                    onClick={() => setPageActive("Home")}
                  >
                    Home
                  </NavLink>
                </li>
                <li
                  className={
                    pageActive === "Consultation" ? "active" : "unactive"
                  }
                >
                  <img src={consul} alt="" />
                  <NavLink
                    onClick={() => setPageActive("Consultation")}
                    to="/Aafia/Consultation"
                    // className={
                    //   pageActive === "Conultation" ? "active" : "unactive"
                    // }
                  >
                    Consultation
                  </NavLink>
                </li>
                <li className={pageActive === "Review" ? "active" : "unactive"}>
                  <img src={rev} alt="" />
                  <NavLink
                    to="/Aafia/Review"
                    // className={pageActive === "Review" ? "active" : "unactive"}
                    onClick={() => setPageActive("Review")}
                  >
                    Review
                  </NavLink>
                </li>
                <li className={pageActive === "Dating" ? "active" : "unactive"}>
                  <img src={dating} alt="" />
                  <NavLink
                    to="/Aafia/Dating"
                    // className={pageActive === "Dating" ? "active" : "unactive"}
                    onClick={() => setPageActive("Dating")}
                  >
                    Appointment
                  </NavLink>
                </li>
                <li
                  className={pageActive === "Advices" ? "active" : "unactive"}
                >
                  <img src={advice} alt="" />
                  <NavLink
                    to="/Aafia/Advices"
                    // className={pageActive === "Advices" ? "active" : "unactive"}
                    onClick={() => setPageActive("Advices")}
                  >
                    Medical Advices
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="text-[var(--gray-color)] flex items-center my-8 px-3 rounded-lg py-4 cursor-pointer">
          <img src={logout} alt="" className="w-[25px] mr-2"/>
          <p>Logout</p>
          </div>
      </div> */}
      <div className="navbar flex justify-between fixed w-[100%] items-center px-20 py-2 bg-[var(--p-color)] z-50 shadow-md">
        <div className="flex justify-between items-center">
          <img className="w-24" src={logo2} alt="" />
        </div>
        {page === "about" && (
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
        )}
        {page !== "about" && (
          // <>
          <div className="flex w-[75%] justify-between items-center relative">
            <ul className="flex justify-between items-center w-[70%] text-[var(--green-color)]">
              <li>
                <NavLink
                  to="/Aafia/Home"
                  className={pageActive === "Home" ? "active" : "unactive"}
                  onClick={() => setPageActive("Home")}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Aafia/Consultation"
                  className={
                    pageActive === "Consultation" ? "active" : "unactive"
                  }
                  onClick={() => setPageActive("Consultation")}
                >
                  Consultation
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Aafia/Review"
                  className={pageActive === "Review" ? "active" : "unactive"}
                  onClick={() => setPageActive("Review")}
                >
                  Review
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Aafia/Appointment"
                  className={pageActive === "Dating" ? "active" : "unactive"}
                  onClick={() => setPageActive("Dating")}
                >
                  Appointment
                </NavLink>
              </li>
            {!isDoctor &&  <li>
                <NavLink
                  to="/Aafia/Advices"
                  className={pageActive === "Advices" ? "active" : "unactive"}
                  onClick={() => setPageActive("Advices")}
                >
                  Medical Advices
                </NavLink>
              </li>}
            </ul>
            <div className="w-[14px] h-[14px] rounded-full bg-[var(--gray-color)] text-[10px] flex justify-center items-center text-[var(--p-color)] absolute z-10 top-[-3px] right-[56px]">
              2
            </div>
            <div className="w-[80px] flex justify-between items-center">
              <box-icon
                style={{ cursor: "pointer" }}
                name="bell"
                type="solid"
                color="var(--green-color)"
                animation="tada"
              ></box-icon>
              <box-icon
                style={{ cursor: "pointer" }}
                name="cog"
                onClick={showSettingHandler}
                color="var(--gray-color)"
              ></box-icon>
            { showSetting && <ul className="absolute w-[180px] text-[var(--gray-color)] bg-[var(--greenLigth-color)] pl-4 py-3 top-10 right-[-70px] rounded-xl">
                <li className="mb-2" onClick={()=>nav("/Change_password")}>Change password</li>
                <hr className='w-[90%] my-3 rounded-full border-[var(--green-color)]'></hr>
                <li onClick={logoutHandler} className="flex justify-between items-center w-[85px]"><box-icon name='log-out' color='var(--gray-color)'></box-icon>Logout</li>
              </ul>}
            </div>
          </div>
          // {/* <p onClick={logoutHandler} className="">logout</p></> */}
        )}
      </div>
    </>
  );
};

export default NavBar;
