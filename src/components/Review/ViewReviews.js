import React, { useCallback, useEffect, useState } from 'react';
import details from "../../global/images/responsability.png";
import deletes from "../../global/images/delete.png";
import edit from "../../global/images/edit.png";
import Cookies from 'js-cookie';
import axios from 'axios';
import DeletePerson from '../../global/DeletePerson';
import EditRev from './EditRev';
import ReplyRevForm from './ReplyRevForm';
import { API } from '../../data/config';
import ReviewForm from './ReviewForm';
import TrReview from './TrReview';




const ViewReviews = () => {
  const [del, setDel] = useState();
  const [revId, setRevId] = useState("");
  const [reviews,setReviews] = useState([])
  const [showDetails, setShowDetails] = useState(false);
  const [showReply, setShowReply] = useState(false);
  const [fetchAgain, setFetchAgain] = useState(false);

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
    .get(API.consultations.REVIEWS, {
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

    return (
        <div className="py-20 px-20">
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
      <div className="flex justify-between items-center">
        <div className="w-[32%]">
          <p className="text-[var(--greenLigth-color)]">Total reviews:</p>
          <p className="text-[var(--gray-color)] text-3xl mt-2">
          {reviews.count}<span className="text-sm ml-4">reviews</span>
          </p>
        </div>
        <div className="w-[32%]">
          <p className="text-[var(--greenLigth-color)]">
          Review requests pending:
          </p>
          <p className="text-[var(--gray-color)] text-3xl mt-2">
          {reviews.pending_count}<span className="text-sm ml-4">reviews</span>
          </p>
        </div>
        <div className="w-[32%]">
          {/* <p className="text-[var(--greenLigth-color)]">
            Review requests received:
          </p>
          <p className="text-[var(--gray-color)] text-3xl mt-2">
            0<span className="text-sm ml-4">reviews</span>
          </p> */}
        </div>
      </div>
      <table className="my-16">
        <thead>
          <tr>
            <th>Specialization</th>
            <th>Doctor</th>
            <th>Requester</th>
            <th>Review reason</th>
            <th>status</th>
            <th>Date created</th>
            <th>procedures</th>
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
                <img className="w-6 cursor-pointer" src={deletes} onClick={deleteHandler} alt=""/>
                <img className="w-6 cursor-pointer" src={edit} onClick={editHandler} alt=""/>
                <img className="w-6 cursor-pointer" src={details} onClick={showReplyHandler} alt=""/>
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
                <img className="w-6 cursor-pointer" src={deletes} alt=""/>
                <img className="w-6 cursor-pointer" src={edit} alt=""/>
                <img className="w-6 cursor-pointer" src={details} alt=""/>
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
                <img className="w-6 cursor-pointer" src={deletes} alt=""/>
                <img className="w-6 cursor-pointer" src={edit} alt=""/>
                <img className="w-6 cursor-pointer" src={details} alt=""/>
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
                <img className="w-6 cursor-pointer" src={deletes} alt=""/>
                <img className="w-6 cursor-pointer" src={edit} alt=""/>
                <img className="w-6 cursor-pointer" src={details} alt=""/>
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
                <img className="w-6 cursor-pointer" src={deletes} alt=""/>
                <img className="w-6 cursor-pointer" src={edit} alt=""/>
                <img className="w-6 cursor-pointer" src={details} alt=""/>
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
                <img className="w-6 cursor-pointer" src={deletes} alt=""/>
                <img className="w-6 cursor-pointer" src={edit} alt=""/>
                <img className="w-6 cursor-pointer" src={details} alt=""/>
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
                <img className="w-6 cursor-pointer" src={deletes} alt=""/>
                <img className="w-6 cursor-pointer" src={edit} alt=""/>
                <img className="w-6 cursor-pointer" src={details} alt=""/>
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
                <img className="w-6 cursor-pointer" src={deletes} alt=""/>
                <img className="w-6 cursor-pointer" src={edit} alt=""/>
                <img className="w-6 cursor-pointer" src={details} alt=""/>
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
                <img className="w-6 cursor-pointer" src={deletes} alt=""/>
                <img className="w-6 cursor-pointer" src={edit} alt=""/>
                <img className="w-6 cursor-pointer" src={details} alt=""/>
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
                <img className="w-6 cursor-pointer" src={deletes} alt=""/>
                <img className="w-6 cursor-pointer" src={edit} alt=""/>
                <img className="w-6 cursor-pointer" src={details} alt=""/>
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
                <img className="w-6 cursor-pointer" src={deletes} alt=""/>
                <img className="w-6 cursor-pointer" src={edit} alt=""/>
                <img className="w-6 cursor-pointer" src={details} alt=""/>
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
                <img className="w-6 cursor-pointer" src={deletes} alt=""/>
                <img className="w-6 cursor-pointer" src={edit} alt=""/>
                <img className="w-6 cursor-pointer" src={details} alt=""/>
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
                <img className="w-6 cursor-pointer" src={deletes} alt=""/>
                <img className="w-6 cursor-pointer" src={edit} alt=""/>
                <img className="w-6 cursor-pointer" src={details} alt=""/>
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
                <img className="w-6 cursor-pointer" src={deletes} alt=""/>
                <img className="w-6 cursor-pointer" src={edit} alt=""/>
                <img className="w-6 cursor-pointer" src={details} alt=""/>
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
                <img className="w-6 cursor-pointer" src={deletes} alt=""/>
                <img className="w-6 cursor-pointer" src={edit} alt=""/>
                <img className="w-6 cursor-pointer" src={details} alt=""/>
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
                <img className="w-6 cursor-pointer" src={deletes} alt=""/>
                <img className="w-6 cursor-pointer" src={edit} alt=""/>
                <img className="w-6 cursor-pointer" src={details} alt=""/>
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
                <img className="w-6 cursor-pointer" src={deletes} alt=""/>
                <img className="w-6 cursor-pointer" src={edit} alt=""/>
                <img className="w-6 cursor-pointer" src={details} alt=""/>
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
                <img className="w-6 cursor-pointer" src={deletes} alt=""/>
                <img className="w-6 cursor-pointer" src={edit} alt=""/>
                <img className="w-6 cursor-pointer" src={details} alt=""/>
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
                <img className="w-6 cursor-pointer" src={deletes} alt=""/>
                <img className="w-6 cursor-pointer" src={edit} alt=""/>
                <img className="w-6 cursor-pointer" src={details} alt=""/>
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
                <img className="w-6 cursor-pointer" src={deletes} alt=""/>
                <img className="w-6 cursor-pointer" src={edit} alt=""/>
                <img className="w-6 cursor-pointer" src={details} alt=""/>
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
                <img className="w-6 cursor-pointer" src={deletes} alt=""/>
                <img className="w-6 cursor-pointer" src={edit} alt=""/>
                <img className="w-6 cursor-pointer" src={details} alt=""/>
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
                <img className="w-6 cursor-pointer" src={deletes} alt=""/>
                <img className="w-6 cursor-pointer" src={edit} alt=""/>
                <img className="w-6 cursor-pointer" src={details} alt=""/>
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
                <img className="w-6 cursor-pointer" src={deletes} alt=""/>
                <img className="w-6 cursor-pointer" src={edit} alt=""/>
                <img className="w-6 cursor-pointer" src={details} alt=""/>
              </div>
            </td>
          </tr> */}
        </tbody>
      </table>
    </div>
    );
}

export default ViewReviews;
