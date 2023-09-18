import { createContext, useContext, useState } from "react";
import { MockPosts } from "../__mock__/mockPost";
import shortId from "shortid";
import { faker } from "@faker-js/faker";

const postContext = createContext();
export const useContextPost = () => useContext(postContext);

// Read post data
const ContextProvider = ({ children }) => {
  const [posts, setPosts] = useState(MockPosts(5));

  // Create post
  const addPost = (title, content, nickName, profileImg) => {
    setPosts((prev) => [
      {
        id: shortId.generate(),
        title,
        content,
        User: {
          id: shortId.generate(),
          nickName,
          profileImg,
        },
        Post_img: Array(Math.floor(Math.random() * 3) + 1)
          .fill()
          .map(() => faker.image.url()),
        Comments: {},
        createdAt: faker.date.between(
          "2023-01-01T00:00:00.000Z",
          "2023-01-31T00:00:00.000Z"
        ),
        myPost: true,
      },
      ...prev,
    ]);
  };

  // Update post
  const editPost = (id, title, content) => {
    const _MockPosts = [...MockPosts];
    const editPost = _MockPosts.find((el) => el.id === id);
    editPost.title = title;
    editPost.content = content;
    setPosts(_MockPosts);
  };

  // Delete post
  const deletePost = (e) => {
    const withoutPosts = posts.filter((el) => el.id !== e);
    setPosts(withoutPosts);
  };

  return (
    <postContext.Provider
      value={{ posts, setPosts, addPost, editPost, deletePost }}
    >
      {children}
    </postContext.Provider>
  );
};

export default ContextProvider;
