import { useState } from "react";

const AddCategory = ({ onNewCategory }) => {

  const [inputValue, setInputValue] = useState('');

  const onInputChange = (event) => {
    setInputValue(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim().length <= 1) return
    onNewCategory(inputValue.trim())
    setInputValue('')

    // setCategories(categories => [inputValue, ...categories])
  }

  return (
    <form onSubmit={onSubmit}>
      <input 
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={(event) => onInputChange(event)}
      />
    </form>
  )
}

export default AddCategory;