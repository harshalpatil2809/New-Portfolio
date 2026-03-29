
import Home from '@/app/pages/home/page'
import About from './pages/about/page'
import Skills from './pages/skills/page'
import Project from './pages/project/page'
import Contact from './pages/contact/page'
import CoustomeArrow from './components/CoustomeArrow'

const page = () => {
  return (
    <>
      <div >
        <CoustomeArrow />
        <Home />
        <About />
        <Skills />
        <Project />
        <Contact />
      </div>
    </>
  )
}

export default page