import Image from "next/image";
import MainScreen from "./components/dashboard/MainScreen";
import SideBar from "./components/sidebar/SideBar";
import SecondSidebar from "./components/lastsidebar/SecondSidebar";

export default function Home() {
  return (
    <main className="flex">
        <SideBar/>
        <MainScreen />
        <SecondSidebar/>
    </main>
  );
}
