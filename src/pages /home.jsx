import Sidebar from "../components/sideBar/sideBar"
import '../assets/home.css'
import RightSidebar from "../components/rightSidebar/rightSidebar"
import Navbar from "../components/navBar/navBar"
import TweetCard from "../components/posts/posts"

const Home = () => { 

const numbers = Array.from({ length: 3 }, (_, i) => i + 1);
return(
    <>
    <div className="container">
        <div className="side-bar">
            <Sidebar/>
        </div>
        <div className="main">
            <div className="nav-bar">
              <Navbar/>
            </div>
            

                {
                    numbers.map( 
                        (num)=> (
                            <div key={num} className="posts" >
                            <div >
                               <TweetCard/>  
                            </div>
                            </div>
                        )
                    )
                }
                
        </div>
        <div className="r-side-bar">
            <RightSidebar/>
        </div>  
</div>
</>
)

}

export default Home