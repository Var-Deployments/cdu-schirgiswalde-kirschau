import fs from "fs";
import path from "path";
import Image from "next/image";
import Footer from "@/components/footer";

const namingConfig =
    JSON.parse(fs.readFileSync(
        path.join(process.cwd(), "config/naming.json")
    ), "utf8");

const socialConfig =
    JSON.parse(fs.readFileSync(
        path.join(process.cwd(), "config/socials.json")
    ), "utf8");

const privacyPolicy =
    JSON.parse(fs.readFileSync(
        path.join(process.cwd(), "config/privacy.json")
    ), "utf8");
export default function PrivacyPolicy() {
    return (
        <main className="flex min-h-screen flex-col items-center base-main bg-white dark:bg-black text-black dark:text-white">
            <div className="pt-[10vh] flex items-center justify-center flex-col ">
                <h1 className="font-bold text-3xl">Datenschutzerklärung</h1>
                <span>Zuletzt aktualisiert: 26.04.2024</span>
                <p className="my-8 max-w-[90vw] md:max-w-[70vw]">
                    <b>1. Einleitung</b><br />
                    Willkommen auf der Website von {namingConfig.instanceName}. Diese Datenschutzrichtlinie (&ldquo;Richtlinie&ldquo;) erläutert, wie {namingConfig.instanceName} (&ldquo;wir&ldquo;, &ldquo;uns&ldquo; oder &ldquo;unser&ldquo;) Informationen über Sie verarbeitet, wenn Sie unsere Website besuchen. Indem Sie unsere Website nutzen, erklären Sie sich mit den in dieser Richtlinie beschriebenen Praktiken einverstanden. Wenn Sie mit unseren Richtlinien und Praktiken nicht einverstanden sind, besteht Ihre Möglichkeit darin, unsere Website nicht zu nutzen.<br /><br />

                    <b>2. Informationen, die wir sammeln</b><br />
                    Wir nutzen auf unserer Website lediglich einen Cookie zur Speicherung Ihrer Themeneinstellungen (Hell- oder Dunkelmodus), welcher ausschließlich lokal auf Ihrem Gerät gespeichert wird und keine personenbezogenen Daten erfasst.<br /><br />

                    <b>3. Datensicherheit</b><br />
                    Da wir keine personenbezogenen Daten erfassen, beschränken sich unsere Datensicherheitsmaßnahmen auf die Gewährleistung der Sicherheit und Integrität unserer Website.<br /><br />

                    <b>4. Öffentlich einsehbarer Quellcode</b><br />
                    Der Quellcode unserer Website ist <a className="underline" href="https://github.com/eliahilse/cdu-local-template" target="_blank">öffentlich zugänglich</a>. Wir laden Sie ein, diesen Quellcode zu nutzen, um unsere Praktiken und insbesondere diese Datenschutzerklärung selbst zu überprüfen. Dies fördert die Transparenz und unterstreicht unser Engagement für offene und nachvollziehbare digitale Praktiken.<br /><br />

                    <b>5. Änderungen unserer Datenschutzrichtlinie</b><br />
                    Änderungen an dieser Datenschutzrichtlinie werden auf dieser Seite veröffentlicht. Das Datum der letzten Überarbeitung der Datenschutzrichtlinie wird stets am Anfang der Seite angezeigt. Es liegt in Ihrer Verantwortung, sicherzustellen, dass Sie unsere Website sowie diese Datenschutzrichtlinie regelmäßig besuchen, um sich über Änderungen zu informieren.<br /><br />

                    <b>6. Kontaktinformationen</b><br />
                    Bei Fragen oder Anmerkungen zu dieser Datenschutzrichtlinie und unseren Datenschutzpraktiken kontaktieren Sie uns bitte unter: {privacyPolicy.contactEmail}.
                </p>


                <Footer instance={namingConfig.officeName} socialLinks={socialConfig}/>
            </div>
        </main>
    );
}
