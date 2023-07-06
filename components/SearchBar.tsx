"use client"
import { useState } from "react"
import SearchManufacturer from "./SearchManufacturer"

const SearchBar = () => {
    const handleSubmit = () => {}
    const [manufacturer,setManufacturer] = useState('')
  return (
    <form className="searchbar" onSubmit={handleSubmit}>
        <div className="searchbar__item">
            <SearchManufacturer manufacturer={manufacturer} setManufacturer={setManufacturer}/>
        </div>
    </form>
  )
}

export default SearchBar