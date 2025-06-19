import React from 'react'
import { GoTriangleRight } from "react-icons/go";

const Body = () => {
  return (
    <div className='w-full h-[70vh] justify-center items-center flex'>

        <div className='flex-col text-6xl font-medium gap-4'>
            <div className='flex justify-center items-center mb-2 gap-2'>
                <p>Accounting</p>
                <p className='text-blue-500'>made simple</p>
            </div>
            <div className='ms-[17.5vh] mb-4'>
                <p className=''>for small business</p>
            </div>
            <div className='text-base font-normal mb-6'>
                <p className='ms-[17vh]'>Most bookkeeping software is accurate , but hard to use. We make the </p>
                <p className='ms-[25vh]'>opposite trade-off,and hope you don't get audited.</p>
            </div>
            <div className='text-xs ms-[39vh] gap-5 flex '>
                <button className='w-[23vh] rounded-3xl h-8 bg-gray-800 text-white'>Get 6 months free</button>
                <button className='w-[23vh] rounded-3xl h-8 flex justify-center border pt-[0.7vh] border-gray-300 bg-white'><GoTriangleRight className='text-[1.3rem] text-blue-500 mt-[0.2vh]'/>
                  <p className='mt-[0.5vh]'>Watch video</p>
                </button>
            </div>
        </div>

    </div>
  )
}

export default Body