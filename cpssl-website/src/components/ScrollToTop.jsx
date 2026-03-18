import { useState, useEffect, useCallback } from 'react'
import './ScrollToTop.css'

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false)

    const onScroll = useCallback(() => {
        setVisible(window.scrollY > 400)
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [onScroll])

    const scrollUp = () => window.scrollTo({ top: 0, behavior: 'smooth' })

    return (
        <button
            className={`scroll-top${visible ? ' scroll-top--visible' : ''}`}
            onClick={scrollUp}
            aria-label="Back to top"
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="18 15 12 9 6 15" />
            </svg>
        </button>
    )
}
