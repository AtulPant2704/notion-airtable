import { v4 as uuid } from "uuid";

const addCardHandler = (data, id, cardName) => {
  const newData = data.map((list) =>
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

  return newData;
};

export { addCardHandler };
