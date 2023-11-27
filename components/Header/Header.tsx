import React from "react"
import Flexbox from "@/constants/theme/Flexbox"
import { twMerge } from "tailwind-merge"
import { clsx } from "clsx"
import RightHeaderItems from "./RightHeaderItems"
import childrenProp from "@/interface/childrenProp"
import LeftHeaderItems from "./LeftHeaderItems"
import Color from "@/constants/theme/Color";

const Header = ({children}: childrenProp) => {
    return (
        <div className={twMerge(clsx(Flexbox.flexBetween , 'bg-lightGray','w-full h-14 px-5 py-4 fixed'))}>
            <LeftHeaderItems />
            {children}
            <RightHeaderItems />
        </div>
    )
}

export default Header;