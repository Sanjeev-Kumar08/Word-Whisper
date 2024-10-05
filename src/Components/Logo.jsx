import React from 'react'
import logoimg from "../LogoImage/logo.jpg"

function Logo({width = '100px'}) {
  return (

    <div className="w-full">
      <img src={logoimg} className="rounded-full h-24 w-24 hover:shadow-xl [shadow-xl shadow-md:bg-gray-800 shadow-md:offset-y-4] hidden sm:block" alt="Logo" />
    </div>

  )
}

export default Logo