import { useData } from "context";
import "./ListPopover.css";

const ListPopover = ({ listId }) => {
  const { dispatch } = useData();

  return (
    <div className="list-popover">
      <li
        className="color-item"
        onClick={() => dispatch({ type: "DELETE_LIST", payload: { listId } })}
      >
        Delete
      </li>
    </div>
  );
};

export { ListPopover };
