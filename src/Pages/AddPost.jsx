import React from 'react'
import Container from '../Components/Container/Container';
import PostForm from '../Components/Post-Form/PostForm';

function AddPost() {
  return (
    <div className='py-8'>
        <Container>
            <PostForm/>
        </Container>
    </div>
  )
}

export default AddPost;