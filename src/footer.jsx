import React from 'react'

const Footer = () => {
  return (
    <div className='flex-col'>
        <div className='flex justify-center items-center font-medium text-gray-800 mb-8'>
            <p>Trusted by these six companies so far</p>
        </div>

        <div className='flex gap-[15vh] text-[1.6rem] ms-64 font-medium text-gray-700 mb-12'>
            <div>Transistor</div>
            <div>TUPLE</div>
            <div>StaticKit</div>
            <div>Mirage</div>
            <div>laravel</div>
        </div>

        <div className='w-full h-6 bg-blue-400 rounded-bl-2xl rounded-br-2xl'></div>
    </div>
  )
}

export default Footer