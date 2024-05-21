import React, {useEffect, useState } from "react";
import Blogcard from "~/globalComponents/Blogcard";
import { api } from "~/utils/api";
import Banner from "~/globalComponents/Banner";
import cookie from "js-cookie";

export default function BlogHouse() {
    const { data } = api.posts.getAll.useQuery();
    const [authed, setAuthed] = useState(false);

    const {data:userData} = api.posts.tokenQuery.useQuery({token: cookie.get("litwordRemembers") ?? ""});
  
    useEffect(() => {
      if (userData?.user) {
        console.log("Setting authed to true");
        setAuthed(true);
      } else {
        console.log("Setting authed to false");
        setAuthed(false);
      }
    }, [userData?.user]);

    let blogNumber = 0;
    const cards: JSX.Element[] = [];
  
    
    if (data?.length) {
      for (const article of data) {
        cards.push(<Blogcard {...article} authentication={authed} key={article.articleId} />);
      }
      blogNumber = data.length;
    }
  
    const rowCount = Math.floor(blogNumber/2); 
  
    return (
      <div className="flex flex-row flex-wrap content-evenly bg-secondaryBackground">
      <div className="md:flex md:basis-8/12 md:flex-row md:flex-wrap">
        {Array.from({ length: rowCount }, (_, index) => (
          <div key={index} className="flex basis-6/12 flex-col">
            {cards.slice(index*2, index*2+2)}
          </div>
        ))}
  
        { 
          (blogNumber % 2 !== 0) && (
            <div className="md:flex md:basis-6/12 md:flex-col">
            {cards.slice(-1)}
          </div>
          )
        }
        </div>
  
        <div className="md:flex md:basis-4/12 md:flex-col">
          <Banner />
          <Banner />
        </div>
      </div>
    );
  }