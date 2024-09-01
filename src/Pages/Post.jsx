import React , {useEffect, useState} from 'react'
import Container from "../Components/Container/Container"
import service from '../Service/Services'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Button from '../Components/Button';
import parse from "html-react-parser"

function Post() {

    const [post , setPost] = useState(null);
    const navigate = useNavigate();
    const {slug} = useParams(); // get the slug parameter from the URL.

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && (userData ? userData.$id === post.userId : false);

    // UseEffect is used to Set the Value to the post (state variable) and navigate the user to home if no post is fetched
    useEffect(()=>{
      //  If slug is present means user is on a post URL
      if(slug){
        service.getPost(slug).then((post)=>{  // getPost service will give a post. IF post is present then set its value in the useState Post else navigate the user to the Home Page.
          if(post){
            setPost(post);
          } 
          else{
            navigate("/")
          }
        })
      }
      //  No Slug : Navigate the user to the home
      else{
        navigate("/")
      }
    }, [slug , navigate])


    const deletePost = () => {
      service.deletePost(post.$id).then((status)=>{
        if(status){
          service.deleteFile(post.featureImage);
          navigate('/') // Redirect to Home Page after Deleting the Post!!
        }
      })
    }

  return post ? (
    <div className='w-full'>
      <Container>
      <h1 className="text-3xl font-sans font-semibold m-4 text-red-500 bg-clip-text"
      style={{ textShadow: '3px 2px 2px rgba(150, 0, 0, 0.3)' }}
      >
        {post.title}
      </h1>


        <div className='mt-5'>
          <img src={service.getFilePreview(post.featureImage)} alt={post.title} className="rounded-2xl w-2/6 m-2 shadow-gray-400 shadow-md"/>
          {isAuthor && (
            <div>
              <Link to={`/edit-post/${post.$id}`}>
                <Button
                  buttonText="Edit"
                  bgColor="bg-green-500"
                  className="mr-2 hover:bg-green-600"
                />
              </Link>

              <Button
                bgColor="bg-red-500" 
                buttonText = "Delete"
                onClick={deletePost}
                className='bg-red-500 hover:bg-red-600'
                title="Delete Permanently"
              />
            </div>
          )}
        </div>

        <div>
          <div className='text-black rounded-lg py-2 m-2 mt-5'>
            {parse(post.content)}
          </div>
        </div>
      </Container>
    </div>
  ) : <h1>No post Available</h1>
}

export default Post