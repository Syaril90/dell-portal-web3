import React from 'react'
import { useMoralis } from 'react-moralis';

function Login() {
    const { authenticate } = useMoralis();
    return (
        <div className='flex flex-col w-full h-screen justify-center items-center'>
            <div className="flex items-center space-x-3 p-3 pr-5 border border-blue-700 rounded-lg">
                <img className='w-10' src="https://logowik.com/content/uploads/images/t_metamask-fox6185.jpg" alt="" />
                <button onClick={authenticate} className="">Login with MetaMask</button>
            </div>

        </div>
    )
}

export default Login