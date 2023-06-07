import { Alien } from '../../../components/Icons';

const Post = () => {
  return (
    <section>
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Documents</a>
          </li>
          <li>Add Document</li>
        </ul>
      </div>
      page <Alien size={52} color="#1c4f82" />{' '}
    </section>
  );
};

export default Post;
