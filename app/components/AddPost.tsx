"use client";
import { useState } from "react";
import React from "react";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  return (
    <form className="bg-white my-8 p-8 rounded-md">
      <div className="flex flex-col my-4">
        <textarea
          onChange={(e) => setTitle(e.target.value)}
          name="title"
          value={title}
          placeholder="What's on your mind?"
          className="p-4 text-lg rounded-md my-2 bg-gray-200"
        ></textarea>
      </div>
      <div>
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
