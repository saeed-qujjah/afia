import React from 'react';
import img from "../../global/images/bearded-doctor-glasses(1).jpg";
import img2 from "../../global/images/girl.jpg";
import add from "../../global/images/appointment(1).png";
import add2 from "../../global/images/appointment.png";

const BoxDoctor = ({doctor,setShowForm,specialization}) => {

    const years = [ 
      "2020",
      "2016",
      "2019",
      "2013",
      "2018",
      "2015",
      "2017",
      "2014"
    ];
    const year = years[Math.floor(Math.random() * years.length)];
    const hospitals = ["Mujtahid","Ibn al-Nafis","Tishreen","Mouwasat","Al-Shami","Al-Zahra","Al-Razi"]
    const hospital = hospitals[Math.floor(Math.random() * hospitals.length)];

    return (
        <div className="shadow-md  rounded-xl bg-white p-3">
          <div className="flex justify-between mb-2 items-center relative">
            <img src={img} className="w-[60px] rounded-full" alt="" />
            <img src={add2} alt="" onClick={() => setShowForm(doctor)} className="absolute w-[30px] cursor-pointer right-2 top-2"/>
            <div className="w-[275px] flex flex-col justify-between items-start">
              <h3 className="text-xl font-bold text-[var(--gray-color)]">
                {doctor}
              </h3>
              {/* <h6><span>{param.id}</span> specialization</h6> */}
              <div className="flex justify-between items-center text-[var(--gray-color)]">
                <p className="mr-3 text-sm text-[var(--green-color)]">
                  Country :
                  <span className="text-xs text-[var(--gray-color)]">
                    Syria
                  </span>
                </p>
                <p className="text-sm text-[var(--green-color)]">
                  City :
                  <span className="text-xs text-[var(--gray-color)]">
                    Damascus
                  </span>
                </p>
              </div>
              {/* <div className="flex justify-between w-[90%] items-center mt-1">
                <div className="rate flex">
                  <box-icon
                    type="solid"
                    color="var(--green-color)"
                    name="star"
                  ></box-icon>
                  <box-icon
                    type="solid"
                    color="var(--green-color)"
                    name="star"
                  ></box-icon>
                  <box-icon
                    type="solid"
                    color="var(--green-color)"
                    name="star"
                  ></box-icon>
                  <box-icon
                    type="solid"
                    color="var(--green-color)"
                    name="star"
                  ></box-icon>
                  <box-icon
                    name="star-half"
                    color="var(--green-color)"
                    type="solid"
                  ></box-icon>
                  <box-icon name="star" color="var(--green-color)"></box-icon> 
                </div>
                <p className="text-[var(--green-color)] font-bold">4.5</p>
              </div> */}
            </div>
          </div>
          <div className="text-[var(--gray-color)] w-[100%]">
                <p className="font-light text-sm opacity-[0.8] mt-3">
                  {specialization} specialized since {year} in {hospital} Hospital . . .
                </p>
              </div>
        </div>
    );
}

export default BoxDoctor;
