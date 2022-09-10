import React from 'react'
import { useSelector } from 'react-redux'
import {
  selectUserById
} from '../users/usersSlice'

export const PostAuthor = ({ userId }) => {
  const author = useSelector(state => selectUserById(state, userId)
  )

  return <small>by {author ? author.name : 'Unknown author'}</small>
}
