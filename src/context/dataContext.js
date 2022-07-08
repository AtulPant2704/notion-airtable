import { createContext, useReducer, useContext } from "react";
import { dataReducer } from "reducers";
import { data } from "data";

const initialData = JSON.parse(localStorage.getItem("data")) || data;

const DataContext = createContext(data);

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialData);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { DataProvider, useData };
