

function Comment({comment,comments,setComments}){

    function deleteComment(){
        fetch(`http://localhost:4000/${comment._id}`,{
            method: "DELETE",
        }).then( setComments( comments.filter(item => item._id != comment._id) ))
    }

    return(
        <div className="comment">
            <p className="text">{comment.text}</p>
            <button className="commentButt" onClick={(e)=>{
                e.preventDefault()
                deleteComment()
            }}>delete</button>
        </div>
    )
}

export default Comment