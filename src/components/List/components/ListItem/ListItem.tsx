import { IListItem } from "interfaces/IList";
import React, { useState } from "react";

const ListItem = (listItem: IListItem) => {
  return (
    <div>
      {listItem.isDone ? (
        <div>
          <input type="checkbox" />
          <li>{listItem.value}</li>
        </div>
      ) : (
        <div>
          <input type="checkbox" />
          <del>{listItem.value}</del>
        </div>
      )}
    </div>
  );
};

export default ListItem;
