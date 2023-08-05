import React, { useCallback, useEffect, useRef, useState } from "react";
import details from "../../global/images/responsability.png";
import deletes from "../../global/images/delete.png";
import edit from "../../global/images/edit.png";
import Cookies from "js-cookie";
import axios from "axios";
import DeletePerson from "../../global/DeletePerson";
import EditRev from "../Review/EditRev";
import ReplyRevForm from "../Review/ReplyRevForm";
import { useLocation, useParams } from "react-router-dom";
import UseAxiosGet from "../../hooks/useAxiosGet";
import { API } from "../../data/config";
import ReviewForm from "../Review/ReviewForm";
import TrReview from "../Review/TrReview";

const ConReview = () => {
  const [del, setDel] = useState();
  const [revId, setRevId] = useState("");
  const [reviews,setReviews] = useState([])
  const [showDetails, setShowDetails] = useState(false);
  const [showReply, setShowReply] = useState(false);
  const [fetchAgain, setFetchAgain] = useState(false);
  const param = useParams()
  // const {data} = UseAxiosGet(`${API.consultations.REVIEWS}?consultation_id=${param.id}/`)
  // console.log(data.data.data)

  const pageRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    pageRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [location]);

  const deleteHandler = (id) => {
    setRevId(id);
    setDel(true);
  };

  const confrimHandler = () => {
    axios
    .delete(`${API.consultations.REVIEWS}${revId}`, {
      headers: {
        Authorization: "JWT " + Cookies.get("accessToken")
      }
    })
    .then((res) => {
      setDel(false);
      setFetchAgain(!fetchAgain)
    });
  }

  const deleteBackHandler = () => {
    setDel(false);
  };

  const editBackHandler = () => {
    if (edit) {
      setFetchAgain(!fetchAgain);
    }
    setShowDetails(false);
  };

  const fetchHandler = useCallback(() => {
    axios
    .get(`${API.consultations.REVIEWS}?consultation_id=${+param.id}`, {
      headers: {
        Authorization: "JWT " + Cookies.get("accessToken")
      }
    })
    .then((res) => {
      console.log(res.data.data)
      setReviews(res.data.data);
    });
  }, []);

  useEffect(() => {
    fetchHandler();
  }, [fetchHandler, fetchAgain]);

  const editHandler = (review) => {
    setShowDetails(review)
  }

  const showReplyHandler = (review) => {
    setShowReply(review)
  }

  const replyBackHandler = () => {
    setShowReply(false);
  };
  console.log(reviews)

  return (
    <div className="pt-[82px] px-20" ref={pageRef}>
       {del && (
        <DeletePerson
          onConfrim={confrimHandler}
          onBack={deleteBackHandler}
        />
      )}
       {showDetails && (
        <ReviewForm
          method={"edit"} 
          reviewEdit={showDetails}
          consultation={showDetails.consultation}
          goBackHandler={editBackHandler}
        />
      )}
       {showReply && (
        <ReplyRevForm
          reviewReply={showReply}
          onBack={replyBackHandler}
        />
      )}
      <p className="text-[40px] font-[Caprasimo] text-[var(--gray-color)]">
        Counseling reviews :
      </p>
      <table className="mt-16 mb-10">
      <thead>
          <tr>
            <th>Specialization</th>
            <th>Doctor</th>
            <th>Review reason</th>
            <th>Explanation</th>
            <th>Status</th>
            <th>Date created</th>
            <th>Procedures</th>
          </tr>
        </thead>
        <tbody>
        {reviews.data?.map((review, index) => {
            return (
              <TrReview
                key={index}
                review={review}
                onEdit={editHandler}
                onReply={showReplyHandler}
                onDelete={deleteHandler}
              />
            );
          })}
          {/* <tr>
            <td>osama</td>
            <td>osama</td>
            <td>mohamad</td>
            <td>40</td>
            <td>40</td>
            <td>
              <div className="flex justify-between items-center w-[50%] m-auto">
                <img
                  className="w-6 cursor-pointer"
                  src={deletes}
                  onClick={deleteHandler}
                  alt=""
                />
                <img
                  className="w-6 cursor-pointer"
                  src={edit}
                  onClick={editHandler}
                  alt=""
                />
                <img
                  className="w-6 cursor-pointer"
                  src={details}
                  onClick={showReplyHandler}
                  alt=""
                />
              </div>
            </td>
          </tr>
          <tr>
            <td>samer</td>
            <td>samer</td>
            <td>samer</td>
            <td>hasan</td>
            <td>80</td>
            <td>
              <div className="flex justify-between items-center w-[50%] m-auto">
                <img className="w-6 cursor-pointer" src={deletes} alt="" />
                <img className="w-6 cursor-pointer" src={edit} alt="" />
                <img className="w-6 cursor-pointer" src={details} alt="" />
              </div>
            </td>
          </tr>
          <tr>
            <td>saleh</td>
            <td>saleh</td>
            <td>soliman</td>
            <td>soliman</td>
            <td>76</td>
            <td>
              <div className="flex justify-between items-center w-[50%] m-auto">
                <img className="w-6 cursor-pointer" src={deletes} alt="" />
                <img className="w-6 cursor-pointer" src={edit} alt="" />
                <img className="w-6 cursor-pointer" src={details} alt="" />
              </div>
            </td>
          </tr>
          <tr>
            <td>total</td>
            <td>total</td>
            <td>total</td>
            <td>total</td>
            <td>400</td>
            <td>
              <div className="flex justify-between items-center w-[50%] m-auto">
                <img className="w-6 cursor-pointer" src={deletes} alt="" />
                <img className="w-6 cursor-pointer" src={edit} alt="" />
                <img className="w-6 cursor-pointer" src={details} alt="" />
              </div>
            </td>
          </tr>
          <tr>
            <td>total</td>
            <td>total</td>
            <td>total</td>
            <td>total</td>
            <td>400</td>
            <td>
              <div className="flex justify-between items-center w-[50%] m-auto">
                <img className="w-6 cursor-pointer" src={deletes} alt="" />
                <img className="w-6 cursor-pointer" src={edit} alt="" />
                <img className="w-6 cursor-pointer" src={details} alt="" />
              </div>
            </td>
          </tr>
          <tr>
            <td>total</td>
            <td>total</td>
            <td>total</td>
            <td>total</td>
            <td>400</td>
            <td>
              <div className="flex justify-between items-center w-[50%] m-auto">
                <img className="w-6 cursor-pointer" src={deletes} alt="" />
                <img className="w-6 cursor-pointer" src={edit} alt="" />
                <img className="w-6 cursor-pointer" src={details} alt="" />
              </div>
            </td>
          </tr> */}
          {/* <tr>
            <td>total</td>
            <td>total</td>
            <td>total</td>
            <td>total</td>
            <td>400</td>
            <td>
              <div className="flex justify-between items-center w-[50%] m-auto">
                <img className="w-6 cursor-pointer" src={deletes} alt="" />
                <img className="w-6 cursor-pointer" src={edit} alt="" />
                <img className="w-6 cursor-pointer" src={details} alt="" />
              </div>
            </td>
          </tr>
          <tr>
            <td>total</td>
            <td>total</td>
            <td>total</td>
            <td>400</td>
            <td>400</td>
            <td>
              <div className="flex justify-between items-center w-[50%] m-auto">
                <img className="w-6 cursor-pointer" src={deletes} alt="" />
                <img className="w-6 cursor-pointer" src={edit} alt="" />
                <img className="w-6 cursor-pointer" src={details} alt="" />
              </div>
            </td>
          </tr>
          <tr>
            <td>total</td>
            <td>total</td>
            <td>400</td>
            <td>total</td>
            <td>total</td>
            <td>
              <div className="flex justify-between items-center w-[50%] m-auto">
                <img className="w-6 cursor-pointer" src={deletes} alt="" />
                <img className="w-6 cursor-pointer" src={edit} alt="" />
                <img className="w-6 cursor-pointer" src={details} alt="" />
              </div>
            </td>
          </tr>
          <tr>
            <td>total</td>
            <td>total</td>
            <td>total</td>
            <td>total</td>
            <td>400</td>
            <td>
              <div className="flex justify-between items-center w-[50%] m-auto">
                <img className="w-6 cursor-pointer" src={deletes} alt="" />
                <img className="w-6 cursor-pointer" src={edit} alt="" />
                <img className="w-6 cursor-pointer" src={details} alt="" />
              </div>
            </td>
          </tr>
          <tr>
            <td>total</td>
            <td>400</td>
            <td>total</td>
            <td>total</td>
            <td>400</td>
            <td>
              <div className="flex justify-between items-center w-[50%] m-auto">
                <img className="w-6 cursor-pointer" src={deletes} alt="" />
                <img className="w-6 cursor-pointer" src={edit} alt="" />
                <img className="w-6 cursor-pointer" src={details} alt="" />
              </div>
            </td>
          </tr>
          <tr>
            <td>total</td>
            <td>total</td>
            <td>total</td>
            <td>total</td>
            <td>400</td>
            <td>
              <div className="flex justify-between items-center w-[50%] m-auto">
                <img className="w-6 cursor-pointer" src={deletes} alt="" />
                <img className="w-6 cursor-pointer" src={edit} alt="" />
                <img className="w-6 cursor-pointer" src={details} alt="" />
              </div>
            </td>
          </tr>
          <tr>
            <td>total</td>
            <td>total</td>
            <td>total</td>
            <td>total</td>
            <td>400</td>
            <td>
              <div className="flex justify-between items-center w-[50%] m-auto">
                <img className="w-6 cursor-pointer" src={deletes} alt="" />
                <img className="w-6 cursor-pointer" src={edit} alt="" />
                <img className="w-6 cursor-pointer" src={details} alt="" />
              </div>
            </td>
          </tr>
          <tr>
            <td>total</td>
            <td>total</td>
            <td>total</td>
            <td>total</td>
            <td>400</td>
            <td>
              <div className="flex justify-between items-center w-[50%] m-auto">
                <img className="w-6 cursor-pointer" src={deletes} alt="" />
                <img className="w-6 cursor-pointer" src={edit} alt="" />
                <img className="w-6 cursor-pointer" src={details} alt="" />
              </div>
            </td>
          </tr>
          <tr>
            <td>total</td>
            <td>total</td>
            <td>total</td>
            <td>400</td>
            <td>400</td>
            <td>
              <div className="flex justify-between items-center w-[50%] m-auto">
                <img className="w-6 cursor-pointer" src={deletes} alt="" />
                <img className="w-6 cursor-pointer" src={edit} alt="" />
                <img className="w-6 cursor-pointer" src={details} alt="" />
              </div>
            </td>
          </tr>
          <tr>
            <td>total</td>
            <td>total</td>
            <td>total</td>
            <td>total</td>
            <td>400</td>
            <td>
              <div className="flex justify-between items-center w-[50%] m-auto">
                <img className="w-6 cursor-pointer" src={deletes} alt="" />
                <img className="w-6 cursor-pointer" src={edit} alt="" />
                <img className="w-6 cursor-pointer" src={details} alt="" />
              </div>
            </td>
          </tr>
          <tr>
            <td>total</td>
            <td>total</td>
            <td>total</td>
            <td>total</td>
            <td>400</td>
            <td>
              <div className="flex justify-between items-center w-[50%] m-auto">
                <img className="w-6 cursor-pointer" src={deletes} alt="" />
                <img className="w-6 cursor-pointer" src={edit} alt="" />
                <img className="w-6 cursor-pointer" src={details} alt="" />
              </div>
            </td>
          </tr>
          <tr>
            <td>total</td>
            <td>total</td>
            <td>total</td>
            <td>total</td>
            <td>400</td>
            <td>
              <div className="flex justify-between items-center w-[50%] m-auto">
                <img className="w-6 cursor-pointer" src={deletes} alt="" />
                <img className="w-6 cursor-pointer" src={edit} alt="" />
                <img className="w-6 cursor-pointer" src={details} alt="" />
              </div>
            </td>
          </tr>
          <tr>
            <td>total</td>
            <td>total</td>
            <td>total</td>
            <td>total</td>
            <td>400</td>
            <td>
              <div className="flex justify-between items-center w-[50%] m-auto">
                <img className="w-6 cursor-pointer" src={deletes} alt="" />
                <img className="w-6 cursor-pointer" src={edit} alt="" />
                <img className="w-6 cursor-pointer" src={details} alt="" />
              </div>
            </td>
          </tr>
          <tr>
            <td>total</td>
            <td>total</td>
            <td>total</td>
            <td>total</td>
            <td>400</td>
            <td>
              <div className="flex justify-between items-center w-[50%] m-auto">
                <img className="w-6 cursor-pointer" src={deletes} alt="" />
                <img className="w-6 cursor-pointer" src={edit} alt="" />
                <img className="w-6 cursor-pointer" src={details} alt="" />
              </div>
            </td>
          </tr>
          <tr>
            <td>total</td>
            <td>total</td>
            <td>total</td>
            <td>total</td>
            <td>400</td>
            <td>
              <div className="flex justify-between items-center w-[50%] m-auto">
                <img className="w-6 cursor-pointer" src={deletes} alt="" />
                <img className="w-6 cursor-pointer" src={edit} alt="" />
                <img className="w-6 cursor-pointer" src={details} alt="" />
              </div>
            </td>
          </tr>
          <tr>
            <td>total</td>
            <td>total</td>
            <td>total</td>
            <td>total</td>
            <td>400</td>
            <td>
              <div className="flex justify-between items-center w-[50%] m-auto">
                <img className="w-6 cursor-pointer" src={deletes} alt="" />
                <img className="w-6 cursor-pointer" src={edit} alt="" />
                <img className="w-6 cursor-pointer" src={details} alt="" />
              </div>
            </td>
          </tr>
          <tr>
            <td>total</td>
            <td>total</td>
            <td>total</td>
            <td>total</td>
            <td>400</td>
            <td>
              <div className="flex justify-between items-center w-[50%] m-auto">
                <img className="w-6 cursor-pointer" src={deletes} alt="" />
                <img className="w-6 cursor-pointer" src={edit} alt="" />
                <img className="w-6 cursor-pointer" src={details} alt="" />
              </div>
            </td>
          </tr> */}
        </tbody>
      </table>
      <div className="flex justify-end items-center mb-8 ">
        <button
          onClick={() => {
            window.history.back();
          }}
          className="border border-[var(--gray-color)] px-[30px] py-[8px] outline-none cursor-pointer font-bold rounded-lg text-[var(--gray-color)] "
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default ConReview;
