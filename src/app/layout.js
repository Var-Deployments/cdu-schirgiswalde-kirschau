import { Inter } from "next/font/google";
import "./globals.css";
import fs from "fs";
import path from "path";

const inter = Inter({ subsets: ["latin"] });

const metadataPath = path.join(process.cwd(), "config/metadata.json");
const metadataJSON = fs.readFileSync(metadataPath, "utf8");

export const metadata = JSON.parse(metadataJSON);

export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <head>
          {/* Theme Agent  */}
          <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            function getInitialTheme() {
              const storedTheme = localStorage.getItem('theme');
              return storedTheme ? storedTheme : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
            }

            function applyTheme(theme) {
              const root = document.documentElement;
              if (theme === 'dark') {
                root.classList.add('dark');
              } else {
                root.classList.remove('dark');
              }
            }

            const theme = getInitialTheme();
            applyTheme(theme);
          })();
        `}} />

      </head>
      <body className={inter.className + " overflow-x-hidden"}>{children}</body>
      </html>
  );
}