import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostDetails } from "../features/posts/postsSlice";
import { useParams } from "react-router-dom";
import PostDetailsCard from "../Components/PostDetails/PostDetailsCard";
import '../styles/post-details.css'

const PostDetails = () => {
  const { postId } = useParams();
  const dispatch = useDispatch();
  const [postInfo, setPostInfo] = useState({});
  const postDetails = useSelector((state) => state.postsData.postDetails);

  useEffect(() => {
    dispatch(fetchPostDetails(postId));
  }, [dispatch, postId]);

  useEffect(() => {
    if (postDetails) {
      setPostInfo({
        id: postDetails.id,
        title: postDetails.title,
        body: postDetails.body,
      });
    }
  }, [postDetails]);
  return (
    <div className="container">
      <div className="post-details">
      {postDetails ? (
        <>
            <PostDetailsCard  postInfo={postInfo}/>
        </>
      ) : (
        <p>Loading...</p>
      )}
      </div>
    </div>
  );
};

export default PostDetails;
