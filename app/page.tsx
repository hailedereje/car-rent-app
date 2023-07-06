import { CarCard, CustomFilter, Hero, SearchBar } from '@/components'
import { CarCardProps } from '@/types'
import { fetchCars } from '@/utils'
import Image from 'next/image'
import { useEffect } from 'react'

export default async   function Home() {
  
  var cars = await fetchCars()
  const isDataEmpty = Array.isArray(cars) || cars.length < 1 || !cars
  
  return (
    <main className="overflow-hidden padding-x">
      <Hero/>
      <div className="mt-12  max-width" id='discover' >
        <h1 className="text-4xl mb-2 font-extrabold">Car Catalague</h1>
        <p>Explore the cars you might like</p>
      </div>
      <div className="home__filters">
        <SearchBar/>
        <div className="home__filter-container">
          <CustomFilter/>
          <CustomFilter />
        </div>
       
      </div>
       {isDataEmpty ? 
        (
          <section>
            <div className="home__cars-wrapper">
              {cars?.map((car) => (
                <CarCard car={car}/>
              ))}
            </div>
          </section>
        ):(
          <div className='home__error-container'>
            <h2 className="text-black text-xl">No cars found</h2>
          </div>
        )}
    </main>
  )
}
