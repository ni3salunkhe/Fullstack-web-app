import React from 'react'
import list from '../../public/list';
import Cards from '../components/Cards';
import {Link} from 'react-router-dom';
function course() {
  console.log(list)
  return (
    <>
      <div className='max-w-screen-2x1 container mx-auto px-4'>
        <div className='mt-28 items-center justify-center text-center'>
          <h1 className='font-semibold text-2xl md:text-4xl'>Glad to see you{" "} <span className='text-pink-500'>Here:)</span></h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Veniam eligendi
            explicabo ratione nulla quae.
            Ex, repudiandae? Sequi ut, dolorum adipisci, magni
            veritatis facilis, modi consectetur neque numquam illum consequatur voluptatum.
          </p>
          <Link to='/'>
            <button className='mt-6 px-4 py-2 bg-pink-500 text-white hover:bg-pink-700 cursor-pointer rounded-md'>
              Back
            </button>
          </Link>
          <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
            {
              list.map((item) => (
                <Cards item={item} key={item.id} />
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default course
