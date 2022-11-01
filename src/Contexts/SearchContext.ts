import React from 'react'
import { createContext } from 'react'

export interface ISearchContext {
  search: string
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

const SearchInit = {
  search: '',
  setSearch: (value: React.SetStateAction<string>) => {}
} as ISearchContext

export const SearchContext = createContext(SearchInit)