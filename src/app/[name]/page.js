import fs from "fs";
import path from "path";
import Image from "next/image";
import Footer from "@/components/footer";
import BackToHome from "@/components/back-to-home";
import {restorePathSegment, generatePathSegment} from "@/app/util";

const candidatesConfig =
    JSON.parse(fs.readFileSync(
        path.join(process.cwd(), "config/candidates.json")
    ), "utf8");

const namingConfig =
    JSON.parse(fs.readFileSync(
        path.join(process.cwd(), "config/naming.json")
    ), "utf8");

const socialConfig =
    JSON.parse(fs.readFileSync(
        path.join(process.cwd(), "config/socials.json")
    ), "utf8");

const nameMapping = candidatesConfig.people.reduce((acc, candidate) => {
    const key = generatePathSegment(`${candidate.firstName.toLowerCase()}-${candidate.lastName.toLowerCase()}`);
    acc[key] = `${candidate.firstName}-${candidate.lastName}`;
    return acc;
}, {});

export const generateStaticParams = async () => {
    return candidatesConfig.people.map(person => ({
        name: generatePathSegment(`${person.firstName.toLowerCase()}-${person.lastName.toLowerCase()}`)
    }));
};

export function getStaticData(name) {
    const restoredName = nameMapping[name];
    const [firstName, lastName] = restoredName.split('-');

    for (let i = 0; i < candidatesConfig.people.length; i++) {
        const person = candidatesConfig.people[i];
        if (person.firstName.toLowerCase() === firstName.toLowerCase() && person.lastName.toLowerCase() === lastName.toLowerCase()) {
            return person;
        }
    }

    return { notFound: true };
}

export default function Home({ params }) {
    const {name} = params;
    const data = getStaticData(name);
    return (
        <main
            className="flex min-h-screen max-w-[100vw] flex-col items-center justify-between p-2 pl-6 pt-6 md:p-24 !pb-0 bg-white dark:bg-neutral-950 text-black dark:text-white">
            <div className="max-w-[100%] md:max-w-[50%]">
            <h1 className="text-5xl font-bold">{data.firstName} {data.lastName}</h1>
            <h5 className="text-2xl font-semibold text-green-600 mt-2">{data.title}</h5>
            <img className="my-4 max-h-[20vh] md:max-h-[35vh] rounded-lg" src={data.img} alt={`Portrait von ${data.firstName} ${data.lastName}`}></img>
                {
                    data.bulletpoints.length > 0 ? (
                        <div className="flex flex-col mb-4">
                        <h2 className="text-xl font-bold mb-1">{candidatesConfig.bulletTitle}</h2>
                        <ul className="list-disc pl-6">
                            {data.bulletpoints.map((point, index) => (
                                <li key={index} className="text-lg">{point}</li>
                            ))}
                        </ul>
                        </div>
                    ) : null
                }
                {
                    data.text !== "" ? (
                        <div>
                            <h2 className="text-xl font-bold mb-1">{candidatesConfig.textTitle}</h2>
                            <p dangerouslySetInnerHTML={{__html: data.text}}></p>
                        </div>
                    ) : null
                }
                <div className="flex justify-center mt-7 md:mt-5">
                <BackToHome linkClassName={"transition duration-300 px-4 py-2 bg-black dark:bg-white rounded-lg !bg-opacity-5 hover:!bg-opacity-10"} customText={"Zurück"} customURL={`/#${generatePathSegment(data.firstName.toLowerCase())}-${generatePathSegment(data.lastName.toLowerCase())}`} className="inline-block"></BackToHome>
                </div>
                </div>
            <Footer instance={namingConfig.instanceName} socialLinks={socialConfig}/>
        </main>
    );
}
