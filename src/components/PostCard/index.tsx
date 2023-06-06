'use client';

import { Bookmarks, SealCheck } from '@phosphor-icons/react';

const PostCard = () => {
  return (
    <div className="card card-compact w-full h-[7.8rem] bg-neutral text-neutral-content border-secondary border-b">
      <div className="flex items-center gap-1 mt-2">
        <div className="avatar ml-4 cursor-pointer">
          <div className="w-7 rounded-full">
            <img src="https://github-production-user-asset-6210df.s3.amazonaws.com/109693663/243429546-70592d7c-d1af-4a63-9e1b-49367c0f2c81.png" />
          </div>
        </div>
        <p className="ml-1 hover:text-info-content cursor-pointer">ChickenJoe</p>
        <SealCheck size={18} color="#31A1D6" weight="bold" />
        <p className="text-secondary ml-2">mai 23, 2023</p>
      </div>
      <div className="card-body -mt-4">
        <h2 className="card-title">Send Email from your React app with Nodemailer</h2>
        <p className="-mt-4">
          Sending email is one of the most demanded features in most applications. Here we will implement one ourselves.
        </p>
        <div className="card-actions">
          <div className="btn btn-secondary h-[1.1rem] min-h-[1.1rem] btn-xs ">Java</div>
          <div className="btn btn-secondary h-[1.1rem] min-h-[1.1rem] btn-xs ">Java</div>
          <div className="btn btn-secondary h-[1.1rem] min-h-[1.1rem] btn-xs ">Java</div>
        </div>
      </div>
      <div className="flex gap-2 items-center absolute top-2 right-6 text-secondary">
        14 min read
        <Bookmarks className="cursor-pointer hover:opacity-60" size={20} color="#cccccc" />
      </div>
    </div>
  );
};

export default PostCard;
