'use client';

import Link from 'next/link';
import { signOut } from 'next-auth/react';

const AvatarDropdown = ({ userImage }: { userImage: null | undefined | string }) => {
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          {userImage && <img src={userImage} />}
          {!userImage && (
            <img src="https://github-production-user-asset-6210df.s3.amazonaws.com/109693663/243429546-70592d7c-d1af-4a63-9e1b-49367c0f2c81.png" />
          )}
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li>
          <a>Settings</a>
        </li>
        {userImage && (
          <li>
            <a>Publish</a>
          </li>
        )}
        <li>
          {userImage && <p onClick={() => signOut()}>Logout</p>}
          {!userImage && <Link href="/auth/login">Login</Link>}
        </li>
      </ul>
    </div>
  );
};

export default AvatarDropdown;
