import React from 'react'
import { faker } from '@faker-js/faker';
import { useEffect, useState } from "react";
import Story from './Story';
import {useSession} from "next-auth/react"

function Stories() {
    const [suggestions, setSuggestions] = useState([]); // react hook that allow you too update the value and rerender a part of the webpage 
    const {data: session} = useSession(); 

    // causing side-effects
    useEffect(() => {
     
        const suggestions = [...Array(20)].map((_, i) => ({
            ...faker.helpers.contextualCard(),
            id: i,
        }));

        setSuggestions(suggestions);

    }, [])
    
 
 
   return (
    <div className=' flex space-x-2 p-6 bg-white mt-8
     border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin
     scrollbar-thumb-black'>
            {session && (
                <Story 
                img={session.user.image} 
                username={session.user.name}
                />
            )}

        {suggestions.map((profile) => (
            <Story 
                key={profile.id} // adding a ket pervents it from rerender the whole thing and just adds/rerenders the news element 
                img={profile.avatar} 
                username={profile.username}
            />
        ))}
        {/* stories */}
        {/* stories */}
        {/* stories */}
        {/* stories */}
        {/* stories */}
        {/* stories */}



    </div>
  );
}

export default Stories
