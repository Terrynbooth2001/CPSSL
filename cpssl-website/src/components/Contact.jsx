import { memo } from 'react'
import { m } from 'framer-motion'
import './Contact.css'

const fade = { opacity: 0, y: 16 }
const show = { opacity: 1, y: 0 }
const vp = { once: true, amount: 0.3 }

function Contact() {
    return (
        <section className="contact" id="contact">
            <div className="contact-orb" aria-hidden="true" />
            <div className="contact-inner">
                <m.div className="section-label" initial={fade} whileInView={show} viewport={vp} transition={{ duration: 0.55 }}>
                    Get in touch
                </m.div>

                <m.h2 className="contact-title" initial={fade} whileInView={show} viewport={vp} transition={{ duration: 0.55, delay: 0.06 }}>
                    Ready to <em>elevate</em><br />your practice?
                </m.h2>

                <m.p className="contact-sub" initial={fade} whileInView={show} viewport={vp} transition={{ duration: 0.55, delay: 0.12 }}>
                    Whether you're an IFA looking for reliable paraplanning support or a practice exploring outsourcing for the first time, Tina would love to hear from you.
                </m.p>

                <m.div className="contact-links" initial={fade} whileInView={show} viewport={vp} transition={{ duration: 0.55, delay: 0.18 }}>
                    <a href="mailto:hello@cpssl.co.uk" className="contact-link">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M2 7l10 7 10-7" strokeLinecap="round" /></svg>
                        Email Tina
                    </a>
                    <a href="tel:+44" className="contact-link">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" /></svg>
                        Call us
                    </a>
                    <a href="https://www.linkedin.com/in/tina-collishaw" target="_blank" rel="noopener noreferrer" className="contact-link">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><rect x="2" y="2" width="20" height="20" rx="4" /><path d="M7 10v7M7 7v.5M12 17v-4c0-1.7 2.5-1.7 2.5 0v4M14.5 10v1.5" strokeLinecap="round" /></svg>
                        LinkedIn
                    </a>
                </m.div>

                <m.p className="contact-location" initial={fade} whileInView={show} viewport={vp} transition={{ duration: 0.55, delay: 0.24 }}>
                    Nottingham, England &nbsp;·&nbsp; Serving advisers nationwide
                </m.p>
            </div>
        </section>
    )
}

export default memo(Contact)
