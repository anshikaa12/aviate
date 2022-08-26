import { createContext, useContext, useReducer } from "react";
import { categoryReducer } from "../reducer/categoryReducer";
const categoryContext = createContext();
const useCategoryContext = () => useContext(categoryContext);
const CategoryProvider = ({ children }) => {
  const [categoryState, categoryDispatch] = useReducer(categoryReducer, {
    categories: "All",
  });
  return (
    <categoryContext.Provider value={{ categoryState, categoryDispatch }}>
      {children}
    </categoryContext.Provider>
  );
};
export { useCategoryContext, CategoryProvider };
