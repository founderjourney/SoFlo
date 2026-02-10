import useReveal from './hooks/useReveal'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import SmartFinancing from './components/SmartFinancing'
import Milestones from './components/Milestones'
import Services from './components/Services'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Partners from './components/Partners'
import Footer from './components/Footer'

export default function App() {
  useReveal()

  return (
    <div className="min-h-screen bg-soflo-dark">
      <Navbar />
      <Hero />
      <About />
      <SmartFinancing />
      <Milestones />
      <Services />
      <Blog />
      <Contact />
      <Partners />
      <Footer />
    </div>
  )
}
