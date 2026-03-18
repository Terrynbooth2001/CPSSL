import { memo } from 'react'
import { m } from 'framer-motion'
import './WhyCPSSL.css'

const reasons = [
    {
        title: 'Dedicated, Personal Service',
        desc: 'No account managers or tiered support queues. You work directly with Tina, ensuring complete consistency, accountability, and a genuine understanding of your practice.',
        icon: <svg viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="1.2" /><path d="M10 16l4 4 8-8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>,
    },
    {
        title: 'Technical Excellence',
        desc: 'Reports are thorough, evidence-based, and written to a high professional standard. This gives both you and your clients complete confidence in the advice.',
        icon: <svg viewBox="0 0 32 32" fill="none"><path d="M16 4l2.8 5.7L25 10.8l-4.5 4.4 1.1 6.2L16 18.6l-5.6 2.8L11.5 15.2 7 10.8l6.2-.9L16 4z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" /></svg>,
    },
    {
        title: 'Confidentiality Assured',
        desc: "Client data is handled with the highest standards of confidentiality and in full compliance with data protection obligations.",
        icon: <svg viewBox="0 0 32 32" fill="none"><rect x="5" y="9" width="22" height="16" rx="2" stroke="currentColor" strokeWidth="1.2" /><path d="M10 9V7a6 6 0 0 1 12 0v2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /><circle cx="16" cy="17" r="2" stroke="currentColor" strokeWidth="1.2" /></svg>,
    },
    {
        title: 'Flexible Capacity',
        desc: 'Scale up or down as your workload demands. There are no contracts and no minimum volumes. Whether you have one case or a surge of reviews, CPSSL is there.',
        icon: <svg viewBox="0 0 32 32" fill="none"><path d="M6 25V14a10 10 0 0 1 20 0v11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /><path d="M3 25h26" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /></svg>,
    },
]

const stats = [
    { num: '100%', label: 'UK-based service' },
    { num: 'FCA', label: 'Regulatory awareness' },
    { num: 'Fast', label: 'Turnaround times' },
    { num: 'Clear', label: 'Transparent pricing' },
]

const ease = [.16, 1, .3, 1]
const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } } }
const vp = { once: true, amount: 0.2 }

function WhyCPSSL() {
    return (
        <section className="why" id="why">
            <div className="why-inner">

                <m.div
                    className="why-stats"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={vp}
                    transition={{ duration: 1, ease }}
                >
                    {stats.map((s, i) => (
                        <div className="why-stat-box" key={s.label}>
                            <m.div className="why-stat-num" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={vp} transition={{ delay: 0.4 + (i * 0.1), duration: 0.8 }}>{s.num}</m.div>
                            <div className="why-stat-label">{s.label}</div>
                        </div>
                    ))}
                </m.div>

                <div className="why-bottom">
                    <div className="why-bottom-left">
                        <m.div className="section-label" initial="hidden" whileInView="visible" viewport={vp} variants={fadeUp}>Why CPSSL</m.div>
                        <m.h2 className="why-headline" initial="hidden" whileInView="visible" viewport={vp} variants={fadeUp} transition={{ delay: 0.1 }}>
                            The Difference<br /><em>Expertise</em> Makes
                        </m.h2>
                    </div>

                    <div className="why-reasons">
                        {reasons.map((r, i) => (
                            <m.div
                                className="why-item"
                                key={r.title}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={vp}
                                transition={{ duration: 0.7, delay: i * 0.1, ease }}
                            >
                                <div className="why-item-icon">{r.icon}</div>
                                <div className="why-item-content">
                                    <h3 className="why-item-title">{r.title}</h3>
                                    <p className="why-item-desc">{r.desc}</p>
                                </div>
                            </m.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default memo(WhyCPSSL)
