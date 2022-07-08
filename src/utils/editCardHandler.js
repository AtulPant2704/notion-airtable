const editCardHandler = (data, listId, cardId, cardData) => {
  let newData = data.map((list) =>
    list.name === cardData.status
      ? { ...list, cards: [...list.cards, cardData] }
      : list.id === listId
      ? { ...list, cards: list.cards.filter((card) => card.id !== cardId) }
      : list
  );

  return newData;
};

export { editCardHandler };
