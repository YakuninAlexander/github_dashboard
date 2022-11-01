import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { FullNameContext } from './Contexts/FullNameContext'
import HomePage from './pages/HomePage'
import RepoPage from './pages/RepoPage'

function App() {
  const [repoUrl, setRepoUrl] = useState('')



  return (
    <FullNameContext.Provider value={{repoUrl, setRepoUrl}}>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/Repo' element={<RepoPage />} />
      </Routes>
    </FullNameContext.Provider>
  );
}

export default App;
