import './SaasSection.css'

const products = [
  {
    name: 'CostSeer',
    tagline: 'See Every Cost. Protect Every Margin.',
    desc: 'CostSeer is the margin-protection platform designed for modern CPG product teams and finance leaders. It connects every cost across your existing products and throughout the product development lifecycle, giving you a single, accurate view of true cost history at any point in time.',
    icon: '◎',
    color: 'blue',
  },
  {
    name: 'ClassFlow',
    tagline: 'Maximize Classroom Revenue.',
    desc: 'Childcare centers lose thousands of dollars weekly from unfilled classroom spots. Every empty seat is lost revenue that can never be recovered. ClassFlow maximizes every classroom\'s revenue by intelligently filling every spot with the right child, on the right schedule, at the right time.',
    icon: '▦',
    color: 'orange',
  },
  {
    name: 'Deep Blue Links',
    tagline: 'Deep-Linking Platform Built by Devs, For Devs.',
    desc: 'Deep Blue Links gives all the tools you need for a seamless deep-link integration without having to stand up a web app. DBL is designed for maximum compatibility across iOS and Android to give users a one-stop solution across any use case.',
    icon: '⬡',
    color: 'blue',
  },
]

export default function SaasSection() {
  return (
    <section className="section" id="saas">
      <div className="container">
        <div className="section-label">SaaS Products</div>
        <h2 className="section-title">Software as a Service</h2>
        <p className="section-subtitle">
          Purpose-built platforms that solve real business problems with AI-driven intelligence.
        </p>

        <div className="card-grid card-grid--3">
          {products.map(p => (
            <div className="card" key={p.name}>
              <div className={`card-icon card-icon--${p.color}`}>{p.icon}</div>
              <h3 className="card-name">{p.name}</h3>
              <p className="card-tagline">{p.tagline}</p>
              <p className="card-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
