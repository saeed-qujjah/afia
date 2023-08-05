import React, { useState } from "react";
import "boxicons";
import img from "../../global/images/blood-pressure(1).png";
import img1 from "../../global/images/drop.png";
import img2 from "../../global/images/electrocardiography.png";
import img3 from "../../global/images/glucometer.png";
import img4 from "../../global/images/checked.png";

const Right = () => {
  const [show, setShow] = useState(false);
  const clickHandler = () => {
    setShow(true);
  };
  const clickHandlerr = () => {
    setShow(false);
  };
  return (
    <div className="w-[25%] h-[calc(100vh-62px)] py-5 bg-white fixed right-0 flex flex-col justify-between items-center">
      {/* <div className="flex"> */}
        <div className="w-[80%] h-[23%] bg-[var(--post-color)] rounded-xl shadow-md py-2">
          <div className="flex justify-between items-center w-[80%] pr-6 m-auto">
            <img src={img} alt="" className="w-[37px] h-[37px]" />
            <p className="font-bold text-[var(--gray-color)] opacity-[0.6] text-lg">
              Blood Presure
            </p>
          </div>
          <div className="mt-3 ml-4 text-[var(--gray-color)]">
            <p className="font-light">Normal</p>
            <div className="flex items-end">
              <p className="text-xl mr-2">119/80</p>
              <p className="font-light text-sm text-[var(--green-color)]">
                mmHg
              </p>
            </div>
          </div>
        {/* </div> */}
      </div>
      <div className="w-[80%] pr-6 h-[23%] bg-[var(--post-color)] rounded-xl shadow-md py-2">
        <div className="flex justify-between items-center w-[80%] m-auto pr-[60px]">
          <img src={img1} alt="" className="w-[37px] h-[37px]" />
          <p className="font-bold text-[var(--gray-color)] opacity-[0.6] text-lg">
            Waters
          </p>
        </div>
        <div className="mt-5 ml-4 text-[var(--gray-color)]">
          <p className="font-light ">Normal</p>
          <div className="flex items-end">
            <p className="text-xl mr-2">3.25</p>
            <p className="font-light text-sm text-[var(--green-color)]">
              Liters
            </p>
          </div>
        </div>
      </div>
      <div className="w-[80%] pr-6 h-[23%] bg-[var(--post-color)] rounded-xl shadow-md py-2">
        <div className="flex justify-between items-center w-[80%] m-auto pr-[21px]">
          <img src={img2} alt="" className="w-[37px] h-[37px]" />
          <p className="font-bold text-[var(--gray-color)] opacity-[0.6] text-lg">
            Health Rate
          </p>
        </div>
        <div className="mt-3 ml-4 text-[var(--gray-color)]">
          <p className="font-light">Checkup Now</p>
          <div className="flex items-end">
            <p className="text-xl mr-2">105</p>
            <p className="font-light text-sm text-[var(--green-color)]">bmp</p>
          </div>
        </div>
      </div>
      <div className="w-[80%] pr-6 h-[23%] bg-[var(--post-color)] rounded-xl shadow-md py-2">
        <div className="flex justify-between items-center w-[80%] m-auto pr-[53px]">
          <img src={img3} alt="" className="w-[37px] h-[37px]" />
          <p className="font-bold text-[var(--gray-color)] opacity-[0.6] text-lg">
            Glucose
          </p>
        </div>
        <div className="mt-3 ml-4 text-[var(--gray-color)]">
          <p className="font-light">Normal</p>
          <div className="flex items-end">
            <p className="text-xl mr-2">100</p>
            <p className="font-light text-sm text-[var(--green-color)]">
              mg/dl
            </p>
          </div>
        </div>
      </div>
      {/* <p className="my-8 text-2xl font-[Caprasimo] text-[var(--gray-color)]">Top Rated Doctors :</p>
      <div className="flex flex-col justify-between items-center h-[80%]">
        <div className="flex justify-between items-center rounded-xl bg-white p-3">
          <img src={img} className="w-[24%] rounded-md" alt=""/>
          <div className="text-[var(--gray-color)] w-[71%]">
            <h3 className="font-bold text-lg italic">Dr.Osama Horani</h3>
            <div className="flex justify-between w-[80%] items-center mt-1">
              <div className="rate flex"> 
              <box-icon type='solid' color='var(--green-color)' name='star'></box-icon>
              <box-icon type='solid' color='var(--green-color)' name='star'></box-icon>
              <box-icon type='solid' color='var(--green-color)' name='star'></box-icon>
              <box-icon name='star-half' color='var(--green-color)' type='solid' ></box-icon>
              <box-icon name='star' color='var(--green-color)'></box-icon>
              </div>
              <p className='text-[var(--green-color)] font-bold'>4.5</p>
            </div>
            <p className="font-light text-sm opacity-[0.7] mt-3">Cardiology specialized since 2016 in Mujtahid Hospital . . .</p>
          </div>
        </div>
        <div className="flex justify-between items-center rounded-xl bg-white p-3">
          <img src={img} className="w-[24%] rounded-md" alt=""/>
          <div className="text-[var(--gray-color)] w-[71%]">
            <h3 className="font-bold text-lg italic">Dr.Osama Horani</h3>
            <div className="flex justify-between w-[80%] items-center mt-1">
              <div className="rate flex"> 
              <box-icon type='solid' color='var(--green-color)' name='star'></box-icon>
              <box-icon type='solid' color='var(--green-color)' name='star'></box-icon>
              <box-icon type='solid' color='var(--green-color)' name='star'></box-icon>
              <box-icon name='star-half' color='var(--green-color)' type='solid' ></box-icon>
              <box-icon name='star' color='var(--green-color)'></box-icon>
              </div>
              <p className='text-[var(--green-color)] font-bold'>4.5</p>
            </div>
            <p className="font-light text-sm opacity-[0.7] mt-3">Cardiology specialized since 2016 in Mujtahid Hospital . . .</p>
          </div>
        </div>
        <div className="flex justify-between items-center rounded-xl bg-white p-3">
          <img src={img} className="w-[24%] rounded-md" alt=""/>
          <div className="text-[var(--gray-color)] w-[71%]">
            <h3 className="font-bold text-lg italic">Dr.Osama Horani</h3>
            <div className="flex justify-between w-[80%] items-center mt-1">
              <div className="rate flex"> 
              <box-icon type='solid' color='var(--green-color)' name='star'></box-icon>
              <box-icon type='solid' color='var(--green-color)' name='star'></box-icon>
              <box-icon type='solid' color='var(--green-color)' name='star'></box-icon>
              <box-icon name='star-half' color='var(--green-color)' type='solid' ></box-icon>
              <box-icon name='star' color='var(--green-color)'></box-icon>
              </div>
              <p className='text-[var(--green-color)] font-bold'>4.5</p>
            </div>
            <p className="font-light text-sm opacity-[0.7] mt-3">Cardiology specialized since 2016 in Mujtahid Hospital . . .</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};
export default Right;
