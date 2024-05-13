import Image from "next/image";
import Footer from "@/components/footer";
import fs from "fs";
import path from "path";
import BackToHome from "@/components/back-to-home";

const namingConfig =
    JSON.parse(fs.readFileSync(
        path.join(process.cwd(), "config/naming.json")
    ), "utf8");

const socialConfig =
    JSON.parse(fs.readFileSync(
        path.join(process.cwd(), "config/socials.json")
    ), "utf8");

const contactConfig =
    JSON.parse(fs.readFileSync(
        path.join(process.cwd(), "config/contact.json")
    ), "utf8");

export default function Contact() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between base-main bg-white dark:bg-black text-black dark:text-white">
            <div className="flex flex-grow items-center justify-center flex-col">
                <div className="flex flex-col">
                <h1 className="font-bold text-3xl">Kontakt</h1>
                <span className="">Kontaktieren Sie uns gerne!</span>
                <div className="mt-4 flex flex-col font-light">
                    <div className="flex flex-row gap-x-1">
                        <span className="">E-Mail: {contactConfig.email}</span>
                    </div>

                    <div className="flex flex-col mt-4">
                        <span className="font-bold">Pressekontakt</span>
                        <span>{contactConfig.press.name}</span>
                        <span>E-Mail: {contactConfig.press.email}</span>
                    </div>
                    <BackToHome className="transform translate-y-8"></BackToHome>

                    <div className="flex flex-row gap-x-2">
                </div>
                </div>
                </div>
            </div>
            <Footer instance={namingConfig.officeName} socialLinks={socialConfig}/>
        </main>
    );
}
