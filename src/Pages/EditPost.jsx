import React , {useState , useEffect} from 'react'
import Container from '../Components/Container/Container';
import PostForm from '../Components/Post-Form/PostForm';
import service from '../Service/Services'
import { useNavigate , useParams } from 'react-router-dom'

function EditPost() {
    const [post, setpost] = useState(null)

    const {slug} = useParams();
    const navigate = useNavigate();

    console.log(slug)

    useEffect(()=>{
        // If there is a value in slug, means user is on a post. Now if user is on a post then give it a option to Edit the Post otherwise just navigate to the Home-Page 
        if(slug){
            service.getPost(slug).then((post)=>{
                if(post){
                    setpost(post);
                }
            })
        }
        else{
            navigate("/")
        }
    } , [slug , navigate])

  return post ? (
    <div className='py-8'>
        <Container>
            <PostForm post = {post}/>
        </Container>
    </div>
  ) : <h1>No Post Found</h1>;
}

export default EditPost