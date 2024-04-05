import Layout from '../layout';
import BlogcardCategory from '~/globalComponents/BlogCardCategory';
import { api } from "~/utils/api";

const Category: React.FC = () => {
    const { data } = api.posts.getAll.useQuery();

    const cards: JSX.Element[] = [];
  
    if (data?.length) {
      for (const article of data) {
        cards.push(<BlogcardCategory {...article} key={article.id} />);
      }
    }

    const rowCount = Math.ceil(cards.length / 2); // Calculate the row count based on the number of cards

    return (
        <Layout>
            {Array.from({ length: rowCount }, (_, index) => (
                <div key={index} className="flex basis-6/12 flex-col">
                    {cards.slice(index * 2, index * 2 + 2)}
                </div>
            ))}
        </Layout>
    );
}

export default Category;
