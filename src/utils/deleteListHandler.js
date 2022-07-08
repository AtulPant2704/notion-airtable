const deleteListHandler = (data, listId) => {
  const newData = data.filter((list) => list.id !== listId);
  return newData;
};

export { deleteListHandler };
