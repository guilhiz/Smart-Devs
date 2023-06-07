import Link from 'next/link';

import Footer from '../../../components/Footer';
import { BookmarksSimple, CaretDown, CaretUp, House, SealCheck } from '../../../components/Icons';

const Post = () => {
  return (
    <>
      <section className="flex flex-col h-full  ">
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
        <div className="w-full h-px bg-secondary mt-2 mb-10"></div>
        <div className="flex gap-12 flex justify-end  relative pb-20">
          <article className="bg-neutral text-neutral-content w-[49rem]">
            <div className="border-secondary border-b p-4 mb-4">
              <div className="flex items-center gap-1 hover:text-info-content mb-2">
                <div className="avatar cursor-pointer">
                  <div className="w-7 rounded-full">
                    <img src="https://github-production-user-asset-6210df.s3.amazonaws.com/109693663/243429546-70592d7c-d1af-4a63-9e1b-49367c0f2c81.png" />
                  </div>
                </div>
                <p className="ml-1 cursor-pointer">ChickenJoe</p>
                <SealCheck size={18} color="#31A1D6" weight="bold" />
                <p className="text-secondary ml-2 text-sm">
                  Posted on May 9 <span className="px-2">·</span> 5 min read{' '}
                </p>
              </div>
              <h2 className="font-bold text-lg text-info-content">
                Sending email is one of the most demanded features in most applications. Here we will implement one
                ourselves.
              </h2>
            </div>
            <div className="p-4 prose prose-slate prose-lg prose-pre:bg-base-100">
              <p>
                Sending an email in nodejs is a breeze thanks to NodeMailer. Let me walk you through the process of
                sending an email using NodeMailer.
              </p>
              <p className="mt-4">firstly install nodemailer in your node application.</p>
              <pre className="language-js">
                <code className="language-js">npm install --save nodemailer</code>
              </pre>
              <p className="mt-4">after installing the nodemailer, in your main node.js file require the nodemailer</p>
              <pre className="language-js">
                <code className="language-js">{`var nodemailer = require('nodemailer');`}</code>
              </pre>

              <p className="mt-4">
                nodemailer needs a transport service using which it can send emails. In this example I am using gmail.
              </p>
              <p className="mt-4">inside your node.js file write</p>

              <pre className="language-js">
                <code className="language-js">
                  {`var transporter = nodemailer.createTransport({

                  youremail@address.com',

});`}
                </code>
              </pre>
            </div>
          </article>
          <aside className="bg-neutral text-neutral-content w-52 h-full">
            <div className="h-16 bg-secondary-content text-info-content font-medium text-lg flex items-center justify-center border-b border-secondary">
              Recent Posts
            </div>
            {[1, 2, 3, 4, 5, 6, 7, 8].map(() => (
              <div className="min-h-16 text-neutral-content flex flex-col justify-center p-2 border-b border-secondary hover:bg-neutral-focus cursor-pointer">
                <p className="text-info-content text-sm">Sentinels part ways with dep</p>
                <span className="text-secondary text-xs">ChickenJoe · 19h</span>
              </div>
            ))}
          </aside>
          <div className="absolute top-2 left-20 flex flex-col items-center">
            <CaretUp className="cursor-pointer hover:opacity-60" size={32} color="#cccccc" weight="fill" />
            <p>0</p>
            <CaretDown className="cursor-pointer hover:opacity-60" size={32} color="#cccccc" weight="fill" />

            <BookmarksSimple className="cursor-pointer hover:opacity-60 mt-8" size={32} color="#cccccc" weight="fill" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Post;
