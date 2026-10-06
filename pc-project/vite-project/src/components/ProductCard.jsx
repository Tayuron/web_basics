import { Link } from 'react-router-dom'
import { formatPrice } from '../data/products'

export function ProductCard({ product }) {
  return (
    <article className="product-card">
      <Link to={`/products/${product.id}`}>
        <img
          className="product-image"
          src={product.image}
          alt={product.title}
        />
      </Link>
      <h2>
        <Link to={`/products/${product.id}`}>{product.title}</Link>
      </h2>
      <ul className="spec-list">
        {product.specs.slice(0, 4).map(([name, value]) => (
          <li key={name}>
            {name}: {value}
          </li>
        ))}
      </ul>
      <p className="card-price">Ціна: {formatPrice(product.basePrice)}</p>
      <Link className="button" to={`/products/${product.id}`}>
        Налаштувати
      </Link>
    </article>
  )
}
