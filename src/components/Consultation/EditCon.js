// import axios from 'axios';
// import Cookies from 'js-cookie';
// import React, { useCallback, useEffect, useState } from 'react';
// import swal from 'sweetalert';

// const EditCon = ({onBack,onConfrim}) => {
//     const [DetailsPersonTask, setDetailsPersonTask] = useState({
//         CoPr: "",
//         CoPe: "",
//         CoRq: "",
//         Task: "",
//         ReportDate: new Date(),
//         Completion_rate: "",
//         BasicHours: "",
//         AditionalHours: 0,
//         Quantity: "",
//         Unit: "",
//         WorkType: "",
//         Statement: "",
//         Notes: "",
//         TaskRef_id: "",
//         CoMa: "",
//         file: "",
//       });
    
//       const [basicHourTouch, setBasicHourTouch] = useState(false);
//       const [rateTouch, setRateTouch] = useState(false);
//       const [statmentTouch, setStatmentTouch] = useState(false);
//       const basicHourIsValid = DetailsPersonTask.BasicHours !== "";
//       const rateIsValid = DetailsPersonTask.Completion_rate !== "";
//       const statmentIsValid = DetailsPersonTask.Statement.trim() !== "";
//       const classBasicHour = !basicHourIsValid && basicHourTouch ? "error" : "";
//       const classRate = !rateIsValid && rateTouch ? "error" : "";
//       const classStatment = !statmentIsValid && statmentTouch ? "error" : "";
    
//       const ChangeValue = (e) => {
//         const { name, value } = e.target;
        
//         setDetailsPersonTask((prev) => {
//           return {
//             ...prev,
//             [name]: value,
//           };
//         });
//         if (name === "Statement") {
//           setStatmentTouch(true);
//         }
//         if (name === "Completion_rate") {
//           setRateTouch(true);
//         }
//       };
    
//       const submitHandler = (e) => {
//         e.preventDefault();
//         setBasicHourTouch(true);
//         setRateTouch(true);
//         setStatmentTouch(true);
//         const ReportDate = `${DetailsPersonTask.ReportDate.getFullYear()}/${
//           DetailsPersonTask.ReportDate.getMonth() + 1
//         }/${DetailsPersonTask.ReportDate.getDate()}`;
//         axios
//           .put(
//             `http://localhost:8000/api/Reports/`,
//             {
//               TaskRef_id: DetailsPersonTask.TaskRef_id,
//               Statement: DetailsPersonTask.Statement,
//               Completion_rate: DetailsPersonTask.Completion_rate,
//               BasicHours: DetailsPersonTask.BasicHours,
//               additionalHours: DetailsPersonTask.AditionalHours,
//               ReportDate: ReportDate,
//             //   DNow: date,
//               Notes: DetailsPersonTask.Notes,
//               Quantity: DetailsPersonTask.Quantity,
//               Unit: DetailsPersonTask.Unit,
//               WorkType: DetailsPersonTask.WorkType,
//               Creator: Cookies.get("cope"),
//               CoMa: DetailsPersonTask.CoMa,
//             },
//             {
//               headers: {
//                 Authorization: "Bearer " + Cookies.get("token"),
//               },
//             }
//           )
//           .then((res) => {
//             console.log(res.data);
//             if (res.data.data === "You Can't Add This Report Because it's Exists") {
//               swal({
//                 icon: "warning",
//                 timer: 1600,
//                 title: "فشل الإضافة...يوجد تقرير بالفعل لهذا التاريخ",
//               });
//             } else {
//               swal({
//                 title: "تم عملية التعديل بنجاح",
//                 timer: 2000,
//                 icon: "success",
//               });
//               setTimeout(() => {
//                 onBack(true);
//               }, 2000);
//             }
//           })
//           .catch((error) => {
//             console.log(error.response.data.message);
//             if (
//               error.response.data.message.includes(
//                 "The statement field is required."
//               )
//             ) {
//               swal({
//                 icon: "warning",
//                 timer: 1600,
//                 title: "فشل الإضافة...الرجاء ادخال البيان ",
//               });
//             } else if (
//               error.response.data.message.includes(
//                 "The basic hours field is required."
//               )
//             ) {
//               swal({
//                 icon: "warning",
//                 timer: 1600,
//                 title: "فشل الإضافة...الرجاء ادخال عدد الساعات الاساسية ",
//               });
//             } else if (
//               error.response.data.message.includes(
//                 "The completion rate field is required."
//               )
//             ) {
//               swal({
//                 icon: "warning",
//                 timer: 1600,
//                 title: "فشل الإضافة... الرجاء ادخال نسبة الانجاز",
//               });
//             } else if (
//               error.response.data.message.includes(
//                 "The basic hours must not be greater than 8.00."
//               )
//             ) {
//               swal({
//                 icon: "warning",
//                 timer: 2500,
//                 title: "فشل الإضافة...عدد الساعات الاساسية يجب أن يكون 8 او اقل ",
//               });
//             }
//           });
//       };
    
