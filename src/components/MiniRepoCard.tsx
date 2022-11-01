import React from 'react';
import { Link } from 'react-router-dom';

interface MiniRepoCardProps {
  name: string,
  author: string,
  stars: number, 
  language: string
}

export default function MiniRepoCard({name, author, stars, language} : MiniRepoCardProps) {
  return(
    <Link to={'/Repo'}>
      <div className='border'>
        <h1>{name}</h1> 
        <p>{author}</p>
        <p>{stars}</p>
        <p>{language}</p>
      </div>
    </Link>
  )
}
