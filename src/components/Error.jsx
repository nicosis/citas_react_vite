import React from 'react'

const Error = ({mensaje}) => {
    return (
        <div className=' uppercase font-bold bg-red-600 rounded-md p-1 text-center text-white'>
            <p>{mensaje}</p>
        </div>
    )
}

export default Error