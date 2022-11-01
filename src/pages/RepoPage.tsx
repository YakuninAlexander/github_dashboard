import React from 'react';
import { Link } from 'react-router-dom';
import RepoCard from '../components/RepoCard';
import MainLayout from '../Layouts/MainLayout';

export default function RepoPage() {
  return(
    <MainLayout>
      <div className='max-w-fit mx-auto'>
          <RepoCard />
          <Link to={'/'}><button className='border mt-5  rounded-md p-2 bg-emerald-700 w-full'>Back to home...</button></Link>
      </div>
    </MainLayout>
  )
}