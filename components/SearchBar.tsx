"use client"
import { useState } from "react"
import SearchManufacturer from "./SearchManufacturer"
import Image from "next/image"

const SearchButton = ({otherClass}:{otherClass:string})=> (
  <button type='submit' className={`-ml-4 z-10 ${otherClass}`}>
      <Image src={"/magnifying-glass.svg"} alt="magnifying-glass" width={40} height={40}/>
  </button>
)
const SearchBar = () => {
    const handleSearch = () => {}
    const [manufacturer,setManufacturer] = useState('')
  return (
    <form className="searchbar" onSubmit={handleSearch}>
        <div className="searchbar__item">
            <SearchManufacturer manufacturer={manufacturer} setManufacturer={setManufacturer}/>
        </div>
        <SearchButton otherClass="sm:hidden"/>
    </form>
  )
}

export default SearchBar