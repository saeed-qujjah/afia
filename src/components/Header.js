import React from 'react';

const Header = () => {
    return (
        <div className="navbar flex justify-between fixed w-[100%] items-center px-20 py-2 bg-[var(--p-color)] z-50 shadow-md">
      <div className="flex justify-between items-center">
        <img className="w-28" src={logo2} alt="" />
      </div>
      {page === "about" && (
        <div className="flex justify-between items-center">
          <NavLink
            to="/Login"
            className="border border-[var(--green-color)] outline-none px-4 py-2 pt-1 rounded-lg text-[var(--green-color)] "
          >
            Login
          </NavLink>
          <NavLink
            to="/Register"
            className="border-none outline-none ml-5 bg-[var(--green-color)] px-4 py-2 pt-1 rounded-lg text-[var(--p-color)]"
          >
            SignUp
          </NavLink>
        </div>
      )}
      {page !== "about" && (
        <div className="flex w-[85%] justify-between items-center relative">
          <div className="w-[14px] h-[14px] rounded-full bg-[var(--gray-color)] text-[10px] flex justify-center items-center text-[var(--p-color)] absolute z-10 top-[-3px] left-[11px]">2</div>
           <box-icon
              style={{ cursor: "pointer" }}
              name="bell"
              type="solid"
              color="var(--green-color)"
              animation="tada"
            ></box-icon>
        <ul className="flex justify-between items-center w-[70%] text-[var(--green-color)]">
          <li>
            <NavLink
              to="/Aafia/Home"
              className={pageActive === "Home" ? "active" : "unactive"}
              onClick={() => setPageActive("Home")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Aafia/Consultation"
              className={pageActive === "Conultation" ? "active" : "unactive"}
              onClick={() => setPageActive("Consultation")}
            >
              Consultation
            </NavLink>
          </li>
          <li>
            <NavLink to="/Aafia/Review"
             className={pageActive === "Review" ? "active" : "unactive"}
             onClick={() => setPageActive("Review")}>Review</NavLink>
          </li>
          <li>
            <NavLink to="/Aafia/Dating"
             className={pageActive === "Dating" ? "active" : "unactive"}
             onClick={() => setPageActive("Dating")}>Appointment</NavLink>
          </li>
          <li>
            <NavLink to="/Aafia/Advices"
             className={pageActive === "Advices" ? "active" : "unactive"}
             onClick={() => setPageActive("Advices")}>Medical Advices</NavLink>
          </li>
        </ul>
        </div>
      )}
    </div>
    );
}

export default Header;
