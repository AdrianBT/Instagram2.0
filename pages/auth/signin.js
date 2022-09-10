import React from 'react';
import { getProviders, signIn as SignIntoProviders, useSession} from "next-auth/react";
import Header from '../../components/Header';


function signIn(providers) {
  return (
    <>
    <Header />

    <div className='flex flex-col items-center justify-center min-h-screen py-2 -mt-56 px-14 text-center'>
        <img className="w-80" src="https://links.papareact.com/ocw" alt=""/> 
        <p className='font-xs italic'>
            This is not a REAL app, it is just a project  
        </p>
        <div className='mt-40'>
             {Object.values(providers).map((provider) => (
             Object.values(provider).map(pvd => (
            <div key={pvd.name}>
                <button 
                 className='p-3 m-1 bg-blue-500 rounded-lg text-white'
                 onClick={() => SignIntoProviders(pvd.id, {callbackUrl: '/'})}>
                Sign in with {pvd.name}
                 </button>
            </div>
            ))
         ))}

         </div>
        
    </div>
  </>
  )
}

export async function getServerSideProps() {
       const providers = await getProviders();
    return {
        props: {
            providers,
        },
    };
}





export default signIn