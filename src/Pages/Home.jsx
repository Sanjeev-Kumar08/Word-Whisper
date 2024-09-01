import React , {useEffect , useState} from 'react'
import service from '../Service/Services'
import Container from '../Components/Container/Container';
import PostCard from '../Components/PostCard';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function Home() {

    const [posts, setPosts] = useState([]);
    const authStatus = useSelector((state) => state.auth.status)


    useEffect(()=>{
        service.getAllPosts().then((posts)=>{
            if(posts){
                setPosts(posts.documents);
            }
        })
    },[])

    const userData = useSelector(state => state.auth.userData)
    console.log(userData);
    

  if(posts.length > 0 && authStatus){
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                {posts.map((post)=>(
                    <div className='p-2 w-1/4' key={post.$id}>
                        <PostCard {...post}/>
                    </div>
                ))}
                </div>
            </Container>
        </div>
    )
  }
  else if(authStatus){
    return (
    <div className="w-full py-8 mt-4 text-center bg-gray-300 h-screen">
        <Container>
        <div className="flex flex-wrap justify-center items-center h-screen">
                <div className="font-open-sans p-2 w-full">
                    <h1 className="text-4xl text-center text-red-600 font-bold mb-4 transition-colors duration-300">
                        No Post Available 
                    </h1> 
                    <h2 className="text-lg text-center text-black mb-8 transition-colors duration-300">Want To Write?
                        <Link to="/add-post">
                            <span className='ml-2 underline cursor-pointer text-blue-600 font-semibold'>Add Post</span>
                        </Link>
                    </h2>
                </div>
            </div>
        </Container>
    </div>
    )
  }
  else {
    return (
    <div className="w-full text-center bg-gray-300 h-screen">
        <Container>
            <div className="flex flex-wrap justify-center items-center h-screen">
                <div className="font-open-sans p-2 w-full">
                    <h1 className="text-4xl text-center font-extralight font-serif text-transparent bg-gradient-to-t from-gray-700 via-red-600 to-red-800 bg-clip-text mb-4 transition-colors duration-300">
                        Please Log In to Read Posts!
                    </h1> 
                    <h2 className="text-lg text-center text-black mb-8 transition-colors duration-300">Don't Have an Account? 
                        <Link to="/signup">
                            <span className='ml-2 underline cursor-pointer text-blue-600 font-semibold'>Sign Up</span>
                        </Link>
                    </h2>
                </div>
            </div>
        </Container>
    </div>)
  }
}

export default Home;