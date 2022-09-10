import { configureStore, } from '@reduxjs/toolkit'
import postsSlice from '../features/posts/postsSlice'
import notificationsSlice from '../features/notifications/notificationsSlice';
import { apiSlice } from '../features/api/apiSlice';

export default configureStore({
  reducer: {
    posts: postsSlice,
    notifications: notificationsSlice,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware)
})

