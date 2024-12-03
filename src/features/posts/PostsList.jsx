import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, addPost, deletePost } from "./postsSlice";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import AddPostForm from "../../Components/AddPost/AddPostForm";

const PostsList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postsData.posts);
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const handleAddPost = (values) => {
    dispatch(addPost(values)).then(() => {
      toast.success("Post added successfully");
    });
  };

  const handleDeletePost = (post) => {
  Swal.fire({
    title: `You Will Delete -->${post.title}`,
    showCancelButton: true,
  }).then((data) => {
    if (data.isConfirmed) {
      dispatch(deletePost(post.id)).then(() => {
        toast.success("Post deleted successfully");
      })
      .catch(() => {
        toast.error("Failed to delete the post");
      });
    }
  });
  }



  return (
    <>
      <div className="posts-container">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {posts &&
                posts.map((post) => (
                  <div className="card post-item" key={post.id}>
                    <div className="card-body">
                      <h5>
                      <Link to={`/posts/${post.id}`}>{post.id} - {post.title}</Link>
                      </h5>
                      <p className="card-text">{post.body}</p>
                      <div className="postControlButtons">
                        <button className="btn btn-primary">
                          <FontAwesomeIcon icon={faEdit} /> Update
                        </button>
                        <button className="btn btn-danger" onClick={() => {handleDeletePost(post)}}>
                          <FontAwesomeIcon icon={faTrash} /> Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            <div className="col-lg-4">
              <div className="add-post-form">
                <AddPostForm handleAddPost={handleAddPost} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </>
  );
};

export default PostsList;
