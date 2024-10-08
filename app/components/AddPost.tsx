"use client";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import React from "react";
import toast from "react-hot-toast";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const queryClient = useQueryClient();
  let toastPostID: string;

  //Create a Post
  const { mutate } = useMutation({
    mutationFn: (title: string) => axios.post("/api/posts/addPost", { title }),
    onSuccess: (data) => {
      toast.success("Post created successfully 🎉", { id: toastPostID });
      queryClient.invalidateQueries(["posts"]);
      setTitle("");
      setIsDisabled(false);
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        toast.error(error?.response?.data.message, { id: toastPostID });
      }
      setIsDisabled(false);
    },
  });

  const submitPost = async (e: React.FormEvent) => {
    e.preventDefault();
    toastPostID = toast.loading("Creating your post...", {
      id: toastPostID,
      duration: 1000,
    });
    setIsDisabled(true);
    mutate(title);
  };

  return (
    <form onSubmit={submitPost} className="bg-white my-8 p-8 rounded-md">
      <div className="flex flex-col my-4">
        <textarea
          onChange={(e) => setTitle(e.target.value)}
          name="title"
          value={title}
          placeholder="What's on your mind?"
          className="p-4 text-lg rounded-md my-2 bg-gray-200"
        ></textarea>
      </div>
      <div className="flex items-center justify-between gap-2">
        <p
          className={`font-bold text-sm ${
            title.length > 300 ? "text-red-700" : "text-grey-700"
          }`}
        >{`${title.length}/300`}</p>
        <button
          disabled={isDisabled}
          className="text-white text-sm px-6 py-2 rounded-xl bg-teal-600 disabled:opacity-25"
          type="submit"
        >
          Create a Post
        </button>
      </div>
    </form>
  );
}
