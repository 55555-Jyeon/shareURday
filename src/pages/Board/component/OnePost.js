import { useRef, useState } from "react";
import { styled } from "styled-components";
import OneComment from "./OneComment";
import { useContextPost } from "../../../context/ctxPost";

const OnePost = ({ post }) => {
  // post CRUD logic
  const { editPost, deletePost } = useContextPost();

  // edit & update
  // check edit mode
  const [isEditMode, setIsEditMode] = useState(false);

  const titleRef = useRef("");
  const contentRef = useRef("");

  const onEditPost = () => {
    if (editPost) {
      setIsEditMode(false);
    } else {
      setIsEditMode(true);
      editPost(post.id, titleRef.current.value, contentRef.current.value);
    }
  };

  // delete
  const onDeletePost = () => {
    const deleteThis = post.id;
    if (window.confirm("정말 게시글을 삭제하시겠습니까?")) {
      deletePost(deleteThis);
      alert("게시글이 삭제되었습니다.");
    }
  };

  // show comments onClick
  const [isShowComment, setIsShowComment] = useState(false);

  const onClickShowComments = () => {
    setIsShowComment((prev) => !prev);
  };

  return (
    <>
      <Wrapper>
        <Container>
          <Header>
            <UserInfoImg src={post.User.profileImg} />
            <UserInfo>
              <div>{post.User.nickName}</div>
            </UserInfo>
            <ButtonBox>
              <Button onClick={onEditPost}>edit</Button>
              <Button onClick={onDeletePost}>delete</Button>
            </ButtonBox>
          </Header>
          <PostContent>
            <PostImg src={post.Post_img} />
            <Date>{post.createdAt.toString()}</Date>
            <div>{post.id}</div>
            {isEditMode ? (
              <div>
                <input name="title" ref={titleRef} />
                <textarea name="content" ref={contentRef}></textarea>
              </div>
            ) : (
              <div>
                <h3>{post.title}</h3>
                <div>{post.content}</div>
              </div>
            )}
          </PostContent>
          <CommentButton onClick={onClickShowComments}>comments</CommentButton>
          {isShowComment &&
            post.Comments.map((comment, index) => (
              <OneComment key={index} comment={comment} />
            ))}
        </Container>
      </Wrapper>
    </>
  );
};
export default OnePost;

const Wrapper = styled.div`
  box-sizing: border-box;
  /* background-color: #efefef; */
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.05);
`;
const Header = styled.div`
  position: relative;
  display: flex;
  width: 79%;
  padding: 0.5%;
  /* background-color: #f8f8f8; */
`;
const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
`;
const UserInfoImg = styled.img`
  margin-left: 10px;
  width: 55px;
  height: 55px;
  border-radius: 50%;
`;
const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  margin-top: 12px;
  margin-left: 20px;
  font-weight: 800;
  font-size: 20px;
  font-style: italic;
  color: #59109b;
  cursor: pointer;
`;
const PostImg = styled.img`
  width: 100%;
  padding-top: 5px;
`;
const ButtonBox = styled.div`
  position: absolute;
  right: 0;
  top: 20%;
`;
const Button = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  margin-right: 10px;
  font-size: 10px;
  cursor: pointer;
  &:hover {
    background-color: #59109b;
    color: white;
    transition: all 0.6s;
  }
`;
const Date = styled.span`
  font-size: 12px;
  color: #8d8d88;
  padding: 5px;
`;
const CommentButton = styled.button`
  border: none;
  border-radius: 4px;
  width: 20%;
  padding: 5px;
  margin: 8px;
  cursor: pointer;
  &:hover {
    background-color: #59109b;
    color: white;
    transition: all 0.6s;
  }
`;
