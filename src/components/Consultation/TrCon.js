import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
// import "../../../global/Tr.css";
// import AuthContext from "../../../store/auth-context";
// import Cookies from "js-cookie";

const Tr = (props) => {
//   const ctx = useContext(AuthContext);
  const deleteHandler = () => {
    props.onDelete(props.id);
  };
  let edit = "";
  let del = "";
  let numOfDays;
  if (props.date !== undefined && props.date !== null) {
    const difference = new Date().getTime() - new Date(props.date).getTime();
    numOfDays = Math.floor(difference / (1000 * 3600 * 24));
  }
  for (let i in ctx.permission) {
    if (
        true
    //   ctx.permission[i].name === "person-edit" &&
    //   props.Creator === Cookies.get("cope")
    ) {
      edit = (
        <NavLink to={`/User/Person/Edit/${props.id}`}>
          <i className="bx bx-edit-alt" style={{ color: "#FF9A00" }}></i>
        </NavLink>
      );
    }
    // if (ctx.permission[i].name === "person-admin") {
    //   edit = (
    //     <NavLink to={`/User/Person/Edit/${props.id}`}>
    //       <i className="bx bx-edit-alt" style={{ color: "#FF9A00" }}></i>
    //     </NavLink>
    //   );
      del = (
        <i
          className="bx bx-trash"
          style={{ color: "#FF2D2D", cursor: "pointer" }}
          onClick={deleteHandler}
        ></i>
      );
    }
//     if (
//       ctx.permission[i].name === "person-delete" &&
//       numOfDays < 3 &&
//       props.Creator === Cookies.get("cope")
//     ) {
//       del = (
//         <i
//           className="bx bx-trash"
//           style={{ color: "#FF2D2D", cursor: "pointer" }}
//           onClick={deleteHandler}
//         ></i>
//       );
//     }
//   }
  return (
    <tr key={props.id}>
      <td key="1">{props.CoPe}</td>
      <td key="2">{props.NaPe}</td>
      <td key="3" dir="ltr">
        {props.PhoPe1}
      </td>
      <td key="4">{props.JoPe}</td>
      <td key="5">{props.TyPe}</td>
      <td key="7">
        <div className="children">
          <NavLink to={`/User/Person/Detials/${props.id}`}>
            <i className="bx bxs-user-detail" style={{ color: "#4377f1" }}></i>
          </NavLink>
          {edit}
          {del}
        </div>
      </td>
    </tr>
  );
};

export default Tr;
