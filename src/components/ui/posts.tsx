import { getAllPosts } from "@/lib/posts"
import { Placeholder } from "./placeholder"
import { BlogPostCard } from "./post-card"


export default function Posts() {
  const blogPosts = getAllPosts()
  const filteredPosts = blogPosts
    .filter((post) => post.show !== false)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))

  if (filteredPosts.length === 0) {
    return (
      <div className="mt-4">
        <Placeholder
          showIcon={false}
          title="No Posts Found"
          description="There are no posts available for this category... yet!"
        />
      </div>
    )
  }

  return (
    <section className="h-full mx-auto space-y-4 ">
      {filteredPosts.map((post) => (
        <BlogPostCard key={post.id} post={post} />
      ))}
    </section>
  )
}
