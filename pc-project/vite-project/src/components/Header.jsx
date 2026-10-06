import { NavLink } from 'react-router-dom'

const links = [
  { to: '/catalog', label: 'Готові збірки', icon: '/images/computer-case.png' },
  { to: '/catalog', label: 'Конфігуратор', icon: '/images/preferences.png' },
  { to: '/catalog', label: 'Комплектуючі', icon: '/images/hardware.png' },
]

export function Header() {
  return (
    <header className="site-header">
      <NavLink to="/" aria-label="Магазик - на головну">
        <img className="logo" src="/images/-04-11-2025.png" alt="Магазик" />
      </NavLink>
      <nav className="site-nav" aria-label="Основна навігація">
        {links.map((link) => (
          <NavLink
            key={link.label}
            to={link.to}
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            <img className="nav-icon" src={link.icon} alt="" />
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
