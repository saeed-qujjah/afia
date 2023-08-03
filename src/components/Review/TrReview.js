// import React from "react";

// const TrReview = ({ review, onDelete, onReply, onEdit }) => {
//   const createDate = new Date(consultation.created_at);
//   const consultationDate = `${createDate.getFullYear()}-${
//     createDate.getMonth() + 1
//   }-${createDate.getDate()}`;

//   return (
//     <tr>
//       <td>{review.doctor.specialization.name}</td>
//       <td>
//         {review.doctor.first_name} {review.doctor.last_name}
//       </td>
//       <td>{review.symptoms}</td>
//       <td>{review.additional_explanation}</td>
//       <td>{review.done ? "Done" : "Pending"}</td>
//       <td>{consultationDate}</td>
//       <td>
//         {!forReviews && (
//           <div className="flex justify-between items-center w-[60%] m-auto">
//             <img
//               className="w-6 cursor-pointer"
//               src={deletes}
//               onClick={() => onDelete(consultation.id, !consultation.done)}
//               alt=""
//             />
//             {!consultation.done && (
//               <img
//                 className="w-6 cursor-pointer"
//                 src={edit}
//                 onClick={() => onEdit(consultation)}
//                 alt=""
//               />
//             )}
//             {consultation.done && (
//               <img
//                 className="w-6 cursor-pointer"
//                 src={details}
//                 onClick={() => onReply(consultation)}
//                 alt=""
//               />
//             )}
//             <NavLink to="/Aafia/ConReview/2">
//               <img
//                 className="w-6 cursor-pointer"
//                 src={review}
//                 //   onClick={() => nav("/Aafia/ConReview/2")}
//                 alt=""
//               />
//             </NavLink>
//           </div>
//         )}
//         {forReviews && (
//           <div className="flex justify-center items-center w-[50%] m-auto">
//             <p className="text-[var(--gray-color)] font-thin opacity-[85%]">
//               +
//             </p>
//             <img
//               className="w-6 cursor-pointer"
//               src={review}
//               alt="Add Review"
//               onClick={() => onAddReview(consultation)}
//             />
//           </div>
//         )}
//       </td>
//     </tr>
//   );
// };

// export default TrReview;
