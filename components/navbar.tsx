import Image from "next/image";
import React from "react";
import logo from "@/public/Blue logistics.png"

const navbar = () => {
    return (
        // Logo
        <Image 
            src={logo} 
            alt="Blue Logistics"
            width={100}
            height={100}
        />
    )
}

export default navbar;