//       const ChangeValueDateReport = (e) => {
//         setDetailsPersonTask((prev) => {
//           return {
//             ...prev,
//             ReportDate: e,
//           };
//         });
//       };
    
//       const blurHoursHandler = (e) => {
//         const { name, value } = e.target;
//         if (value === "") {
//           swal({
//             icon: "warning",
//             timer: 1600,
//             title: "الرجاء ادخال عدد الساعات رقم",
//           });
//           setDetailsPersonTask((prev) => {
//             return {
//               ...prev,
//               [name]: +value,
//             };
//           });
//         }
//         if (name === "BasicHours" && (value > 8 || value < 0)) {
//         //   swal({
//         //     icon: "warning",
//         //     timer: 2500,
//         //     title: "فشل الإضافة...عدد الساعات الاساسية يجب أن يكون 8 او اقل ",
//         //   });
//         }
//       };
    
//       const blurRateHandler = (e) => {
//         if (e.target.value === "" || e.target.value < 0 || e.target.value > 100) {
//         //   swal({
//         //     icon: "warning",
//         //     timer: 1600,
//         //     title: "الرجاء ادخال نسبة الإنجاز رقم بين 0 وال 100",
//         //   });
//           setDetailsPersonTask((prev) => {
//             return {
//               ...prev,
//               Completion_rate: 0,
//             };
//           });
//         } else {
//           setDetailsPersonTask((prev) => {
//             return {
//               ...prev,
//               Completion_rate: +e.target.value,
//             };
//           });
//         }
//       };
    
//       const blurStatmentHandler = () => {
//         setStatmentTouch(true);
//       };
//       const fetchHandler = useCallback(() => {
//         axios
//           .get(`http://localhost:8000/api/Reports`, {
//             headers: {
//             //   Authorization: "Bearer " + Cookies.get("token"),
//             },
//           })
//           .then((res) => {
//             const data = res.data.data;
//             console.log(data);
//             setDetailsPersonTask((prev) => {
//               return {
//                 ...prev,
//                 CoPr: data.Tasks_id.CoPr,
//                 CoPe: data.Tasks_id.CoPe,
//                 CoRq: data.TasksRef_id.CoPe,
//                 Task: data.Tasks_id.Task,
//                 ReportDate: new Date(data.ReportDate),
//                 Completion_rate: data.Completion_rate,
//                 BasicHours: data.BasicHours,
//                 AdditionalHours: data.additionalHours,
//                 Quantity: data.Quantity,
//                 Unit: data.Unit,
//                 WorkType: data.WorkType,
//                 Statement: data.Statement,
//                 Notes: data.Notes,
//                 file: data.files.length !== 0 ? data.files[0].file : "",
//               };
//             });
//           });
//       }, []);
    
//       useEffect(() => {
//         fetchHandler();
//       }, [fetchHandler]);
    
