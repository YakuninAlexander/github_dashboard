import { PER_PAGE } from './../../const';
import { IRepo } from '../../interfaces/repositories'
import { ISearchRepos } from '../../interfaces/repositories';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


interface queryParam {
  name: string
  page: number
}

// Define a service using a base URL and expected endpoints
export const githubApi = createApi({
  reducerPath: 'github/api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com' }),
  endpoints: (builder) => ({
    getRepos: builder.query<ISearchRepos, queryParam>({
      query: ({name, page}) => ({
        url:`search/repositories`,
        params: {
          q: name,
          per_page: PER_PAGE,
          sort: 'stars',
          page,
        }
      }),
    }),
    getUserRepo: builder.query<IRepo, string>({
      query: (fullName) => ({
        url: `repos/${fullName}`,
      })
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetReposQuery, useGetUserRepoQuery } = githubApi