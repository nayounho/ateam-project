import StyledHeader from "../containers/Header/Header.styled";
import Welcomepage from "containers/Welcomepage/Welcomepage";
import Posts from "containers/Posts/Posts";

const Main = () => {
  return (
    <>
      <StyledHeader />
      <Welcomepage />
      <Posts />
    </>
  );
};

export default Main;
