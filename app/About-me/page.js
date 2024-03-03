import React from 'react'
import Layout from "@/components/layout/Layout"
import About5 from "@/components/sections/About4"

function About() {
  return (
    <Layout headerStyle={5} footerStyle={5} className='bg-black'> 
      <About5 />
    </Layout>
  )
}

export default About