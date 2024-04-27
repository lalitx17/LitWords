import Layout from '../layout';
import BlogcardCategory from '~/globalComponents/BlogCardCategory';
import { api } from "~/utils/api";
import {useRouter} from 'next/router';

const Category: React.FC = () => {
    const router = useRouter();

    const tagName = router.query.slug as string;

    const { data } = api.posts.getbyTag.useQuery({ tag: tagName });

    const cards: JSX.Element[] = [];
  
    if (data?.length) {
      for (const article of data) {
        cards.push(<BlogcardCategory {...article} key={article.id} />);
      }
    }

    const rowCount = Math.ceil(cards.length / 2); // Calculate the row count based on the number of cards

    return (
        <Layout>
            <div className='my-4 p-4 border border-grey-200 mx-4 rounded-md'>
            <p className="text-4xl font-semibold text-center">{data?.[0]?.tags[0]}</p>
            </div>
            
            {Array.from({ length: rowCount }, (_, index) => (
                <div key={index} className="flex basis-6/12 flex-col">
                    {cards.slice(index * 2, index * 2 + 2)}
                </div>
            ))}
        </Layout>
    );
}

export default Category;

