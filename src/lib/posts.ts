
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';


const postsDir = path.join(process.cwd(), '/src/posts/posts');

export function getPostSlugs() {
  return fs.readdirSync(postsDir)
  .filter((file) => file.endsWith('.mdx') || file.endsWith('.md'))
  .filter((file) => file !== 'template-post.mdx' && file !== 'template-post.md')
  ;  
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx?$/, '');
  const filePath = path.join(postsDir, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(filePath, 'utf8');

  const { content, data } = matter(fileContents);
  return {
    id: realSlug,
    title: data.title || '',
    date: data.date || '',
    featured: data.featured || false,
    category: data.category || '',
    blurb: data.blurb || '',
    show: data.show !== false, // Default to true if not specified
    image: data.image || '',
    slug: realSlug,
    content,
  };
}

export function getAllPosts() {
  return getPostSlugs().map((slug) => getPostBySlug(slug));
}
