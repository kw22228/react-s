import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Layout from '../../components/layout';

export default function FirstPost() {
    const router = useRouter();
    useEffect(() => {
        router.push('/posts/first-post/?count=10', undefined, {
            shallow: true,
        });
    }, []);

    useEffect(() => {
        alert(router.query.count);
    }, [router.query.count]);
    return (
        <Layout>
            <Head>
                <title>First Post</title>
                <meta name="author" content="jaewon" />
                <meta name="discription" content="Next.js" />
            </Head>
            <h1>First Post</h1>
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
        </Layout>
    );
}
