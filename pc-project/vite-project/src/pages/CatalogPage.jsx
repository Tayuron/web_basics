import { useMemo, useState } from 'react'
import { Layout } from '../components/Layout'
import { ProductCard } from '../components/ProductCard'
import { products } from '../data/products'

export function CatalogPage() {
  const [processor, setProcessor] = useState('all')
  const [gpu, setGpu] = useState('all')
  const [maxPrice, setMaxPrice] = useState('')

  const filteredProducts = useMemo(
    () =>
      products.filter((product) => {
        const matchesProcessor =
          processor === 'all' || product.processor === processor
        const matchesGpu = gpu === 'all' || product.gpu === gpu
        const matchesPrice = !maxPrice || product.basePrice <= Number(maxPrice)
        return matchesProcessor && matchesGpu && matchesPrice
      }),
    [gpu, maxPrice, processor],
  )

  return (
    <Layout>
      <div className="section-heading">
        <h1>Готові збірки</h1>
        <p>Оберіть конфігурацію та налаштуйте її під свої задачі.</p>
      </div>
      <div className="catalog-layout">
        <aside className="filters">
          <h2>Фільтри</h2>
          <div className="filter-group">
            <label htmlFor="max-price">Максимальна ціна</label>
            <input
              id="max-price"
              type="number"
              min="0"
              placeholder="грн"
              value={maxPrice}
              onChange={(event) => setMaxPrice(event.target.value)}
            />
          </div>
          <div className="filter-group">
            <label htmlFor="processor">Процесор</label>
            <select
              id="processor"
              value={processor}
              onChange={(event) => setProcessor(event.target.value)}
            >
              <option value="all">Усі</option>
              <option value="Intel Core i5">Intel Core i5</option>
              <option value="AMD Ryzen 5">AMD Ryzen 5</option>
            </select>
          </div>
          <div className="filter-group">
            <label htmlFor="gpu">Відеокарта</label>
            <select
              id="gpu"
              value={gpu}
              onChange={(event) => setGpu(event.target.value)}
            >
              <option value="all">Усі</option>
              <option value="RTX 3060">RTX 3060</option>
            </select>
          </div>
        </aside>
        <section aria-label="Каталог комп'ютерів">
          {filteredProducts.length ? (
            <div className="products-container">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              За заданими фільтрами збірок немає.
            </div>
          )}
        </section>
      </div>
    </Layout>
  )
}
