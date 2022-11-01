import React, { useContext } from 'react';
import { SearchContext } from '../Contexts/SearchContext';

export default function SearchTab() {
  const {search, setSearch} = useContext(SearchContext)
  return(
    <div 
      className='flex gap-3'
      onSubmit={(e) => {e.preventDefault();}}
    >
      <input 
        placeholder='Searching github repo...'
        className='w-full rounded-sm outline outline-slate-200 text-xl font-light px-2' 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      
    </div>
  )
}