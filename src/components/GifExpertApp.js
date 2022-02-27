import React, { useState } from "react";
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  return (
    <>
      <h1>GifEnteApp</h1>
      <AddCategory categories={categories} setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => (
           <GifGrid category={category} key={category} />
           )
        )}
      </ol>
    </>
  );
};

export default GifExpertApp;
