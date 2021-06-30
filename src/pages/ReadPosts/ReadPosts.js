import Post from "containers/Post/Post";
import { useState, useEffect } from "react";
import Select from "../../containers/Select/Select";

const ReadPosts = () => {
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
    <>
      <Select renderList={renderList} setRenderList={setRenderList} listAll={listAll} setListAll={setListAll} />
      <Post renderList={renderList} setRenderList={setRenderList} listAll={listAll} setListAll={setListAll} />
    </>
  );
};

export default ReadPosts;
