import { memo } from 'react'
import './Marquee.css'

const items = [
    'Suitability Reports', 'Research & Analysis', 'Cash Flow Modelling',
    'Investment Reviews', 'FCA Compliance', 'Client Onboarding', 'Documentation',
]

function Marquee() {
    const track = [...items, ...items]
    return (
        <section className="marquee-section" aria-hidden="true">
            <div className="marquee-track">
                {track.map((item, i) => (
                    <span className="marquee-item" key={i}>
                        {item}
                        <span className="marquee-dot" />
                    </span>
                ))}
            </div>
        </section>
    )
}

export default memo(Marquee)
