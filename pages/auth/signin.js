import React from 'react'
import { getProviders, signIn as SignIntoProviders} from "next-auth/react"

function signIn(providers) {
    console.log('providers ===', Object.values(providers))
  return (
    <>
    {Object.values(providers).map((provider) => (
      Object.values(provider).map(pvd => (
        <div key={pvd.name}>
        <button onClick={() => SignIntoProviders(pvd.id)}>
          Sign in with {pvd.name}
        </button>
      </div>
      ))
    ))}
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