import axios from 'axios';
import React from 'react';
import useSWR, { SWRConfig, useSWRConfig } from 'swr';

const fetcher = url => axios.get(url).then(res => res.data);
const Page = () => {
    const { data } = useSWR('/api/user/123', fetcher);
    const { mutate } = useSWRConfig();

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>My name is {data.name}</h1>
            <button
                onClick={async () => {
                    const newName = data.name.toUpperCase();

                    //로컬 데이터를 즉시 업데이트 하지만 갱신은 비활성화
                    mutate('/api/user/123', { ...data, name: newName }, false);

                    //로컬 데이터가 올바른지 확인하기 위해 갱신(refetch) 트리거
                    // mutate('/api/user/123');
                }}
            >
                Uppercase my name!
            </button>
        </div>
    );
};

const Profile = () => {
    const { data, mutate } = useSWR('/api/user/124', fetcher); //여기서 mutate가 key를 받음

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>My name is {data.name}</h1>
            <button
                onClick={async () => {
                    const newName = data.name.toUpperCase();

                    //로컬 데이터를 즉시 업데이트 하지만 갱신은 비활성화
                    mutate({ ...data, name: newName }, false); //useSWR로 mutate선언시 key를 주지않아도 됨.

                    //로컬 데이터가 올바른지 확인하기 위해 갱신(refetch) 트리거
                    // mutate();
                }}
            >
                Uppercase my name!
            </button>
        </div>
    );
};
export default function Mutate() {
    return (
        <SWRConfig>
            <Page />
            <Profile />
        </SWRConfig>
    );
}
