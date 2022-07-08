import { useState } from "react";
import { useData } from "context";
import { Card } from "components";
import "./List.css";

const List = ({
  id,
  name,
  cards,
  listIndex,
  dragItemIndex,
  setDragItemIndex,
}) => {
  const { dispatch } = useData();
  const [displayCardInput, setDisplayCardInput] = useState(false);
  const [cardName, setCardName] = useState("");

  const addNewCard = () => {
    dispatch({ type: "ADD_NEW_CARD", payload: { id, cardName } });
    setDisplayCardInput(false);
    setCardName("");
  };

  const cardInputHandler = (e) => {
    if (e.key === "Enter") {
      addNewCard();
    }
  };

  return (
    <>
      <div
        className="list"
        onDragEnter={() =>
          !cards.length
            ? dispatch({
                type: "DRAG_AND_DROP",
                payload: {
                  dragItemIndex,
                  dropItemIndex: { listIndex, cardIndex: 0 },
                  from: "list",
                },
              })
            : null
        }
      >
        <div className="list-heading">
          <p className="list-name">{name}</p>
          <p className="list-card-count">{cards.length}</p>
        </div>
        <div className="list-body">
          {cards.map((card, index) => (
            <Card
              id={card.id}
              {...card}
              listId={id}
              listIndex={listIndex}
              cardIndex={index}
              dragItemIndex={dragItemIndex}
              setDragItemIndex={setDragItemIndex}
            />
          ))}
        </div>
        <div className="list-footer">
          {displayCardInput ? (
            <input
              className="card-input"
              placeholder="Type a name..."
              autoFocus
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
              onKeyDown={cardInputHandler}
              onBlur={addNewCard}
            />
          ) : null}
          <button
            className="list-new-card-btn"
            onClick={() => setDisplayCardInput(true)}
          >
            + New
          </button>
        </div>
      </div>
    </>
  );
};

export { List };
