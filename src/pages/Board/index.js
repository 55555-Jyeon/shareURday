import { useContextPost } from "../../context/ctxPost";
import AddPostForm from "./component/AddPostForm";
import OnePost from "./component/OnePost";
import { styled } from "styled-components";

const BoardPage = () => {
  const { posts } = useContextPost();

  return (
    <>
      <Wrapper>
        <AddPostForm />
        <BoardPosts>
          {posts.map((post) => (
            <OnePost key={post.id} post={post} />
          ))}
        </BoardPosts>
      </Wrapper>
    </>
  );
};
export default BoardPage;

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  position: relative;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
`;

const BoardPosts = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 15%;
`;
