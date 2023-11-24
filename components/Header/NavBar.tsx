import Flexbox from "@/constants/theme/Flexbox";
import React from "react";
import {twMerge} from "tailwind-merge";

const NavBar = () => {
    return (
        <div className={twMerge(Flexbox.flexCenter)}>
            <h1 className=' hover:cursor-pointer p-3 hover:outline'>Home</h1>
            <h1 className=' hover:cursor-pointer p-3 hover:outline'>About</h1>
            <h1 className=' hover:cursor-pointer p-3 hover:outline'>Service</h1>
            <h1 className=' hover:cursor-pointer p-3 hover:outline'>Team</h1>
            <h1 className=' hover:cursor-pointer p-3 hover:outline'>Contact</h1>
        </div>
    )
}

export default NavBar;