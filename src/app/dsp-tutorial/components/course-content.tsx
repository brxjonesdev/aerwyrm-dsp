import React from 'react';

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { getAllPosts } from '@/lib/posts';
import { BlogPostCard } from '@/components/ui/post-card';
import { Placeholder } from '@/components/ui/placeholder';

export default function CourseContent() {
  const blogPosts = getAllPosts();
  const courseContent = blogPosts
    .filter((post) => post.category === 'dsp')
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .filter((post) => post.show !== false)
    // sort by post.order
    .sort((a, b) => (a.order || 0) - (b.order || 0));

  return (
    <Card className="lg:w-8/12 h-full overflow-y-scroll flex-1 border-2">
      <CardHeader>
        <CardTitle>Explore Concepts</CardTitle>
        <CardDescription>
          Interactive summaries and visual demos from DSP and electronic music
          theory.
        </CardDescription>
        <CardAction>
          {/* Optional: Add buttons or toggles for filters, book selection, or playback */}
        </CardAction>
      </CardHeader>
      <CardContent className='flex-1'>
        {courseContent.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
          {courseContent.length === 0 && (
                  <Placeholder
                  size='lg'
                  title='No content on this topic... yet!'
                  description='Currently, compiling synthesis concepts and examples. Check back later for updates.'
                  className='h-full'
        
                  />
                )}
      </CardContent>
    </Card>
  );
}
