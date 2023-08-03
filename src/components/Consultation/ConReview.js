import React, { useCallback, useEffect, useRef, useState } from "react";
import details from "../../global/images/responsability.png";
import deletes from "../../global/images/delete.png";
import edit from "../../global/images/edit.png";
import Cookies from "js-cookie";
import axios from "axios";
import DeletePerson from "../../global/DeletePerson";
import EditRev from "../Review/EditRev";
import ReplyRevForm from "../Review/ReplyRevForm";
import { useLocation } from "react-router-dom";

const ConReview = () => {
  const [del, setDel] = useState();
  const [revId, setRevId] = useState("");
  const [idDelete, setIdDelete] = useState();
  const [showDetails, setShowDetails] = useState(false);
  const [showReply, setShowReply] = useState(false);
  const [fetchAgain, setFetchAgain] = useState(false);

  const pageRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    pageRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [location]);

  const deleteHandler = (idDelete) => {
    setIdDelete(idDelete);
    setDel(true);
  };

  const confrimHandler = () => {
    axios
      .delete(`http://localhost:8000/api/Admin/delete/${idDelete}`, {
        headers: {
          // Authorization: "Bearer " + Cookies.get("token"),
        }
      })
      .then(() => {
        setDel(false);
        // setDisplay(display.filter((array) => array.id !== idDelete));
      });
  };

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
    // if (param.id === "all") {
    axios
      .get(`http://localhost:8000/api/Reports/Show/GetAllReportsForThisUser`, {
        headers: {
          Authorization: "Bearer " + Cookies.get("token")
        }
      })
      .then((res) => {
        console.log(res.data);
      });
    // } else {
    axios
      .get(
        // `http://localhost:8000/api/Reports/Show/GetUserReports/${param.id}`,
        {
          headers: {
            // Authorization: "Bearer " + Cookies.get("token"),
          }
        }
      )
      .then((res) => {
        // setCoMa(res.data.CoMa);
        // setallReport(res.data.data.data);
      });
    axios
      .get(`http://localhost:8000/api/Tasks`, {
        headers: {
          Authorization: "Bearer " + Cookies.get("token")
        }
      })
      .then((res) => {
        console.log(res.data.data);
        // setTaskComplete(
        //   res.data.data.Complete || res.data.data.Task_Ref.Person_Task
        // );
        // setDataTask(res.data.data);
      });
    // }
  }, []);

  useEffect(() => {
    fetchHandler();
  }, [fetchHandler, fetchAgain]);

  const editHandler = () => {
    setShowDetails(true);
  };

  const showReplyHandler = () => {
    setShowReply(true);
  };

  const replyBackHandler = () => {
    setShowReply(false);
  };

  return (
    <div className="pt-[82px] px-20" ref={pageRef}>
      {del && (
        <DeletePerson onConfrim={confrimHandler} onBack={deleteBackHandler} />
      )}
      {showDetails && <EditRev id={revId} onBack={editBackHandler} />}
      {showReply && <ReplyRevForm id={revId} onBack={replyBackHandler} />}
      <p className="text-[40px] font-[Caprasimo] text-[var(--gray-color)]">
        Counseling reviews :
      </p>
      <table className="mt-16 mb-10">
        <thead>
          <tr>
            <th>Specialization</th>
            <th>Doctor</th>
            <th>Review requester</th>
            <th>Review reason</th>
            <th>status</th>
            <th>procedures</th>
          </tr>
        </thead>
        <tbody>
          <tr>
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
          </tr>
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