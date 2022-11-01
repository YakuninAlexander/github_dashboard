import { IRepo } from '../../interfaces/repositories'
import { ISearchRepos } from '../../interfaces/repositories';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const githubApi = createApi({
  reducerPath: 'github/api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com' }),
  endpoints: (builder) => ({
    getRepos: builder.query<ISearchRepos, string>({
      query: (name) => ({
        url:`search/repositories`,
        params: {
          q: name,
          per_page: 10,
          sort: 'stars',
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