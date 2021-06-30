import styled from "styled-components";
import Post from "./Post";

const StyledPost = styled(Post)`
  & > ul > li:hover {
    border: 2px solid #2196f3;
  }
  & > ul > li {
    position: relative;
    padding: 24px 0 4px 16px;
    float: left;
    width: 366px;
    height: 356px;
    list-style: none;
    border: 1px solid #e5e5e5;
    margin-right: 16px;
    margin-bottom: 16px;
    & > .status {
      position: absolute;
      top: 24px;
      right: 24px;
      font-size: 12px;
      font-weight: 500;
      padding: 2px 8px;
      border: 1px solid #ffa000;
      border-radius: 12px;
      color: #ffa000;
    }
    & > .client {
      margin-bottom: 24px;
    }
    & > .due {
      width: 334px;
      padding-bottom: 16px;
      margin-bottom: 32px;
      color: #939fa5;
      border-bottom: 1px solid #e5e5e5;
    }
    & > button {
      padding: 6px 12px;
      border-radius: 4px;
    }
    & > .request {
      margin-right: 4px;
      border: 0;
      background-color: #2196f3;
      color: #fff;
    }
    & > .chatting {
      background-color: #fff;
      color: #2196f3;
      border: 1px solid #2196f3;
    }
    & > div {
      font-size: 14px;
      margin-bottom: 38px;
      & > p {
        margin: 8px 0;
        & > span {
          margin-left: 32px;
          font-weight: 700;
        }
      }
    }
  }
  & > ul > li > h3 {
    margin: 0;
    margin-bottom: 4px;
    font-size: 16px;
  }
  & > ul > li > p {
    font-size: 14px;
    margin: 0;
  }
`;

export default StyledPost;
