import React from "react";

function PostDetailsCard({postInfo}){
    const { id, title, body } = postInfo;
    return(
        <div className="p-5">
            <h1 className="text-danger text-center">Post {id} Details</h1>
            <hr></hr>
            <h3>{id} - {title}</h3>
            <h5 className="w-50 my-4">{body}</h5>
        </div>
    )
}

export default PostDetailsCard;