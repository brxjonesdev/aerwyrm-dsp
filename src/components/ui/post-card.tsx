import Link from "next/link"
import Image from "next/image"

interface BlogPostCardProps {
  post: {
    id: string
    title: string
    date: string
    featured?: boolean
    show?: boolean
    blurb: string
    image: string
    slug: string
    category?: string
  }
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="flex items-center gap-4 py-4 hover:bg-white/10 transition-colors duration-200 rounded-lg p-4 text-black border-2"
      prefetch={false}
    >
      {post.image && (
        <div className="relative flex-shrink-0 size-20 rounded-md overflow-hidden">
          <Image
            src={post.image || "/placeholder.svg?height=80&width=80&query=abstract%20thumbnail" || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover"
            sizes="80px"
          />
        </div>
      )}
      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-semibold leading-tight line-clamp-2 text-white/80">{post.title}</h3>
        <p className="text-sm text-white/80 mt-1">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
          {post.category && (
            <span className="ml-2 text-xs inline-block rounded-full bg-cyan-400 px-2 py-0.5 font-medium text-white">
              {post.category}
            </span>
          )}
        </p>
        {post.blurb && <p className="text-sm  dark:text-gray-300 mt-2 line-clamp-2 text-cyan-400">{post.blurb}</p>}
      </div>
    </Link>
  )
}
