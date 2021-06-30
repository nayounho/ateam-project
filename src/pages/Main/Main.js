import StyledHeader from "../../containers/Header/Header.styled";
import StyledWelcomepage from "containers/Welcomepage/Welcomepage.styled";
import ReadPosts from "../ReadPosts/ReadPosts";

const Main = ({ className }) => {
  return (
    <div className={className}>
      <StyledHeader />
      <StyledWelcomepage />
      <ReadPosts />
    </div>
  );
};

export default Main;
