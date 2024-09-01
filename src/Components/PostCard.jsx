import React from 'react'
import service from '../Service/Services'
import { Link } from 'react-router-dom'

function PostCard({title , featureImage , $id}) {
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-50 rounded-xl p-4 hover:bg-gray-100 hover:border-red-600 hover:border hover:shadow-sm hover:shadow-black'>
            
            {/* Image Div */}
            <div className='w-full justify-center mb-4 '>
                <img className='rounded-xl' src={service.getFilePreview(featureImage)} alt={title}/>
            </div>
            {/* Title */}
            <h2 className='text-md font-sans font-semibold'
              style={{ textShadow: '3px 2px 3px rgba(0, 0, 0, 0.3)' }}
            >{title}</h2>
        </div>
    </Link>
  )
}

export default PostCard