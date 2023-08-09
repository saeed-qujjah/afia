import axios from "axios";
import Cookies from "js-cookie";
import React, { useState } from "react";
import swal from "sweetalert";
import { API } from "../../data/config";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const nav = useNavigate();
  const [showOldPass, setShowOldPass] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);
  const [confirmPass, setConfirmPass] = useState("");
  const [user, setUser] = useState({
    password: "",
    old_password: ""
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUser((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (confirmPass === user.password) {
      axios
        .post(API.auth.CHANGE_PASSWORD, user, {
          headers: {
            Authorization: "JWT " + Cookies.get("accessToken")
          }
        })
        .then((res) => {
          // dispatch(authAction.replaceUserData(res.data.data.user));
          // Cookies.set("user", JSON.stringify(res.data.data.user), {
          //   path: "/",
          //   expires: 10
          // });
          swal({
            title: `${res.data.message}`,
            timer: 3000,
            icon: "success"
          });
          setTimeout(() => {
            nav("/Aafia/Home");
          }, [3040]);
        })
        .catch((err) => {
          swal({
            icon: "warning",
            timer: 2100,
            title: `${err.response.data.message}`
          });
        });
    } else {
      swal({
        icon: "warning",
        timer: 2100,
        title: "The password and confirm password do not match!"
      });
    }
  };

  return (
    <div>
      <div
        className='register text-[var(--p-color)] relative flex items-center bg-[url("/src/global/images/medicine-capsules-global-health-with-geometric-pattern-digital-remix.jpg")]
        w-[100%] h-[100vh] bg-no-repeat bg-cover'
      >
        {/* <button
          onClick={() => {
            nav("/Aafia/Home");
          }}
          className="border border-[var(--gray-color)] bg-[var(--greenLigth-color)] px-[30px] py-[8px] absolute top-4 right-4 outline-none cursor-pointer font-bold rounded-lg text-[var(--gray-color)] "
        >
          Back
        </button> */}
        <div className="z-40 w-[400px] h-[470px] rounded-2xl bg-[var(--green-color)] absolute left-[37%] p-4 shadow-xl">
          <div className="flex justify-center items-center flex-col">
            <h1 className="text-3xl font-bold">Change Password</h1>
            <hr className="mt-2 mb-14 w-[50%]"></hr>
          </div>
          <form className="flex flex-col w-[100%]" onSubmit={submitHandler}>
            <div className="w-[100%] relative mb-7">
              <input
                className="border-none outline-none rounded-r-lg text-gray-700 rounded-l-lg py-[7px] px-4 w-[100%]"
                type={showOldPass ? "text" : "password"}
                name="old_password"
                onChange={changeHandler}
                value={user.old_password}
                placeholder="Old Password"
              />
              {!showOldPass && (
                <box-icon
                  name="show"
                  color="#94a3b8"
                  onClick={() => {
                    setShowOldPass(true);
                  }}
                  style={{
                    position: "absolute",
                    cursor: "pointer",
                    top: "20%",
                    right: "12px"
                  }}
                ></box-icon>
              )}
              {showOldPass && (
                <box-icon
                  name="hide"
                  color="#94a3b8"
                  onClick={() => {
                    setShowOldPass(false);
                  }}
                  style={{
                    position: "absolute",
                    cursor: "pointer",
                    top: "20%",
                    right: "12px"
                  }}
                ></box-icon>
              )}
              {/* <box-icon name='user' color="#16a34a" style={{position:"absolute", top:"25%" , left:"10px"}}></box-icon> */}
            </div>
            <div className="w-[100%] relative mb-7">
              <input
                className="border-none outline-none rounded-r-lg text-gray-700 rounded-l-lg py-[7px] px-4 w-[100%]"
                type={showPassword ? "text" : "password"}
                name="password"
                onChange={changeHandler}
                value={user.password}
                placeholder="New Password"
              />
              {!showPassword && (
                <box-icon
                  name="show"
                  color="#94a3b8"
                  onClick={() => {
                    setShowPassword(true);
                  }}
                  style={{
                    position: "absolute",
                    cursor: "pointer",
                    top: "20%",
                    right: "12px"
                  }}
                ></box-icon>
              )}
              {showPassword && (
                <box-icon
                  name="hide"
                  color="#94a3b8"
                  onClick={() => {
                    setShowPassword(false);
                  }}
                  style={{
                    position: "absolute",
                    cursor: "pointer",
                    top: "20%",
                    right: "12px"
                  }}
                ></box-icon>
              )}
              {/* <box-icon name='user' color="#16a34a" style={{position:"absolute", top:"25%" , left:"10px"}}></box-icon> */}
            </div>
            <div className="w-[100%] relative mb-7">
              <input
                className="border-none outline-none rounded-r-lg text-gray-700 rounded-l-lg py-[7px] px-4 w-[100%]"
                type={showCPassword ? "text" : "password"}
                name="confirmPass"
                value={confirmPass}
                onChange={(e) => setConfirmPass(e.target.value)}
                placeholder="Confirm New Password"
              />
              {!showCPassword && (
                <box-icon
                  name="show"
                  color="#94a3b8"
                  onClick={() => {
                    setShowCPassword(true);
                  }}
                  style={{
                    position: "absolute",
                    cursor: "pointer",
                    top: "20%",
                    right: "12px"
                  }}
                ></box-icon>
              )}
              {showCPassword && (
                <box-icon
                  name="hide"
                  color="#94a3b8"
                  onClick={() => {
                    setShowCPassword(false);
                  }}
                  style={{
                    position: "absolute",
                    cursor: "pointer",
                    top: "20%",
                    right: "12px"
                  }}
                ></box-icon>
              )}
              {/* <box-icon name='user' color="#16a34a" style={{position:"absolute", top:"25%" , left:"10px"}}></box-icon> */}
            </div>
            <div className="flex justify-center items-center">
              <div className="w-[31%] flex justify-between items-center mb-8 mt-5">
                <button
                  type="submit"
                  className={`"w-[105px]" py-[9px] text-[var(--p-color)] px-[30px] font-bold bg-[var(--gray-color)] cursor-pointer shadow-lg rounded-lg`}
                >
                  Confirm
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
