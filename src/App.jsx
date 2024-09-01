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



  if(!loading){ 
    return <div className="text-gray-600 flex flex-col">
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  }
  else{
    return <div className="flex justify-center items-center h-screen bg-gray-100">
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm w-full">
      <h1 className="text-center text-xl font-semibold text-gray-800">
        Welcome to our App!
      </h1>
    </div>
  </div>
  
  }
}

export default App;