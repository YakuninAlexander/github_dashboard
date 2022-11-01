import React from 'react';
import { Link } from 'react-router-dom';
import RepoCard from '../components/RepoCard';

export default function RepoPage() {
  return(
    <>
      <RepoCard />
      <Link to={'/'}> Back to home...</Link>
    </>
  )
}