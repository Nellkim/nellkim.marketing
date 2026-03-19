
export default function LegalPage({ title, children, onBack }) {
  return (
    <div className="legal-page">
      <div className="container">
        <button className="legal-back" onClick={onBack}>← Back to Home</button>
        <h1 className="legal-title">{title}</h1>
        <div className="legal-content">{children}</div>
      </div>
    </div>
  )
}
