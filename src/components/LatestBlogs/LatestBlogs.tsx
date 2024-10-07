import { BlogPost } from "@/types";
import LatestBlogCard from "../ui/LatestBlogCard";
import BlogCard from "../ui/BlogCard";

const LatestBlogs = ({ blogs }: { blogs: BlogPost[] }) => {
  return (
    <div className="flex flex-col justify-center items-center py-7 space-x-5">
      <h1 className="text-2xl text-blue-400 font-bold">
        Latest Blogs from blogiz pack
      </h1>
      <p className="text-sm text-justify text-gray-500">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae enim
        quas distinctio asperiores natus recusandae
      </p>

      <div className="grid grid-cols-2 gap-5 pt-7 w-[90%]">
        {blogs.slice(0, 2).map((blog) => (
          <LatestBlogCard key={blog.id} blog={blog} />
        ))}
      </div>

      <div className="grid grid-cols-3 gap-4 pt-7 w-[90%]">
        {blogs.slice(2, 5).map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default LatestBlogs;
