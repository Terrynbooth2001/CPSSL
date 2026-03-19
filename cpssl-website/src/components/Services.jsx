import { memo } from 'react'
import { m } from 'framer-motion'
import './Services.css'

const services = [
    {
        num: '01', name: 'Suitability Reports',
        desc: 'Clearly written, FCA-compliant suitability letters and reports that precisely capture your advice rationale and protect both adviser and client.',
        icon: <svg className="service-icon" viewBox="0 0 38 38" fill="none"><rect x="6" y="3" width="22" height="32" rx="2" stroke="currentColor" strokeWidth="1.2" /><path d="M12 13h14M12 18h14M12 23h9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /></svg>,
    },
    {
        num: '02', name: 'Research & Analysis',
        desc: 'In-depth product research, fund analysis and market comparisons to underpin your recommendations with robust, evidenced reasoning.',
        icon: <svg className="service-icon" viewBox="0 0 38 38" fill="none"><circle cx="19" cy="19" r="12" stroke="currentColor" strokeWidth="1.2" /><path d="M19 10v9l5 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /></svg>,
    },
    {
        num: '03', name: 'Cash Flow Modelling',
        desc: 'Lifetime cash flow illustrations and scenario planning to demonstrate outcomes, support financial plans and reinforce the value of your advice.',
        icon: <svg className="service-icon" viewBox="0 0 38 38" fill="none"><path d="M6 30L14 18L22 24L32 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /><path d="M6 34h26" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /></svg>,
    },
    {
        num: '04', name: 'Investment Reviews',
        desc: 'Structured portfolio review reports, rebalancing analysis and performance summaries that keep client conversations informed and focused.',
        icon: <svg className="service-icon" viewBox="0 0 38 38" fill="none"><path d="M8 30V19M15 30V13M22 30V21M29 30V9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /></svg>,
    },
]

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [.16, 1, .3, 1] } } }
const vp = { once: true, amount: 0.2 }

function Services() {
    return (
        <section className="services" id="services">
            <div className="services-inner">

                <div className="services-header">
                    <m.div className="section-label" initial="hidden" whileInView="visible" viewport={vp} variants={fadeUp}>Our Expertise</m.div>
                    <m.h2 className="section-heading" initial="hidden" whileInView="visible" viewport={vp} variants={fadeUp} transition={{ delay: 0.1 }}>
                        Comprehensive<br /><em>Paraplanning</em>
                    </m.h2>
                    <m.p className="services-intro" initial="hidden" whileInView="visible" viewport={vp} variants={fadeUp} transition={{ delay: 0.2 }}>
                        From suitability letters to complex pension analysis, CPSSL delivers the technical rigour your clients deserve. This frees you up to focus on advice, relationships, and growth.
                    </m.p>
                </div>

                <div className="services-list">
                    {services.map((s, i) => (
                        <m.div
                            className="service-item"
                            key={s.num}
                            initial="hidden"
                            whileInView="visible"
                            viewport={vp}
                            variants={fadeUp}
                        >
                            <div className="service-num">{s.num}</div>
                            <div className="service-content">
                                <div className="service-title-wrap">
                                    <h3 className="service-name">{s.name}</h3>
                                    {s.icon}
                                </div>
                                <p className="service-desc">{s.desc}</p>
                            </div>
                        </m.div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default memo(Services)
