import React from 'react';
import Signup from './Signup';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
    return (
        <>
            <div>
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                        <form onSubmit={handleSubmit(onSubmit)}  method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        
                        <h3 className="font-bold text-lg mt-3">Login</h3>
                        <div className='space-y-2'>
                            <span>Email</span>
                            <br />
                            <input type="email" name="email" id="email" placeholder="Enter your password" className='w-80 rounded-md outline-none px-3 py-2 mt-2 bg-gray-100'
                            {...register("email", { required: true })}   />
                            {errors.email && <span className='text-red-500 text-sm'>This field is required</span>}
                        </div>
                        <div className='space-y-2'>
                            <span >Password</span>
                            <br />
                            <input type="password" name="pass" id="pass" placeholder="Enter your password" className='w-80 rounded-md outline-none px-3 py-2 mt-2 bg-gray-100' 
                            {...register("password", { required: true })}/>
                            {errors.password && <span className='text-red-500 text-sm'>This field is required</span>}
                        </div>
                        <div className='mt-5 flex justify-around'>
                            <button className='px-2 py-1 rounded-md bg-pink-500 hover:bg-pink-700 hover:cursor-pointer'>Login</button>
                            <p className='px-2 py-1'>Not Registered? <Link to="/signup" className='text-blue-500 cursor-pointer underline'>Signup</Link>
                        
                            </p>
                        </div>
                        </form>
                    </div>
                </dialog>
            </div>
        </>
    )
}

export default Login
