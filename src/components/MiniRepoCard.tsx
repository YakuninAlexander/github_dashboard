import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FullNameContext } from '../Contexts/FullNameContext'

interface MiniRepoCardProps {
  name: string,
  author: string,
  stars: number, 
  language: string, 
  fullName: string,
}

export default function MiniRepoCard({name, author, stars, language, fullName} : MiniRepoCardProps) {
  const {setRepoUrl} = useContext(FullNameContext)

  return(
    <Link to={'/Repo'}>
      <div onClick={()=>setRepoUrl(fullName)} className='border'>
        <h1>{name}</h1> 
        <p>{author}</p>
        <p>{stars}</p>
        <p>{language}</p>
      </div>
    </Link>
  )
}
