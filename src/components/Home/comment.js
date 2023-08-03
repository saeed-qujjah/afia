import React from "react";
// import "./comment.css";
import imageuser from '../../global/images/arrangement-medical-still-life-elements.jpg'

const Comment = (props) => {
  return (
    <div className="flex mt-[25px] relative" key={props.idCom}>
      <img src={imageuser} className="w-9 h-9 rounded-full" alt=""/>
      <div className="bg-[var(--p-color)] px-4 pr-10 py-2 rounded-2xl ml-2">
        <div className="">
          <h4 className="text-lg font-normal text-[var(--gray-color)]">{props.name}</h4>
          <label className="text-sm font-light text-[var(--gray-color)] opacity-[0.8]">
            {props.comment}
          </label>
        </div>
      </div>
      {/* <div className="absolute flex tablet:left-[77%] left-[65%] justify-between items-center w-16 top-[95%]">
        <p>like</p>
        <p>reply</p>
      </div> */}
    </div>
  );
};

export default Comment;
