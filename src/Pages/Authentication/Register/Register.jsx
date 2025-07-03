import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
import { Link } from 'react-router';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router';

const Register = () => {
        useEffect(() => {
            document.title = "Register";
        }, [])

        
    const location = useLocation()
    const navigate = useNavigate()

    const { register
        , handleSubmit
    } = useForm();

    const { createUser, signInWithGoogle } = useAuth()

    const onSubmitData = (data) => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                console.log(result)
                setTimeout(()=>{
                navigate(`${location.state ? location.state : '/login'}`)
            },1000)
            })
            .catch(error => {
                console.log(error)
            })
    }

    // sing up account with google account 
    const handleGoogleSignUp = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result)
                 // after 1 seconds automatic navigate the user homepage  || user last Page 
            setTimeout(()=>{
                navigate(`${location.state ? location.state : '/'}`)
            },2000)
            }).catch(errro => {
                console.log(errro)
            })
    }



    return (
        <div className="flex items-center justify-center  ">
            <div>
                <form onSubmit={handleSubmit(onSubmitData)} className="bg-white text-black p-8 rounded-xl shadow-lg md:w-[600px] max-w-md space-y-6">
                    <h2 className="text-3xl font-bold text-center text-[#CAEB66] mb-4">Register</h2>
                    <div>
                        <label htmlFor="name" className="block text-sm font-semibold  mb-1">
                            Name
                        </label>
                        <input
                            type="text"
                            {...register('name', { required: true })}
                            id="name"
                            name="name"
                            required
                            className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition "
                            placeholder="Enter your name"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-semibold  mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            {...register('email', { required: true })}
                            id="email"
                            name="email"
                            required
                            className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition "
                            placeholder="Enter your email"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-semibold  mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            {...register('password', { required: true, minLength: 8 })}
                            id="password"
                            name="password"
                            required
                            className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition "
                            placeholder="Enter your password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 text-white btn-primary font-bold rounded-lg shadow-md hover:from-purple-600 hover:to-blue-600 transition"
                    >
                        Register
                    </button>
                <p className='text-black  text-center'>Already have account <Link to='/login' className='text-blue-600 underline font-bold'>login</Link> </p>
                </form>

                <div className='md:mt-3'>
                    <p>Create account  with Google</p>
                    <button onClick={handleGoogleSignUp} className="btn w-full bg-white text-black border-[#e5e5e5]">
                        <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                        Login with Google
                    </button></div>
            </div>

        </div>
    );
};

export default Register;