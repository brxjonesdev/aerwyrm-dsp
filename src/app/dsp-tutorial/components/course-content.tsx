import React from 'react'

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { getAllPosts } from '@/lib/posts';

export default function CourseContent() {
    const blogPosts = getAllPosts();
    const courseContent = blogPosts
        .filter(post => post.category === "dsp")
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
        .filter(post => post.show !== false)

  return (
    <Card className="lg:w-8/12 h-full overflow-y-scroll flex-1 border-2">
      <CardHeader>
        <CardTitle>Explore Concepts</CardTitle>
        <CardDescription>
          Interactive summaries and visual demos from DSP and electronic music theory.
        </CardDescription>
        <CardAction>
          {/* Optional: Add buttons or toggles for filters, book selection, or playback */}
        </CardAction>
      </CardHeader>
      <CardContent>
        {courseContent.map(post => (
          <div key={post.id} className="py-2 border-b border-white/10">
            <h4 className="text-lg font-semibold">{post.title}</h4>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
