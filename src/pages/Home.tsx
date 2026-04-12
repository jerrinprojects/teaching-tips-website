import { Link } from 'react-router-dom'
import { categories } from '../data/tips'

export default function Home() {
  const totalTips = categories.reduce((sum, c) => sum + c.tips.length, 0)

  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">🇳🇿 By New Zealand Teachers, For New Zealand Teachers</div>
          <h1 className="hero-title">
            Teaching Tips
            <span className="hero-title-accent"> NZ</span>
          </h1>
          <p className="hero-subtitle">
            Practical, classroom-tested strategies shared by educators across Aotearoa.
            Find tips that work — organised by topic, ready to use tomorrow.
          </p>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-number">{categories.length}</span>
              <span className="hero-stat-label">Categories</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="hero-stat-number">{totalTips}</span>
              <span className="hero-stat-label">Tips</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="hero-stat-number">100%</span>
              <span className="hero-stat-label">Free</span>
            </div>
          </div>
          <a href="#categories" className="hero-cta">
            Browse All Tips ↓
          </a>
        </div>
        <div className="hero-decoration">
          <div className="hero-blob hero-blob-1" />
          <div className="hero-blob hero-blob-2" />
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="categories-section">
        <div className="section-header">
          <h2 className="section-title">Browse by Category</h2>
          <p className="section-subtitle">
            Choose a topic to explore curated teaching tips and strategies.
          </p>
        </div>
        <div className="categories-grid">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.id}`}
              className="category-card"
              style={{ '--card-color': category.color, '--card-light': category.lightColor } as React.CSSProperties}
            >
              <div className="category-card-icon-wrap">
                <span className="category-card-icon">{category.icon}</span>
              </div>
              <div className="category-card-content">
                <h3 className="category-card-title">{category.title}</h3>
                <p className="category-card-desc">{category.description}</p>
              </div>
              <div className="category-card-footer">
                <span className="category-card-count">{category.tips.length} tips</span>
                <span className="category-card-arrow">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>Made with ❤️ by a New Zealand teacher &nbsp;·&nbsp; Teaching Tips NZ</p>
      </footer>
    </main>
  )
}
