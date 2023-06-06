import { getServerSession } from 'next-auth';

import { authConfig } from '../../lib/auth';
import AvatarDropdown from '../ui/AvatarDropdown';
import DarkModeIcon from '../ui/DarkModeIcon';
import SearchForm from '../ui/SearchForm';

const Header = async () => {
  const session = await getServerSession(authConfig);
  return (
    <header className="navbar bg-base-100 px-8 fixed z-10 top-0 left-0">
      <div className="flex-1 gap-4">
        <a className="btn btn-ghost normal-case btn-circle text-xl" href="/">
          <img
            className="image-full"
            src="https://github-production-user-asset-6210df.s3.amazonaws.com/109693663/243430021-81938dba-bc88-4341-9113-c77dd011af21.png"
            alt="icon"
          />
        </a>
        <SearchForm />
      </div>
      <div className="flex-none gap-2">
        <DarkModeIcon />
        <AvatarDropdown userImage={session?.user?.image} />
      </div>
    </header>
  );
};

export default Header as unknown as () => JSX.Element;
