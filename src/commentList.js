import Comment from "./Comment"

function CommentList({comments,setComments}){
    return(
        <div>
            {comments.map((item)=>{
                return (
                    <Comment comment={item} comments = {comments} setComments = {setComments} key = {item._id}/>
                )
            })}
        </div>
    )
}

export default CommentList