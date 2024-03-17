import React from 'react'

function SampleWrapper({children}) {
  return (
    <div>
        <h1>Sample Wrapper!!</h1>
        {children}
    </div>
  )
}

export default SampleWrapper