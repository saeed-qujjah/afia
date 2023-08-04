import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import AboutUs from "./components/About/AboutUs";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import "../src/global/main.css";
import Consultation from "./components/Consultation/Consultation";
import Review from "./components/Review/Review";
import Dating from "./components/Dating/Dating";
import Advices from "./components/Advices/Advices";
import Aafia from "./components/Aafia";
import ConReview from "./components/Consultation/ConReview";
import CodeVerification from "./components/Auth/CodeVerification";
import CompleteProfileInfo from "./components/Auth/CompleteProfileInfo";
import RedirectPage from "./components/Auth/RedirectPage";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { API } from "./data/config";
import UseAxiosGet from "./hooks/useAxiosGet";
import { useDispatch } from "react-redux";
import { authAction } from "./store/auth";

const getLoggedInStatus = () => {
  const user = Cookies.get("user") ? JSON.parse(Cookies.get("user")) : null;
  const token = Cookies.get("accessToken");
  console.log(token ? true : false);
  console.log(user ? user?.phone_number && user?.email_verified : false);
  console.log(user?.email_verified);
  const isLoggedIn = token
    ? true
    : false && (user ? user?.phone_number && user?.email_verified : false);
  return isLoggedIn;
};

function App() {
  const isLoggedIn = getLoggedInStatus();
  const dispatch = useDispatch();
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const user = Cookies.get("user")
  //  ? JSON.parse(Cookies.get("user")) : null;
  console.log(isLoggedIn);
  // const isLoggedIn =
  //   !!Cookies.get("accessToken") && !!user?.phone_number && user?.email_verified;
  const { data: specializations } = UseAxiosGet(API.static.GET_SPECIALIZATIONS);
  useEffect(() => {
    if (!specializations) return;
    dispatch(authAction.replaceSpecializations(specializations.data));
  }, [specializations, dispatch]);

  // useEffect(() => {
  //   if (!Cookies.get("user")) setIsLoggedIn(false);
  //   else {
  //     const user = JSON.parse(Cookies.get("user"));
  //     setIsLoggedIn(
  //       !!Cookies.get("accessToken") &&
  //         !!user?.phone_number &&
  //         user?.email_verified
  //     );
  //   }
  // }, [user]);

  return (
    <div className="App">
      <Routes>
        {!isLoggedIn && <Route path="/" element={<RedirectPage />}></Route>}
        {!isLoggedIn && <Route path="/AboutUs" element={<AboutUs />}></Route>}
        {!isLoggedIn && <Route path="/Login" element={<Login />}></Route>}
        {!isLoggedIn && <Route path="/Register" element={<Register />}></Route>}
        {!isLoggedIn && (
          <Route
            path="/CodeVerification"
            element={<CodeVerification />}
          ></Route>
        )}
        {!isLoggedIn && (
          <Route
            path="/CompleteProfileInfo"
            element={<CompleteProfileInfo />}
          ></Route>
        )}
        {isLoggedIn && (
          <Route path="/Aafia" element={<Aafia />}>
            <Route path="Home" element={<Home />}></Route>
            <Route path="Consultation" element={<Consultation />}></Route>
            <Route path="ConReview/:id" element={<ConReview />}></Route>
            <Route path="Review" element={<Review />}></Route>
            <Route path="Dating" element={<Dating />}></Route>
            <Route path="Advices" element={<Advices />}></Route>
          </Route>
        )}
      </Routes>
    </div>
  );
}

export default App;
