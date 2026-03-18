import { memo } from 'react'
import { m } from 'framer-motion'
import './Process.css'

const steps = [
    { num: '01', title: 'Initial Consultation', desc: 'We discuss your practice, your clients and your preferred working style to ensure CPSSL fits your needs perfectly.' },
    { num: '02', title: 'Scoping the Work', desc: 'You share the client brief and relevant documents. We agree timescales, format and any practice-specific requirements upfront.' },
    { num: '03', title: 'Research & Drafting', desc: 'We conduct thorough research and produce draft reports, analysis or support materials in your house style or our own clean template.' },
    { num: '04', title: 'Review & Deliver', desc: 'You review and provide feedback. Final documents are delivered on time, compliant, and ready to present to your client.' },
]

const ease = [.16, 1, .3, 1]
const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } } }
const vp = { once: true, amount: 0.3 }

function Process() {
    return (
        <section className="process" id="process">
            <div className="process-inner">
                <div className="process-header">
                    <m.div className="section-label" initial="hidden" whileInView="visible" viewport={vp} variants={fadeUp}>How it works</m.div>
                    <m.h2 className="section-heading" initial="hidden" whileInView="visible" viewport={vp} variants={fadeUp} transition={{ delay: 0.1 }}>
                        Simple, <em>Streamlined</em><br />Collaboration
                    </m.h2>
                    <m.p className="process-intro" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} transition={{ delay: 0.2 }}>
                        Getting started is easy. Our process is designed to slot seamlessly into your existing workflow with minimal disruption.
                    </m.p>
                </div>

                <div className="process-list">
                    {steps.map((s, i) => {
                        const isEven = i % 2 !== 0
                        return (
                            <div className="process-step" key={s.num}>
                                <div className="process-dot" />
                                <m.div
                                    className="process-num"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 1, ease }}
                                >
                                    {s.num}
                                </m.div>

                                <m.div
                                    className="process-step-content"
                                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.4 }}
                                    transition={{ duration: 0.8, ease }}
                                >
                                    <h3 className="process-step-title">{s.title}</h3>
                                    <p className="process-desc">{s.desc}</p>
                                </m.div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default memo(Process)
