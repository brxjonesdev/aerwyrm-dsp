import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface BlogPostCardProps {
  post: {
    id: string;
    title: string;
    date: string;
    blurb: string;
    image: string;
    slug: string;
    category?: string;
  };
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl gap-0 p-0 border-none hover:border-2 border-cyan-500/10 h-full ">
      <Link href={`/blog/${post.slug}`} className="block" prefetch={false}>
        <div className="relative h-48 w-full">
          {post.image ? (<Image
            src={
              post.image ||
              "/placeholder.svg?height=400&width=600&query=abstract%20blog%20post"
            }
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />): (
            <div className="h-full w-full bg-cyan-200 flex items-center justify-center">
            
            </div>
          )}
        </div>
      </Link>

      <CardHeader className="flex-grow p-4">
        <CardTitle className="text-xl font-bold leading-tight max-w-xl">
          <Link href={`/blog/${post.slug}`} prefetch={false}>
            {post.title}
          </Link>
        </CardTitle>
        <CardDescription className="text-sm text-gray-500 dark:text-gray-400">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
          {post.category && (
            <span className="ml-2 text-sm inline-block rounded-full bg-gray-100 px-2 py-0.5 font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
              {post.category}
            </span>
          )}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-grow p-4 pt-0">
        <p className="line-clamp-3 text-gray-700 dark:text-gray-300 text-sm">
          {post.blurb}
        </p>
      </CardContent>

      <div className="p-4 pt-0">
        <Button asChild variant="link" className="px-0">
          <Link href={`/blog/${post.slug}`} prefetch={false}>
            Read More
          </Link>
        </Button>
      </div>
    </Card>
  );
}
