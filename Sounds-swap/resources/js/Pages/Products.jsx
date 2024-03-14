import React from 'react'
import SearchBar from '@/Components/SearchBar'
function Products() {
  return (
    <main className='h-screen flex flex-col justify-start items-center'>
      {/* Searchbar*/}
          <SearchBar/>
      {/* options button components */}
          <div className='w-screen bg-slate-600 h-14'></div>
    </main>
  )
}

export default Products