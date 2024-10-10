import { Button, Input, Popconfirm } from 'antd';
import { Cookies } from 'react-cookie';
import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../../../../api';
import { formatDate } from '../../../../utils/formatData';
import { Link } from 'react-router-dom';

export default function ProductRelateReviews({ productId }) {
  const [content, setContent] = useState('');
  const [editContent, setEditContent] = useState('');
  const [editingCommentId, setEditingCommentId] = useState(null);

  const token = new Cookies().get('accessToken');
  const [comments, setComments] = useState([]);

  const getAllComment = async () => {
    const response = await BASE_URL.get(`/user/comments/productId/${productId}`);

    setComments(response?.data?.content.content);
  };

  const deleteComment = async (id) => {
    await BASE_URL.delete(`/user/comments/${id}`);

    getAllComment();
  };

  const updateContentComment = async (id) => {
    await BASE_URL.put(`/user/comments/${id}`, { content: editContent });

    setEditingCommentId(null);
    setEditContent('');
    getAllComment();
  };

  useEffect(() => {
    getAllComment();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await BASE_URL.post('/user/comments', {
      productId: productId,
      content: content,
    });

    setContent('');
    getAllComment();
  };

  return (
    <>
      {token ? (
        <div className="p-4 w-full">
          <form onSubmit={handleSubmit} className="comment-form">
            <Input.TextArea
              rows={4}
              placeholder="Viết bình luận ở đây..."
              onChange={(e) => setContent(e.target.value)}
              value={content}
            />
            <div className="flex justify-end mt-2">
              <Button type="primary" htmlType="submit" className="mt-2">
                Thêm bình luận
              </Button>
            </div>
          </form>

          {comments.length > 0 ? (
            <>
              {comments.map((comment) => (
                <div className="p-[20px_0_30px_0] border-b border-r-slate-400" key={comment.id}>
                  <div className="flex items-center space-x-4">
                    <div className="w-[50px] h-[50px]">
                      <img
                        className="w-full h-full rounded-full object-cover"
                        src={
                          comment.user.avatar ||
                          'https://phongreviews.com/wp-content/uploads/2022/11/avatar-facebook-mac-dinh-19.jpg'
                        }
                        alt=""
                      />
                    </div>
                    <div>
                      <h3 className="text-gray-800 text-[1.5rem] mt-2 font-semibold">
                        {comment.user.fullName || 'Người dùng ẩn danh'}
                      </h3>
                      <p className="text-gray-500 text-[1.3rem] mt-2">{formatDate(comment.createdAt)}</p>
                      {comment.user.id === token?.data?.id && (
                        <div className="mt-2 flex items-center gap-3 ">
                          <Popconfirm
                            okType="danger"
                            title="Xác nhận"
                            description="Bạn có muốn xóa bình luận này không?"
                            onConfirm={() => deleteComment(comment.id)}
                            okText="Xóa"
                            cancelText="Hủy"
                          >
                            <span className="text-[1.4rem] cursor-pointer px-3 py-2 rounded-[5px] leading-8 border hover:text-red-500 text-red-600">
                              Xóa
                            </span>
                          </Popconfirm>

                          <span
                            className="text-[1.4rem] cursor-pointer rounded-[5px]  px-3 py-2 leading-8 border hover:text-blue-300 text-blue-400"
                            onClick={() => {
                              setEditingCommentId(comment.id);
                              setEditContent(comment.content);
                            }}
                          >
                            Chỉnh sửa
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="mt-4">
                    {editingCommentId === comment.id ? (
                      <div>
                        <Input.TextArea
                          rows={4}
                          value={editContent}
                          onChange={(e) => setEditContent(e.target.value)}
                          placeholder="Chỉnh sửa bình luận..."
                        />
                        <div className="flex justify-end mt-2">
                          <Button type="primary" onClick={() => updateContentComment(comment.id)}>
                            Cập nhật
                          </Button>
                          <Button className="ml-2" onClick={() => setEditingCommentId(null)}>
                            Hủy
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <p className="text-gray-700 text-[1.4rem]">{comment.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </>
          ) : (
            <p className="text-center text-[20px] text-gray-800 font-medium mt-4">Chưa có bình luận</p>
          )}
        </div>
      ) : (
        <div className="flex items-center justify-center my-[50px] text-[2rem] text-[var(text-user-color)]">
          Bạn cần phải{' '}
          <Link to="/login" className="px-2 font-semibold">
            Đăng nhập
          </Link>{' '}
          để xem được bình luận
        </div>
      )}
    </>
  );
}
