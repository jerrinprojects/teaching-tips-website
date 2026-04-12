import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="header-logo">
          <span className="header-logo-icon">🍃</span>
          <span className="header-logo-text">Teaching Tips NZ</span>
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
        </nav>
      </div>
    </header>
  )
}
