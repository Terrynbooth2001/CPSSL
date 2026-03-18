import { memo } from 'react'
import { m } from 'framer-motion'
import './Process.css'

const steps = [
    { num: 1, title: 'Initial Consultation', desc: 'We discuss your practice, your clients and your preferred working style to ensure CPSSL fits your needs perfectly.' },
    { num: 2, title: 'Scoping the Work', desc: 'You share the client brief and relevant documents. We agree timescales, format and any practice-specific requirements upfront.' },
    { num: 3, title: 'Research & Drafting', desc: 'We conduct thorough research and produce draft reports, analysis or support materials in your house style or our own clean template.' },
    { num: 4, title: 'Review & Deliver', desc: 'You review and provide feedback if needed. Final documents are delivered on time, compliant and ready to present to your client.' },
]

const fade = { opacity: 0, y: 16 }
const show = { opacity: 1, y: 0 }
const vp = { once: true, amount: 0.2 }

function Process() {
    return (
        <section className="process" id="process">
            <div className="process-inner">
                <div className="process-header">
                    <m.div className="section-label" initial={fade} whileInView={show} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.55 }}>How it works</m.div>
                    <m.h2 className="section-heading" initial={fade} whileInView={show} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.55, delay: 0.06 }}>
                        Simple, <em>Streamlined</em><br />Collaboration
                    </m.h2>
                    <m.p className="process-intro" initial={fade} whileInView={show} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.55, delay: 0.12 }}>
                        Getting started is easy. Our process is designed to slot seamlessly into your existing workflow with minimal disruption.
                    </m.p>
                </div>

                <div className="process-grid">
                    {steps.map((s, i) => (
                        <m.div className="process-step" key={s.num} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={vp} transition={{ duration: 0.5, delay: i * 0.08 }}>
                            <div className="process-num">{s.num}</div>
                            <div className="process-step-title">{s.title}</div>
                            <p className="process-desc">{s.desc}</p>
                        </m.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default memo(Process)
