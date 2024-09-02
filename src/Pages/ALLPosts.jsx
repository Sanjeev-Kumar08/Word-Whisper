import React, { useEffect } from 'react'
import service from '../Service/Services'
import Container from '../Components/Container/Container'
import PostCard from '../Components/PostCard';
import { Link } from 'react-router-dom';

function ALLPosts() {

    const [posts, setPosts] = React.useState([]); // ALl the posts from the appwrite will be in an array

    useEffect(()=>{
        service.getAllPosts([]).then((posts)=>{
            if(posts){
                setPosts(posts.documents);
            }
        })
    }, [])

  return (
    <div className='flex flex-wrap h-screen'>
        <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {
                    posts && posts.length > 0 ? (
                        posts.map((post)=>(
                            <div className='p-2 w-1/4' key={post.$id}>                     
                                <PostCard {...post}/>
                            </div>
                        )) 
                    ) : (
                        <Container>
                            <div className="flex flex-wrap justify-center items-center h-screen">
                                <div className="font-open-sans p-2 w-full">
                                    <h1 className="font-serif text-4xl text-center text-red-600 font-bold mb-4 transition-colors duration-300">
                                        No Post Available!
                                    </h1> 
                                    <h2 className="text-lg text-center text-black mb-8 transition-colors duration-300">Want to Write Some?
                                        <Link to="/add-post">
                                            <span className='ml-2 underline cursor-pointer text-blue-600 font-semibold'>Add Post</span>
                                        </Link>
                                    </h2>
                                </div>
                            </div>
                        </Container>
                    )
                }
            </div>
        </Container>
        </div>
    </div>
  )
}

export default ALLPosts;