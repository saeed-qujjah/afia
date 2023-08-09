import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const AppointmentForm = ({goBackHandler,specialization,doctor}) => {
    const submitHandler = (e) => {
        e.preventDefault()
    }
  return (
    <div
      style={{ backgroundColor: "rgb(0 0 0 / 40%)" }}
      className="fixed w-[100%] h-[100vh] top-0 right-0 z-[1000] flex justify-center items-center"
    >
      <div className="fixed shadow-lg rounded-2xl w-[65%] h-auto  px-8 bg-[var(--p-color)]">
        <p className="my-7 text-lg italic text-[var(--gray-color)]">
          The fields marked with * are required
        </p>
        <form className="flex flex-col w-[100%]" onSubmit={submitHandler}>
          <div className="w-[100%] relative flex justify-between items-center">
            <div className="child">
              <input
                className="subchild border-none outline-none rounded-r-lg text-gray-700 rounded-l-lg py-[7px] px-4 w-[49%]"
                type="text"
                readOnly
                value={specialization}
              />
              <label className="top-top">Specialization</label>
            </div>
            <div className="child">
              <input
                className="border-none outline-none rounded-r-lg text-gray-700 rounded-l-lg py-[7px] px-4 w-[49%]"
                type="text"
                name="doctor_id"
                value={doctor}
                // onChange={changeHandler}
                list="doctor"
              />
              <label className="top-top">Doctor</label>
            </div>
          </div>
          <div className="child w-[100%] relative mb-5">
            {/* <input
              className="border-none outline-none rounded-r-lg text-gray-700 rounded-l-lg py-[7px] px-4 w-[100%]"
              type="text"
              name="symptoms"
            //   value={consultation.symptoms}
            //   onChange={changeHandler}
              required
            /> */}
              <DatePicker
                //   className="subchild"
                  dateFormat="yyyy/MM/dd"
                  name="birth_date"
                  isClearable
                  selected={new Date()}
                //   onChange={(e) =>
                //     setCompleteData((prev) => {
                //       return { ...prev, birth_date: e };
                //     })
                //   }
                />
            <label className="top-top">Appointment Date *</label>
          </div>
          {/* <div className="child w-[100%] relative mb-5">
            <input
              className="border-none outline-none rounded-r-lg text-gray-700 rounded-l-lg py-[7px] px-4 w-[100%]"
              type="text"
              name="additional_explanation"
            //   value={consultation.additional_explanation}
            //   onChange={changeHandler}
            />
            <label className="top-top">Additional explanation</label>
          </div> */}
          <div className="flex justify-end items-center">
            <div className="w-[31%] flex justify-between items-center mb-8 mt-5">
              <button
                type="submit"
                className="py-[9px] text-[var(--p-color)] px-[30px] font-bold bg-[var(--gray-color)] cursor-pointer shadow-lg rounded-lg"
              >
                Submit
              </button>
              <button
                onClick={goBackHandler}
                className="border border-[var(--gray-color)] px-[30px] py-[8px] outline-none cursor-pointer font-bold rounded-lg text-[var(--gray-color)] "
              >
                Back
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AppointmentForm;
