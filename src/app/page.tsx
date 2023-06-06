import PostCard from '../components/PostCard';

const Home = () => {
  return (
    <section className="flex flex-col  h-full mt-20">
      <div className="tabs">
        <a className="tab tab-bordered">Trending</a>
        <a className="tab tab-bordered tab-active">Latest</a>
        <a className="tab tab-bordered">Best</a>
      </div>
      <div className="flex flex-col bg-neutral w-full mt-4 ">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>

      <h1 className="text-center my-8 text-xl text-primary font-bold">Loading more...</h1>
    </section>
  );
};

export default Home;
