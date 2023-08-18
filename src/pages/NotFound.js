import React from 'react'
import PageBanner from '../components/PageBanner'
import NotFoundSection from "../components/notFound/NotFound"
export default function NotFound() {
  return (
    <>
        <PageBanner className="mb-0" /> 
        <NotFoundSection />  
    </>
  )
}
