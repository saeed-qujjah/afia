import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import DeletePerson from "../../global/DeletePerson";
// import EditCon from "./EditCon";
import Cookies from "js-cookie";
import ReplyForm from "./ReplyForm";
import { API } from "../../data/config";
import TrAppointment from "./TrAppointment";
// import ConsultationForm from "./ConsultationForm";

const ViewAppointment = () => {
  const [del, setDel] = useState();
  const [conId, setConId] = useState("");
  const [consultations, setConsultations] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [showReply, setShowReply] = useState(false);
  const [fetchAgain, setFetchAgain] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const isDoctor = !!Cookies.get("user")
    ? JSON.parse(Cookies.get("user")).role === 0
    : false;

  const deleteHandler = (id, isPending) => {
    setConId(id);
    setDel(true);
    setIsPending(isPending);
  };

  const confrimHandler = () => {
    axios
      .delete(`${API.consultations.CONSULTATIONS}${conId}`, {
        headers: {
          Authorization: "JWT " + Cookies.get("accessToken")
        }
      })
      .then((res) => {
        console.log(res);
        setDel(false);
        setConsultations((prev) => {
          return {
            ...prev,
            count: consultations.count - 1,
            pending_count: isPending
              ? consultations.pending_count - 1
              : consultations.pending,
            data: consultations.data.filter((array) => array.id !== conId)
          };
        });
      });
  };

  const deleteBackHandler = () => {
    setDel(false);
  };

  const editBackHandler = (edit) => {
    if (edit) {
      setFetchAgain(!fetchAgain);
    }
    setShowDetails(false);
  };

  const fetchHandler = useCallback(() => {
    axios
      .get(API.consultations.CONSULTATIONS, {
        headers: {
          Authorization: "JWT " + Cookies.get("accessToken")
        }
      })
      .then((res) => {
        setConsultations(res.data.data);
      });
  }, []);

  useEffect(() => {
    fetchHandler();
  }, [fetchHandler, fetchAgain]);

  const editHandler = (consultation) => {
    setShowDetails(consultation);
  };

  const showReplyHandler = (consultation) => {
    setShowReply(consultation);
  };

  const replyBackHandler = () => {
    setShowReply(false);
  };
  return (
    <div className="py-20 px-20">
      {del && (
        <DeletePerson onConfrim={confrimHandler} onBack={deleteBackHandler} />
      )}
      {/* {showDetails && (
        <ConsultationForm consultationEdit={showDetails} specialization={showDetails.doctor.specialization.name} method={"edit"} goBackHandler={editBackHandler} />
      )} */}
      {showReply && (
        <ReplyForm consultationReply={showReply} onBack={replyBackHandler} />
      )}
      <div className="flex justify-between items-center">
        <div className="w-[32%]">
          <p className="text-[var(--greenLigth-color)]">Total Appointments:</p>
          <p className="text-[var(--gray-color)] text-3xl mt-2">
            {consultations.count}5
            <span className="text-sm ml-4">Appointments</span>
          </p>
        </div>
        <div className="w-[32%]">
          <p className="text-[var(--greenLigth-color)]">
            Pending Appointments :
          </p>
          <p className="text-[var(--gray-color)] text-3xl mt-2">
            {consultations.pending_count}3
            <span className="text-sm ml-4">Appointments</span>
          </p>
        </div>
        <div className="w-[32%]">
          {!isDoctor && (
            <p className="text-[var(--greenLigth-color)]">
              Appointments that need review:
            </p>
          )}
          {!isDoctor && (
            <p className="text-[var(--gray-color)] text-3xl mt-2">
              {consultations.need_review_count}2
              <span className="text-sm ml-4">Appointments</span>
            </p>
          )}
        </div>
      </div>
      <table className="my-16">
        <thead>
          <tr>
            {!isDoctor && <th>Specialization</th>}
            {!isDoctor && <th>Doctor</th>}
            {isDoctor && <th>Patient</th>}
            <th>Country</th>
            <th>City</th>
            <th>Status</th>
            <th>Date created</th>
            <th>Procedures</th>
          </tr>
        </thead>
        <tbody>
          {consultations.data?.map((consultation, index) => {
            return (
              <TrAppointment
                key={index}
                isDoctor={isDoctor}
                consultation={consultation}
                onEdit={editHandler}
                onReply={showReplyHandler}
                forReviews={false}
                onDelete={deleteHandler}
              />
            );
          })}
          {/* <tr>
            <td>samer</td>
            <td>hasan</td>
            <td>hasan</td>
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
            <td>400</td>
            <td>400</td>
            <td>400</td>
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
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default ViewAppointment;
