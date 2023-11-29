import React from "react";
import Image, { StaticImageData } from "next/image";
import Dimesion from "@/constants/theme/Dimesion";

interface LogoProp {
    src: StaticImageData,
    alt: string
}

const Logo = ({src, alt}:LogoProp) => {
    return (
        <Image 
            src={src} 
            alt={alt} 
            width={Dimesion.imgwidth.s}
            height={Dimesion.imgheight.s}
            priority
        />
    )
}

export default Logo;