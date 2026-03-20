import Reveal from '../Reveal'

const stats = [
  { value: '80+', label: 'Years Combined Executive Experience' },
  { value: 'Fortune 500', label: 'To Celebrity Startups' },
  { value: 'Senior-Only', label: 'Development Team' },
  { value: 'ROI-Driven', label: 'Every Engagement' },
]

export default function SolutionsSection() {
  return (
    <section className="section" id="solutions">
      <div className="container">
        <Reveal>
          <div className="section-label">Business Solutions</div>
          <h2 className="section-title">AI Powered Business Solutions</h2>
        </Reveal>

        <div className="solutions-layout">
          <Reveal delay={80} direction="left">
            <div className="solutions-text">
              <p>
                Nellkim works with a select group of businesses in an agency/client
                relationship. Nellkim's leadership has more than 80 years of combined
                executive experience in large CPG companies and only employs
                senior-level developers.
              </p>
              <p>
                This unique combination allows value added consultant quality insights
                into client business problems that result in fast, efficient and
                low-cost custom software solutions.
              </p>
              <p>
                Each engagement begins with a discovery process to define the business
                problem, identify solutions and ensure achievable ROI that's driven by
                AI custom software.
              </p>
              <p>
                Clients range from Fortune 500 companies to celebrity startups, all
                selected and linked by the ability to provide rock-solid ROI results.
              </p>
              <a href="#contact" className="btn btn--primary solutions-cta">
                Become a Client
              </a>
            </div>
          </Reveal>

          <Reveal delay={160} direction="right">
            <div className="solutions-stats">
              {stats.map(s => (
                <div className="stat" key={s.label}>
                  <div className="stat-value">{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
