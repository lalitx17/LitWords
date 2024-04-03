import Blogcard from "~/globalComponents/Blogcard";
import { api } from "~/utils/api";
import Banner from "~/globalComponents/Banner";

export default function BlogHouse() {
    const { data } = api.posts.getAll.useQuery();
  
    let blogNumber = 0;
    const cards: JSX.Element[] = [];
  
    if (data?.length) {
      for (const article of data) {
        cards.push(<Blogcard {...article} key={article.id} />);
      }
      blogNumber = data.length;
    }
  
    const rowCount = Math.floor(blogNumber/2); 
  
    return (
      <div className="flex flex-row flex-wrap content-evenly">
      <div className="flex basis-8/12 flex-row flex-wrap">
        {Array.from({ length: rowCount }, (_, index) => (
          <div key={index} className="flex basis-6/12 flex-col">
            {cards.slice(index*2, index*2+2)}
          </div>
        ))}
  
        { 
          (blogNumber % 2 !== 0) && (
            <div className="flex basis-6/12 flex-col">
            {cards.slice(-1)}
          </div>
          )
        }
        </div>
  
        <div className="flex basis-4/12 flex-col">
          <Banner />
          <Banner />
        </div>
      </div>
    );
  }