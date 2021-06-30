import Title from "components/Title/Title";
import Paragraph from "components/Paragraph/Paragraph";
import { useEffect } from "react";

const Post = ({ listAll, setListAll, renderList, setRenderList }) => {
  useEffect(() => {
    setRenderList(listAll);
  }, [listAll]);

  return (
    <section>
      <ul>
        {renderList.map(list => {
          return (
            <li id={list.id} key={list.id}>
              <Title level={3}>{list.title}</Title>
              <span>{list.client}</span>
              <span>{list.due}</span>
              <Paragraph>
                도면개수<span>{list.count}</span>
              </Paragraph>
              <Paragraph>
                총 수량 <span>{list.amount}</span> 개
              </Paragraph>
              <Paragraph>
                가공방식 <span>{list.method}</span>
              </Paragraph>
              <Paragraph>
                재료 <span>{list.material}</span>
              </Paragraph>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Post;
