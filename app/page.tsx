import Link from 'next/link'
import React from 'react'

function page() {
    return (
        <div className='text-center w-full py-10 h-[60vh] flex flex-col justify-center gap-10'>

            <h1 className='text-lg md:text-5xl font-bold'>Welcome to Cv/Resume maker...</h1>
            <div className='flex flex-col gap-4'>
                <Link href='/create'>
                    <button className='bg-neutral-600 p-1 md:p-2 rounded-lg w-2/3 md:w-2/6'>Create</button>
                </Link>
                <div className='w-5'></div>
                <Link href='/preview'>
                    <button className='bg-neutral-600 p-1 md:p-2 rounded-lg w-2/3 md:w-2/6 '>Preview Cv/Resume</button>
                </Link>
            </div>
        </div>
    )
}

export default page