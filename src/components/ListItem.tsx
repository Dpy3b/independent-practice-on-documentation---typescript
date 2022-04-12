import React, {FC} from "react";

interface ListItemProps {
	value: number;
}

const ListItem:FC<ListItemProps> = (props) => {
  return <li>{props.value}</li>;
};

export default ListItem;
