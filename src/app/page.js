import Image from "next/image";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Dashoard from "./components/dashboard/Dashoard";

export default function Home() {
  return (
    <main className="flex overflow-x-hidden	">
        <Navbar/>
        <Dashoard /> 
        <Sidebar/>
    </main>
  );
}
