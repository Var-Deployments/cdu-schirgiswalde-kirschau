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

const imprintData =
    JSON.parse(fs.readFileSync(
        path.join(process.cwd(), "config/imprint.json")
    ), "utf8");

export default function Imprint() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between base-main bg-white dark:bg-black text-black dark:text-white">
            <div className="flex flex-grow items-center justify-center flex-col">
                <div className="flex flex-col">
                <h1 className="font-bold text-3xl">Impressum</h1>
                <span className="font-semibold">Angaben gem. §5 TMG</span>
                    <div className="mt-4 flex flex-col font-light">
                        <span>{imprintData.name}</span>
                        <span>{namingConfig.instanceName}</span>
                        <span>{imprintData.streetAddress}</span>
                        <span>{imprintData.streetAddressLine2 ?? ""}</span>
                        <div className="flex flex-row gap-x-1">
                            <span>{imprintData.postalCode},</span>
                            <span>{imprintData.city}</span>
                        </div>
                        <span className="font-bold mt-4">Kontakt</span>

                        <div className="flex flex-row gap-x-1">
                            <span className="">E-Mail: {imprintData.contact}</span>
                        </div>

                        <div className="flex flex-col mt-4">
                            <span className="font-bold">Redaktionell verantwortlich</span>
                            <span>{imprintData.contentRepresentative.name}</span>
                            <span>{imprintData.contentRepresentative.streetAddress}</span>
                            <span>{imprintData.contentRepresentative.streetAddressLine2 ?? ""}</span>
                            <div className="flex flex-row gap-x-1">
                                <span>{imprintData.contentRepresentative.postalCode},</span>
                                <span>{imprintData.contentRepresentative.city}</span>
                            </div>
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
