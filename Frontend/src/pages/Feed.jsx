import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const Feed = () => {

  const [post, setPost] = useState([
    {
      _id: "1",
      image: "https://images.slivcdn.com/videoasset_images/blitz_assets/1700000084/thumbnail/1737046474075_TMKOC23_20_Landscape_Thumb.jpg?w=1349&q=high",
      caption: "TMKOC"
    }
  ])

  useEffect(() => {

    axios.get("http://localhost:3000/post")
    .then((res) => {

        setPost(res.data.post)
        
    })
  } , [])



  return (
    <section className='feed-section'>

      {
        post.length > 0 ? (
          post.map((item) => (
            <div key={item._id} className='post-card'>

              <img 
                src={item.image} 
                alt={item.caption} 
              />

              <p>{item.caption}</p>

            </div>
          ))
        ) : (
          <h1>No Post Available</h1>
        )
      }

    </section>
  )
}

export default Feed