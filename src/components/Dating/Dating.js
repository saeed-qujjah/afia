import React, { useEffect, useRef, useState } from "react";
import celender from "../../global/images/time-capsule.png";
import { useLocation } from "react-router-dom";

const Dating = () => {
    const [newActive, setNewActive] = useState(true);
    const pageRef = useRef(null);
    const location = useLocation();
  
    useEffect(() => {
      pageRef.current.scrollIntoView({ behavior: 'smooth' });
    }, [location]);
  return (
    <div className="pt-[62px]" ref={pageRef}>
      {/* <div className="flex mx-20 ml-52 justify-between items-center my-7 w-[70%]">
        <img src={celender} alt="" className="w-32" />
        <p className="text-4xl font-[Caprasimo] text-[var(--gray-color)]">
          Search Doctor, Make an Appointment
        </p>
      </div> */}
      {/* <div className="consoltation w-[14%] h-[100vh] p-5 bg-[var(--p-color)] shadow-xl fixed top-0">
        <ul className="flex justify-between items-center flex-col w-[28%] pt-16 mx-auto">
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
      </div> */}
    </div>
  );
};

export default Dating;
