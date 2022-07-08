const dragAndDropHandler = (data, dragItemIndex, dropItemIndex) => {
  let newData = JSON.parse(JSON.stringify(data));

  const draggedValue = newData[dragItemIndex.listIndex].cards.splice(
    dragItemIndex.cardIndex,
    1
  )[0];

  newData[dropItemIndex.listIndex].cards.splice(
    dropItemIndex.cardIndex,
    0,
    draggedValue
  );

  return newData;
};

export { dragAndDropHandler };
