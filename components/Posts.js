import React, { useEffect, useState } from 'react'
import { db } from '../firebase';
import Post from './Post'
import { onSnapshot, collection, query, orderBy,  } from "@firebase/firestore"




function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
    const unsubscribe = onSnapshot(query(collection(db, 'post'), orderBy('timestamp', 'desc')), snapshot => {
          setPosts(snapshot.docs);
        });
        //everytime when value in the backend changes it updates it 
        return unsubscribe;
    }, [db])
    
    console.log(posts)
  return (
    <div>
          {posts.map((post) => (
            <Post 
            key={post.id} 
            id={post.id}
            username={post.data().username}
            userImag={post.data().profileImg}    
            img={post.data().image}
            caption={post.data().caption}  
            />  
        ))}


   
    </div>

  );
}



export default Posts

