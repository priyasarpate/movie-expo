import Image from "next/image";
import Navbar from "./components/navbar/Navbar";
import Popular from "./components/sidebar/Popular";
import SidebarApi from "./components/sidebar/SidebarApi";
import Dashboard from "./components/dashboard/Dashboard";

export default function Home() {
  return (
    <main className="flex overflow-x-hidden	">
        <Navbar/>
        <Dashboard /> 
        {/* <Popular/> */}
        <SidebarApi />
    </main>
  );
}
