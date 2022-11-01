import React, { useState } from 'react';
import ErrorMsg from '../components/ErrorMsg';
import Loader from '../components/Loader';
import MiniRepoCard from '../components/MiniRepoCard';
import SearchTab from '../components/SearchTab';
import useDebounce from '../hooks/debounce';
import { useGetReposQuery } from '../redux/github/github.api';


export default function HomePage() {
  const [search, setSearch] = useState('');
  const debounced = useDebounce(search)

  const {isLoading, isError, data} = useGetReposQuery(debounced, {
    skip: debounced.length<3,
    refetchOnFocus: true 
  })

  return(
    <>
      <div className='mt-5 mx-10'>
        <SearchTab search={search} setSearch={setSearch} />
      </div>
      <div>
        {isLoading && <Loader />}
        {isError && <ErrorMsg />}
        {data?.items.map(elem => <MiniRepoCard name={elem.name} author={elem.owner.login} stars={elem.stargazers_count} language={elem.language} key={elem.id}/>)}
      </div>
    </>
  )
}