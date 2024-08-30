"use client";
import Image from "next/image";
import { useState } from "react";
import Toggle from "./Toggle";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

type EditProps = {
  id: string;
  avartar: string;
  name: string;
  title: string;
  comments?: {
    id: string;
    postId: string;
    userId: string;
  }[];
};

export default function EditPost({
  avartar,
  name,
  title,
  comments,
  id,
}: EditProps) {
  //Toggle
  const [toggle, setToggle] = useState(false);
  let deleteToastID: string;
  const queryClient = useQueryClient();

  //Delete Post
  const { mutate } = useMutation({
    mutationFn: (id: string) =>
      axios.delete("/api/posts/deletePost", { data: { id } }),
    onSuccess: (data) => {
      toast.success("Post deleted successfully 🎉", { id: deleteToastID });
      queryClient.invalidateQueries(["auth-posts"]);
    },
    onError: (error) => {
      toast.error("Error deleting post", { id: deleteToastID });
    },
  });

  const deletePost = () => {
    deleteToastID = toast.loading("Deleting your post...", {
      id: deleteToastID,
      duration: 1000,
    });
    mutate(id);
  };

  return (
    <>
      <div className="bg-white my-8 p-8 rounded-lg">
        <div className="flex item-center gap-2">
          <Image width={32} height={32} src={avartar} alt="avartar" />
          <h3 className="font-bold text-gray-700">{name}</h3>
        </div>
        <div className="my-8">
          <p className="break-all">{title}</p>
        </div>
        <div className="flex item-center gap-4">
          <p className="text-sm font-bold text-gray-700">
            {comments?.length} Comments
          </p>
          <button
            onClick={(e) => {
              setToggle(true);
            }}
            className="text-sm font-bold text-red-500"
          >
            Delete
          </button>
        </div>
      </div>
      {toggle && <Toggle deletePost={deletePost} setToggle={setToggle} />}
    </>
  );
}
