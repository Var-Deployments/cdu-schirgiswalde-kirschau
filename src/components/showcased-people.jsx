import React from "react";
import PersonRect from "@/components/person-rect";


const ShowcasedPeople = ({}) => {
    return (
        <div className="flex flex-col items-center justify-center mb-[25vh]">
            <h1 className="text-5xl font-bold mb-8 text-black dark:text-white">Unsere Kandidaten</h1>
            <div className="flex justify-around flex-wrap gap-4 md:max-w-[50vw] max-w-[100vw]">
                <PersonRect/>
                <PersonRect/>
                <PersonRect/>
                <PersonRect/>
                <PersonRect/>
                <PersonRect/>
                <PersonRect/>
                <PersonRect/>
            </div>
        </div>)
};

ShowcasedPeople.displayName = "ShowcasedPeople";
export default ShowcasedPeople;