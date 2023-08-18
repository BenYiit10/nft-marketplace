import React from 'react'
import BlogCard from './BlogCard'

export default function BlogSection() {
  return (
    <section >
        <div className='page-container grid grid-cols-3 gap-10 2xl:grid-cols-4 max-lg:grid-cols-2 max-[520px]:grid-cols-1'>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
        </div>
    </section>
  )
}
