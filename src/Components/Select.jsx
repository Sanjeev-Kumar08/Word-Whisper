import React from 'react'

function Select({label, options, className = "" , ...props} , ref) {

    const Id = React.useId();
  return (
    <div className='w-full'>
        {/* label */}
        {label && <label className='text-black' htmlFor={Id} {...props}>{label}</label>}

        {/* Select */}
        <select 
        ref = {ref} // forwardRef
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        {...props}>
            {/* Options */}
            {options?.map((option)=>(
                <option key={option} value={option}>{option}</option>
            ))}
        </select>
    </div>
  )
}

export default React.forwardRef(Select);

