import React from "react";
import PersonRect from "@/components/person-rect";


const ShowcasedPeople = ({ candidates }) => {
    return (
        <div className="flex z-50 flex-col items-center justify-center mb-[25vh] -mt-[10vh] text-black dark:text-white">
            <div id="candidates" className="transform -translate-y-24"></div>
            <h1 className="text-5xl font-bold mb-8 text-center" dangerouslySetInnerHTML={{__html: candidates.title}}></h1>
            <span className="text-2xl font-light -mt-3 mb-8 text-center" dangerouslySetInnerHTML={{__html: candidates.subtitle}}></span>
            <div className="flex justify-center flex-wrap gap-8 md:max-w-[50vw] max-w-[100vw]">
                {
                    candidates.people.map((person) => (
                        <PersonRect key={person.id} config={person} />
                    ))
                }
            </div>
        </div>)
};

ShowcasedPeople.displayName = "ShowcasedPeople";
export default ShowcasedPeople;