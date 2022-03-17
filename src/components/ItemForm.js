import React,{useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [newItem,setNewItem]=useState({
    name:"",
    category:'Produce'
  })


  function handleChangeName(e){
    setNewItem({...newItem, name:e.target.value})
  }

  function handleChangeCategory(e){
    setNewItem({...newItem, category:e.target.value})
  }
  function handleSubmit(e){
    e.preventDefault();
    const newElement={
      id: uuid(), 
      name: newItem.name,
      category: newItem.category,
    }
    onItemFormSubmit(newElement)
  }
  return (
    <form onSubmit={handleSubmit} className="NewItem">
      <label>
        Name:
        <input type="text" name="name" value={newItem.name} onChange={handleChangeName}/>
      </label>

      <label>
        Category:
        <select name="category" value={newItem.category} onChange={handleChangeCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
