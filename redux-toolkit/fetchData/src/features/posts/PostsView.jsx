import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./PostSlice";

const PostsView = () => {
  const { isLoading, posts, error } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts);
  });

  return (
    <div>
      {isLoading && <h3>is loading .......</h3>}
      {error && <h3>{error}</h3>}
      {posts.map((post) => {
        const { title, body } = post;
        return (
          <article>
            <h5>{title}</h5>
            <p>{body}</p>
          </article>
        );
      })}
    </div>
  );
};

export default PostsView;
