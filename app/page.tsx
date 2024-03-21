import React from 'react'

function page() {
    return (
        <div className='text-center w-full py-10'>

            <h1 className='text-3xl'>Welcome to cv/resume maker...</h1>
            <div className='flex flex-row items-center justify-center gap-5'>
                <button className='bg-neutral-600'>Create</button>
                <button className='bg-neutral-600'>My Cv/Resume</button>
            </div>
        </div>
    )
}

export default page