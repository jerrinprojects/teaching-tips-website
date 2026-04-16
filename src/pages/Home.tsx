import { Link } from 'react-router-dom'
import { categories } from '../data/tips'

export default function Home() {
  const totalTips = categories.reduce((sum, c) => sum + c.tips.length, 0)

  return (
    <main>
      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-eyebrow">
          <span className="hero-eyebrow-dot" />
          By New Zealand Teachers, For New Zealand Teachers
        </div>

        <h1 className="hero-title">
          Teaching that<br />
          <span className="hero-title-accent">actually works.</span>
        </h1>

        <p className="hero-subtitle">
          Practical, classroom-tested strategies shared by educators across Aotearoa.
          Find what works — organised by topic, ready for tomorrow.
        </p>

        <div className="hero-actions">
          <a href="#categories" className="btn-primary">
            Browse All Tips →
          </a>
          <a
            href="https://www.teachnz.govt.nz"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Teach NZ ↗
          </a>
        </div>

        <div className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-number">{categories.length}</span>
            <span className="hero-stat-label">Categories</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-number">{totalTips}</span>
            <span className="hero-stat-label">Tips</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-number">100%</span>
            <span className="hero-stat-label">Free</span>
          </div>
        </div>
      </section>

      {/* ── Categories ── */}
      <section id="categories" className="categories-section">
        <div className="section-header">
          <p className="section-label">Topics</p>
          <h2 className="section-title">Browse by Category</h2>
          <p className="section-subtitle">
            Choose a topic to explore curated tips and strategies.
          </p>
        </div>

        <div className="categories-grid">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.id}`}
              className="category-card"
              style={{
                '--card-color': category.color,
                '--card-light': category.lightColor,
              } as React.CSSProperties}
            >
              <div className="category-card-bar" />
              <div className="category-card-top">
                <div className="category-card-icon-wrap">
                  {category.icon}
                </div>
                <span className="category-card-count-badge">
                  {category.tips.length} tips
                </span>
              </div>
              <h3 className="category-card-title">{category.title}</h3>
              <p className="category-card-desc">{category.description}</p>
              <div className="category-card-footer">
                <span className="category-card-cta">
                  Explore tips →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>Made with care by a New Zealand teacher &nbsp;·&nbsp; <a href="https://www.teachnz.govt.nz" target="_blank" rel="noopener noreferrer">Teach NZ</a></p>
      </footer>
    </main>
  )
}
