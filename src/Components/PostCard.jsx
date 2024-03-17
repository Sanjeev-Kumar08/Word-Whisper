import React from 'react'
import service from '../Service/Services'
import { Link } from 'react-router-dom'

function PostCard({title , featureImage , $id}) {
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            
            {/* Image Div */}
            <div className='w-full justify-center mb-4'>
                <img className='rounded-xl' src={service.getFilePreview(featureImage)} alt={title}/>
            </div>
            {/* Title */}
            <h2 className='text-xl font-bold'>{title}</h2>
        </div>
    </Link>
  )
}

export default PostCard