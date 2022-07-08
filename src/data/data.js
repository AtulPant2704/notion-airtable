import { v4 as uuid } from "uuid";

const data = [
  {
    id: uuid(),
    name: "Completed",
    cards: [
      { id: uuid(), title: "Card 1", description: "", status: "Completed" },
      { id: uuid(), title: "Card 2", description: "", status: "Completed" },
      { id: uuid(), title: "Card 3", description: "", status: "Completed" },
    ],
  },
  {
    id: uuid(),
    name: "Not Completed",
    cards: [
      { id: uuid(), title: "Card 4", description: "", status: "Not Completed" },
      { id: uuid(), title: "Card 5", description: "", status: "Not Completed" },
    ],
  },
  {
    id: uuid(),
    name: "To Do",
    cards: [{ id: uuid(), title: "Card 6", description: "", status: "To Do" }],
  },
];

export { data };
