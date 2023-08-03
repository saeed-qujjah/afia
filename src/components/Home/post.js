import React, { useEffect, useState } from "react";
// import "./post.css";
import imageuser from '../../global/images/cute-business-woman-idea-thinking-present-pink-background-3d-rendering(1).jpg'
import Comment from "./comment";
import axios from "axios";

const Post = (props) => {
  const [comment, setComment] = useState("");
  const [idComment, setIdComment] = useState("");
  const [showCom, setShowCom] = useState(false);
  const com = props.comments;
  const [commentArray, setCommentArray] = useState("");
  const [commentRefresh, setCommentRefresh] = useState([]);
  useEffect(() => {
    setCommentArray([...com,...commentRefresh]);
  }, [com]);
  const submitCommentHandler = (e) => {
    e.preventDefault();
    axios
      .post(
        `http://localhost:8000/api/SocialMedia/posts/${idComment}/comment`,
        {
          IdSm: idComment,
          TeSmCom: comment,
          Name: 1,
        }
      )
      .then((res) => {
        console.log(res.data)
        setComment("");
        setCommentRefresh([...commentRefresh,res.data])
        setCommentArray([...commentArray, res.data]);
      });
  };

  const showComments = () => {
    setShowCom(true);
  };

  return (
    <div className="bg-white shadow-sm text-[var(--gray-color)] mt-4 rounded-lg">
      <div className="w-[100%]">
        <div className="tablet:px-[20px] px-[20px] py-[20px] w-[100%] " key={props.id}>
          <div className="flex items-center justify-between mb-5 text-[var(--gray-color)]">
            <div className="flex items-center">
            <img className="w-[45px] h-[45px] rounded-full" src={imageuser} alt="" />
            <div className="pl-[20px]">
              <h4 className="text-[22px] text-[var(--gray-color)]">{props.name}</h4>
              <p className="flex justify-start items-center opacity-[0.6] text-xs">{props.created_at}</p>
            </div>
            </div>
            <div className="flex">
            <box-icon color='var(--gray-color)' name='dots-horizontal-rounded'></box-icon>
            <box-icon style={{margin:'0 15px'}} name='x' color='var(--gray-color)'></box-icon>
            </div>
          </div>
          <div className="flex flex-col text-[16px] font-light text-lg text-[var(--gray-color)] mb-[10px] mt-8">
            <label className="mb-[10px]">{props.TeSm}</label>
            {props.AttSm !== null && (
              <img
              className=" m-auto bg-cover rounded-lg "
                src={`http://localhost:8000/uploads/SocialMedia/${props.AttSm}`}
                alt=""
              />
            )}
          </div>
          {/* <div className="flex justify-between items-center text-stone-400">
            <div className="flex justify-center items-center">
            <box-icon name='like' style={{margin:'0 0 0 -8px'}} type='solid' color='blue'></box-icon>
            <box-icon type='solid' name='heart' style={{margin:'0 0 0 5px'}} color='red'></box-icon>6.5 ألف
            </div>
            <p>3.1 ألف تعليقا    مشاركتان</p>
          </div> */}
          {/* <hr className="border-stone-500 mt-2 m-auto"></hr>
          <div className="flex justify-between px-4 items-center h-11 text-stone-400">
            <div className="flex items-center justify-between">
            <box-icon name='like' color='gray'></box-icon>
              <p className="mr-2">أعجبني</p>
            </div>
            <div className="flex items-center justify-between">
            <box-icon name='comment' color='gray'></box-icon>
              <p className="mr-2">تعليق</p>
            </div>
            <div className="flex items-center justify-between">
            <box-icon name='share' color='gray'></box-icon>
              <p className="mr-2">مشاركة</p>
            </div>
          </div> */}
          {/* <hr className="border-stone-500 mb-4"></hr> */}
          <form className="flex justify-between items-center relative my-[15px] mt-14 mx-0" onSubmit={submitCommentHandler}>
            <input
              type="text"
              className="bg-[var(--p-color)] outline-none text-[var(--gray-color)] font-light w-[95%] rounded-l-full rounded-r-full py-0 pl-[25px] pr-[65px] h-10  "
              placeholder="Write a comment"
              value={comment}
              onChange={(e) => {
                setComment(e.target.value);
                setIdComment(props.idPost);
              }}
            />
            <button type="submit" className="flex justify-center items-center"><box-icon name='send' color='var(--gray-color)'></box-icon></button>
            <div className="flex absolute right-8 justify-between w-[10%] cursor-pointer">
            <box-icon name='link-alt' color='gray' ></box-icon>
            {/* <box-icon name='file-gif' color='gray' type='solid'></box-icon> */}
            {/* <box-icon name='image' color='gray'></box-icon> */}
            <box-icon name='smile' color='gray'></box-icon>
            </div>
          </form>
          {commentArray.length !== 0 && <hr className="border-[var(--gray-color)] mb-4"></hr>}
          <div className="text-[] flex flex-col mt-[10px]">
            {commentArray.length !== 0 && <div className="flex justify-start items-center text-[15px] ml-2 opacity-[0.7] mb-[10px]">
              <label key={props.id} onClick={showComments} className='cursor-pointer pr-[10px]'>
              View all comments
              </label>
            </div>}
            <div className="all-comment">
              {!showCom && commentArray[0] !== undefined && (
                <Comment
                  key={commentArray[0].idPost}
                  comment={commentArray[0].TeSmCom}
                  name={commentArray[0].nameUser}
                  idCom={commentArray[0].id}
                ></Comment>
              )}
              {showCom &&
                commentArray.map((com, index) => (
                  <Comment
                    key={index}
                    comment={com.TeSmCom}
                    name={com.nameUser}
                    idCom={com.id}
                  ></Comment>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
