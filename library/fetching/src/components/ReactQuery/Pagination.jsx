import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

export default function Pagination() {
    const [page, setPage] = React.useState(0);

    const fetchProjects = (page = 0) =>
        axios.get('/api/projects?page=' + page).then(res => res.data);

    const { isLoading, isError, error, data, isFetching, isPreviousData } =
        useQuery(['projects', page], () => fetchProjects(page), {
            keepPreviousData: true, //이 option으로 인해서 데이터를 유지시키면서 가져올수있다.
        });

    return (
        <div>
            {isLoading ? (
                <div>Loading...</div>
            ) : isError ? (
                <div>Error: {error.message}</div>
            ) : (
                <div>
                    {data.projects.map(project => (
                        <p key={project.id}>{project.name}</p>
                    ))}
                </div>
            )}
            <span>Current Page: {page + 1}</span>
            <button
                onClick={() => setPage(old => Math.max(old - 1, 0))}
                disabled={page === 0}
            >
                Previous Page
            </button>{' '}
            <button
                onClick={() => {
                    if (!isPreviousData && data.hasMore) {
                        setPage(old => old + 1);
                    }
                }}
                // Disable the Next Page button until we know a next page is available
                disabled={isPreviousData || !data?.hasMore}
            >
                Next Page
            </button>
            {isFetching ? <span> Loading...</span> : null}{' '}
        </div>
    );
}
