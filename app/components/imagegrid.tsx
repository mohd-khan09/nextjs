'use client'
import React, { useState, useEffect } from 'react'
interface Photo {
  id: Number
  url: string
}

const ImageGrid: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([])

  useEffect(() => {
    // Fetch photos from the API
    fetch(
      'https://api.slingacademy.com/v1/sample-data/photos?offset=0&limit=10',
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.photos) {
          setPhotos(data.photos as Photo[]) // Cast the response data to Photo[] type
        }
      })
      .catch((error) => console.error(error))
  }, [])

  return (
    <div className=" mx-auto grid h-3/6 w-3/5 grid-cols-1 gap-4 p-4  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
      {photos.map((photo) => (
        <div
          key={photo.id.toString()}
          className="overflow-hidden rounded-lg shadow-lg"
        >
          <img src={photo.url} alt={'hello'} className="h-auto w-full" />
        </div>
      ))}
    </div>
  )
}

export default ImageGrid
