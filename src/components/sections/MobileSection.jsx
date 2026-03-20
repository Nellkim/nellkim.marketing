import Reveal from '../Reveal'

const apps = [
  {
    name: 'Golf Revolver',
    tagline: 'Level the Playing Field.',
    desc: 'Golf is challenging, especially for beginners. Slow play and skill gaps often make it hard for groups to have fun. Revolver addresses these issues by leveling the playing field with unique benefits and challenges.',
    icon: '⛳',
    color: 'orange',
  },
  {
    name: 'Jemzy',
    tagline: 'Discover. Connect. Experience.',
    desc: 'A social media platform connecting communities in a way no app has before. Discover hidden gems, share real moments, and meet people nearby. Jemzy is a social mapping app for introverts, built to get you out experiencing the world around you. No endless feeds. No content algorithms. No data selling. Just pure, local discovery.',
    icon: '◈',
    color: 'blue',
  },
]

export default function MobileSection() {
  return (
    <section className="section section--alt" id="mobile">
      <div className="container">
        <Reveal direction="right">
          <div className="section-label">Mobile Platforms</div>
          <h2 className="section-title">Mobile App Platforms</h2>
          <p className="section-subtitle">
            Consumer-facing mobile apps designed to exploit market inefficiencies and create new experiences.
          </p>
        </Reveal>

        <div className="card-grid card-grid--2">
          {apps.map((a, i) => (
            <Reveal key={a.name} delay={i * 150} direction={i === 0 ? 'left' : 'right'}>
              <div className="card">
                <div className={`card-icon card-icon--${a.color}`}>{a.icon}</div>
                <h3 className="card-name">{a.name}</h3>
                <p className="card-tagline">{a.tagline}</p>
                <p className="card-desc">{a.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
