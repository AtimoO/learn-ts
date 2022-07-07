import React, { FC } from "react";

export interface ListProps<T> {
  items: T[];
  rendetItem: (item: T) => React.ReactNode;
}

function List<T>(props: ListProps<T>) {

}

// const List = (): FC<ListProps> => {
//   return <div>List</div>;
// };
export default List;
