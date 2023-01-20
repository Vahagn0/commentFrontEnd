import CommentList from './commentList';
import AddForm from './AddForm';

function Home({comments,setComments,setRender}){
    return(
        <div>
            <AddForm  setRender = {setRender}/>
            <CommentList comments={comments} setComments = {setComments}/>
        </div>
    )
}

export default Home