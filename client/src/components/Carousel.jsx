import { useState } from 'react'
import { images } from '../utils/images'
const Carousel = () => {
  const [pic, setPic] = useState(0)
  return (
    <div className="border-4 p-2">
      <div className="animate-slidedown300 font-serif text-5xl">
        IMAGE
        <img src={images[`${pic}`].src} className="h-80 w-[50]"></img>
      </div>
      {/* <div
        className={`border-4 rounded min-h-40 flex justify-center items-center ${
          index === 0
            ? ``
            : `bg-green-500`
        }`}
      >
        <p className="animate-slidedown300 font-serif text-5xl">IMAGE</p>
      </div> */}
      <button
        onClick={() => setPic(0)}
        className="bg-green-500 py-1 px-3 rounded-md text-sm"
      >
        City
      </button>
      <button
        onClick={() => setPic(1)}
        className="bg-green-500 py-1 px-3 rounded-md text-sm"
      >
        No City
      </button>
    </div>
  )
}

export default Carousel
