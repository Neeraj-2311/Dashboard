import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc'
import { AiOutlineEyeInvisible } from 'react-icons/ai'
import { AiOutlineEye } from 'react-icons/ai'
import { signIn } from 'next-auth/react';

export const Auth = ({session}) => {

    const [isRegister, setIsRegister] = useState(false);
    const [showPass, setShowPass] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        pwd: ''
    });

    async function handleGoogleSignIn(){
        signIn("google", {  callbackUrl: 'https://dashboard-next-neeraj.netlify.app/dashboard'})
    }

    const Register = () => {
        return(
            <div className='text-left w-96'>
                <h2 className='mb-3 font-bold text-5xl'>Register</h2>
                <p className='text-md'>Register to create an account</p>
                <div>
                    <button onClick={handleGoogleSignIn} className='flex flex-row items-center my-6 justify-center space-x-2 bg-white w-full rounded-lg h-7 px-5'>
                        <FcGoogle className='text-lg' />
                        <span className='text-xs'>Register with Google</span>
                    </button>
                    <div className='p-7 bg-white rounded-xl'>
                        <form onSubmit={handleSubmit} className='flex flex-col'>
                            <label htmlFor='email' className='text-sm'>Email address</label>
                            <input name='email' 
                                value={formData.email}
                                onChange={(e, val) => {
                                    setFormData((prev) => ({...prev, email: val}));
                                }}
                                required type='email' className='bg-[#F5F5F5] focus:bg-[#EAEAEA] outline-none text-sm px-4 h-10 flex rounded-lg mt-2 mb-4 items-center' />
                            <label htmlFor='email' className='text-sm'>Create Password</label>
                            <div className="relative mt-2 mb-4">
                                <div onClick={togglePassword} className='absolute cursor-pointer right-4 top-2'>
                                    { !showPass ? <AiOutlineEye className='text-xl text-black' />
                                        :<AiOutlineEyeInvisible className='text-xl text-black' />
                                    }
                                </div>
                                <input name='password' 
                                    value={formData.pwd}
                                    onChange={(e, val) => {
                                        setFormData((prev) => ({...prev, pwd: val}));
                                    }}
                                    required type={showPass ? 'text':'password'} className={`bg-[#F5F5F5] focus:bg-[#EAEAEA] outline-none text-sm ${!showPass && 'tracking-[0.125em]'} ${!showPass && 'font-[Verdana]'} pl-4 pr-10 w-full h-10 flex rounded-lg items-center`} />
                            </div>
                            <button type='submit' className='text-sm text-white bg-black w-full h-10 rounded-lg mt-4'>Register</button>
                        </form>
                    </div>
                    <div className='flex flex-row items-center space-x-2 justify-center my-5'>
                        <span className='text-sm'>Already have an account?</span>
                        <button onClick={handleSignIn} className='text-sm text-sky-600'>Sign in here</button>
                    </div>
                </div>
            </div>
        )
    };

    const LogIn = () => {
        return (
            <div className='text-left w-96'>
                <h2 className='mb-3 font-bold text-5xl'>Sign in</h2>
                <p className='text-md'>Sign in to your account</p>
                <div>
                    <button onClick={handleGoogleSignIn} className='flex flex-row items-center my-6 justify-center space-x-2 bg-white w-full rounded-lg h-7 px-5'>
                        <FcGoogle className='text-lg' />
                        <span className='text-xs'>Sign in with Google</span>
                    </button>
                    <div className='p-7 bg-white rounded-xl'>
                        <form onSubmit={handleSubmit} className='flex flex-col'>
                            <label htmlFor='email' className='text-sm'>Email address</label>
                            <input name='email' 
                                value={formData.email}
                                onChange={(e, val) => {
                                    setFormData((prev) => ({...prev, email: val}));
                                }}
                                required type='email' className='bg-[#F5F5F5] focus:bg-[#EAEAEA] outline-none text-sm px-4 h-10 flex rounded-lg mt-2 mb-4 items-center' />
                            <label htmlFor='email' className='text-sm'>Password</label>
                            <input name='password' 
                                value={formData.email}
                                onChange={(e, val) => {
                                    setFormData((prev) => ({...prev, email: val}));
                                }}
                                required type='password' className='bg-[#F5F5F5] focus:bg-[#EAEAEA] outline-none text-sm tracking-[0.125em] font-[Verdana] px-4 h-10 flex rounded-lg mt-2 mb-4 items-center' />
                            <button onClick={handleForgot} className='text-sm text-sky-600 w-[fit-content]'>Forgot password?</button>
                            <button type='submit' className='text-sm text-white bg-black w-full h-10 rounded-lg mt-4'>Sign In</button>
                        </form>
                    </div>
                    <div className='flex flex-row items-center space-x-2 justify-center my-5'>
                        <span className='text-sm'>{"Don't have an account?"}</span>
                        <button onClick={handleRegister} className='text-sm text-sky-600'>Register here</button>
                    </div>
                </div>
            </div>
        )
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Only Google Auth is working!");
        setIsRegister(true);
        setFormData({
            email: '',
            pwd: ''
        });
        setShowPass(false);
    }
    const handleForgot = (e) => {
        e.preventDefault()
        alert("forgot password functionality has not developed yet!");
    };
    const handleRegister = (e) => {
        e.preventDefault()
        setIsRegister(true);
        setFormData({
            email: '',
            pwd: ''
        });
        setShowPass(false);
    }
    const handleSignIn = (e) => {
        e.preventDefault();
        setIsRegister(false);
        setFormData({
            email: '',
            pwd: ''
        });
        setShowPass(false);
    }
    const togglePassword = () => {
        setShowPass(val => !val);
    }

    return(
        <div className='flex md:flex-row flex-col md:items-stretch relative items-center h-screen w-screen'>
            {/* <Link href='/main' className='p-4 absolute bottom-10 right-10 font-lg'>Skip auth</Link> */}
            <div className='flex items-center justify-center bg-black md:w-2/5 w-full md:py-0 py-6 md:mb-0 mb-6'>
                <span className='text-7xl font-semibold text-white'>Board.</span>
            </div>
            <div className='flex items-center justify-center w-3/5'>
                {isRegister ? Register()
                    :
                    LogIn()
                }
            </div>
        </div>
    )
}
