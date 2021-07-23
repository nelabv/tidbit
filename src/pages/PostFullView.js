import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import PostServices from "../services/posts";
import FullViewPost from "../components/FullViewPost.js";
import Register from "../components/Register";

function PostFullView(props) {
  const [isAuthSuccessful, setIsAuthSuccessful] = useState(false);
  const [post, setPost] = useState([]);

  const { id } = useParams();

  const fetchData = useCallback(async () => {
    const authenticated = sessionStorage.getItem("auth");

    if (authenticated !== "true") {
      window.location = "/signup";
    } else {
      try {
        const APIcall = await PostServices.getPostByID(id, sessionStorage.getItem("token"))
          .catch(function (error) {
            console.log("An error occured: ", error.response);
          })
        
        let APIresponse = APIcall.data.retrievedPost[0];
  
        setPost(APIresponse);
        setIsAuthSuccessful(true);
      } catch (error) {
        console.log("ERROR: ", error);
      }
    }
  }, [id])

  useEffect(() => {
    fetchData();

    return () => {
      setPost({}); 
    };
  }, [fetchData])

  return (
    <>
      { isAuthSuccessful ? 
        <FullViewPost 
            post={post}
            userVotedPosts={props.userVotedPosts}/> : 
        <Register />
      }
    </>
  );
}
export default PostFullView;