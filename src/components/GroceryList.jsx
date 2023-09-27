import { useState } from "react";
import Item from "./Item";

export default function GroceryList({items, onDeleteItem, onToggle, onClear}) {


    const [sortBy, setSortBy] = useState('input');
    let sortItems;
  
    switch (sortBy){
      case 'name' :
        sortItems = items.slice().sort((a,b) => a.name.localeCompare(b.name));
        break;
      case 'checked' :
        sortItems = items.slice().sort((a,b) => a.checked - b.checked);
        break;
      default:
        sortItems = items;
        break;
    }
  
    return(
      <>
        <div className="list">
        <ul>
          {sortItems.map((item) => (
            <Item item={item} key={item.id} onDeleteItem={onDeleteItem} onToggle={onToggle}/>
          ))}
          
        </ul>
      </div>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Urutkan berdasarkan urutan input</option>
          <option value="name">Urutkan berdasarkan nama barang</option>
          <option value="checked">Urutkan berdasarkan ceklis</option>
        </select>
        <button onClick={onClear}>Bersihkan Daftar</button>
      </div>
      </>
    )
  }