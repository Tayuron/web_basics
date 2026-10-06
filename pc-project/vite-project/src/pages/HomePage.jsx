import { Link } from 'react-router-dom'
import { Layout } from '../components/Layout'

export function HomePage() {
  return (
    <Layout>
      <section className="hero">
        <div className="hero-content">
          <h1>
            ЗБИРАЄМО ПК, ЯКІ <span className="accent">ДИХАЮТЬ ШВИДКІСТЮ</span>
          </h1>
          <p>
            Обирайте готову збірку, змінюйте комплектуючі та одразу бачте
            актуальну ціну конфігурації.
          </p>
          <div className="button-row">
            <Link className="button" to="/catalog">
              Переглянути каталог
            </Link>
            <Link className="button-outline" to="/catalog">
              Відкрити конфігуратор
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
