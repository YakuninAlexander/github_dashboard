import React, { useContext } from 'react';
import { FullNameContext } from '../Contexts/FullNameContext';
import { useGetUserRepoQuery } from '../redux/github/github.api';

export default function RepoCard() {
  const {repoUrl} = useContext(FullNameContext);
  const {isLoading, isError, data} = useGetUserRepoQuery(repoUrl);

  console.log(data);
  
  return (
    <>
      <h1>Super repo</h1>
    </>
  )
}