import React, { useState, useRef, useEffect, useCallback } from "react";
// import "./MainPosts.css";
import imageuser from '../../global/images/cute-business-woman-idea-thinking-present-pink-background-3d-rendering(1).jpg'
import Post from "./post";
import img from '../../global/images/arrangement-medical-still-life-elements.jpg'
import img2 from '../../global/images/doctors-hands-holding-medical-care-objects.jpg'
import img3 from '../../global/images/arrangement-medical-still-life-elements.jpg'
import img4 from '../../global/images/arrangement-medical-still-life-elements.jpg'
import img5 from '../../global/images/arrangement-medical-still-life-elements.jpg'
import img6 from '../../global/images/arrangement-medical-still-life-elements.jpg'
import axios from "axios";

const MainPosts = (props) => {
  // const postText = useRef();
  // const postImage = useRef();
  const [Image, setImage] = useState(false);
  const [postText, setPostText] = useState("");
  const [postImage, setPostImage] = useState("");
  const [newPost, setNewPost] = useState("");

  const [comments, setComments] = useState([]);
  const [posts, setPosts] = useState([]);
  const fethPosts = useCallback(() => {
    axios
      .get("http://localhost:8000/api/SocialMedia/posts")
      .then((res) => {
        setPosts(res.data.data);
        console.log(res.data.data)
        axios
          .get(`http://localhost:8000/api/SocialMedia/comments`)
          .then((res) => {
            console.log(res.data)
            setComments(res.data);
          });
      });
  }, []);
  useEffect(() => {
    fethPosts();
  }, [fethPosts]);
  let postsArray;
  if (newPost !== "") {
    postsArray = [...newPost, ...posts];
  } else {
    postsArray = [...posts];
  }

  const submitHandler = (e) => {
    e.preventDefault();
    // axios.defaults.withCredentials = true;
    // axios.get("http://localhost:8000/sanctum/csrf-cookie");
    const formData = new FormData();
    formData.append("Name", 1 );
    formData.append("TeSm", postText);
    formData.append("AttSm", postImage);
    axios
      .post("http://localhost:8000/api/SocialMedia/post", formData)
      .then((res) => {
        console.log(res.data.data)
        setNewPost([...res.data.data,...newPost]);
        setPostText("");
        setPostImage("");
        setImage(false);
      }).catch((error)=>console.log(error))
  };

  return (
    <div className="w-[45%] m-auto">
      <div className="w-[95%] mx-auto mt-[20px] mb-[10px]" dir="ltr">
        <form onSubmit={submitHandler} className="">  
          <div className="rounded-lg py-[20px] text-[var(--gray-color)] px-[20px] m-auto bg-white">
            {/* <h4 className="text-[25px] text">انشاء منشور </h4> */}
            <div className="flex justify-between items-center mb-2">
              <img src={imageuser} className="w-[55px] rounded-full" alt="" />
              <input
                type="text"
                className="tablet:w-[83%] w-[73%] px-4 outline-none rounded-r-full text-[var(--green-color)] rounded-l-full h-10  bg-[var(--p-color)]"
                value={postText}
                placeholder="What is going through your mind ?"
                onChange={(e) => {
                  setPostText(e.target.value);
                }}
              />
              <button type="submit" className="mt-1">
              <box-icon name='send' color='var(--gray-color)'></box-icon>
              </button>
            </div>
            <hr className="border-stone-500 mb-4"></hr>
            {Image && (
              <div className="flex justify-center items-center mb-[10px]">
                <img src={Image} alt="" />
              </div>
            )}
            <div className="flex justify-between px-2">
              {/* <div className="flex w-1/2 justify-center tablet:w-1/4 cursor-pointer">
              <box-icon name='video-plus' color='red'></box-icon>
                <p className="mr-2">فيديو بث مباشر</p>
              </div> */}
              <div className="flex justify-center cursor-pointer">
                <input
                  type="file"
                  accept="image/*"
                  id="uploadimg"
                  className="hidden"
                  onChange={(e) => {
                    setPostImage(e.target.files[0]);
                    setImage(URL.createObjectURL(e.target.files[0]));
                  }}
                />
                <label for="uploadimg" className="flex cursor-pointer">
                <box-icon name='image-add' color='var(--green-color)'></box-icon>
                <p className="ml-2">Add a photo or video</p>
                </label>
               </div>
             {/* <div className="hidden tablet:flex  cursor-pointer">
              <box-icon color='var(--greenLigth-color)' name='smile'></box-icon>
              <p className="ml-2">Feeling/active</p>
              </div> */}
            </div>
          </div>
        </form>
        {/* <div className="h-14 bg-slate-900 mt-4 rounded-lg flex justify-evenly items-center">
                  <div className="w-28 h-11 border text-[blue] rounded-l-full flex justify-evenly items-center rounded-r-full border-[blue]">
                  <box-icon name='video-plus' color='blue'></box-icon>
                  <p>انشاء غرفة</p>
                  </div>
                  <div className="relative">
                      <img className="w-10 rounded-full" src={img} alt=''/>
                      <div className="w-3 border border-[black] h-3 rounded-full bg-[green] absolute top-7 left-0"></div>
                  </div>
                  <div className="relative">
                      <img className="w-10 rounded-full" src={img2} alt=''/>
                      <div className="w-3 border border-[black] h-3 rounded-full bg-[green] absolute top-7 left-0"></div>
                  </div>
                  <div className="relative">
                      <img className="w-10 rounded-full" src={img3} alt=''/>
                      <div className="w-3 border border-[black] h-3 rounded-full bg-[green] absolute top-7 left-0"></div>
                  </div>
                  <div className="relative">
                      <img className="w-10 rounded-full" src={img4} alt=''/>
                      <div className="w-3 border border-[black] h-3 rounded-full bg-[green] absolute top-7 left-0"></div>
                  </div>
                  <div className="relative hidden tablet:block">
                      <img className="w-10 rounded-full" src={img5} alt=''/>
                      <div className="w-3 border border-[black] h-3 rounded-full bg-[green] absolute top-7 left-0"></div>
                  </div>
                  <div className="relative hidden tablet:block">
                      <img className="w-10 rounded-full" src={img6} alt=''/>
                      <div className="w-3 border border-[black] h-3 rounded-full bg-[green] absolute top-7 left-0"></div>
                  </div>
        </div> */}
        <div className="">
          {postsArray.map((array, index) => {
            return (
              <Post
                key={array.id}
                comments={comments.filter((array2) => array2.IdSm === array.id)}
                idPost={array.id}
                AttSm={array.AttSm}
                TeSm={array.TeSm}
                name={array.nameUser}
                created_at={array.created_at}
              ></Post>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MainPosts;
