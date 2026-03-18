import { useState, useEffect, useCallback, memo } from 'react'
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
        setTimeout(() => {
            document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
        }, mobileOpen ? 250 : 0)
    }, [mobileOpen])

    const scrollTop = useCallback((e) => {
        e.preventDefault()
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [])

    return (
        <>
            <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
                <a href="#" className="nav-logo" onClick={scrollTop} aria-label="CPSSL Home">
                    <img src="/CPSSL.png" alt="CPSSL" className="nav-logo-img" />
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

                <button
                    className={`nav-hamburger${mobileOpen ? ' open' : ''}`}
                    onClick={() => setMobileOpen(v => !v)}
                    aria-label="Toggle navigation menu"
                    aria-expanded={mobileOpen}
                >
                    <span /><span /><span />
                </button>
            </nav>

            <div className={`nav-overlay${mobileOpen ? ' nav-overlay--open' : ''}`} aria-hidden={!mobileOpen}>
                {links.map((l) => (
                    <a
                        key={l.href}
                        href={l.href}
                        className="nav-overlay-link"
                        onClick={(e) => go(e, l.href)}
                        tabIndex={mobileOpen ? 0 : -1}
                    >
                        {l.label}
                    </a>
                ))}
                <a
                    href="#contact"
                    className="nav-overlay-cta"
                    onClick={(e) => go(e, '#contact')}
                    tabIndex={mobileOpen ? 0 : -1}
                >
                    Get in touch
                </a>
            </div>
        </>
    )
}

export default memo(Navbar)
