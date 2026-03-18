import { memo, useMemo } from 'react'
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
        num: '04', name: 'Pension Transfer Reports',
        desc: 'DB and QROPS transfer analysis and reports prepared with meticulous care — meeting the high compliance standards required in this critical advice area.',
        icon: <svg className="service-icon" viewBox="0 0 38 38" fill="none"><path d="M19 7c-6.63 0-12 5.37-12 12s5.37 12 12 12 12-5.37 12-12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /><path d="M26 7l5 5-5 5M31 12H22" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>,
    },
    {
        num: '05', name: 'Investment Reviews',
        desc: 'Structured portfolio review reports, rebalancing analysis and performance summaries that keep client conversations informed and focused.',
        icon: <svg className="service-icon" viewBox="0 0 38 38" fill="none"><path d="M8 30V19M15 30V13M22 30V21M29 30V9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /></svg>,
    },
    {
        num: '06', name: 'Back-Office Support',
        desc: 'Administrative support including client onboarding, documentation management and general back-office tasks to keep your practice running smoothly.',
        icon: <svg className="service-icon" viewBox="0 0 38 38" fill="none"><rect x="5" y="10" width="28" height="18" rx="2" stroke="currentColor" strokeWidth="1.2" /><path d="M5 15h28" stroke="currentColor" strokeWidth="1.2" /><path d="M12 24h4M20 24h6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /></svg>,
    },
]

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.07, duration: 0.55, ease: [.25, .46, .45, .94] } }) }
const sectionFade = { opacity: 0, y: 16 }
const sectionShow = { opacity: 1, y: 0 }
const vp = { once: true, amount: 0.15 }

function Services() {
    return (
        <section className="services" id="services">
            <div className="services-inner">
                <div className="services-header">
                    <div>
                        <m.div className="section-label" initial={sectionFade} whileInView={sectionShow} viewport={vp} transition={{ duration: 0.55 }}>What we do</m.div>
                        <m.h2 className="section-heading" initial={sectionFade} whileInView={sectionShow} viewport={vp} transition={{ duration: 0.55, delay: 0.06 }}>
                            Comprehensive <em>Paraplanning</em><br />Support
                        </m.h2>
                    </div>
                    <m.p className="services-intro" initial={sectionFade} whileInView={sectionShow} viewport={vp} transition={{ duration: 0.55, delay: 0.12 }}>
                        From suitability letters to complex pension analysis, CPSSL delivers the technical rigour your clients deserve — freeing you to focus on advice, relationships and growth.
                    </m.p>
                </div>

                <div className="services-grid">
                    {services.map((s, i) => (
                        <m.div className="service-card" key={s.num} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp}>
                            <div className="service-num">{s.num}</div>
                            {s.icon}
                            <div className="service-name">{s.name}</div>
                            <p className="service-desc">{s.desc}</p>
                        </m.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default memo(Services)
