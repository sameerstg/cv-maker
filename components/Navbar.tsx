import Link from 'next/link';
import React from 'react'


const Navbar = () => {
    return (
        <div className='py-10'>
            <div className="flex flex-col w-full px-7  text-center " >
                <Link href={"/"}>
                    <button>
                        <h1 className="mx-auto text-4xl font-bold">Auto Cv Maker</h1>
                    </button>
                </Link>
            </div>
            <div className='w-full h-[2px] bg-gray-500 mt-4'></div>
        </div>
    )
}
export default Navbar;