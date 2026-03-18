import { memo, useCallback } from 'react'
import { m } from 'framer-motion'
import './Hero.css'

const stats = [
    { value: 'FCA', label: 'Compliant' },
    { value: '100%', label: 'Dedicated' },
    { value: 'IFA', label: 'Focused' },
]

const ease = [.16, 1, .3, 1]
const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } }
}

function Hero() {
    const go = useCallback((e, href) => {
        e.preventDefault()
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }, [])

    return (
        <section className="hero" id="hero">
            <div className="hero-glow" aria-hidden="true" />

            <div className="hero-inner">
                <div className="hero-content">
                    <m.div
                        className="hero-eyebrow"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease }}
                    >
                        <span className="hero-eyebrow-line" />
                        Paraplanning & Support
                    </m.div>

                    <h1 className="hero-title">
                        <m.span variants={fadeUp} initial="hidden" animate="visible">Precision</m.span>
                        <m.em variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.1 }}>Paraplanning</m.em>
                        <m.span variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.2 }}>Built for IFAs</m.span>
                    </h1>

                    <m.p
                        className="hero-desc"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                    >
                        Elevate your practice with meticulous, FCA-compliant support. We handle the heavy lifting of research and reporting, empowering you to focus entirely on your clients and growth.
                    </m.p>

                    <m.div
                        className="hero-actions"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8, ease }}
                    >
                        <a href="#contact" className="btn-primary" onClick={(e) => go(e, '#contact')}>Work with us</a>
                        <a href="#services" className="btn-outline" onClick={(e) => go(e, '#services')}>
                            Explore services
                        </a>
                    </m.div>
                </div>

                <m.div
                    className="hero-visual"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.4, ease }}
                >
                    <div className="hero-shape" aria-hidden="true" />

                    <div className="hero-stats">
                        {stats.map((s, i) => (
                            <m.div
                                className="hero-stat-item"
                                key={s.label}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.8 + (i * 0.15), ease }}
                            >
                                <div className="hero-stat-value">{s.value}</div>
                                <div className="hero-stat-label">{s.label}</div>
                            </m.div>
                        ))}
                    </div>
                </m.div>
            </div>

            <m.div
                className="hero-scroll"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
            >
                <span>Scroll</span>
                <div className="hero-scroll-line" />
            </m.div>
        </section>
    )
}

export default memo(Hero)
