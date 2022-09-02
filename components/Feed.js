import React from 'react'
import Stories from './Stories'

function Feed() {
  return (
    <div className=' gird gird-cols-1 md:grid-cols-2
     md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl max-auto'>
        <section className='col-span-2'> 
        {/* Stories */}
        <Stories />
        {/* Posts */}
        </section>

        <section>
        {/* Mini profile */}
        {/* Suggestions */}
        </section>









    </div>
  )
}

export default Feed