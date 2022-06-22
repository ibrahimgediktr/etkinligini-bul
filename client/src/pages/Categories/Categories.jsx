import React from "react";

function Categories({categories}) {
  return (
    <div>
      <ul>
        {categories?.map((category) => (
          <li key={category.id}>
            <p>{category.name}</p>
            <p>{category.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
