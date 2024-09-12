import Sidebar from "../components/sideBar/sideBar"
import '../assets/home.css'
import RightSidebar from "../components/rightSidebar/rightSidebar"
import Navbar from "../components/navBar/navBar"

const Home = () => { 


return(
    <>
    <div className="container">
        <div className="side-bar">
            <Sidebar/>
        </div>
        <div className="nav-bar">
            <Navbar/>
        </div>
        <div className="r-side-bar">
            <RightSidebar/>
        </div>  
</div>
</>
)

}

export default Home