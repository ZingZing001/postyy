"use client";

export default function Toggle() {
  return (
    <>
      <div className="fixed bg-black opacity-20 w-full h-full z-20 left-0 top-0">
        <div className="absolute bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-12 rounded-lg flex flex-col gap-6">
          <h2 className="text-xl font-bold">
            Are you sure you want to delete this post?
          </h2>
          <h3 className="text-red-600 text-sm">
            Pressing the delete button will permanently delete this post.
          </h3>
          <button className="text-white bg-red-600 px-4 py-2 rounded-md">
            Delete Post
          </button>
        </div>
      </div>
      <Toggle />
    </>
  );
}
