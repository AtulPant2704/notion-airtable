import { v4 as uuid } from "uuid";

const addCardHandler = (data, id, cardName, location) => {
  let newData = data;
  if (location === "top") {
    newData = newData.map((list) =>
      list.id === id
        ? {
            ...list,
            cards: [
              {
                id: uuid(),
                title: cardName || "Untitled",
                description: "",
                status: list.name,
              },
              ...list.cards,
            ],
          }
        : list
    );
  } else {
    newData = newData.map((list) =>
      list.id === id
        ? {
            ...list,
            cards: [
              ...list.cards,
              {
                id: uuid(),
                title: cardName || "Untitled",
                description: "",
                status: list.name,
              },
            ],
          }
        : list
    );
  }

  return newData;
};

export { addCardHandler };
