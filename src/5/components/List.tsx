import React, { FunctionComponent } from "react";

// Components
import Item from "./Item";
import { DataArrProps } from "..";

/*
 * The ListProps interface defines the types for the components props.
 *
 * If you would like to proceed without defining types do the following:
 * const Input: FunctionComponent<any> = (props) => {
 *                                ^^^
 *
 * and remove the ListProps interface
 */

interface ListProps {
  dataList: DataArrProps[];
}

const List: FunctionComponent<ListProps> = ({ dataList }) => {
  return (
    <div className="items-list">
      {dataList?.length > 0 ? (
        dataList.map((it, idx) => (
          <React.Fragment key={idx}>
            <Item item={it} />
            {idx < dataList.length - 1 && <div className="item-sep" />}
          </React.Fragment>
        ))
      ) : (
        <div className="no-result">No result found, try another query</div>
      )}
    </div>
  );
};

export default List;
