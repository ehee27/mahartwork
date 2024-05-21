import { useState } from 'react'
import './App.css'
import Carousel from './components/Carousel'
import { images } from './utils/images'

function App() {
  const [index, setIndex] = useState(0)

  const handleSelected = imageSrc => {
    setIndex(imageSrc)
    // console.log('This is selected', selected)
  }

  return (
    <div className="container border-4 rounded p-3">
      <div className="container grid grid-cols-1 md:grid-cols-3 p-3">
        <div className="md:col-span-2 px-5">
          <p className="text-left">
            Hey thanks for stopping by. This piece was inspired by our passion
            for the chiefs and love for 90's arcade beat em ups.
          </p>
        </div>
        <Carousel index={index} />
      </div>
      {/* ---------------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 border-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            onClick={() => handleSelected(index)}
            // onClick={() => console.log('This', image.src)}
            className="h-80 w-50 my-2 hover:cursor-pointer"
          ></img>
        ))}
      </div>
    </div>
  )
}

export default App
