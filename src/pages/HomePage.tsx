import React, { useContext } from 'react';
import ErrorMsg from '../components/ErrorMsg';
import Loader from '../components/Loader';
import MiniRepoCard from '../components/MiniRepoCard';
import SearchTab from '../components/SearchTab';
import { SearchContext } from '../Contexts/SearchContext';
import useDebounce from '../hooks/debounce';
import MainLayout from '../Layouts/MainLayout';
import { useGetReposQuery } from '../redux/github/github.api';

export default function HomePage( ) {
  const {search} = useContext(SearchContext)
  const debounced = useDebounce(search)


  const {isLoading, isError, data} = useGetReposQuery(debounced, {
    skip: debounced.length<1,
    refetchOnFocus: true
  })

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
    </MainLayout>
  )
}