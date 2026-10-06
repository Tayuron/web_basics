import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Layout } from '../components/Layout'
import { formatPrice, products } from '../data/products'

export function ProductPage() {
  const { productId } = useParams()
  const product = products.find((item) => item.id === productId)
  const [ramIndex, setRamIndex] = useState(0)
  const [storageIndex, setStorageIndex] = useState(0)

  if (!product) {
    return (
      <Layout>
        <div className="empty-state">
          <h1>Збірку не знайдено</h1>
          <Link className="button" to="/catalog">
            Повернутися до каталогу
          </Link>
        </div>
      </Layout>
    )
  }

  const price =
    product.basePrice +
    product.options.ram[ramIndex].price +
    product.options.storage[storageIndex].price

  return (
    <Layout>
      <section className="product-layout">
        <div>
          <img
            className="main-pc-image"
            src={product.image}
            alt={product.title}
          />
        </div>
        <div>
          <h1>{product.title}</h1>
          <ul className="main-specs">
            {product.specs.map(([name, value]) => (
              <li key={name}>
                <strong>{name}</strong>: {value}
              </li>
            ))}
          </ul>
          <div className="config-module">
            <label htmlFor="ram-select">Оперативна пам&apos;ять</label>
            <select
              id="ram-select"
              value={ramIndex}
              onChange={(event) => setRamIndex(Number(event.target.value))}
            >
              {product.options.ram.map((option, index) => (
                <option key={option.label} value={index}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="config-module">
            <label htmlFor="storage-select">Додаткове сховище</label>
            <select
              id="storage-select"
              value={storageIndex}
              onChange={(event) => setStorageIndex(Number(event.target.value))}
            >
              {product.options.storage.map((option, index) => (
                <option key={option.label} value={index}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="price-box">
            <div className="product-price" data-testid="product-price">
              Ціна: {formatPrice(price)}
            </div>
            <Link className="button" to="/catalog">
              Повернутися до каталогу
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
