import { IList, IListItem } from "interfaces/IList";
import { ListItem } from "./components";
const List = ({ todoData }: IList) => {
  console.log("check >>> ", todoData);
  return (
    <div key={todoData?.length}>
      {todoData?.map((item: IListItem) => {
        return <ListItem listItem={item} />;
      })}
    </div>
  );
};

export default List;
