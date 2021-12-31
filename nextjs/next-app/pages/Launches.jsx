// import { useState, useEffect } from 'react';

export default function Launches({ data }) {
    // const [data, setData] = useState(null);

    // useEffect(() => {
    //     const fetchLaunches = async () => {
    //         const res = await fetch('https://api.spacexdata.com/v3/launches');
    //         const data = await res.json();

    //         setData(data);
    //     };

    //     fetchLaunches();
    // }, []);

    if (data == null) {
        return null;
    }
    return (
        <div>
            <ol>
                {data.map((launch, index) => {
                    return <li key={index}>{launch.mission_name}</li>;
                })}
            </ol>
        </div>
    );
}

export async function getStaticProps() {
    const res = await fetch('https://api.spacexdata.com/v3/launches');
    const data = await res.json();

    console.log('getStaticProps');
    return {
        props: { data },
    };
}

// export async function getServerSideProps() {
//     const res = await fetch('https://api.spacexdata.com/v3/launches');
//     const data = await res.json();

//     console.log('getServerProps');
//     return {
//         props: { data },
//     };
// }
