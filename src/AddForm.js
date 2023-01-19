import { useState } from "react"

function AddForm({setRender}){

    const [newComment,setNewComment] = useState("")

    function addComment(){
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text : newComment })
        };
        fetch('http://localhost:4000/', requestOptions)
            .then(
                setRender(Math.random())
            );
    }
    
    return(
        <form onSubmit={(e)=>{
            e.preventDefault()
            addComment()
        }}>
            <input type="text" className="input" onChange={(e)=>{
                setNewComment(e.target.value)
            }}/>
            <button className="butt">comment</button>
        </form>
    )
}

export default AddForm