import Layout from '../layout';
import BlogcardCategory from '~/globalComponents/BlogCardCategory';
import { api } from "~/utils/api";
import {useRouter} from 'next/router';


const Categories: React.FC = () => {
    const router = useRouter();

    const type = router.query.type as string;


    if (!type) return <div>Loading...</div>;

    const { data } = api.posts.getbyTag.useQuery({ tag: type });

    const cards: JSX.Element[] = [];
  
    if (data?.length) {
      for (const article of data) {
        cards.push(<BlogcardCategory {...article} key={article.articleId} />);
      }
    }

    const rowCount = Math.ceil(cards.length / 2); // Calculate the row count based on the number of cards

    const toTitleCase = (str: string) => {
        return str
            .toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    return (
        <Layout>
            <div className='my-4 p-4 border border-grey-200 mx-4 rounded-md'>
            <p className="text-4xl font-semibold text-center text-black">{toTitleCase(type)}</p>
            </div>
            
            {cards.length > 0 && (
                Array.from({ length: rowCount }, (_, index) => (
                    <div key={index} className="flex basis-6/12 flex-col">
                        {cards.slice(index * 2, index * 2 + 2)}
                    </div>
                ))
            )}

            {cards.length === 0 && (
                <div className="text-center text-2xl font-semibold text-black">No articles found</div>
            )}
        </Layout>
    );
}

export default Categories;

