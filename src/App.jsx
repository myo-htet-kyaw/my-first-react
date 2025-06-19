import React from 'react'
import im1 from './assets/image/p1.jpg';
import bmw from './assets/image/bmwp1.jpg';
import mercedes from './assets/image/mercedesp1.jpg';
import rollroyce from './assets/image/rollroycep1.jpg';

// const App = () => {
//   return (
//     <div className='h-screen'>
//     <div></div>
//     {/* <div className='h-1/2 bg-lime-500'>App</div> */}
//     <div className='bg-sky-500 text-white text-center h-1/5 flex items-center justify-center'>
//       Hello World
//     </div>
//     <div className='h-3/5 flex justify-center items-center bg-green-500 font-semibold text-3xl text-orange-500'>
//     <img src={im1} alt="" className='h-40 w-50' />
//     </div>
//     <div className='bg-yellow-400 text-center flex items-center justify-center h-1/5'>footer</div>

//     <div className='flex  justify-content-between h-40'>
//     <div className='w-1/5 bg-orange-300 flex justify-center items-center m-5'>Box-1</div>
//     <div className='w-1/5 bg-orange-400 flex justify-center items-center m-5'>Box-2</div>
//     {/* <div className='w-1/5 bg-orange-500 flex justify-center items-center m-5'>Box-3</div> */}
//     <button className='w-1/5 bg-orange-500 text-white flex justify-center items-center m-5 hover:bg-sky-400 hover:text-black rounded-full'>Click</button>

//     <div className='w-1/5 bg-orange-600 flex justify-center items-center m-5'>Box-4</div>
//     <div className='w-1/5 bg-orange-700 flex justify-center items-center m-5'>Box-5</div>
//     </div>

//     <div className='flex justify-evenly items-center w-screen h-52'>
//     <div className='box-border w-50 h-36 bg-green-300  items-center flex justify-center border-double border-4 border-orange-500 size-32'>Box-border</div>
//     <div className='box-content w-50 h-36 bg-green-500 items-center flex justify-center border-dashed border-4 border-orange-500'>Box-Content</div>
//     <div className='box-decoration-clone w-52 h-36 bg-green-600 items-center flex justify-center border-dotted p-5 border-4 border-orange-500'>box-decoration-clone</div>
//     <div className='box-decoration-slice w-50 h-36 bg-green-700 items-center flex justify-center border-none'>box-decoration-slice</div>
//     </div>

//     <div className='w-full h-72 bg-amber-200 border-4 flex my-5'>
//       <img src={im1} alt="" className='float-right justify-end flex w-72 h-48 me-2' />
//       <p className="font-serif">
//         <p className='underline decoration-green-400 inline'>Maybe we can live without libraries</p>
//       , people like you and me. Maybe. Sure, we're too old to change the world, but what about that kid, sitting down, opening a book, right now, in a branch at the local library and finding drawings of pee-pees and wee-wees on the Cat in the Hat and the Five Chinese Brothers? Doesn't HE deserve better? Look. If you think this is about overdue fines and missing books, you'd better think again. This is about that kid's right to read a book without getting his mind warped! Or: <p className='underline decoration-double inline'>maybe that turns you on, Seinfeld;</p> maybe that's how y'get your kicks. You and your good-time buddies.Maybe we can live without libraries, people like you and me. Maybe. Sure, we're too old to change the world, but what about that kid, sitting down, opening a book, right now, in a branch at the local library and finding drawings of pee-pees and wee-wees on the Cat in the Hat and the Five Chinese Brothers? Doesn't HE deserve better? Look. If you think this is about overdue fines and missing books, you'd better think again. This is about that kid's right to read a book without getting his mind warped! Or: maybe that turns you on, Seinfeld; maybe that's how y'get your kicks. You and your good-time buddies.Maybe we can live without libraries, people like you and me. Maybe. Sure, we're too old to change the world, but what about that kid, sitting down, opening a book, right now, in a branch at the local library and finding drawings of pee-pees and wee-wees on the Cat in the Hat and the Five Chinese Brothers? Doesn't HE deserve better? Look. If you think this is about overdue fines and missing books, you'd better think again. This is about that kid's right to read a book without getting his mind warped! Or:
//       </p>
//     </div>

//     <div className='flex flex-col-reverse h-25 w-full mt-12 justify-start gap-3'>
//       <div className='basis-40 bg-sky-300 flex justify-center items-center py-2 rounded-2xl'>1</div>
//       <div className='basis-40 bg-sky-400 flex justify-center items-center py-2 rounded-2xl'>2</div>
//       <div className='basis-40 bg-sky-500 flex justify-center items-center py-2 rounded-2xl'>3</div>
//     </div>

//     <div className='flex justify-evenly w-screen mt-5 h-48'>
//       <div className='w-48 border-2 text-white flex justify-center items-center bg-sky-500 text-fw-bolder bg-contain bg-cover bg-center hover:bg-[url("./assets/image/bmwp1.jpg")]'>BMW</div>
//       <div className='w-48 border-2 text-white flex justify-center items-center bg-red-500 text-fw-bolder bg-contain bg-cover bg-center hover:bg-[url("./assets/image/mercedesp1.jpg")]'>Mercedes</div>
//       <div className='w-48 border-2 text-white flex justify-center items-center bg-gray-700 text-fw-bolder bg-contain bg-cover bg-center hover:bg-[url("./assets/image/rollroycep1.jpg")]'>Roll-Royce</div>
//     </div>

//     <div className='flex justify-around mt-5'>
//       <div className='relative w-1/5 h-40 bg-sky-200 text-sky-600 flex justify-center items-center'>
//         <p className='font-medium'>
//           Hello
//         </p>
//         <div className='absolute top-0 left-0 bg-sky-400 text-white w-28 h-14 flex  justify-center items-center'>
//           <p className='font-medium'>World</p>
//         </div>
//       </div>

//       <div className='relative w-1/5 h-40 bg-fuchsia-200 text-fuchsia-700 flex justify-center items-center'>
//         <p className='font-medium'>
//           Hello
//         </p>
//         <div className='absolute bottom-0 left-0 w-24 bg-fuchsia-600 text-white h-14 flex  justify-center items-center'>
//           <p className='font-medium'>World</p>
//         </div>
//       </div>
//     </div>
    
    
//     </div>

    
    
//   )
// }

import Header from './header.jsx';
import Body from './body.jsx';
import Footer from './footer.jsx';

const App = () => {
  return (
    <>
    <Header/>
    <Body/>
    <Footer/>
    </>
    
  )
}

export default App