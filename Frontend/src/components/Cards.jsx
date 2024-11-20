import React from 'react'

function Cards({item}) {
    console.log(item);
    return (
        <>
            <div className='mt-5 my-5 p3'>
                <div className="card bg-base-100 w-96 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white">
                    <figure>
                        <img
                            src={item.image}
                            alt="Book" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {item.name}
                            <div className="badge badge-secondary">{item.category}</div>
                        </h2>
                        <p>{item.title}</p>
                        <div className="card-actions justify-between">
                            <div className="badge badge-outline p-4">${item.price}</div>
                            <div className="cursor-pointer badge badge-outline p-4 hover:bg-pink-500 hover:text-white">Buy Now</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards
