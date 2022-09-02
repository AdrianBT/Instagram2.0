import React from 'react'
import { faker } from '@faker-js/faker';
import { useEffect } from "react";


function Stories() {
 
    useEffect(() => {
        const Suggestions = [...Array(20)].map((_, i) => ({
            ...faker.helpers.contextualCard(),
            id: i,
        }));
    }, [])
 
 
   return (
    <div>
        {/* stories */}
        {/* stories */}
        {/* stories */}
        {/* stories */}
        {/* stories */}
        {/* stories */}



    </div>
  )
}

export default Stories
