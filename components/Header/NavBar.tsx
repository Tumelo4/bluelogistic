import Flexbox from "@/constants/theme/Flexbox";
import React from "react";
import {twMerge} from "tailwind-merge";
import NavItems from "@/constants/NavItems"

const NavBar = () => {
    return (
        <div className={twMerge(Flexbox.flexCenter)}>
            {
                NavItems.map((item, index) => {
                    return <h1 key={index} className=' hover:cursor-pointer p-3 hover:outline capitalize'>{item}</h1>
                })
            }
            <button className=' ml-1 hover:bg-blue-500 ease-in-out duration-500 hover:cursor-pointer p-3 outline-blue-500 outline capitalize'>Login</button>
        </div>
    )
}

export default NavBar;