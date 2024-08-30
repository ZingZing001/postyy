"use client";

import AddComment from "@/app/components/AddComment";
import Post from "@/app/components/Post";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";

type URL = {
  params: {
    slug: string;
  };
};

const fetchDetails = async (slug: string) => {
  const response = await axios.get(`/api/posts/${slug}`);
  return response.data;
};

export default function PostDetail(url: URL) {
  const { data, isLoading } = useQuery({
    queryKey: ["detail-post"],
    queryFn: () => fetchDetails(url.params.slug),
  });
  if (isLoading) return <h1>Loading...</h1>;
  console.log(data);
  return (
    <div>
      <Post
        id={data?.id}
        name={data.user.name}
        avatar={data.user.image}
        postTitle={data.title}
        comments={data.Comment}
      />
      <AddComment id={data?.id} />
      {data?.Comment?.map((comment) => (
        <div key={comment.id} className="my-6 bg-white p-8 rounded-md">
          <div className="flex items-center gap-2">
            <Image
              src={comment.user.image}
              width={24}
              height={24}
              alt="avatar"
            />
            <h3 className="font-bold">{comment?.user?.name}</h3>
            <h2 className="text-sm">{comment.createdAt}</h2>
          </div>
          <div className="py-4">{comment.message}</div>
        </div>
      ))}
    </div>
  );
}
