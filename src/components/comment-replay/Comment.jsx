import React, {useEffect, useRef, useState} from 'react';
import Action from "./Action";
const Comment = ({comment,handleInsertNode,handleEditNode,handleDeleteNode}) => {

    const [input, setInput] = useState('');
    const [editMode,setEditMode] = useState(false);
    const [showInput,setShowInput] = useState(false);
    const [expand,setExpand] = useState(false);
    const inputRef=useRef(null)

    useEffect(() => {
        inputRef?.current?.focus();
    }, [editMode]);
    const onAddComment = () => {
        if (editMode){
            handleEditNode(comment.id,inputRef?.current?.innerText)
        }else {
            setExpand(true)
            handleInsertNode(comment.id,input)
            setShowInput(false)
            setInput(" ")
        }

        if (editMode) setEditMode(false);
    }
    const handleNewComment=()=>{
        setExpand(!expand)
        setShowInput(true)
    }
    return (
        <>
            <div className={comment.id===1?"inputContainer":"commentContainer"}>
                {comment.id===1?
                        (<div style={{display:"flex",gap:"1rem",alignItems:"center"}}>
                                <input type="text" className="inputContainer__input first_input" autoFocus value={input}
                                       onChange={(e) => setInput(e.target.value)} placeholder="Type..."/>
                                <Action className="reply comment" handleClick={onAddComment} type="COMMENT"/>
                            </div>
                        ) : (
                        <div>
                            <span style={{wordWrap: "break-word"}} contentEditable={editMode} suppressContentEditableWarning={editMode} ref={inputRef}>{comment.name}</span>
                            <div style={{display:"flex",gap:"1rem",alignItems:"center", marginTop:"20px"}}>
                                {editMode?
                                    <>
                                        <Action className="reply" type="SAVE" handleClick={onAddComment}/>
                                        <Action className="reply" handleClick={()=>{if(inputRef.current)
                                        inputRef.current.innerText=comment.name;
                                            setEditMode(false)
                                        }} type="CANCEL"/>
                                    </>
                                    :
                                <>
                                    <Action className="reply" type="REPLAY" handleClick={handleNewComment}/>
                                    <Action className="reply" type="EDIT" handleClick={()=>setEditMode(true)}/>
                                    <Action className="reply" type="DELETE"/>
                                </>
                                }
                            </div>
                        </div>
                    )
                }
            </div>
            <div style={{display:expand?"block":"none", paddingLeft:25}}>
                {
                    showInput && (
                        <div className="inputContainer">
                            <input type="text" className="inputContainer__input" autoFocus
                                   onChange={(e) => setInput(e.target.value)} placeholder="Type..."/>
                            <Action className="reply" type="REPLAY" handleClick={onAddComment}/>
                            <Action className="reply" type="CANCEL" handleClick={()=>setShowInput(false)}/>
                        </div>
                    )


                }
                {comment?.items?.map((cmnt) => {
                        return <Comment key={cmnt.id}
                                        handleInsertNode={handleInsertNode}
                                        handleEditNode={handleEditNode}
                                        handleDeleteNode={handleDeleteNode}
                                        comment={cmnt}/>
                    }
                )}
            </div>
        </>
    );
};

export default Comment;