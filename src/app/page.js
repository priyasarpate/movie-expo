import Image from "next/image";
import MainScreen from "./components/dashboard/MainScreen";
import SideBar from "./components/sidebar/SideBar";
import API from "./components/dashboard/API";

export default function Home() {
  return (
    <main className="flex overflow-x-hidden	">
        <SideBar/>
        <MainScreen /> 
        <API />
    </main>
  );
}
