import Link from 'next/link';

import { House } from '../../../components/Icons';
import PostCard from '../../../components/PostCard';

const Category = () => {
  return (
    <section className="flex flex-col h-full mb-5">
      <h1 className="text-6xl font-bold text-primary relative max-w-fit mt-8">
        Java <span className="badge rounded-badge badge-info absolute -top-3 -right-24">10 articles</span>
      </h1>
      <p className="w-3/6 mt-3 text-secondary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis nisi sed turpis vulputate viverra.
        Morbi ligula elit, hendrerit non nisl tincidunt, sodales consequat magna.
      </p>
      <div className="text-sm breadcrumbs flex justify-end pr-3">
        <ul>
          <li>
            <Link href="/">
              <House className="cursor-pointer mr-1" size={22} color="#cccccc" />
              Home
            </Link>
          </li>
          <li>Java</li>
        </ul>
      </div>
      <div className="w-full h-px bg-secondary mt-2 mb-10"></div>
      <div className="tabs">
        <a className="tab tab-bordered">Trending</a>
        <a className="tab tab-bordered tab-active">Latest</a>
        <a className="tab tab-bordered">Best</a>
      </div>
      <div className="flex flex-col bg-neutral w-full mt-4 ">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => (
          <Link href="posts/1">
            <PostCard />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Category;
