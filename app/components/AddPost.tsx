'use client'
import { useState } from "react"
import React from "react"

export default function CreatePost() {
  const [title, setTitle] = useState("")
  return (
    <form>
      <div>
        <textarea 
        onChange = {(e) => setTitle(e.target.value)}
        name="title"
        value = {title}
        placeholder="What's on your mind?"
        ></textarea>
      </div>
    </form>
  )
}