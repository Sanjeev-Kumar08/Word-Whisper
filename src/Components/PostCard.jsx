import React from 'react'
import service from '../Service/Services'
import { Link } from 'react-router-dom'

function PostCard({title , featureImage , $id}) {
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-50 rounded-xl p-4 border-cyan-300 hover:bg-cyan-100 hover:border-cyan-400 hover:shadow-lg '>
            
            <div className='w-full justify-center mb-4 '>
                <img className='rounded-xl' src={service.getFilePreview(featureImage)} alt={title}/>
            </div>

            <h2 className='text-lg font-sans font-semibold' style={{ textShadow: '3px 2px 2px rgba(0, 0, 0, 0.2)' }}>
              {title}
            </h2>
        </div>
    </Link>
  )
}

export default PostCard