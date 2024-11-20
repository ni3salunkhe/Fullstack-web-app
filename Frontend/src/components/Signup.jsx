import React from 'react'
import Login from './Login'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";

function Signup() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <>
            <div>
                <div className="items-center justify-center flex h-screen">
                    <div className="modal-box">
                        <Link to='/'>
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </Link>
                        {/* if there is a button in form, it will close the modal */}
                        <form action="dialog" onSubmit={handleSubmit(onSubmit)}>
                            <h3 className="font-bold text-lg mt-3">signup</h3>
                            <div className='space-y-2'>
                                <span>Name</span>
                                <br />
                                <input type="text" 
                                name="Name" 
                                id="Name" 
                                placeholder="Enter your Full Name" 
                                className='w-80 rounded-md outline-none px-3 py-2 mt-2 bg-gray-100' 
                                {...register("fullname", { required: true })}/>
                                {errors.fullname && <span className='text-red-500 text-sm'>This field is required</span>}

                            </div>
                            <div className='space-y-2'>
                                <span>Email</span>
                                <br />
                                <input type="email" 
                                name="email" 
                                id="email" 
                                placeholder="Enter your Email" 
                                className='w-80 rounded-md outline-none px-3 py-2 mt-2 bg-gray-100' 
                                {...register("email", { required: true })}/>
                                {errors.email && <span className='text-red-500 text-sm'>This field is required</span>}

                            </div>
                            <div className='space-y-2'>
                                <span >Password</span>
                                <br />
                                <input type="password" name="pass" id="pass" placeholder="Enter your password" className='w-80 rounded-md outline-none px-3 py-2 mt-2 bg-gray-100' {...register("password", { required: true })}/>
                                {errors.password && <span className='text-red-500 text-sm'>This field is required</span>}

                            </div>
                            <div className='mt-5 flex justify-around'>
                                <button className='px-2 py-1 rounded-md bg-pink-500 hover:bg-pink-700 hover:cursor-pointer'>Sign in</button>
                                <p className='px-2 py-1'>Already Registered? <span onClick={() => { document.getElementById("my_modal_3").showModal() }} className='text-blue-500 cursor-pointer underline'>Login </span></p><Login />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
