import React, {useState} from 'react';
import MenuList from "./menuList";
import {FaPlus,FaMinus} from "react-icons/fa";

const MenuItem = ({item}) => {
    const [displayCurrentChildren,setDisplayCurrentChildren]=useState({})
const handleChildren=(getCurrentLabel)=>{
setDisplayCurrentChildren({
    ...displayCurrentChildren,
    [getCurrentLabel]:!displayCurrentChildren[getCurrentLabel]
})
}
    console.log(displayCurrentChildren);
    return (
        <li><div style={{display:"flex",gap:"20px"}}>
            <p>{item.label}</p>
            {
                item && item.children && item.children.length? <span onClick={()=>handleChildren(item.label)}>
                    {
                        displayCurrentChildren[item.label] ? <FaMinus color="white" size={30}/>:<FaPlus color="white" size={30}/>
                    }
                </span>:null
            }
        </div>
        {
            item && item.children && item.children.length>0 && displayCurrentChildren[item.label]?
            <MenuList list={item.children}/>
            :null
        }
        </li>

    );
};

export default MenuItem;