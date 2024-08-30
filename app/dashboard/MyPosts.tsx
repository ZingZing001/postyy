"use client";

import { useQuery } from "@tanstack/react-query";
import { AuthPosts } from "../types/AuthPosts";
import axios from "axios";
import EditPost from "./EditPost";

const fetchAuthPosts = async () => {
  const response = await axios.get("/api/posts/authPosts");
  return response.data;
};

export default function MyPosts() {
  const { data, isLoading, isError } = useQuery<AuthPosts>({
    queryFn: fetchAuthPosts,
    queryKey: ["auth-Posts"],
  });
  if (isLoading) return <h1>Posts are loading...</h1>;
  console.log(data);

  return (
    <div>
      <h1>Data</h1>
      {data?.posts?.map((post) => (
        <EditPost
          key={post.id}
          id={post.id}
          avartar={data.image}
          name={data.name}
          title={post.title}
          comments={post.comments}
        />
      ))}
    </div>
  );
}
