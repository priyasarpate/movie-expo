import Image from "next/image";
import MainScreen from "./components/dashboard/MainScreen";
import SideBar from "./components/sidebar/SideBar";
import SecondSidebar from "./components/lastsidebar/SecondSidebar";
import API from "./components/dashboard/API";

export default function Home() {
  return (
    <main className="flex">
        <SideBar/>
        <MainScreen /> 
        <SecondSidebar/>
        {/* <API /> */}
    </main>
  );
}
