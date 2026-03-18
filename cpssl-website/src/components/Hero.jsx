import { memo, useCallback } from 'react'
import { m } from 'framer-motion'
import './Hero.css'

const words = ['Expert\u00A0', 'Paraplanning']
const italicWords = ['Built\u00A0', 'Around\u00A0', 'You']
const stats = [
    { value: 'IFA', label: 'Focused' },
    { value: 'FCA', label: 'Compliant' },
    { value: '100%', label: 'Dedicated' },
]

const wordEase = [.16, 1, .3, 1]

function Hero() {
    const go = useCallback((e, href) => {
        e.preventDefault()
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }, [])

    return (
        <section className="hero" id="hero">
            <div className="hero-bg" aria-hidden="true">
                <div className="hero-orb hero-orb--1" />
                <div className="hero-orb hero-orb--2" />
                <div className="hero-orb hero-orb--3" />
            </div>
            <div className="hero-grid" aria-hidden="true" />

            <div className="hero-content">
                <m.div
                    className="hero-eyebrow"
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.15, ease: wordEase }}
                >
                    <span className="hero-eyebrow-line" />
                    Paraplanning & Support Services
                </m.div>

                <h1 className="hero-title">
                    {words.map((w, i) => (
                        <m.span
                            key={i}
                            style={{ display: 'inline-block' }}
                            initial={{ opacity: 0, y: 36 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 + i * 0.1, ease: wordEase }}
                        >{w}</m.span>
                    ))}
                    <br />
                    <em>
                        {italicWords.map((w, i) => (
                            <m.span
                                key={i}
                                style={{ display: 'inline-block' }}
                                initial={{ opacity: 0, y: 36 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.55 + i * 0.1, ease: wordEase }}
                            >{w}</m.span>
                        ))}
                    </em>
                </h1>

                <m.p
                    className="hero-desc"
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.9, ease: wordEase }}
                >
                    Specialist paraplanning and back-office support for financial advisers
                    and wealth managers across the UK. Precise, reliable and fully tailored
                    to your practice.
                </m.p>

                <m.div
                    className="hero-actions"
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 1.05, ease: wordEase }}
                >
                    <a href="#contact" className="btn-primary" onClick={(e) => go(e, '#contact')}>Work with us</a>
                    <a href="#services" className="btn-outline" onClick={(e) => go(e, '#services')}>
                        Our services
                        <svg width="16" height="10" viewBox="0 0 16 10" fill="none"><path d="M1 5h14M10 1l5 4-5 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </a>
                </m.div>

                <m.div
                    className="hero-stats"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.25 }}
                >
                    {stats.map((s) => (
                        <div className="hero-stat-item" key={s.label}>
                            <div className="hero-stat-value">{s.value}</div>
                            <div className="hero-stat-label">{s.label}</div>
                        </div>
                    ))}
                </m.div>
            </div>

            <m.div className="hero-deco" aria-hidden="true" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.5 }}>
                <div className="hero-deco-line" /><div className="hero-deco-dot" /><div className="hero-deco-line" /><div className="hero-deco-dot" /><div className="hero-deco-line" />
            </m.div>

            <m.div className="hero-scroll" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1.8 }}>
                <span>Scroll</span>
                <div className="hero-scroll-line" />
            </m.div>
        </section>
    )
}

export default memo(Hero)
