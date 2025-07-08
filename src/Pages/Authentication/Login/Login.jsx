import React, { use, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../Context/AuthContext';
import { Link } from 'react-router';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router';
// import { data } from 'react-router';

const Login = () => {
    useEffect(() => {
        document.title = "Login";
    }, [])

    const location = useLocation()
    const navigate = useNavigate()

    const { register
        , handleSubmit,
        formState: { errors }
    } = useForm();
    const { signIn, signInWithGoogle } = use(AuthContext)

    const onSubmitData = (data) => {
        // console.log(data);
        // login in with email and password 
        signIn(data.email, data.password)
            .then(result => {
                console.log(result)

                // after 1 seconds automatic navigate the user homepage  || user last Page 
                setTimeout(() => {
                    navigate(`${location.state ? location.state : '/'}`)
                }, 1000)

            }).catch(erro => {
                alert(erro)
            })
    }

    const handleLoginwithGoogle = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result)

                // after 1 seconds automatic navigate the user homepage  || user last Page 
                setTimeout(() => {
                    navigate(`${location.state ? location.state : '/'}`)
                }, 1000)
            })
            .catch(error => {
                console.log(error)
            })
    }


    return (
        <div className="flex min-h-screen items-center justify-center py-8 px-4  relative">
            <div className="w-full md:w-[500px] max-w-md bg-white rounded-2xl shadow-lg p-8 md:p-10 relative md:-mt-45">
                {/* Logo and Title */}

                <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">Welcome Back!</h2>
                <form onSubmit={handleSubmit(onSubmitData)} className="space-y-5 text-black">
                    <div>
                        <label className="block  font-semibold mb-1">Email</label>
                        <input
                            type="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                            placeholder="Enter your email"
                            {...register('email', { required: true })}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">Email is required</p>}
                    </div>
                    <div>
                        <label className="block  font-semibold mb-1">Password</label>
                        <input
                            type="password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                            placeholder="Enter your password"
                            {...register('password', { required: true, minLength: 8 })}
                        />
                        {errors.password?.type === 'required' && (
                            <p className="text-red-500 text-sm mt-1">Password is required</p>
                        )}
                        {errors.password?.type === 'minLength' && (
                            <p className="text-red-500 text-sm mt-1">Password must be at least 8 characters long</p>
                        )}
                    </div>
                    <div className="flex justify-end">
                        <a className="text-blue-500 hover:underline text-sm cursor-pointer">Forgot password?</a>
                    </div>
                    <button
                        className="w-full cursor-pointer btn-primary hover:bg-blue-700 text-white font-semibold py-2 rounded-lg shadow transition"
                        type="submit"
                    >
                        Login
                    </button>
                </form>
                <div className="flex items-center my-6">
                    <div className="flex-grow h-px bg-gray-300"></div>
                    <span className="mx-3 text-gray-400">or</span>
                    <div className="flex-grow h-px bg-gray-300"></div>
                </div>
                <button
                    onClick={handleLoginwithGoogle}
                    className="w-full cursor-pointer flex items-center justify-center gap-2 text-black bg-white border border-gray-300 hover:bg-gray-50  font-semibold py-2 rounded-lg shadow transition"
                >
                    <svg aria-label="Google logo" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                    Login with Google
                </button>
                <p className="text-center mt-6 text-gray-600">
                    Don't have an account?{' '}
                    <Link className="text-blue-600 hover:underline font-semibold" to="/register">
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;