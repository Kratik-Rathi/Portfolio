import { useState } from 'react'
import { ThemeProvider } from './ThemeContext.jsx'
import Navbar      from './components/Navbar.jsx'
import Sidebar     from './components/Sidebar.jsx'
import Hero        from './components/Hero.jsx'
import Experience  from './components/Experience.jsx'
import TechStack   from './components/TechStack.jsx'
import Splash from './components/Splash.jsx'
import { Projects, Certifications, Footer } from './components/sections.jsx'

function PortfolioLayout() {
  const [entered, setEntered] = useState(false)

  return (
    <>
      <Splash onEnter={() => setEntered(true)} />
      <div style={{
        opacity: entered ? 1 : 0,
        transition: 'opacity 0.7s ease 0.1s',
        pointerEvents: entered ? 'auto' : 'none',
        minHeight: '100vh',
      }}>
        <Navbar />
        <div style={{ display: 'flex', paddingTop: 56 }}>
          <Sidebar />
          <main style={{ flex: 1, minWidth: 0, overflowX: 'hidden' }}>
            <Hero />
            <Experience />
            <TechStack />
            <Projects />
            <Certifications />
            <Footer />
          </main>
        </div>
      </div>
    </>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioLayout />
    </ThemeProvider>
  )
}
