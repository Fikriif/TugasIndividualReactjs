import { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import GroceryList from "./components/GroceryList";
import Footer from './components/Footer';

const groceryItems = [
  {
    id: 1,
    name: 'Coffie',
    quantity: 7,
    checked: true,
  },
  {
    id: 2,
    name: 'Gula Pasir',
    quantity: 2,
    checked: false,
  },
  {
    id: 3,
    name: 'Aqua',
    quantity: 5,
    checked: false,
  },
];

function App() {
  const [items, setItems] = useState(groceryItems); 

  function handleAddItem(item) {
    setItems ([...items, item]);
  }

  function handleDelete(id) {
    setItems((items) => items.filter((item) => item.id !==id));
  }

  function handleToggle(id) {
    setItems((items) => items.map((item) => (item.id === id ? {...item, checked: !item.checked} : item)));
  }
  
  function handleClear() {
    setItems([]);
  }


  return (
    <>
       <div className="app">
    <Header/>
    <Form onAddItem={handleAddItem} />
    <GroceryList items={items} onDeleteItem={handleDelete} onToggle={handleToggle} onClear={handleClear}/>
    <Footer items={items}/>
  </div>
    </>
  )
}

export default App
