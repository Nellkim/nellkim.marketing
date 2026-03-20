import Reveal from '../Reveal'

const steps = [
  {
    num: '01',
    title: 'Discovery',
    desc: 'We define the business problem and identify AI-driven solutions tailored to your unique challenges and goals.',
  },
  {
    num: '02',
    title: 'Build',
    desc: 'Senior developers craft fast, efficient custom software with precision — no junior devs, no bloated timelines.',
  },
  {
    num: '03',
    title: 'Deliver',
    desc: 'Measurable ROI results backed by real business outcomes. We track impact from day one through launch and beyond.',
  },
]

export default function ProcessSection() {
  return (
    <section className="section section--alt" id="process">
      <div className="container">
        <Reveal>
          <div className="section-label">Our Process</div>
          <h2 className="section-title">How We Work</h2>
          <p className="section-subtitle">
            A focused, three-step engagement model built to move fast and deliver measurable results.
          </p>
        </Reveal>

        <div className="process-steps">
          {steps.map((step, i) => (
            <Reveal key={step.num} delay={i * 150}>
              <div className="process-step">
                <div className="process-connector" aria-hidden="true" />
                <div className="process-num">{step.num}</div>
                <h3 className="process-title">{step.title}</h3>
                <p className="process-desc">{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
