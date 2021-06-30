import Title from "components/Title/Title";
import Paragraph from "components/Paragraph/Paragraph";
import { useEffect } from "react";

const Post = ({ className, listAll, setListAll, renderList, setRenderList }) => {
  useEffect(() => {
    setRenderList(listAll);
  }, [listAll]);

  return (
    <section className={className}>
      <ul>
        {renderList.map(list => {
          return (
            <li id={list.id} key={list.id}>
              <Title level={3}>{list.title}</Title>
              {list.status === "상담중" ? <Paragraph className="status">{list.status}</Paragraph> : null}
              <Paragraph className="client">{list.client}</Paragraph>
              <Paragraph className="due">
                <span>{list.due}</span>까지 납기
              </Paragraph>
              <div className={className}>
                <Paragraph>
                  도면개수<span>{list.count}</span>
                </Paragraph>
                <Paragraph>
                  총 수량 <span>{list.amount + "개"}</span>
                </Paragraph>
                <Paragraph>
                  가공방식 <span>{list.method}</span>
                </Paragraph>
                <Paragraph>
                  재료 <span>{list.material}</span>
                </Paragraph>
              </div>
              <button className="request">요청 내역 보기</button>
              <button className="chatting">채팅하기</button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Post;
