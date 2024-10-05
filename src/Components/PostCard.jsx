import React from 'react'
import service from '../Service/Services'
import { Link } from 'react-router-dom'

function PostCard({title , featureImage , $id}) {
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-50 rounded-xl p-4 border-cyan-300 transform transition-all hover:bg-cyan-200 hover:border-cyan-400 shadow-lg hover:scale-110 duration-1000'>
            <div className='w-full justify-center mb-4 '>
                <img className='rounded-xl md:h-[25vh] md:w-[40vw]' src={service.getFilePreview(featureImage)} alt={title}/>
            </div>
            <h2 className='text-lg font-sans font-semibold' style={{ textShadow: '3px 2px 2px rgba(0, 0, 0, 0.1)' }}>
              {title}
            </h2>
        </div>
    </Link>
  )
}

export default PostCard