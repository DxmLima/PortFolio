import Layout from "@/components/layout/Layout"
import About5 from "@/components/sections/About5"
import Banner4 from "@/components/sections/Banner4"
import BlogPost5 from "@/components/sections/BlogPost5"
import Choose4 from "@/components/sections/Choose4"
import Consulting2 from "@/components/sections/Consulting2"
import Counter4 from "@/components/sections/Counter4"
import Marquee2 from "@/components/sections/Marquee2"
import Pricing2 from "@/components/sections/Pricing2"
import Project4 from "@/components/sections/Project2"
import Services5 from "@/components/sections/Services5"
import Team5 from "@/components/sections/Team5"
import Testimonial5 from "@/components/sections/Testimonial5"

export const metadata = {
    title: 'Software Developer | Mateus Lima Portfolio',
}

export default function Home() {
    return (
        <>
          <Layout headerStyle={5} footerStyle={5} >
                <Banner4 />
                <Project4 /> 
                <Marquee2 />
                           
            </Layout>
        </>
    )
}