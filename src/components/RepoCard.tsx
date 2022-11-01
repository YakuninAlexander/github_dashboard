import React, { useContext } from 'react';
import { FullNameContext } from '../Contexts/FullNameContext';
import { useGetUserRepoQuery } from '../redux/github/github.api';
import star from '../images/star.png'
import watch from '../images/eye.png'

export default function RepoCard() {
  const {repoUrl} = useContext(FullNameContext);
  const {isLoading, isError, data} = useGetUserRepoQuery(repoUrl);


  return (
    <div className=' mx-auto max-h-fit p-5 bg-emerald-700 text-gray-100 rounded-md shadow-md mt-10 px-10'>
      <h1 className='text-3xl font-medium text-center'>{data?.name}</h1>
      <h3 className='text-2xl font-light text-center mb-5'>{data?.owner.login}</h3>
      <div className='flex gap-x-5 mb-5'>
        <img src={data?.owner.avatar_url} alt='Avatar' className='rounded-full w-52 h-52'></img>
        <div className='max-w-[500px]'>
          <p className='text-xl mb-5'>Description: {data?.description}</p>
          <div className='flex justify-between items-center mb-3'>
          <div className='flex w-20 justify-between items-center '>
            <img src={star} alt='Stars:' className='w-8 h-8'/>
            <p>{data?.stargazers_count}</p>
          </div>
          <div className='flex w-20 justify-between items-center '>
            <img src={watch} alt='Watchers:' className='w-8 h-8'/>
            <p>{data?.watchers_count}</p>
          </div>
          <p className='text-lg font-extralight'>Язык: {data?.language}</p>
        </div>
        <p className='text-xl italic mb-5'>Дата последнего коммита: {data?.pushed_at.replaceAll('-','.').replaceAll('T',' ').replaceAll('Z',' ')}</p>  
        <a className='border border-cyan-900 bg-emerald-800 p-1 rounded-md  my-3' href={data?.html_url} rel="noreferrer" target='_blank'>{data?.html_url}</a>
        </div>
      </div>
    </div>
  )
}