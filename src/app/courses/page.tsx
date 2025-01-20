"use client"

import TrainingCard from "@/components/trainingCard";
import { Training } from "@/types/training";
import { keepPreviousData, useInfiniteQuery, useQuery, useQueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const fetchTrainings = async (
  page = 0,
  size = 0,
): Promise<{
  // trainings: Array<{ name: string; id: number }>
  hasMore: boolean
}> => {
  const response = await fetch(`${process.env.API_BASE_URL}/rest/v1/trainings?networkId=${process.env.API_NETWORK_ID}&page=${page}&size=${size}&sort=lastUpdateDate,desc`, {
    headers: {
      'client_id': process.env.API_CLIENT_ID || '',
      'client_secret': process.env.API_CLIENT_SECRET || '',
    },
  })
  return await response.json()
}


export default function CoursesPage() {
  const queryClient = useQueryClient()
  const [page, setPage] = useState(1)
  const [size, setSize] = useState(5)

  // const { status, data, error, isFetching, isPlaceholderData, refetch } = useQuery({
  //   queryKey: ['repoData'],
  //   queryFn: () => fetchTrainings(page, size),
  //   placeholderData: keepPreviousData,
  //   staleTime: 5000,
  // })

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
    isPlaceholderData,
    refetch
  } = useInfiniteQuery({
    queryKey: ['trainings'],
    queryFn: ({ pageParam = 1 }) => fetchTrainings(pageParam, size),
    initialPageParam: 1,
    // getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
    getNextPageParam: (lastPage, allPages) => {
      console.log("🚀 ~ CoursesPage ~ lastPage:", lastPage)
      return lastPage.currentPage + 1;
    },
  })

  console.log("🚀 ~ CoursesPage ~ data:", data)


  // useEffect(() => {
  //   if (!isPlaceholderData && data?.hasMore) {
  //     queryClient.prefetchQuery({
  //       queryKey: ['trainings', page + 1],
  //       queryFn: () => fetchTrainings(page + 1),
  //     })
  //   }
  // }, [data, isPlaceholderData, page, queryClient])

  return (
    <div className="container mx-auto py-8 space-y-4">
      <div>
        <p className="text-brand-primary-dark pb-8">{data?.pages[0].totalElements} Course(s) available</p>
        {status === 'pending' ? (
          <div>Loading 1 ...</div>
        ) : status === 'error' ? (
          <div>Error: {error.message}</div>
        ) : (
          // `data` will either resolve to the latest page's data
          // or if fetching a new page, the last successful page's data
          <InfiniteScroll
            dataLength={data?.pages[0].totalElements}
            next={fetchNextPage}
            hasMore={true}
            loader={<h4>Loading 2...</h4>}
            endMessage={
              <p style={{ textAlign: 'center' }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          // below props only if you need pull down functionality
          // refreshFunction={refetch}
          // pullDownToRefresh
          // pullDownToRefreshThreshold={50}
          // pullDownToRefreshContent={
          //   <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
          // }
          // releaseToRefreshContent={
          //   <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
          // }
          // className=""
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {data && data?.pages && data.pages.length > 0 ? data.pages[0].data.map((training: Training, trainingIndex: number) => (
                <TrainingCard
                  key={trainingIndex}
                  title={training?.title}
                  modality={training?.modality}
                  defaultLanguage={training?.defaultLanguage}
                  duration={training?.duration}
                  description={training?.concernedFunction}
                  institute={training?.institute?.name}
                  href={training?.uri}
                />
              )) :
                <p>no results</p>}
            </div>
          </InfiniteScroll>
        )}

        {isFetching ? <span> Loading...</span> : null}
      </div>
    </div>
  );
}
