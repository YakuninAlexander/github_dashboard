import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RepoPage from './pages/RepoPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/Repo' element={<RepoPage />} />
      </Routes>
    </>
  );
}

export default App;
