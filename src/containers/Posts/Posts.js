import Title from "components/Title/Title";
import { useEffect, useState } from "react";
import Select from "../Select/Select";

const Posts = () => {
  const [renderList, setRendeList] = useState([]);

  useEffect(() => {
    const requestList = async () => {
      const data = await fetch("http://localhost:5000/requests");
      const list = await data.json();
      setRendeList(list);
    };
    requestList();
  }, []);

  return (
    <>
      <Select />
      <section>
        <ul>
          {renderList.map(list => {
            return (
              <li>
                <Title level={3}>{list.title}</Title>
                <span>{list.client}</span>
                <span>{list.due}</span>
                <span>도면개수 {list.count}</span>
                <span>총 수량 {list.amount} 개</span>
                <span>가공방식 {list.method}</span>
                <span>재료 {list.material}</span>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default Posts;

// const boom = async () => {
//   const data = await fetch("http://localhost:5000/requests");
//   const ateam = await data.json();
//   console.log(ateam);
// };
// boom();
