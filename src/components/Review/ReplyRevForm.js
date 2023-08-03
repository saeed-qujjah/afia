import React from 'react';

const ReplyRevForm = ({onBack}) => {
    return (
        <div
        style={{ backgroundColor: "rgb(0 0 0 / 40%)" }}
        className="fixed w-[100%] h-[100vh] top-0 right-0 z-[1000] flex justify-center items-center"
      >
        <div className="fixed shadow-lg rounded-2xl w-[65%] h-auto  px-8 bg-[var(--p-color)]">
        <p className="mt-7 text-center italic text-lg text-[var(--gray-color)] font-bold">The doctor replied</p>
        <hr className='w-[70%] m-auto mt-3 rounded-full border-[var(--greenLigth-color)]'></hr>
          <form className="flex flex-col w-[100%] mt-7">
            <div className="w-[100%] relative flex justify-between items-center">
              <div className="child">
                <input
                  className="subchild border-none outline-none rounded-r-lg text-gray-700 rounded-l-lg py-[7px] px-4 w-[49%]"
                  type="text"
                  readOnly
                  placeholder="Department"
                  // value={department}
                />
                <label className="top-top">Specialization</label>
              </div>
              <div className="child">
                <input
                  className="border-none outline-none rounded-r-lg text-gray-700 rounded-l-lg py-[7px] px-4 w-[49%]"
                  type="text"
                  // placeholder="Last Name"
                />
                <label className="top-top">Doctor</label>
              </div>
            </div>
            <div className="child w-[100%] relative mb-5">
              <input
                className="border-none outline-none rounded-r-lg text-gray-700 rounded-l-lg py-[7px] px-4 w-[100%]"
                type="email"
                // placeholder="Email"
              />
              <label className="top-top">Review reason</label>
            </div>
            <div className="child w-[100%] relative mb-5">
              <input
                className="border-none outline-none rounded-r-lg text-gray-700 rounded-l-lg py-[7px] px-4 w-[100%]"
                type="password"
                // placeholder="Password"
              />
              <label className="top-top">Diagnosis</label>
            </div>
            <div className="child w-[100%] relative mb-5">
            <input
                className="border-none outline-none rounded-r-lg text-gray-700 rounded-l-lg py-[7px] px-4 w-[100%]"
                type="password"
                // placeholder="Password"
              />
              <label className="top-top">Prescription</label>
            </div>
            <div className="w-[100%] relative flex justify-between items-center">
              <div className="child">
                <input
                  className="subchild border-none outline-none rounded-r-lg text-gray-700 rounded-l-lg py-[7px] px-4 w-[49%]"
                  type="text"
                  readOnly
                  placeholder="Department"
                  // value={department}
                />
                <label className="top-top">Treatment time</label>
              </div>
              <div className="child">
                <input
                  className="border-none outline-none rounded-r-lg text-gray-700 rounded-l-lg py-[7px] px-4 w-[49%]"
                  type="text"
                  // placeholder="Last Name"
                />
                <label className="top-top">Review time</label>
              </div>
            </div>
            {/* <div className="flex justify-between items-center w-[54%] mb-4">
              <div>
                <input
                  type="radio"
                  className="accent-[var(--gray-color)] cursor-pointer mr-1"
                  id="doctor"
                  name="type"
                  value="doctor"
                  checked
                />
                <label
                  for="doctor"
                  className="cursor-pointer text-[var(--gray-color)] opacity-[90%]"
                >
                  Non-emergency case
                </label>
              </div>
              <div>
                <input
                  className="accent-[var(--gray-color)] cursor-pointer mr-1"
                  type="radio"
                  id="emergency"
                  name="type"
                  value="emergency"
                />
                <label
                  for="emergency"
                  className="cursor-pointer text-[var(--gray-color)] opacity-[90%]"
                >
                  Emergency case
                </label>
              </div>
            </div> */}
            <div className="flex justify-end items-center">
            <div className="w-[31%] flex justify-end items-center mb-8 mt-5">
              {/* <button
                type="submit"
                className="py-[9px] text-[var(--p-color)] px-[27px] font-bold bg-[var(--gray-color)] cursor-pointer shadow-lg rounded-lg"
              >
                Submit
              </button> */}
              <button
                onClick={onBack}
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
}

export default ReplyRevForm;