import React, { useEffect, useRef, useState } from "react";
import "./Review.css"
import img from "../../global/images/medicine-capsules-global-health-with-geometric-pattern-digital-remix.jpg"
import ViewReviews from "./ViewReviews";
import NewReview from "./NewReview";
import { useLocation } from "react-router-dom";

const Review = () => {
  const [newActive, setNewActive] = useState(true);
  const pageRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    pageRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [location]);
  return (
    <div className="review pt-[62px]" ref={pageRef}>  
        <div className="relative">
        <img src={img} alt="" className="h-[300px] w-[100%] object-cover" />
        <p className="absolute top-[50%] left-20 font-[Caprasimo] text-4xl w-[700px] text-[var(--p-color)]">
        You can review the doctor who gave you the previous consultation at any time
        </p>
      </div>
      {/* <div className="w-[100%] h-[70px] bg-white">
        <ul className="flex justify-between pt-6 items-center w-[28%] mx-auto">
          <li
            className={newActive ? "active" : "unactive"}
            onClick={() => setNewActive(true)}
          >
            New Review
          </li>
          <li
            className={!newActive ? "active" : "unactive"}
            onClick={() => setNewActive(false)}
          >
            My Reviews
          </li>
        </ul>
      </div> */}
      <div className="w-[27%] m-auto h-[60px] rounded-full bg-[var(--greenLigth-color)] border border-[var(--greenLigth-color)] mt-10 flex justify-center items-center">
        <ul className="flex justify-between items-center w-[100%] mx-auto">
          <li
            className={newActive ? "active" : "unactive"}
            onClick={() => setNewActive(true)}
          >
            New Review
          </li>
          <li
            className={!newActive ? "active" : "unactive"}
            onClick={() => setNewActive(false)}
          >
            My Reviews
          </li>
        </ul>
      </div>
      {newActive ? <NewReview /> : <ViewReviews />}
    </div>
  );
};

export default Review;
