import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="header-logo">
          <span className="header-logo-dot" />
          Teaching Tips NZ
        </Link>
        <nav className="header-nav">
          <Link to="/" className="header-nav-link">Home</Link>
          <a
            href="https://www.teachnz.govt.nz"
            target="_blank"
            rel="noopener noreferrer"
            className="header-nav-link"
          >
            Teach NZ
          </a>
          <a href="#categories" className="header-nav-link header-nav-cta">
            Browse Tips
          </a>
        </nav>
      </div>
    </header>
  )
}
