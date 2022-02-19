import React from 'react'
import StoryCard from './StoryCard';
const stories = [
    {   
        id:1,
        name: "Tyson Lukale",
        src: "https://links.papareact.com/zof",
        profile: "https://links.papareact.com/l4v",
    },
    {   id:2,
        name: "Gabby Wangare",
        src: "https://links.papareact.com/4zn",
        profile: "https://links.papareact.com/kxk",
    },
    {   id:3,
        name: "Tyson Lukale",
        src: "https://links.papareact.com/zof",
        profile: "https://links.papareact.com/l4v",
    },
    {   name:4,
        name: "Gabby Wangare",
        src: "https://links.papareact.com/4zn",
        profile: "https://links.papareact.com/kxk",
    },

];

const Stories = () => {
  return (
      <div className='flex justify-center space-x-3 mx-auto'>
          {
              stories.map(story => (
                  <StoryCard key={story.id} name=  {story.name} src={story.src} profile={story.profile}/>
              ))
          }
          
    </div>
  )
}

export default Stories