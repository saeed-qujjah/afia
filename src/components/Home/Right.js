import React, { useState } from "react";
import "boxicons";
import img from '../../global/images/arrangement-medical-still-life-elements.jpg'
import img2 from '../../global/images/arrangement-medical-still-life-elements.jpg'

const Right = () => {
  const [show, setShow] = useState(false);
  const clickHandler = () => {
    setShow(true);
  };
  const clickHandlerr = () => {
    setShow(false);
  };
  return (
    <div className="w-[25%] h-[calc(100vh-62px)] fixed right-0 px-4"
    >
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
