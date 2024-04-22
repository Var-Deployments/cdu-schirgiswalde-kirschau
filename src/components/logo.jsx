import React from "react";
import Image from "next/image";

const Logo = ({ instance }) => {

    return (
        <div className="flex flex-row items-center justify-center">
    <Image
        src="/img/saxon-union-icon.png"
        alt="Saxon Union Icon"
        width={25}
        height={25} />
    <span className="ml-1.5 text-2xl font-bold">
        <span className="text-red-500">CDU</span>
        <span className="ml-1.5 text-black dark:text-white">{instance}</span>
    </span>
        </div>
);
}

export default Logo;