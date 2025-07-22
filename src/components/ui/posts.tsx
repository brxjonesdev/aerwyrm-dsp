
import { getAllPosts } from '@/lib/posts';
import React from 'react'
import { BlogPostCard } from './post-card';
import { Placeholder } from './placeholder';

export default function Posts({filter}: {filter?: string}) {
    const blogPosts = getAllPosts();
    // filter based on filter, sort by date and if featured
    const filteredPosts = blogPosts
        .filter(post => !filter || post.category === filter)
        .filter(post => post.show !== false)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .filter(post => !post.featured);


    if (filteredPosts.length === 0) {
      return (
        <div className='mt-4'>
          <Placeholder
            showIcon={false}
            title="No Posts Found"
            description="There are no posts available for this category... yet!"
          />
        </div>
      )
    }

  return (
    <div className='h-full grid lg:grid-cols-2 md:grid-cols-1 gap-4'>
      {filteredPosts.map(post => (
        <BlogPostCard key={post.id} post={post} />
      ))}
    </div>
  )
}
