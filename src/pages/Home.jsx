import { Outlet } from "react-router-dom"

import Navbar from "../components/Navbar"
import SideBar from "../components/SideBar"
import { Helmet } from "react-helmet-async"

const Home = () => {
  return (
    <div>
                    <Helmet>
        <title>Jobs | Available</title>
      </Helmet>
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
