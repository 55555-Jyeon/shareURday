import { styled } from "styled-components";

const OneComment = ({ comment }) => {
  // console.log({ comment });

  return (
    <>
      <CommentBox>
        <UserInfoImg src={comment.User.profileImg}></UserInfoImg>
        <Comment>{comment.content}</Comment>
      </CommentBox>
    </>
  );
};
export default OneComment;

const CommentBox = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  border: 1px solid #ddd;
  border-radius: 50px;
  margin-bottom: 4px;
  cursor: pointer;
`;
const UserInfoImg = styled.img`
  margin-left: 10px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  padding-top: 5px;
`;
const Comment = styled.div`
  width: 100%;
  padding: 10px;
`;
