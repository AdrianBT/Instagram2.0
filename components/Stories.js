import React from 'react'
import { faker } from '@faker-js/faker';
import { useEffect, useState } from "react";
import Story from './Story';
import {useSession} from "next-auth/react"

function Stories() {
    const [suggestions, setSuggestions] = useState([]); // react hook
    const {data: session} = useSession(); 

    // causing side-effects
    useEffect(() => {
        // dummy value
        // but in reality it would be a network request
        const suggestions = [...Array(20)].map((_, i) => ({
            ...faker.helpers.contextualCard(),
            id: i,
        }));

        setSuggestions(suggestions);

    }, [])
    // useEffect(function, dependency);
 
 
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
                key={profile.id} 
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
