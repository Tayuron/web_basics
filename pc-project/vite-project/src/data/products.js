export const products = [
  {
    id: 'terminator-lite',
    title: 'TERMINATOR-lite',
    image:
      '/images/pc-images/PCCooler-C3D310-ARGB-Black-367x367.png.pagespeed.ce.Mit9kQVurk.png',
    basePrice: 35999,
    processor: 'AMD Ryzen 5',
    gpu: 'RTX 3060',
    specs: [
      ['Процесор', 'Ryzen™ 5 5500'],
      ['Відеокарта', 'GeForce RTX 3060 12GB'],
      ['ОЗП', '16GB DDR4'],
      ['Накопичувач', '1TB SSD'],
    ],
    options: {
      ram: [
        { label: '16GB DDR4 (+0 грн)', price: 0 },
        { label: '32GB DDR4 (+2000 грн)', price: 2000 },
        { label: '64GB DDR4 (+5000 грн)', price: 5000 },
      ],
      storage: [
        { label: '1TB SSD (+0 грн)', price: 0 },
        { label: '2TB SSD (+2800 грн)', price: 2800 },
      ],
    },
  },
  {
    id: 'jag-panzer',
    title: 'JAG-PANZER',
    image:
      '/images/pc-images/1stPlayer-F3-A-BK-4F1-Black-268x268.png.pagespeed.ce.wCV4kxqrMf.png',
    basePrice: 45999,
    processor: 'Intel Core i5',
    gpu: 'RTX 3060',
    specs: [
      ['Процесор', 'Core™ i5 14400F'],
      ['Відеокарта', 'GeForce RTX 3060 12GB'],
      ['Кількість ядер', '10 ядер'],
      ['Кількість потоків', '16'],
      ['ОЗП', '32GB DDR4'],
    ],
    options: {
      ram: [
        { label: '32GB DDR4 (+0 грн)', price: 0 },
        { label: '64GB DDR4 (+2000 грн)', price: 2000 },
      ],
      storage: [
        { label: 'Без HDD (+0 грн)', price: 0 },
        { label: '1TB HDD (+1500 грн)', price: 1500 },
        { label: '2TB HDD (+2800 грн)', price: 2800 },
      ],
    },
  },
]

export function formatPrice(price) {
  return `${price.toLocaleString('uk-UA')} грн`
}
