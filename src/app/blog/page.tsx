import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'Blog — MeetYourBot | Law Firm AI Tips & Insights',
  description: 'Tips, insights, and stories for law firms using AI chatbots. Learn how to capture more leads, automate client intake, and grow your firm.',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#0F172A] text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-black mb-4">The MeetYourBot Blog</h1>
          <p className="text-xl text-gray-300">
            Insights on lead capture, client intake, and what happens when your firm stops sleeping.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-20 px-4 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto">
          {posts.length === 0 ? (
            <div className="text-center text-gray-500 py-20">
              <p className="text-xl">No posts yet. Check back soon.</p>
            </div>
          ) : (
            <div className="grid gap-8">
              {posts.map(post => (
                <article key={post.slug} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
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
                  <h2 className="text-2xl font-black text-[#0F172A] mb-3 leading-tight">
                    <Link href={`/blog/${post.slug}`} className="hover:text-[#FF6B35] transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 text-lg mb-5 leading-relaxed">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-[#FF6B35] font-bold hover:text-[#FF8C69] transition-colors"
                  >
                    Read more →
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0F172A] py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-black text-white mb-4">Ready to stop losing after-hours leads?</h2>
          <p className="text-gray-400 mb-8">Your bot is waiting in its box.</p>
          <Link href="/pricing" className="inline-block bg-[#FF6B35] hover:bg-[#FF8C69] text-white px-8 py-4 rounded-full font-bold text-lg transition-colors">
            Meet Your Bot →
          </Link>
        </div>
      </section>
    </div>
  )
}
