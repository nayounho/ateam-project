import styled from "styled-components";
import Welcomepage from "./Welcomepage";

const StyledWelcomepage = styled(Welcomepage)`
  margin: 0 auto;
  max-width: 1200px;
  & > p {
    font-size: 16px;
  }
  & > h2 {
    font-size: 20px;
  }
`;

export default StyledWelcomepage;