//     return (
//         <div
//       style={{ backgroundColor: "rgb(0 0 0 / 40%)" }}
//       className="fixed w-[100%] h-[100vh] top-0 right-0 z-[1000] flex justify-center items-center"
//     >
//       <div className="fixed shadow-lg rounded-2xl w-[65%] h-auto  px-8 bg-[var(--p-color)]">
//       <p className="my-7 text-lg italic text-[var(--gray-color)]">The fields marked with * are required</p>
//         <form className="flex flex-col w-[100%]">
//           <div className="w-[100%] relative flex justify-between items-center">
//             <div className="child">
//               <input
//                 className="subchild border-none outline-none rounded-r-lg text-gray-700 rounded-l-lg py-[7px] px-4 w-[49%]"
//                 type="text"
//                 readOnly
//                 value={specialization}
//               />
//               <label className="top-top">Specialization</label>
//             </div>
//             <div className="child">
//               <input
//                 className="border-none outline-none rounded-r-lg text-gray-700 rounded-l-lg py-[7px] px-4 w-[49%]"
//                 type="text"
//                 name="doctor_id"
//                 value={consultation.doctor_id}
//                 onChange={changeHandler}
//                 list="doctor"
//               />
//               <label className="top-top">Doctor *</label>
//               <datalist id="doctor">
//                 {doctors?.data.map((doctor, index) => (
//                   <option key={index}>{doctor.name}</option>
//                 ))}
//               </datalist>
//             </div>
//           </div>
//           <div className="child w-[100%] relative mb-5">
//             <input
//               className="border-none outline-none rounded-r-lg text-gray-700 rounded-l-lg py-[7px] px-4 w-[100%]"
//               type="text"
//               name="symptoms"
//               value={consultation.symptoms}
//               onChange={changeHandler}
//             />
//             <label className="top-top">Symptoms *</label>
//           </div>
//           <div className="child w-[100%] relative mb-5">
//             <input
//               className="border-none outline-none rounded-r-lg text-gray-700 rounded-l-lg py-[7px] px-4 w-[100%]"
//               type="text"
//               name="additional_explanation"
//               value={consultation.additional_explanation}
//               onChange={changeHandler}
//             />
//             <label className="top-top">Additional explanation</label>
//           </div>
//           <div className="imgcontent w-[100%] relative mb-5">
//             <input
//               className="border-none outline-none rounded-r-lg text-gray-700 rounded-l-lg py-[7px] px-4 w-[100%]"
//               type="file"
//               style={{ display: "none" }}
//               id="analysis"
//               onChange={onImageChange}
//               name="analysis"
//             />
//             <label className="top-top" for="analysis">
//               <box-icon
//                 color="var(--green-color)"
//                 type="solid"
//                 name="file-plus"
//               ></box-icon>
//               Analysis (pdf or jpg)
//             </label>
//             {imageAnalysis && (
//               <div className="place-image">
//                 <p
//                   onClick={() => removeImageHandler()}
//                   style={{ cursor: "pointer" }}
//                 >
//                   x
//                 </p>
//                 <img src={imageAnalysis} alt="" />
//               </div>
//             )}
//           </div>
//           {/* <div className="flex justify-between items-center w-[54%] mb-4">
//             <div>
//               <input
//                 type="radio"
//                 className="accent-[var(--gray-color)] cursor-pointer mr-1"
//                 id="doctor"
//                 name="type"
//                 value="doctor"
//                 checked
//               />
//               <label
//                 for="doctor"
//                 className="cursor-pointer text-[var(--gray-color)] opacity-[90%]"
//               >
//                 Non-emergency case
//               </label>
//             </div>
//             <div>
//               <input
//                 className="accent-[var(--gray-color)] cursor-pointer mr-1"
//                 type="radio"
//                 id="emergency"
//                 name="type"
//                 value="emergency"
//               />
//               <label
//                 for="emergency"
//                 className="cursor-pointer text-[var(--gray-color)] opacity-[90%]"
//               >
//                 Emergency case
//               </label>
//             </div>
//           </div> */}
//           <div className="flex justify-end items-center">
//           <div className="w-[30%] flex justify-between items-center mb-8 mt-5">
//             <button
//               type="submit"
//               className="py-[9px] text-[var(--p-color)] px-[36px] font-bold bg-[var(--gray-color)] cursor-pointer shadow-lg rounded-lg"
//             >
//               Edit
//             </button>
//             <button
//               onClick={()=>onBack(false)}
//               className="border border-[var(--gray-color)] px-[30px] py-[8px] outline-none cursor-pointer font-bold rounded-lg text-[var(--gray-color)] "
//             >
//               Back
//             </button>
//           </div>
//           </div>
//         </form>
//       </div>
//     </div>
//     );
// }

// export default EditCon;
