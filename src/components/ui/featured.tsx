import { getAllPosts } from '@/lib/posts';
import React from 'react'
import { BlogPostCard } from './post-card';

export default function Featured() {
  const blogPosts = getAllPosts();
  const featuredPosts = blogPosts.filter(post => post.featured);
  return (
    <div className='h-full'>
      {featuredPosts.map(post => (
        <BlogPostCard key={post.id} post={post} />
      ))}
    </div>
  )
}
