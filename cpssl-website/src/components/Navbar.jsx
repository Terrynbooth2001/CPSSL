import { useState, useEffect, useCallback, memo } from 'react'
import { m, AnimatePresence } from 'framer-motion'
import './Navbar.css'

const links = [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Process', href: '#process' },
    { label: 'Why Us', href: '#why' },
]

function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)

    useEffect(() => {
        let ticking = false
        const onScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    setScrolled(window.scrollY > 40)
                    ticking = false
                })
                ticking = true
            }
        }
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [mobileOpen])

    const go = useCallback((e, href) => {
        e.preventDefault()
        setMobileOpen(false)
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }, [])

    const scrollTop = useCallback((e) => {
        e.preventDefault()
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [])

    return (
        <>
            <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
                <a href="#" className="nav-logo" onClick={scrollTop}>
                    <div className="nav-logo-mark">C</div>
                    <div className="nav-logo-text">
                        <span className="nav-logo-name">CPSSL</span>
                        <span className="nav-logo-sub">Paraplanning & Support</span>
                    </div>
                </a>

                <ul className="nav-links">
                    {links.map((l) => (
                        <li key={l.href}>
                            <a href={l.href} className="nav-link" onClick={(e) => go(e, l.href)}>{l.label}</a>
                        </li>
                    ))}
                    <li>
                        <a href="#contact" className="nav-cta" onClick={(e) => go(e, '#contact')}>Get in touch</a>
                    </li>
                </ul>

                <button className={`nav-hamburger${mobileOpen ? ' open' : ''}`} onClick={() => setMobileOpen(v => !v)} aria-label="Toggle navigation menu">
                    <span /><span /><span />
                </button>
            </nav>

            <AnimatePresence>
                {mobileOpen && (
                    <m.div
                        className="nav-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                    >
                        {links.map((l, i) => (
                            <m.a
                                key={l.href}
                                href={l.href}
                                className="nav-overlay-link"
                                onClick={(e) => go(e, l.href)}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.06 + i * 0.05, duration: 0.4, ease: [.16, 1, .3, 1] }}
                            >
                                {l.label}
                            </m.a>
                        ))}
                        <m.a
                            href="#contact"
                            className="nav-overlay-cta"
                            onClick={(e) => go(e, '#contact')}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.06 + links.length * 0.05, duration: 0.4, ease: [.16, 1, .3, 1] }}
                        >
                            Get in touch
                        </m.a>
                    </m.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default memo(Navbar)
