import { v4 as uuid } from "uuid";

const addListHandler = (data, listName) => {
  let newData = JSON.parse(JSON.stringify(data));
  newData = [...newData, { id: uuid(), name: listName, cards: [] }];
  return newData;
};

export { addListHandler };
