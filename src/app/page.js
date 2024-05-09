import fs from "fs";
import path from "path";
import NavBar from '../components/navbar.jsx';
import Footer from '../components/footer.jsx';
import ShowcasedPeople from "@/components/showcased-people";

const landingPageConfig = JSON.parse(fs.readFileSync(
    path.join(process.cwd(), "config/landing-page.json")
), "utf8");

const namingConfig =
    JSON.parse(fs.readFileSync(
        path.join(process.cwd(), "config/naming.json")
    ), "utf8");

const socialConfig =
    JSON.parse(fs.readFileSync(
        path.join(process.cwd(), "config/socials.json")
    ), "utf8");

export default function Home() {
    return (
        <main
            className="flex min-h-screen max-w-[100vw] flex-col items-center justify-center p-24 pb-0 bg-white dark:bg-neutral-950">
            <NavBar instance={namingConfig.officeName}/>
            <div
                className="relative w-[100vw] py-[25vh] overflow-x-clip overflow-y-visible text-center h-[100vh]"

            >
                <div className="absolute w-full h-full transform -translate-x-[50%] text-center z-20 text-transparent inline-block text-6xl font-bold bg-gradient-to-r from-gray-700 via-gray-900 to-black dark:from-gray-300 dark:via-gray-50 dark:to-white bg-clip-text" dangerouslySetInnerHTML={{__html: landingPageConfig.headlineText}}></div>
                <div className="z-10 opacity-50 dark:opacity-20 absolute -top-[20vh] left-0 w-[100vw]"><img className="object-cover w-[100vw] h-[120vh]" src="/img/header_bg.png"></img></div>
            </div>
            <ShowcasedPeople/>
            <Footer instance={namingConfig.officeName} socialLinks={socialConfig}/>
        </main>
    );
}
