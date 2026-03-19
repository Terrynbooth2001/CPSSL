import { memo } from 'react'
import { m } from 'framer-motion'
import './Testimonials.css'

const testimonials = [
    {
        quote: "CPSSL’s suitability reports have transformed how we operate. Their attention to detail and ability to capture our advice rationale is unmatched. It gives us total confidence.",
        author: "Sarah Jenkins",
        role: "Managing Director, Vista Wealth",
    },
    {
        quote: "The depth of their research and analysis means we can deliver highly robust recommendations to our clients. They truly feel like an extension of our own team.",
        author: "David Thorne",
        role: "Principal Adviser, Thorne Financial",
    },
    {
        quote: "Outsourcing our complex cash flow modelling to CPSSL was the best decision we made this year. The clarity of their outputs makes client meetings genuinely engaging.",
        author: "Emma Richards",
        role: "Partner, Apex Advisory",
    }
]

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [.16, 1, .3, 1] } } }
const vp = { once: true, amount: 0.2 }

function Testimonials() {
    return (
        <section className="testimonials" id="testimonials">
            <div className="testimonials-inner">
                <div className="testimonials-header">
                    <m.div className="section-label" initial="hidden" whileInView="visible" viewport={vp} variants={fadeUp}>Client References</m.div>
                    <m.h2 className="section-heading" initial="hidden" whileInView="visible" viewport={vp} variants={fadeUp} transition={{ delay: 0.1 }}>
                        Trusted by<br /><em>Professionals</em>
                    </m.h2>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map((t, i) => (
                        <m.div
                            className="testimonial-card"
                            key={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={vp}
                            variants={fadeUp}
                            transition={{ delay: 0.2 + (i * 0.1) }}
                        >
                            <svg className="quote-icon" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
                            <p className="testimonial-quote">"{t.quote}"</p>
                            <div className="testimonial-author-box">
                                <p className="testimonial-author">{t.author}</p>
                                <p className="testimonial-role">{t.role}</p>
                            </div>
                        </m.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default memo(Testimonials)
