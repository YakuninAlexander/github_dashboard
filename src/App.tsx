import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { FullNameContext } from './Contexts/FullNameContext'
import { SearchContext } from './Contexts/SearchContext'
import HomePage from './pages/HomePage'
import RepoPage from './pages/RepoPage'

function App() {
  const [repoUrl, setRepoUrl] = useState(localStorage.getItem('name') ?? '')
  const [search, setSearch] = useState('')


  return (
    <FullNameContext.Provider value={{repoUrl, setRepoUrl}}>
      <SearchContext.Provider value={{search, setSearch}}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/Repo' element={<RepoPage />} />
        </Routes>
      </SearchContext.Provider>
    </FullNameContext.Provider>
  );
}

export default App;
