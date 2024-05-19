import Layout from '../layout';
import BlogcardCategory from '~/globalComponents/BlogCardCategory';
import { api } from "~/utils/api";
import {useRouter} from 'next/router';
import { useEffect, useState } from 'react';

const Categories: React.FC = () => {
    const router = useRouter();

    const [slug, setSlug] = useState<string>("");

    useEffect(() => {
        if (router.isReady) {
            setSlug(router.query.slug as string);
        }
    }, [router.isReady, router.query.slug]);
    

    if (!slug) return <div>Loading...</div>;

    const { data } = api.posts.getbyTag.useQuery({ tag: slug });

    const cards: JSX.Element[] = [];
  
    if (data?.length) {
      for (const article of data) {
        cards.push(<BlogcardCategory {...article} key={article.articleId} />);
      }
    }

    const rowCount = Math.ceil(cards.length / 2); // Calculate the row count based on the number of cards

    return (
        <Layout>
            <div className='my-4 p-4 border border-grey-200 mx-4 rounded-md'>
            <p className="text-4xl font-semibold text-center text-black">{slug}</p>
            </div>
            
            {Array.from({ length: rowCount }, (_, index) => (
                <div key={index} className="flex basis-6/12 flex-col">
                    {cards.slice(index * 2, index * 2 + 2)}
                </div>
            ))}
        </Layout>
    );
}

export default Categories;

