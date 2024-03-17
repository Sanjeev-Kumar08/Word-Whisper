import React from 'react'
import logoimg from "../LogoImage/logo.jpg"

function Logo({width = '100px'}) {
  return (

    <div className="w-full"> {/* Container to center the image */}
      <img src={logoimg} className="rounded-full h-24 w-24 hover:shadow-xl [shadow-xl shadow-md:bg-gray-800 shadow-md:offset-y-4]" alt="Logo" /> {/* Applying Tailwind classes */}
    </div>

  )
}

export default Logo