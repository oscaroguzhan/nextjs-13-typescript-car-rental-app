"use client";

import { SearchCarManufacturer } from "@/components";
import React, { useState } from 'react'
const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState('')
  const handleSearch = () => {}
  return (
    
<form className="w-full" onSubmit={handleSearch}>   
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="searchbar__items">
      <SearchCarManufacturer manufacturer={manufacturer} setManufacturer={setManufacturer}/>
    </div>
</form>

  )
}

export default SearchBar