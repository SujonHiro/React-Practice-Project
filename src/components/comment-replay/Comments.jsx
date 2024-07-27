import React, {useState} from 'react';
import Comment from "./Comment";
/*import commentsData from "./data"*/
import useNode from "./hook/useNode"
const comments = {
    id: 1,
    items: []
}
const Comments = () => {
    const [commentData, setCommentData] = useState(comments);

    const {insertNode,editNode,deleteNode}=useNode();
    const handleInsertNode = (folderId,item) => {
        const finalStructure=insertNode(commentData,folderId,item)
        setCommentData(finalStructure)
    }
    const handleEditNode = (folderId,value) => {
        const finalStructure=editNode(commentData,folderId,value)
        setCommentData(finalStructure)
    }
    const handleDeleteNode = () => {

    }
    return (
        <div>
            <Comment comment={commentData}
                     handleInsertNode={handleInsertNode}
                     handleEditNode={handleEditNode}
                     handleDeleteNode={handleDeleteNode}
            />
        </div>
    );
};

export default Comments;