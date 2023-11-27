"use client"
import Flexbox from "@/constants/theme/Flexbox";
import { IoMdMenu } from "react-icons/io";
import React, {useState} from "react";
import {twMerge} from "tailwind-merge";
import NavItems from "@/constants/NavItems"

const NavMenu = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className={twMerge(Flexbox.flexCenter)}>
            {
                open ? (
                    <div className={twMerge(Flexbox.flexCenter, 'flex-col')}>
                        {
                            NavItems.map((item, index) => {
                                return <h1 key={index} className=' hover:cursor-pointer p-3 hover:outline capitalize'>{item}</h1>
                            })
                        }
                    </div>
                ) : (
                    <IoMdMenu className = ' text-3xl'/>
                )
            }
        </div>
    )
}
export default NavMenu
