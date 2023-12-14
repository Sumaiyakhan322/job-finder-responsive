import { Outlet } from "react-router-dom"

import Navbar from "../components/Navbar"
import SideBar from "../components/SideBar"

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="px-5 md:px-20 flex  flex-col md:flex-row">
        <div className="md:w-2/12">
          <SideBar></SideBar>
        </div>
        <div className="md:w-10/12 bg-[#1E293B] rounded-md mt-10 md:mt-0">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  )
}

export default Home
