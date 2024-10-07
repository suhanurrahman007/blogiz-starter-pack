"use server"

import { BlogPost } from "@/types";

const createBlogs = async (data: BlogPost) => {
    const res = await fetch("http://localhost:5000/blogs", {
        method: "POST",
        headers: {
            "Content-Type": "application"
        },
        body: JSON.stringify(data),
        cache: "no-store"
    })

    const blogInfo = await res.json()

    return blogInfo;
};

export default createBlogs;