import LoadingCard from '@/components/ui/LoadingCard';
import { BlogPost } from '@/types';
import React from 'react';

const BlogLoadingPage = async() => {
  const res = await fetch(`http://localhost:5000/blogs`);
   const blogs = await res.json();
  return <div>
    {blogs.map((blog: BlogPost) => <LoadingCard key={blog.id} />)}
  </div>;
};

export default BlogLoadingPage;