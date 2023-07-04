"use client"
import { CustomFilter, Hero, SearchBar } from '@/components'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero/>
      <div className="mt-12 padding-x padding-y max-width" id='discover' >
        <h1 className="text-4xl mb-2 font-extrabold">Car Catalague</h1>
        <p>Explore the cars you might like</p>
      </div>
      <div className="home__filters">
        <SearchBar/>
        <div className="home__filter-container">
          <CustomFilter title={"fuel"}/>
          <CustomFilter title={"year"}/>
        </div>
      </div>
    </main>
  )
}
