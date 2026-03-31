import fs from "fs"
import path from "path"
import matter from "gray-matter"

const postsDirectory = path.join(process.cwd(), "content")

export interface Post {
  slug: string
  content: string
  title: string
  excerpt?: string
  date?: string
  [key: string]: any
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(postsDirectory)) return []
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames
    .filter(f => f.endsWith(".md"))
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, "")
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, "utf8")
      const { data, content } = matter(fileContents)
      return { slug, content, ...data } as Post
    })
    .sort((a, b) => {
      const dateA = a.date ?? ""
      const dateB = b.date ?? ""
      return dateA < dateB ? 1 : -1
    })
}

export function getPostBySlug(slug: string): Post | null {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  if (!fs.existsSync(fullPath)) return null
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)
  return { slug, content, ...data } as Post
}
