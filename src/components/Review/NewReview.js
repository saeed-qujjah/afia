import React, { useState } from 'react';
import details from "../../global/images/responsability.png";
import review from "../../global/images/review.png";
import edit from "../../global/images/edit.png";
import ReviewForm from './ReviewForm';
import UseAxiosGet from '../../hooks/useAxiosGet';
import { API } from '../../data/config';
import TrConsultations from '../Consultation/TrConsultations';

const NewReview = () => {
    const [showForm, setShowForm] = useState(false);
    const {data:consultations} = UseAxiosGet(API.consultations.CONSULTATIONS)
    console.log(consultations)

    const showFormHandler = (consoltation) => {
      setShowForm(consoltation);
    };
  
    const goBackHandler = () => {
      setShowForm(false)
    }

    return (
        <div className='px-20'>
            {showForm && <ReviewForm goBackHandler={goBackHandler} method="create" consultation={showForm} />}
             <table className="my-16">
        <thead>
          <tr>
            <th>Specialization</th>
            <th>Doctor</th>
            <th>Symptoms</th>
            <th>explanation</th>
            <th>status</th>
            <th>Date created</th>
            <th>procedures</th>
          </tr>
        </thead>
        <tbody>
          {consultations?.data.data.filter((array)=>array.done === true)?.map((consultation, index) => {
            return (
              <TrConsultations
                key={index}
                consultation={consultation}
                forReviews={true}
                onAddReview = {showFormHandler}
              />
            );
          })}
          {/* <tr>
            <td>osama</td>
            <td>mohamad</td>
            <td>mohamad</td>
            <td>40</td>
            <td>40</td>
            <td>
              <div className="flex justify-center items-center w-[50%] m-auto">
              <p className='text-[var(--gray-color)] font-thin opacity-[85%]'>+</p>
                <img className="w-6 cursor-pointer" src={review} alt="Add Review" onClick={()=>showFormHandler("dff")}/>
              </div>
            </td>
          </tr>
          <tr>
            <td>samer</td>
            <td>hasan</td>
            <td>hasan</td>
            <td>hasan</td>
            <td>80</td>
            <td>
              <div className="flex justify-center items-center w-[50%] m-auto">
              <p className='text-[var(--gray-color)] font-thin opacity-[85%]'>+</p>
                <img className="w-6 cursor-pointer" src={review} alt=""/>
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
              <div className="flex justify-center items-center w-[50%] m-auto">
              <p className='text-[var(--gray-color)] font-thin opacity-[85%]'>+</p>
                <img className="w-6 cursor-pointer" src={review} alt=""/>
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
              <div className="flex justify-center items-center w-[50%] m-auto">
              <p className='text-[var(--gray-color)] font-thin opacity-[85%]'>+</p>
                <img className="w-6 cursor-pointer" src={review} alt=""/>
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
              <div className="flex justify-center items-center w-[50%] m-auto">
              <p className='text-[var(--gray-color)] font-thin opacity-[85%]'>+</p>
                <img className="w-6 cursor-pointer" src={review} alt=""/>
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
              <div className="flex justify-center items-center w-[50%] m-auto">
              <p className='text-[var(--gray-color)] font-thin opacity-[85%]'>+</p>
                <img className="w-6 cursor-pointer" src={review} alt=""/>
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
              <div className="flex justify-center items-center w-[50%] m-auto">
              <p className='text-[var(--gray-color)] font-thin opacity-[85%]'>+</p>
                <img className="w-6 cursor-pointer" src={review} alt=""/>
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
              <div className="flex justify-center items-center w-[50%] m-auto">
              <p className='text-[var(--gray-color)] font-thin opacity-[85%]'>+</p>
                <img className="w-6 cursor-pointer" src={review} alt=""/>
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
              <div className="flex justify-center items-center w-[50%] m-auto">
              <p className='text-[var(--gray-color)] font-thin opacity-[85%]'>+</p>
                <img className="w-6 cursor-pointer" src={review} alt=""/>
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
              <div className="flex justify-center items-center w-[50%] m-auto">
              <p className='text-[var(--gray-color)] font-thin opacity-[85%]'>+</p>
                <img className="w-6 cursor-pointer" src={review} alt=""/>
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
              <div className="flex justify-center items-center w-[50%] m-auto">
              <p className='text-[var(--gray-color)] font-thin opacity-[85%]'>+</p>
                <img className="w-6 cursor-pointer" src={review} alt=""/>
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
              <div className="flex justify-center items-center w-[50%] m-auto">
              <p className='text-[var(--gray-color)] font-thin opacity-[85%]'>+</p>
                <img className="w-6 cursor-pointer" src={review} alt=""/>
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
              <div className="flex justify-center items-center w-[50%] m-auto">
              <p className='text-[var(--gray-color)] font-thin opacity-[85%]'>+</p>
                <img className="w-6 cursor-pointer" src={review} alt=""/>
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
              <div className="flex justify-center items-center w-[50%] m-auto">
              <p className='text-[var(--gray-color)] font-thin opacity-[85%]'>+</p>
                <img className="w-6 cursor-pointer" src={review} alt=""/>
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
              <div className="flex justify-center items-center w-[50%] m-auto">
              <p className='text-[var(--gray-color)] font-thin opacity-[85%]'>+</p>
                <img className="w-6 cursor-pointer" src={review} alt=""/>
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
              <div className="flex justify-center items-center w-[50%] m-auto">
              <p className='text-[var(--gray-color)] font-thin opacity-[85%]'>+</p>
                <img className="w-6 cursor-pointer" src={review} alt=""/>
              </div>
            </td>
          </tr> */}
        </tbody>
      </table>
        </div>
    );
}

export default NewReview;
