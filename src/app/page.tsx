import PostCard from '../components/PostCard';

const Home = () => {
  return (
    <section className="flex flex-col h-full">
      <div className="tabs">
        <a className="tab tab-bordered">Trending</a>
        <a className="tab tab-bordered tab-active">Latest</a>
        <a className="tab tab-bordered">Best</a>
      </div>
      <div className="flex flex-col bg-neutral w-full mt-4 ">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_p, i) => (
          <PostCard key={i} />
        ))}
      </div>

      <h1 className="text-center my-8 text-xl text-primary font-bold">Loading more...</h1>
    </section>
  );
};

export default Home;
