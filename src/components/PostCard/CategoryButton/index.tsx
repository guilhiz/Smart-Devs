'use client';

import { MouseEvent } from 'react';
import { useRouter } from 'next/navigation';

const CategoryButton = () => {
  const router = useRouter();
  const handleCategoryClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    router.push('/categories/java');
  };
  return (
    <button onClick={handleCategoryClick} className="btn btn-secondary h-[1.1rem] min-h-[1.1rem] btn-xs ">
      Java
    </button>
  );
};

export default CategoryButton;
