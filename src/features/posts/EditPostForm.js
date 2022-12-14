import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useGetPostQuery, useEditPostMutation } from '../api/apiSlice'

export const EditPostForm = ({ match }) => {
  const { postId } = match.params

  const { data: post = {} } = useGetPostQuery(postId)
  const [updatePost, { isLoading }] = useEditPostMutation()

  const [title, setTitle] = useState(post.title)
  const [content, setContent] = useState(post.content)

  const history = useHistory()

  const onTitleChanged = (e) => setTitle(e.target.value)
  const onContentChanged = (e) => setContent(e.target.value)

  const onSavePostClicked = () => {
    if (title && content) {
      updatePost({ id: postId, title, content })
      history.push(`/posts/${postId}`)
    }
  }

  const canSave =
    [title, content].every(Boolean) && !isLoading

  return (
    <section>
      <h2>Edit Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          placeholder="What's on your mind?"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
      </form>
      <button
        disabled={!canSave}
        type="button" onClick={onSavePostClicked}>
        Save Post
      </button>
    </section>
  )
}
