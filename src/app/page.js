import fs from "fs";
import path from "path";
import NavBar from '../components/navbar.jsx';
import Footer from '../components/footer.jsx';

const landingPageConfig = JSON.parse(fs.readFileSync(
     path.join(process.cwd(), "config/landing-page.json")
    ), "utf8");

const namingConfig =
    JSON.parse(fs.readFileSync(
        path.join(process.cwd(), "config/naming.json")
    ), "utf8");

export default function Home() {
  return (
    <main className="flex min-h-screen max-w-[100vw] flex-col items-center justify-center p-24 bg-white dark:bg-neutral-950">
        <NavBar instance={namingConfig.officeName}/>
        <div className="p-2 text-center text-transparent inline-block text-6xl font-bold bg-gradient-to-r from-gray-700 via-gray-900 to-black dark:from-gray-300 dark:via-gray-50 dark:to-white bg-clip-text "
             dangerouslySetInnerHTML={{ __html: landingPageConfig.headlineText }}
        ></div>
        <Footer instance={namingConfig.officeName}/>
    </main>
  );
}
