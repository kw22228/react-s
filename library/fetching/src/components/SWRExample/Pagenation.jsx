import React from 'react';
import useSWRInfinite from 'swr/infinite';
import axios from 'axios';

const fetcher = url => axios.get(url).then(res => res.data);
const getKey = (pageIndex, previousPageData) => {
    if (previousPageData && !previousPageData.length) return null;
    return `/api/users?page=${pageIndex}&limit=5`;
};

export default function Pagenation() {
    const { data, size, setSize } = useSWRInfinite(getKey, fetcher);
    if (!data) return 'loading...';

    let totalUsers = 0;
    for (let i = 0; i < data.length; i++) {
        totalUsers += data[i].length;
    }

    return (
        <div>
            <p>{totalUsers} users listed</p>
            {data.map((users, index) => {
                console.log(users);
                return users.map(users => (
                    <div key={users.id}>{users.name}</div>
                ));
            })}
            <button onClick={() => setSize(size + 1)}>Load More</button>
        </div>
    );
}
