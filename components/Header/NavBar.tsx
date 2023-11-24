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
        </div>
    )
}

export default NavBar;