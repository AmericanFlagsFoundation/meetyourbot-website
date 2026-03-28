import { getAllPosts, getPostBySlug } from '@/lib/posts'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map(post => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  if (!post) return { title: 'Post Not Found — MeetYourBot' }
  return {
    title: `${post.title} — MeetYourBot Blog`,
    description: post.excerpt,
  }
}

function renderMarkdown(content: string): string {
  return content
    // H1
    .replace(/^# (.+)$/gm, '<h1 class="text-4xl font-black text-[#0F172A] mt-10 mb-4">$1</h1>')
    // H2
    .replace(/^## (.+)$/gm, '<h2 class="text-3xl font-black text-[#0F172A] mt-10 mb-4">$2</h2>')
    // H3
    .replace(/^### (.+)$/gm, '<h3 class="text-2xl font-bold text-[#0F172A] mt-8 mb-3">$1</h3>')
    // Bold
    .replace(/\*\*(.+?)\*\*/g, '<strong class="font-bold text-[#0F172A]">$1</strong>')
    // Italic
    .replace(/\*(.+?)\*/g, '<em class="italic">$1</em>')
    // Unordered list items
    .replace(/^- (.+)$/gm, '<li class="ml-5 list-disc text-gray-700 leading-relaxed mb-1">$1</li>')
    // Wrap consecutive li items in ul
    .replace(/(<li[^>]*>.*<\/li>\n?)+/g, '<ul class="my-4 space-y-1">$&</ul>')
    // Paragraphs (non-empty lines not starting with HTML tags)
    .replace(/^(?!<[a-z])(.+)$/gm, '<p class="text-gray-700 leading-relaxed text-lg mb-4">$1</p>')
    // Remove empty paragraphs
    .replace(/<p[^>]*>\s*<\/p>/g, '')
    // Line breaks
    .replace(/\n{3,}/g, '\n\n')
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  const html = renderMarkdown(post.content)

  return (
    <div>
      {/* Header */}
      <section className="bg-[#0F172A] text-white py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-[#FF6B35] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
              {post.category}
            </span>
            <span className="text-gray-400 text-sm">
              {new Date(post.date + 'T12:00:00').toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight mb-6">{post.title}</h1>
          <p className="text-xl text-gray-300">{post.excerpt}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </section>

      {/* Footer Nav */}
      <section className="py-12 px-4 bg-[#F8FAFC] border-t border-gray-200">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/blog" className="text-[#FF6B35] font-bold hover:text-[#FF8C69] transition-colors">
            ← Back to Blog
          </Link>
          <Link href="/pricing" className="bg-[#FF6B35] hover:bg-[#FF8C69] text-white px-6 py-3 rounded-full font-bold transition-colors">
            Meet Your Bot →
          </Link>
        </div>
      </section>
    </div>
  )
}
