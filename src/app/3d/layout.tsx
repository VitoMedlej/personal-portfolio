import type { Metadata } from "next";
import ContextWrapper from "../hooks/ContextWrapper";
// import Starter from "./Starter/Starter";
import '../../Styles/3d.css'

export const metadata: Metadata = {
    title: "Vito Medlej | Lebanese Fullstack Typescript Dev Portfolio",
    description: "Full-stack Typescript Developer with 4+ years of experience in building complex web and mobile apps. Proficient in Next.js, Node.js, and MongoDB",
    icons: {
      icon: 'https://res.cloudinary.com/dwcu3wcol/image/upload/v1657099811/log_nkmcys.jpg'
    }
  };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        
      <body 
      style={{
        overflow:'hidden !Important',
        position:'relative',
         height: '100vh',
         display: 'flex',
          flexDirection: 'row', 
         justifyContent: 'space-between'
         }} >
      <ContextWrapper>
        {children}
        </ContextWrapper>

        </body>
    </html>
  );
}
