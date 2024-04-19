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
      <body className={inter.className}>{children}</body>
      </html>
  );
}