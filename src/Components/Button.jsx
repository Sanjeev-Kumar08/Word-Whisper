import React from 'react'

function Button({
    buttonText,
    type = "button",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    className = '',
    ...props // If Button got Extra Props. 
}) {
  return (
    <button
    type={type}
    className={`mt-3 mb-3 py-1 px-5 text-lg rounded-2xl ${bgColor} ${textColor} ${className}`}
    {...props}
    >{buttonText}
    </button>
  )
}

export default Button