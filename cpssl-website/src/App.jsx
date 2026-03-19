import { lazy, Suspense, memo } from 'react'
import { LazyMotion, domAnimation } from 'framer-motion'
import { Analytics } from '@vercel/analytics/react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import ScrollToTop from './components/ScrollToTop'
import './index.css'

const Services = lazy(() => import('./components/Services'))
const About = lazy(() => import('./components/About'))
const Process = lazy(() => import('./components/Process'))
const WhyCPSSL = lazy(() => import('./components/WhyCPSSL'))
const Testimonials = lazy(() => import('./components/Testimonials'))
const Contact = lazy(() => import('./components/Contact'))
const Footer = lazy(() => import('./components/Footer'))

function App() {
    return (
        <LazyMotion features={domAnimation} strict>
            <Navbar />
            <Hero />
            <Marquee />
            <Suspense fallback={null}>
                <Services />
                <About />
                <Process />
                <WhyCPSSL />
                <Testimonials />
                <Contact />
                <Footer />
            </Suspense>
            <Analytics />
            <ScrollToTop />
        </LazyMotion>
    )
}

export default memo(App)
