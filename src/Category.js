import React from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";

const Item = () => {
  const { name } = useParams();

  return (
    <div>
      <h3>{name}</h3>
    </div>
  );
};

const Category = () => {
  const { url, path } = useRouteMatch();

  return (
    <div>
     {/* Category */}
    </div>
  );
};

export default Category;
