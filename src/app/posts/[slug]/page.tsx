import Link from 'next/link';

import Footer from '../../../components/Footer';
import { Alien, House } from '../../../components/Icons';

const Post = () => {
  return (
    <section className="flex flex-col h-full">
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <Link href="/">
              <House className="cursor-pointer mr-1" size={22} color="#cccccc" />
              Home
            </Link>
          </li>
          <li>
            <a>Java</a>
          </li>
          <li>Send Email from your React app with Nodemailer</li>
        </ul>
      </div>
      <div className="w-full h-px bg-secondary mt-1 mb-3"></div>
      page <Alien size={52} color="#1c4f82" />
      <Footer />
    </section>
  );
};

export default Post;
