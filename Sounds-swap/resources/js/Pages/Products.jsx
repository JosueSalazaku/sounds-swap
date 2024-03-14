import React from 'react'
import SearchBar from '@/Components/SearchBar'
import OptionsButton from '@/Components/OptionsButton'

function Products() {
  return (
    <main className='h-screen flex flex-col justify-start items-center'>
      {/* Searchbar*/}
          <SearchBar/>
      {/* options button components */}
      <OptionsButton/>

    </main>
  )
}

export default Products