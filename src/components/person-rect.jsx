import React from "react";


const PersonRect = ({ config }) => {
    return (
        <a href={`${config.firstName.toLowerCase()}-${config.lastName.toLowerCase()}`} className="cursor-pointer relative flex items-center justify-center flex-col rounded-lg w-full md:w-64 aspect-[10/16] md:aspect-auto md:h-96 bg-neutral-300 dark:bg-neutral-800">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" className="absolute dark:text-white/50 text-black/50 top-6 right-6 md:top-4 md:right-4 w-7 h-7 md:w-6 md:h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"/>
            </svg>

            <div className="h-full w-full pl-5 pb-4 flex flex-col justify-end">
            <div className="flex flex-col pl-2 pb-2 md:pb-0 md:pl-0 font-bold text-4xl md:text-3xl">
                <span>{config.firstName}</span>
                <span>{config.lastName}</span>
            </div>
            <span className="flex pb-2 ml-2 md:pb-0 md:ml-0 md:bottom-[10%] text-green-600 font-semibold text-2xl md:text-lg">{config.title}</span>
            </div>
        </a>
    )
};

PersonRect.displayName = "PersonRect";
export default PersonRect;