import React from 'react'
import Post from './Post'


const posts = [
    {
        id: '123',
        username: "ssssangha",
        userImag:'https://links.papareact.com/3ke',
        img: "https://links.papareact.com/3ke",
        caption: 'SUBCRIBE AND DESTROY THE LIKE BUTTON for the YT alforrithm',
    },

    {
        id: '123',
        username: "ssssangha",
        userImag:'https://links.papareact.com/3ke',
        img: "https://links.papareact.com/3ke",
        caption: 'SUBCRIBE AND DESTROY THE LIKE BUTTON for the YT alforrithm',
    },
];

function Posts() {
    console.log(posts);
    
  return (
    <div>
          {posts.map((post) => (
            <Post 
            key={post.id} 
            id={post.id}
            username={post.username}
            userImag={post.userImag}    
            img={post.img}
            caption={post.caption}  
            />  
        ))}


   
    </div>

  );
}



export default Posts

