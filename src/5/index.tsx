import { FunctionComponent, useState } from "react";

// Components
import Input from "./components/Input";
import List from "./components/List";
import "./index.scss";

export type DataArrProps = {
  _id: number;
  name: string;
};
const originalList: DataArrProps[] = [
  { _id: 1, name: "Marion Ullrich" },
  { _id: 2, name: "Erik Stracke" },
  { _id: 3, name: "Leland Crooks" },
  { _id: 4, name: "Annette Christiansen" },
  { _id: 5, name: "Kathy Bergstrom Jr." },
  { _id: 6, name: "Jenna Conn" },
  { _id: 7, name: "Henry Stracke" },
  { _id: 8, name: "Patty Raynor" },
  { _id: 9, name: "Sonya McClure" },
  { _id: 10, name: "Stephen Dietrich" },
];

const Task4: FunctionComponent = () => {
  const [dataList, setDataList] = useState(originalList);

  return (
    <div className="list-container">
      <Input originalList={originalList} setDataList={setDataList} />
      <br />
      <List dataList={dataList} />
    </div>
  );
};

export default Task4;
