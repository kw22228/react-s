import axios from 'axios';
import React from 'react';
import useSWR, { SWRConfig } from 'swr';

const Page = () => {
    const { data, error } = useSWR('/api/user/123', {
        onErrorRetry: (error, key, config, revalidate, { retryCount }) => {
            if (error.response.status === 400) {
                alert('404');
                return;
            }
            if (retryCount > 3) {
                return;
            }

            setTimeout(() => revalidate({ retryCount }), 1000);
        },
    });

    if (error) {
        return <div>error...</div>;
    }
    if (!data) {
        return <div>Loading...</div>;
    }

    return <div>{data.name}</div>;
};
export default function Fetcher() {
    return (
        <SWRConfig
            value={{
                //전역에 fetcher추가
                fetcher: (...args) => axios.get(...args).then(res => res.data),
            }}
        >
            <Page />
        </SWRConfig>
    );
}
