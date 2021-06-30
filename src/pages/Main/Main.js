import StyledHeader from "../../containers/Header/Header.styled";
import Welcomepage from "containers/Welcomepage/Welcomepage";
import ReadPosts from "pages/ReadPosts/ReadPosts";

const Main = () => {
  return (
    <>
      <StyledHeader />
      <Welcomepage />
      <ReadPosts />
    </>
  );
};

export default Main;
