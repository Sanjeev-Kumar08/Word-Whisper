import React from 'react'

function Button({
    buttonText,
    type = "button",
    bgColor = "bg-green-500",
    textColor = "text-white",
    className = '',
    ...props // If Button got Extra Props. 
}) {
  return (
    <button
    type={type}
    className={`mt-8 -mb-4 py-1 text-lg rounded-xl ${bgColor} ${textColor} ${className}`}
    {...props}
    >{buttonText}
    </button>
  )
}

export default Button