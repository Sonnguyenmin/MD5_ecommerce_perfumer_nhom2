import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from '../api';
import { DELETE, GET, POST, PUT } from '../constants/httpMethod';

export const addComment = createAsyncThunk('commentUser', async (commentRequest) => {
  const res = await BASE_URL[POST]('user/comments', commentRequest);
  return res;
});

export const deleteCommentUser = createAsyncThunk('commentUser/delete', async (id) => {
  const res = await BASE_URL[DELETE](`user/comments/${id}`);
  return res;
});

export const approveComment = createAsyncThunk('commentAdmin/approve', async (id) => {
  const res = await BASE_URL[PUT](`admin/comments/${id}`);
  return res;
});

export const deleteComment = createAsyncThunk('commentUser/delete', async (id) => {
  const res = await BASE_URL[DELETE](`admin/comments/${id}`);
  return res;
});

export const searchCommentsByUserName = createAsyncThunk('commentUser/search', async ({ page, size, username }) => {
  const res = await BASE_URL[GET](`admin/comments?page=${page}&size=${size}&username=${username}`);
  return res.data;
});
