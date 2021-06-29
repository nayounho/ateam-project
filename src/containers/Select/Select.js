import Paragraph from "components/Paragraph/Paragraph";

const Select = () => {
  return (
    <>
      <select name="processing-method" id="processingmethod-select">
        <option value="">가공방식</option>
        <option value="milling">밀링</option>
        <option value="shelf">선반</option>
      </select>
      <select name="material" id="material-select">
        <option value="">재료</option>
        <option value="aluminum">알루미늄</option>
        <option value="carbon-steel">탄소강</option>
        <option value="Copper">구리</option>
        <option value="alloy-steel">합금강</option>
        <option value="steel">강철</option>
      </select>
      <Paragraph>상담 중인 요청만 보기</Paragraph>
    </>
  );
};

export default Select;
