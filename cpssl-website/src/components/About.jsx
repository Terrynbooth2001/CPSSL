import { memo } from 'react'
import { m } from 'framer-motion'
import './About.css'

const tags = ['Qualified Paraplanners', 'FCA Aware', 'Nottingham HQ', 'Nationwide Coverage', 'IFA Specialist']
const fade = { opacity: 0, y: 16 }
const show = { opacity: 1, y: 0 }
const vp = { once: true, amount: 0.3 }

function About() {
    return (
        <section className="about" id="about">
            <div className="about-deco" aria-hidden="true">
                <div className="about-deco-letter">TC</div>
                <div className="about-deco-ring about-deco-ring--1" />
                <div className="about-deco-ring about-deco-ring--2" />
                <div className="about-deco-bar about-deco-bar--1" />
                <div className="about-deco-bar about-deco-bar--2" />

                <m.div className="about-deco-quote" initial={fade} whileInView={show} viewport={vp} transition={{ duration: 0.6, delay: 0.15 }}>
                    <blockquote>
                        "Exceptional paraplanning isn't just about compliance — it's about crafting advice that truly changes lives."
                    </blockquote>
                    <cite>
                        Tina Collishaw
                        <span>Director & Lead Paraplanner</span>
                    </cite>
                </m.div>
            </div>

            <div className="about-content">
                <m.div className="section-label" initial={fade} whileInView={show} viewport={vp} transition={{ duration: 0.55 }}>About</m.div>
                <m.h2 className="section-heading" initial={fade} whileInView={show} viewport={vp} transition={{ duration: 0.55, delay: 0.06 }}>
                    Meet <em>Tina Collishaw</em>
                </m.h2>
                <m.p className="about-body" initial={fade} whileInView={show} viewport={vp} transition={{ duration: 0.55, delay: 0.12 }}>
                    Tina Collishaw is the founder and director of CPSSL, bringing years of hands-on experience in financial services paraplanning and adviser support. Based in Nottingham and serving clients across the UK, Tina established CPSSL to provide financial advisers with a genuinely personal, high-quality outsourced paraplanning service.
                </m.p>
                <m.p className="about-body" initial={fade} whileInView={show} viewport={vp} transition={{ duration: 0.55, delay: 0.18 }}>
                    Her meticulous approach, deep technical knowledge and commitment to getting it right first time have made CPSSL a trusted partner for IFAs who demand the best in back-office support — without the overheads of an in-house team.
                </m.p>
                <m.div className="about-tags" initial={fade} whileInView={show} viewport={vp} transition={{ duration: 0.55, delay: 0.24 }}>
                    {tags.map((t) => <span className="about-tag" key={t}>{t}</span>)}
                </m.div>
            </div>
        </section>
    )
}

export default memo(About)
