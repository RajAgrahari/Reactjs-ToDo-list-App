import React from 'react';

const List = (props) => {
   return (
   <>
   <div className="listDeco">
   <button onClick={()=>{props.onSelect(props.id)}}><b>-</b></button>
   <li>{props.texts}</li>
   </div>
   </>
   )}
export default List;