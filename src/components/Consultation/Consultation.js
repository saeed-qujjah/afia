import React, { useEffect, useRef } from "react";
import NavBar from "../NavBar";
import img from "../../global/images/medical-banner-with-doctor-holding-stethoscope.jpg";
import "./Consultation.css";
import { useState } from "react";
import NewConsultation from "./NewConsultation";
import ViewConsultation from "./ViewConsultation";
import { useLocation } from "react-router-dom";

const Consultation = () => {
  const [newActive, setNewActive] = useState(true);
  const pageRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    pageRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [location]);
  return (
    // <div className="consoltation pl-[201px]">
    //   <div className="flex justify-between fixed w-[100%] items-center pr-20 py-4 bg-[var(--p-color)] z-50 shadow-md">
    //     {/* <div className="flex w-[85%] justify-between items-center relative"> */}
    //       <ul className="flex justify-between items-center mx-auto w-[330px]">
    //         <li
    //           className={newActive ? "active" : "unactive"}
    //           onClick={() => setNewActive(true)}
    //         >
    //           New Consultation
    //         </li>
    //         <li
    //           className={!newActive ? "active" : "unactive"}
    //           onClick={() => setNewActive(false)}
    //         >
    //           My Consultations
    //         </li>
    //       </ul>
    //     {/* </div> */}
    //   </div>
    //   <div className="relative">
    //     <img src={img} alt="" className="h-[626px] w-[100%] object-cover" />
    //     <p className="absolute top-[50%] left-20 font-[Caprasimo] text-4xl w-[500px] text-[var(--p-color)]">
    //       Experience the Future of Healthcare Online Consultations with Expert
    //       Doctors
    //     </p>
    //   </div>
    //   {/* <div className="bg-white w-[100%] h-[110px]">
    //     <ul className="flex justify-between items-center w-[28%] pt-16 mx-auto">
    //       <li
    //         className={newActive ? "active" : "unactive"}
    //         onClick={() => setNewActive(true)}
    //       >
    //         New Consultation
    //       </li>
    //       <li
    //         className={!newActive ? "active" : "unactive"}
    //         onClick={() => setNewActive(false)}
    //       >
    //         My Consultations
    //       </li>
    //     </ul>
    //   </div> */}
    //   {newActive ? <NewConsultation /> : <ViewConsultation />}
    // </div>
    <div className="consoltation pt-[62px]" ref={pageRef}>
      <div className="relative">
        <img src={img} alt="" className="h-[581px] w-[100%] object-cover" />
        <p className="absolute top-[50%] left-20 font-[Caprasimo] text-4xl w-[500px] text-[var(--p-color)]">
          Experience the Future of Healthcare Online Consultations with Expert
          Doctors
        </p>
      </div>
      <div className="w-[27%] m-auto h-[60px] rounded-full bg-[var(--greenLigth-color)] border border-[var(--greenLigth-color)] mt-10 flex justify-center items-center">
        <ul className="flex justify-between items-center w-[100%] mx-auto">
          <li
            className={newActive ? "active" : "unactive"}
            onClick={() => setNewActive(true)}
          >
            New Consultation
          </li>
          <li
            className={!newActive ? "active" : "unactive"}
            onClick={() => setNewActive(false)}
          >
            My Consultations
          </li>
        </ul>
      </div>
      {newActive ? <NewConsultation /> : <ViewConsultation />}
    </div>
  );
};

export default Consultation;
