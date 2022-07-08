import { addCardHandler, editCardHandler, deleteCardHandler } from "utils";

const dataReducer = (state, action) => {
  switch (action.type) {
    case "ADD_NEW_CARD": {
      const { id, cardName } = action.payload;
      return addCardHandler(state, id, cardName);
    }
    case "EDIT_CARD": {
      const { listId, cardId, cardData } = action.payload;
      return editCardHandler(state, listId, cardId, cardData);
    }
    case "DELETE_CARD": {
      const { listId, cardId } = action.payload;
      return deleteCardHandler(state, listId, cardId);
    }
    default:
      return state;
  }
};

export { dataReducer };
