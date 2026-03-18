import { memo, useCallback } from 'react'
import { m } from 'framer-motion'
import './Hero.css'

const ease = [.16, 1, .3, 1]

function Hero() {
    const go = useCallback((e, href) => {
        e.preventDefault()
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }, [])

    return (
        <section className="hero" id="hero">
            <div className="hero-glow" aria-hidden="true" />

            <div className="hero-content">
                <m.p
                    className="hero-eyebrow"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    Paraplanning & Support Services
                </m.p>

                <m.h1
                    className="hero-title"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4, ease }}
                >
                    Precision<br /><em>Paraplanning,</em><br />Built for You
                </m.h1>

                <m.p
                    className="hero-desc"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                >
                    Meticulous, FCA-compliant research and reporting that lets you focus entirely on your clients.
                </m.p>

                <m.div
                    className="hero-actions"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.1, ease }}
                >
                    <a href="#contact" className="btn-primary" onClick={(e) => go(e, '#contact')}>Get in touch</a>
                    <a href="#services" className="btn-outline" onClick={(e) => go(e, '#services')}>Explore services</a>
                </m.div>
            </div>
        </section>
    )
}

export default memo(Hero)
