import Paragraph from "../../components/Paragraph/Paragraph";
import Title from "../../components/Title/Title";

const Header = ({ className }) => {
  return (
    <div className={className}>
      <Title level={1}>CAPA 파트너스</Title>
      <Paragraph>A 가공업체</Paragraph>
      <Paragraph>로그아웃</Paragraph>
    </div>
  );
};

export default Header;
