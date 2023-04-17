import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Dragon Ball']);

  const onAddCategory = (newValue) => {
    if (categories.includes(newValue)) return;
    setCategories([newValue, ...categories])
  }

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory
        onNewCategory={onAddCategory}
      />
      {categories.map((category) => (
        <GifGrid
          key={category}
          category={category} />
      )
      )}
    </>

  );
}

export default GifExpertApp;  