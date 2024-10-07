"use client"
import BlogCard from "@/components/ui/BlogCard";
import { useGetAllBlogsQuery } from "@/redux/api/baseApi";
import { BlogPost } from "@/types";



const BlogsPage = () => {

    const {data: blogs} = useGetAllBlogsQuery("")
    console.log(blogs)
//   const res = await fetch("http://localhost:5000/blogs", {
//     cache: "no-store"
//   });
//   const blogs = await res.json();

  return (
    <div className="flex flex-col justify-center items-center py-7 space-x-5">
      <h1 className="text-2xl text-blue-400 font-bold">
        All Blogs from blogiz pack
      </h1>
      <p className="text-sm text-justify text-gray-500">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae enim
        quas distinctio asperiores natus recusandae
      </p>

      <div className="grid grid-cols-3 gap-5 pt-7 w-[90%]">
        {blogs?.map((blog: BlogPost) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
