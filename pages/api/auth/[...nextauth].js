import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import DiscordProvider from "next-auth/providers/discord";



export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET
    }),
    // ...add more providers here
  ],

  pages: {
    signIn:"/auth/signin",
  },
  callbacks: {
  async session({ session, token, user }) {
    // Send properties to the client, like an access_token from a provider.
    session.user.username = session.user.name
        .split(" ") //adrian Uchiha
        .join("")   //adrianUchiha
        .toLocaleLowerCase;


    
        session.user.uid = token.sub; // token.sub is the information from google 
        return session
   },
  },

});

{/* callbacks responsible for creating that session for the user that signin */}

 