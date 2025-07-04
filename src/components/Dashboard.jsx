import React from 'react'
import { SparklesPreview } from "./SparklesPreview";
import GooeyNav from "./GooeyNav/GooeyNav";


const Dashboard = () => {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];
  return (
    <div>
        <div style={{paddingTop: "5px",paddingBottom:"40px"}}>
            <GooeyNav items={navItems}/>
        </div>
        <SparklesPreview />
    </div>
  )
}

export default Dashboard
