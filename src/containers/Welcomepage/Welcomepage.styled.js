import styled from "styled-components";
import Welcomepage from "./Welcomepage";

const StyledWelcomepage = styled(Welcomepage)`
  margin-left: 155px;
  & > p {
    font-size: 16px;
  }
  & > h2 {
    font-size: 20px;
  }
`;

export default StyledWelcomepage;
