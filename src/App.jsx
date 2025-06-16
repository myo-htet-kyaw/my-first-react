import React from 'react'

const App = () => {
  return (
    <div className='h-screen'>
    <div></div>
    {/* <div className='h-1/2 bg-lime-500'>App</div> */}
    <div className='bg-black text-white text-center h-1/5 flex items-center justify-center'>
      Hello World
    </div>
    <div className='h-3/5 flex justify-center items-center bg-sky-500 font-semibold text-3xl text-orange-500'>About</div>
    <div className='bg-yellow-400 text-center flex items-center justify-center h-1/5'>footer</div>

    <div className='flex  justify-content-between h-40'>
    <div className='w-1/5 bg-orange-300 flex justify-center items-center m-5'>Box-1</div>
    <div className='w-1/5 bg-orange-400 flex justify-center items-center m-5'>Box-2</div>
    {/* <div className='w-1/5 bg-orange-500 flex justify-center items-center m-5'>Box-3</div> */}
    <button className='w-1/5 bg-orange-500 text-white flex justify-center items-center m-5 hover:bg-sky-400 hover:text-black rounded-full'>Click</button>

    <div className='w-1/5 bg-orange-600 flex justify-center items-center m-5'>Box-4</div>
    <div className='w-1/5 bg-orange-700 flex justify-center items-center m-5'>Box-5</div>
    </div>

    </div>

    
    
  )
}

export default App