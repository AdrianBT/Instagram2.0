import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"
import { RecoilRoot } from "recoil"

function MyApp({ Component, pageProps: {session, ...pageProps} }) {
  return (
  <SessionProvider session = {session}> 
    <RecoilRoot>
     <Component {...pageProps} />
    </RecoilRoot>
  </SessionProvider>
  )
}

export default MyApp

{/* sessionProvider keeps the session updated and synced between tabs/windows  */}
{/* surronding it as a gobal store so we can get the data whereever we want  */}