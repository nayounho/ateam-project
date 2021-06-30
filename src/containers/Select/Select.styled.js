import styled from "styled-components";
import Select from "./Select";

const StyledSelect = styled(Select)`
  display: flex;
  flex-flow: row;
  margin-bottom: 32px;
  /* width: 1200px; */
  position: relative;
  & > section {
    position: absolute;
    right: 0;
    align-items: center;
  }
`;

export default StyledSelect;
