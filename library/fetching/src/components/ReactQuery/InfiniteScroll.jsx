import axios from 'axios';
import React from 'react';
import { useInfiniteQuery } from 'react-query';

export default function InfiniteScroll() {
    const fetchProjects = ({ pageParam = 0 }) => {
        return axios
            .get('/api/projects?page=' + pageParam)
            .then(res => res.data);
    };
    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
        status,
    } = useInfiniteQuery('projects', fetchProjects, {
        getNextPageParam: (lastPage, pages) => {
            return lastPage.nextCursor;
        },
    });

    return status === 'loading' ? (
        <p>Loading...</p>
    ) : status === 'error' ? (
        <p>Error: {error.message}</p>
    ) : (
        <>
            {data.pages.map((group, i) => (
                <React.Fragment key={i}>
                    {group.projects.map(project => (
                        <p key={project.id}>{project.name}</p>
                    ))}
                </React.Fragment>
            ))}
            <div>
                <button
                    onClick={() => fetchNextPage()}
                    disabled={!hasNextPage || isFetchingNextPage}
                >
                    {isFetchingNextPage
                        ? 'Loading more...'
                        : hasNextPage
                        ? 'Load More'
                        : 'Nothing more to load'}
                </button>
            </div>
            <div>
                {isFetching && !isFetchingNextPage ? 'Fetching...' : null}
            </div>
        </>
    );
}
