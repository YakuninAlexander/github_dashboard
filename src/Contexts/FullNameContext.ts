import React from 'react'
import { createContext } from 'react'

export interface IRepoContext {
  repoUrl: string
  setRepoUrl: React.Dispatch<React.SetStateAction<string>>
}

const RepoInit = {
  repoUrl: '',
  setRepoUrl: (value: React.SetStateAction<string>) => {}
} as IRepoContext

export const FullNameContext = createContext(RepoInit)