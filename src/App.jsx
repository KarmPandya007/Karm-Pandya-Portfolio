import Navbar from './components/Navbar'
import Intro from './components/Intro'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Blogs from './components/Blogs'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Blogs />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
