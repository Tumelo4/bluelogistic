import React, { ReactNode } from "react"
import logo from "@/public/Blue logistics.png"
import Logo from "./Logo"
import NavBar from "./NavBar"
import Flexbox from "@/constants/theme/Flexbox"
import { twMerge } from "tailwind-merge"
import { clsx } from "clsx"

interface HeaderProp {
    children?: ReactNode
}

const Header = ({children}: HeaderProp) => {
    return (
        <div className={twMerge(clsx(Flexbox.flexBetween, 'w-full h-8'))}>
            <Logo src ={logo} alt = "blue logistics" />
            {children}
            <NavBar />
        </div>
    )
}

export default Header;