import StyledPost from "containers/Post/Post.styled";
import { useState, useEffect } from "react";
import StyledSelect from "containers/Select/Select.styled";

const ReadPosts = ({ className }) => {
  const [renderList, setRenderList] = useState([]);
  const [listAll, setListAll] = useState([]);

  useEffect(() => {
    const requestList = async () => {
      const data = await fetch("http://localhost:5000/requests");
      const list = await data.json();
      setListAll(list);
      console.log(listAll);
    };
    requestList();
  }, []);
  return (
    <div className={className}>
      <StyledSelect renderList={renderList} setRenderList={setRenderList} listAll={listAll} setListAll={setListAll} />
      <StyledPost renderList={renderList} setRenderList={setRenderList} listAll={listAll} setListAll={setListAll} />
    </div>
  );
};

export default ReadPosts;
