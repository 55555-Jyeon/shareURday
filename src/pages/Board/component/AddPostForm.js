import styled from "styled-components";
import { useContextPost } from "../../../context/ctxPost";

const AddPostForm = ({ userNickName, profileImg }) => {
  const { addPost } = useContextPost();

  const onSubmitPost = (e) => {
    e.preventDefault();
    const { title, content } = e.target;
    addPost(title.value, content.value, userNickName, profileImg);
  };

  return (
    <Wrapper>
      <Title>POST YOUR BEST MOMENT OF TODAY</Title>
      <Form onSubmit={onSubmitPost}>
        <SubTitle>Create Post</SubTitle>
        <Input name="title" placeholder="How was your day?" />
        <Textarea name="content" placeholder="Spill all them out!" />
        <SubmitButton>POST</SubmitButton>
      </Form>
    </Wrapper>
  );
};

export default AddPostForm;

const Wrapper = styled.div`
  position: relative;
  margin-top: 5%;
`;

const Form = styled.form`
  width: 49%;
  height: 200px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  /* background-color: #eee; */
`;

const Title = styled.h2`
  text-align: center;
  color: #ddd;
  text-shadow: 1px 1px white, -1px -1px #888;
`;

const SubTitle = styled.h4`
  font-size: 20px;
  color: #bbb;
  text-shadow: 1px 1px white, -1px -1px #333;
  margin: 12px 0;
`;

const Input = styled.input`
  width: 45%;
  height: 36px;
  padding-top: 4px;
  padding-left: 12px;
  margin-bottom: 12px;
  border: none;
  box-shadow: rgb(204, 204, 204) 3px 3px 6px 0px inset,
    rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
  color: #59109b;
`;

const Textarea = styled.textarea`
  width: 45%;
  height: 120px;
  padding-top: 10px;
  padding-left: 12px;
  margin-bottom: 12px;
  border: none;
  box-shadow: rgb(204, 204, 204) 3px 3px 6px 0px inset,
    rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
  color: #59109b;
`;

const SubmitButton = styled.button`
  width: 47%;
  padding: 6px;
  margin: 10px 0;
  border: none;
  border-radius: 50px;
  font-weight: bold;
  box-shadow: rgb(204, 204, 204) 3px 3px 6px 0px inset,
    rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
  &:hover {
    transition: box-shadow ease-in-out 1s;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  }
`;
