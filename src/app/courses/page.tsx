"use client"

import { keepPreviousData, useQuery, useQueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useEffect, useState } from "react";
import CoursesFilter from "@/features/courses/filters";

const fetchTrainings = async (
  page = 0,
  size = 0,
): Promise<{
  projects: Array<{ name: string; id: number }>
  hasMore: boolean
}> => {
  const response = await fetch(`${process.env.API_BASE_URL}/rest/v1/trainings?networkId=${process.env.API_NETWORK_ID}&page=${page}&size=${size}`, {
    headers: {
      'client_id': process.env.API_CLIENT_ID || '',
      'client_secret': process.env.API_CLIENT_SECRET || '',
    }
  })
  return await response.json()
}


export default function CoursesPage() {
  const queryClient = useQueryClient()
  const [page, setPage] = useState(1)
  const [size, setSize] = useState(5)

  const { status, data, error, isFetching, isPlaceholderData } = useQuery({
    queryKey: ['repoData'],
    queryFn: () => fetchTrainings(page, size),
    placeholderData: keepPreviousData,
    staleTime: 5000,
  })

  useEffect(() => {
    if (!isPlaceholderData && data?.hasMore) {
      queryClient.prefetchQuery({
        queryKey: ['projects', page + 1],
        queryFn: () => fetchTrainings(page + 1),
      })
    }
  }, [data, isPlaceholderData, page, queryClient])

  return (
    <div className="container mx-auto py-16 space-y-4">
      <CoursesFilter />
      <div>
        <p>
          In this example, each page of data remains visible as the next page is
          fetched. The buttons and capability to proceed to the next page are also
          supressed until the next page cursor is known. Each page is cached as a
          normal query too, so when going to previous pages, you'll see them
          instantaneously while they are also refetched invisibly in the
          background.
        </p>
        {status === 'pending' ? (
          <div>Loading...</div>
        ) : status === 'error' ? (
          <div>Error: {error.message}</div>
        ) : (
          // `data` will either resolve to the latest page's data
          // or if fetching a new page, the last successful page's data
          <div>
            {data.projects?.map((project) => (
              <p key={project.id}>{project.name}</p>
            ))}
          </div>
        )}
        <div>Current Page: {page + 1}</div>
        <button
          onClick={() => setPage((old) => Math.max(old - 1, 0))}
          disabled={page === 0}
        >
          Previous Page
        </button>{' '}
        <button
          onClick={() => {
            setPage((old) => (data?.hasMore ? old + 1 : old))
          }}
          disabled={isPlaceholderData || !data?.hasMore}
        >
          Next Page
        </button>
        {
          // Since the last page's data potentially sticks around between page requests,
          // we can use `isFetching` to show a background loading
          // indicator since our `status === 'pending'` state won't be triggered
          isFetching ? <span> Loading...</span> : null
        }{' '}
        <ReactQueryDevtools initialIsOpen />
      </div>
    </div>
  );
}
