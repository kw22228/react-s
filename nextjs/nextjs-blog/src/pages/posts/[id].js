import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Date from '../../components/date';
import Layout from '../../components/layout';
import { getPostData } from '../../lib/posts';
import utilStyles from '../../styles/utils.module.css';

export async function getStaticPaths() {
    // const paths = getAllPostIds();

    return {
        paths: [{ params: { id: 'ssg-ssr' } }],
        // paths,
        fallback: true,
    };
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);

    return {
        props: {
            postData,
        },
    };
}

// export async function getServerSideProps({ params, req }) {
//     console.log(`req.coockies: ${JSON.stringify(req.cookies)}`);
//     const postData = await getPostData(params.id);

//     return {
//         props: {
//             postData,
//         },
//     };
// }

export default function Post({ postData }) {
    const router = useRouter(); //fallback check

    useEffect(() => {
        const getText = async () => {
            const res = await fetch('/api/hello');
            const data = await res.json();

            // console.log(data);
        };

        getText();
    }, []);

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1>Jaewon Blog</h1>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date} />
                </div>
            </article>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </Layout>
    );
}
