import styled from "styled-components";
import Header from "./Header";

const StyledHeader = styled(Header)`
  display: flex;
  align-items: center;
  height: 70px;
  color: #fff;
  background-color: #1565c0;
  position: relative;
  & > h1 {
    margin-left: 40px;
  }
  & > svg {
    display: none;
    height: 30px;
  }

  & > div {
    position: absolute;
    right: 0;
    display: flex;
    font-size: 14px;
    margin-right: 40px;

    & > p:first-child {
      border-right: 2px solid #fff;
      padding-right: 32px;
    }
    & > p {
      margin-right: 32px;
    }
  }

  @media (max-width: 360px) {
    & > svg {
      display: block;
      margin: 23px;
      cursor: pointer;
    }
    & > h1 {
      margin: 0;
    }
    & > div {
      display: none;
    }
  }
`;

export default StyledHeader;
