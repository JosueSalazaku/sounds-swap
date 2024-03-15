import React from 'react'
import SearchBar from '@/Components/SearchBar'
import OptionsButtons from '@/Components/OptionsButtons'

function Products() {
  return (
    <main className='h-screen flex flex-col justify-start items-center'>
      {/* Searchbar*/}
      <SearchBar/>
      {/* options button components */}
      <OptionsButtons/>

    </main>
  )
}

export default Products