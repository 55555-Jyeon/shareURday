import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <h2>HomePage</h2>
      {/* 일요일에 같이 할 때는 a태그 href 속성으로 했었는데... navigate() 어떻게 쓰더라 ㅇㅅㅇ  */}
      <Link to="/board">
        <button>입장</button>
      </Link>
    </>
  );
};
export default HomePage;
