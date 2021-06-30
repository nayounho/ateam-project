import Paragraph from "components/Paragraph/Paragraph";
import { useEffect, useState } from "react";

const Select = ({ className, setRenderList, listAll }) => {
  const [process, setProcess] = useState(false);
  const [selectState, setSelectState] = useState({ method: "", material: "" });

  const onChangeMethod = e => {
    const method = e.currentTarget.value;
    setSelectState(pre => ({ ...pre, method }));
  };
  const onChangeMaterial = e => {
    const material = e.currentTarget.value;
    setSelectState(pre => ({ ...pre, material }));
  };

  const onChangeStatus = e => {
    setProcess(e.target.checked);
  };

  useEffect(() => {
    const { method, material } = selectState;
    const temp = process ? listAll.filter(item => item.status === "상담중") : listAll;

    if (!method && !material) {
      setRenderList([...temp]);
    } else if (method && material) {
      setRenderList(temp.filter(item => item.method.find(str => str === method) && item.material.find(str => str === material)));
    } else if (!material) {
      setRenderList(temp.filter(item => item.method.find(str => str === method)));
    } else if (!method) {
      setRenderList(temp.filter(item => item.material.find(str => str === material)));
    }
  }, [selectState, process]);

  return (
    <div className={className}>
      <select onChange={onChangeMethod} name="processing-method" id="processingmethod-select">
        <option value="">가공방식</option>
        <option value="밀링">밀링</option>
        <option value="선반">선반</option>
      </select>
      <select onChange={onChangeMaterial} name="material" id="material-select">
        <option value="">재료</option>
        <option value="알루미늄">알루미늄</option>
        <option value="탄소강">탄소강</option>
        <option value="구리">구리</option>
        <option value="합금강">합금강</option>
        <option value="강철">강철</option>
        <option value="스테인리스강">스테인리스강</option>
      </select>
      <section className={className}>
        <input type="checkbox" onChange={onChangeStatus} />
        <Paragraph>상담 중인 요청만 보기</Paragraph>
      </section>
    </div>
  );
};

export default Select;
