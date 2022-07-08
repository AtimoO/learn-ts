import React from "react";

export interface ListProps<T> {
  items: T[];
  rendetItem: (item: T) => React.ReactNode;
}

function List<T>(props: ListProps<T>) {
  return (
    <div>
      {props.items.map(props.rendetItem)}
    </div>
  )
}

// const List = (props: ListProps<any>) => {
//   return <div>{props.items.map(props.rendetItem)}</div>;
// };

export default List;
