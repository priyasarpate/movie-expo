import Image from "next/image";
import MainScreen from "./components/dashboard/MainScreen";
import SideBar from "./components/sidebar/SideBar";

export default function Home() {
  return (
    <main className="flex gap-5 p-2">
        <SideBar/>
        <MainScreen />
    </main>
  );
}
