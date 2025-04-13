import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import GallerySection from '../components/sections/GallerySection'

function Page() {
  return (
    <>
     <Header/>
     <main>
        <section className='w-screen pt-10'>
        <GallerySection/>
        </section>
     </main>
     <Footer/>
    </>
  )
}

export default Page
