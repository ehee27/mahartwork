import city from '../assets/city.jpeg'
import noCity from '../assets/noCity.jpeg'

export const images = [
  { id: 1, src: city },
  { id: 2, src: noCity },
]

export const getImageUrl = filename => {
  return new URL(`/src/assets/${filename}`, import.meta.url).href
}
