import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FullNameContext } from '../Contexts/FullNameContext'
import img from '../images/star.png'

interface MiniRepoCardProps {
  name: string,
  author: string,
  stars: number, 
  language: string, 
  fullName: string,
  visibility: string
}

export default function MiniRepoCard({name, author, stars, language, fullName, visibility} : MiniRepoCardProps) {
  const {setRepoUrl} = useContext(FullNameContext)

  const onClickHandler = () => {
    setRepoUrl(fullName);
    localStorage.setItem('name', fullName)
  }

  return(
    <Link to={'/Repo'}>
      <div onClick={()=>onClickHandler()} className='bg-emerald-700 w-full h-full text-gray-300 rounded-md shadow-md border p-3'>
        <h1 className='text-3xl font-medium text-center'>{name}</h1> 
        <h2 className='text-xl text-center mb-5'>{author}</h2>
        <div className='flex justify-between items-center mb-5'>
          <div className='flex w-20 justify-between items-center float-right'>
            <img src={img} alt='Stars:' className='w-8 h-8'/>
            <p>{stars}</p>
          </div>
          <p className='text-lg font-extralight'>Язык: {language}</p>
        </div>
        <p className='rounded-full border border-cyan-800 max-w-fit px-4 bg-cyan-600 '>{visibility}</p>
      </div>
    </Link>
  )
}
