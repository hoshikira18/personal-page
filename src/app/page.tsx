import Image from "next/image";
import avatar from "../../public/static/home/khuyen-avt-2.png"
import SideBar from "./components/layout/SideBar";
const Home = () => {
  return (
    <div className="h-[1000px] w-full flex">
      <SideBar />
      <div className="w-0.5 h-full bg-gradient-to-b from-secondary to-primary"></div>

      <div className="p-20">
        <h1>Home</h1>
        <p>Welcome to the home page!</p>
      </div>
    </div>
  );
}

export default Home;