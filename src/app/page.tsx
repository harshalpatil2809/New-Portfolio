
import Home from '@/app/pages/home/page'
import About from './pages/about/page'
import Skills from './pages/skills/page'
import Project from './pages/project/page'
import Contact from './pages/contact/page'

const page = () => {
  return (
    <>
      <div >
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