import Paragraph from "../../components/Paragraph/Paragraph";
import Title from "../../components/Title/Title";
import { ReactComponent as Menubar } from "../../assets/images/menubar.svg";

const Header = ({ className }) => {
  const onClickMenu = e => {
    e.target.classList.toggle("active");
  };
  return (
    <div className={className}>
      <Menubar onClick={onClickMenu} className="menubar" />
      <Title level={1}> CAPA 파트너스</Title>
      <div className={className}>
        <Paragraph>A가공업체</Paragraph>
        <Paragraph>로그아웃</Paragraph>
      </div>
    </div>
  );
};

export default Header;
