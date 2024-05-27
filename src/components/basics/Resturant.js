import React, { useState } from 'react'
import "./style.css";
import Menu from './MenuApi';
import MenuCart from './MenuCart';
import Navbar from './Navbar';

const uniqueList = [...new Set(Menu.map((curElem) => {
    return curElem.category;
})
)
,"All"
]

const Resturant = () => {
    const [menuData , setMenuData] = useState(Menu);
    const [menuList , setMenuList] = useState(uniqueList);

    // console.log(uniqueList)

    const filterItem = (category) =>{
        if(category==="All"){
            setMenuData(Menu);
            return;
        }
        const updatedLists = Menu.filter((curElem) => {
            return curElem.category === category;
        })
            setMenuData(updatedLists);
    }
  return (
   <>
   <Navbar filterItem={filterItem} menuList={menuList}/>
   <MenuCart menuData={menuData}/>
   </>
  )
}

export default Resturant