import { memo } from 'react'
import { m } from 'framer-motion'
import './WhyCPSSL.css'

const reasons = [
    {
        title: 'Dedicated, Personal Service',
        desc: 'No account managers or tiered support queues. You work directly with Tina — ensuring consistency, accountability and a genuine understanding of your practice.',
        icon: <svg className="icon" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="1.2" /><path d="M10 16l4 4 8-8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>,
    },
    {
        title: 'Technical Excellence',
        desc: 'Reports are thorough, evidence-based and written to a high professional standard — giving both you and your clients complete confidence in the advice.',
        icon: <svg className="icon" viewBox="0 0 32 32" fill="none"><path d="M16 4l2.8 5.7L25 10.8l-4.5 4.4 1.1 6.2L16 18.6l-5.6 2.8L11.5 15.2 7 10.8l6.2-.9L16 4z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" /></svg>,
    },
    {
        title: 'Confidentiality Assured',
        desc: "Client data is handled with the highest standards of confidentiality and in full compliance with data protection obligations.",
        icon: <svg className="icon" viewBox="0 0 32 32" fill="none"><rect x="5" y="9" width="22" height="16" rx="2" stroke="currentColor" strokeWidth="1.2" /><path d="M10 9V7a6 6 0 0 1 12 0v2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /><circle cx="16" cy="17" r="2" stroke="currentColor" strokeWidth="1.2" /></svg>,
    },
    {
        title: 'Flexible Capacity',
        desc: 'Scale up or down as your workload demands — no contracts, no minimum volumes. Whether you have one case or a surge of reviews, CPSSL is there.',
        icon: <svg className="icon" viewBox="0 0 32 32" fill="none"><path d="M6 25V14a10 10 0 0 1 20 0v11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /><path d="M3 25h26" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /></svg>,
    },
]

const stats = [
    { num: '100%', label: 'UK-based service' },
    { num: 'FCA', label: 'Regulatory awareness' },
    { num: 'Fast', label: 'Turnaround times' },
    { num: 'Clear', label: 'Transparent pricing' },
]

const fade = { opacity: 0, y: 16 }
const show = { opacity: 1, y: 0 }
const vp = { once: true, amount: 0.2 }

function WhyCPSSL() {
    return (
        <section className="why" id="why">
            <div className="why-left">
                <m.div className="section-label" initial={fade} whileInView={show} viewport={vp} transition={{ duration: 0.55 }}>Why CPSSL</m.div>
                <m.h2 className="section-heading" initial={fade} whileInView={show} viewport={vp} transition={{ duration: 0.55, delay: 0.06 }}>
                    The Difference <em>Expertise</em> Makes
                </m.h2>
                <div className="why-list">
                    {reasons.map((r, i) => (
                        <m.div className="why-item" key={r.title} initial={fade} whileInView={show} viewport={vp} transition={{ duration: 0.5, delay: 0.06 + i * 0.06 }}>
                            {r.icon}
                            <div>
                                <div className="why-item-title">{r.title}</div>
                                <p className="why-item-desc">{r.desc}</p>
                            </div>
                        </m.div>
                    ))}
                </div>
            </div>

            <div className="why-right">
                <m.h3 className="why-right-title" initial={fade} whileInView={show} viewport={vp} transition={{ duration: 0.55 }}>
                    Quality paraplanning<br /><em>is an investment,<br />not a cost.</em>
                </m.h3>
                <m.div className="why-stat-grid" initial={fade} whileInView={show} viewport={vp} transition={{ duration: 0.55, delay: 0.12 }}>
                    {stats.map((s) => (
                        <div className="why-stat-box" key={s.label}>
                            <div className="why-stat-num">{s.num}</div>
                            <div className="why-stat-label">{s.label}</div>
                        </div>
                    ))}
                </m.div>
            </div>
        </section>
    )
}

export default memo(WhyCPSSL)
