import Title from "components/Title/Title";
import Paragraph from "components/Paragraph/Paragraph";

const Welcomepage = ({ className }) => {
  return (
    <div className={className}>
      <Title level={2}>들어온 요청</Title>
      <Paragraph>파트너님에게 딱 맞는 요청서를 찾아보세요.</Paragraph>
    </div>
  );
};

export default Welcomepage;
