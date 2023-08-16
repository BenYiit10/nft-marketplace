import React from 'react'
import PageBanner from "../components/PageBanner"
import BlogSection from '../components/blog/BlogSection'
export default function Blog() {
  return (
    <>
        <PageBanner
            title="Blog"
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
        <BlogSection />
    </>
  )
}
