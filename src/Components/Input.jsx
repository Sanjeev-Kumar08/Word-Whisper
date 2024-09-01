import React, { useId } from 'react'

const Input = React.forwardRef(
    ({label, type = "text", className = "", ...props}, ref) => {

    const Id = useId();
        return (
        <div className='w-full'>
            {label && <label className='text-black' htmlFor={Id}>{label}</label>}
            <input 
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 focus:border-red-700 focus:shadow-sm focus:shadow-red-300 duration-300 border border-gray-200 w-full ${className}`}
            type={type}
            id={Id}
            ref = {ref}
            {...props}
            
            />
        </div>
        )
    }
)

export default Input