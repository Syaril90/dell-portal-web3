import React from 'react'
import { useState } from 'react'
import  { ethers} from 'ethers'
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_KEY
);

export default function Home(){
    const [loginState, setLoginState] = useState();

    const checkUser = async () => {
        const { data } = await supabase.from("user").select("*")
        console.log(`data`, data)
    }

    const login = async () => {
        setLoginState("Connecting to your wallet")
        if(!window.ethereum) {
            setLoginState("No MetaMask wallet. Please install");
            return;
        }

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const walletAddr = await signer.getAddress();
        console.log(`walletAddr`, walletAddr)

        setLoginState("Generating nonce");
        let response = await fetch("/api/authn/nonce", {
            method: "POST",
            body: JSON.stringify({
                walletAddr,
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })

        const { nonce } = await response.json();
        setLoginState("Please sign the nonce");
        const signature = await signer.signMessage(nonce);
        console.log(`signature`, signature)

        response = await fetch("/api/authn/wallet", {
            method: "POST",
            body: JSON.stringify({
                walletAddr,
                nonce,
                signature
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        setLoginState("Login completed");

        const { user, token } = await response.json();
        console.log(`user`, user)
        console.log(`token`, token)
        supabase.auth.setAuth(token);

    }

    return (
        <div className='flex flex-col w-full h-screen justify-center items-center'>
            <p className='mb-4 text-xs text-gray-700'>{loginState}</p>
            <div className="flex items-center space-x-3 p-3 pr-5 border border-blue-700 rounded-lg">
                <img className='w-10' src="https://logowik.com/content/uploads/images/t_metamask-fox6185.jpg" alt="" />
                <button onClick={login} className="">Login with MetaMask</button>
            </div>
            {/* <div className="mt-4 flex items-center space-x-3 p-3 pr-5 border border-blue-700 rounded-lg"><button onClick={checkUser} className="">Check user</button></div> */}
        </div>
        
    )
}
    

