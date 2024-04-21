import fs from "fs";
import path from "path";
import NavBar from '../components/navbar.jsx';

const landingPageConfigPath = path.join(process.cwd(), "config/landing-page.json");
const landingPageConfig = JSON.parse(fs.readFileSync(landingPageConfigPath, "utf8"));

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-white dark:bg-neutral-950">
        <NavBar instance={landingPageConfig.officeName}/>
        <div className="p-2 text-center text-transparent inline-block text-6xl font-bold bg-gradient-to-r from-gray-700 via-gray-900 to-black dark:from-gray-300 dark:via-gray-50 dark:to-white bg-clip-text "
             dangerouslySetInnerHTML={{ __html: landingPageConfig.headlineText }}
        ></div>
    </main>
  );
}
