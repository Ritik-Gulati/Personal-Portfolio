import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import LoadingScreen from './components/LoadingScreen';
import MouseGlow from './components/MouseGlow';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen bg-bg-deep text-white selection:bg-accent-blue/30 selection:text-white overflow-x-hidden font-sans relative antialiased">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div key="loader" exit={{ opacity: 0 }}>
            <LoadingScreen onComplete={() => setIsLoading(false)} />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col min-h-screen relative"
          >
            {/* Interactive Ambient Mouse Follower */}
            <MouseGlow />

            {/* Sticky Floating Header Navigation */}
            <Navbar />

            {/* Main Segmented Contents */}
            <main className="flex-grow z-10">
              
              {/* Home / Hero landing section */}
              <Hero />

              {/* Profile Background & metrics */}
              <About />

              {/* Professional categorized competencies progress gauges */}
              <Skills />

              {/* Work History vertical timelines */}
              <Experience />

              {/* Education academic glow credentials card set */}
              <Education />

              {/* Refined Git repository cards with dynamic filters */}
              <Projects />

              {/* Direct SMTP Contact secure entry form */}
              <Contact />

            </main>

            {/* Footer with copyright credits & social links */}
            <Footer />

            {/* Back to top scroll tracking mechanics */}
            <ScrollToTop />

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
