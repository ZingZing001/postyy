"use client";
import exp from "constants";
import Image from "next/image";
import { useState } from "react";

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
  return (
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
        <button className="text-sm font-bold text-red-500">Delete</button>
      </div>
    </div>
  );
}
