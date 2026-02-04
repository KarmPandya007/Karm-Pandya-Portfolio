import React, { Suspense, lazy } from 'react'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import CustomCursor from './components/CustomCursor'

// Lazy load non-critical sections
const About = lazy(() => import('./components/About'))
const Skills = lazy(() => import('./components/Skills'))
const Projects = lazy(() => import('./components/Projects'))
const Blogs = lazy(() => import('./components/Blogs'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

const LoadingFallback = () => (
  <div className="flex h-20 w-full items-center justify-center bg-slate-50">
    <div className="h-6 w-6 animate-spin rounded-full border-2 border-blue-500 border-t-transparent"></div>
  </div>
)

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-100 selection:text-blue-700">
      <CustomCursor />
      <Navbar />
      <main>
        <Intro />
        <Suspense fallback={<LoadingFallback />}>
          <About />
          <Skills />
          <Projects />
          <Blogs />
          <Contact />
          <Footer />
        </Suspense>
      </main>
    </div>
  )
}

export default App
