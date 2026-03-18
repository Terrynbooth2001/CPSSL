import { memo } from 'react'
import { m } from 'framer-motion'
import './About.css'

const tags = ['Qualified Paraplanners', 'FCA Aware', 'IFA Specialist', 'Nationwide Coverage']
const ease = [.16, 1, .3, 1]
const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } }
}

function About() {
    return (
        <section className="about" id="about">
            <m.div
                className="about-watermark"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
            >
                Tina Collishaw
            </m.div>

            <div className="about-inner">
                <div className="about-quote-block">
                    <m.div className="section-label" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
                        About The Founder
                    </m.div>
                    <m.blockquote initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ delay: 0.1 }}>
                        "Exceptional paraplanning isn't just about compliance; it's about <em>crafting advice</em> that truly changes lives."
                    </m.blockquote>
                    <m.cite initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ delay: 0.2 }}>
                        <div className="about-quote-line" />
                        <div>
                            <span className="about-author-name">Tina Collishaw</span>
                            <span className="about-author-role">Director & Lead Paraplanner</span>
                        </div>
                    </m.cite>
                </div>

                <div className="about-details">
                    <m.div className="about-body" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
                        <p>
                            Tina Collishaw is the founder and director of CPSSL, bringing years of hands-on experience in financial services paraplanning and adviser support. Based in Nottingham and serving clients across the UK, Tina established CPSSL to provide financial advisers with a genuinely personal, high-quality outsourced bespoke service.
                        </p>
                        <p>
                            Her meticulous approach, deep technical knowledge, and commitment to getting it right the first time have made CPSSL a trusted partner for IFAs who demand the best in back-office support, entirely without the overheads of an in-house team.
                        </p>
                    </m.div>

                    <m.div className="about-tags" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ delay: 0.1 }}>
                        {tags.map((t, i) => (
                            <m.div
                                className="about-tag-item"
                                key={t}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.6, delay: 0.2 + (i * 0.1), ease }}
                            >
                                <div className="about-tag-dot" />
                                {t}
                            </m.div>
                        ))}
                    </m.div>
                </div>
            </div>
        </section>
    )
}

export default memo(About)
