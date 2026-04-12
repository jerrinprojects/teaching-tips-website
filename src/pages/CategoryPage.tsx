import { useParams, Link } from 'react-router-dom'
import { categories } from '../data/tips'

export default function CategoryPage() {
  const { id } = useParams<{ id: string }>()
  const category = categories.find((c) => c.id === id)

  if (!category) {
    return (
      <main className="not-found">
        <h2>Category not found.</h2>
        <Link to="/" className="back-link">← Back to Home</Link>
      </main>
    )
  }

  return (
    <main className="category-page">
      {/* Back */}
      <div className="category-breadcrumb">
        <Link to="/" className="back-link">← Back to All Categories</Link>
      </div>

      {/* Category Hero */}
      <section
        className="category-hero"
        style={{ '--card-color': category.color, '--card-light': category.lightColor } as React.CSSProperties}
      >
        <div className="category-hero-icon">{category.icon}</div>
        <div className="category-hero-content">
          <p className="category-hero-label">Category</p>
          <h1 className="category-hero-title">{category.title}</h1>
          <p className="category-hero-desc">{category.description}</p>
          <span className="category-hero-badge">{category.tips.length} tips</span>
        </div>
      </section>

      {/* Tips */}
      <section className="tips-section">
        <div className="tips-grid">
          {category.tips.map((tip, index) => (
            <article key={tip.id} className="tip-card">
              <div className="tip-card-header">
                <span
                  className="tip-number"
                  style={{ background: category.color }}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h2 className="tip-card-title">{tip.title}</h2>
              </div>
              <p className="tip-card-desc">{tip.description}</p>
              <div className="tip-card-tags">
                {tip.tags.map((tag) => (
                  <span
                    key={tag}
                    className="tag"
                    style={{ background: category.lightColor, color: category.color }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Footer Nav */}
      <div className="category-footer-nav">
        <Link to="/" className="back-link">← Back to All Categories</Link>
      </div>

      <footer className="footer">
        <p>Made with ❤️ by a New Zealand teacher &nbsp;·&nbsp; Teaching Tips NZ</p>
      </footer>
    </main>
  )
}
