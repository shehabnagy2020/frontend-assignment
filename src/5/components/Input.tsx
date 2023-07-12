import { Dispatch, FunctionComponent, SetStateAction, useState } from "react";
import { DataArrProps } from "..";

/*
 * The InputProps interface defines the types for the components props.
 *
 * If you would like to proceed without defining types do the following:
 * const Input: FunctionComponent<any> = (props) => {
 *                                ^^^
 *
 * and remove the InputProps interface
 */

interface InputProps {
  setDataList: Dispatch<SetStateAction<DataArrProps[]>>;
  originalList: DataArrProps[];
}

const Input: FunctionComponent<InputProps> = ({
  originalList,
  setDataList,
}) => {
  const [searchVal, setSearchVal] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const id = "search";
  const placeholder = "Search";
  const type = "search";

  const handleChange = (val: string) => {
    if (val) {
      let newList = originalList.filter((i) =>
        i.name.toLowerCase().includes(val.toLowerCase())
      );
      setDataList([...newList]);
    } else setDataList(originalList);

    setSearchVal(val);
  };
  return (
    <div className="form-input-container">
      <label
        htmlFor={id}
        className={`form-input-title ${searchVal && "active"}`}
      >
        {placeholder}
      </label>

      <div className={`icon-input-container ${isFocused && "focused"}`}>
        <div className="">
          <input
            value={searchVal}
            onChange={(e) => handleChange(e.target.value)}
            type={type}
            placeholder={placeholder}
            className={`form-input`}
            id={id}
            onBlur={() => setIsFocused(false)}
            onFocus={() => setIsFocused(true)}
          />
        </div>
      </div>
    </div>
  );
};

export default Input;
