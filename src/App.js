import React, { useState } from "react";
import Accordion from "./Components/Accordion";
import Convert from "./Components/Convert";
import Dropdown from "./Components/Dropdown";
import Search from "./Components/Search";
import Translate from "./Components/Translate";

const items=[
    {
        title:"What is React?",
        content:"React is Frontend and Javascript Framework"
    },
    {
        title:"Why use React",
        content:"React is a Favorite Js Library among engineers"
    },
    {
        title:"How do you use React",
        content:"You use React by creating component"
    }
];
const options=[
    {
        label:'The color Red',
        value:'red'
    },
    {
        label:'The color Green',
        value:'Green'
    },
    {
        label:'The Shade of Blue',
        value:'Blue'
    },
];

export default  () => {
    // const [selected,setselected]=useState(options[0]);
    // const[showDropdown,setShowDropdown]=useState(true);
  return (
    <div>
        {/* <button onClick={()=>setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
        { showDropdown ?
        <Dropdown selected={selected} 
        onselectedChange={setselected}
        options={options}/> :null
} */}
{/* <Convert/> */}
{/* <Dropdown/> */}
<Search/>
<Translate/>
<br/>
    </div>
  )
}

