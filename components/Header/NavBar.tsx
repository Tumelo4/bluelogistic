import Flexbox from "@/constants/theme/Flexbox";
import React from "react";
import {twMerge} from "tailwind-merge";

const NavBar = () => {
    return (
        <div className={twMerge(Flexbox.flexCenterGap)}>
            <h1>Home</h1>
            <h1>About</h1>
            <h1>Service</h1>
            <h1>Team</h1>
            <h1>Contact</h1>
        </div>
    )
}

export default NavBar;