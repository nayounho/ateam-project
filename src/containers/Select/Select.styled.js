import styled from "styled-components";
import Select from "./Select";

const StyledSelect = styled(Select)`
  display: flex;
  flex-flow: row;
  margin-bottom: 32px;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  & > section {
    position: absolute;
    right: 0;
    align-items: center;
  }
`;

export default StyledSelect;
