import React from 'react';
import { SWRConfig, useSWRConfig } from 'swr';
import { Avatar } from './Profile';

const Page = () => {
    const { cache, mutate } = useSWRConfig();
    return (
        <div>
            <Avatar id={1212} />
            <button
                onClick={() => {
                    mutate('/api/user/1212');
                    console.log(
                        `check: ${JSON.stringify(cache.get('/api/user/1212'))}`
                    );
                }}
            >
                Check
            </button>
        </div>
    );
};

export default function Cache() {
    return (
        <SWRConfig value={{ refreshInterval: 1000 }}>
            <Page />
        </SWRConfig>
    );
}
