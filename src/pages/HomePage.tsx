import React, { useContext, useEffect, useState } from 'react';
import ErrorMsg from '../components/ErrorMsg';
import Loader from '../components/Loader';
import MiniRepoCard from '../components/MiniRepoCard';
import Paginator from '../components/Paginator';
import SearchTab from '../components/SearchTab';
import { MAX_PAGE } from '../const';
import { SearchContext } from '../Contexts/SearchContext';
import useDebounce from '../hooks/debounce';
import MainLayout from '../Layouts/MainLayout';
import { useGetReposQuery } from '../redux/github/github.api';

export default function HomePage( ) {
  const {search} = useContext(SearchContext)
  const [page, setPage] = useState(1);
  const debounced = useDebounce(search)
  

  useEffect(() => {
    setPage(1);
  }, [debounced])

  const {isLoading, isError, data} = useGetReposQuery({name: debounced,page}, {
    skip: debounced.length<1,
    refetchOnFocus: true
  })
  
  
  const lastPage = data ? Math.ceil(data!.total_count / 21) : 0 
  const lastResult = lastPage > MAX_PAGE ? MAX_PAGE : lastPage

  return(
    <MainLayout>
      <div className='mt-5'>
        <SearchTab />
      </div>

      <div>
        {isLoading && <Loader />}
        {isError && <ErrorMsg />}
        <div className='grid gap-4 grid-cols-3 justify-between my-8'>
          {data?.items.map(elem => {
            return (
              <MiniRepoCard 
                name={elem.name} 
                author={elem.owner.login} 
                stars={elem.stargazers_count} 
                language={elem.language} 
                fullName={elem.full_name} 
                visibility={elem.visibility}
                key={elem.id}
              />
            )
          })}
          </div>
      </div>
      <Paginator lastPage={lastResult} page={page} setPage={setPage} />
    </MainLayout>
  )
}