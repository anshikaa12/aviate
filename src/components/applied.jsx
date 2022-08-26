import React from "react";
import AppliedJobs from "./appliedJobs";
import { categories } from "../database/categoriesDB";
import { useCategoryContext } from "../context/categoryContext";
function Applied() {
  const { categoryDispatch } = useCategoryContext();
  return (
    <div className="applied-box flex-col">
      <h1 className="h1-text">Applied Jobs</h1>
      <div className="status-filter flex-row">
        {categories.map((category) => {
          return (
            <button
              className="tab"
              onClick={() =>
                categoryDispatch({ type: "CATEGORYTYPE", payload: category })
              }
            >
              {category}
            </button>
          );
        })}
      </div>
      <AppliedJobs />
    </div>
  );
}

export default Applied;
