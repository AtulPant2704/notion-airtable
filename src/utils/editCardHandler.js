const editCardHandler = (data, listId, cardId, cardData) => {
  const newData = data.map((list) =>
    list.id === listId
      ? {
          ...list,
          cards: list.cards.map((card) =>
            card.id === cardId ? cardData : card
          ),
        }
      : list
  );
  return newData;
};

export { editCardHandler };
