import React, { useState } from 'react';
import List from './ListOfItems.jsx';
const App = () => {
  const [listItems,inputSetItem] = useState();
  const [Items,setItems] = useState([]);
  const inputEvent=(event)=>{
     inputSetItem(event.target.value);
  }
  const Add=()=>{
    setItems((oldvalue)=>{
       return [...oldvalue,listItems];
    });
    inputSetItem("");
  };
  const deleteItems=(id)=>{
     setItems((oldvalue)=>{
       return oldvalue.filter((arrEle,index)=>{
           return index!==id;
       })
     })
  }
  return (
    <>
      <div className='main_div'>
        <div className='center_div'>
          <br />
          <h1>ToDo List</h1>
          <br />
          <input type="text" value={listItems} onChange={inputEvent} placeholder="Add an item" />
          <button onClick={Add}><b>+</b></button>
          <ul>
            {Items.map((Itemval,index)=>{
              return <List texts={Itemval} key={index} id={index} onSelect={deleteItems}/>;
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default App;
