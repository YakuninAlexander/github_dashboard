import React from 'react';

interface SearchTabProps {
  search: string
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

export default function SearchTab({search, setSearch} : SearchTabProps) {
  return(
    <form 
      className='flex gap-3'
      onSubmit={(e) => {e.preventDefault();}}
    >
      <input 
        placeholder='Searching github repo...'
        className='w-5/6 rounded-sm outline outline-slate-200 text-xl font-light px-2' 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button 
        type='submit'
        className='w-1/6 outline outline-slate-300 rounded-sm text-xl font-light bg-slate-200'
      >
        Search
      </button>
    </form>
  )
}