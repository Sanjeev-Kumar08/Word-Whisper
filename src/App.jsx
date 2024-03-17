import { useEffect , useState } from "react"
import authService from "./Service/Auth"
import {useDispatch} from "react-redux"
import { logIn , logOut } from "./Store/authSlice";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { Outlet } from "react-router-dom";

function App() {

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(logIn(userData));
      }
      else{
        dispatch(logOut());
      }
    })
    .catch(() => {`Error while fetching user data.`})
    .finally(()=>setLoading(false))
  } ,[])

  if(!loading){ // Data has been Loaded . then Display it on the page
    return <div className="text-red-500 flex flex-col">
      {/* <h1>Welcome to Our App</h1> */}
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  }
  else{
    return <h1 className="text-center mt-20">Loading Content... Please Wait</h1>
  }
}

export default App;