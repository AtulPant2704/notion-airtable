const deleteCardHandler = (data, listId, cardId) => {
  const newData = data.map((list) =>
    list.id === listId
      ? {
          ...list,
          cards: list.cards.filter((card) => card.id !== cardId),
        }
      : list
  );
  return newData;
};

export { deleteCardHandler };
