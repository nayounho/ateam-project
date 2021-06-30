import StyledHeader from "../../containers/Header/Header.styled";
import StyledReadPosts from "pages/ReadPosts/ReadPosts.styled";
import StyledWelcomepage from "containers/Welcomepage/Welcomepage.styled";

const Main = ({ className }) => {
  return (
    <div className={className}>
      <StyledHeader />
      <StyledWelcomepage />
      <StyledReadPosts />
    </div>
  );
};

export default Main;
