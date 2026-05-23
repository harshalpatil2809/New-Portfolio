
import Home from './pages/home/page'
import About from './pages/about/page'
import Skills from './pages/skills/page'
import Project from './pages/project/page'
import Contact from './pages/contact/page'
import CustomCursor from '@/components/CustomCursor'
import GitHub from './pages/github/page'
import PortfolioChat from '@/components/Chat/PortfolioChat'

const page = () => {
  return (
    <>
      <div >
        <CustomCursor />
        <Home />
        <About />
        <Skills />
        <Project />
        <GitHub />
        <Contact />
        <PortfolioChat />
      </div>
    </>
  )
}

export default page