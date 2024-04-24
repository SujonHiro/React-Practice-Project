import React from 'react';
import MenuItem from "./menuItem";

const MenuList = ({list=[]}) => {

    return (
        <ul className="menu-list-component">
            {
                list && list.length ?
                    list.map(listItem=>(
                        <MenuItem item={listItem}/>
                    ))
                :null
            }
        </ul>
    );
};

export default MenuList;