import { FunctionComponent } from "react";
import { DataArrProps } from "..";

/*
 * The ItemProps interface defines the types for the components props.
 *
 * If you would like to proceed without defining types do the following:
 * const Input: FunctionComponent<any> = (props) => {
 *                                ^^^
 *
 * and remove the ItemProps interface
 */

interface ItemProps {
  item: DataArrProps;
}

const Item: FunctionComponent<ItemProps> = ({ item }) => {
  return (
    <li className="item">
      <button onClick={() => alert(`you choosed ${item.name}`)} className="">
        {item.name}
      </button>
    </li>
  );
};

export default Item;
